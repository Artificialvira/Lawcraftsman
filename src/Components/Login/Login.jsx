import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
//import './style.css';


const Login = () => {
  const [active, setActive] = useState(false);
  useEffect(()=>{
    document.getElementById('theme-color').href = `css/style.css`;
  },[])

  const handleRegisterClick = () => {
    setActive(true);
  };

  const handleLoginClick = () => {
    
    setActive(false);
  };

  return (
    <main>
      <section className={`container ${active ? 'active' : ''}`} id="container">
        <article className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <article className="social-icons">
              <a href="https://www.facebook.com" className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="https://www.facebook.com" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.github.com" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com" className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </article>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </article>

        <article className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <article className="social-icons">
              <a href="https://www.facebook.com" className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="https://www.facebook.com" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.github.com" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com" className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </article>

            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="https://www.facebook.com">Forget Your Password?</a>
            <Link to="/College"><button onClick={handleLoginClick}>
      Sign In</button></Link>
          </form>
        </article>

        <article className="toggle-container">
          <article className="toggle">
            <article className="toggle-panel toggle-left">
              <h1>Welcome Back !</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button>
            </article>
            <article className="toggle-panel toggle-right">
              <h1>Welcome, Friend!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
            </article>
          </article>
        </article>
      </section>
    </main>
  );
};

export default Login;
