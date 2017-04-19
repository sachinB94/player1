import React from 'react';

import { ActionButton } from '../atoms';

const LargeActionButton = props => (
  <ActionButton iconStyle={{ width: 150, height: 150 }} {...props} />
);

export default LargeActionButton;
