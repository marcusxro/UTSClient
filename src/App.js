import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import NotFound from './pages/NotFound';
import SIPCallFlowAndSpiels from './SIPLoans/SIPCallFlowAndSpiels';
import SIPProcessingOfApplications from './SIPLoans/SIPProcessingOfApplications'

export const Context = React.createContext()


function App() {
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      setActiveUser(user ? user : null);
    });
    return () => unsubscribe();
  }, [activeUser]);



  //removed the conditional rendering for authentication. v1 have it

  return (
    <Context.Provider value={[activeUser, setActiveUser]}>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={ <SignIn />} />
            <Route path='/Home'
               element={ <Hompage /> }  />
            <Route path='/all-categories'
               element={ <AllCater /> }  />
            <Route path='/query/:id'
               element={ <SearchedItem /> }  />
            <Route path='/category/:item'
               element={ <CaterPage /> }  />
            <Route path='/campaign/filtering-of-leads'
               element={ <Campaign /> }  />
            <Route path='/campaign/call-flow-and-spiels'
               element={ <CallAndSpiels /> }  />
            <Route path='/campaign/documentation'
               element={ <Documentation /> }  />
            <Route path='/campaign/exception-handling'
               element={ <Exception /> }  />
            <Route path='/personal-loan/filtering-of-leads'
               element={ <Ploan /> }  />
            <Route path='/personal-loan/call-flow-and-spiels'
               element={ <PloanCall /> }  />
            <Route path='/personal-loan/other-guidlines-for-docusign'
               element={ <PloanOther /> }  />
            <Route path='/personal-loan/documentation'
               element={ <PloanDocu /> }  />
            <Route path='/personal-loan/exception-handling'
               element={ <PloanException /> }  />

            <Route path='/SIP-loan/filtering-of-leads'
               element={ <FilteringOfLeads /> }  />

            <Route path='/SIP-loan/call-flow-and-spiels'
               element={ <SIPCallFlowAndSpiels /> }  />

            <Route path='/SIP-loan/documentation'
               element={ <SIPDocu /> }  />
            <Route path='/SIP-loan/exception-handling'
               element={ <SIPException /> }  />
            <Route path='/SIP-loan/prcessing-of-applications'
               element={ <SIPProcessingOfApplications /> }  />
           
            <Route path='/under-development'
               element={ <UnderDev /> }  />
            <Route path='/*' element={<NotFound /> } />
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
