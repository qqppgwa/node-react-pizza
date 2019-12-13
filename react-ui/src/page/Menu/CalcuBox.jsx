import React from 'react'
import style from './calcuBox.module.css'
import { connect } from 'react-redux'
class CalcuBox extends React.Component {
  constructor(props) {
    super()
    this.state = {
      crustValue: '',
      sizeValue: ''
    }
  }
  render() {
    console.log(this.props)
    let crustOpt = []
    let sizeOpt = []
    let toppingRadio = []
    const pizza = this.props.data
    for (let i = 0; i < this.props.crust.length; i++) {
      let opt = (
        <option value={JSON.stringify(this.props.crust[i])} key={i}>
          {this.props.crust[i].type}
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
        <option value={JSON.stringify(this.props.topping[i])} key={i}>
          {this.props.topping[i].size}
        </option>
      )
      toppingRadio.push(opt3)
    }

    return (
      <div className={style.cover} onClick={this.close.bind(this)}>
        <div className={style.box}>
          <h3>
            <p>{pizza.id}</p>
            {pizza.flavour}
          </h3>
          <p>
            <label htmlFor="seleCrust">Crust</label>
            <select id="seleCrust" onChange={this.crustChange.bind(this)}>
              {crustOpt}
            </select>
          </p>
          <p>
            <label htmlFor="seleSize">Size</label>
            <select id="seleSize" onChange={this.sizeChange.bind(this)}>
              {sizeOpt}
            </select>
          </p>
          <div className={style.add}>{toppingRadio}</div>
        </div>
      </div>
    )
  }
  crustChange() {
    console.log(window.document.getElementById('seleCrust').value)
    this.setState({ crustValue: JSON.parse(window.document.getElementById('seleCrust').value) })
    console.log(this.state)
  }
  sizeChange() {
    console.log(window.document.getElementById('seleSize').value)
    this.setState({ sizeValue: JSON.parse(window.document.getElementById('seleSize').value) })
    // console.log(this.state)
  }
  close() {
    this.props.close()
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
