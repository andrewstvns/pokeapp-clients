import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

import { Card } from 'components';

const CardDetail = ({
  className,
  image,
  name,
  style,
  children
}) => {
  const classNames = classname('m-card-detail', className);
  return (
    <div className={classNames}>
      <div 
        className='card-detail-header' 
        style={style}
      >
        <h2>{name}</h2>
      </div>
      <div className='card-detail'>
        <Card image={image} />
        {children}
      </div>
    </div>
  )
};

CardDetail.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  image: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.string,
  children: PropTypes.node
};

CardDetail.defaultProps = {
  className: '',
  onClick: () => {},
  image: '',
  name: '',
  style: '',
  children: {}
};

export default CardDetail;