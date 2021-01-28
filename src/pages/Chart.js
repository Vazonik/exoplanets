import React from 'react';

import RegularHeader from '../components/RegularHeader/RegularHeader';

function Chart({ exoplanets }) {

  return (
    <>
      <RegularHeader />
      <div>
        {exoplanets.map(e => <div>{e.pl_hostname}</div>)}
      </div>
    </>
  );
}

export default Chart;