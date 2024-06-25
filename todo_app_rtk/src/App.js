import './App.css';
import TodoList from './features/todos/TodoList';
import { ApiProvider } from '@reduxjs/toolkit/query/react'; 
import { apiSlice } from './features/api/apiSlice';
import Data from './features/todos/Data';

function App() {
  return (
    <ApiProvider api={apiSlice}>
        <div className="App">
      <Data></Data>
    </div>
    </ApiProvider>
    
  );
}

export default App;
