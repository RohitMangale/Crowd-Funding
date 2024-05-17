import React, { useEffect, useState } from 'react';
import './ProgressBar.css'




const ProgressBar = ({ percentage }) => {
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          if (fillPercentage < percentage) {
              setFillPercentage(fillPercentage + 1);
          } else {
              clearInterval(interval);
          }
      }, 100);

      return () => clearInterval(interval);
  }, [fillPercentage, percentage]);

  return (
      <div className="progress-bar">
          <div className="progress" style={{ width: `${fillPercentage}%` }}></div>
      </div>
  );
};

export default ProgressBar
