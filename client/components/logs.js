import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLogs } from '../redux/reducers/logs'

const Logs = () => {
  const dispatch = useDispatch()
  const logs = useSelector((store) => store.logsItem.logs)
  const list = useSelector((store) => store.products.list)
  useEffect(() => {
    dispatch(getLogs())
  }, [dispatch])

  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/4 px-4 py-2">Products</th>
            <th className="w-1/4 px-4 py-2">added to the basket</th>
            <th className="w-1/4 px-4 py-2">removed from the basket</th>
            <th className="w-1/4 px-4 py-2">type</th>
            <th className="w-1/4 px-4 py-2">time</th>
            <th className="w-1/4 px-4 py-2">currency</th>
          </tr>
        </thead>
        {list.map((item) => (
          <tbody>
            {logs.map((el) =>
              item.id === el.id ? (
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">
                    {el.type === 'ADD_TO_SELECTION' ? <div>{item.title}</div> : undefined}
                  </td>
                  <td className="border px-4 py-2">
                    {el.type === 'REMOVE_FROM_SECTION' ? <div>{item.title}</div> : undefined}
                  </td>
                  <td className="border px-4 py-2">{el.type}</td>

                  <td className="border px-4 py-2">{el.time}</td>
                </tr>
              ) : undefined
            )}
          </tbody>
        ))}
      </table>
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
