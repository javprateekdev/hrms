// App.js
import React from 'react';
import './App.css';
import BasicTableComponent from './components/basic.table';
import FilterTableComponent from './components/filter.table';
import PaginationTableComponent from './components/pagination.table';
import SortingTableComponent from './components/sorting.table';
import ExpandableTableComponent from './components/expandable.table';
import Table from './Table'
import KanbanBoard from './Kanban';
function App() {

  return (
    <div className="App">

      <Table/>
      <KanbanBoard/>
    </div>
  );
}

export default App;
