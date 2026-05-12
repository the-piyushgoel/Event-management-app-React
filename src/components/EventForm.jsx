import { useState } from "react";

function EventForm({ addEvent }) {

  const [eventName, setEventName] =
    useState("");

  const [date, setDate] =
    useState("");

  const [venue, setVenue] =
    useState("");

  const [organizer, setOrganizer] =
    useState("");

  function handleSubmit(e) {

    e.preventDefault();

    const newEvent = {
      id: Date.now(),
      eventName,
      date,
      venue,
      organizer,
      completed: false,
    };

    addEvent(newEvent);

    setEventName("");
    setDate("");
    setVenue("");
    setOrganizer("");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) =>
          setEventName(e.target.value)
        }
      />

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(e) =>
          setVenue(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Organizer"
        value={organizer}
        onChange={(e) =>
          setOrganizer(e.target.value)
        }
      />

      <button>Add Event</button>

    </form>
  );
}

export default EventForm;