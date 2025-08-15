import React from 'react'

export default function KPI({title, value}){
  return (
    <div className="card">
      <h4>{title}</h4>
      <div className="metric">{value}</div>
    </div>
  )
}
