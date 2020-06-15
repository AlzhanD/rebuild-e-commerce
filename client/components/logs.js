import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from './head'
import { getLogs } from '../redux/reducers/products'

const Logs = () => {
  const dispatch = useDispatch()
  const logs = useSelector((store) => store.products.logs)
  const list = useSelector((store) => store.products.list)
  useEffect(() => {
    dispatch(getLogs())
  }, [dispatch])

  return (
    <div>
      <Head title="Hello" />
      <div className="flex flex-col items-start justify-between h-screen w-auto">
        <div className=" hover:text-red-500 text-red-700 font-bold rounded-lg border shadow-lg p-10">
          {logs.map((el) => (
            <div className="flex justify-between ">
              <div> {el.time}</div>
              {list.map((item) => (
                <div>
                  <div>
                    {item.id === el.id ? (
                      <div>
                        add {item.title}
                        to the basket
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
