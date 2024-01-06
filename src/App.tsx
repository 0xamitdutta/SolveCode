import { useEffect } from 'react'
import './App.css'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { app, auth } from './config/firebase'
import { Signup } from './components/Signup'
import { Header } from './components/Header'

import { RecoilRoot, useRecoilState } from 'recoil'
import { userState } from './state/atoms/userState'

const App = () => {
  return (
    <RecoilRoot>
      <StoreApp />
    </RecoilRoot>
  )
}

const StoreApp = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user && user.email) {
        setUser({
          isLoading: false,
          user: {
            email: user.email,
          },
        });
      } else {
        setUser({
          isLoading: false,
        });
        // No user is signed in.
        console.log("There is no logged in user");
      }
    });
  }, []);

  if (user.isLoading) {
    return <div>Loading ...</div>;
  }

  if (!user.user) {
    return <div><Signup /></div>
  }

  return (
    <div>
      <Header />
    </div>
  )
}

export default App