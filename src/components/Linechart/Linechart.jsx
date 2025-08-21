import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const Linechart = ({HistoricalData}) => {

   const [data,setData]=useState([["Date", "Price"]])
   

   useEffect(()=>{
    let datacopy = [["Date", "Price"]]
    if(HistoricalData.prices){
        HistoricalData.prices.map((item) => {
            datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
        })
        setData(datacopy)
    }

   },[HistoricalData])
   return (
    <Chart
        chartType='LineChart'
        data={data}
        height="100%"
        legendToggle
    
    />
  )
}

export default Linechart