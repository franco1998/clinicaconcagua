import React from 'react';
import '../../../../App.css';
import { Link } from 'react-router-dom';

const UTI = props=>(
    <Link to={{
      pathname:'/SeccionesE',
      state:{
        indice: 0,
      }}}>
      <svg version="1.1"
         viewBox="0 0 600 600" {...props}>
         <g id="UTI">
         	<g id="A2">
         		<g id="XMLID_2_">
         			<g>
         				<polygon className="UTI" points="257.9,136.7 257.9,213.1 220.2,213.1 220.2,286.9 135.5,286.9 135.5,215.6 135.5,136.7 				"/>
         			</g>
         			<g>
         				<line className="UTI" x1="135.5" y1="136.7" x2="257.9" y2="136.7"/>
         				<line className="UTI" x1="257.9" y1="136.7" x2="257.9" y2="213.1"/>
         				<line className="UTI" x1="257.9" y1="213.1" x2="220.2" y2="213.1"/>
         				<line className="UTI" x1="220.2" y1="213.1" x2="220.2" y2="286.9"/>
         				<line className="UTI" x1="220.2" y1="286.9" x2="135.5" y2="286.9"/>
         				<line className="UTI" x1="135.5" y1="286.9" x2="135.5" y2="215.6"/>
         				<line className="UTI" x1="135.5" y1="215.6" x2="135.5" y2="136.7"/>
         			</g>
         		</g>
         	</g>
         	<text transform="matrix(1 0 0 1 177.85 210.1)" className="UTI">UTI</text>
         </g>
      </svg>
    </Link>
  )
export default UTI;
