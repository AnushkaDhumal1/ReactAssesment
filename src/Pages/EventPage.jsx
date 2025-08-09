import React, { useContext, useRef } from 'react';
import { EventContext } from '../Context/EventContext.jsx';
import { Link } from 'react-router-dom';
import { MdStars } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa"; // ✅ Import added
import styles from './EventPage.module.css';

function EventPage() {
  const { setEventName, setOrganizer, eventName, organizer } = useContext(EventContext);
  const eventRef = useRef(null);
  const organizerRef = useRef(null);

  const handleSave = () => {
    setEventName(eventRef.current.value.trim());
    setOrganizer(organizerRef.current.value.trim());
    eventRef.current.value = '';
    organizerRef.current.value = '';
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <MdStars style={{ fontSize: '32px', color: 'black' }} />
        <label style={{ fontWeight: 'bold', fontSize: '30px' }}>Event Name:</label>
      </span>
      <input
        ref={eventRef}
        placeholder="Event Name"
        style={{ width: '80%', padding: '10px', marginBottom: '10px' }}
      />

      <label style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '35px', height: '50px', display: 'block', lineHeight: '80px', fontSize: '30px' }}>
        Organization Name :
      </label>
      <input
        ref={organizerRef}
        placeholder="Organizer Name"
        style={{ width: '80%', padding: '10px', marginBottom: '10px' }}
      />

      <button className={styles.myButton} onClick={handleSave}>
        Save Event Info
      </button>

      <div style={{ marginTop: '20px' }}>
        <p><strong>Event:</strong> {eventName || 'Event Name'}</p>
        <p><strong>Organizer:</strong> {organizer || 'Organizer Name'}</p>
      </div>
      
      <div style={{ marginTop: '20px', marginLeft: '420px', textAlign: 'center' }}>
  <FaArrowLeft style={{ fontSize: '22px', marginBottom: '5px' }} />
  <br />
  <Link
    to="/"
    style={{
      display: 'inline-block',
      fontSize: '20px',
      textDecoration: 'none',
      color: 'black',
      lineHeight: '1.4'
    }}
  >
    Back to <br /> Check-In
  </Link>
</div>

    </div>
  );
}

export default EventPage;
