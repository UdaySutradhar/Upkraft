import React from 'react'

export default function ReferCard(){
  return (
    <div className="card refer">
      <div className="cta">
        <div style={{fontSize:18, fontWeight:700}}>Refer and Earn</div>
        <div style={{opacity:.9}}>
          Invite friends and earn exclusive rewards for every successful referral
        </div>
        <div style={{display:'flex', gap:8}}>
          <button>Refer Now →</button>
        </div>
      </div>
      <img src="/refer-illustration.jpg" alt="refer" style={{width:140, borderRadius:12}}/>
    </div>
  )
}
