import { Link, useRouteError } from 'react-router-dom'


const Error = () => {
  const error = useRouteError();
  return <div>
    <h1>Error Page</h1>
    <h5>Encountered the following error : </h5>
    <h5>{JSON.stringify(error)}</h5>
    
    <div style={{ marginTop: '5em' }}>
      <Link to="/">Return to home</Link>
    </div>
  </div>
}

export default Error