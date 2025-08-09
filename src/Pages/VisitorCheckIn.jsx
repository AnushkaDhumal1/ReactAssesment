import React from 'react'
// import { useRef } from 'react';
import InputVisitor from '../Component/InputVisitor.jsx'
import { FaUser } from 'react-icons/fa';

function VisitorCheckIn() {
   

  return (
    <>
    <>
        <label style={{fontWeight:'bold', marginTop:'10px',marginBottom:'10px',height:'50px',display: 'block',lineHeight: '80px',fontSize:'30px'}}>
            <FaUser style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Enter Your Name</label><br />
        <InputVisitor />
    </>
    
    </>
  )
}

export default VisitorCheckIn