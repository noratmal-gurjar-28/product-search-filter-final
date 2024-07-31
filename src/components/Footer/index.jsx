import React from 'react';
import {Link} from 'react-router-dom'
import LogoImage from '../../assets/GOQii_logo_log.jpg'

export default function FooterComponent() {
  return (
    <div className='footer bg-dark text-white px-5 pt-4 pb-2'>
      <div className='row align-items-center'>
        <div className='col-md-6 text-center text-md-start'>
          {/* <h4>#BETHEFORCE</h4> */}
          <Link to="/" className="navbar-brand logo-img text-white px-5 my-2" ><img src={LogoImage} className='p-2 m-1' /></Link>
        </div>
        <div className='col-md-6 text-center text-md-end'>
          {/* <span className='fs-12'>2024 GOQii. All rights reserved.</span> */}
          <h4>#BETHEFORCE</h4>
        </div>
      </div>
      <div>
        <p className='text-center mt-2 fs-12'>2024 GOQii. All rights reserved.</p>
      </div>
    </div>
  );
}
