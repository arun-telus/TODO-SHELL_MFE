import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//@ts-ignore
const Todo = lazy(() => import('todo/Todo').catch(() => {
  return {
    default: () => <button onClick={() => window.location.reload()}>Unable to Load! retry?</button>
  };
}))

const App = () => {
  const [filter, setFilter] = React.useState('all')

  return (<div className='mfecontainerMain'>
    <div className='mfecontainer' >
      <div className='mfenavbar'>
        <p className='mfetitle'>Shell App</p>
        <div className='mfefilter'>
          <button className='mfefilterButton' onClick={() => setFilter('all')}>All</button>
          <button className='mfefilterButton' onClick={() => setFilter('active')}> Active</button>
          <button className='mfefilterButton' onClick={() => setFilter('completed')}> Completed</button>
        </div>
      </div>
      <div className='mfecontent'>
        <Suspense fallback={<div>Loading...</div>}>
          <Todo filter={filter} />
        </Suspense>
      </div>
    </div>
  </div>
  )
}
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
