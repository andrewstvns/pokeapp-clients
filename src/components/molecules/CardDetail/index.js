import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

import { Card } from 'components';

const CardDetail = ({
  className,
  image,
  name,
  type,
  move
}) => {
  const classNames = classname('m-card-detail', className);
  return (
    <div className={classNames}>
      <Card>
        <div className='card-detail'>
          <img className='card-image' src={image}/>
          <div className='card-info'>
            <p className='text-info'>{name}</p>
            <p className='type-info'>{type}</p>
            <p className='type-info'>{move}</p>
          </div>
        </div>
      </Card>
    </div>
  )
};

CardDetail.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  move: PropTypes.string
};

CardDetail.defaultProps = {
  className: '',
  onClick: () => {},
  type: 'button',
  image: '',
  name: '',
  type: '',
  move: ''
};

export default CardDetail;