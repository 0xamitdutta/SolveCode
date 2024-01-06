import React from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '../state/atoms/userState'
import { signOut } from "firebase/auth"
import { auth } from "../config/firebase"

export const Header = () => {
    const [user, setUser] = useRecoilState(userState);
    return (
        <div>
            <div className='flex justify-between bg-black text-white h-16 items-center px-4'>
                <h1 className='text-xl'>Solve Code</h1>
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
                <div className="text-white cursor-pointer hover:text-gray-300">About</div>
                <div className="text-white cursor-pointer hover:text-gray-300">Problems</div>
                <div className="text-white cursor-pointer hover:text-gray-300">Submissions</div>
                <div className="text-white cursor-pointer hover:text-gray-300">Leaderboard</div>
            </div>
        </div>
    )
}