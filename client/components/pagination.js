import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortPage } from '../redux/reducers/products'

const Pagination = () => {
  const dispatch = useDispatch()
  const list = useSelector((store) => store.products.list)
  const pages = new Array(Math.ceil(list.length / 50)).fill(0).map((el, index) => index + 1)
  return (
    <div className="pagination flex">
      {pages.map((item) => (
        <button
          type="button"
          className="mr-6 mb-10  border-2 border-solid hover:text-pink-500 text-red-500 font-bold rounded-lg border shadow-lg text-black hover:bg-gray-400  px-4 "
          onClick={() => dispatch(sortPage(item))}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default Pagination
