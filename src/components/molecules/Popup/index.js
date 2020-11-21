import React, { useState,} from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import CloseButton from 'assets/images/icon-close.png';
import './styles.scss';

import { Button, InputForm } from 'components';

const Popup = ({
  className,
  id,
  value,
  name,
  title,
  showPopup,
  submit,
  onChange,
  onClick,
  handleClickClosePopup,
  children
}) => {

  const onClickClosePopup = () => {
    handleClickClosePopup();
    document.body.classList.remove('remove-scroll');
  }
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
              onClick={onClickClosePopup}
            >
              <img src={CloseButton} alt='back-button' className='arrow-close' />
            </button>
            {submit && (
              <div className='submit-popup'>
                <h2>{title}</h2>
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
                {children}
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
  title: PropTypes.string,
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
  title: '',
  value: '',
  showPopup: false,
  submit: false,
  onChange: () => {},
  onClick: () => {},
  handleClickClosePopup: () => {},
  children: {}
};

export default Popup;