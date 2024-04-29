import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'

const FilteringOfLeads = () => {
    const nav = useNavigate()
    return (
        <div className='SIPFilter closer'>
            <Header />
            <div className="pageTitle">

            </div>
            <div className="Homepage">
                <h1>Filtering of Leads</h1>
                <h3>Outbound Sales</h3>
                <p>Business Intelligence/Cards Marketing filters leads based on parameters.</p>
                <p><strong>Outbound Sales Campaign Administrator/Outbound Sales In-Charge assigns the leads for call-out of Outbound Sales Associates (OSA).</strong></p>
                <p>Outbound Sales Associates (OSA) exclude the following leads from call-out:</p>
                <ul>
                    <li>Invalid/No Contact Number</li>
                    <li>Private Banking Clients (for Pro-active campaigns only)</li>
                    <li>No Available Credit Limit (For BT/CTC/Client Initiated SIP for School/Client Initiated SIP for Hospital)</li>
                    <li>Negative Credit Limit (For BalCon/Project Apollo SIP for School & SIP for Hospital) - If SIPAD, check PCIE avail limit</li>
                    <li>Blocked/Cancelled Cards</li>
                    <li>Corporate Cards</li>
                    <li>DOSRI (Check if account is DOSRI)</li>
                    <li>No qualified transaction for balance conversion</li>
                    <li>For Balance Conversion, transaction requested is less than 5 banking days before due date from callback request.</li>
                </ul>
                <p>Use the following screens to check if qualified to apply:</p>
                <ul>
                    <li>PCUS - Available credit limit (Field: AVL LINE)</li>
                    <li>PCIE - Available limit that can be applied (Field: AVL INSTL)</li>
                    <li>PCUS - For unibanker, to check if tagged as DOSRI (Field: DOSRI)</li>
                    <li>PCIE - ECH Available limit and if qualified for madness (Field: Page 1 CRD LMT/AVL)</li>
                    <li>PCIL - if ECH is qualified for madness (Field: Page 1 USER CODE 3)</li>
                </ul>
                <p>ANNEX A: How to check available credit limit</p>
                <p>ANNEX B: How to check total amount for Balance Conversion</p>
                <p>ANNEX G: Checking of Transactions for Reversal in Cardlink</p>
                <p><a href="#">SIP Loans Campaign Annex</a></p>

                <h3>Customer Promo Code Checker</h3>
                <p>SMS invitation will no longer require the CHs to input their names and customer number in the SMS opt-ins.</p>
                <p>Search the ref code to determine the names of clients. If the promo code is not found, ask for the account details from the client.</p>
            </div>


            <div className="navigation">
                <div className="prev" onClick={() => { nav('/SIP-loan/exception-handling'); window.scrollTo(0, 0) }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (1)
                </div>

                <div className="next" onClick={() => { nav('/SIP-loan/documentation'); window.scrollTo(0, 0) }}>
                    next
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default FilteringOfLeads
