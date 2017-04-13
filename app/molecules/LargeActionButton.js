import React from 'react';

import { ActionButton } from '../atoms';

const LargeActionButton = props => (
  <ActionButton iconStyle={{ width: 170, height: 170 }} {...props} />
);

export default LargeActionButton;
