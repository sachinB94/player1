// @flow
import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';

import { getIcon } from './icon';

// export default class IconButtonComponent extends Component {
//   static defaultProps = {
//     icon: '',
//     iconStyle: {},
//     style: {},
//     onClick: () => {}
//   };
//
//   props: {
//     icon: string,
//     iconStyle: {},
//     style: {},
//     onClick: () => void
//   };
//
//   render() {
//     const { icon, style, iconStyle, onClick } = this.props;
//
//     return (
//       <IconButton style={style} iconStyle={iconStyle} onClick={onClick}>
//         {getIcon(icon)}
//       </IconButton>
//     );
//   }
// }

export default ({ icon, style, iconStyle, onClick }) => (
  <IconButton style={style} iconStyle={iconStyle} onClick={onClick}>
    {getIcon(icon)}
  </IconButton>
);
