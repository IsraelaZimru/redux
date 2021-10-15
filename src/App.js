import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from './store/auth-slice';


function App() {
  const isAuth = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch()

  const submitHandler = (details) => {
    if (details.email.length > 3 && details.password.length > 3) {
      console.log("pass");
      dispatch(authActions.login())
    }
    console.log("not pass");
  }

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth submit={submitHandler} />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
