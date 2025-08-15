import React from 'react'

const links = [
  {icon:'🏠', label:'Home', active:true},
  {icon:'👩‍🎓', label:'My Students'},
  {icon:'📚', label:'My Courses'},
  {icon:'🗓️', label:'Calendar'},
  {icon:'📝', label:'Assignment'},
  {icon:'🎵', label:'Music Library'},
  {icon:'🎯', label:'Practice Studio'},
  {icon:'💳', label:'Payment Summary'},
  {icon:'🎁', label:'Refer & Earn'},
  {icon:'⚙️', label:'Settings'},
]

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="dot"></span>
        <span>UPKRAFT</span>
      </div>
      <nav className="nav">
        {links.map((l)=> (
          <a className={l.active?'active':''} key={l.label} href="#"><span style={{fontSize:18}}>{l.icon}</span><span>{l.label}</span></a>
        ))}
      </nav>
    </aside>
  )
}
