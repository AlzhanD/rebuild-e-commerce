import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setBase } from '../redux/reducers/products'

const Header = () => {
  const selection = useSelector((store) => store.products.selection)
  const base = useSelector((store) => store.products.base)
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
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto block ">
        <div className="text-sm lg:flex-grow">
          {['USD', 'EUR', 'CAD'].map((el) => (
            <button
              type="button"
              key={el}
              className="hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded ml-2 outline-none"
              onClick={() => dispatch(setBase(el, base))}
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z" />
              </svg>
            </button>
          </Link>
          <Link to="/basket">
            <button
              type="button"
              className=" hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded ml-2"
            >
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  cart
                </svg>
                : {totalQuantity}
              </div>
            </button>
          </Link>
          <Link to="/basket/logs">
            <button
              type="button"
              className=" hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded ml-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 6h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
