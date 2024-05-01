import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'

const PloanOther = () => {
    const nav = useNavigate()
    return (
        <div className='PloanCall closer'>
            <Header />



            <div className="pageTitle">

            </div>

            <div className="Homepage">
                <div className='titleForPage'>OTHER GUIDELINES FOR DOCUSIGN</div>
               <div className="margLeft">
               <p><strong>Previously Approved Applications that remains unsigned/unbooked</strong></p>
                <ul>
                    <li>We can offer the DocuSign option to clients who have not yet signed their loan documents in the branch as long as the DocuSign conditions are met.</li>
                    <li>Call the client to follow up the signing of his loan documents and confirm if he would like to sign the loan documents through DocuSign.</li>
                    <li>Spiel: “Please note that the loan approval is only valid for 30 days. You may choose to sign the loan documents at your nominated BPI branch, or sign them electronically through DocuSign.”</li>
                    <li>If the client opts for DocuSign, TSA to encode client’s details in a new shared file for approved but unavailed applications-DocuSign.</li>
                    <li>SSA to revalidate the client’s details logged in the file. The following will be checked: client’s name, RM number, mobile number, email address, and settlement account number.</li>
                    <li>Once revalidated, SDCM Support will facilitate the sending of the loan documents through DocuSign.</li>
                </ul>
                <p><strong>For clients who are currently abroad</strong></p>
                <ul>
                    <li>We can cater to clients who are currently abroad as long as DocuSign conditions are met.</li>
                    <li>The clients must be able to receive an SMS in their registered mobile number.</li>
                </ul>
               </div>
            </div>



            <div className="navigation">
                <div className="prev" onClick={() => { nav('/personal-loan/call-flow-and-spiels'); window.scrollTo(0, 0) }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (3)
                </div>

                <div className="next" onClick={() => { nav('/personal-loan/documentation'); window.scrollTo(0, 0) }}>
                    Next <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PloanOther
