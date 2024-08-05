import React from 'react'
import Header from '../comp/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../comp/Footer'

const SIPCallFlowAndSpiels = () => {
    const nav = useNavigate()
    return (
        <div className='SIPFilter closer'>
            <Header />

            <div className="pageTitle">

            </div>
            <div className="Homepage">
                <div className="titleForPage">
                    Call Flow and Spiels
                </div>
                <h3>A. Opening Spiel</h3>
                <div className="margLeft">
                    <h4>1. OUTBOUND: “Good Morning/Afternoon/Evening! This is (OSA name) from Bank of the Philippine Islands. May I speak with (name of client)?"</h4>
                    <div className="margLefts">
                        <p>If the client is not available, ask for other contact information and best time to call back.</p>
                        <p>If wrong number, verify the dialed number.</p>
                    </div>
                    <h4>
                        2. INBOUND: “BPI Credit Card Sales. My name is (OSA name). How can I help you?”
                    </h4>
                </div>
                <h3>B. PURPOSE OF CALL</h3>
                <div className="margLeft">
                    <p>“This is a service call out from BPI and I am using the BPI outbound number 027795-2500 or 028459-2200 which you can check through www.bpi.com.ph/creditcards.” (For Outbound only)</p>
                    <p>"Please be advised that we will be asking for your personal information, and this call is being recorded for Quality Assurance purposes. Is it okay to proceed?"</p>
                    <p>"May I get the last 4-digits of your credit card number for verification purposes?"</p>

                    <div className="margLefts">
                        <h5>Handling</h5>
                        <p>1. For multiple cards that are active, the client may provide any available card numbers except for e-credit. During application filing, OSA needs to confirm where to charge the transactions. </p>
                        <p>2. For those with pending/undelivered cards for renewal, the old credit card number that is still active is acceptable.</p>
                        <table border="1" cellPadding="5" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>OLD CARD</th>
                                    <th>Old card expired?</th>
                                    <th>NEW CARD</th>
                                    <th>New card delivered?</th>
                                    <th>PB</th>
                                    <th>SMS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0 - Active</td>
                                    <td>N</td>
                                    <td>0 - Active</td>
                                    <td>Y</td>
                                    <td>OK to proceed. Indicate New EXP DATE in OCIES</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>0 - Active</td>
                                    <td>N</td>
                                    <td>1 - Inactive</td>
                                    <td>N</td>
                                    <td>OK to proceed. Indicate old EXP DATE in OCIES.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>0 - Active</td>
                                    <td>N</td>
                                    <td>1 - Inactive</td>
                                    <td>Y</td>
                                    <td>
                                        1. OK to proceed. Indicate OLD EXPIRY DATE in OCIES.<br />
                                        2. Advise activation procedure.<br />
                                        Note: OPS can process SIP application if the card number and expiry date provided is the old card number not the new one.
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>0 - Active</td>
                                    <td>Y</td>
                                    <td>0 - Active</td>
                                    <td>Y</td>
                                    <td>OK to proceed. Indicate New EXP DATE in OCIES</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>0 - Active</td>
                                    <td>Y</td>
                                    <td>1 - Inactive</td>
                                    <td>N</td>
                                    <td>Do not proceed. Return SR as PB Verif.</td>
                                    <td>Do not proceed. Call the client and advise to make a follow-up on the card renewal.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4>1. CLIENT-INITIATED</h4>
                    <div className="margLefts">
                        <h5>a. For Client initiated Referrals:</h5>
                        <div className="margLefts">
                            "This is with regard to your inquiry about our (specific product inquired). For us to assist you with your application, we will be asking for few information from you.
                        </div>
                        <h5>b. For SMS Referrals:</h5>
                        <div className="margLefts">
                            <p>"Good morning/Afternoon, this is "Name" from Bank of the Philippine Islands.</p>
                            <p>I am calling regarding the SMS you've sent in response to the SIP loan promotional offers. For us to assist you better on your inquiry /application, I need to verify some information. May I have your complete name and account number please?"</p>
                        </div>
                        <h5>c. With sent SMS:</h5>
                        <div className="margLefts">
                            <p>"We sent you a text message a few days back to advise you of a facility which we would like to share that will help you manage your finances especially in times of medical needs and even save you on interest charges. Would you be interested to know more?"</p>
                        </div>
                    </div>
                    <h4>2. COLD CALLS</h4>
                    <div className="margLefts">
                        <h5>a. Credit to Cash</h5>
                        <div className="margLefts">
                            <p>“Sir/Ma’am I am pleased to inform you that you are one of the selected clients who qualified for our "SIP Type" Special Rates offer under Per DTI Fair Trade Permit No.  "Permit Number" Series of "year" valid from "Validity Period". This means that you may turn your available limit into cash for as low as "Add on Rate" monthly add-on rate payable in "Max Term".”</p>
                        </div>
                        <h5>b. Balance Conversion:</h5>
                        <div className="margLefts">
                            <p>“As one of our valued clients, we would like to inform you that you are qualified for our "Balance Conversion" special rate offers under DTI Fair Trade Permit No. "Permit Number" Series of "year" valid from "Validity Period". This will provide you with a convenient and flexible way of paying for your credit card purchases. Let me share with you more details of how it may be of value to you.”</p>
                        </div>
                    </div>
                    <h4>3. INBOUND</h4>
                    <div className="margLefts">
                        <p>"For us to assist you better on your inquiry/application, may I have your complete name please?</p>
                        <p>“I would also like to ask for the reference code you received via SMS or e-mail.”</p>
                        <p>“Sir/Ma’am I am pleased to inform you that you are one of the selected clients who qualified for our (SIP Loan Type) Special Rates offer under DTI Fair Trade Permit No. (DTI Permit#) Series of (series-year) valid from (Promo Duration).”</p>
                    </div>
                </div>
                <h2>
                    C. PRODUCT OFFER
                </h2>
                <div className="margLeft">
                    <p>Please refer to the Promo fact sheets for specific qualifications per SIP loan type.</p>
                    <p>OSA to check the promo code database if the client is eligible for promo rates.</p>
                    <p>Primary offer should be given first. If the client declined the primary offer, OSA may proceed with the secondary offer.</p>
                    <p>Promo eligibility is extended to supplementary card holders.</p>
                    <p>Refer to Annex C for the FAQs</p>
                    <div className="margLefts">
                        <h5>a. Credit to Cash</h5>
                        <div className="margLefts">
                            <p>“BPI Express Credit-to-Cash allows cardholders to turn their credit limit to cash and pay on fixed monthly installment for as low as (existing rate) add-on rate per month on 12, 18, 24 or 36-month installment term.”</p>
                            <p>"Do you know that you can still get cash from your BPI credit card for anything anytime? This is possible through our Credit-to-Cash facility. Let me share with you more details as it may be of value to you for your unscheduled big purchases, additional capital for business expansion or for your travel cash needs."</p>
                            <p>"To illustrate, if you wish to avail an amount of (check available credit limit as a sample), you will only pay Php XXXX.XX for 36 months (OSA to compute the amount before call out)."</p>
                            <p>"If you are interested to avail, we just need to verify some information for us to process your application. Once processed, we will credit the proceeds to your BPI deposit account."</p>
                        </div>
                        <h5>b. Balance Conversion</h5>
                        <div className="margLefts">
                            <p>"BPI Balance Conversion allows cardholders to move their existing credit cards’ outstanding balance and pay on fixed monthly installment for as low as (existing rate) add-on rate per month on 12, 18, 24 or 36-month installment term.”</p>
                            <p>"Do you know that you can still apply for an installment on the latest amount charged on your account so you can avail of easier payment options? This is possible through our Balance Conversion facility. We are offering as low as (existing rate) and have the option to pay for as long as 36 months.</p>
                            <p>"To illustrate, if you wish to avail an amount of (check available credit limit as a sample), you will only pay Php XXXX.XX for 36 months (OSA to compute the amount before call out)."</p>
                            <p>"If you are interested to avail, we just need to verify some information for us to process your application."</p>
                            <h5>OR</h5>
                            <p>"You may also want to transfer your other credit card balances to your BPI Credit Card, because we currently offer our lowest Balance Transfer rate (existing rate) and have the option to pay for as long as 36 months.</p>
                            <p>"To illustrate, if you wish to avail an amount of (check available credit limit as a sample), you will only pay Php XXXX.XX for 36 months (OSA to compute the amount before call out)."</p>
                            <p>"If you are interested to avail, we just need to verify some information for us to process your application. Once processed, we will credit the proceeds to your BPI deposit account."</p>
                            <div className="margLefts">
                                <h5>Requirements:</h5>
                                <p>If a client has no promo offer, the minimum amount that can be converted is Php5,000 per transaction.</p>
                                <p>Request/application should be 5 days before the due date. Start of count is from the date the request was filed and is based on banking days.</p>
                                <p>Do not include Transactions for Reversal in the balances to be converted. Refer to Annex G for the Transaction Codes. SIP Loans Campaign Annex.docx</p>
                            </div>
                        </div>
                        <h5>c. Balance Transfer</h5>
                        <div className="margLeft">
                            <p>“BPI Express Balance Transfer allows cardholders to move their other credit cards’ outstanding balance and pay on fixed monthly installment for as low as (existing rate) add-on rate per month on 12, 18, 24 or 36-month installment term. This way, cardholders can save on monthly interest charges compared to what they would have paid for their other credit cards.”</p>
                            <p>“To apply, submit Latest billing statement of his other credit card or electronic statement of account (with no late charges) and proof of payment if due date has lapsed.”</p>
                            <div className="margLefts">
                                <h4>Requirements to apply:</h4>
                                <div className="margLefts">
                                    <p>Latest billing statement of his other credit card or electronic statement of account (with no late charges)</p>
                                    <p>Proof of payment if due date has lapsed</p>
                                </div>
                            </div>
                        </div>
                        <h5>d. SIP for Schools</h5>
                        <div className="margLeft">
                            <p>“From tuition fees, school supplies, uniform to all other school needs, enjoy these benefits with BPI S.I.P. for School. We would like you to know that you can take advantage of our special offer wherein you can convert any school-related expenses into fixed monthly installments. We have a very low add on interest of 0.75% per month for 12,18-, and 24-months’ term. You can grab this opportunity since the add on interest is lower than the usual monthly finance charge rate of 2%, allowing you savings of at least 1.25% interest per month!”</p>
                            <div className="margLefts">
                                <h5>Requirement:</h5>
                                <div className="margLefts">
                                    Assessment Form/Official Receipt issued within 3 months from application
                                </div>
                            </div>
                        </div>
                        <h5>e. SIP for Hospitals</h5>
                        <div className="margLeft">
                            <p>“BPI SIP for Hospitals allows you for an extended time to pay on easy installment up to 24-month term for all your hospital expenses. We would like you to know that you can take advantage of our special offer wherein you can convert any medical-related expenses into fixed monthly installments. We have a very low add on interest of 0.75% per month for 12-, 18-, 24-, and 36-months’ term. You can grab this opportunity since the add on interest is lower than the usual monthly finance charge rate of 2%, allowing you savings of at least 1.25% interest per month!”</p>
                            <div className="margLefts">
                                <h4>Requirements:</h4>
                                <div className="margLefts">
                                    <p>Official Receipts of Medical-related expenses issued within 3 months from application</p>
                                    <p>Hospital / Clinic Assessment/s issued within 3 months from application</p>
                                    <p>SOA of other credit card/s if charged using a non-BPI/BFB credit card within 3 months from application</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>D. POSITIVE IDENTIFICATION</h2>
                <div className="margLeft">
                    <p>"Sir/Mam, before we proceed, I need to verify some information.”</p>
                    <div className="margLefts">
                        <table border="1" cellPadding="5" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Campaign</th>
                                    <th>Required PID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Inbound Calls</td>
                                    <td>Full Card number/Customer Number (if applicable) Complete Name + 1 Static Question + 2 Complex questions</td>
                                </tr>
                                <tr>
                                    <td>Outbound Calls – Client Initiated</td>
                                    <td>Last 4 digits of the card number (if applicable or if with multiple cards) Complete Name + 1 Static Question + 2 Complex questions</td>
                                </tr>
                                <tr>
                                    <td>Outbound Calls – Cold Calls/ Invitation to Apply for Targeted Campaigns</td>
                                    <td>Complete Name + Last 4 Digits of Card + Mother's maiden name + 2 Complex questions or Complete Name + 1 Static Question + 2 Complex questions</td>
                                </tr>
                                <tr>
                                    <td>Required PID Handling if ECH is applying</td>
                                    <td>Complete Name (Full name of PCH + Full name of ECH) 1 Static Question (PCH) + 2 Complex questions (ECH)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Refer to Annex D for the PID Guide. ( SIP Loans Campaign Annex.docx )</p>
                </div>
                <h2>E. CONFIRMATION OF PENDING APPLICATION </h2>
                <div className="margLeft">
                    <p>"Sir/Ma’am, may I confirm if you have a pending application from other channels?"</p>
                </div>
                <h2>F. APPLICATION FILING</h2>
                <div className="margLeft">
                    <h4>1. Application Details</h4>
                    <div className="margLefts">
                        <p>a. Client's Name (PCIC Name)</p>
                        <p>b. Card Number (last 4 digits)</p>
                        <p>c. Amount of Loan</p>
                        <p>d. Term of Loan</p>
                        <p>e. Mode of Reimbursement</p>
                        <p>f. Account Number</p>
                        <p>g. Type of SIP Loan</p>
                    </div>
                    <h4>2. Loan Purpose</h4>
                    <div className="margLefts">
                        <p>“May I ask for the loan purpose of your application?”</p>
                        <p>Options: Home Improvement/Car Repair/Business/Travel/Health and Wellness/Hospitalization/Bills Payment/Tuition/Special Occasion</p>
                    </div>
                    <h4>3. Source</h4>
                    <p>If client-initiated: “May I ask, where did you know about our offer?”</p>
                    <p>Options: EDM/Viber/SMS</p>
                </div>
                <h2>G. APPLICATION RECAP </h2>
                <div className="margLeft">
                    <h4>1. Balance Conversion </h4>
                    <div className="margLefts">
                        <p>"To recap, your Balance Conversion application amounting to (specify amount) will be payable in (specify loan term), with an Add on rate of (specify add-on rate) or Effective Interest Rate of (specify Effective Interest Rate). Your monthly amortization will be (specify monthly amortization) and your application will be processed within (specify TAT)."</p>
                    </div>
                    <h4>2. CTC/SIP for Hospital/SIP for School/Balance Transfer </h4>
                    <div className="margLefts">
                        <p>"To recap, your (specify SIP loan type) application amounting to (specify amount) will be payable in (specify loan term), with an Add on rate of (specify add-on rate) or Effective Interest Rate of (specify Effective Interest Rate). Your monthly amortization will be (specify monthly amortization) and your application will be processed within (specify TAT)."</p>
                        <p>"The proceeds will be available then via (specify if credit to client's account or check pickup). with an account number of (specify account number)."</p>
                    </div>
                    <h4>3. Inactive Card (Blocked/For Renewal)</h4>
                    <div className="margLefts">
                        <p>"Please note that if the time of processing that the card is blocked, we will process your application using the available active card on our system. And also, please make sure that your name is match on your deposit account in order to avoid delayed or non-processing of your application.”</p>
                        <div className="margLefts">
                            <p>*If applicable - with active link card except e-Credit</p>
                        </div>
                    </div>
                    <h4>4. Confirmation</h4>
                    <div className="margLefts">
                        <p>"Kindly confirm by saying "Yes" if all details are correct" OR</p>
                        <p>"Kindly confirm by saying "Yes" if all details are correct and that you agree with said provision"</p>
                        <div className="margLefts">
                            <p>Acceptable responses: Yes, Oo, Opo, I agree, Okay, Please proceed, Correct, Tama</p>
                        </div>
                    </div>
                    <h5>5. Claiming of Loan Proceeds </h5>
                    <div className="margLefts">
                        <p>Cardholder can choose any of the following:</p>
                        <div className="margLeft">
                            <h5>a. Credit to Accoun</h5>
                            <div className="margLefts">
                                Provide the BPI/BFB deposit account under the same Cardholder name
                            </div>
                            <h5>b. For Check-pick-up (MC)</h5>
                            <div className="margLefts">
                                <p>b1. Basis for the Name to be indicated in MC is PCIC Name in Cardlink. Ops also validates the application based on PCIC Screen.</p>
                                <p>b2. For any request made by the client, on the name to be indicated, kindly secure approval from Marketing/Sir Joseph to process the application.</p>
                                <p>b3. Check Pickup Schedule (updated as of August 15, 2022) </p>
                                <div className="margLefts">
                                    <p>Schedule:	9:00am to 3:00pm (Mon / Wed / Fri)</p>
                                    <p>Claiming Area:	8/F BPI Buendia Ctr, Senator Gil Puyat Avenue, Makati City</p>
                                </div>
                                <p>b4. Present the following requirements:</p>
                                <div className="margLefts">
                                    The person who will pick up the check is the actual cardholder.
                                    <div className="margLefts">
                                        <p>2 valid IDs (gov't issued IDs such as SSS, Passport, GSIS, BIR ID, PhilHealth, Driver's license, etc.)</p>
                                        <p>Client's credit card</p>
                                        <p>Marriage certificate (for female cardholders who are recently married and have not yet updated their records with BPI)</p>
                                    </div>
                                    The person who will pick up the check is an authorized representative.
                                    <div className="margLefts">
                                        <p>2 valid Ids Original copy of authorization letter signed by the cardholder and his/her representative.</p>
                                        <p>Photocopy of 2 valid Ids of the cardholder</p>
                                        <p>Photocopy of credit card showing both its front and back portion (advise the client to cover the security code/CVV at the back)</p>
                                        <p>2 valid Ids of the authorized representative and its photocopy</p>
                                    </div>
                                </div>
                                <p>b5. For check availability, advise client to call 889-10000.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>H. REMINDERS TO CLIENT</h2>
                <div className="margLeft">
                    <h4>1. Available Credit Limit Spiel</h4>
                    <div className="margLefts">
                        If with available madness limit:
                        <div className="margLefts">
                            "Approved installment transaction will automatically be deducted from your promotional limit. In the event that promotional limit is not sufficient to cover SIP application during the time of processing, regular limit will be used."
                        </div>
                        If with available regular limit only:
                        <div className="margLefts">
                            "Approved installment transaction will be deducted from your regular limit. In the event that at point of processing, your account will be granted a promotional limit, the promotional limit will be used."
                        </div>
                    </div>
                    <h4>2. Approval of Loan based on Available Credit Limit</h4>
                    <div className="margLefts">
                        "In case you will use your credit card after this call, please be reminded that the total loan amount will be processed and approved based on the remaining available credit limit/ madness limit (whichever is applicable).”
                    </div>
                    <h4>3. CNPL Reminders </h4>
                    <div className="margLefts">
                        <p>If applicable: “Please be reminded that upon loan approval, your monthly installment shall commence after 60/90 days.”</p>
                        <p>Note: First billing Reminder is already included in the Recorded Spiel.</p>
                    </div>
                    <h4>4. Reminders for Balance Conversion (already included in the Recorded Spiel)</h4>
                    <div className="margLefts">
                        "Please settle the Minimum Payment Required for your account since this balance conversion be reflected on your next statement cut-off. Please be advised that the reversal of your transactions will be posted on the next statement cut-off."
                    </div>
                    <h4>5. SIP Loan Service Fee (already included in the Recorded Spiel)</h4>
                    <div className="margLefts">
                        <p>A service fee of Php 500 will be charged for each Balance Transfer, Credit to Cash, and Balance Conversion availment above Php 50,000; while availment up to Php 50,000 and all other S.I.P. Loan variants will be charged a service fee of P300. This fee will be reflected in the succeeding statement of account. </p>
                        <div className="margLefts">
                            <p>SIP Loan Service fee charging:</p>

                            <table border="1" cellPadding="5" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>SCENARIO</th>
                                        <th>EXAMPLE</th>
                                        <th>SERVICE CHARGE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            For clients with multiple availments, only one service fee will be billed in case both available regular and available madness will be utilized at point of transaction (per daily basis). (All application details must be the same except for credit line)
                                        </td>
                                        <td>
                                            CTC APPLICATION 1. CTC - Madness limit 2. CTC - Regular limit
                                        </td>
                                        <td>1 service fee</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            If multiple availments with different SIP type, term, promo code, one service fee will apply per application
                                        </td>
                                        <td>
                                            1. CTC - Madness limit 2. BalCon - Regular limit 1. CTC - Madness limit - Promo rate 2. BalCon - Regular limit - Regular Rate
                                        </td>
                                        <td>2 service fees</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <h4>Note</h4>
                    <div className="margLefts">
                        <p>OSA should not confirm that transaction will be processed after cutoff if application is received prior as processing can be done before cut off. (Due to the possibility of earlier processing).</p>
                        <p>If a client wishes to have the transaction posted after cut-off, then the application should be routed for processing after cut-off.</p>
                        <p>TAT to be used will still be 5-8 banking days but make sure to inform client that application may be processed upon filing and advised to check statement of account for the posting of transaction.</p>
                        <p>Published TAT should not be used to assume that transaction will be processed after cutoff.</p>
                    </div>
                </div>
                <h2>I. TERMS AND CONDITIONS </h2>
                <div className="margLeft">
                    <h4>1. READ</h4>
                    <div className="margLefts">
                        <p>"To complete your application, I will be stating the Terms and Conditions that you need to understand in availing of this Special Installment Plan loan.  Please state “Yes” to confirm that you agree and understand, since this will waive the documents required for this application. Your confirmation via recorded line will serve as your authorization on the SIP loan application."</p>
                        <p>CAMPAIGN – Credit-to-Cash Special Rates for Select Cardholders promo is exclusive to select Cardholders and valid for applications made from/until (Promo Duration) under (Available terms 6-, 12-, 18-, 24-, 36-) month terms. Promo code provided will be used to match the offer designated to qualified cardholders. Communications to inform cardholders that s/he is qualified for the offer are in the form of phone call, SMS or an electronic mail. Turnaround time (TAT) for processing of applications is 5 - 8 banking days. Standard SIP Loans Terms and Conditions not covered above shall apply.</p>
                        <p>CAMPAIGN – Balance Conversion Special Rates for Select Cardholders promo is exclusive for Select Cardholders only and valid for applications made from/ until (Promo Duration) under (Available terms 6-, 12-, 18-, 24-, 36-) month terms. Outstanding balances can be converted on top of current statement balances except unbilled installment balances and current amortizations, Cash Advance transaction, and fees and interest. Promo code provided will be used to match the offer designated to qualified cardholders. Communications to inform cardholders that s/he is qualified for the offer are in the form of phone call, SMS or an electronic mail. Turnaround time (TAT) for processing of applications is 5 - 8 banking days. Standard SIP Loans and Conditions not covered above shall apply.</p>
                    </div>
                    <h4>2. RECORDED</h4>
                    <div className="margLefts">
                        <p><strong>Eligibility</strong> - A credit cardholder (the “Cardholder”) of Bank of the Philippine Islands (the “Bank”) of good standing is qualified to avail of the BPI Special Installment Plan (S.I.P.) Loan (the “Loan”) for a minimum loan amount of PHP3,000. Subject to regulatory and compliance requirements, the Loan is available to a Cardholder of any BPI Credit Card variant (but excluding Corporate Cards and eCredit Cards) (the “Card”).</p>
                        <p><strong>Approval</strong> - The grant of the Loan shall be subject to appropriate approval. The Bank may perform additional verification for Cardholder’s security. The Bank reserves the right to terminate processing of the Loan application and/or deny the same in the event that the Cardholder fails to submit documentary requirements, or it becomes aware of any misrepresentation or any circumstances which will disqualify the Cardholder from availing of the Loan.</p>
                        <p><strong>Balance conversion</strong> - Only new retail and online transactions worth at least Php 5,000 per transaction billed in the latest Statement of Account can be converted to installment. Interest, installment, cash advance and transactions that form part of the revolving balance are not eligible. Application must be submitted at least five (5) days prior to the due date indicated in the latest Statement of Account.</p>
                        <p><strong>Supporting documents</strong> - For applications that require submission of supporting documents, date reflected in said documents should not be more than three (3) months prior to date of application.</p>
                        <p><strong>Method of payment</strong> - The Loan shall be paid in equal and successive monthly installments, as indicated in the
                            Bank’s S.I.P. Loan Charge Form and/or Statement of Account (SOA), which shall commence on the Cardholder's next billing date until the Loan is fully paid.</p>
                        <p><strong>Loan rate </strong>- Existing Loan rates at the time of receipt of loan application will apply. The monthly installment due
                            from the Loan is computed using the following formula:

                            Total Loan Amount x Factor Rate of Chosen Term = Monthly Installment Amount</p>
                        <p><strong>Default or breach of contract</strong> - In case of default or failure to pay on time any installment or any outstanding balance set forth in the Cardholder's SOA or breach of any of these terms and conditions, Cardholder agrees to the following:


                            • The Bank shall have the right to suspend, cancel or refuse to renew the Card.
                            • The Card outstanding balance including the Loan balance plus interest, penalties, fees, and charges (the
                            "Total Outstanding Balance" or "TOB") shall immediately become due and payable, without notice or demand.
                            • Failure to pay any amount due shall constitute a default of the Loan.</p>
                        <p><strong>Card renewal</strong> - If for any reason, the Cardholder fails to renew the Card or the Card is not renewed by the Bank, the Cardholder's TOB shall immediately become due and payable.</p>
                        <p><strong>Appointment of the Bank as Attorney-in-fact</strong> - Upon the occurrence of an event of default or any breach of the terms and conditions hereof, the Bank is appointed and shall act as attorney-in-fact with full power and authority to do all acts and deeds necessary to satisfy or liquidate the Loan, including (without limitation) appropriating credit balances in Cardholder’s accounts with the Bank towards payment of the Loan and other amounts due to the Bank, in addition to and other than those as herein granted. Cardholder hereby ratifies and confirms all acts and deeds as may be done or performed by the Bank under this authority.</p>
                        <p><strong>Service fee</strong> - A service fee of Php 500 will be charged for each Balance Transfer, Credit to Cash, and Balance
                            Conversion availment above Php 50,000; while availment up to Php 50,000 and all other S.I.P. Loan variants will be charged a service fee of P300. This fee will be reflected in the succeeding statement of account.
                        </p>
                        <p><strong>Discrepancy</strong> - If the account number provided for crediting of proceeds is invalid or with name discrepancy, the Loan application will not be processed.</p>
                        <p><strong>Loan restriction</strong> - A single installment Loan transaction requires only one approval. Splitting into smaller Loan transaction sizes and requiring multiple Loan transaction approvals shall not be allowed.</p>
                        <p><strong>Credit limit</strong> - If total Loan amount applied is more than the available credit limit, application will be processed and approved based on the available credit limit.</p>
                        <p><strong>Manager's Check</strong> - For proceeds disbursed via Manager's Check (MC), Cardholders agree to claim the MC within thirty (30) days from issuance date. Unclaimed MCs after the lapse of said period will be automatically cancelled along with the S.I.P. Loan transaction, without notice.</p>
                        <p><strong>Pre-termination by cardholder</strong> - Once approved, S.I.P. Loan transaction can no longer be reversed or cancelled. If Cardholder decides to pre-terminate his Loan application prior to the first billing, the Bank will charge a processing fee of Php 550 plus 2% of the Loan principal amount. If pre-termination is done after the first billing, the Bank will charge a processing feeof Php 550 plus applicable interest of the next monthly payment using the diminishing balance method.</p>
                        <p><strong>Data privacy statement</strong> - The Cardholder's signature on this application form, his continued use of the Card or
                            access to the BPI website shall constitute his agreement to, and acceptance of, the BPI Data Privacy Statement published in www.bpi.com.ph as the same may be revised or updated from time to time. The Cardholder further represents and warrants to the Bank that, prior to submitting any information about an individual (including personal information), all necessary authorization and consent as may be required in compliance with applicable confidentiality and data privacy laws have been obtained to enable the Bank to process such information.</p>
                        <p><strong>Other terms and conditions</strong> - The terms and conditions governing the issuance of the Card as indicated in the card application form and BPI website and the reminders and other provisions contained in all pages of the card carrier,
                            statement/s of account, charge slips and other Card documents or instruments, which are made an integral part hereof by reference, shall likewise be resorted to in instances where they are applicable.</p>
                    </div>
                    <h4>3. Confirmation of Agreement </h4>
                    <div className="margLefts">
                        <p>"Do you agree with the Terms and Conditions and BPI’s Privacy Policy?"</p>
                        <div className="margLefts">
                            Acceptable responses: Yes, Oo, Opo, I agree, Okay, Please proceed
                        </div>
                        "Kindly take note of this service request number as reference for this call out/application."
                    </div>
                    <h4>4. Waiver of Terms and Conditions</h4>
                    <div className="margLefts">
                        <p>If the client does not want to listen to the recorded Terms and Conditions or If the client wants to skip the recorded Terms and Conditions portion:</p>
                        <div className="margLefts">
                            <p>"As part of our process, our conversation is being recorded, your agreement with the terms and conditions is important to complete the application. To proceed, kindly confirm your approval that we will skip the Terms and conditions and that you understand the application process. You may also read the Terms and Conditions in our website, www.bpicards.com and BPI’s Privacy Policy found at www.bpi.com.ph "</p>
                            <p>Note: Waiver of T&C should not be offered to client.</p>
                        </div>
                    </div>
                </div>
                <h2>J. Reminder Spiel After Terms and Conditions - to be delivered after the client agrees to the terms and conditions of a BPI SIP Loan. This is to emphasize to the clients that the application is deemed final upon submission.</h2>
                <div className="margLeft">
                    <p>"Please note that this telephone conversation will serve as your application for a BPI SIP Loan. Kindly take note of this service request number as reference for this application. We will be submitting your application for processing and approval. Once approved, the S.I.P. Loan transaction can no longer be reversed or cancelled."</p>
                </div>
                <h2>K. CROSS-SELL</h2>
                <div className="margLefts">
                    <p>“Thank you for giving me a chance to assist you on your _______ application. Would you be also interested to avail of our (other SIP Loan Products)?</p>
                    <div className="mnargLefts">
                        <h4>LOAN TYPE</h4>
                        <p>Balance Transfer</p>
                        <div className="margLefts">
                            With our Special Balance Transfer program, you can now transfer all of your total outstanding balances from your other credit cards to your BPI Credit Card and pay in equal monthly installments at (e.g. AOR: 0.59%)
                        </div>
                        <p>Balance Conversion</p>
                        <div className="margLefts">
                            With our Special Balance conversion program, you can now opt/choose to convert your total outstanding retail balance to monthly installment terms for as low as (e.g. AOR: 0.59%) for (Available Term: 36 months).
                        </div>
                        <p>Credit To Cash</p>
                        <div className="margLefts">
                        With our Credit to Cash program, you can now convert your available credit limit into cash in monthly installment terms for as low as (e.g. AOR: 0.59%) for (Available Term: 36 months).
                        </div>
                        <p>SIP for School</p>
                        <div className="margLefts">
                        You can take advantage of our special offer wherein you can convert any school related expenses into fixed monthly installment. We have a very low add on interest of (AOR) per month for (Available Term) month term.
                        </div>
                        <p>SIP for Hospital</p>
                        <div className="margLefts">
                        You can take advantage of our special offer wherein you can convert any medical related expenses into fixed monthly installment. We have a very low add on interest of (AOR) per month for (Available Term) month term.
                        </div>
                    </div>
                </div>
                <h2>L. CLOSING SPIEL </h2>
                <div className="margLefts">
                    <p>“Thank you for availing our (specify loan type).”</p>
                    <p><strong>OUTBOUND</strong>: "Thank you for your time."</p>
                    <p><strong>INBOUND</strong>: "Thank you for choosing BPI. Thank you for calling.</p>
                </div>
            </div>
            <div className="navigation">
                <div className="prev" onClick={() => { nav('/SIP-loan/filtering-of-leads'); window.scrollTo(0, 0) }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (2)
                </div>

                <div className="next" onClick={() => { nav('/SIP-loan/documentation'); window.scrollTo(0, 0) }}>
                    next  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SIPCallFlowAndSpiels
