import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import ConfigurationForm from './Forms/ConfigurationForm';
import Validationform from './Forms/Validationform';
import Extractionform from './Forms/Extractionform';
import PathForm from './Forms/PathForm';
import ConfigNormalization from './Tables/ConfigNormalization';
import Records from './Records';
import GenerateSchema from './Staging Tables/GenerateSchema';
import NormalizationConfigHeader from './Tables/NormalizationConfigHeader';


const App = () => {
  return (
    <div >      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}>
            <Route path="extraction" element={<Extractionform />}/>               
            <Route path="fieldlevel" element={<Validationform />}/>
            <Route path="transformation" element={<ConfigurationForm />}/>             
            <Route path="path" element={<PathForm/>}/>  
            <Route path="records" element={<Records/>}/>
            <Route path="normalizationdetails" element={<ConfigNormalization/>}/> 
            <Route path="normalizationheader" element={<NormalizationConfigHeader/>}/> 
            <Route path="generateschema" element={<GenerateSchema/>}/>      
          </Route>                 
        </Routes>
      </BrowserRouter >     
     
    </div>
  );
}   
export default App;