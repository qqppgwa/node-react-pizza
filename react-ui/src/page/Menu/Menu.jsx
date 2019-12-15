import React from 'react'
import MenuCell from './MenuCell.jsx'
import OrderingList from './OrderingList.jsx'
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
    // console.log(this.props)
    let content = []
    let showPop = this.state.showPop
    let pop = showPop !== null ? <Calcubox data={this.props.pizza[showPop]} close={this.close.bind(this)} addOrder={this.addOrder} /> : null
    console.log(this.props.ordering.length)
    let orderList = this.props.ordering.length > 0 ? <OrderingList l={this.props.ordering.length} /> : null
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
        {orderList}
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
    // console.log(a)
    this.setState({ showPop: a })
  }
  close() {
    this.setState({ showPop: null })
  }
  addOrder = item => {
    console.log(item)
    let Item=item
    Item.pizza=item.pizza.flavour

    Item.topping=item.topping.length>0?item.topping.join(','):'none'
    // console.log(i)
    let arr = this.props.ordering
    arr.push(Item)
    // console.log(this.props.ordering)
    this.props.orderIng(arr)
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
const mapDispatchToProps = dispatch => {
  //update
  return {
    orderIng: item => {
      // console.log(item)
      dispatch({
        type: 'Ordering',
        payload: {
          list: item
        }
      }) //store.js裡的action
    }
  }
}
//
export default connect(mapStateToProps, mapDispatchToProps)(Menu)
// export default Menu
