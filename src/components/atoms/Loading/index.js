import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Loading = ({ className, show }) => {
  const classNames = classname('a-loading', className, {
    show: show,
  });
  return (
    <div className={classNames}>
      <svg>
        <circle cx="70" cy="70" r="70" />
      </svg>
    </div>
  );
};

Loading.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
};

Loading.defaultProps = {
  className: '',
  show: false,
};

export default Loading;
