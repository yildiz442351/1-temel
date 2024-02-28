import React from 'react';
import AddForm from './components/AddForm';
import ListTodos from './components/ListTodos';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className= "vh-100 bg-dark text-white">
      <div className="container p-5">
        <h2 className="container p-5">My Todos </h2>
  REDUX  <span className="text-warning">CRUD</span>
  </div>
  <AddForm />
  <ListTodos /> ;
  </div>
  );
};

export default App
