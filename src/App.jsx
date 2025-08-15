import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import ProfileSummary from './components/ProfileSummary.jsx'
import KPI from './components/KPI.jsx'
import LessonsTable from './components/LessonsTable.jsx'
import StatCard from './components/StatCard.jsx'
import ReferCard from './components/ReferCard.jsx'
import ProgressCard from './components/ProgressCard.jsx'

export default function App(){
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Topbar />
        <div className="content">
          <div className="left">
            <div className="profile card">
              <ProfileSummary />
              <div className="kpis">
                <KPI title="Total Active Students" value="30" />
                <KPI title="Tutor CSAT Score" value="80%" />
                <KPI title="Assignment Completion Rate" value="15%" />
              </div>
            </div>

            <div className="card">
              <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                <h4>Upcoming Lessons</h4>
                <a href="#" style={{fontWeight:600, textDecoration:'none'}}>View All</a>
              </div>
              <LessonsTable />
            </div>
          </div>

          <div className="right">
            <ReferCard />

            <div className="card">
              <h4>Overall Course Performance</h4>
              <ProgressCard value={7.6} max={10} />
            </div>

            <div className="card">
              <h4>Overall Student Performance</h4>
              <ProgressCard value={6.6} max={10} />
            </div>

            <div className="card">
              <h4>Feedback Pending</h4>
              <div style={{display:'flex', alignItems:'center', gap:16}}>
                <div className="progress" style={{['--pct']:'75%'}}><span>12</span></div>
                <button className="ghost">Give Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
