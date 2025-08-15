import React from 'react'

export default function ProfileSummary(){
  return (
    <div className="profileCard">
      <div className="avatar">
        <img src="https://i.pravatar.cc/300?img=68" alt="Sherry" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
      </div>
      <div>
        <div style={{fontWeight:700, fontSize:18}}>Sherry Wolf</div>
        <div style={{color:'var(--muted)'}}>Piano Tutor</div>
        <div className="chips" style={{marginTop:8}}>
          <span className="chip">Students • 30</span>
          <span className="chip">Course • 6</span>
          <span className="chip">Reward • 3</span>
        </div>
      </div>
    </div>
  )
}
