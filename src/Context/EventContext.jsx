import React, { createContext, useState } from 'react';

// ✅ Named export
export const EventContext = createContext();

export function EventProvider({ children }) {
  const [eventName, setEventName] = useState('');
  const [organizer, setOrganizer] = useState('');

  return (
    <EventContext.Provider value={{ eventName, setEventName, organizer, setOrganizer }}>
      {children}
    </EventContext.Provider>
  );
}
