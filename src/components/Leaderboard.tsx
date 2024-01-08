import React from 'react'

const LEADERBOARD = [
  {
    id: 1,
    name: 'John Doe',
    score: 75,
  },
  {
    id: 2,
    name: 'Jane Doe',
    score: 99,
  },
  {
    id: 3,
    name: 'Foo Bar',
    score: 89,
  },
]

export const Leaderboard = () => {
  return (
    <div>
      <h1 className='text-xl font-bold p-4'>LEADERBOARD</h1>
      <div className='flex justify-between p-4'>
        <div className='font-bold'>Id</div>
        <div className='font-bold'>Name</div>
        <div className='font-bold'>Score</div>
      </div>
      {LEADERBOARD.map((item) => (
        <div key={item.id} className='flex justify-between p-4 shadow-md'>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.score}</div>
        </div>
      ))}

    </div>
  )
}