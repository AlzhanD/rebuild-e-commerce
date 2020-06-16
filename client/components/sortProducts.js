import React from 'react'
import { useDispatch } from 'react-redux'
import { sortByType } from '../redux/reducers/products'

const SortProducts = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <select
        className="p-3 rounded-lg border-solid border-2 border-gray-400 bg-white "
        onChange={(e) => dispatch(sortByType(e.target.value))}
      >
        <option selected="selected" value="a-z">
          sort products
        </option>
        <option value="a-z">Alphabetically</option>
        <option value="lowToHigh">Price, low to high</option>
        <option value="highToLow">Price, high to low</option>
      </select>
    </div>
  )
}

SortProducts.propTypes = {}

export default React.memo(SortProducts)
