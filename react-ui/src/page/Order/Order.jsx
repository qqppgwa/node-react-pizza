import React from 'react'
import style from './Order.module.css'
import { getOrderList} from '../../assets/api'
class Order extends React.Component{
  constructor(){
    super()
    this.state={
      list:[],
      item:''
    }
  }
  render(){
let list=this.state.list
console.log(list)
// if(this.state.list.length>0){
  let listCon=[]
  for(let i=0;i<list.length;i++){
    let item=(
      <li className={style.item} key={i}>
        <div>{list[i].flavour}</div>
        <div>{list[i].size+'"'}</div>
        <div>{list[i].crust}</div>
        <div>{list[i].total}</div>
        <div>{list[i].extraTop}</div>
        
      </li>
    )
    listCon.push(item)
  }
// }


    return (
    <div>
      <h1>Order List</h1>
      <ul className={style.orderList}>
        <li>
        <div>flavour</div>
        <div>size</div>
        <div>crust</div>
        <div>total</div>
        <div>{'Additional Topping'}</div>
        </li>
        {listCon}
      </ul>

  </div>
  )
  }
  componentDidMount(){
      getOrderList().then(res=>{
        console.log(res.data.data)
        this.setState({list:res.data.data})
   
})
  }
}
// const Order = props => {

//   return <div>
//     sss
//   </div>
// }
export default Order
