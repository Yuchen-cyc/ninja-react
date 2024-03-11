import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const resetForm = () => {
    setTitle('')
    setDate('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random()*10000)
    }
    console.log(event)
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
        <button>Submit</button>
      </form>
    </div>
  )
}
