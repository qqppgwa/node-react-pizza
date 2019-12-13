import React from 'react'
import MenuCell from './MenuCell.jsx'
import style from './Menu.module.css'
import { getMenu } from '../../assets/api'
import Calcubox from './CalcuBox.jsx'
import { connect } from 'react-redux'
class Menu extends React.Component {
  constructor(props) {
    super()
    this.state = {
      // content: [],
      // menuData: [],
      showPop: null
    }
  }

  render() {
    console.log(this.props)
    let content = []
    let showPop = this.state.showPop
    let pop = showPop !== null ? <Calcubox data={this.props.pizza[showPop]} close={this.close.bind(this)} /> : null
    if (this.props.isInit) {
      for (let i = 0; i < this.props.pizza.length; i++) {
        // console.log(data.length)
        let cell = <MenuCell addItem={this.addItem.bind(this)} data={this.props.pizza[i]} key={i} index={i} />
        content.push(cell)
        // console.log(content)
      }
      // this.setState({ content: content })
    } else {
      content = <p>loading</p>
    }

    return (
      <div className={style.menuCon}>
        <div className={style.board}>{content}</div>
        {pop}
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
  addItem(a) {
    console.log(a)
    this.setState({ showPop: a })
  }
  close() {
    this.setState({ showPop: null })
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
const mapStateToProps = ({ ordering, isInit, pizza }) => {
  // console.log(a)
  return {
    ordering: ordering,
    isInit: isInit,
    pizza: pizza
  }
}
//
export default connect(mapStateToProps, null)(Menu)
// export default Menu
