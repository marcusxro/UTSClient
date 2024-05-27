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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Hompage />} />
          <Route path='/all-categories' element={<AllCater />} />
          <Route path='/query/:id' element={<SearchedItem />} />

          {/* categories page */}
          <Route path='/category/:item' element={<CaterPage />} />


          {/* //campain guidlines */}
          <Route path='/campaign/filtering-of-leads' element={<Campaign />} />
          <Route path='/campaign/call-flow-and-spiels' element={<CallAndSpiels />} />
          <Route path='/campaign/documentation' element={<Documentation />} />
          <Route path='/campaign/exception-handling' element={<Exception />} />
          {/* 
          PersonalLoan */}
          <Route path='/personal-loan/filtering-of-leads' element={<Ploan />} />
          <Route path='/personal-loan/call-flow-and-spiels' element={<PloanCall />} />
          <Route path='/personal-loan/other-guidlines-for-docusign' element={<PloanOther />} />
          <Route path='/personal-loan/documentation' element={<PloanDocu />} />
          <Route path='/personal-loan/exception-handling' element={<PloanException />} />


          {/* SIP Loans */}
          <Route path='/SIP-loan/filtering-of-leads' element={<FilteringOfLeads />} />
          <Route path='/SIP-loan/documentation' element={<SIPDocu />} />
          <Route path='/SIP-loan/exception-handling' element={<SIPException />} />
          {/* <Route path='/personal-loan/call-flow-and-spiels' element={<PloanCall />} />  
          <Route path='/personal-loan/other-guidlines-for-docusign' element={<PloanOther />} />  
          <Route path='/personal-loan/documentation' element={<PloanDocu />} />  
          <Route path='/personal-loan/exception-handling' element={<PloanException />} />   */}

          {/* Under Development Route */}
          <Route path='/under-development' element={<UnderDev />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
