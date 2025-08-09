import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { EventProvider } from './Context/EventContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
          <EventProvider>
      <App />
    </EventProvider>
  </StrictMode>
)
