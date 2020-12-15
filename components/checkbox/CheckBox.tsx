import React from 'react';
import PropTypes from 'prop-types';

import { CheckBoxProps, KindMap } from './interface';

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const prefixCls = 'aladdin-checkbox';

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { kind } = props;
  return (
    <div
      className={prefixCls}
      style={{
        background: kinds[kind],
      }}
    >
      Hello CheckBox!
      {kind}
    </div>
  );
};

CheckBox.propTypes = {
  kind: PropTypes.oneOf(['info', 'positive', 'negative', 'warning']),
};

CheckBox.defaultProps = {
  kind: 'info',
};

export default CheckBox;
