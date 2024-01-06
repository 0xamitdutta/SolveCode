import { useEffect } from 'react'
import './App.css'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { app, auth } from './config/firebase'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './components/Signup'
import { Header } from './components/Header'
import { Landing } from './components/Landing'
import { About } from './components/About'
import { Problems } from './components/Problems'
import { Submissions } from './components/Submissions'
import { Leaderboard } from './components/Leaderboard'

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
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  )
}

export default App