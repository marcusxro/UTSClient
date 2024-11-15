import React, { useEffect, useRef } from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import { innerContent } from '../comp/Category'


const PloanCall = () => {

    const nav = useNavigate()

    const contentTitle = innerContent[5]?.content
    const location = useLocation();
    const { state } = location;
    const headerTitle = state?.headerTitle; // The state directly contains the headerTitle

    // Create refs for each title
    const titleRefs = useRef([]);

    // Initialize the refs array
    if (titleRefs.current.length !== contentTitle.length) {
        titleRefs.current = Array(contentTitle.length).fill().map((_, i) => titleRefs.current[i] || React.createRef());
    }


    const styles = {
        container: {
            maxWidth: '800px',
            margin: '10px 0',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f9f9f9',
            border: '1px solid #a8181f',
            padding: '0px',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column'
        },
        title: {
            color: 'white',
            textAlign: 'center',
            fontSize: '24px',
        },
        subtitle: {
            color: 'yellow',
            textAlign: 'center',
            fontSize: '20px',
            marginBottom: '5px',
        },
        date: {
            textAlign: 'center',
            marginBottom: '15px',
            color: 'white',
            fontStyle: 'italic',
        },
        list: {
            listStyleType: 'none',
            padding: '0',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
        },
        th: {
            backgroundColor: '#b22222',
            color: '#fff',
            padding: '10px',
            textAlign: 'left',
        },
        cons: {
            backgroundColor: "#a8181f"
        },
        td: {
            padding: '10px',
            verticalAlign: 'top',
            width: '50%',
            border: '1px solid #a8181f',
        },
        ul: {
            margin: '0',
            padding: '20px',
        },
    };


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
        <div className='PloanCall closer'>
            <Header />
            <div className="pageTitle">
            </div>
            <div className="Homepage">
                <div className='titleForPage'>CALL FLOW AND SPIELS</div>
                <div className="margLeft">
                    <ol>
                        <li>
                            <h3 className={`liTitle ${contentTitle[0].title === headerTitle ? 'searched' : ''}`}
                                ref={titleRefs.current[0]}> {contentTitle[0].title}</h3>
                            <p>"Good Morning/Afternoon/Evening! This is (Insert Name) from Bank of the Philippine Islands. May I speak with (name of client)?" - should be verbatim</p>
                            <ul>
                                <li>If client is not available, ask for other contact information and best time to call back.</li>
                                <li>If wrong number, verify the dialed number.</li>
                            </ul>
                        </li>
                        <li>
                            <h3 className={`liTitle ${contentTitle[1].title === headerTitle ? 'searched' : ''}`}
                                ref={titleRefs.current[1]}> {contentTitle[1].title}</h3>
                            <p>“We received your text expressing your intent to avail of a Personal Loan. We would like to share an EXCLUSIVE offer that you might find USEFUL. Is this a good time for us to talk about it?”</p>
                            <ol type="A">
                                <li>
                                    <h4 className={`liTitle ${contentTitle[2].title === headerTitle ? 'searched' : ''}`}
                                        ref={titleRefs.current[2]}> {contentTitle[2].title}</h4>
                                    <p>Outbound number spiel:</p>
                                    <p>Mr./Ms. ________, This is a service call out from BPI and I am using the BPI outbound number 027795-2500 or 028459-2200 which you can check through www.bpi.com.ph/creditcards.</p>
                                    <p>Spiel to get client's consent on asking for personal information and for call recording is mandatory.</p>
                                    <p>"Please be advised that we will be asking for your personal information, and this call is being recorded for Quality Assurance purposes. Is it okay to proceed?" (Client must agree)</p>
                                    <p>Alternative spiel maybe used:</p>
                                    <p>“Please be advised that this call is being recorded for Quality Assurance purposes and that we will be asking for personal information/details. Is it okay to proceed?" (Client must agree)</p>
                                    <p>If Client is NOT OK to record the call, direct the client to our online or branch channel for regular applications.</p>
                                    <p>Client Initiated Spiel – ECL : Refer to ANNEX B</p>
                                    <p>Client Initiated Spiel : (SMS/EDM)</p>
                                    <p>ANNEX B – EXPRESS CASH LOAN (ECL)</p>
                                </li>
                                <li>
                                    <h4 className={`liTitle ${contentTitle[3].title === headerTitle ? 'searched' : ''}`}
                                        ref={titleRefs.current[3]}> {contentTitle[3].title}</h4>
                                    <p>"(Mr/Ms. CUSTOMER NAME), as our valued client you can get as much as (AMOUNT, check PQ list for amount) EXTRA CASH in YOUR account!”</p>
                                    <p>"(Mr/Ms. CUSTOMER NAME), you can use the cash in multiple ways. Do you have an existing or upcoming (CHOOSE NEED BELOW)?”</p>
                                    <p>Need Spiel (Personalize spiel by mentioning specific examples based on customer’s background)</p>
                                    <p>Client's response:</p>
                                    <ul>
                                        <li>No. PROCEED TO PRODUCT PRESENTATION (Probe).</li>
                                        <li>Maybe. PROCEED TO PRODUCT PRESENTATION (Probe).</li>
                                        <li>Yes! Proceed to PID, then Application Fulfillment. "I will just a need few minutes to get your extra cash ready.” (GET PL App form and interview for details)</li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <h3 className={`liTitle ${contentTitle[4].title === headerTitle ? 'searched' : ''}`}
                                ref={titleRefs.current[4]}> {contentTitle[4].title}</h3>
                            <p>“We would like to confirm if your contact information/details with our bank is still updated.”</p>
                            <p>“Thank you for the confirmation, Mr./Ms._________. As a valued client, I would also like to take this opportunity to invite you to apply for a BPI Personal Loan.”</p>
                            <p>Request for DO NOT CALL FOR SALES tagging for client.</p>
                            <ul>
                                <li>Client: No/Never. "I understand, Mr./Ms.________. If you do not want to get updates through phone, would you want us to exclude you from our call out list?” (Get confirmation from client and close.) “We’ll update it on our record. Thank you for your time.”</li>
                                <li>Client: Not now. "I understand that you're busy now, Mr./Ms._________, would you prefer I call at (TIME/DAY)? (Get confirmation from client and close.) “I’ll call you again Mr./Ms._________ at (TIME/DAY). Thank you for your time.”</li>
                                <li>If contact information confirmed is no longer updated: document updated contact information</li>
                                <li>If client provided new information during the application proper: document new information</li>
                                <li>If the client requested to update her contact/account information in her records:</li>
                                <ul>
                                    <li>“Mr./Ms. _____, to update your contact/account information kindly visit any BPI branch near you and bring a valid ID (or other documents).”</li>
                                    <li>If client asks why he/she needs to visit the branch: “Mr./Ms. _____, We apologize for the inconvenience, this new process is in place to strengthen the existing security controls for your account.”</li>
                                </ul>
                                <li>You can inform client of the security features such as:</li>
                                <ol>
                                    <li>BPI will never ask you for the following details: OTP (One-time-Pin), Complete Account and/or Card #, Card CVV and Expiry Date, Username and Password for your BPI Online or BPI Mobile App Acct.</li>
                                    <li>When you get messages asking these details, do not be pressured and just ignore the messages</li>
                                    <li>You can validate the authenticity of the messages/call you received by calling the BPI Hotline 88910000 or sending an email to help@bpi.com.ph</li>
                                </ol>
                                <li>ANNEX D: Warm Personal Loan Leads Not in PQ Campaign &lt; ANNEX D - Warm Personal Loan Leads Not in PQ Campaign.docx &gt;</li>
                                <li>ANNEX E: S.Q.M. Campaign Advisory: Handling of Personal Loan Call Back Requests of Preferred Clients &lt; ANNEX E - Handling of Personal Loan Call Back Requests of Preferred Clients.docx &gt;</li>
                            </ul>
                        </li>
                    </ol>


                    <h2 className={`liTitle ${contentTitle[5].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[5]}>3. {contentTitle[5].title}</h2>
                    <p>TSA must confirm with the client if there is no pending application.</p>
                    <p>"Sir/Ma’am, may I confirm if you have a pending application from other channels?"</p>
                    <p>TSA can probe further if the client was assisted by another agent and agreed with the Terms and Conditions.</p>
                    <ul>
                        <li>
                            <strong>YES</strong>
                            <p>Do not proceed with the application. Advise client to coordinate with the channel where he/she filed the application.</p>
                        </li>
                        <li>
                            <strong>NO</strong>
                            <p>OK to proceed.</p>
                            <p>Important: For non-OSA PQ leads, OSA checks if the account/s if included in PQ Masterfile. If included, OSA may proceed with the application. For Personal Loans, there is no need to request for branch exclusion.</p>
                            <p>Remind client NOT to sign up another application via other channels to avoid duplication.</p>
                            <p>"Mr./Ms.____, I will now facilitate your Personal loan application, kindly refuse signing up for another PL application to avoid duplication"</p>
                        </li>
                    </ul>
                    <p>NOTE: Rule of engagement in PL is that account tagging is based on the first encoded application. As long as client does not have a pending PL application then OSA can proceed.</p>
                    <p>Source: Fritzie S. Robles 02/10/2021</p>


                    <h2 className={`liTitle ${contentTitle[6].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[6]}>4. {contentTitle[6].title}</h2>
                    <p>If client is interested to avail of a PL, conduct Positive Identification (PID).</p>
                    <h3 className={`liTitle ${contentTitle[7].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[7]}> {contentTitle[7].title}</h3>
                    <ol>
                        <li>Get the promo code received by the client via SMS or eDM and verify versus the PQ Masterfile (RM number reference, loan amount and birthdate)</li>
                        <li>Open RM2 System to verify the client’s personal information.</li>
                    </ol>
                    <h3 className={`liTitle ${contentTitle[8].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[8]}> {contentTitle[8].title}</h3>
                    <p>*Should match with RM2 / Salesforce</p>
                    <ul>
                        <li>Complete Name (Exact match vs RM2 record)</li>
                        <li>Birthdate (Exact match vs RM2 record)</li>
                        <li>Additional 1 static information for the client’s confirmation</li>
                        <li>Static Information</li>
                        <ul>
                            <li>Mother’s Maiden Name</li>
                            <li>Residence Address</li>
                            <li>Contact Number / s</li>
                            <li>Email Address</li>
                            <li>Company Name / Company Address</li>
                            <li>TIN / SSS Number</li>
                        </ul>
                    </ul>
                    <h3 className={`liTitle ${contentTitle[9].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[9]}> {contentTitle[9].title} </h3>
                    <ol>
                        <li>The name and birthdate should be an exact match versus the RM2 record. If there is a mismatch, OSA confirms first with branch the correct full name and does not proceed with the application. If OSA gets the branch confirmation that there is a mismatch, OSA should advise the client to update the information first in the branch before the loan application processing.</li>
                        <li>The additional static information should also be an exact match versus the RM2 record, if there is a mismatch, follow the handling detailed in item 1.</li>
                        <li>If upon branch confirmation there is a mismatch, OSA should advise the client to update the information first in the branch before proceeding with the loan application.</li>
                    </ol>
                    <h4 className={`liTitle ${contentTitle[10].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[10]}> {contentTitle[10].title}</h4>
                    <p>To: Branch of Account</p>
                    <p>Cc: OSA Officers</p>
                    <p>Subject: RM Discrepancy_ RM #_CL NAME_Urgent</p>
                    <p>Good day! Requesting for your assistance please. Client is included in our Invitation to Apply for Personal Loans Kindly provide correct (birthdate /mother's maiden name/etc.) of client based on your records. RM# : Name of Client in RM : MMN/Birthdate of Client in RM : SR : Remarks: As per client, correct (MMN/Birthdate) is ______________.</p>

                    <h2 className={`liTitle ${contentTitle[11].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[11]}>5. {contentTitle[11].title}</h2>
                    <p>"(Mr/Ms. CUSTOMER NAME), we would like to inform you that there are one-time fees in your personal loan."</p>
                    <ol>
                        <li>
                            <p>a. Processing Fee – A minimal one-time processing fee of P1,500 will be deducted from the loan proceeds.</p>
                        </li>
                        <li>
                            <p>b. Documentary Stamp Tax – This is a government mandated tax for loans of at least P250,000 or regardless of loan amount but the loan purpose is for business. The DST computation is P1.50 for every P200.00 of the loan amount which will also be deducted from the loan proceeds.</p>
                        </li>

                    </ol>
                    <h2 className={`liTitle ${contentTitle[12].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[12]}>6. {contentTitle[12].title}</h2>
                    <h3 className={`liTitle ${contentTitle[13].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[13]}> {contentTitle[13].title}:</h3>
                    <ol>
                        <li>Open the PL PQ application form template and get the details from the client.</li>
                        <li>Ensure completeness of the loan application template.</li>
                        <li>The loan amount to be availed by the client should be the same as the loan amount assignment in the Masterfile.</li>
                        <ul>
                            <li>
                                <strong>3.1</strong> Desired loan amount by client is MORE THAN the amount in the Masterfile – inform the client that he/she will be asked to submit additional income documents and the loan application will be subjected to the regular credit standards and policies.
                            </li>
                            <li>
                                <strong>3.2</strong> Desired loan amount by client is LESS THAN the amount in the Masterfile – this is acceptable for processing, however, telesales rep should be able to convince the client to avail of the full loan amount assigned.
                            </li>
                        </ul>
                    </ol>
                    <p><strong className={`liTitle ${contentTitle[14].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[14]}> {contentTitle[14].title}</strong> - in BOLD</p>
                    <ul>
                        <li>a. ID</li>
                        <li>b. START TIME</li>
                        <li>c. COMPLETION TIME</li>
                        <li>d. OSA EMAIL</li>
                        <li>e. OSA NAME</li>
                        <li>f. SOURCE CODE</li>
                        <li>g. TYPE OF REFERRER</li>
                        <li>h. EMPLOYEE ID</li>
                        <li>i. LOAN PURPOSE</li>
                        <li>j. RM#</li>
                        <li>k. CLIENT'S FULL NAME – should be the same with GPA Name</li>
                        <li>l. COMPLETE HOME ADDRESS</li>
                        <li>m. LOAN AMOUNT - should be the same/less than the loan amount assignment in the Masterfile</li>
                        <li>n. LOAN TERM - client may choose from 12, 18, 24, 30 and 36 months</li>
                        <li>o. CLIENT'S DATE OF BIRTH</li>
                        <li>p. NOMINATED BPI SETTLEMENT ACCOUNT - for the crediting of the loan proceeds & debiting of the monthly repayments</li>
                        <ul>
                            <li>Upon confirmation with client, he/she has no active deposit account, TSA may inform client to open an account to complete the Personal Loan Booking Process.</li>
                            <li>"Ma'am/Sir, we will still process your application. Once your PL application is queued for approval, we will be requesting you to open an account with BPI. This is because your loan proceeds will be credited to your BPI account, and your monthly installment will also be automatically debited from this account."</li>
                            <div style={styles.container}>

                    <div style={styles.cons}>
                    <h1 style={styles.title}>S.Q.M. Campaign Advisory:</h1>
                                <h2 style={styles.subtitle}>Personal Loan SETA - Valid Account Types</h2>
                                <p style={styles.date}>Broadcast Sent: September 2, 2024</p>
                    </div>
                                <p style={{padding: '10px', textAlign: 'center'}}>Please be advised of the types of accounts that can be used as a settlement account for Personal Loan applications.</p>

                                <table style={styles.table}>
                                    <tbody>
                                        <tr>
                                        <td style={styles.td}>
                                                Valid
                                            </td>
                                            <td style={styles.td}>
                                                <ul style={styles.ul}>
                                                    <li>BPI/BPI Direct solo account</li>
                                                    <li>“OR” joint account</li>
                                                    <li>DBA (Doing Business As) account</li>
                                                    <li>BPI Save up Account (Product Code 241)</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td style={styles.td}>
                                              Invalid
                                            </td>
                                            <td style={styles.td}>
                                                <ul style={styles.ul}>
                                                    <li>ITF (In trust for) account</li>
                                                    <li>Dollar account</li>
                                                    <li>Time deposit</li>
                                                    <li>GSave Account (Product Code 245)</li>
                                                    <li>“AND” joint account</li>
                                                    <li>Corporate account</li>
                                                    <li>“Full Hold” account</li>
                                                    <li>Closed account</li>
                                                    <li>Stock Trade account</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>

                            </div>

                        </ul>
                        <li>q. TIN</li>
                        <li>r. SSS/GSIS</li>
                        <li>s. NATIONALITY</li>
                        <li>t. MARITAL STATUS</li>
                        <li>u. NAME OF SPOUSE</li>
                        <li>v. SPOUSE DATE OF BIRTH</li>
                        <li>w. CLIENT'S MOBILE NUMBER – format should be 09xxxxxxxxx</li>
                        <li>x. EMAIL ADDRESS</li>
                        <li>y. EMPLOYMENT TYPE</li>
                        <li>z. EMPLOYER/BUSINESS NAME</li>
                        <li>aa. NATURE OF BUSINESS/WORK</li>
                        <li>bb. WORK POSITION</li>
                        <li>cc. YEARS IN BUSINESS/WORK</li>
                        <li>dd. DOSRI/NON DOSRI CONFIRMATION</li>
                        <li>ee. SR#</li>
                        <li>ff. PREFERRED BRANCH OF VISIT – format should be Branch Code Branch Name (e.g., BR00056 Baguio Burnham)</li>
                        <li>gg. DATE OF VISIT</li>
                        <li>hh. I vetted that ALL information submitted is the same in client's RM record.</li>
                        <li>ii. VALIDATION STATUS</li>
                        <li>jj. VALIDATOR</li>
                        <li>kk. DATE VALIDATED</li>
                        <li>ll. SA REMARKS</li>
                        <li>mm. SPOTCHECK?</li>
                        <li>nn. LAPSE REMARKS</li>
                        <li>oo. PROCESSOR</li>
                        <li>pp. MIKE Remarks</li>
                        <li>qq. DATE SENT</li>
                        <li>rr. UPLOADING STATUS</li>
                        <li>ss. DATE UPLOADED</li>
                        <li>tt. OSA EMAIL</li>
                        <li>uu. OSA TEAM</li>
                    </ul>
                    <h3 className={`liTitle ${contentTitle[15].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[15]}> {contentTitle[15].title}</h3>
                    <p>"(Mr/Ms. CUSTOMER NAME), may I set you up an appointment for you to visit a branch to sign the loan documents today?"</p>
                    <ul>
                        <li>No – "I understand. May I have your preferred branch, date, and time to visit so we can inform the branch ahead of time?"</li>
                        <li>Yes – "May I have your preferred branch, date, and time to visit?"</li>
                    </ul>
                    <p>Branch appointment may be set 3 days after OSA call-out.</p>
                    <p>*Effective April 19, 2023: Turnaround time is 6-8 banking days</p>
                    <p>Day 0 OSA call out</p>
                    <p>Day 1 SSA validation/PN Creation/Transmittal</p>
                    <p>Day 2 OPs encoding</p>
                    <p>Day 3 Crediting approval / Branch visit and signing of Loan Documents</p>
                    <p>Day 6-8 System Generated SMS to client / crediting of loan proceeds</p>
                    <h3 className={`liTitle ${contentTitle[16].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[16]}> {contentTitle[16].title}</h3>
                    <h3 className={`liTitle ${contentTitle[17].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[17]}> {contentTitle[17].title}</h3>
                    <p><strong className={`liTitle ${contentTitle[18].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[18]}> {contentTitle[18].title}</strong></p>
                    sd
                    <ul>
                        <li>
                            Client’s email address and mobile number in the application form is exactly the same as the information reflected in Salesforce.
                        </li>
                        <li>
                            Also, both contact information must be active and in use.
                        </li>
                        <li>
                            If the email address and/or mobile number are no longer updated, TSA cannot offer DocuSign option.
                        </li>
                        <li>
                            Client provided a valid BPI settlement account (SETA) at point of call.
                        </li>
                        <li>
                            If the client cannot provide or does not want to disclose his SETA, TSA cannot offer DocuSign option.
                        </li>
                        <li>
                            Vouching of settlement accounts by Team Leaders are not allowed in the DocuSign process.
                        </li>
                    </ul>
                    <p><strong className={`liTitle ${contentTitle[19].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[19]}> {contentTitle[19].title}</strong></p>

                    <ul>
                        <li>
                            If upon probing, the conditions are not met, TSA cannot offer DocuSign option.
                        </li>
                        <li>
                            TSA to advise the client to visit his nominated branch for the signing of his loan documents.
                        </li>
                        <li>
                            If the client insists to use DocuSign, the client must update his records in the branch.
                        </li>
                        <li>
                            If upon probing, the conditions are met, TSA can offer DocuSign option.
                        </li>
                    </ul>
                    <p><strong>Spiel:</strong> “You may choose to sign the loan documents at your nominated BPI branch, or sign them electronically through DocuSign.”
                    </p>
                    <h2 className={`liTitle ${contentTitle[20].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[20]}>7. {contentTitle[20].title}</h2>
                    <h3 className={`liTitle ${contentTitle[21].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[21]}> {contentTitle[21].title}</h3>
                    <p>"To recap, your residence address is &lt;Residence address&gt;. Your Personal Loan application amounting to &lt;specify amount&gt; will be payable in &lt;specify loan term in months&gt;, with a monthly interest rate of &lt;specify add-on-rate&gt; or effective interest rate of &lt;specify EIR&gt;. Your monthly amortization is &lt;specify monthly amortization amount&gt; and your preferred branch for the loan documents signing is at &lt;specify BPI or BFSB branch&gt; on &lt;Day, Date and Time&gt;. Your loan will be processed for cash release within 3-5 days after the signing of your loan documents."</p>
                    <p>"The loan proceeds will be credited to your nominated BPI &lt;account type – Savings/Checking&gt; account number &lt;specify account number&gt;."</p>
                    <p>"Kindly confirm by saying “YES” if all the details are correct."</p>
                    <p>&lt;Acceptable Response: Yes, Oo, Opo, I agree, I confirm, Okay, Correct, Tama, please proceed&gt;</p>

                    <h3 className={`liTitle ${contentTitle[22].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[22]}> {contentTitle[22].title}</h3>
                    <p>"To recap, your residence address is &lt;Residence address&gt;. Your Personal Loan application amounting to &lt;specify amount&gt; will be payable in &lt;specify loan term in months&gt;, with a monthly interest rate of &lt;specify add-on-rate&gt; or effective interest rate of &lt;specify EIR&gt;. Your monthly amortization is &lt;specify monthly amortization amount&gt; and your preferred branch for the loan documents signing is at &lt;specify BPI or BFSB branch&gt; on &lt;Day, Date and Time&gt;. Your loan will be processed for cash release within 3-5 days after the signing of your loan documents."</p>
                    <p>"Kindly confirm by saying “YES” if all the details are correct."</p>
                    <p>&lt;Acceptable Response: Yes, Oo, Opo, I agree, I confirm, Okay, Correct, Tama, please proceed&gt;</p>
                    <h3>DocuSign</h3>
                    <p>“To recap, your residence address is &lt;residence address&gt;. Your Personal Loan application amounting to &lt;specify amount&gt; will be payable in &lt;specify loan term in months&gt;, with a monthly interest rate of &lt;specify add-on-rate&gt; or effective interest rate of &lt;specify EIR&gt;. Your monthly amortization is &lt;specify monthly amortization amount&gt; and you will be signing the loan documents electronically through DocuSign. Your loan will be processed for cash release within 3-5 days after the submission of your signed loan documents.”</p>
                    <h2 className={`liTitle ${contentTitle[23].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[23]}>8. {contentTitle[23].title}</h2>

                    <p>a. FEES AND CHARGES:</p>
                    <ul>
                        <li>PL Loan availment of below P250,000: "Our minimal one-time processing fee is P1,500."</li>
                        <li>PL Loan availment of 250,000 and above or for business purposes: "Our minimal one-time processing fee if P1,500 while fees for documentary stamps is at Php 1.50 for every Php 200, for loans in excess of Php 250,000 or for business purposes."</li>
                    </ul>
                    <p>b. DUE DATE: “Your monthly payment shall be automatically debited from your nominated BPI settlement account."</p>
                    <p>c. ADA: "We will deduct your monthly payment from the settlement account on your prescribed due date via auto debit facility"</p>
                    <p>d. VALID IDs: “Please bring at least 2 valid IDs when you visit the nominated branch.” - Not included in DocuSign.</p>
                    <p>e. SMS NOTIFICATION: "Mr./Ms. ________, Once we have submitted your application, it will be queued for processing and credit approval. You will be receiving an SMS notification once your loan is approved within 4-7 banking days."</p>
                    <p>
                        f. DocuSign: “Please wait for the loan documents and instructions that will be sent to your registered email address. Once you have received the email, kindly read and review the documents before affixing your signature. Refer to this link https://l.bpi.com.ph/Docusign  for the step-by-step process. You will receive an email confirmation upon submission of the signed documents. Once your loan is approved, please expect an SMS notification from BPI.”
                    </p>
                    <h2 className={`liTitle ${contentTitle[24].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[24]}>9. {contentTitle[24].title}</h2>
                    <h3 className={`liTitle ${contentTitle[25].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[25]}> {contentTitle[25].title}</h3>
                    <p>“Ma’am/ Sir, before we process your PL application, please note that by saying YES to proceeding with the application processing, you have agreed to be bound by the governing terms and conditions of the PL Application and BPI’s Privacy Policy. You may refer to <a href="https://www.bpi.com.ph/personalloan/undertaking">https://www.bpi.com.ph/personalloan/undertaking</a> for the copy of the full terms and conditions and <a href="www.bpi.com.ph">www.bpi.com.ph</a> for the Bank’s Privacy Policy. You will also be provided with a copy of the Application Terms and Conditions upon the signing of the loan documents at the branch.”</p>
                    <p>“Shall we now proceed with your Personal Loan application processing and evaluation?”</p>
                    <p><em>&lt;Acceptable Response: Yes, Oo, Opo, I agree, I confirm, Okay, Correct, Tama, please proceed&gt;</em></p>
                    <p>
                    “Ma’am/Sir, please also note that this telephone conversation will also serve as your application for a BPI Personal Loan. Signing the loan documents will also serve as your confirmation of this Personal Loan application. We will forward your application for processing. Please wait for the email and SMS for the loan documents and other instructions. Your loan will be processed for cash release within 3-5 days after the submission of your signed loan documents.”
                    </p>
                    <h3>DocuSign:</h3>
                    <p>
                        “Ma’am/ Sir, before we process your Personal Loan application, please note that by saying YES to proceeding with the application processing, you have agreed to be bound by the governing terms and conditions of the Personal Loan Application and BPI’s Privacy Policy. You may refer to www.bpi.com.ph/personalloan/undertaking for the copy of the full terms and conditions and www.bpi.com.ph for the Bank’s Privacy Policy. Also, the copy of the terms and conditions are included in the loan documents. You may download and print the signed loan document for your reference.

                    </p>
                    <p>
                        “Shall we now proceed with your Personal Loan application processing and evaluation?”
                    </p>
                    <p><em>&lt;Acceptable Response: Yes, Oo, Opo, I agree, I confirm, Okay, Correct, Tama, please proceed&gt;</em></p>
                    <p>
                        “Ma’am/Sir, please also note that this telephone conversation will also serve as your application for a BPI Personal Loan. We will forward your application for processing. Please wait for the email and SMS for the loan documents and other instructions. Your loan will be processed for cash release within 3-5 days after the submission of your signed loan documents.”
                    </p>
                    <p>For Reference:</p>
                    <ul>
                        <li>Terms and Conditions: <a href="https://www.bpi.com.ph/personalloan/undertaking">https://www.bpi.com.ph/personalloan/undertaking</a></li>
                        <li>BPIs Privacy Policy: <a href="www.bpi.com.ph">www.bpi.com.ph</a></li>
                    </ul>

                    <h2 className={`liTitle ${contentTitle[26].title === headerTitle ? 'searched' : ''}`}
                        ref={titleRefs.current[26]}>10. {contentTitle[26].title}</h2>
                    <p>"Thank you for availing our BPI Personal Loan. Kindly take note of this service request number _______ as reference for this call out/application. Thank you for your time.”</p>
                </div>
            </div>




            <div className="navigation">
                <div className="prev" onClick={() => { nav('/personal-loan/filtering-of-leads'); window.scrollTo(0, 0) }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (2)
                </div>

                <div className="next" onClick={() => { nav('/personal-loan/other-guidlines-for-docusign'); window.scrollTo(0, 0) }}>
                    Next <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PloanCall
