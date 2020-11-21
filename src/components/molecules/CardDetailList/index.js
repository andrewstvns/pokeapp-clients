import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import TypeColors from 'helper';
import './styles.scss';

import { Button, Card } from 'components';

import Fade from 'react-reveal/Fade'
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import Skeleton from './skeletonComponents';

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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, [ready]);
  
  const placeholder = (
    <div className='m-card-detail-list'>
      <Skeleton />
    </div>
  );

  const classNames = classname('m-card-detail-list', className, {
    link: link
  });
  return (
    <ReactPlaceholder
      showLoadingAnimation
      customPlaceholder={placeholder}
      ready={ready}
    >      
    <Fade duration={300}>
      <div className={classNames}>
        {link && (
          <Fragment>
            <div className='button-detail'>
              <Button onClick={onClick}>Detail</Button>
            </div>
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
              <div className='button-detail'>
              <Button onClick={onClick}>Release</Button>
            </div>
            <Card image={data.sprites.front_default} />
            <div className='pokemon-list-info'>
              <div className='pokemon-list-type'>
                <ul>
                  {data.types.map((val, idx) => (
                    <li key={idx}>
                      <p 
                        style={{ backgroundColor: `#${TypeColors[val.type.name]}`}}
                      >
                        {val.type.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <p className='pokemon-name'>{data.name}</p>
            </div>
          </Fragment>
        )}
      </div>
    </Fade>
    </ReactPlaceholder>
  )
};

CardDetailList.propTypes = {
  className: PropTypes.string,
  link: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
  pokemonIndex: PropTypes.string,
  onClick: PropTypes.func
};

CardDetailList.defaultProps = {
  className: '',
  link: false,
  image: '',
  name: '',
  pokemonIndex: '',
  onClick: () => {}
};

export default CardDetailList;