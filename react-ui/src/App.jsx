import React, { useCallback, useEffect, useState } from 'react'
import Menu from './page/Menu/Menu.jsx'
import Order from './page/Order/Order.jsx'
import EditMenu from './page/EditMenu/EditMenu.jsx'
import { getMenu } from './assets/api'
import { connect } from 'react-redux'
import './App.css'
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom'
import { menuInit } from './store/index'
class App extends React.Component {
  constructor(prpos) {
    super()
  }
  render() {
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
  componentDidMount() {
    console.log(this.props.menuInit)
    this.props.menuInit()
    // const getInit = () => dispatch => {
    console.log('kkk')
    // getMenu().then(res => {
    //   this.props.menu({
    //     // type: 'menu',
    //     // payload: {
    //     menu: res.data.data
    //     // }
    //   })
    // })
    // dispatch({ type: 'loginStart' })
    // request.post('/api/login', { data: userName }, () => {
    //   dispatch({ type: 'loginSuccess', payload: userName })
    // })
    // }
    // store.dispatch(getInit())
    // getMenu().then(res => {
    //   console.log(res.data.data)
    //   this.props.menu(res.data.data)
    //   // init.menu = res.data.data
    //   // let data = [
    //   //   { id: 1, flavour: 'meat love', price: '10.9' },
    //   //   { id: 2, flavour: 'hawaii', price: '9.9' }
    //   // ]
    //   // for (let i = 0; i < res.data.data.length; i++) {
    //   //     console.log(data.length)
    //   //     let cell = < MenuCell addItem = {
    //   //         this.addItem.bind(this)
    //   //     }
    //   //     data = {
    //   //         res.data.data[i]
    //   //     }
    //   //     key = {
    //   //         i
    //   //     }
    //   //     index = {
    //   //         i
    //   //     }
    //   //     />
    //   //     content.push(cell)
    //   //     console.log(content)
    //   // }
    //   // this.setState({ content: content, menuData: res.data.data })
    // })
  }
}
// const App = props => {
//   console.log(props)
//   getMenu().then(res => {
//     console.log(res.data.data)
//     // props.menu(res.data.data)
//     // init.menu = res.data.data
//     // let data = [
//     //   { id: 1, flavour: 'meat love', price: '10.9' },
//     //   { id: 2, flavour: 'hawaii', price: '9.9' }
//     // ]
//     // for (let i = 0; i < res.data.data.length; i++) {
//     //     console.log(data.length)
//     //     let cell = < MenuCell addItem = {
//     //         this.addItem.bind(this)
//     //     }
//     //     data = {
//     //         res.data.data[i]
//     //     }
//     //     key = {
//     //         i
//     //     }
//     //     index = {
//     //         i
//     //     }
//     //     />
//     //     content.push(cell)
//     //     console.log(content)
//     // }
//     // this.setState({ content: content, menuData: res.data.data })
//   })
//   // const [message, setMessage] = useState(null)
//   // const [isFetching, setIsFetching] = useState(false)
//   // const [url, setUrl] = useState('/getMenu')
//   // // const fetchData = useCallback(() => {
//   //   fetch(url)
//   //     .then(response => {
//   //       if (!response.ok) {
//   //         throw new Error(`status ${response.status}`)
//   //       }
//   //       return response.json()
//   //     })
//   //     .then(json => {
//   //       setMessage(json.data[0])
//   //       setIsFetching(false)
//   //     })
//   //     .catch(e => {
//   //       setMessage(`API call failed: ${e}`)
//   //       setIsFetching(false)
//   //     })
//   // }, [url])
//   // useEffect(() => {
//   //   setIsFetching(true)
//   //   fetchData()
//   // }, [fetchData])
//   // console.log(message)
//   return (
//     <HashRouter>
//       <nav>
//         <NavLink exact to={'/'}>
//           search
//         </NavLink>
//         <NavLink exact to={'/order'}>
//           oder
//         </NavLink>
//         <NavLink exact to={'/editMenu'}>
//           edit
//         </NavLink>
//       </nav>
//       <main>
//         <Switch>
//           <Route path="/" component={Menu} />
//           <Route path="/order" component={Order} />
//           <Route path="/editMenu" component={EditMenu} />
//         </Switch>
//       </main>
//     </HashRouter>
//   )
// }
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

const mapStateToProps = ({ ordering, menu }) => {
  return {
    ordering: ordering,
    menu
  }
}
const mapDispatchToProps = dispatch => {
  // console.log(dispatch)
  return {
    // menu: menu => {
    //   console.log('jj')
    //   return dispatch({
    //     type: 'menu',
    //     payload: {
    //       menu
    //     }
    //   })
    // },
    menuInit: menuInit
  }
}
export default connect(mapStateToProps, (mapDispatchToProps, { menuInit }))(App)
// export default App
