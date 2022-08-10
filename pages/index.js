import * as React from 'react';
import Contactus from '../src/About/Contactus'
import Aboutus from '../src/About/Aboutus';
import Classification from '../src/Classification/Classification';
import Clustering from "../src/Clustering/Clustering"
import Prediction from '../src/Prediction/Prediction';
import CookiePolicy from '../src/CookiePolicy/CookiePolicy';
import Privacy from '../src/Privacy/Privacy';
import Terms from '../src/Terms/Terms'
export default function Index() {
  return (
    <>
      {/* <Aboutus/>
      <Classification/>
      <Clustering/> 
      <Prediction/>  
      <CookiePolicy/> */}
      <Terms/>
    </>
  );
}