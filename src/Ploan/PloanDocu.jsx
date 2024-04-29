import React, { useState } from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'
const PloanDocu = () => {
    const nav = useNavigate()
    return (
        <div className='PloanCall closer'>
            <Header />
            <div className="pageTitle">
            </div>
            <div className="Homepage">
                <h1>Documentation</h1>
                <ol>
                    <li>Create Callback Cases for successful and unsuccessful call outs.</li>
                    <li>Create Inquiry Cases for Inbound calls.</li>
                    <li>Create Application Cases for Interested Calls.</li>
                </ol>
                <p><strong>Steps to Create Cases – Callback or Application</strong></p>
                <ol>
                    <li>Search for Client Name/RM Number/Customer Number.</li>
                    <li>Go to New Case Component.</li>
                    <li>Fill out the hierarchy details, click save.</li>
                    <li>Indicate all Call out details in New Case Comment then save.</li>
                    <li>For Application Cases, make sure to SUBMIT Cases and PID Status should be PASSED.</li>
                </ol>
                <p><strong>Opt in/Opt out (for leads from Cold Calls)</strong></p>
                <ul>
                    <li>Create Case for client's Opt-in/Opt out.</li>
                    <li>Case Hierarchy:</li>
                    <ul>
                        <li>Source: OSA</li>
                        <li>Type: General</li>
                        <li>Sub-Type: Call Center</li>
                        <li>Area: OSA Callout</li>
                        <li>Sub-Area: Opt-in/Opt-out</li>
                    </ul>
                    <li>Account Services (Feedback and Complaints View):</li>
                    <ul>
                        <li>Account / Customer No: Indicate client's RM Number</li>
                    </ul>
                </ul>
                <p><strong>Contact Info Cases (for leads from Cold Calls)</strong></p>
                <ul>
                    <li>Create Service Request for client's Contact Info Update. Close SR after creation.</li>
                    <li>Case Hierarchy:</li>
                    <ul>
                        <li>Source: OSA</li>
                        <li>Type: General</li>
                        <li>Sub-Type: Call Center</li>
                        <li>Area: Contact Info</li>
                        <li>Sub-Area: Updated-to Date/For Updating</li>
                    </ul>
                    <li>Account Services:</li>
                    <ul>
                        <li>In Customer Address Maintenance View:</li>
                        <ul>
                            <li>If contact information is still updated: Indicate client's RM Number and current contact information under CURRENT.</li>
                            <li>If contact information is for updating: Indicate client's RM Number and updated contact information on the corresponding field under NEW. If number in our record is updated and client has another contact number, indicate both contact numbers in the Phone no: field.</li>
                        </ul>
                    </ul>
                </ul>
                <p><strong>PL Callback Case</strong></p>
                <ul>
                    <li>Create corresponding service request for callback request and application.</li>
                    <li>OSA creates Salesforce Callback Case for leads assigned. (except if with PB cases)</li>
                    <ul>
                        <li>Callback Case should be assigned to OSA Case owner.</li>
                        <li>TSA Case owner to monitor created Callback Case to his/her ID and update Case status as necessary.</li>
                    </ul>
                    <li>Make sure to encode the complete details in database: SR Number, Sub-Area, Creation Date, Committed Date, and Siebel.</li>
                    <li>Case Hierarchy:</li>
                    <ul>
                        <li>PB Source:</li>
                        <ul>
                            <li>Source: OSA</li>
                            <li>Type: Loans</li>
                            <li>Sub-Type: Personal Loans</li>
                            <li>Channel: OSA</li>
                            <li>Area: Call Back Req</li>
                        </ul>
                        <li>SMS Source:</li>
                        <ul>
                            <li>Source: OSA</li>
                            <li>Type: Loans</li>
                            <li>Sub-Type: Personal Loans</li>
                            <li>Channel: OSA</li>
                            <li>Area: Call Back Req</li>
                        </ul>
                    </ul>
                    <li>Case Comment: Indicate call out result in notes view. Example - M09196237826 - RNA M0919637836 – CBR.</li>
                </ul>
                <p><strong>PL Application Case</strong></p>
                <ul>
                    <li>Create corresponding service request for callback request and application for Successful / Interested Clients.</li>
                    <li>TSA creates Service Request for PL Loan application log under RM record of client.</li>
                    <ul>
                        <li>Case Hierarchy:</li>
                        <ul>
                            <li>Source: OSA</li>
                            <li>Type: Loans</li>
                            <li>Sub-Type: Personal Loans</li>
                            <li>Channel: OSA</li>
                            <li>Area: Requests</li>
                            <li>Sub-Area: PL Invitation - Application</li>
                        </ul>
                    </ul>
                    <li>Subject field: TSA should indicate the Amount, Source, Campaign Name and Signing Option.</li>
                    <li>Case Comment:</li>
                    <ul>
                        <li>PID: Indicate PASSED STRICT PID/STRICT PID DONE. Include PID details.</li>
                        <li>OCIES:</li>
                        <ul>
                            <li>Promo Code</li>
                            <li>RM Number</li>
                            <li>Loan Amount (availed loan amount)</li>
                            <li>Loan Term in months</li>
                            <li>Monthly Amortization (indicative)</li>
                            <li>Effective Interest Rate</li>
                            <li>Fees/Charges/Due Date(30 days after loan release)</li>
                            <li>DocuSign: Confirmed client’s registered email address and mobile number? Yes</li>
                        </ul>
                        <li>Screenshots:</li>
                        <ul>
                            <li>Application Screenshot (transposed from FEMME)</li>
                            <li>GPA</li>
                            <li>ALFES</li>
                        </ul>
                        <li>Callout details:</li>
                        <ul>
                            <li>Number where client was contacted</li>
                            <li>Date and time of all successful call-outs to client</li>
                            <li>Okay for Validation</li>
                        </ul>
                    </ul>
                </ul>
            </div>

            <div className="navigation">
                <div className="prev" onClick={() => { nav('/personal-loan/other-guidlines-for-docusign'); window.scrollTo(0, 0) }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (4)
                </div>

                <div className="next" onClick={() => { nav('/personal-loan/exception-handling'); window.scrollTo(0, 0) }}>
                    Next <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PloanDocu
