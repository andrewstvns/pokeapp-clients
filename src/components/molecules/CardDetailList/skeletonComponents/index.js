// Skeleton Component
// --------------------------------------------------------

import React from 'react';

// plugins
import 'react-placeholder/lib/reactPlaceholder.css';
import { RectShape } from 'react-placeholder/lib/placeholders';

// styles
import '../styles.scss';

const SkeletonCardDetailList = () => {
  const bgColor = 'rgba(163, 160, 160, 0.7)';
  const arrSkeleton = [];
  const contentSkeleton = (
    <div className='card-detail-list-wrapper'>
      <RectShape color={bgColor} />
    </div>
  );

  for (let index = 0; index < 5; index++) {
    arrSkeleton.push(<div key={`template-${index}`}>{contentSkeleton}</div>);
  }

  return (
    <div className='container-skeleton'>
      <RectShape color={bgColor} />
    </div>
  );
};

export default SkeletonCardDetailList;
