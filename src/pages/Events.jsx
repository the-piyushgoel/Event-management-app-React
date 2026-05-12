import EventForm from "../components/EventForm";
import EventCard from "../components/EventCard";

function Events({
  events,
  setEvents,
}) {

  function addEvent(event) {
    setEvents([...events, event]);
  }

  function deleteEvent(id) {

    const updated =
      events.filter(
        (event) => event.id !== id
      );

    setEvents(updated);
  }

  function toggleComplete(id) {

    const updated =
      events.map((event) => {

        if (event.id === id) {
          return {
            ...event,
            completed:
              !event.completed,
          };
        }

        return event;
      });

    setEvents(updated);
  }

  return (
    <div>

      <h1>Events</h1>

      <EventForm
        addEvent={addEvent}
      />

      <div className="items-container">

        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
            toggleComplete={
              toggleComplete
            }
          />
        ))}

      </div>

    </div>
  );
}

export default Events;