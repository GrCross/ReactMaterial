import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';

import { Login } from './component/Login.js';


class
App extends Component {

  constructor(props){
    super(props);
    const todosExample = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
          {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];
  }

  
  render() {

    return (
        <Login/>
        //<h1>HOlaaa</h1>

    );
  }
}

export default App;
