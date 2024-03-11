import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [showModals, setShowModals] = useState(false)

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

  // const handleOpen = () => {
  //   setShowModals(true)
  // }

  return (
    <div className = "App">
      <Title title="Mario's Kingdom Events" subtitle="All the latest events in Mario Kingdom"/>

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

      {/* {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index + 1} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </React.Fragment>
      ))} */}

      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      {showModals && <Modal handleClose={handleClose} isSalesModal={true}>
        <NewEventForm />
      </Modal>}

      <div>
        <button onClick={() => setShowModals(true)}>Add New Events</button>
      </div>
    </div>
  );
}

export default App;
