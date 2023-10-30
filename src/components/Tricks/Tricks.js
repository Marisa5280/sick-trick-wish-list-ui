import Card from "../Card/Card";
import "./Tricks.css";

function Tricks({ tricks }) {
  return (
    <div className="tricks-wrapper">
      <TrickCards tricks={tricks} />
    </div>
  );
}

function TrickCards({ tricks }) {
  return tricks.map((trick) => {
    return (
      <Card
        key={trick.id}
        id={trick.id}
        stance={trick.stance}
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
      />
    );
  });
}

export default Tricks;
