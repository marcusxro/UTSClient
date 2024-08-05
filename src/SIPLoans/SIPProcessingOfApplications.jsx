import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../comp/Header'
import Footer from '../comp/Footer'

const SIPProcessingOfApplications = () => {
    const nav = useNavigate()
    return (
        <div className='SIPFilter closer'>
            <Header />

            <div className="pageTitle">

            </div>
            <div className="Homepage">
                <div className='titleForPage'>PROCESSING OF APPLICATIONS </div>
                <div className="margLeft">
                    <h2>A. Call Retrieval/Safekeeping of Call Recordings</h2>
                    <div className="margLefts">
                        <p>Sales verifiers to retrieve and archive the call recordings.</p>
                    </div>
                    <h2>B. Call Validation</h2>
                    <div className="margLefts">
                        <p>1. Sales Admin assigns service requests in the closed sale database to SSA for call validation.</p>
                        <p>2. SSA checks the application based on the validation parameters.</p>
                        <p>3. If with discrepancy/lapses, Sales Verifier to assign back SR to TSA creator's ID for handling.</p>
                        <p>4. TSA updates information for verification and assigns it back SR to SSA.</p>
                        <p>5. Once call validation is complete, SSA will leave a checked note in the application SR and change the SR status for those applications that are for transmittal. SSA will indicate SIP application details in the SIP database.</p>
                        <p>6. Sales Admin creates transmittal of validated SIP applications and related documents and submits these to Operations for processing.</p>
                    </div>
                    <h2>C. Credit Card Operations</h2>
                    <div className="margLefts">
                        <p>1. Receives Transmittal from Outbound Sales Officer for processing.</p>
                        <p>2. Encodes application in BT Masterfile Database, handles posting in Cardlink and processing of disbursement of proceeds (Credit to Account or Manager's Check).</p>
                    </div>
                    <h2>D. Campaign Administrator</h2>
                    <div className="margLefts">
                        <p>1. Checks all the transmitted applications in BT Masterfile database if processed already.</p>
                        <p>2. Updates SR status to Closed once confirmed Booked.</p>
                        <p>3. Submits statistics report to Outbound Sales Head/Campaign owner as needed.</p>
                    </div>
                </div>
            </div>
            <div className="navigation">
                <div className="prev" onClick={() => { nav('/SIP-loan/exception-handling'); window.scrollTo(0, 0) }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (5)
                </div>

                <div className="next">
                    end  
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default SIPProcessingOfApplications
