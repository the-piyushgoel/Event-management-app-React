import StatsCard from "../components/StatsCard";

function Dashboard({
  events,
  participants,
}) {

  const totalEvents =
    events.length;

  const completedEvents =
    events.filter(
      (event) => event.completed
    ).length;

  const upcomingEvents =
    totalEvents -
    completedEvents;

  return (
    <div>

      <h1>Dashboard</h1>

      <div className="stats-container">

        <StatsCard
          title="Total Events"
          value={totalEvents}
        />

        <StatsCard
          title="Upcoming Events"
          value={upcomingEvents}
        />

        <StatsCard
          title="Completed Events"
          value={completedEvents}
        />

        <StatsCard
          title="Participants"
          value={
            participants.length
          }
        />

      </div>

    </div>
  );
}

export default Dashboard;