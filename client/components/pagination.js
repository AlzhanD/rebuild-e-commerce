import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortPage } from '../redux/reducers/products'

const Pagination = () => {
  const dispatch = useDispatch()
  const list = useSelector((store) => store.products.list)
  const pages = new Array(Math.ceil(list.length / 50)).fill(0).map((el, index) => index + 1)
  return (
    <div className="text-sm lg:flex-grow">
      <select
        className="p-3 rounded-lg border-solid border-2 border-gray-400 bg-white "
        onChange={(e) => dispatch(sortPage(e.target.value))}
      >
        {pages.map((item) => (
          <option value={item}>page: {item}</option>
        ))}
      </select>
    </div>
  )
}

export default Pagination
