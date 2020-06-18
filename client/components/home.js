import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import Header from './header1'
import { getProducts, getRates } from '../redux/reducers/products'
import Main from './main'
import Basket from './basket'
import Logs from './logs'
import { getLogs } from '../redux/reducers/logs'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getRates())
    dispatch(getLogs())
  }, [dispatch])

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:basket" component={() => <Basket />} />
        <Route exact path="/:basket/:logs" component={() => <Logs />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
