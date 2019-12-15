import React, { useState, useEffect } from 'react'
import style from './OrderingList.module.css'
import { saveOrder} from '../../assets/api'
import { connect } from 'react-redux'

const OrderingList = props => {
  // const [newOrder, setNewOrder] = useState(props.ordering)
  // useEffect(() => {
  //   // if (componentDidUpdate & (x or y changed))
  //   setNewOrder(props.ordering)
  // }, newOrder)
  console.log(props)
  let list = []
  let total = 0
  for (let i = 0; i < props.ordering.length; i++) {
    let data = props.ordering[i]
    console.log(data)
    let item = (
      <ul key={i}>
        <li>flavour : {data.pizza}</li>
        <li>size : {data.size}"</li>
        <li>cust : {data.crust}</li>
        <li>
          additional Topping :
          <br />
          {data.topping}
        </li>
        <li>Subtotal : {data.total}</li>
      </ul>
    )

    list.push(item)
    total += data.total
  }
  const confirmOrder = () => {
    saveOrder(props.ordering).then(res=>{
      props.orderIng([])
})
    console.log(props.ordering)
    // console.log('jjj')
  }
  return (
    <aside className={style.list}>
      {list}
      <p>Total : {total}</p>
      <button onClick={confirmOrder}>Confirm</button>
    </aside>
  )
}
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
export default connect(mapStateToProps, mapDispatchToProps)(OrderingList)
