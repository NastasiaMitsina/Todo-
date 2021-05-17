import React from 'react';
import ReactDOM from 'react-dom';
import { TodoList } from './components/TodoList';
import { SearchPanel } from './components/SearchPanel';
import { AppHeader } from './components/AppHeader'


const App = () => {
   const todos = [
     {label: 'Drink coffee', important: false, id: 1},
     {label: 'Build an awesome App', important: true, id: 2},
     {label: 'Wash th dishes', important: false, id: 3},
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