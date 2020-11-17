import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import BackButton from 'assets/images/arrow-left.png';
import './styles.scss';

import { Button, InputForm } from 'components';

const Popup = ({
  className,
  id,
  value,
  name,
  showPopup,
  submit,
  onChange,
  onClick,
  handleClickClosePopup,
  children
}) => {
  const classNames = classname('m-popup', className, {
    'show-popup': showPopup,
    'release': !submit
  });
  return (
    <div className={classNames}>
      <div className='inner-popup'>
        <div className='centered-popup'>
          <div className='content-popup'>
            <button
              className='popup-button-close'
              type='button'
              onClick={handleClickClosePopup}
            >
              <img src={BackButton} alt='back-button' className='arrow-back' />
            </button>
            {submit && (
              <div className='submit-popup'>
                <InputForm 
                  id={id}
                  type='text'
                  name={name}
                  value={value}
                  placeholder='Input Nickname'
                  onChange={onChange}
                />
                <Button
                  className='popup-submit'
                  type='button'
                  onClick={onClick}
                >
                  Submit
                </Button>
              </div>
            )}
            {!submit && (
              <div className='detail-popup'>
                <h2>Release Pokemon ?</h2>
                {children}
                <Button
                  className='popup-submit'
                  type='button'
                  onClick={onClick}
                >
                  Release
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

Popup.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  showPopup: PropTypes.bool,
  submit: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  handleClickClosePopup: PropTypes.func,
  children: PropTypes.node
};

Popup.defaultProps = {
  className: '',
  id: '',
  name: '',
  value: '',
  showPopup: false,
  submit: false,
  onChange: '',
  onClick: () => {},
  handleClickClosePopup: () => {},
  children: {}
};

export default Popup;