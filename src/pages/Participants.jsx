import ParticipantForm from "../components/ParticipantForm";
import ParticipantCard from "../components/ParticipantCard";

function Participants({
  participants,
  setParticipants,
}) {

  function addParticipant(
    participant
  ) {

    setParticipants([
      ...participants,
      participant,
    ]);
  }

  function deleteParticipant(id) {

    const updated =
      participants.filter(
        (participant) =>
          participant.id !== id
      );

    setParticipants(updated);
  }

  return (
    <div>

      <h1>Participants</h1>

      <ParticipantForm
        addParticipant={
          addParticipant
        }
      />

      <div className="items-container">

        {participants.map(
          (participant) => (
            <ParticipantCard
              key={participant.id}
              participant={
                participant
              }
              deleteParticipant={
                deleteParticipant
              }
            />
          )
        )}

      </div>

    </div>
  );
}

export default Participants;