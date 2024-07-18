import React, { useEffect, useRef } from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import { innerContent } from '../comp/Category'

const Ploan = () => {
    const nav = useNavigate()


    const contentTitle = innerContent[4]?.content
    const location = useLocation();
    const { state } = location;
    const headerTitle = state?.headerTitle; // The state directly contains the headerTitle

    // Create refs for each title
    const titleRefs = useRef([]);

    // Initialize the refs array
    if (titleRefs.current.length !== contentTitle.length) {
        titleRefs.current = Array(contentTitle.length).fill().map((_, i) => titleRefs.current[i] || React.createRef());
    }

    useEffect(() => {
        if (headerTitle) {
            // Find the matching title and scroll to it
            const matchingTitleIndex = contentTitle.findIndex(item => item.title === headerTitle);
            if (matchingTitleIndex !== -1) {
                const element = titleRefs.current[matchingTitleIndex].current;
                const topOffset = element.getBoundingClientRect().top;
                const offset = window.pageYOffset + topOffset - 100; // Adjust 100 as needed

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        }
    }, [headerTitle, contentTitle, titleRefs]);


    return (
        <div className='Ploan closer'>
            <Header />

            <div className="pageTitle">
            </div>
            <div className="Homepage">
                <div className='titleForPage'>FILTERING OF LEADS</div>
                <div className="margLeft">
                    <p>a. Should be a Filipino Citizen (N/Q - Non-Filipino Citizen)</p>
                    <p>b. Checks ALS if with existing Personal Loan Account. (N/Q - With existing PL Account)</p>
                    <p>c. Check if client has existing application in ALFES (N/Q - With Pending PL Application)</p>
                    <ul>
                        <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            <h2 className={`liTitle ${contentTitle[0].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[0]}> {contentTitle[0].title}</h2>
                             In Process, Deferred, Approved, Rejected.</li>
                    </ul>
                    <p>d. Check if client is a Unibanker/DOSRI (N/Q - Unibanker)</p>
                    <p>e. Must be 21 years old and above to apply and not more than 60 years old upon loan maturity.</p>
                    <p>f. Check if client is preferred - TSA should advise client that the request will be endorsed to the branch who is handling his account.</p>
                    <p>
                        <h3 className={`liTitle ${contentTitle[1].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[1]}> {contentTitle[1].title}</h3>
                         TSA to tag the record as Contacted_For Endorsement to RM and to encode the Assigned RM Officer field in the PL campaign database as indicated in Salesforce.</p>
                    <p>g. For clients who are currently abroad:</p>
                    <ul>
                        <li>We can cater to clients who are currently abroad as long as DocuSign conditions are met.</li>
                        <li>The clients must be able to receive an SMS in their registered mobile number.</li>
                    </ul>
                </div>
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
