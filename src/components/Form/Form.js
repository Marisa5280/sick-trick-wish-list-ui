import { useState } from "react";

function Form({ addTrick }) {
  const [stance, setStance] = useState("");
  const [name, setName] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [tutorial, setTutorial] = useState("");

  function submitTrick(event) {
    event.preventDefault();
    const newTrick = {
      key: Date.now(),
      id: Date.now(),
      stance,
      name,
      obstacle,
      tutorial,
    };
    addTrick(newTrick);
    clearInput();
  }

  function clearInput() {
    setStance("");
    setName("");
    setObstacle("");
    setTutorial("");
  }

  return (
    <form>
      <select
        type="text"
        placeholder="Stance"
        name="stance"
        value={stance}
        onChange={(event) => setStance(event.target.value)}
      >
        <option value="regular">Regular</option>
        <option value="switch">Switch</option>
      </select>
      <input
        type="text"
        placeholder="Name of Trick"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <select
        type="text"
        placeholder="Obstacle"
        name="obstacle"
        value={obstacle}
        onChange={(event) => setObstacle(event.target.value)}
      >
        <option value="flat ground">Flatground</option>
        <option value="ledge">Ledge</option>
        <option value="rail">Rail</option>
        <option value='stairs'>Stairs</option>
        <option value='pool'>Pool</option>
      </select>
      <input
        type="text"
        placeholder="Link to Tutorial"
        name="tutorial"
        value={tutorial}
        onChange={(event) => setTutorial(event.target.value)}
      />
      <button onClick={(event) => submitTrick(event)}>Send It!</button>
    </form>
  );
}

export default Form;
