import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'

const Documentation = () => {
    const nav = useNavigate()
    return (
        <div className='CampaignPage'>
            <Header />
            <div className="pageTitle">
            </div>
            <div className="Homepage">
                <section>
                    <h2>Documentation</h2>
                    <h3>a. Create Callback Cases for successful and unsuccessful call outs.</h3>
                    <h3>b. Create Application Cases for Interested Calls.</h3>
                    <h3>c. Indicate complete call out details in Salesforce Comments.</h3>
                    <p>Steps to Create Salesforce Cases – Callback or Application:</p>
                    <ol>
                        <li>Search for Client Name/ RM Number/Customer Number</li>
                        <li>Go to New Case Component</li>
                        <li>Fill out the hierarchy details, and save.</li>
                        <li>Indicate all Call out details in New Case Comment and save.</li>
                        <li>For Application Cases, make sure to SUBMIT Cases and PID Status should be PASSED.</li>
                        <li>For Callback Cases this should be saved and assigned only to TSA case owner. TSA should make sure to close the case for successful call out and/or cancel the case for unsuccessful call out.</li>
                        <li>For Auto-closed Cases, once submitted this should be automatically closed.</li>
                    </ol>
                    <h3>CALLBACK CASES</h3>
                    <ol>
                        <li>TSA Agent creates the Case.</li>
                        <li>TSA saves the Case.</li>
                        <li>Sales Associate handles the call out and indicates call attempts in the Case Comments.</li>
                        <li>If client is contacted, Sales Associate closes SR.</li>
                        <li>If client is not contacted, Sales Associate cancels the SR.</li>
                    </ol>
                    <h3>CREDIT CARD APPLICATION</h3>
                    <ol>
                        <li>TSA creates the Case.</li>
                        <li>TSA submits the Case.</li>
                        <li>The SR will be assigned to Team Leader.</li>
                        <li>SSA will get the SR and assign it to his ID. (Case owner should be SSA)</li>
                        <li>SSA will work on the case.</li>
                        <li>If with verification:</li>
                        <ol type="a">
                            <li>SSA selects the SR Action "Incomplete Info/Send Back to CC".</li>
                            <li>The SR will be assigned back to the TSA.</li>
                            <li>TSA submits the Case.</li>
                            <li>The SR will be assigned to SSA.</li>
                            <li>SSA Submits to Fulfillment - (Cardholder services Department account creation unit).</li>
                            <li>SSA will work on the case and submits.</li>
                        </ol>
                        <li>SR will be assigned to Fulfillment Team.</li>
                        <li>Fulfillment Team Member will work on the case. If application is complete/ processed, Fulfillment Team Member to close SR.</li>
                        <li>If application is incomplete, Fulfillment Team Member assigns back SR to creator.</li>
                    </ol>
                </section>

                <section>
                    <h3>1. Callback Case</h3>
                    <p>TSA creates Salesforce Callback Case for leads assigned. (except if with PB cases)</p>
                    <p>Callback Case should be assigned to TSA Case owner</p>
                    <p>TSA Case owner to monitor created Callback Case to his/her ID and update Case status as necessary.</p>
                    <p>Make sure to encode the complete details in the database: SR Number, Sub-Area, Creation Date, Committed Date</p>
                    <pre>
                        <table border={1}>
                            <thead>
                                <tr style={{ width: "100%" }}>
                                    <th>
                                        Salesforce Case Hierarchy:
                                    </th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th>Field</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tr>
                                <td>SOURCE</td>
                                <td>Card</td>
                            </tr>
                            <tr>
                                <td>TYPE</td>
                                <td>Credit Card</td>
                            </tr>
                            <tr>
                                <td>SUB-TYPE</td>
                                <td>Card</td>
                            </tr>
                            <tr>
                                <td>CHANNEL</td>
                                <td>Card</td>
                            </tr>
                            <tr>
                                <td>AREA</td>
                                <td>Call Back</td>
                            </tr>
                            <tr>
                                <td>SUB-AREA</td>
                                <td>OSA-CC Referral</td>
                            </tr>
                        </table>

                    </pre>
                    <p>Case Comments:</p>
                    <ol>
                        <li>Indicate call out result in notes view.</li>
                        <li>    Example: M09196237826 - RNA</li>
                        <li>             M0919637836 - CBR</li>
                        <li>
                            NAME OF CAMPAIGN: Invitation to Apply for Credit Cards
                        </li>
                        <li>
                            An outbound campaign to invite existing deposit accountholders/loan accountholders to apply for a BPI Credit Card. If client calls to confirm validity of call out, please inform client that he/she is part of our campaign call out list and caller is from BPI.

                        </li>
                        <li>
                            TSA Name:
                        </li>
                        <li>
                            Team Number:
                        </li>
                    </ol>
                </section>

                <section>
                    <h3>2. Opt-in/Opt-out</h3>
                    <p>Create Case for client's Opt-in/Opt out.</p>
                    <table border={1}>
                        <thead>
                            <tr style={{ width: "100%", columnSpan: "1" }}>
                                <th >
                                    Salesforce Case Hierarchy:
                                </th>
                            </tr>
                        </thead>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>SOURCE</td>
                            <td>Card</td>
                        </tr>
                        <tr>
                            <td>TYPE</td>
                            <td>General</td>
                        </tr>
                        <tr>
                            <td>SUB-TYPE</td>
                            <td>Call Center</td>
                        </tr>
                        <tr>
                            <td>CHANNEL</td>
                            <td>Card</td>
                        </tr>
                        <tr>
                            <td>AREA</td>
                            <td>OSA Callout</td>
                        </tr>
                        <tr>
                            <td>SUB-AREA</td>
                            <td>Opt-in/Opt-out</td>
                        </tr>
                        <tr>
                            <td>TAT</td>
                            <td>0</td>
                        </tr>
                    </table>

                    <p>Account Services (Feedback and Complaints View)</p>
                    <pre>Account / Customer No: Indicate client's RM Number</pre>
                </section>

                <section>
                    <h3>3. Contact Info Update</h3>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th colspan="2">Salesforce Case Hierarchy:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SOURCE</td>
                                <td>OSA</td>
                            </tr>
                            <tr>
                                <td>TYPE</td>
                                <td>General</td>
                            </tr>
                            <tr>
                                <td>SUB-TYPE</td>
                                <td>Call Center</td>
                            </tr>
                            <tr>
                                <td>CHANNEL</td>
                                <td>OSA</td>
                            </tr>
                            <tr>
                                <td>AREA</td>
                                <td>Contact Info</td>
                            </tr>
                            <tr>
                                <td>SUB-AREA</td>
                                <td>Updated-to Date/ For Updating</td>
                            </tr>
                            <tr>
                                <td>TAT</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>In Customer Contact Information Maintenance View:</p>
                    <ol>
                        <li>If contact information is still updated:</li>
                        <p>
                            Area: Contact Info
                            Sub-Area: Updated To-date
                            Account / Customer No:
                            Indicate client's RM Number
                            Indicate current contact information under CURRENT
                        </p>
                        <li>If contact information is for updating:</li>
                        <p>
                            Area: Contact Info
                            Sub-Area: For Updating
                            Account / Customer No:
                            Indicate client's RM Number
                            Indicate updated contact information on the corresponding field under NEW
                            If number in our record is updated and client has another contact number, indicate both contact numbers in the Phone no: field.
                        </p>
                    </ol>
                </section>
                <article>
                    <h2>4. Credit Card Application</h2>
                    <section>
                        <h3>Salesforce Hierarchy</h3>
                        <ul>
                            <li><strong>SOURCE:</strong> OSA</li>
                            <li><strong>TYPE:</strong> Credit Card</li>
                            <li><strong>SUB-TYPE:</strong> Card/BFB Card</li>
                            <li><strong>CHANNEL:</strong> OSA</li>
                            <li><strong>AREA:</strong> CC Application</li>
                            <li><strong>SUB-AREA:</strong> No CTC/With Link E-Credit</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Subject Field</h3>
                        <p>Format: EMBOSSING NAME_SOURCE_CAMPAIGN NAME_TYPE OF CARD</p>
                        <dl>
                            <dt>SOURCE:</dt>
                            <dd>COLD, COFFEEBREAK, SMS, PB, CLIENT INITIATED, POSITIVE LEADS, ITA FOR LOAN, PRESELECT 1, PRESELECT 2</dd>
                            <dt>CARD TYPE:</dt>
                            <dd>REWARDS, GOLD REWARDS, PLAT REWARDS, AMORE, AMORE PLATINUM, VISA SIG, PETRON</dd>
                        </dl>
                    </section>
                    <section>
                        <h3>Case Comments</h3>
                        <ul>
                            <li>Number where client was contacted</li>
                            <li>Date and time of call-outs to client</li>
                            <li>Note OK FOR VALIDATION</li>
                            <li>
                                <h4>OCIES</h4>
                                <ol>
                                    <li>Complete Address confirmed from Client? a. House Number/Block/Lot/Phase - Yes b. Street/Ave/Road/Zone Name - Yes c. Purok/Sitio - Yes d. Village/Subdivision/Brgy. Name - Yes 2. Landmark: e.g. Near Looc Elementary School, Near LCS Funeral Homes, etc. 3. Reminders Given to Client? Yes 4. Source of contact number: (RM/Cardlink/ALFES/CCFES/SR for Mobile Banking Enrollment): Note for item # 1 TSA to indicate 1. Yes - if TSA Confirmed details with Client 2. If confirmed with client that address is already complete even if no house number - kindly indicate in a,b,c,d "As confirmed with client, no house number or no street or no brgy. (whichever may be applicable) Note: *If logged under prospect or correct name format, please indicate RM number from Masterfile. Name and RM # in Masterfile 008800000000000000000013993572 - AL V TENORIO RM name with incorrect format. Logged application under prospect 1-1454LA8</li>
                                </ol>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Screenshots</h3>
                        <ul>
                            <li>PCNL</li>
                            <li>CCFES</li>
                            <li>PQ application form / Regression
                                <ul>
                                    <li>Mobile number field:
                                        <ul>
                                            <li>Mobile number must start with 63 (i.e. 639271234567) instead of 0 (i.e. 09271234567) since Cardlink does not recognize mobile numbers starting with 0. Encode the correct mobile number in the application form to lessen the clients visiting BPI branches to amend their mobile numbers registered in their credit card account for purposes like One-Time-Pin authentication.</li>
                                        </ul>
                                    </li>
                                    <li>Address field:
                                        <ul>
                                            <li>Indicate the correct zip code, Town/City or Province.</li>
                                            <li>Check if client's address is not included in areas with no courier or outside service area and outside collection territories (If OCT/OSA, ask for an alternate delivery address)</li>
                                            <li>In case the zip code in the drop down field in regression is not found, TSA should:
                                                <ul>
                                                    <li>Use the new zip code format (e.g. 2010 MABALACAT PAMPANGA 2023)</li>
                                                    <li>Use CPO (TSA may use the ZIP code database / Knowledge database as reference)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>E-mail address field:
                                        <ul>
                                            <li>Always indicate "active” email address in the application form or PQ template.</li>
                                            <li>Validation value is &lt;value1&gt;@&lt;value2&gt;.com, only underscore (_) and period (.) are allowed in the value 1 field.</li>
                                            <li>Only e-mail addresses with ".com" and “. com.ph" will be accepted.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Attachments</h3>
                        <ol>
                            <li>Completely fill up all the information in the regression application template/excel file.</li>
                            <li>Attach the application form in ATTACHMENTS view and change status
                                <ul>
                                    <li>Filename for Regression/Application form: SR Number_Last Name, First Name_Date (example: 1-2LM80VV_FRIAS, ELAINE_01012015)</li>
                                </ul>
                            </li>
                        </ol>
                    </section>
                    <section>
                        <h3>Verification</h3>
                        <p>Case will be submitted to TSA Sales Admin Group and the Sales support admin will work on the case.</p>
                    </section>
                </article>

            </div>


            <div className="navigation">
                <div className="prev" onClick={() => { nav('/call-flow-and-spiels'); window.scrollTo(0, 0) }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (3)
                </div>

                <div className="next" onClick={() => { nav('/exception-handling'); window.scrollTo(0, 0) }}>
                    Next <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Documentation
