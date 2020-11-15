import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

import {
  NavLink,
  HashRouter
} from 'react-router-dom';

const Button = ({
  className,
  type,
  onClick,
  variant,
  route,
  children
}) => {
  const classNames = classname('a-button', className, {
    route: route
  });
  return (
    <Fragment>
      {route && (
        <div className={classNames}>
          <HashRouter>
            <NavLink to='/details' className='anchor-button' />
          </HashRouter>
          <p>{children}</p>
        </div>
      )}
      {!route && (
        <button 
          className={classNames} 
          type={type} 
          variant={variant} 
          onClick={onClick}
        >
            {children}
        </button>
      )}
    </Fragment>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  route: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Button.defaultProps = {
  className: '',
  type: 'button',
  route: false,
  variant: '',
  onClick: () => {},
  children: {}
};

export default Button;