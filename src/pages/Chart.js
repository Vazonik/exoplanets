import React from 'react';

import RegularHeader from '../components/RegularHeader/RegularHeader';
import PageCanvas from '../components/PageCanvas/PageCanvas';
import ExoplanetsChart from '../components/ExoplanetsChart/ExoplanetsChart';

function Chart({ exoplanets }) {

  return (
    <>
      <RegularHeader />
      <PageCanvas>
        <ExoplanetsChart exoplanets={exoplanets} />
      </PageCanvas>
    </>
  );
}

export default Chart;