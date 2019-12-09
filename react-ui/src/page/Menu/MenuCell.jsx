import React from 'react'
import style from './MenuCell.module.css'
// import { getMenu } from '../../assets/api'
const MenuCell = props => {
  console.log(props.data)
  const data = props.data
  return (
    <div className={style.cell}>
      <p>{data.id}</p>
      <p>{data.flavour}</p>
    </div>
  )
}
export default MenuCell
