import React from 'react'
import { useGetAllProductsQuery } from '../api/apiSlice'

function Data() {
    const {data}= useGetAllProductsQuery()
    console.log(data)
  return (
    <h1>Data:</h1>
  )
}

export default Data
