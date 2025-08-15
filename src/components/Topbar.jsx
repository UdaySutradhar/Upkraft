import React from 'react'

export default function Topbar(){
  return (
    <header className="topbar">
      <div className="search">
        <span>🔎</span>
        <input placeholder="Search here" />
      </div>
      <div className="user">
        <button className="ghost">+</button>
        <button className="ghost">🔔</button>
        <img src="https://i.pravatar.cc/100?img=65" alt="avatar"/>
        <div>
          <div style={{fontWeight:600}}>Sherry Wolf</div>
          <div style={{fontSize:12, color:'var(--muted)'}}>Tutor</div>
        </div>
      </div>
    </header>
  )
}
