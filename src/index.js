import React from 'react';
import ReactDOM from 'react-dom';
import { TodoList } from './components/TodoList';
import { SearchPanel } from './components/SearchPanel';
import { AppHeader } from './components/AppHeader'


const App = () => {
   const todos = [
     {label: 'Drink coffee', important: false},
     {label: 'Build an awesome App', important: true},
     {label: 'Wash th dishes', important: false},
   ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList plans={todos}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));