import React from 'react'

export default function StatCard({title, value, children}){
  return (
    <div className="card">
      <h4>{title}</h4>
      <div className="metric">{value}</div>
      {children}
    </div>
  )
}
