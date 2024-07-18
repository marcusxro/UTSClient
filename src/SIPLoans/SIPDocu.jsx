import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'

const SIPDocu = () => {
    const nav = useNavigate()
    return (
        <div className='SIPDocu closer'>
            <Header />


            <div className="pageTitle"></div>

            <div className="Homepage">
                <div className='titleForPage'>DOCUMENTATION</div>
                <div className="margLeft">
                    <p>Create Call Back Cases for successful and unsuccessful call outs.</p>
                    <p>Create Inquiry Cases for non-application calls.</p>
                    <p>Create Application Cases for interested calls. Indicate complete call out details in the case comments.</p>

                    <h2>A. Call Back Request</h2>
                    <p>1. OSA creates a Salesforce Call Back case for leads assigned.</p>

                    <h3>Service Request Hierarchy:</h3>
                    <table border="1">
                        <tr>
                            <th>FIELD</th>
                            <th>INFO</th>
                        </tr>
                        <tr>
                            <td>PID Status</td>
                            <td>Not Required</td>
                        </tr>
                        <tr>
                            <td>Case Type</td>
                            <td>Credit Card</td>
                        </tr>
                        <tr>
                            <td>Sub Type</td>
                            <td>Card</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>Call Back</td>
                        </tr>
                        <tr>
                            <td>Sub Area</td>
                            <td>OSA-SIP Referral</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>OSA</td>
                        </tr>
                    </table>

                    <p>2. Call Back case should be assigned to OSA case owner.</p>
                    <p>3. OSA Case owner to monitor created Call Back case and update case status as necessary.</p>
                    <p>4. For PB created Call Back cases, make sure to encode the complete details in the SIP Referral database: SR Number, Sub-Area, Creation Date, Committed Date, and Client’s Name.</p>

                    <h2>B. SIP Loan Application</h2>
                    <p>OSA creates an Application Case for interested clients.</p>

                    <h2>1. Service Request Hierarchy:</h2>
                    <table border="1">
                        <tr>
                            <th>FIELD</th>
                            <th>INFO</th>
                        </tr>
                        <tr>
                            <td>PID Status</td>
                            <td>Passed</td>
                        </tr>
                        <tr>
                            <td>Case Type</td>
                            <td>Credit Card</td>
                        </tr>
                        <tr>
                            <td>Sub Type</td>
                            <td>Card</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>SIP Application</td>
                        </tr>
                        <tr>
                            <td>Sub Area</td>
                            <td>Bal Conversion/BT/CTC/SIP for Hospital/SIP for School</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>OSA</td>
                        </tr>
                    </table>

                    <h2>2. Subject Field:</h2>
                    <p>OSA should indicate the Amount and Source of the application in the Subject Field.</p>

                    <p>Format: Amount_Source</p>

                    <p>For example:</p>
                    <ul>
                        <li>&lt;Amount&gt;_PB / PB Manual Processing</li>
                        <li>&lt;Amount&gt;_EOL / EOL Manual Processing</li>
                        <li>&lt;Amount&gt;_MB / MB Manual Processing</li>
                        <li>&lt;Amount&gt;_SMS/ SMS Manual Processing</li>
                        <li>&lt;Amount&gt;_PB Preferred/ PB Preferred Manual Processing</li>
                        <li>&lt;Amount&gt;_SMS Preferred/ SMS Preferred Manual Processing</li>
                        <li>&lt;Amount&gt;_MB / MB Preferred Manual Processing</li>
                        <li>&lt;Amount&gt;_Client Initiated / Client Initiated Manual Processing</li>
                        <li>&lt;Amount&gt;_Client Initiated</li>
                        <li>&lt;Amount&gt;_Inbound</li>
                        <li>&lt;Amount&gt;_Cold Calls</li>
                        <li>&lt;Amount&gt;_PB AMF</li>
                        <li>&lt;Amount&gt;_Speedy</li>
                        <li>&lt;Amount&gt;_Salesforce</li>
                    </ul>

                    <h2>3. Case Comments:</h2>
                    <h3>a. Outbound</h3>
                    <p>Indicate the following:</p>
                    <ul>
                        <li>Number where client was contacted</li>
                        <li>Date and time of all successful call-outs to client</li>
                        <li>Okay for validation</li>
                    </ul>

                    <h2>b. PID</h2>
                    <p>Indicate PASSED STRICT PID/STRICT PID DONE and include PID details.</p>

                    <h2>c. OCIES</h2>
                    <ul>
                        <li>Customer #:_</li>
                        <li>Cardholder Name:_ (For PCH, name to be indicated should be same in the PCIC screen. For ECH, name to be indicated should be the same in the PCCP screen).</li>
                        <li>Credit Card #:_ (All BPI Credit Card types can be indicated except E-credit. For transactions posted in E-credit, indicate other active cards.)</li>
                        <li>Expiry Date:_ (See PCIL page 2)</li>
                        <li>SIP Loan Type:_ (Credit to Cash, Balance Conversion, Balance Transfer, SIP for School, SIP for Hospital)</li>
                        <li>Campaign:_ Referral/Promo Code (e.g., CTC05, CTC06)</li>
                        <li>PromoCode:_(e.g., CTC05, CTC06)</li>
                        <li>Amount (PHP):_</li>
                        <li>Term (Months):_ (3 ,6, 9, 12, 18, 24, 36 months)</li>
                        <li>Add on Rate:_</li>
                        <li>Monthly Amortization:_</li>
                        <li>Mode of Reimbursement:_ (Credit to Account - BPI/Manager's Check/Reg to SIP/SIPAD)</li>
                        <li>Account Number:_ (BPI/BFB Peso Account)</li>
                        <li>Account Name:_ (Account Name based in IMI1/STI1, for BFB and BPI Direct as per client)</li>
                        <li>Credit Line:_ Regular/Madness/SIPAD</li>
                        <li>Mobile Number:_ Registered in Cardlink</li>
                        <li>AMF Reversal Request?:_ Yes/No</li>
                        <li>Loan Purpose:_ (please specify)</li>
                        <li>How does the client know about the offer:_ eDM/Viber/SMS/BPI Site/Social Media/Branch</li>
                        <li>Renewal Activation Code PCIL Page 2:_ 0 - Active/1 - Inactive</li>
                        <li>1. Advised client on when the transaction be billed:_ YES/NO/NA</li>
                        <li>2. Advised client on posting of balance conversion application with insufficient limit processed via SIPAD:_ YES/NO/NA</li>
                        <li>Included in CLI?:_ YES/NO/NA</li>
                        <li>Number used to contact client for the application:_ (Indicate Contacted Number and Date & Time of Callout)</li>
                        <li>New Credit Limit:_ N/A</li>
                        <li>Incremental:_ N/A</li>
                        <li>Last ICL Date:_ N/A</li>
                    </ul>

                    <h2>d. Screenshots</h2>
                    <ul>
                        <li>PCSD/PCTD or screenshot of transaction (for Balance Conversion)</li>
                        <li>PCIQ (for Balance Conversion - Total RETAIL Transactions)</li>
                        <li>PCUS</li>
                        <li>PCIE</li>
                        <li>EPTB</li>
                        <li>STI1/IMI1 (for CTC, SIP for Schools, SIP for Hospital and Balance Transfer from Other Banks- Credit to Account only)</li>
                    </ul>

                    <h2>e. Attachments</h2>
                    <ul>
                        <h2>Balance Transfer</h2>
                        <ol>
                            <li>Latest billing statement of his other credit card or electronic statement of account (with no late charges)</li>
                            <li>Proof of payment if due date has lapsed or past due already</li>
                        </ol>
                        <h2>SIP for School</h2>
                        <ol>
                            <li>Assessment Form/Official Receipt issued within 3 months from application</li>
                        </ol>
                        <h2>SIP for Hospital</h2>
                        <ol>
                            <li>Official Receipts of Medical-related expenses issued within 3 months from application</li>
                            <li>Hospital / Clinic Assessment/s issued within 3 months from application</li>
                            <li>SOA of other credit card/s if charged using a non-BPI/BFB credit card within 3 months from application</li>
                        </ol>
                    </ul>


                    <h2>C. Non-Application Case for Inbound Calls:</h2>
                    <h3>1.Service Request Hierarchy:</h3>
                    <table border={1}>
                        <tr>
                            <th>FIELD</th>
                            <th>INFO</th>
                        </tr>
                        <tr>
                            <td>PID Status</td>
                            <td>Not Required</td>
                        </tr>
                        <tr>
                            <td>Case Type</td>
                            <td>Credit Card</td>
                        </tr>
                        <tr>
                            <td>Sub Type</td>
                            <td>Card</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>Call Back</td>
                        </tr>
                        <tr>
                            <td>Sub Area</td>
                            <td>OSA-SIP Referral</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>OSA</td>
                        </tr>
                    </table>
                    <h3>2. Subject Field:</h3>
                    <p>Indicate the type of concern of the client in the Subject Field.</p>
                    <ul>
                        <li>a. Sales-related
                            <ul>
                                <li>Inbound - Sales Related: Product Offer Inquiry only</li>
                                <li>Inbound - Sales Related: Application Follow-up</li>
                                <li>Inbound - Sales Related: Transferred to PL Agent</li>
                                <li>Inbound - Sales Related: Transferred to CC Agent</li>
                                <li>Inbound - Sales Related: Others (Specify Concern)</li>
                            </ul>
                        </li>
                        <li>b. Service-related
                            <ul>
                                <li>Inbound - Service Related: Card Delivery</li>
                                <li>Inbound - Service Related: Card Activation</li>
                                <li>Inbound - Service Related: Account Inquiry</li>
                                <li>Inbound - Service Related: Credit Limit Concerns</li>
                                <li>Inbound - Service Related: Others (Specify Concern)</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>3. Case Comments:</h3>
                    <p>Indicate in the case comments the details of the client's inquiry, and the information you provided to the client.</p>
                    <p>For example:</p>
                    <p>Inquiry about card activation.</p>
                    <p>Advised to call again the hotline, choose option 5.</p>
                </div>
            </div>



            <div className="navigation">
                <div className="prev" onClick={() => { nav('/SIP-loan/filtering-of-leads'); window.scrollTo(0, 0) }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (2)
                </div>

                <div className="next" onClick={() => { nav('/SIP-loan/exception-handling'); window.scrollTo(0, 0) }}>
                    next
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SIPDocu
