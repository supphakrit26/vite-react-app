import React from 'react'
import Datepicker from './Datepicker'

export default function DashboardLayout() {
  return (
    <div className="dashboard-root">
      <div className="dashboard-card">
        <div className="dashboard-grid">
          <aside className="sidebar">
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <div style={{width:28,height:28,background:'linear-gradient(90deg,#7c3aed,#06b6d4)',borderRadius:6}} />
              <strong>Academy</strong>
            </div>

            <nav style={{marginTop:12}}>
              <div className="nav-item active">Dashboard</div>
              <div className="nav-item">Courses</div>
              <div className="nav-item">Chats</div>
              <div className="nav-item">Grades</div>
              <div className="nav-item">Schedule</div>
              <div className="nav-item">Settings</div>
            </nav>

            <div style={{marginTop: 'auto'}} className="sidebar-card">
              <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:12}}>
                <div style={{width:120,height:120,background:'#f3f0ff',borderRadius:12}} />
                <div style={{fontWeight:700}}>Premium subscription</div>
                <div style={{color:'#6b7280'}}>Buy Premium and get access to new courses</div>
                <button style={{marginTop:12,background:'linear-gradient(90deg,#7c3aed,#6b46c1)',color:'#fff',padding:'8px 12px',borderRadius:10,border:'none'}}>More detailed</button>
              </div>
            </div>
          </aside>

          <main>
            <div className="topbar">
              <h2 style={{margin:0}}>Dashboard</h2>
              <div style={{display:'flex',alignItems:'center',gap:12}}>
                <div className="search-box">Search</div>
                <div style={{width:36,height:36,background:'#fff',borderRadius:10,boxShadow:'0 4px 12px rgba(16,24,40,0.04)'}} />
                <div style={{width:44,height:44,borderRadius:44,background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 12px rgba(16,24,40,0.04)'}}>P</div>
              </div>
            </div>

            <h3>New Courses</h3>
            <div className="courses-row" style={{marginTop:12}}>
              <div className="course-card" style={{background:'#fff3e0'}}>
                <div style={{height:90,background:'#ffd9b3',borderRadius:8}} />
                <div className="title">Geography</div>
                <div style={{color:'#6b7280',fontSize:13}}>12 lessons</div>
              </div>
              <div className="course-card" style={{background:'#f3e8ff'}}>
                <div style={{height:90,background:'#e9d5ff',borderRadius:8}} />
                <div className="title">JavaScript Course</div>
                <div style={{color:'#6b7280',fontSize:13}}>15 lessons</div>
              </div>
              <div className="course-card" style={{background:'#e6f6ff'}}>
                <div style={{height:90,background:'#cfeefd',borderRadius:8}} />
                <div className="title">Photography Course</div>
                <div style={{color:'#6b7280',fontSize:13}}>8 lessons</div>
              </div>
            </div>

            <h3 style={{marginTop:20}}>My Courses</h3>
            <div style={{marginTop:12}}>
              <table style={{width:'100%',borderCollapse:'collapse'}}>
                <tbody>
                  <tr style={{borderBottom:'1px solid #f1f1f5'}}>
                    <td style={{padding:'12px 8px'}}>Web Design</td>
                    <td style={{padding:'12px 8px',textAlign:'right'}}>May 12</td>
                    <td style={{padding:'12px 8px',textAlign:'right'}}>4.8</td>
                  </tr>
                  <tr style={{borderBottom:'1px solid #f1f1f5'}}>
                    <td style={{padding:'12px 8px'}}>Development Basics</td>
                    <td style={{padding:'12px 8px',textAlign:'right'}}>May 14</td>
                    <td style={{padding:'12px 8px',textAlign:'right'}}>4.4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>

          <aside style={{display:'flex',flexDirection:'column',gap:12}}>
            <div className="profile-card card">
              <div style={{width:64,height:64,borderRadius:64,background:'#f3e8ff'}} />
              <div style={{fontWeight:700}}>Esther Howard</div>
              <div style={{color:'#6b7280'}}>Elementary</div>
            </div>

            <div className="card">
              <h4 style={{marginTop:0}}>May 2022</h4>
              <Datepicker />
            </div>

            <div className="card">
              <h4 style={{marginTop:0}}>Homework progress</h4>
              <div style={{display:'flex',flexDirection:'column',gap:10}}>
                <div style={{background:'linear-gradient(90deg,#7c3aed,#6b46c1)',color:'#fff',padding:12,borderRadius:10}}>Styling with CSS</div>
                <div style={{background:'#fff',padding:12,borderRadius:10,boxShadow:'0 6px 18px rgba(16,24,40,0.04)'}}>Basics of programming</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
