import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props) => {
    const { a } = props;
    return (
        <div className="aladdin-checkbox">
            Hello CheckBox!
            {a}
        </div>
    );
};

CheckBox.propTypes = {
    a: PropTypes.string,
};

CheckBox.defaultProps = {
    a: 'a',
};

export default CheckBox;
