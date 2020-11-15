import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

import {
  NavLink,
  HashRouter
} from 'react-router-dom';

const Card = ({className, onClick, type, children}) => {
  const classNames = classname('a-card', className);
  return (
    <HashRouter>
      <div className={classNames}>
        <NavLink className='card-anchor' to='/list' replace>
          {children} 
        </NavLink>
      </div>
    </HashRouter>
  )
};

Card.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  className: '',
  onClick: () => {},
  type: 'button',
  children: {}
};

export default Card;