import './Card.css';

export default function Card({stance, name, obstacle, tutorial}) {
  return (
    <div className='card'>
      <p className='card-trick'>{`${stance} ${name}`}</p>
      <p className='card-obstacle'>{obstacle}</p>
      <p className='card-text'>Link to Tutorial:</p>
      <a href={tutorial} target="blank">{tutorial}</a>
    </div>
  )
}