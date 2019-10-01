import React from 'react';
import '../../../App.css';
import Buffet from './Division/Buffet';
import Checkeo from './Division/Checkeo';
import Pasillo from './Division/Pasillo';
import UCO from './Division/UCO';
import H1 from './Division/H1';
import H2 from './Division/H2';
import H3 from './Division/H3';
import H4 from './Division/H4';
import H5 from './Division/H5';
import H6 from './Division/H6';
import H7 from './Division/H7';
import H8 from './Division/H8';
import H9 from './Division/H9';

class P1 extends React.Component {
  constructor(props){
    super(props);
  }
  render(props){
    return (
        <svg
          version={1.1}
          viewBox="0 0 600 600"
          {...props}
          >
           <Buffet/>
           <UCO/>
           <Checkeo/>
           <H1/>
           <H2/>
           <H3/>
           <H4/>
           <H5/>
           <H6/>
           <H7/>
           <H8/>
           <H9/>
           <Pasillo/>
        </svg>
      );
  }
  }
export default P1;
