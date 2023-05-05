import React from 'react';

import { Outlet } from "react-router-dom";
import './App.css';
import { Navbar,Nav,NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='background'  >  
      <center>
        <Navbar className='mt-fixed'bg="warning" variant="success">           
          <Navbar.Brand as={Link} to="/">DM_Workbench</Navbar.Brand>
          <Nav>               
            <NavDropdown title="Configuration" id="extraction-dropdown">
              <NavDropdown.Item as={Link} to="/extraction">Extraction_Configuration</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fieldlevel">Field_Level_Configuration</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transformation">Transformation_Configuration</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/path" >Path</NavDropdown.Item>  
              <NavDropdown.Item as={Link} to="/normalizationheader" >Normalization_confif_Header</NavDropdown.Item>                
              <NavDropdown.Item as={Link} to="/normalizationdetails" >Normalization_Config_Details</NavDropdown.Item>
            </NavDropdown>           
         
            <Nav.Link as={Link} to="/records" >Records</Nav.Link>                
            <Nav.Link as={Link} to="/generateschema" >GenerateSchema</Nav.Link>                           
          </Nav>
        </Navbar>  
      </center>  
      <Outlet />    
    </div>
  )
}

export default LandingPage



