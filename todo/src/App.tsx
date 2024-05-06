import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Todos from './components/todos'

const App = () => {
  const [filter, setFilter] = React.useState<string>('all')
  
  return (
  <div>
      <div className='navbar'>
        <p className='title'>MFE App</p>
        <div className='filter'>
        <button className="filterButton" onClick={() => setFilter('all')}>All</button>
        <button className="filterButton" onClick={() => setFilter('active')}>Active</button>
        <button className="filterButton" onClick={() => setFilter('completed')}>Completed</button>
        </div>
      </div>
    <Todos filter={filter}/>
  </div>
)
}
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
