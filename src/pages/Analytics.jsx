function Analytics({
  events,
  participants,
}) {

  const completed =
    events.filter(
      (event) => event.completed
    ).length;

  const completionRate =
    events.length > 0
      ? (
          (completed /
            events.length) *
          100
        ).toFixed(0)
      : 0;

  return (
    <div>

      <h1>Analytics</h1>

      <div className="stats-container">

        <div className="stats-card">
          <h3>Total Events</h3>
          <h1>{events.length}</h1>
        </div>

        <div className="stats-card">
          <h3>
            Total Participants
          </h3>

          <h1>
            {participants.length}
          </h1>
        </div>

        <div className="stats-card">
          <h3>
            Completion Rate
          </h3>

          <h1>
            {completionRate}%
          </h1>
        </div>

      </div>

    </div>
  );
}

export default Analytics;