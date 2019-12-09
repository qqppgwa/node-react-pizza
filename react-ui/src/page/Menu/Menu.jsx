import React from 'react'
import MenuCell from './MenuCell.jsx'
import style from './Menu.module.css'
import { getMenu } from '../../assets/api'
import Calcubar from './CalcuBar.jsx'
class Menu extends React.Component {
  constructor() {
    super()
    this.state = {
      content: []
    }
  }
  componentDidMount() {
    caches.keys().then(function(cacheKeys) {
      console.log(cacheKeys) // ex: ["test-cache"]
    })
    let content = []
    getMenu().then(res => {
      // console.log(res.data.data)
      let data = [
        { id: 1, flavour: 'meat love', price: '10.9' },
        { id: 2, flavour: 'hawaii', price: '9.9' }
      ]
      for (let i = 0; i < data.length; i++) {
        console.log(data.length)
        let cell = <MenuCell data={data[i]} key={i} />
        content.push(cell)
        console.log(content)
      }
      this.setState({ content: content })
    })
  }
  render() {
    return (
      <div className={style.menuCon}>
        <div className={style.board}>{this.state.content}</div>
        <aside>
          <Calcubar />
        </aside>
      </div>
    )
    // getMenu().then(res => {
    //   // console.log(res.data.data)
    //   let data = [{ id: 1, flavour: 'meat love', price: '10.9' }]
    //   for (let i = 0; i < data.length; i++) {
    //     console.log(data.length)
    //     let cell = <MenuCell data={data[i]} index={i} />
    //     content.push(cell)
    //     console.log(content)
    //   }
    // })
  }
}
// const Menu = props => {
//   let content = []
// getMenu().then(res => {
//   // console.log(res.data.data)
//   let data = [{ id: 1, flavour: 'meat love', price: '10.9' }]
//   for (let i = 0; i < data.length; i++) {
//     console.log(data.length)
//     let cell = <MenuCell data={data[i]} index={i} />
//     content.push(cell)
//     console.log(content)
//   }
// })

// return <div>{content}</div>
// }
export default Menu
