import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const InputForm = ({
  className,
  id,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  spellCheck,
  input,
}) => {
  const classNames = classname('a-input-form', className);
  return (
    <Fragment>
      <input
        className={classNames}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        spellCheck={spellCheck}
        {...input}
      />
    </Fragment>
  );
};

InputForm.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  spellCheck: PropTypes.bool,
  input: PropTypes.object,
};

InputForm.defaultProps = {
  className: '',
  id: '',
  type: 'text',
  name: '',
  value: '',
  placeholder: '',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  spellCheck: false,
  input: {},
};

export default InputForm;
