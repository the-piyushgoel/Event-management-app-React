function EventCard({
  event,
  deleteEvent,
  toggleComplete,
}) {

  return (
    <div className="item-card">

      <h3>{event.eventName}</h3>

      <p>Date: {event.date}</p>

      <p>Venue: {event.venue}</p>

      <p>
        Organizer:
        {" "}
        {event.organizer}
      </p>

      <p>
        Status:
        {" "}
        {event.completed
          ? "Completed"
          : "Upcoming"}
      </p>

      <button
        onClick={() =>
          toggleComplete(event.id)
        }
      >
        Toggle Status
      </button>

      <button
        onClick={() =>
          deleteEvent(event.id)
        }
      >
        Delete
      </button>

    </div>
  );
}

export default EventCard;