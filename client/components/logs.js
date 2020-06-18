import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLogs } from '../redux/reducers/logs'

const Logs = () => {
  const dispatch = useDispatch()
  const logs = useSelector((store) => store.logsItem.logs)
  useEffect(() => {
    dispatch(getLogs())
  }, [dispatch])

  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/4 px-4 py-2">actions</th>
            <th className="w-1/4 px-4 py-2">Time</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((el) => (
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">{el.event}</td>
              <td className="border px-4 py-2">{el.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
