import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';

let menu;
let template;
let mainWindow = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support'); // eslint-disable-line
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')(); // eslint-disable-line global-require
  const path = require('path'); // eslint-disable-line
  const p = path.join(__dirname, '..', 'app', 'node_modules'); // eslint-disable-line
  require('module').globalPaths.push(p); // eslint-disable-line
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

const installExtensions = async () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer'); // eslint-disable-line global-require

    const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;

    // TODO: Use async interation statement.
    //       Waiting on https://github.com/tc39/proposal-async-iteration
    //       Promises will fail silently, which isn't what we want in development
    return Promise.all(
      extensions.map(name => installer.default(installer[name], forceDownload))
    ).catch(console.log);
  }
};

app.on('ready', async () => {
  await installExtensions();

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: path.join(__dirname, '../resources/icon.ico')
  });

  mainWindow.maximize();

  mainWindow.loadURL(`file://${__dirname}/app.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools();
    mainWindow.webContents.on('context-menu', (e, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([
        {
          label: 'Inspect element',
          click() {
            mainWindow.inspectElement(x, y);
          }
        }
      ]).popup(mainWindow);
    });
  }

  if (process.platform === 'darwin') {
    template = [
      {
        label: 'Player1',
        submenu: [
          {
            label: 'Quit',
            accelerator: 'Command+Q',
            click() {
              app.quit();
            }
          }
        ]
      },
      {
        label: 'Contact',
        submenu: [
          {
            label: 'sachinbansal94@gmail.com'
          }
        ]
      }
    ];

    menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  } else {
    template = [
      {
        label: '&File',
        submenu: [
          {
            label: '&Close',
            accelerator: 'Ctrl+W',
            click() {
              mainWindow.close();
            }
          }
        ]
      },
      {
        label: 'Contact',
        submenu: [
          {
            label: 'sachinbansal94@gmail.com',
          }
        ]
      }
    ];
    menu = Menu.buildFromTemplate(template);
    mainWindow.setMenu(menu);
  }
});
