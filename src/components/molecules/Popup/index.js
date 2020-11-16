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
  onChange,
  onClick,
  handleClickClosePopup
}) => {
  const classNames = classname('m-popup', className);
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
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  handleClickClosePopup: PropTypes.func
};

Popup.defaultProps = {
  className: '',
  id: '',
  name: '',
  value: '',
  onChange: '',
  onClick: () => {},
  handleClickClosePopup: () => {}
};

export default Popup;