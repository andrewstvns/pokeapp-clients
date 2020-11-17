import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

import {
  HashRouter,
  NavLink
} from 'react-router-dom';

const Header = ({
  className
}) => {
  const classNames = classname('m-header', className);
  return (
    <div className={classNames}>
      <div className='container'>
        <div className='row'>
          <div className='header-centering'>
            <ul className='header-list'>
              <HashRouter>
                <NavLink to='/'>
                  <li className='header-content'>
                    Pokemon List
                  </li>
                </NavLink>
                <NavLink to='/list'>
                  <li className='header-content'>
                    My Pokemon
                  </li>
                </NavLink>
              </HashRouter>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ''
};

export default Header;