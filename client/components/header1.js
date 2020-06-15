import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setBase } from '../redux/reducers/products'
import './main.scss'

const Header = () => {
  const selection = useSelector((store) => store.products.selection)
  const totalQuantity = Object.keys(selection).reduce((acc, rec) => {
    return acc + selection[rec]
  }, 0)
  const dispatch = useDispatch()
  return (
    <nav className="flex items-center justify-between flex-wrap border-b-2 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {['USD', 'EUR', 'CAD'].map((el) => (
            <button
              type="button"
              className="hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded ml-2 outline-none"
              onClick={() => dispatch(setBase(el))}
            >
              {el}
            </button>
          ))}
        </div>
        <div>
          <Link to="/">
            <button
              type="button"
              className=" hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded"
            >
              shop
            </button>
          </Link>
          <Link to="/basket">
            <button
              type="button"
              className=" hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded ml-2"
            >
              Cart: {totalQuantity}
            </button>
          </Link>
          <Link to="/basket/logs">
            <button
              type="button"
              className=" hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded ml-2"
            >
              Logs
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
