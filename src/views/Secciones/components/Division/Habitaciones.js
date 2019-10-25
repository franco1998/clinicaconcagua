import React from 'react';
import '../../../../App.css';
import { Link } from 'react-router-dom';

const Habitaciones = props =>(
      <Link to={{
        pathname:'/SeccionesE',
        state:{
          indice: 0,
        }}}>
        <svg version="1.1"
           viewBox="0 0 600 600" {...props}>
           <g id="H1-6_1_">
           	<g id="H1-6">
           		<g id="XMLID_5_">
           			<g>
           				<polygon className="HAB" points="342.1,213.1 342.1,399 220.2,399 220.2,213.2 220.2,213.1 				"/>
           			</g>
           			<g>
           				<line className="HAB" x1="220.2" y1="213.2" x2="220.2" y2="399"/>
           				<line className="HAB" x1="342.1" y1="399" x2="342.1" y2="213.1"/>
           				<line className="HAB" x1="342.1" y1="213.1" x2="220.2" y2="213.1"/>
           				<line className="HAB" x1="220.2" y1="399" x2="342.1" y2="399"/>
           			</g>
           		</g>
           	</g>
           	<text transform="matrix(1 0 0 1 265 306.1)" className="HAB">H1-6</text>
           </g>
        </svg>
      </Link>
  )
export default Habitaciones;
