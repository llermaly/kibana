import React from 'react';
import { EuiButtonEmpty } from '@elastic/eui';

const Component = ({ context }) => {
  console.log(context);
  return (
    <ul>
      <li>
        <EuiButtonEmpty>Export Report</EuiButtonEmpty>
      </li>
      <li>
        <EuiButtonEmpty>View Exports</EuiButtonEmpty>
      </li>
    </ul>
  );
};

export default Component;
