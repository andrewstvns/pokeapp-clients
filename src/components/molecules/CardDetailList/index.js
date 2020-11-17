import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import TypeColors from 'helper';
import './styles.scss';

import { Button, Card } from 'components';

import { NavLink, HashRouter } from 'react-router-dom';

const CardDetailList = ({
  className,
  link,
  image,
  name,
  pokemonIndex,
  onClick,
  data
}) => {
  const classNames = classname('m-card-detail-list', className, {
    link: link
  });
  return (
    <div className={classNames}>
      <div className='button-detail'>
        <Button onClick={onClick}>Detail</Button>
      </div>
      {link && (
        <Fragment>
          <HashRouter>
            <NavLink to={`/details/${pokemonIndex}`} />
          </HashRouter>
          <Card image={image} />
          <div className='pokemon-list-info'>
            <p className='pokemon-name'>{name}</p>
          </div>
        </Fragment>
      )}
      {!link && (
        <Fragment>
          <Card image={data.sprites.front_default} />
          <div className='pokemon-list-info'>
            <p className='pokemon-name'>{data.name}</p>
            <div className='pokemon-list-type'>
              <ul>
                {data.types.map(val => (
                  <li>
                    <p 
                      style={{ backgroundColor: `#${TypeColors[val.type.name]}`}}
                    >
                      {val.type.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  )
};

CardDetailList.propTypes = {
  className: PropTypes.string,
  link: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
  pokemonIndex: PropTypes.string,
  onClick: PropTypes.func,
  data: PropTypes.array
};

CardDetailList.defaultProps = {
  className: '',
  link: false,
  image: '',
  name: '',
  pokemonIndex: '',
  onClick: () => {},
  data: []
};

export default CardDetailList;