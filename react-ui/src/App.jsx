import React, { useCallback, useEffect, useState } from 'react'
import Menu from './page/Menu/Menu.jsx'
import Order from './page/Order/Order.jsx'
import EditMenu from './page/EditMenu/EditMenu.jsx'
import './App.css'
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom'
const App = () => {
  const [message, setMessage] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [url, setUrl] = useState('/getMenu')
  const fetchData = useCallback(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`)
        }
        return response.json()
      })
      .then(json => {
        setMessage(json.data[0])
        setIsFetching(false)
      })
      .catch(e => {
        setMessage(`API call failed: ${e}`)
        setIsFetching(false)
      })
  }, [url])
  useEffect(() => {
    setIsFetching(true)
    fetchData()
  }, [fetchData])
  console.log(message)
  return (
    <HashRouter>
      <nav>
        <NavLink exact to={'/'}>
          search
        </NavLink>
        <NavLink exact to={'/order'}>
          oder
        </NavLink>
        <NavLink exact to={'/editMenu'}>
          edit
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path="/" component={Menu} />
          <Route path="/order" component={Order} />
          <Route path="/editMenu" component={EditMenu} />
        </Switch>
      </main>
    </HashRouter>
  )
}
function App2() {
  // const [message, setMessage] = useState(null)
  // const [isFetching, setIsFetching] = useState(false)
  // const [url, setUrl] = useState('/hi')
  // const fetchData = useCallback(() => {
  //   fetch(url)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`status ${response.status}`)
  //       }
  //       return response.json()
  //     })
  //     .then(json => {
  //       setMessage(json.data[0].type)
  //       setIsFetching(false)
  //     })
  //     .catch(e => {
  //       setMessage(`API call failed: ${e}`)
  //       setIsFetching(false)
  //     })
  // }, [url])
  // useEffect(() => {
  //   setIsFetching(true)
  //   fetchData()
  // }, [fetchData])
  // console.log(message)
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code> src / App.js </code> and save to reload.{' '}
  //       </p>{' '}
  //       <p>
  //         {' '}
  //         {'« '} <strong> {isFetching ? 'Fetching message from API' : message} </strong> {' »'}{' '}
  //       </p>{' '}
  //       <p> </p>{' '}
  //       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
  //         Learn React{' '}
  //       </a>{' '}
  //     </header>{' '}
  //   </div>
  // )
}

export default App
