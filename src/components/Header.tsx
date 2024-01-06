import React from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '../state/atoms/userState'
import { signOut } from "firebase/auth"
import { auth } from "../config/firebase"
import { Link } from 'react-router-dom'

export const Header = () => {
    const [user, setUser] = useRecoilState(userState);
    return (
        <div>
            <div className='flex justify-between bg-black text-white h-16 items-center px-4'>
                <Link to='/' className='text-xl'>Solve Code</Link>
                <h1 className='text-xl'>Welcome {user?.user?.email}</h1>
                <button className='bg-red-500 px-4 py-2 rounded-md'
                    onClick={() => {
                        signOut(auth).then(() => {
                            // Sign-out successful.
                            setUser({
                                isLoading: false,
                            });
                        }).catch((error) => {
                            // An error happened.
                            console.log(error);
                        });
                    }}
                >
                    Sign out
                </button>
            </div>
            <div className='flex bg-black space-x-4 px-4 h-8'>
                <Link to='/about' className='text-white cursor-pointer hover:text-gray-300'>About</Link>
                <Link to='/problems' className='text-white cursor-pointer hover:text-gray-300'>Problems</Link>
                <Link to='/submissions' className='text-white cursor-pointer hover:text-gray-300'>Submissions</Link>
                <Link to='/leaderboard' className='text-white cursor-pointer hover:text-gray-300'>Leaderboard</Link>
            </div>
        </div>
    )
}