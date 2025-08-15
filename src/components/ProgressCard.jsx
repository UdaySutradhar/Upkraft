import React from 'react'

export default function ProgressCard({value, max=10}){
  const pct = Math.round((value/max)*100)
  const style = {['--pct']: pct+'%'}
  return (
    <div style={{display:'flex', alignItems:'center', gap:16}}>
      <div className="progress" style={style}><span>{value.toFixed(1)}/10</span></div>
    </div>
  )
}
