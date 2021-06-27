import logo from './logo.svg';
import './App.css';

import Gunjan from './components/Gunjan';
import { Hello } from './components/Hello';
import { UseStateArray } from './components/UseStateArray';

import { UseStateObject } from './components/UseStateObject';

import { ToDoList } from './components/ToDoList';
import { BasicForm} from './components/forms/BasicForm';


function App() {
  return (
    <div className="App">
     
     <Gunjan />
     <Hello />
     <UseStateArray />
     <UseStateObject />
     <ToDoList />

     <BasicForm />
    </div>
  );
}

export default App;
