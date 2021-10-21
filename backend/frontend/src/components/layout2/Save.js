import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import '../design/Header.css'

class Save extends Component {
  constructor(props){
    super(props)
  }
render() { 

  return (

<div>

<div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mx-5">
        <Link className="nav-link btn btn-lg" style={{
          marginLeft: '-40px'
        }}  to="/gofast"><i class="bi bi-arrow-left-short" style={{
          fontSize: '2.5rem',
          color: 'red',
          fontWeight: '4rem',
        }}></i></Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <Link className="navbar-brand color-logo text-light logo" title="Refill" to="/settingsextra">Re <span>fill</span></Link>
                </ul>
            </div>
        </div>
    </div>
    <div className="container mt-4">
    <div className="row mb-4  listOperator" >
     <div className="col-md-8 m-auto">
       <div className="container">
         <div className="form-group mt-2 mb-4">
                <input type="text" className="form-control form-control-lg" placeholder="Value" />
          </div>
         <div className="d-grid gap-2 mt-10 text-center mt-4 ">
           <button type="button" className="btn btn-lg mt-4" style={{
             borderColor: 'red',
             color: 'red'
           }}>{"Ooredoo"}</button>
         </div>
         <div className="d-grid gap-2 mt-4 text-center">
           <button type="button" className="btn btn-lg"style={{
             borderColor: 'orange',
             color: 'orange'
           }}>{"Orange"}</button>
         </div>
       </div>
     </div>
     </div>
   </div>

    </div>
    

    
  )}
}

export default Save;
