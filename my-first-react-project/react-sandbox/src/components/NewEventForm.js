import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('manchester')

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('manchester')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random()*10000),
      location: location
    }
    addEvent(event)
    resetForm()
  }

  return (
    <div>
      <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
          <span>Event title:</span>
          <input type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Event date</span>
          <input type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <label>
          <span>Event location</span>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value="manchester">Manchester</option>
            <option value="london">London</option>
            <option value="cardiff">Cardiff</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
