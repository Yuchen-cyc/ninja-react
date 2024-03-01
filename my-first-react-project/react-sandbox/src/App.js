import { useState } from 'react';
import './App.css';

function App() {
  const [showEvents, setShowEvents] = useState(true)

  const [events, setEvents] = useState([
    {title: "Mario's party bash", id: 1},
    {title: "Bowser's live show", id: 2},
    {title: "Race on moo moo farm", id: 3}
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  return (
    <div className = "App">
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}

      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index + 1} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
