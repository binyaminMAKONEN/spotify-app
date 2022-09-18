import React from 'react'
import useAuto from './useAuto'

const Dashboard = ({code}) => {
    const accessToken =useAuto(code)
  return (
    <div>{code}</div>
  )
}

export default Dashboard