import React, { useEffect, useRef } from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'
import { innerContent } from '../comp/Category'
import { useLocation } from 'react-router-dom'

const Campaign = () => {
    
    const nav = useNavigate('')

    const contentTitle = innerContent[0]?.content
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
        <div className='CampaignPage closer'>
            <Header />
            <div className="pageTitle">
            </div>
            <div className="Homepage">
                <div className='titleForPage'>FILTERING OF LEADS</div>
                <div className="margLeft">
                    <ol>
                        <li>
                            <ol type="a">
                                <div className={`liTitle ${contentTitle[0].title === headerTitle ? 'searched' : ''}`} ref={titleRefs.current[0]}>
                                {contentTitle[0].title}
                                </div>

                                <li >Names with foreign sounding name (N/Q - Foreigner)</li>
                                <li>Master list name is company name (N/Q - Corp account/ business name)</li>
                                <li>Client is more than 60 years old (N/Q - Age) - can facilitate application if client is 60 years old at point of call
                                    <p>NOTE: For client-initiated applications included in the PQ Master list and client is above 60 years old. - okay to proceed with application as long as with active deposit account.</p>
                                </li>
                                <li>Client is less than 21 years old (N/Q - Age) - if included in the PQ Campaign, we can facilitate application for clients who will turn 21 within the year (please refer to email thread below)</li>
                            </ol>
                        </li>
                        <li style={{ marginTop: "30px" }}>
                        <div className={`liTitle ${contentTitle[1].title === headerTitle ? 'searched' : ''}`} ref={titleRefs.current[1]}>
                                {contentTitle[1].title}
                            </div>
                            <ol type="a">
                                <li>Client with active credit card already, or cancelled card with remaining balance in PCUS (Not Qualified)</li>
                                <li>Client with active BFB credit card, or cancelled card with remaining balance in PCUS (Not Qualified)</li>
                                <li>Check CCFES if the client has an existing application.
                                    <p>If there is an existing record, do not proceed with the call out. Update NQ reason in the campaign database as N/Q - With Active BPI/BFB Card/Blocked &lt;12month or N/Q - With Existing Application (With CCFES).</p>
                                </li>
                                <li>Files are saved in the server: Z:\2024 Internal Sales\2024 Campaign Folders\2024 PQ Masterfiles and Deficiency Files
                                    <p>If included, do not proceed with the call out. Update callout status in the campaign database as No Call out_Excluded from call out - With Branch Deficiency</p>
                                    <p>See ANNEX B on steps to check if the cancelled credit card is an Express Start Account.</p>
                                </li>
                            </ol>
                        </li>
                        <li style={{ marginTop: "30px" }}>
                        <div className={`liTitle ${contentTitle[2].title === headerTitle ? 'searched' : ''}`} ref={titleRefs.current[2]}>                     
                                       {contentTitle[2].title}
                            </div>
                            <ol type="a">
                                <li>Record with do not call for sales tagging (Don't call for sales)</li>
                                <li>Customer segment is Private Banking (Not Qualified)</li>
                                <li>Customer segment is Preferred Banking (Not Qualified for Invitation to Apply. For ITA for Loan Campaign/Coffee Break/Client Initiated Calls, OK to proceed.)</li>
                            </ol>
                        </li>
                        <li style={{ marginTop: "30px" }}>
                        <div className={`liTitle ${contentTitle[3].title === headerTitle ? 'searched' : ''}`} ref={titleRefs.current[3]}>
                                {contentTitle[3].title}
                            </div>
                        </li>
                        <li style={{ marginTop: "30px" }}>
                        <div className={`liTitle ${contentTitle[4].title === headerTitle ? 'searched' : ''}`} ref={titleRefs.current[4]}>
                                {contentTitle[4].title}
                            </div>

                            <ol type="a">
                                <li>If incomplete number, international contact number or BPI Direct contact number - 8169548 (N/Q - No contact number)</li>
                                <li>If no contact number in Masterfile - includes 9999, 1234, etc. (N/Q - No contact number)</li>
                            </ol>
                        </li>
                        <li style={{ marginTop: "30px" }}>
                        <div className={`liTitle ${contentTitle[5].title === headerTitle ? 'searched' : ''}`} ref={titleRefs.current[5]}>
                                {contentTitle[5].title}
                            </div>
                            <ul>
                                <li>Curing - OK for call out</li>
                                <li>Deferred - OK for call out</li>
                                <li>Declined - valid for call out regardless of application date.</li>
                                <li>In Process - not valid for call out (Not Qualified)</li>
                                <li>Complete - not valid for call out (Not Qualified)</li>
                            </ul>
                        </li>
                        <li style={{ marginTop: "30px" }}>
                        <div className={`liTitle ${contentTitle[6].title === headerTitle ? 'searched' : ''}`} ref={titleRefs.current[6]}>
                                {contentTitle[6].title}
                            </div>
                        </li>

                    </ol>
                    <div className={`liTitle ${contentTitle[7].title === headerTitle ? 'searched' : ''}`} ref={titleRefs.current[7]}>
                        {contentTitle[7].title}
                    </div>
                    <ol>
                        <li>
                            <p>Campaign Admin checks mailbox for the SMS sent to Outbound Sales Mailbox. Filters all SMS reply for credit card application.</p>
                        </li>
                        <li>
                            <p>Campaign Admin updates the status in the Campaign database.</p>
                        </li>
                        <li>
                            <p>TSA handles the callback for interested clients.</p>
                            <p><strong className={` ${contentTitle[8].title === headerTitle ? 'searched' : ''}`} ref={titleRefs.current[8]}>{contentTitle[8].title}</strong></p>
                            <p>“Because you are a valued depositor of BPI, we're inviting you to apply for a BPI Credit Card. With a BPI Credit Card, you get the spending power to enjoy the lifestyle you deserve – conveniently and safely in more than a million stores globally and online. If you are interested to apply for a BPI Credit Card, just text BPICC(space)&lt;name of client&gt; and send to 09188910000 and expect a call from our team.”</p>
                        </li>
                    </ol>
                    <p><strong className={` ${contentTitle[9].title === headerTitle ? 'searched' : ''}`} ref={titleRefs.current[9]}>{contentTitle[9].title}:</strong> Get the promo code received by the client via SMS or eDM and verify the code versus the PQ Masterfile</p>

                </div>
            </div>
            <div className="navigation">
                <div className="prev" onClick={() => { nav('/campaign/exception-handling') }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (1)
                </div>

                <div className="next" onClick={() => { nav('/campaign/call-flow-and-spiels'); window.scrollTo(0, 0) }}>
                    Next <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Campaign
