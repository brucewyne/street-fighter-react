import React from 'react';
import classes from './HealthMeter.css';

const healthMeter = props => {
  return (
    <div className={classes.ProgressBar}>
      <div className={classes.ProgressAmount}></div>
    </div >
  )
}

export default healthMeter;