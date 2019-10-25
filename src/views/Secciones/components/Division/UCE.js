import React from 'react';
import '../../../../App.css';
import { Link } from 'react-router-dom';

const UCE = props=>(
    <Link to={{
      pathname:'/SeccionesE',
      state:{
        indice: 1,
      }}}>
      <svg version="1.1"
         viewBox="0 0 600 600" {...props} style={{border:'1px solid green'}}>
         <g id="UCE">
         	<g id="A7">
         		<g id="XMLID_4_">
         			<g>
         				<polygon className="UCE" points="439.4,137.5 438.9,286.1 438.9,286.3 342.1,286.3 342.1,211.8 390.2,211.9 390.2,137.9 				"/>
         			</g>
         			<g>
         				<polyline className="UCE" points="342.1,286.3 438.9,286.3 439.4,286.3 				"/>
         				<line className="UCE" x1="342.1" y1="286.3" x2="342.1" y2="211.8"/>
         				<line className="UCE" x1="342.1" y1="211.8" x2="390.2" y2="211.9"/>
         				<line className="UCE" x1="390.2" y1="211.9" x2="390.2" y2="137.9"/>
         				<line className="UCE" x1="390.2" y1="137.9" x2="439.4" y2="137.5"/>
         				<line className="UCE" x1="439.4" y1="137.5" x2="438.9" y2="286.1"/>
         			</g>
         		</g>
         	</g>
         	<text transform="matrix(1 0 0 1 379 251.25)" className="UCE">UCE</text>
         </g>
      </svg>
    </Link>
  )
export default UCE;
