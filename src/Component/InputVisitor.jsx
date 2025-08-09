import React, { useRef, useState, useEffect, useContext } from 'react';
import { EventContext } from '../Context/EventContext.jsx';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


function InputVisitor() {
  const inputRef = useRef(null);
  const counterRef = useRef(0);
  const [visitorList, setVisitorList] = useState([]);
  const [welcomeName, setWelcomeName] = useState('');

  useEffect(() => {
    inputRef.current.focus(); 
  }, []);

  const handleCheckIn = () => {
    const name = inputRef.current.value.trim();
    if (name) {
      setVisitorList(prev => [...prev, name]);
      setWelcomeName(name);
      counterRef.current += 1;
      inputRef.current.value = '';
    }
  };

  const { eventName, organizer } = useContext(EventContext);

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Visitor Name"
          style={{ padding: '20px', fontSize: '14px', width: '200px',marginLeft: '40px'}}/>
        <button
          onClick={handleCheckIn}
          style={{
            padding: '8px 16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            border: '1px solid black',
            marginLeft: '40px',
            width:'150px'
          }}
        >
          Check In
        </button>
      </div>

      {welcomeName && <h3 style={{fontSize:'28px'}}>Welcome, {welcomeName}!</h3>}

      <p style={{ fontSize: '28px', marginBottom: '4px' }}><strong>Total Visitors:</strong> {counterRef.current}</p>

      <h4 style={{fontSize:'28px'}}>Visitor List:</h4>
      <ul style={{fontSize:'25px',  listStyleType: 'none',  paddingLeft: '0',marginTop: '2px'}}>
        {visitorList.map((visitor, index) => (
          <li key={index}  style={{padding: '5px 5px',borderBottom: '1px solid #eee'}}>{visitor}</li>
        ))}
      </ul>

      <div style={{ marginTop: '20px' }}>
        <p><strong>Event:</strong> {eventName || 'Event Name'}</p>
        <p><strong>Organizer:</strong> {organizer || 'Organization Name'}</p>
      </div>
 
      <div style={{ marginTop: '20px',marginLeft:'440px'}}>
        <FaArrowRight /><br />
        <Link to="/event" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '20px', textDecoration: 'none', color: 'black' }}>Go to <br />
        Event Page</Link>
      </div>
      
    </div>
  );
}

export default InputVisitor;
