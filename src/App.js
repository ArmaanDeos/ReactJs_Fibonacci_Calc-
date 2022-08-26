import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Input from './components/Input';
import Header from './Header';


const App = () => {
  return (
    <>
       
      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/input" component={Input} />

        </Switch>




      </BrowserRouter>

    </>
  )
}

export default App
