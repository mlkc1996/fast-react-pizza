import { useNavigate } from 'react-router-dom';

function NotFound(props = { message: "" }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{props.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
