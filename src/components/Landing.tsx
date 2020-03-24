import React from 'react';
import { Grid, Cell } from 'react-mdl';

export default function Landing() {
  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Grid className='landing-grid'>
        <Cell col={ 12 } />
      </Grid>
    </div>
  );
}
