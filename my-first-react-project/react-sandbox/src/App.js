import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [showModals, setShowModals] = useState(true)

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

  const handleClose = () => {
    setShowModals(false)
  }

  return (
    <div className = "App">
      <Title title="Mario's Kingdom Events" subtitle="All the latest events in Mario Kingdom"/>
      <Title title="Bowser's Kingdom Events" subtitle="All the latest events in Bowser's Kingdom"/>

      {showEvents && (
        <>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </>
      )}
      {!showEvents && (
        <>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </>
      )}

      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index + 1} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </React.Fragment>
      ))}

      {showModals && <Modal handleClose={handleClose}>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
        <a href="www.ninja.com">Check out the Website!</a>
      </Modal>}
    </div>
  );
}

export default App;
