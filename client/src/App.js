import './App.css';
import "./imp.jsx";
import Nav from "./Nav/nav";
import Home from "./Home/home";
import FullNav from './Nav/fullNav'
import LoginForm from './Login/Login'
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Signup from './SignUp/Signup';
import { connect } from 'react-redux';
import { checkUserSession } from './store/actions/user-services';

function App({ checkUserSession, user }) {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
  const { loading, error, currentUser } = user
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          {
            !loading && !currentUser ?
              <Redirect to='/login' /> : <Home />
          }
        </Route>
        <Route path='/login'><LoginForm /></Route>
        <Route path='/signup'><Signup /></Route>
      </Switch>
    </BrowserRouter >
  );
}
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
const mapStateToProps = (state, ownProps) => {
  return {
    user: state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
