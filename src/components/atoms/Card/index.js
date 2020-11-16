import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Card = ({className, image }) => {
  const classNames = classname('a-card', className);
  return (
    <div className={classNames}>
      <img src={image} alt='pokemon-image' />
    </div>
  )
};

Card.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string
};

Card.defaultProps = {
  className: '',
  image: ''
};

export default Card;