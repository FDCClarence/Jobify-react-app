import {Link} from 'react-router-dom'

const Login = () => {
  return <div>
    <h1>Login</h1>
    <Link to='/register'>
      Register an account
    </Link>
  </div>
}

export default Login