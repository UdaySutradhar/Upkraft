import React from 'react'

const rows = [
  ['21 July','2:00 - 3:00 PM','Introduction to Piano','Eunice Robel & Arnold Hayes'],
  ['22 July','4:00 - 5:00 PM','Finger Warmups','Eunice Robel & Arnold Hayes'],
  ['23 July','3:00 - 4:00 PM','Simple Chords','Eunice Robel & Arnold Hayes'],
  ['23 July','4:00 - 5:00 PM','Rhythm Basics','Eunice Robel & Arnold Hayes'],
  ['24 July','5:00 - 6:00 PM','Treble & Bass','Eunice Robel & Arnold Hayes'],
  ['24 July','5:00 - 6:00 PM','Rhythm Basics','Eunice Robel & Arnold Hayes'],
]

export default function LessonsTable(){
  return (
    <table className="table">
      <thead>
        <tr><th>Date</th><th>Time</th><th>Course</th><th>Student Name</th></tr>
      </thead>
      <tbody>
        {rows.map((r, i)=> (
          <tr key={i}>
            <td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
