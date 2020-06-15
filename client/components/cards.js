import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FlipMove from 'react-flip-move'
import { addSelection, removeSelection, searchProducts } from '../redux/reducers/products'
import './main.scss'
import SortProducts from './sortProducts'
import Pagination from './pagination'

const Cards = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector((store) => store.products.currentPage)
  const list = useSelector((store) => store.products.list).slice(
    (currentPage - 1) * 50,
    currentPage * 50
  )
  const selection = useSelector((store) => store.products.selection)
  const base = useSelector((store) => store.products.base)
  const rates = useSelector((store) => store.products.rates)
  const sortType = useSelector((store) => store.products.sortType)
  const find = useSelector((store) => store.products.find)

  const symbols = {
    USD: '$',
    EUR: '€',
    CAD: 'C$'
  }
  const sortBy = (catalogList, type) => {
    if (type === 'price') {
      return catalogList.sort((a, b) => a.price - b.price)
    }
    if (type === 'highToLow') {
      return catalogList.sort((a, b) => b.price - a.price)
    }
    if (type === 'a-z') {
      return catalogList.sort((a, b) => a.title.localeCompare(b.title))
    }
    return catalogList.sort((a, b) => a.price - b.price)
  }
  const filteredList = list.filter((el) => el.title.toLowerCase().includes(find.toLowerCase()))
  return (
    <div>
      <div className="mt-5 mb-4">
        <SortProducts />
      </div>
      <input
        className="placeholder-grey appearance-none bg-transparent border-b-2 w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="search"
        onChange={(e) => dispatch(searchProducts(e.target.value))}
      />
      <div className="flex flex-wrap mt-10 -mx-12 shop mb-10">
        {sortBy(filteredList, sortType).map((card) => (
          <div className="w-1/4 px-12 ">
            <FlipMove
              staggerDelayBy={500}
              appearAnimation="accordionVertical"
              enterAnimation="fade"
              leaveAnimation="fade"
            >
              <div className="px-5 py-4 mb-5 border-solid border-2 border-gray-200 ... ">
                <div className="flex justify-center">
                  <img className=" h-64 w-full object-contain" src={card.image} alt="img" />
                </div>
                <div>{card.title}</div>
                <div className="flex">
                  <div>{symbols[base]}</div>
                  <div className="ml-2">{(card.price * (rates[base] || 1)).toFixed(2)}</div>
                </div>
                <div className="flex justify-between border-solid">
                  <button
                    type="button"
                    className="border-2 border-solid hover:text-pink-500 text-red-500 font-bold rounded-lg border shadow-lg text-black hover:bg-gray-400  px-4 "
                    onClick={() => dispatch(removeSelection(card.id))}
                  >
                    -
                  </button>
                  <span className="px-5">{selection[card.id] || 0}</span>
                  <button
                    type="button"
                    className="border-2 border-solid hover:text-pink-500 text-red-500 font-bold rounded-lg border shadow-lg text-black hover:bg-gray-400  px-4 "
                    onClick={() => dispatch(addSelection(card.id))}
                  >
                    +
                  </button>
                </div>
              </div>
            </FlipMove>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  )
}

Cards.propTypes = {}

export default React.memo(Cards)
