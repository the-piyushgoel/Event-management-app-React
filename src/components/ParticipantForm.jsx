import { useState } from "react";

function ParticipantForm({
  addParticipant,
}) {

  const [
    participantName,
    setParticipantName,
  ] = useState("");

  const [email, setEmail] =
    useState("");

  const [eventName, setEventName] =
    useState("");

  function handleSubmit(e) {

    e.preventDefault();

    const newParticipant = {
      id: Date.now(),
      participantName,
      email,
      eventName,
    };

    addParticipant(newParticipant);

    setParticipantName("");
    setEmail("");
    setEventName("");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Participant Name"
        value={participantName}
        onChange={(e) =>
          setParticipantName(
            e.target.value
          )
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) =>
          setEventName(e.target.value)
        }
      />

      <button>
        Add Participant
      </button>

    </form>
  );
}

export default ParticipantForm;