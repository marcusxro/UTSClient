import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'

const Exception = () => {
    const nav = useNavigate()
    return (
        <div className='CampaignPage closer'>
            <Header />
            <div className="pageTitle">
            </div>
            <div className="Homepage">
            <div className='titleForPage'>EXCEPTION HANDLING</div>
                <div className="margLeft">
                <article>
                    <h2>Mother’s Maiden Name Discrepancy</h2>
                    <ol>
                        <li>
                            <section>
                                <table border={1}>
                                    <thead>
                                        <tr>
                                            <th>Scenario</th>
                                            <th>Handling</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Misspelled mother's maiden name. Per client correct MMN is SHEILA PARUNGO but in records SHIELA PARUNGAO</td>
                                            <td>OK to proceed as long as client answered 2 other PID questions</td>
                                        </tr>
                                        <tr>
                                            <td>Interchanged mother's maiden name. Per client correct MMN is SHEILA PARUNGO but in records PARUNGO SHEILA</td>
                                            <td>As long as the complete MMN on record was mentioned, it is already acceptable.</td>
                                        </tr>
                                        <tr>
                                            <td>TSA to probe on the correct MMN Format.</td>
                                            <td>Note: If confirmed MMN is for updating, indicate correct MMN in regression and advise client to visit the branch whenever convenient for him/her to update his/her record.</td>
                                        </tr>
                                        <tr>
                                            <td>Incomplete mother's maiden name - only last name is indicated in the records: PARUNGO</td>
                                            <td>OK to proceed as long as client answered 2 other PID questions</td>
                                        </tr>
                                        <tr>
                                            <td>Shortened Mother's Maiden - Mother's Maiden Name is cut, or Vowels dropped in the records</td>
                                            <td>OK to proceed as long as client answered 2 other PID questions</td>
                                        </tr>
                                        <tr>
                                            <td>Indicated in mother's maiden name is mother's married name</td>
                                            <td>As long as the complete MMN on record was mentioned, it is already acceptable.</td>
                                        </tr>
                                        <tr>
                                            <td>TSA to probe on the correct MMN.</td>
                                            <td>Note: If confirmed MMN is for updating, indicate correct MMN in regression and advise client to visit the branch whenever convenient for him/her to update his/her record.</td>
                                        </tr>
                                        <tr>
                                            <td>"Totally different mother's maiden name Per client: STELLA PEREZ Per record: SHEILA PARUNGO "</td>
                                            <td>For branch confirmation, even if client answered 2 other PID questions</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </section>
                        </li>
                        <li>
                            <section>
                                <h2>Name Discrepancy</h2>
                                <table border={1}>
                                    <thead>
                                        <tr>
                                            <th>Scenario</th>
                                            <th>Handling</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>RM Record: Maiden Name Per client: Married already</td>
                                            <td>If no RM record under married name, but with FIAS account under married name (linked to said RM), ok to proceed with application. Make sure though to advise client to visit branch of account (BOA) to request for updating of records. RM Record: GERALDINE BALDISIMO SABOLBORA (Maiden) Per client: GERALDINE S ASIGNACION (Married)</td>
                                        </tr>
                                        <tr>
                                            <td>&emsp;TSA will Log the SR application under same RM (Maiden)</td>
                                            <td>&emsp;RM Name is not yet updated but with existing RM Linked Deposit account under Married Name - OK to proceed with the application</td>
                                        </tr>
                                        <tr>
                                            <td>&emsp;Give instruction to visit the branch for updating of records.</td>
                                            <td>&emsp;CCFES Template Encoding: PCIC Name: GERALDINE BALDISIMO SABOLBORA (Maiden Name) Embossing Name: GERALDINE S ASIGNACION (Married Name)</td>
                                        </tr>
                                        <tr>
                                            <td>&emsp;If no account and RM record under married name, confirm with client if with ID under maiden name to facilitate the application. Remind also client replacement fee once she updates her records.</td>
                                            <td>&emsp;Please be reminded that courier will ask for valid IDs that will match name in delivery receipt (PCIC/PCIL name).</td>
                                        </tr>
                                        <tr>
                                            <td>Middle Name/Initial</td>
                                            <td>RM Name: Name with no middle initial Per client: With middle initial/name Log application under same RM, indicate name with middle initial in Embossing name</td>
                                        </tr>
                                        <tr>
                                            <td>&emsp;RM Name: Name with middle initial Per client: No initial/name Email branch for confirmation.</td>
                                            <td>Incorrect Spelling (First, Middle, Last Name) Correct Name: Don Christian R. Aquino Name in RM Record: Dan Christian R. Aquino</td>
                                        </tr>
                                        <tr>
                                            <td>&emsp;Log application under same RM Email branch for confirmation Create an application SR once details are confirmed by the branch</td>
                                            <td>Interchanged name (First, Middle, Last, or suffix) Correct Name: Dan Christian R. Aquino Name in RM Record: Christian Dan R. Aquino</td>
                                        </tr>
                                        <tr>
                                            <td>&emsp;Log application under same RM Email branch for confirmation Create an application SR once details are confirmed by the branch</td>
                                            <td>Incomplete name Correct Name: Dan Christian Delos Reyes Aquino Name in RM Record: Christian Dan Delo Aquino</td>
                                        </tr>
                                        <tr>
                                            <td>&emsp;Log application under same RM Email branch for confirmation Create an application SR once details are confirmed by the branch</td>
                                            <td>Name in Masterfile is same with RM record, has no suffix but as confirmation by client it should have a suffix (No other RM record) Email branch for confirmation. If as per branch, no suffix indicated in the signature card. Make sure to advise client to visit branch of account (BOA) to request for updating of records</td>
                                        </tr>
                                    </tbody>
                                </table>


                            </section>
                        </li>
                    </ol>
                </article>

                <section>
                    <h2>RM Number Discrepancy</h2>
                    <article>
                        <h3>Scenario 1:</h3>
                        <p>RM number in database is under Maiden Name but client is already married and already has an RM number under married name.</p>
                        <h4>Illustration:</h4>
                        <ul>
                            <li>Database: GERALDINE BALDISIMO SABOLBORA (Maiden)</li>
                            <li>Per client: GERALDINE S ASIGNACION (Married)</li>
                            <li>RM: GERALDINE S ASIGNACION (Married)</li>
                        </ul>
                        <h4>Handling:</h4>
                        <ul>
                            <li>OK to proceed with the application</li>
                            <li>Log the application under RM record under married name but the RM number to be indicated in the application should be that of the RM number under maiden name.</li>
                            <li>Details in RM record under maiden name should match with the married name RM such as birthdate, number, etc.</li>
                        </ul>
                    </article>
                    <article>
                        <h3>Scenario 2:</h3>
                        <p>RM number in database is not found in Sugar/Salesforce but client has an RM Record under correct name.</p>
                        <h4>Illustration:</h4>
                        <ul>
                            <li>Name of Loan Account Holder: RYN MAGNAYE GRAY</li>
                            <li>RM in Database: 00000025990007 (RM not found in Sugar/Salesforce)</li>
                            <li>RM Record: 00000013381581 (RM under RYN MAGNAYE GRAY)</li>
                        </ul>
                        <h4>Handling:</h4>
                        <ul>
                            <li>OK to proceed with the application</li>
                            <li>Log the application under Client's RM record but the RM number to be indicated in the application should be that of the RM number in Masterfile (ITA for Loans)</li>
                            <li>Details in ITA for Loan Database should match with RM details found in Sugar/Salesforce such as birthdate, number, etc.</li>
                            <li>Note: Proper PID should be done to establish identity of client.</li>
                        </ul>
                    </article>
                    <p>Note: Proper PID should be done to establish identity of client.</p>
                </section>

                <section>
                    <h2>Other RM Discrepancies</h2>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>DISCREPANCY</th>
                                <th>HANDLING</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MARITAL STATUS</td>
                                <td>RM Status: Married; Per client: Separated already - Use Separated status in Regression Template</td>
                            </tr>
                            <tr>
                                <td>GENDER DISCREPANCY</td>
                                <td>If different gender in the RM record, email to branch for confirmation, even if the client answered 2 other PID questions</td>
                            </tr>
                            <tr>
                                <td>BIRTHDATE DISCREPANCY</td>
                                <td>If incorrect birthdate, email to branch for confirmation, even if the client answered 2 other PID questions</td>
                            </tr>
                            <tr>
                                <td>NAME DISCREPANCY</td>
                                <td>If with RM linked deposit account reflecting the correct name, OK to proceed. Otherwise, email branch for confirmation/advise client to visit the branch to update information.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <h2>Other Discrepancies</h2>
                    <p>For other discrepancies not indicated/specified, please ask for approval.</p>
                </section>

                <section>
                    <h2>TIN/SSS Number</h2>
                    <article>
                        <h3>For TIN:</h3>
                        <ul>
                            <li>If employed, TIN or SSS number is required.</li>
                            <li>If Passive income earner/Self-employed/OFW, and client does not have TIN or SSS number, or can no longer recall/retrieve, ok to proceed with the application.</li>
                        </ul>
                        <h3>For SSS Number:</h3>
                        <ul>
                            <li>UMID can be replace SSS number.</li>
                            <li>If client has no TIN number, indicate "0".</li>
                        </ul>
                        <p>TIN/SSS number (and/or lack thereof):</p>
                        <ul>
                            <li>Can be confirmed outright (after passing PID) refer to RM record and ALFES.</li>
                            <li>If in CCFES, do probing if indicated in previous application.</li>
                            <li>If it can no longer be retrieved and source of income is ‘Unemployed’, okay to proceed with the application.</li>
                            <li>If client is employed, TIN/SSS number is required.</li>
                        </ul>
                    </article>
                </section>

                <section>
                    <h2>Zip Code</h2>
                    <article>
                        <h3>In case ZIP code field drop down in regression is incomplete/not found:</h3>
                        <ul>
                            <li>Use the zip code within the same City/Town/Province (Nearest Town/City Province).</li>
                            <li>Use CPO (TSA may use the ZIP Code Database / Knowledge Database as reference).</li>
                        </ul>
                        <h3>In case ZIP code field drop down in regression is incomplete/not found:</h3>
                        <ul>
                            <li>Please use New Zip Code Format: &lt;City name/Town/Province, ZIP code&gt;, and indicate the correct zip code.</li>
                            <li>Use the zip code within the same City/Town/Province (Nearest Town/City Province).</li>
                            <li>Use CPO (TSA may use the ZIP code database / Knowledge database as reference).</li>
                        </ul>
                    </article>
                </section>

                <section>
                    <h2>E-mail Address</h2>
                    <p>Maximum of 30 alphanumeric characters.</p>
                    <p>Validation value is &lt;value1&gt;@&lt;value2&gt;.com.</p>
                    <p>Only underscore (_) and period are allowed in the value 1 field.</p>
                    <p>Only email address with ".com" and “. com.ph" will be accepted.</p>
                    <p>If with special characters, long email address, or not ".com", please indicate email address in the Application SR Notes.</p>
                    <p>Note: As an interim, leave the email address field blank if the given email does not conform with the regression template requirements to avoid rejects in processing. Send an amendment request to update client's email address once card is created.</p>
                </section>

                <section>
                    <h2>Employment Information</h2>
                    <p>Years with Present Employer/Business: (Indicate '0' for tenure with less than 1 year)</p>
                </section>

                <section>
                    <h2>Business Address</h2>
                    <p>For clients who are OFW (except seafarers) and home-based/freelance:</p>
                    <ul>
                        <li>Company name should not be indicated in the office address field. Office address should be exactly the same as that of the residence address.</li>
                    </ul>
                    <p>For clients who are employed, business name and office address is mandatory. Same handling for temporary WFH set up applies, otherwise follow handling for home-based.</p>
                </section>

                <section>
                    <h2>Company Name</h2>
                    <p>If client is employed under an agency, but is linked to a Primary/Deployed Company:</p>
                    <ul>
                        <li>Indicate Agency name only in the Company Name field (e.g. Yondu Inc.).</li>
                        <li>Indicate Deployed Company Name plus complete Business Address in the Company Address field (e.g. Globe Telecom 2nd St cor. 7th Ave The Globe Tower BGC, Taguig).</li>
                    </ul>
                </section>

                <section>
                    <h2>Billing Address</h2>
                    <p>OCT (Out of Courier Territory)</p>
                    <ul>
                        <li>If OCT: Indicate name of c/o person in the billing address. Inform client that he/she may request COA once card is received for the delivery of SOA. If no alternative address, should not push through with the application.</li>
                    </ul>
                    <p>No house number</p>
                    <ul>
                        <li>If client has confirmed that address provided is correct and complete: Always ask for landmark, especially if address is not complete based on standard address guide. Indicate the landmark in the address field if characters can still fit on the fields. If not, always indicate the landmark in the application SR notes.</li>
                    </ul>
                    <p>Guidelines on address format:</p>

                    <h2>Address Formats</h2>
                <ol>
                    <li>
                    <section>
                        <article>
                            <h3>FORMAT 1 (residential house):</h3>
                            <ul>
                                <li>Address Line 1 (30 characters max): house no., street/road/avenue, subd/village/compound</li>
                                <li>Address Line 2 (30 characters max): village/town/district/barangay</li>
                                <li>Address Line 3 (28 characters max): ZIP code, city name</li>
                            </ul>
                            <h3>FORMAT 2 (apartment/condo):</h3>
                            <ul>
                                <li>Address Line 1 (30 characters max): Apartment Number, Floor Number, Name of Building, Street Number and Street Name</li>
                                <li>Address Line 2 (30 characters max): village/town/district/barangay</li>
                                <li>Address Line 3 (28 characters max): ZIP code, city name</li>
                            </ul>
                            <h3>FORMAT 3 (company):</h3>
                            <ul>
                                <li>Address Line 1 (30 characters max): Company Name, Floor Number, Name of Building, Street Number and Street Name</li>
                                <li>Address Line 2 (30 characters max): village/town/district/barangay</li>
                                <li>Address Line 3 (28 characters max): ZIP code, city name</li>
                            </ul>
                            <h3>FORMAT 4 (provincial): Indicate landmark if it can fit regression characters</h3>
                            <ul>
                                <li>Address Line 1 (30 characters max): Landmark, zone no./compound</li>
                                <li>Address Line 2 (30 characters max): village/town/district/barangay</li>
                                <li>Address Line 3 (28 characters max): ZIP code, city name</li>
                            </ul>
                        </article>
                    </section>
                    </li>
                </ol>

                </section>
                </div>

            </div>


            <div className="navigation">
                <div className="prev" onClick={() => { nav('/campaign/documentation'); window.scrollTo(0, 0) }}>
                    <ion-icon name="arrow-back-outline"></ion-icon> Prev
                </div>

                <div className="pageNum">
                    Page (4)
                </div>

                <div className="next">
                    end
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Exception
