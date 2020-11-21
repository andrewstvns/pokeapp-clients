// Skeleton Component
// --------------------------------------------------------

import React from 'react';

// plugins
import 'react-placeholder/lib/reactPlaceholder.css';
import { RectShape } from 'react-placeholder/lib/placeholders';

// styles
import '../../styles.scss';

const SkeletonPokemonDetails = () => {
  const bgColor = 'rgba(163, 160, 160, 0.7)';
  const arrSkeleton = [];
  const contentSkeleton = <RectShape color={bgColor} />;

  for (let index = 0; index < 6; index++) {
    arrSkeleton.push(<div key={`template-${index}`}>{contentSkeleton}</div>);
  }

  return (
    <div className="container-skeleton">
      <div className="card-detail-header">
        <RectShape color={bgColor} />
      </div>
      <div className="card-detail">
        <div className="a-card">
          <RectShape color={bgColor} />
        </div>
        <div className="card-information">
          <div className="card-types">
            <li>
              <RectShape color={bgColor} />
            </li>
            <li>
              <RectShape color={bgColor} />
            </li>
          </div>
          <div className="card-stats">{arrSkeleton}</div>
        </div>
      </div>
      <div className="card-moves-header">
        <RectShape color={bgColor} />
        <div className="card-moves-list">
          <RectShape color={bgColor} />
          <RectShape color={bgColor} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonPokemonDetails;
