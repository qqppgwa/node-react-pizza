import React from 'react'
import style from './calcuBox.module.css'
import { connect } from 'react-redux'
class CalcuBox extends React.Component {
  constructor(props) {
    super()
    this.state = {
      pizza: props.data,
      crustValue: props.crust[0],
      sizeValue: props.size[0],
      toppingValue: [],
      total: props.data.basicPrice
    }
  }
  render() {
    console.log(this.state)
    let crustOpt = []
    let sizeOpt = []
    let toppingRadio = []
    const pizza = this.props.data
    for (let i = 0; i < this.props.crust.length; i++) {
      let opt = (
        <option value={JSON.stringify(this.props.crust[i])} key={i}>
          {this.props.crust[i].type + ` +$${this.props.crust[i].price}`}
        </option>
      )
      crustOpt.push(opt)
    }
    for (let i = 0; i < this.props.size.length; i++) {
      let opt2 = (
        <option value={JSON.stringify(this.props.size[i])} key={i}>
          {this.props.size[i].size}
        </option>
      )
      sizeOpt.push(opt2)
    }
    for (let i = 0; i < this.props.topping.length; i++) {
      let opt3 = (
        <p key={i}>
          <input
            type="checkbox"
            id={'check' + i}
            onChange={() => {
              this.checkHandle(i)
            }}
            value={JSON.stringify(this.props.topping[i])}
          />
          {`${this.props.topping[i].topping} +$${this.props.topping[i].price}`}
        </p>
      )
      toppingRadio.push(opt3)
    }

    return (
      <div
        className={style.cover}
        onClick={e => {
          this.close(e)
        }}
      >
        <div
          className={style.box}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <h3>
            <p>{pizza.id}</p>
            {pizza.flavour}
          </h3>
          <p>
            <label htmlFor="seleSize">Size</label>
            <select id="seleSize" defaultValue={this.state.sizeValue} onChange={this.sizeChange.bind(this)}>
              {sizeOpt}
            </select>
          </p>
          <p>
            <label htmlFor="seleCrust">Crust</label>
            <select id="seleCrust" defaultValue={this.state.crustValue} onChange={this.crustChange.bind(this)}>
              {crustOpt}
            </select>
          </p>

          <div className={style.add}>{toppingRadio}</div>
          <p>total:{this.state.total}</p>
          <button onClick={this.addOrder}>Add to Order</button>
        </div>
      </div>
    )
  }
  crustChange() {
    // console.log(window.document.getElementById('seleCrust').value)

    this.setState(
      {
        crustValue: JSON.parse(window.document.getElementById('seleCrust').value)
      },
      () => {
        this.priceCal()
      }
    )
    // console.log(this.state)
  }
  sizeChange() {
    // let sizeValue = JSON.parse(window.document.getElementById('seleSize').value)
    // let pizza = this.props.data
    // // let size = this.state.sizeValue
    // let crust = this.state.crustValue
    // let toppingPrice = 0
    // console.log(this.state.toppingValue.length)
    // for (let i = 0; i < this.state.toppingValue.length; i++) {
    //   toppingPrice += this.state.toppingValue[i].price
    // }
    // console.log(toppingPrice)
    this.setState(
      {
        sizeValue: JSON.parse(window.document.getElementById('seleSize').value)
        // total: pizza.basicPrice * sizeValue.priceRatio + crust.price + toppingPrice
      },
      () => {
        this.priceCal()
      }
    )

    // console.log(this.state)
  }

  close(e) {
    // console.log(e)
    e.stopPropagation()
    this.props.close()
  }
  checkHandle = i => {
    let el = window.document.getElementById('check' + i)
    let v = JSON.parse(el.value)
    // let str
    let a = this.state.toppingValue
    // console.log(v)

    // console.log(a)
    // console.log(window.document.getElementById('check' + i).checked)
    if (el.checked) {
      // str = this.state.toppingValue + v.topping + ','
      a.push(v)
      // this.setState({ toppingValue: a })
      // console.log(a)
      setTimeout(this.priceCal(), 500)
    } else {
      a = a.filter(item => {
        // console.log(item)
        // console.log(v)
        return item.topping !== v.topping
      })

      // console.log(b)
      // str = this.state.toppingValue.replace(v.topping + ',', '')
    }

    this.setState({ toppingValue: a }, () => {
      this.priceCal()
    })
  }

  priceCal = () => {
    // console.log(this.state)
    let sizeValue = this.state.sizeValue
    let pizza = this.props.data
    // let size = this.state.sizeValue
    let crust = this.state.crustValue
    let toppingPrice = 0
    // console.log(this.state.toppingValue.length)
    for (let i = 0; i < this.state.toppingValue.length; i++) {
      toppingPrice += this.state.toppingValue[i].price
    }
    // console.log(toppingPrice)
    // console.log(pizza.basicPrice)
    // console.log(sizeValue.priceRatio)
    // console.log(crust.price)
    // console.log(toppingPrice)
    this.setState({ total: pizza.basicPrice * sizeValue.priceRatio + crust.price + toppingPrice })
    // console.log(this.state.total)
  }
  addOrder = () => {
    let topStr = []
    for (let i = 0; i < this.state.toppingValue.length; i++) {
      topStr.push(this.state.toppingValue[i].topping)
    }
    let item = {
      pizza: this.state.pizza,
      crust: this.state.crustValue.type,
      size: this.state.sizeValue.size,
      topping: topStr,
      total: this.state.total
    }
    this.props.addOrder(item)
    this.props.close()

    // console.log(this.state)
  }
}
const mapStateToProps = ({ ordering, size, pizza, crust, topping }) => {
  return {
    ordering: ordering,
    crust: crust,
    size: size,
    topping: topping
    // pizza: pizza
  }
}
//
export default connect(mapStateToProps, null)(CalcuBox)
