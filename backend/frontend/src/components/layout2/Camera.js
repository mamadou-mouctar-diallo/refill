import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../design/Header.css'

class Camera extends Component {
render() { 
  return (
    <div>

<div className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid mx-5">
        <Link className="btn btn-lg" style={{
          marginLeft: '-40px'
        }} to="/save"><i class="bi bi-arrow-left-short" style={{
          fontSize: '2.5rem',
          color: 'red',
          fontWeight: '4rem',
        }}></i></Link><h1>Camera</h1>
         <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav ms-auto">
             <Link className="navbar-brand color-logo text-light logo" title="Refill" to="/settingsextra">Re <span>fill</span></Link>
             </ul>
         </div>
     </div>
 </div>
 <div className="container mt-4">
 <div className="row mb-4 " style={{
   marginTop: '200px'
 }} >
  <div className="col-md-8 m-auto">
    <div className="">
      <div className="input-group">
          <input type="text" className="form-control" style={{
             borderRadius: '5px'
            }} placeholder="Search code" />
          <div className="input-group-append">
            <Link className="input-group-text " style={{
             borderRadius: '5px',
             marginLeft: '5px'
            }}>
            <i class="bi bi-arrow-right-short" style={{
            fontSize: '1.5rem',
            color: 'red',
            fontWeight: '4rem',
            }} to="/settingsextra"></i>
            </Link>
          </div>
      </div>
    </div>
  </div>
  </div>
</div>

</div>


  )}
}

export default Camera
