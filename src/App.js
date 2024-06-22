import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Hompage from './pages/Hompage';
import Campaign from './pages/Campaign';
import CallAndSpiels from './CampaignResources/CallAndSpiels';
import Documentation from './CampaignResources/Documentation';
import Exception from './CampaignResources/Exception';
import AllCater from './pages/AllCater';
import SearchedItem from './pages/SearchedItem';
import Ploan from './Ploan/Ploan';
import PloanCall from './Ploan/PloanCall';
import PloanOther from './Ploan/PloanOther';
import PloanDocu from './Ploan/PloanDocu';
import PloanException from './Ploan/PloanException';
import FilteringOfLeads from './SIPLoans/FilteringOfLeads';
import SIPDocu from './SIPLoans/SIPDocu';
import SIPException from './SIPLoans/SIPException';
import CaterPage from './pages/CaterPage';
import UnderDev from './pages/UnderDev';
import SignIn from './pages/SignIn';
import React, { useEffect, useState } from 'react';
import ProtectedRoute from './ProtectedRoute';

import { onAuthStateChanged } from 'firebase/auth';
import { Auth } from './Authentication';


export const Context = React.createContext()


function App() {

  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    const isUser = onAuthStateChanged(Auth, (user) => {
      if (user) {
        setActiveUser(user)
      } else {
        setActiveUser(null)
      }
    })

    return () => isUser()
  }, [activeUser])

  return (
    <Context.Provider value={[activeUser, setActiveUser]}>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/Home' element={<ProtectedRoute element={activeUser ? <Hompage /> : <></>}  />} />
            <Route path='/all-categories' element={<ProtectedRoute element={activeUser ? <AllCater /> : <></>} />} />
            <Route path='/query/:id' element={<ProtectedRoute element={activeUser ? <SearchedItem /> : <></>} />} />
            <Route path='/category/:item' element={<ProtectedRoute element={activeUser ? <CaterPage /> : <></>} />} />
            <Route path='/campaign/filtering-of-leads' element={<ProtectedRoute element={activeUser ? <Campaign /> : <></>} />} />
            <Route path='/campaign/call-flow-and-spiels' element={<ProtectedRoute element={activeUser ? <CallAndSpiels /> : <></>} />} />
            <Route path='/campaign/documentation' element={<ProtectedRoute element={activeUser ? <Documentation /> : <></>} />} />
            <Route path='/campaign/exception-handling' element={<ProtectedRoute element={activeUser ? <Exception /> : <></>} />} />
            <Route path='/personal-loan/filtering-of-leads' element={<ProtectedRoute element={activeUser ? <Ploan /> : <></>} />} />
            <Route path='/personal-loan/call-flow-and-spiels' element={<ProtectedRoute element={activeUser ? <PloanCall /> : <></>} />} />
            <Route path='/personal-loan/other-guidlines-for-docusign' element={<ProtectedRoute element={activeUser ? <PloanOther /> : <></>} />} />
            <Route path='/personal-loan/documentation' element={<ProtectedRoute element={activeUser ? <PloanDocu /> : <></>} />} />
            <Route path='/personal-loan/exception-handling' element={<ProtectedRoute element={activeUser ? <PloanException /> : <></>} />} />
            <Route path='/SIP-loan/filtering-of-leads' element={<ProtectedRoute element={activeUser ? <FilteringOfLeads /> : <></>} />} />
            <Route path='/SIP-loan/documentation' element={<ProtectedRoute element={activeUser ? <SIPDocu /> : <></>} />} />
            <Route path='/SIP-loan/exception-handling' element={<ProtectedRoute element={activeUser ? <SIPException /> : <></>} />} />
            <Route path='/under-development' element={<ProtectedRoute element={activeUser ? <UnderDev /> : <></>} />} />
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
