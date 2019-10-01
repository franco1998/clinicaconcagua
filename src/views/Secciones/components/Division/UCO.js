import React from 'react';
import '../../../../App.css';
import { Link } from 'react-router-dom';

const UCO = props=>(
    <Link to="/UCO">
      <svg version="1.1"
         viewBox="0 0 600 600" {...props}>
         <g id="UCO_1_">
          	<g id="UCO">
            <rect x="40.2" y="28.8" className="UCO" width="121.7" height="186.4"/>
          	</g>
          	<text transform="matrix(0.7851 0 0 1 69.2236 133.9531)" className="UCO">UCO</text>
          </g>
      </svg>
    </Link>
  )
export default UCO;
