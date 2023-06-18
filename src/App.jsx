import { Fragment } from 'react'
import './App.css'

import {ConfigProvider } from 'antd';

import Layout from './components/Layout'

function App() {
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#3cb815'
      }
    }}>
      <Fragment>
        <Layout />
      </Fragment>
    </ConfigProvider>
  )
}

export default App
