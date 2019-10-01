import React from 'react';
import '../../../App.css';
import Consultorios from './Division/Consultorios';
import Farmacia from './Division/Farmacia';
import Fisioterapia from './Division/Fisioterapia';
import Guardia from './Division/Guardia';
import GYM from './Division/GYM';
import Habitaciones from './Division/Habitaciones';
import Q1 from './Division/Q1';
import Q2 from './Division/Q2';
import UCE from './Division/UCE';
import UTI from './Division/UTI';


const PB = props => {
    return (
        <div>
          <svg
            version={1.1}
            viewBox="0 0 600 600"
            {...props}>
             <Consultorios/>
             <Farmacia/>
             <Fisioterapia/>
             <Guardia/>
             <GYM/>
             <Habitaciones/>
             <Q1/>
             <Q2/>
             <UCE/>
             <UTI/>
          </svg>
        </div>
      );
  }
export default PB;
