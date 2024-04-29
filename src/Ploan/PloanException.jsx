import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'
const PloanException = () => {
    const nav = useNavigate()
    return (
        <div className='PloanCall closer'>

            <Header />
            <div className="pageTitle">
            </div>
            <div className="Homepage">
                <h1>1. Exception Handling</h1>
                <ol>
                    <li><strong>Handling of Application with NO Active Deposit Account</strong></li>
                    <ul>
                        <li><strong>PL Campaign Type</strong>: Regular Personal Loan Application with income documents</li>
                        <li><strong>Handling</strong>: Okay to facilitate with no deposit account, client may open the account during visit to the branch.</li>
                        <li><strong>PL Campaign Type</strong>: PQ GRC Campaign Personal Loan Application</li>
                        <li><strong>Handling</strong>: Okay to facilitate with no deposit account, client may open the account during visit to the branch, since prequalification parameters are based on previous loan account.</li>
                        <li><strong>PL Campaign Type</strong>: PQ Personal Campaign Personal Loan Application</li>
                        <li><strong>Handling</strong>: Okay to facilitate with no deposit account, client may open the account during visit to the branch since included in Personal PQ Campaign.</li>
                    </ul>
                    <li><strong>Handling of Personal Loan Call Back Requests of Preferred Clients</strong></li>
                    <ul>
                        <li>Sales Associate to check if the client is qualified for the offer based on the available information.</li>
                        <li>If there is no available information to identify the client, TSA to handle the call out.</li>
                        <li>If upon probing, TSA learns that client is preferred, TSA will advise client that the request will be endorsed to the branch who is handling his account.</li>
                        <ul>
                            <li><strong>Spiel</strong>: "Thank you for your interest to apply for a Personal Loan. We will be endorsing your details to your assigned Relationship Manager for them to assist you. Thank you."</li>
                            <li>TSA to tag the record as <strong>Contacted_For Endorsement to RM</strong>.</li>
                        </ul>
                    </ul>
                    <li><strong>Inbound handling: Confirmation of Pending/existing application</strong></li>
                    <ul>
                        <li>"Sir/Mam, may I confirm if you have a pending application/from other channels."</li>
                        <li>TSA can probe further if the client was assisted by another agent and/or agreed with the Terms and Conditions.</li>
                        <ul>
                            <li>NO: Assist client / Refer to dedicated OSA within the team</li>
                            <li>YES: Inbound caller: OSA should check call out status in cold calls leads. Follow handling for cold calls vs warm calls. Refer to <strong>ANNEX C</strong>.</li>
                            <li><strong>NOTE</strong>: For incomplete PL and Credit card applications - OSA to ask the details of the pended application (e.g., Reference/SR#, Agent Name, ETC), then refer the client to the concerned OSA via Email.</li>
                        </ul>
                    </ul>
                    <li><strong>Handling of Industries that are not Qualified for Personal Loans</strong></li>
                    <ul>
                        <li><strong>Warm Calls</strong>: Normal Handling (BAU)</li>
                        <li><strong>Cold Calls</strong>: To handle additional screening</li>
                        <ul>
                            <li>Please do additional screening by probing during your calls to find out where client is working before proceeding with the PQ offer. (Salesforce Checking)</li>
                            <li>Below are the industries that we will not qualify</li>
                            <ul>
                                <li>BPO Industry/call center (staff)</li>
                                <li>Travel and tourism (airlines, travel agency, hotels and lodging and souvenir shops)</li>
                                <li>OFWs - seafarer and land-based</li>
                                <li>Restaurants</li>
                                <li>Retailing of clothing/ apparel</li>
                                <li>Real estate and allied industries (furniture and small scale construction)</li>
                                <li>Entertainment (events and performers)</li>
                            </ul>
                            <li><strong>NOTE</strong>: For Client initiated, credit.OPS will conduct the evaluation.</li>
                        </ul>
                    </ul>
                </ol>


                <h2>2. Exception Handling</h2>
                <ol>
                    <li><strong>NAME DISCREPANCY</strong></li>
                    <ul>
                        <li>"SF Name: Maiden Name, Per client: Married already"</li>
                        <ul>
                            <li>If no Siebel RM under married name, but with FIAS account under married name (linked to said RM), okay to proceed with application. Make sure to advise the client to visit branch of account (BOA) to request for updating of records.</li>
                        </ul>
                        <li>"SF Name: Maiden, Deposit Account Name: Maiden, Per client: Married"</li>
                        <ul>
                            <li>If the deposit account name matches the declared name in the application form, OK to proceed.</li>
                            <li>If the deposit account name/RM Name (Maiden) is different vs. application form (Married-Per client), the client may submit the marriage certificate during loan docs signing. Married name should be indicated in the application form.</li>
                            <ul>
                                <li>This should proceed to booking and will not require any endorsement or approval from our end.</li>
                                <li>Take note that we have established that the client is the person we intend to talk to because the birth date and Mother's Maiden Name would still be the same even if there was a change in marital status (from single to married).</li>
                                <li>Remind the client to visit the branch to update information (since updating of RM2 record requires face-to-face interaction with the client, and signing of new CIS).</li>
                            </ul>
                        </ul>
                        <li>"SF Name: Name with no middle initial, Per client: With middle initial/name"</li>
                        <ul>
                            <li>If with RM linked deposit account indicating the correct name per client, OK to proceed with application and log application under the same RM.</li>
                        </ul>
                        <li>"SF Name: Name with middle initial, Per client: No initial/name"</li>
                        <ul>
                            <li>If the name in the deposit account does not match, email branch for confirmation.</li>
                        </ul>
                        <li>"SF Name: Incorrect Spelling (First, Middle, Last Name)"</li>
                        <ul>
                            <li>If with RM linked deposit account indicating the correct name per client, OK to proceed with application and log application under the same RM.</li>
                            <li>If the name in the deposit account does not match, email branch for confirmation. Once confirmed, create an application SR.</li>
                            <li>Log application under the same RM.</li>
                        </ul>
                        <li>"Name in Masterfile is same with Siebel, has no suffix but as confirmation by client it should have a suffix (No other RM record)"</li>
                        <ul>
                            <li>Email branch for confirmation.</li>
                            <li>If as per branch no suffix indicated in sigcard, make sure to advise the client to visit branch of account (BOA) to request for updating of records.</li>
                        </ul>
                        <li>"Deposit account name is NOT updated"</li>
                        <ul>
                            <li>If the name in the deposit account does not match vs RM/per client, email branch for confirmation.</li>
                            <ul>
                                <li>Deposit account is under Married/Maiden</li>
                                <li>Mispelled</li>
                                <li>Interchanged name</li>
                                <li>Abbreviated name/ Part of name is missing</li>
                            </ul>
                        </ul>
                    </ul>
                    <li><strong>RM NUMBER DISCREPANCY</strong></li>
                    <ul>
                        <li>If RM number in the database is under Maiden Name but the client is already married and already has an RM number under the married name, proceed with the application. Log the application under RM record under the married name but the RM number to be indicated in the application should be that of the RM number under the maiden name.</li>
                    </ul>
                    <li><strong>MARITAL STATUS</strong></li>
                    <ul>
                        <li>"Siebel Status: Married, Per client: Separated already"</li>
                        <li>Use Separated status.</li>
                    </ul>
                    <li><strong>TIN/SSS NUMBER</strong></li>
                    <ul>
                        <li>If employed, TIN or SSS number is required.</li>
                        <li>If Passive income earner/Self-employed, and the client does not have TIN or SSS number or can no longer recall/retrieve, okay to proceed with the application.</li>
                        <li>UMID can be replaced by SSS number.</li>
                        <ul>
                            <li>TIN/SSS number (and/or lack thereof) can be confirmed outright (after passing PID) refer to Siebel and ALFES.</li>
                            <li>If can no longer be retrieved and the source of income is not Employed okay to proceed with the application.</li>
                            <ul>
                                <li>TSA will not file an application for those with an existing record in ALFES. Proceed to N/Q Spiel.</li>
                            </ul>
                        </ul>
                    </ul>
                    <li><strong>BIRTHDATE DISCREPANCY</strong></li>
                    <ul>
                        <li>If incorrect birthdate, email the branch for confirmation, even if the client answered 2 other PID questions.</li>
                    </ul>
                    <li><strong>MOTHER'S MAIDEN NAME DISCREPANCY</strong></li>
                    <ul>
                        <li>Misspelled mother's maiden name - okay to proceed as long as the client answered 2 other PID questions.</li>
                        <li>Totally different mother's maiden name - for branch confirmation, even if the client answered 2 other PID questions.</li>
                        <li>Incomplete mother's maiden name (only last name is indicated in the records) - okay to proceed as long as the client answered 2 other PID questions.</li>
                        <li>Shortened Mother's Maiden (Mother's Maiden name is cut or Vowels dropped in the records) - okay to proceed as long as the client answered 2 other PID questions.</li>
                        <li>Indicated in mother's maiden name is mother's married name - As long as the complete MMN on record was mentioned, it is already acceptable. TSA to probe on the correct MMN. Note: If confirmed MMN is for updating, indicate correct MMN in regression and advise the client to visit the branch whenever convenient for him/her to update his/her record.</li>
                        <li>Interchanged mother's maiden name - OK to proceed as long as the client answered 2 other PID questions. As long as the complete MMN on record was mentioned, it is already acceptable. TSA to probe on the correct MMN Format. Note: If confirmed MMN is for updating, indicate correct MMN in regression and advise the client to visit the branch whenever convenient for him/her to update his/her record.</li>
                    </ul>
                    <li><strong>Zip Code</strong></li>
                    <ul>
                        <li>If not found in regression use CPO.</li>
                    </ul>
                    <li><strong>Business Address</strong></li>
                    <ul>
                        <li>Clients who are OFW (except seafarers) and home-based, company name should not be indicated in the office address field. Office address should be exactly the same as that of the residence address.</li>
                    </ul>
                    <li><strong>EMPLOYMENT INFORMATION</strong></li>
                    <ul>
                        <li>Proceed with the application regardless of type of employment and even if the client is not currently employed/self-employed (housewife, student, etc.).</li>
                    </ul>
                    <li><strong>COMPANY NAME</strong></li>
                    <ul>
                        <li>If in cases where the client has an agency name but is linked to a Primary/Deployed Company Name/Address,</li>
                        <ul>
                            <li>Indicate Agency name only in the Company Name Field in Regression (e.g Yondu Inc).</li>
                            <li>Indicate Deployed Company Name plus complete Business Address. (e.g Globe Telecom 2nd St cor 7th Ave The Globe Tower BGC Taguig).</li>
                        </ul>
                    </ul>
                    <li><strong>Other Discrepancies</strong></li>
                    <ul>
                        <li>For other discrepancies/special handling, send email to PL team for their approval.</li>
                    </ul>
                </ol>
            </div>



            <div className="navigation">
                <div className="prev" onClick={() => { nav('/personal-loan/documentation'); window.scrollTo(0, 0) }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (5)
                </div>

                <div className="next">
                    max 
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default PloanException
