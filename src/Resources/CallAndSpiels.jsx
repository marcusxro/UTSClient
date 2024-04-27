import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'

const CallAndSpiels = () => {
    const nav = useNavigate('')
    return (
        <div className='CampaignPage'>
            <Header />
            <div className="pageTitle">
            </div>
            <div className="Homepage">
                <h1>CALL FLOW AND SPIELS</h1>
                <h2>1. OPENING SPIEL</h2>
                <h3>OUTBOUND:</h3>
                <p>"Good Morning/Afternoon/Evening! This is (Insert Name) from Bank of the Philippine Islands. May I speak with (name of client)?" - should be verbatim</p>
                <ul>
                    <li>If client is not available, ask for other contact information and best time to call back.</li>
                    <li>If wrong number, verify the dialed number.</li>
                </ul>
                <h3>INBOUND:</h3>
                <p>"BPI Credit Card Sales. My name is [Insert Name]. How can I help you?" - should be verbatim</p>

                <h2>2. PURPOSE OF CALL</h2>
                <h3>Data Privacy Spiel</h3>
                <p>Mandatory spiel:</p>
                <blockquote>
                    <p>"Please be advised that we will be asking for your personal information, and this call is being recorded for Quality Assurance purposes. Is it okay to proceed?" (Client must agree.)</p>
                </blockquote>
                <p>Alternative spiel maybe used:</p>
                <blockquote>
                    <p>“Please be advised that this call is being recorded for Quality Assurance purposes and that we will be asking for personal information. Is it okay to proceed?" (Client must agree.)</p>
                </blockquote>
                <p>In Filipino:</p>
                <blockquote>
                    <p>“Mangyaring maabisuhan na ang tawag na ito ay naitala para sa mga hangarin sa Kalidad na Pagtiyak at hihingi kami ng personal na impormasyon. Okay lang ba na magpatuloy?" (Client ay dapat sumang-ayon.)</p>
                </blockquote>
                <h3>SOURCE</h3>
                <h4>WARM CALLS</h4>
                <p>Client Initiated Request via Coffee Break</p>
                <p>“I am calling you regarding your interest to avail the BPI Credit Card. This is a service call out from BPI and I am using the BPI outbound number 027795-2500 or 028459-2200 which you can check through <a href="www.bpi.com.ph/creditcards">www.bpi.com.ph/creditcards</a>. For us to assist you better on your inquiry /application, we need to verify some information. May I have your complete name please?"</p>
                <p>If the client asks on the source of call out: TSA to probe/ask client if he/she received an email/SMS invitation to apply for a BPI Credit Card and that this call is in line with email/SMS invitation to apply for a BPI Credit Card</p>
                <p>You may include probing to client if he/she was already assisted for a credit card application.</p>
                <p>TSA: “May I confirm Ms./Mr.______ if you have been assisted for a credit card application?”</p>
                <h4>Client Initiated Request [e.g. SMS]</h4>
                <p>“We received your text/request expressing your intent to avail of a BPI Credit Card. This is a service call out from BPI and I am using the BPI outbound number 027795-2500 or 028459-2200 which you can check through <a href="www.bpi.com.ph/creditcards">www.bpi.com.ph/creditcards</a>. For us to assist you better on your inquiry /application, I need to verify some information. May I have your complete name please?"</p>
                <p>If No Name/Promo code is indicated in the SMS:</p>
                <blockquote>
                    <p>"We are calling regarding the Text Message we received inquiring about BPI Credit Cards. Ms./Mr. ________, this is a service call out from BPI and I am using the BPI outbound number 027795-2500 or 028459-2200 which you can check through <a href="www.bpi.com.ph/creditcards">www.bpi.com.ph/creditcards</a>. For us to address you properly and assist you with your inquiry, please state your complete name. May we also confirm if the Text Message came from this number/from you?”</p>
                    <p>(TSA may also confirm the updated email address in the RM record if applicable).</p>
                    <p>&lt;Proceed to product presentation.&gt;</p>
                </blockquote>
                <h4>Branch Positive Leads</h4>
                <p>“This callout is in reference to the previous callout and invitation of the branch, BPI (branch name). If you wish to proceed with the application, we may facilitate the application filing over the phone.”</p>

                <h3>INBOUND CALLS</h3>
                <p>"For us to assist you better on your inquiry /application, may I have your complete name the promo code that you received in applying for Credit Card so we can verify?"</p>
                <p>"Sir/Ma’am I am pleased to inform you that you are one of the selected clients who qualified to apply for a BPI Card with no documents required."</p>
                <p>&lt;Proceed to product presentation.&gt;</p>
                <p>If client does not have a promo code/Not Part of PQ leads (treated as regular application):</p>
                <p>“Thank you for your interest in applying for BPI Credit Cards Ma’am/Sir, we will endorse you for a call-out for your credit card application or you may visit the branch or apply through BPI online. Thank you for choosing BPI. Thank you for calling.”</p>
                <p>*For Coffee Break leads, kindly refer to special handling section.</p>

                <h3>COLD CALLS</h3>
                <h4>ITA for Loans</h4>
                <p>“This is a service call out from BPI and I am using the BPI outbound number 027795-2500 or 028459-2200 which you can check through <a href="www.bpi.com.ph/creditcards">www.bpi.com.ph/creditcards</a>.</p>
                <p>I am calling regarding your booked (type of loan) with us. As a valued client, we would like to take this opportunity Sir/Ma’am, to introduce to you, solutions that would meet your current or future financial needs, such as cash availability for emergencies or large amount expenses.”</p>
                <p>Ma’am/Sir, we are inviting you to apply for a BPI Petron MC (for auto loan) or BPI Blue MC (for housing loan) as a bundled product to your (type of loan).</p>
                <p>If Client did not interrupt, proceed to the product presentation.</p>

                <h4>PQ CAMPAIGN</h4>
                <p>“This is a service call out from BPI and I am using the BPI outbound number 027795-2500 or 028459-2200 which you can check through <a href="www.bpi.com.ph/creditcards">www.bpi.com.ph/creditcards</a>. We would like to confirm if your contact information/details with our bank is still updated.”</p>
                <p>TSA to confirm phone number (confirm the contacted number only).</p>
                <p>On contact information:</p>
                <ol type="a">
                    <li>If contact/account information confirmed is no longer updated upon contact info update to client -document in Salesforce, then segue to product presentation.</li>
                    <li>If client provided new information during the application proper - document updated information in Salesforce</li>
                    <li>If client requested for a contact/account information update in her records</li>
                </ol>
                <p>SPIEL:</p>
                <blockquote>
                    <p>“Ms./Mr._____ to update your contact/account information, kindly visit any BPI/BFB branch near you and bring a valid ID (or other documents). Thank you.”</p>
                </blockquote>
                <p>If client asks why he/she needs to visit the branch:</p>
                <blockquote>
                    <p>“Ms./Mr._____, We apologize for the inconvenience, this new process is in place to strengthen the existing security controls for your account. Thank you.”</p>
                    <p>Note: It is important that we advise client that provided information will be noted but he/she still need to visit the branch whenever convenient for him/her since updating of RM2 record requires face-to-face interaction with client, and signing of new CIS.</p>
                </blockquote>
                <p>On security features: You can inform client of the security features.</p>
                <ol type="a">
                    <li>BPI will never ask you for the following details: OTP (One-Time-Pin), Complete Account and/or Card #, Card CVV and Expiry Date, Username and Password for your BPI Online or BPI Mobile App Acct.</li>
                    <li>When you get messages asking these details, do not be pressured and just ignore the messages.</li>
                    <li>You can validate the authenticity of the messages/call you received by calling the BPI Hotline 889-10000 or sending an email to help@bpi.com.ph.</li>
                </ol>
                <p>On the website link:</p>
                <blockquote>
                    <p>If client asks for a reference of our outbound contact numbers, please provide the link.</p>
                    <p>If client, ask how he/she can access the link:</p>
                    <p>“Ms./Mr.________, you can access the List of Telesales Providers with this link: <a href="www.bpi.com.ph/creditcards/list-of-telesales-providers">www.bpi.com.ph/creditcards/list-of-telesales-providers</a>.”</p>
                </blockquote>

                <h2>3. PROBING/SEGUE SPIELS</h2>
                <p>“Thank you for the confirmation Mr./Ms._________. Being a valued client, I would also like to take this opportunity to invite you to apply for our BPI Credit Card (e.g. Blue MC, Amore Cashback, etc.).”</p>

                <h2>4. OPT-IN/OPT-OUT</h2>
                <p>If client did not interrupt, proceed to the product presentation.</p>
                <p>If client says NO, proceed with the "Early Interrupt" or negative response spiel/s:</p>
                <blockquote>
                    <p>“Mr. /Ms. __, you might have a few questions regarding <specific card being offered />. Let me tell you more about its features and benefits, so I can address and clarify your concerns.”</p>
                    <p>TSA to take note of reason/s why client is not interested for appropriate objection handling.</p>
                    <p>See ANNEX C for the list of objections and suggested handling per objection.</p>
                </blockquote>
                <p>If after handling objections the client is undecided/not interested:</p>
                <blockquote>
                    <p>“Mr. /Ms. __, I can call you again on your preferred date/time, if that would be more convenient for you. Please be advised that our exclusive invitation until (end of campaign)."</p>
                    <p>"Just in case you change your mind Mr. /Ms. __, you may send an email to bpioutboundsales@bpi.com.ph with your full name and contact info so we can call you back or call our BPI Sales Hotline 889-10055."</p>
                    <p>Note: TSA to document client’s Opt-In/Opt-out in Salesforce.</p>
                </blockquote>
                <p>Do not call for sales:</p>
                <ul>
                    <li>For cases where customers have requested NOT TO BE CONTACTED again for any SALES RELATED programs/offer. Upon receipt of the request, TSA to inform officers for immediate request to CRM counterparts to tag the customer properly. This is applicable only for SALES campaigns, Customers shall continue to receive our SERVICE-related advisories. TAT for the update of CRM is 5-10 banking days.</li>
                    <li>TSA to inform that client will be opted out from receiving promotional or marketing offers via phone call only.</li>
                    <li>If client wishes to opt out from receiving SMS or emails, there is a different process for it such as clicking the Unsubscribe button (for email).</li>
                </ul>

                <h2>5. CONFIRMATION OF PENDING APPLICATION</h2>
                <p>TSA must confirm with client if the client has no pending credit card application.</p>
                <p>"Sir/Ma’am, may I confirm if you have a pending application from other channels?"</p>
                <p>TSA can probe further if client was assisted by another sales associate, if client signed an application form in the branch, or fulfilled his application through our online channel.</p>
                <p>TSA can probe further if client was assisted by another agent and agreed with the Terms and Conditions.</p>
                <ul>
                    <li>YES - Do not proceed with the application. Advise client to coordinate with the channel where he/she filed the application.</li>
                    <li>NO - OK to proceed.</li>
                </ul>
                <p>See ANNEX P for the updated rules of engagement on leads handling, exclusion, and retagging as of April 5, 2022.</p>
                <h2>6. Product Presentation</h2>
                <p>Discuss features of card type offered (at least 2 product features).</p>
                <p>TSA should advise free for the first year AMF.</p>
                <p>“The annual membership fee is waived for the first year.” (Revise if there is an ongoing lifetime waiver promo.)</p>
                <p>Do not use FREE application/delivery spiel - use free processing fee instead.</p>
                <p>Discuss ongoing promo offers.</p>
                <p>REMINDER for BFB Card Application:</p>
                <ul>
                    <li>TSA should no longer offer BFB Credit Card on our Credit Card Campaigns effective 6/9/2021.</li>
                </ul>
                <p>Update as of 9/6/2021:</p>
                <p>Please be advised that there is a test offering on Amore Visa Card in the current campaign where in the credit card offer is Amore Regular but the credit limit is less than 75,000. This has been coordinated by Credit Card team and is okay to proceed with the application and route for manual processing.</p>
                <p>Scenario1:</p>
                <ul>
                    <li>Offer: Gold MC</li>
                    <li>Per Client: Blue MC</li>
                    <li>*Limit should be less than 75K</li>
                    <ul>
                        <li>If TSA will change/update the product type to Blue MC</li>
                        <li>Follow the minimum/maximum credit limit requirement for desired card type.</li>
                        <li>TSA may encode 70K for the credit limit if client would like to downgrade the offer from Gold MC to Blue MC.</li>
                        <li>Same will apply for Amore card variants.</li>
                    </ul>
                </ul>
                <p>Scenario2:</p>
                <ul>
                    <li>Old Offer: Gold MC/Blue MC</li>
                    <li>Per Client: Petron</li>
                    <ul>
                        <li>Retain the Credit limit for Petron card application</li>
                    </ul>
                </ul>
                <p>Card Type offer - Follow the minimum Credit limit requirement per card type</p>
                <table border="1">
                    <tr>
                        <th>CREDIT CARD TYPES</th>
                        <th>MINIMUM CREDIT LIMIT</th>
                    </tr>
                    <tr>
                        <td>BPI Blue MC</td>
                        <td>Php 8,000.00</td>
                    </tr>
                    <tr>
                        <td>Petron-BPI MC</td>
                        <td>Php 8,000.00</td>
                    </tr>
                    <tr>
                        <td>BPI Edge MC</td>
                        <td>Php 8,000.00</td>
                    </tr>
                    <tr>
                        <td>BPI Amore Visa</td>
                        <td>Php 75,000.00*</td>
                    </tr>
                    <tr>
                        <td>BPI Gold MC</td>
                        <td>Php 75,000.00</td>
                    </tr>
                    <tr>
                        <td>BPI Amore Platinum Visa</td>
                        <td>Php 150,000.00</td>
                    </tr>
                    <tr>
                        <td>BPI Platinum Rewards MC</td>
                        <td>Php 150,000.00</td>
                    </tr>
                    <tr>
                        <td>BPI Visa Signature</td>
                        <td>Php 300,000.00</td>
                    </tr>
                    <tr>
                        <td>BPI e-Credit</td>
                        <td>E-Credit Card sub-limit is default at 50% of principal credit line or 50K whichever is lower</td>
                    </tr>
                </table>
                <p>If client confirms how the application will be evaluated:</p>
                <p>“Your application will be evaluated based on your existing relationship with the bank.”</p>
                <p>If client is still not interested:</p>
                <p>Cross-sell spiel:</p>
                <blockquote>
                    "Mam/Sir, are there other BPI products that would better suit your needs at this time? Thank you for your time."
                </blockquote>
                <p>Closing spiel:</p>
                <blockquote>
                    "Just in case you change your mind Mr. /Ms. __, you may either send an email to bpioutboundsales@bpi.com.ph with your full name and contact info so we can call you back. Thank you for your time."
                </blockquote>

                <h2>7. Positive Identification (PID)</h2>
                <p>“For us to facilitate your BPI Credit Card application, please be advised that this call is being recorded for Quality Assurance purposes and that we will be asking for personal information. Is it okay to proceed?" (Client must agree.)</p>
                <p>If client agreed, TSA should conduct 2 PID first, wherein client will provide the information, before confirming the other details.</p>
                <p>Required PID: complete name and 2 static information. TSA may ask any available static information stated below.</p>
                <ul>
                    <li>Available static information for PID:</li>
                    <ul>
                        <li>Birthdate</li>
                        <li>Mother's Maiden Name</li>
                        <li>Residence Address</li>
                        <li>Contact Numbers (registered contact number in RM Record; it should be different from the dialed number)</li>
                        <li>Email Address</li>
                        <li>Company Name and Company Address</li>
                        <li>TIN/SSS</li>
                    </ul>
                    <li>If the birthdate and/or Mother's maiden name does not match the RM record, TSA must e-mail the branch of account for confirmation.</li>
                    <li>If the address provided does not include the zip code, it is acceptable.</li>
                </ul>

                <h2>8. BPI Credit Card Application Filing</h2>
                <p>TSA to get client's personal information needed in the application form, and advise them of their reference number (client's application service request number).</p>
                <p>NOTE: Always exercise proper probing.</p>
                <p>See ANNEX D for the Credit Card PQ Template Fields.</p>
                <p>See ANNEX E for the list of abbreviations.</p>
                <p>See ANNEX F for the Bank Identification Codes.</p>
                <p>Address field:</p>
                <p>TSA to probe to client on complete address.</p>
                <ul>
                    <li>Confirm the house number, block number, lot number, phase number, street, zone number, road, purok, barangay, subdivision, village name, town, city or province.</li>
                    <li>Confirm if Residence address is located in a building or a compound – if yes, ask for the unit number.</li>
                    <li>Confirm if address is already complete so it will be easy for couriers to locate the address.</li>
                    <li>For Office Billing Address, ask for the department or floor or unit.</li>
                </ul>
                <p>Employment Type field:</p>
                <p>As confirmed with Marketing and Risk, students are not qualified to apply for a BPI Credit Card.</p>
                <p>Please conduct proper filtering of leads and probing of employment status during callouts.</p>
                <ul>
                    <li>For the following scenarios, do not proceed with the application:</li>
                    <ul>
                        <li>Upon probing, client mentioned that he is a student, with allowance from parents</li>
                        <li>Upon probing, client mentioned that he is a student, employed part-time</li>
                        <li>Upon probing, client mentioned that he is a student, but has his own business or does freelance work</li>
                    </ul>
                </ul>
                <p>Email address field:</p>
                <ul>
                    <li>If the client has no e-mail address:</li>
                    <ul>
                        <li>Please advise him to create one as the bank will no longer issue and send hard copies of his monthly statement of account for his BPI Credit Card.</li>
                        <li>Do not create an application service request until the client provides an e-mail address. In the campaign database call-out status: Contacted-Need More Info.</li>
                    </ul>
                    <li>If the client nominates an e-mail address of a relative:</li>
                    <ul>
                        <li>Do not offer this option; it must be client-initiated.</li>
                        <li>Please confirm if the client agrees to receive his credit card e-statements in the said e-mail address.</li>
                    </ul>
                </ul>

                <h2>9. Cross-Selling of the BPI E-Credit Card</h2>
                <p>“Thank you for giving me a chance to assist you on your _______ application. Would you be also interested in availing yourself of an E-Credit Card?”.</p>
                <p>"E-credit protects your credit line by assigning a lower credit limit and a different credit card number. When you shop online such as Lazada, Zalora or when you buy airline tickets in PAL and Cebu Pacific, you can use E-Credit for your transactions in a secure way. Would you like to take advantage of the BPI E-credit card?" [client must confirm]</p>
                <h2>10. Reminders to Client Spiels</h2>
                <h3>a. E-Statement Spiel</h3>
                <p>“Once your credit card application has been approved, you will be automatically enrolled to BPI e-Statement facility. You will receive your BPI Credit Card e-Statement in your registered email, accompanied with an e-Statement SMS starting on your next statement date.”</p>
                <h3>b. Delivery Instruction Spiel</h3>
                <p>"Once processed and upon approval of this BPI Credit Card Application, your BPI (Card Type) will be delivered personally to you at your requested address within 15-20 working days. In case you are not around to receive the card, our courier shall leave an authorization form. This form can also be downloaded in <a href="https://www.bpi.com.ph/creditcards/authorize-a-representative">bpi.com.ph</a>. Kindly fill out the form and leave a copy with your authorized representative together with your ID. This will ensure successful re-delivery of your card.”</p>
                <h3>c. Account Monitoring Spiel</h3>
                <p>Advise the client how to monitor the card transactions.</p>
                <p>“Once approved and successfully delivered, you may enroll your BPI Credit Card in our online banking for hassle-free monitoring. To pay for your monthly credit card dues, you can enroll for bills payment thru online banking, mobile banking, or enroll for automatic debit arrangement thru your nearest branch.”</p>
                <h3>d. Activation Spiel</h3>
                <p>"Also, activate your BPI Credit Card upon receipt to fully enjoy its features and benefits. Visit <a href="bit.ly/activatebpicard">bit.ly/activatebpicard</a> to learn how."</p>
                <p>Card will be delivered inactive. Activation may be done via SMS, Hotline or Branch. Inactive card upon delivery is a security measure.</p>
                <p>See ANNEX G for the official announcement.</p>
                <p><strong>Note:</strong></p>
                <ul>
                    <li>Activation will be per card type.</li>
                    <li>The Virtual e-credit (No Card) does not need to be activated.</li>
                    <li>The E-credit with physical card needs to be activated</li>
                    <li>For cards that are not activated:
                        <ul>
                            <li>The annual membership fee (AMF) will still be billed on the card anniversary date.</li>
                            <li>Credit card will NOT be automatically blocked/cancelled if not used/activated within one year or more. It will only remain "INACTIVE".</li>
                            <li>Auto reversal of unpaid AMF for an inactive card is not a guarantee. Inform the client that he needs to call the customer service to request for AMF waiver/reversal. The request is subject for approval.</li>
                            <li>Currently, there is no set deadline or expiry date on activating a BPI credit card (internal information). Please be cautious on sharing information.</li>
                        </ul>
                    </li>
                </ul>

                <h2>11. BPI Credit Card Application Terms and Conditions, and BPI’s Privacy Policy</h2>
                <p>“Ma’am/Sir, before we process your credit card application, please note that by saying YES to proceeding with your credit card application, you have agreed to be bound by the governing terms and conditions of the issuance of the BPI Credit card and BPI’s Privacy Policy. To know more, you may visit <a href="www.bpi.com.ph">www.bpi.com.ph</a>. You will also be provided with a copy of the Terms and Conditions upon delivery of the credit card which you can read before actually using the Credit Card.”</p>
                <p>""Shall we now proceed with your credit card application processing & evaluation? Kindly confirm by saying yes/I agree.</p>
                <p>(Client should say ‘Yes’)</p>
                <p>Acceptable Affirmative Responses on Terms and Conditions - Client can answer - Yes, Oo, Opo, I agree, Let’s proceed</p>
                <p>“Ma’am/Sir, please also note that this telephone conversation will also serve as your application for a BPI Credit Card.”</p>
                <p>Terms and Conditions Governing the Issuance and Use of BPI Credit Cards: <a href="https://www.bpi.com.ph/cards/credit/bpi-termsandconditions">https://www.bpi.com.ph/cards/credit/bpi-termsandconditions</a></p>
                <p>BPI’s Privacy Policy: <a href="www.bpi.com.ph/privacy">www.bpi.com.ph/privacy</a></p>

                <h2>12. Cross-Selling of Supplementary Card to Co-Depositor</h2>
                <h3>Guidelines:</h3>
                <p>If the primary cardholder has a co-depositor, TSA should cross sell supplementary card after the client has agreed to apply for a BPI credit card.</p>
                <p>To ensure high supplementary take-up, highlight BAU offer: 1st supplementary card holder - lifetime waived AMF, 2nd-6th supplementary cardholder-50% off on AMF.</p>
                <p>Application will be facilitated via recorded phone call. No other requirements needed.</p>
                <h3>Spiels:</h3>
                <h4>ECH Cross Selling Spiel:</h4>
                <p>“By the way Ma’am/Sir, you may also want to assign your co-depositor <strong>STATE THE FIRST NAME OF THE CO-DEPOSITOR ONLY</strong> as your supplementary. The annual membership fee for your 1st supplementary is WAIVED for life. Do you want to proceed?</p>
                <p>IF YES: For us to proceed, can you please state the FULL NAME of your co-depositor please and how are you related to <strong>STATE THE FIRST NAME OF THE CO-DEPOSITOR ONLY</strong>?</p>
                <p>IF NO: Proceed to the closing spiel.</p>
                <h4>Recap Spiel:</h4>
                <p>"""Thank you for that mam/sir. Just to confirm, you have agreed to assign <strong>STATE FULL NAME OF THE CO-DEPOSITOR</strong> as your supplementary for your BPI <strong>STATE CREDIT CARD OFFERED TO THE PRINICIPAL CH</strong> MasterCard/Visa.""</p>
                <p>[Client should confirm] - Yes, Oo, Opo, I agree, let’s proceed"</p>
                <h4>Reminder after recap:</h4>
                <p>“Just want to remind you mam/sir that as a Principal Cardholder, it is your responsibility to monitor and settle all purchases/transactions including interests made/incurred by your supplementary."</p>
                <h4>With incomplete ECH mandatory field/s:</h4>
                <p>"Since the information of your co depositor is not updated, we recommend to advise your co-depositor to go to the branch to update the records. For now, we will not be able to process the application."</p>
                <p><strong>Note:</strong> If Principal cardholder wishes to assign a supplementary other than his/her co-depositor, politely decline and deliver the spiel below:</p>
                <p>"Ma'am/Sir, apologies but we cannot process any supplementary request other than your co-depositor <strong>STATE NAME</strong>. Should you wish to apply for a different supplementary, you may visit any BPI branch.”</p>
                <p>See ANNEX H for the handling of supplementary card applications.</p>

                <h2>13. Closing Spiel</h2>
                <h3>Outbound:</h3>
                <p>“Thank you for your time."</p>
                <h3>Inbound:</h3>
                <p>"Thank you for choosing BPI. Thank you for calling."</p>
            </div>


            <div className="navigation">
                <div className="prev" onClick={() => { nav('/filtering-of-leads'); window.scrollTo(0, 0) }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (2)
                </div>

                <div className="next" onClick={() => { nav('/documentation'); window.scrollTo(0, 0) }}>
                    Next <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CallAndSpiels
