function ParticipantCard({
  participant,
  deleteParticipant,
}) {

  return (
    <div className="item-card">

      <h3>
        {participant.participantName}
      </h3>

      <p>
        Email:
        {" "}
        {participant.email}
      </p>

      <p>
        Event:
        {" "}
        {participant.eventName}
      </p>

      <button
        onClick={() =>
          deleteParticipant(
            participant.id
          )
        }
      >
        Delete
      </button>

    </div>
  );
}

export default ParticipantCard;