import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FlipMove from 'react-flip-move'
import { addSelection, removeSelection } from '../redux/reducers/products'

const Basket = () => {
  const dispatch = useDispatch()
  const list = useSelector((store) => store.products.list)
  const selection = useSelector((store) => store.products.selection)
  const base = useSelector((store) => store.products.base)
  const rates = useSelector((store) => store.products.rates)

  const totalCalculate = (catalogs, carts) => {
    return catalogs.reduce((acc, rec) => {
      if (Object.keys(carts).includes(rec.id)) {
        return +acc + +rec.price * carts[rec.id]
      }
      return acc
    }, 0)
  }
  const symbols = {
    USD: '$',
    EUR: '€',
    CAD: 'C$'
  }
  const cart = list.filter((el) => Object.keys(selection).includes(el.id))

  return (
    <div>
      <div className="flex">
        <div> Total:</div>
        <div className="ml-2">
          {symbols[base]}
          {(totalCalculate(list, selection) * (rates[base] || 1)).toFixed(2)}
        </div>
      </div>
      {cart.map((card) => (
        <div>
          <div>
            <div>
              <FlipMove
                staggerDelayBy={2000}
                appearAnimation="accordionVertical"
                enterAnimation="fade"
                leaveAnimation="fade"
              >
                <div className="flex mb-4 justify-between border-b-2 hover:text-red-700 text-red-500 font-bold rounded-lg border shadow-lg p-10">
                  <div>
                    <div>{card.title}</div>
                    {symbols[base]}
                    {((selection[card.id] || 0) * (card.price * (rates[base] || 1))).toFixed(2)}
                  </div>
                  <div className="flex justify-between items-center ">
                    <button
                      type="button"
                      className="border-2 border-solid border-gray-200 hover:bg-gray-400 text-black rounded-full  px-4 "
                      onClick={() => dispatch(removeSelection(card.id))}
                    >
                      -
                    </button>
                    <span className="px-5">{selection[card.id] || 0}</span>
                    <button
                      type="button"
                      className="border-2 border-solid border-gray-200 hover:bg-gray-400 text-black rounded-full  px-4 "
                      onClick={() => dispatch(addSelection(card.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </FlipMove>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
