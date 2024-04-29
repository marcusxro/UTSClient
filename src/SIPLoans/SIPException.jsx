import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'
import loanAmount from '../images/loanAmount.JPG'
import loanSched from '../images/paymentSched.JPG'
const SIPException = () => {
    const nav = useNavigate()
    return (
        <div className='SIPException closer'>
            <Header />

            <div className="pageTitle"></div>


            <div className="Homepage">
                <h1>EXCEPTION HANDLING</h1>
                <h3>A. SPECIAL HANDLING</h3>
                <h3>1. SIP Loan Application – AMF Reversal Requests</h3>
                <ul>
                    <li>OSA may already assist clients who pro-actively request for AMF reversal even if no PB endorsement as long as:</li>
                    <ol>

                        <li>within the AMF reversal parameter</li>
                        <li>AMF is already reflected in client's SOA</li>
                    </ol>
                    <li>OSA may also check PCIC page 4 C4 field for new offer code when necessary.</li>
                    <li>These clients pertain to those who are already aware of the AMF reversal parameters for SIP loans.</li>
                    <li>For clients who have other concerns on the AMF reversal parameters, kindly refer to 889-10000.</li>
                </ul>

                <h3>AMF Reversal Parameters:</h3>
                <ul>
                    <li>Minimum Loan Amount: Php 20,000</li>
                    <li>Card Tenure: Minimum of 12 months on books</li>
                    <li>SIP Loan Type: Applicable to all SIP Loan variants – Credit to Cash, Balance Conversion, Balance Transfer, SIP for School, SIP for Hospital (regardless of term)</li>
                    <li>Two principal cards requested for reversal (2 different card variants)</li>
                    <li>If requested, a card for reversal is 1 principal and 1 supplementary card (same card variant)</li>
                    <li>If the SIP Loan amount is covered by both Madness limit and Regular limit, this will still qualify client on the AMF Waiver.</li>
                    <li>Offers should be made only to cardholders with an available limit.</li>
                    <li>SIP Loan campaign guidelines apply.</li>
                    <li>In case of exceptions, email Ma. Theresa S Ortega.</li>
                </ul>
                <h3>AMF Reversal Process:</h3>
                <ul>
                    <li>OSA may already assist client who proactively request for AMF reversal as long as AMF is reflected in Cardlink even if there is no endorsement of PB.</li>
                    <li>PB Call Back requests with AMF reversal will be assigned to OSA for call out. Campaign source is "PB_AMF".</li>
                    <li>Create a SIP Loan application SR with the subject field: &lt;Amount&gt;_Campaign Source_AMF</li>
                    <li>Use the OCIES calculator with AMF reversal template</li>
                    <li>Check offer codes in PCIC page 4 C4 field.</li>
                </ul>
                <h3>List of Offer Codes:</h3>
                <table border={1}>
                    <tr>
                        <th>Offer Code</th>
                        <th>AMF Reversal Options</th>
                    </tr>
                    <tr>
                        <td>P1</td>
                        <td>RTR points if with enough points, AMF on 0% Installment, 100% AMF Reversal</td>
                    </tr>
                    <tr>
                        <td>P2</td>
                        <td>AMF to 0% Installment, RTR Points, Supplementary Card for non-supple owning BPI Cardholders, SIP Loans</td>
                    </tr>
                    <tr>
                        <td>P5</td>
                        <td>AMF to 0% Installment, RTR Points, 50% Discount Offer, Supplementary Card for non-supple owning BPI Cardholders, SIP Loans</td>
                    </tr>
                    <tr>
                        <td>N1</td>
                        <td>RTR points if with enough points, AMF on 0% Installment, 100% AMF Reversal</td>
                    </tr>
                    <tr>
                        <td>N2</td>
                        <td>AMF to 0% Installment, RTR Points, Supplementary Card for non-supple owning BPI Cardholders, SIP Loans</td>
                    </tr>
                    <tr>
                        <td>N5</td>
                        <td>AMF to 0% Installment, RTR Points, 50% Discount Offer, Supplementary Card for non-supple owning BPI Cardholders, SIP Loans</td>
                    </tr>
                </table>
                <h3>Process:</h3>
                <table border={1}>
                    <tr>
                        <th>Offers</th>
                        <th>SR</th>
                        <th>Ops Process</th>
                        <th>Comments</th>
                    </tr>
                    <tr>
                        <td>RTR Points Offer</td>
                        <td>AMF Waiver</td>
                        <td>AMF Related Req-Approved Reversal</td>
                        <td>Process reversal</td>
                    </tr>
                    <tr>
                        <td>50% Discount</td>
                        <td>AMF Related Req – 50% Discount</td>
                        <td>Process 50% reversal</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>AMF To Installment</td>
                        <td>AMF Related Req – AMF to Installment</td>
                        <td>Process AMF to Installment</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SIP Loans</td>
                        <td>AMF Related Req-SIP Loan Offer</td>
                        <td>Process Reversal</td>
                        <td>Upon processing, OSA to indicate accounts with AMF Offer</td>
                    </tr>
                    <tr>
                        <td>Supple Card Availment</td>
                        <td>AMF Related Req-AMF Offer Supple Card Availment</td>
                        <td>Process reversal</td>
                        <td>5 days TAT for ECH creation, 3 days additional TAT for reversal</td>
                    </tr>
                </table>
                <h3>DTAS:</h3>
                <table border={1}>
                    <tr>
                        <th>Ops Process</th>
                        <th>Comments</th>
                    </tr>
                    <tr>
                        <td>RTR Points Offer</td>
                        <td>AMF Waiver</td>
                    </tr>
                    <tr>
                        <td>50% Discount</td>
                        <td>AMF Waiver</td>
                    </tr>
                    <tr>
                        <td>AMF To Installment</td>
                        <td>AMF Waiver</td>
                    </tr>
                    <tr>
                        <td>SIP Loans</td>
                        <td>AMF Waiver</td>
                    </tr>
                    <tr>
                        <td>Supple Card Availment</td>
                        <td>AMF Waiver</td>
                    </tr>
                    <tr>
                        <td>Special Consideration</td>
                        <td>Credit Card – Waiver of Annual Fee – Exception Handling (For Reversal)</td>
                    </tr>



                </table>

                <h3>2. SIP Loan Application Rejected Due to Insufficient Limit/Over Credit Limit</h3>
                <p>This scenario is often encountered due to a misalignment of credit limit.</p>
                <p><strong>Process:</strong></p>
                <ol>
                    <li>Check PCUS, PCIE, and PCIL p4 RETAIL DAILY LIMIT.</li>
                    <li>If upon checking, it was confirmed that the client has an available credit limit in PCUS and PCIE, but in PCIL p4 RETAIL DAILY LIMIT is 0, OSA may proceed with the application and ask for approval from BCC-Realloc/BPI.</li>
                    <li>Once approved, OSA may endorse for transmittal to SSA.</li>
                </ol>



                <p><strong>To:</strong> BCC-Realloc/BPI@BPIPH</p>
                <p><strong>Cc:</strong> OSA Officers, Joseph G. Jimenez/BPI, SIP Team</p>
                <p><strong>Subject:</strong> Client's Name_Credit Card Retail Daily Limit_Urgent</p>
                <p><strong>Body:</strong></p>
                <p>Good day!</p>
                <p>Requesting for assistance please and approval to proceed with the processing of SIP Loan application.</p>
                <p>Client's SIP transaction was not processed due to insufficient funds/over credit limit.</p>
                <p><strong>Card Number:</strong></p>
                <p><strong>CH Name:</strong></p>
                <p>&lt;PCUS Screenshot&gt;</p>
                <p>&lt;PCIL p4 Screenshot&gt;</p>


                <h3>3. SIP Loan Application rejected due to insufficient limit/over credit limit</h3>
                <p>This scenario is often encountered due to a misalignment of credit limit.</p>
                <h3>Process:</h3>
                <p>Check PCUS, PCIE, and PCIL p4 RETAIL DAILY LIMIT.</p>
                <p>If upon checking, it was confirmed that client has an available credit limit in PCUS and PCIE, but in PCIL p4 RETAIL DAILY LIMIT is 0, OSA may proceed with the application and ask for approval from BCC-Realloc/BPI. Once approved, OSA may endorse for transmittal to SSA.</p>




                <h3>Example:</h3>


                <table border={1}>
                    <caption>PCUS (      ) CARDLINK PAGE 01 OF 01 09/21/2021</caption>
                    <tr>
                        <th>Field</th>
                        <th>Info</th>
                    </tr>
                    <tr>
                        <td>CURR BAL</td>
                        <td>23,988.98</td>
                    </tr>
                    <tr>
                        <td>CURR DUE</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>LAST PYMT</td>
                        <td>09/20/21</td>
                    </tr>
                    <tr>
                        <td>CASH BAL</td>
                        <td>18.97-</td>
                    </tr>
                    <tr>
                        <td>RTL BAL</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>CUST LINE</td>
                        <td>248,000.00</td>
                    </tr>
                    <tr>
                        <td>TEMP LINE</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>AVL LINE</td>
                        <td>224,011.02</td>
                    </tr>
                    <tr>
                        <td>MADNS LINE</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>AVL MADNS</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>OUTS AUTH</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>STMT BAL</td>
                        <td>2,621.03</td>
                    </tr>
                    <tr>
                        <td>TOTAL DUE</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>LAST PYMT</td>
                        <td>2,640.00</td>
                    </tr>
                    <tr>
                        <td>YTD USAGE</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>YTD INT</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>MKTS</td>
                        <td>ST 1</td>
                    </tr>
                </table>

                <table border={1}>
                    <caption>PCIL (      ) CARDLINK PAGE 04 OF 04 09/21/2021</caption>
                    <tr>
                        <th>Field</th>
                        <th>Info</th>
                    </tr>
                    <tr>
                        <td>AUTHORISATION</td>
                        <td>CARD LIMIT 00000248000</td>
                    </tr>
                    <tr>
                        <td>RETAIL DAILY LIMIT</td>
                        <td>00000000000</td>
                    </tr>
                    <tr>
                        <td>CASH LIMIT</td>
                        <td>00000000000</td>
                    </tr>
                    <tr>
                        <td>CASH DAILY LIMIT</td>
                        <td>00000000000</td>
                    </tr>
                    <tr>
                        <td>PAYMENT</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>VELOCITY CHECK OVERRIDE</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>OVERRIDE EXPIRY DATE</td>
                        <td>00000000</td>
                    </tr>
                    <tr>
                        <td>AUTHORISATION SEQUENCE</td>
                        <td>000</td>
                    </tr>
                    <tr>
                        <td>ACTIVITY CHECK</td>
                        <td>000</td>
                    </tr>
                    <tr>
                        <td>VELOCITY CHECK</td>
                        <td>000</td>
                    </tr>
                    <tr>
                        <td>AUTHORISATION TOLERANCE</td>
                        <td>000</td>
                    </tr>
                    <tr>
                        <td>SINGLE TXN ACTIVITY</td>
                        <td>000</td>
                    </tr>
                    <tr>
                        <td>FRAUD FILE</td>
                        <td>000</td>
                    </tr>
                    <tr>
                        <td>TEMPORARY AUTHORISATION</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>RETAIL DAILY LIMIT</td>
                        <td>00000000000</td>
                    </tr>
                    <tr>
                        <td>CARD LIMIT</td>
                        <td>00000000000</td>
                    </tr>
                    <tr>
                        <td>CASH DAILY LIMIT</td>
                        <td>00000000000</td>
                    </tr>
                    <tr>
                        <td>CASH LIMIT</td>
                        <td>00000000000</td>
                    </tr>
                    <tr>
                        <td>EFFECTIVE DATE</td>
                        <td>00/00/0000</td>
                    </tr>
                    <tr>
                        <td>EXP DATE</td>
                        <td>00/00/0000</td>
                    </tr>
                </table>

                <table border={1}>
                    <caption>PCIE (      ) CARDLINK PAGE 01 OF 02 09/21/2021</caption>
                    <tr>
                        <th>Field</th>
                        <th>Info</th>
                    </tr>
                    <tr>
                        <td>RAQUEL V ILUSTRE</td>
                        <td>STATUS 2 EXP 01/25</td>
                    </tr>
                    <tr>
                        <td>RTL DLY LMT/AVL</td>
                        <td>0 / 0.00</td>
                    </tr>
                    <tr>
                        <td>CSH DLY LMT/AVL</td>
                        <td>0 / 0.00</td>
                    </tr>
                    <tr>
                        <td>CRD LMT/AVL</td>
                        <td>248000 / 272800.00</td>
                    </tr>
                    <tr>
                        <td>CSH LMT/AVL</td>
                        <td>0 / 0.00</td>
                    </tr>
                    <tr>
                        <td>LST AUTH AMT</td>
                        <td>80,000.00 *DECL* CNTY 608 MCC 5718 DT/TI 09142021/112906</td>
                    </tr>
                    <tr>
                        <td>LIFETIME AMF WAIVER</td>
                        <td>STR_POS@RA050318</td>
                    </tr>
                    <tr>
                        <td>AVL LMT</td>
                        <td>248811.02</td>
                    </tr>
                    <tr>
                        <td>AVL CASH</td>
                        <td>272818.97</td>
                    </tr>
                    <tr>
                        <td>AVL INSTL</td>
                        <td>223992.05</td>
                    </tr>
                    <tr>
                        <td>BLOCK/ALT</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>AUTH ACTION</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>ST</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>DOB</td>
                        <td>08161972</td>
                    </tr>
                </table>

                <h3>3. SIP Loan Application Updates/Verification</h3>
                <p>Proper identification should be in place during call back. The application recap with the updated details should be stated, and re-affirmation of the client's agreement on the terms and conditions must be secured.</p>
                <p><strong>Note:</strong> Strict PID may not be required as long as no pertinent information was disclosed to the client during the call.</p>

                <h3>4. Resigned Unibanker – DOSRI Tagging Not Yet Lifted</h3>
                <p>If the client is a resigned BPI officer and the account is still tagged as a DOSRI account, please do not facilitate the SIP Loan application. Advise the client to call 889-10000 to request account maintenance and untagging of DOSRI in Cardlink.</p>

                <h3>. Do Not Call for Sales Requests</h3>
                <p>OSA to update call-out status in the database: Do Not Call for Sales. Team Leader to request Do Not Call for Sales tagging.</p>

                <h3>6. PCH/ECH Balance Conversion</h3>
                <p>a. <strong>PCH:</strong><br />
                    PCH transacts for the SIP Application, and the PCH card is active. PCH may apply for ECH transactions.</p>

                <p>b. <strong>ECH:</strong><br />
                    ECH can only apply for his/her transaction. ECH cannot apply for PCH transaction. ECH cannot apply if there is no active PCH card.</p>

                {/* 
                <h3>Card Restriction</h3>
                <p>If the SIP Loan application is not processed due to card restriction by Card Fraud, endorse concern to Cards Fraud Team.</p>
                <p>Email Template:</p>
                <p><strong>To:</strong> BCC-Realloc/BPI@BPIPH</p>
                <p><strong>Cc:</strong> OSA Officers, Joseph G. Jimenez/BPI, SIP Team</p>
                <p><strong>Subject:</strong> Client's Name_Credit Card Retail Daily Limit_urgent</p>
                <p><strong>Body:</strong></p>
                <p>Good day!</p>
                <p>Requesting for assistance please and approval to proceed with the processing of SIP Loan application</p>
                <p>Client's SIP transaction was not processed due to Insufficient funds/Over Credit Limit</p>
                <p>Card Number:</p>
                <p>CH Name:</p>
                <p>&lt;PCUS Screenshot&gt;</p>
                <p>&lt;PCIL p4 Screenshot&gt;</p>
                <p>SIP Loan Application updates/verification</p>
                <p>Proper identification should be in place during call back. The application recap with the updated details should be stated and re-affirmation of the client's agreement on the terms and conditions must be secured.</p>
                <p>Note: Strict PID may not be required as long as no pertinent information was disclosed to client during the call.</p>
                <p>Resigned Unibanker – DOSRI tagging not yet lifted</p>
                <p>If client is a resigned BPI officer and the account is still tagged as DOSRI account, please do not facilitate the SIP Loan application.</p>
                <p>Advise client to call 889-10000 to request for account maintenance and untagging of DOSRI in Cardlink.</p>
                <p>Do Not Call for Sales requests</p>
                <p>OSA to update call out status in the database: Do Not Call for Sales.</p>
                <p>Team Leader to request for Do Not Call for Sales tagging.</p>
                <p>PCH/ECH Balance Conversion</p>
                <p>a. PCH</p>
                <p>PCH transacts for the SIP Application and PCH card is active</p>
                <p>PCH may apply for ECH transactions</p>
                <p>b. ECH</p>
                <p>ECH can only apply for his/her transaction</p>
                <p>ECH cannot apply for PCH transaction</p>
                <p>ECH cannot apply if there is no active PCH card</p>
                <p>Usage of available limit instead of madness limit</p>
                <p>Do not accommodate request to use the regular credit limit if the cardholder has a sufficient madness limit.</p> */}

                <h3>7. Usage of Available Limit Instead of Madness Limit</h3>
                <p>Do not accommodate requests to use the regular credit limit if the cardholder has a sufficient madness limit.</p>

                <h3>8. Card Restriction</h3>
                <p>If the SIP Loan application is not processed due to card restriction by Card Fraud, endorse concern to Cards Fraud Team.</p>
                <p><strong>Email Template:</strong></p>
                <p><strong>To:</strong> Gladys M. Balmes/BPI@BPIPH, Alden R. Trilles/BPI@BPIPH, Mia Kaysel P. Jane/BPI@BPIPH, Bryan Mayo T. Villarino/BPI@BPIPH, Gembert R. Ramos/BPI@BPIPH, Luigi A. Manianglung/BPI@BPIPH,Rhoanne M. Atienza/BPI@BPIPH</p>
                <p><strong>Cc:</strong> OSA Officers</p>
                <p><strong>Subject:</strong> Client's Name_Credit Card Restriction_Urgent</p>
                <p><strong>Body:</strong></p>
                <p>Good day!</p>
                <p>Requesting for assistance please.</p>
                <p>Client's SIP transaction was not processed due to restriction by card fraud.</p>
                <p><strong>Application SR Number:</strong><br />
                    <strong>Call Date:</strong><br />
                    <strong>Customer #:</strong><br />
                    <strong>Cardholder Name:</strong><br />
                    <strong>Credit Card #:</strong><br />
                    <strong>Expiry Date:</strong><br />
                    <strong>SIP Loan Type:</strong><br />
                    <strong>Campaign:</strong><br />
                    <strong>PromoCode:</strong><br />
                    <strong>Amount (PHP):</strong><br />
                    <strong>Term (Months):</strong><br />
                    <strong>Add on Rate:</strong><br />
                    <strong>Monthly Amortization (PHP):</strong><br />
                    <strong>Mode of Reimbursement:</strong><br />
                    <strong>Account Number:</strong><br />
                    <strong>Account Name:</strong><br />
                    <strong>Credit Line:</strong><br />
                    <strong>Mobile Number:</strong><br />
                    <strong>Loan Purpose:</strong><br />
                    <strong>Source:</strong><br />
                    <strong>Referral SR Number:</strong><br />
                    <strong>Loan Purpose: FOR CTC ONLY</strong>
                </p>

                <h3>9. SIP Loan Applications with Insufficient Limits:</h3>
                <p>    OSA can process Balance conversion for accounts with insufficient credit limit. No need to seek approval from Marketing.</p>
                <p><strong>OK to process under MADNESS LIMIT:</strong><br />
                    Account has insufficient regular limit but with sufficient madness limit.<br />
                    Account has negative regular limit but with sufficient madness limit.</p>
                <p><strong>OK to process under REGULAR LIMIT (up to Total Credit Limit only):</strong><br />
                    Account has insufficient regular limit but no available madness limit.<br />
                    Both Madness Limit and Regular Limit are negative, ok to process using regular limit (up to total credit limit only).<br />
                    Accounts have insufficient regular limit but negative available madness limit.</p>
                <p><strong>For Balance Conversion over Credit Line/Limit, approval is needed.</strong></p>
                <p><strong>Notes:</strong><br />
                    10% buffer on Credit Line/Limit for all accounts will apply.<br />
                    NOK to process - Block P and Block C accounts or with past due accounts.<br />
                    OSA needs to mention information regarding the minimum payment required.</p>
                <p><strong>Email Template:</strong></p>
                <p><strong>To:</strong> Joseph G. Jimenez</p>
                <p><strong>Cc:</strong> TL, Site Head</p>
                <p><strong>Subject:</strong> Client's Name_Request for Approval_For Balcon over CL</p>
                <p><strong>Body:</strong></p>
                <p>Good day!</p>
                <p>Requesting for your approval please.</p>
                <p>Client is insistent to apply for Balance Conversion. However, the application amount exceeds the regular credit line. Kindly advise if we can proceed with the SIP Loan application of the client.</p>
                <p><strong>Name:</strong><br />
                    <strong>Customer Number:</strong><br />
                    <strong>Transaction Amount:</strong><br />
                    <strong>Credit Line:</strong></p>
                <p>Thank you.</p>
                <h3>10. Posting of Transactions in Cardlink<br /></h3>
                <p>    Please refer to Annex F. {"< SIP Loans Campaign Annex.docx >"}</p>
                <h3>11. Pre-termination Fee Computation</h3>
                <p>Please refer to References: SIP PRE-TERM_TEMPLATE <a href="SIP PRE-TERM_TEMPLATE.WK4">SIP PRE-TERM_TEMPLATE.WK4</a></p>

                <h3>12. Effective Interest Rate Template</h3>
                <p>Please refer to References: SIP Effective Interest Computation_080713 <a href="SIP Effective Interest Computation_080713.xls">SIP Effective Interest Computation_080713.xls</a></p>

                <p>If the client is insistent to receive an email regarding EIR Computation, below is the template:</p>

                <p><strong>To:</strong> Client's Email Address</p>

                <p><strong>Subject:</strong> BPI Balance Conversion_Client’s Name_ EIR Computation request</p>

                <p><strong>Body:</strong></p>
                <p>Dear Mr/Ms ______,</p>

                <p>Greetings from the Bank of the Philippine Islands!</p>

                <p>This is to confirm the validity of the call made by one of our Sales Associates, _____________.</p>

                <p>As requested, please refer to sample computation below for balance conversion:</p>



                <div className="image">
                    <img src={loanAmount} alt="" />
                </div>
                <div className="image">
                    <img src={loanSched} alt="" />
                </div>

            </div>


            <div className="navigation">
                <div className="prev" onClick={() => { nav('/SIP-loan/documentation'); window.scrollTo(0, 0) }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (3)
                </div>

                <div className="next" >
                    end
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default SIPException
