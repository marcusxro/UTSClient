import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'

const Ploan = () => {
    const nav = useNavigate()
    return (
        <div className='Ploan closer'>
            <Header />

            <div className="pageTitle">
            </div>
            <div className="Homepage">
                <h1>Filtering of Leads - Personal Loan Campaign</h1>
                <p>a. Should be a Filipino Citizen (N/Q - Non-Filipino Citizen)</p>
                <p>b. Checks ALS if with existing Personal Loan Account. (N/Q - With existing PL Account)</p>
                <p>c. Check if client has existing application in ALFES (N/Q - With Pending PL Application)</p>
                <ul>
                    <li>ALFES Status: In Process, Deferred, Approved, Rejected.</li>
                </ul>
                <p>d. Check if client is a Unibanker/DOSRI (N/Q - Unibanker)</p>
                <p>e. Must be 21 years old and above to apply and not more than 60 years old upon loan maturity.</p>
                <p>f. Check if client is preferred - TSA should advise client that the request will be endorsed to the branch who is handling his account.</p>
                <p>Note: TSA to tag the record as Contacted_For Endorsement to RM and to encode the Assigned RM Officer field in the PL campaign database as indicated in Salesforce.</p>
                <p>g. For clients who are currently abroad:</p>
                <ul>
                    <li>We can cater to clients who are currently abroad as long as DocuSign conditions are met.</li>
                    <li>The clients must be able to receive an SMS in their registered mobile number.</li>
                </ul>
            </div>


            <div className="navigation">
                <div className="prev">
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (1)
                </div>

                <div className="next" onClick={() => { nav('/personal-loan/call-flow-and-spiels'); window.scrollTo(0, 0) }}>
                    Next <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Ploan
