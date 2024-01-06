import React from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from '../state/atoms/userState'

const Landing = () => {
  const user = useRecoilValue(userState);
  
  if(user) {
    return (
      <div>
        <h1 className='text-2xl'>Welcome { user.email }</h1>
      </div>
    )
  }
  return (
    <div>
      <h1 className='text-2xl'>Welcome User</h1>
    </div>
  )
}

export default Landing