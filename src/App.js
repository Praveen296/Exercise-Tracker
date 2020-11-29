import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './components/navbar';
import ExercisesList from './components/exercises-list';
import EditExercise from './components/edit-exercises';
import CreateExercise from './components/create-exercises';
import CreateUser from './components/create-user';

function App() {
  return (
    <Router>
      <div className = 'container'>
          <NavBar />
          <br />
          <Route path = '/' exact component = {ExercisesList} />
          <Route path = '/edit/:id' component = {EditExercise} />
          <Route path = '/create'  component = {CreateExercise} />
          <Route path = '/user'  component = {CreateUser} />
      </div>
      
    </Router>
  );
}

export default App;
