import { React } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.gif';
import '../style/components.css';
import '../style/outlet.css';

const Login = () => {

  return (
    <main className="background d-flex flex-column align-items-center">
      <div className="d-flex flex-row">
        <h3 className="my-5">LOGIN TO YOUR ACCOUNT</h3>
      </div>
      <form class="border boder-dark rounded mb-2 mx-5 w-50">
        <img className="logo ps-5 pt-3" src={Logo} alt="Journeyman logo"  />
        <div class="form-group d-flex flex-column align-items-start my-3 mx-5">
          <p><strong>Email address</strong></p>
          <input type="email" class="form-control px-5" id="email1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group d-flex flex-column align-items-start my-3 mx-5">
          <p><strong>Password</strong></p>
          <input type="password" class="form-control px-5" id="password1" placeholder="Password" />
        </div>
        <div class="d-flex flex-row justify-content-start my-2 ms-5">
          <input type="checkbox" class="me-3" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div class="d-flex flex-row justify-content-end">
          <button type="submit" class="btn btn-outline-primary mt-2 mb-5 me-5 py-0">Submit</button>
        </div>
      </form>
      <div class="d-flex flex-row justify-content-start">
        <NavLink to="/chat/1" activeClassName="active-link" className="mb-5 me-5 py-0" ><span><small>Go to Chat</small></span></NavLink>
      </div>
    </main>
  );
};


export default Login;
