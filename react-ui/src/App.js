import React, { useCallback, useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [url, setUrl] = useState('/hi')
  const fetchData = useCallback(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`)
        }
        return response.json()
      })
      .then(json => {
        setMessage(json.data[0].flavour)

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{' '}
        </p>{' '}
        <p>
          {' '}
          {'« '} <strong> {isFetching ? 'Fetching message from API' : message} </strong>
          {' »'}
        </p>
        <p> </p>{' '}
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React{' '}
        </a>{' '}
      </header>{' '}
    </div>
  )
}

export default App
