import classes from './Auth.module.css';
import { useState } from 'react';

const Auth = ({ submit }) => {
  const [details, setDetails] = useState({
    email: "",
    password: ""
  })

  const updateData = ({ target: { value, id } }) => {
    setDetails(prev => ({ ...prev, [id]: value }))
  }

  const submitHandler = (event) => {
    event.preventDefault();
    submit(details)
  }


  return (
    <main className={classes.auth}>
      <section>
        <form >
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={updateData} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={updateData} />
          </div>
          <button onClick={submitHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
