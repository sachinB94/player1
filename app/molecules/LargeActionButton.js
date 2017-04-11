import React from 'react';

import { ActionButton } from '../atoms';

const LargeActionButton = props => (
  <ActionButton iconStyle={{ width: 120, height: 120 }} {...props} />
);

export default LargeActionButton;
