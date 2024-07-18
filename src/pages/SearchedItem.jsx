import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../comp/Header'
import { dataSearch } from '../CampaignResources/SearchedObject'
import Footer from '../comp/Footer'
import { innerContent, CategoryOBJ } from '../comp/Category'
import { Link } from 'react-router-dom'

const SearchedItem = () => {
    const { id } = useParams()

    const nav = useNavigate()
    const [query, setQuery] = useState('')

    const submitQuery = (e) => {
        e.preventDefault()
        if (!query) {
            alert("Please type something")
        } else {
            nav(`/query/${query}`)
            setQuery('');
        }

    }
    const [filteredObject, SetFiltered] = useState([])
    const [innerContents, setInnerContent] = useState([])
    const [tabination, setTabination] = useState('content')



    const findSubCon = () => {
        const foundMatchForInnerCon = Array.isArray(innerContent) && innerContent.reduce((acc, itms) => {
            return acc.concat(itms.content.map(item => ({
                ...item,
                outerTitle: itms.title,
                Category: itms.Category,
                SemiCat: itms.SemiCat,
            })));
        }, []);
        const fitleredSubContent = foundMatchForInnerCon.filter(item => item.title.toLowerCase().includes(id.toLowerCase()));
        setInnerContent(fitleredSubContent)
        return foundMatchForInnerCon
    }
    useEffect(() => {
        const filteredData =
            dataSearch.filter(item => item.title.toLowerCase().includes(id.toLowerCase()))
        SetFiltered(filteredData);

        findSubCon()
    }, [id, query]);

    const [conFilter, setConFilter] = useState('')
    const [SubFilter, setSubFilter] = useState('')


    const [fitleredCon, SetFilteredCon] = useState([])
    const [SubCon, SetSubCon] = useState([])

    useEffect(() => {
        if (conFilter) {
            const filtered = dataSearch.filter(item => item.headerTitle === conFilter && item.title.toLowerCase().includes(id.toLowerCase()));
            SetFilteredCon(filtered);
        } else {
            SetFilteredCon(dataSearch.filter(item => item.title.toLowerCase().includes(id.toLowerCase())));
        }
    }, [conFilter, id]);



    const [CampaignTab, setCampaignTab] = useState("")
    const [searchedTab, setSearchedTab] = useState("")

    const [campaignSubCat, setCampainSubCat] = useState("")

    useEffect(() => {
        const lowerCaseId = id.toLowerCase();

        if (SubFilter) {

            const filtered = innerContents.filter(item =>
                item.title.toLowerCase().includes(lowerCaseId.toLowerCase()) && item.Category === SubFilter
            );

            SetSubCon(filtered);


            if (CampaignTab) {

                const filtered = innerContents.filter(item =>
                    item.title.toLowerCase().includes(lowerCaseId.toLowerCase())
                    && item.Category === SubFilter
                    && item.SemiCat === CampaignTab
                );

                SetSubCon(filtered);

                if (searchedTab && CampaignTab) {
                    const filtered = innerContents.filter(item =>
                        item.title.toLowerCase().includes(lowerCaseId.toLocaleLowerCase())
                        && item.Category === SubFilter
                        && item.SemiCat === CampaignTab
                        && item.outerTitle === searchedTab
                    );

                    SetSubCon(filtered);
                }
            }
        }
        else {
            SetSubCon(findSubCon());
        }
    }, [SubFilter, id, CampaignTab, searchedTab, SubCon]);

    return (
        <div className='SearchedItem closer' >
            <Header />
            <div className="Homepage">

                <div className="searchForm">
                    <form onSubmit={submitQuery} className="searchedComp">
                        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="What do you want to learn?" />
                        <button type="submit"><ion-icon name="arrow-forward-outline"></ion-icon></button>
                    </form>
                </div>
                <div className="result">
                    <div className="navi">
                        <div
                            onClick={() => { setTabination("content") }}
                            className={`naviItem ${tabination === "content" && 'activeTabination'}`}>
                            Content <span>({filteredObject.length})</span>
                        </div>
                        <div
                            onClick={() => { setTabination("sub") }}
                            className={`naviItem ${tabination === "sub" && 'activeTabination'}`}>
                            Sub-Content <span>({innerContents.length})</span>
                        </div>
                    </div>
                    {
                        tabination === 'content' ?
                            <>
                                {filteredObject.length != 0 ? (
                                    <div className="resultText">
                                        Results for "{id}"
                                    </div>
                                ) : (
                                    <div className="resultText">
                                        no results found for "{id}"
                                    </div>
                                )}
                            </>
                            :
                            <>
                                {innerContent.length != 0 ? (
                                    <div className="resultText">
                                        Results for "{id}"
                                    </div>
                                ) : (
                                    <div className="resultText">
                                        no results found for "{id}"
                                    </div>
                                )}
                            </>
                    }

                    {
                        tabination === 'content' ?
                            filteredObject.length != 0 &&
                            <div className="filter">
                                <select
                                    onChange={(e) => { setConFilter(e.target.value) }}
                                    value={conFilter}
                                >
                                    <option value="">Filter By:</option>
                                    <option value="Credit Card">Credit Card</option>
                                    <option value="Personal Loans">Personal Loans</option>
                                    <option value="SIP Loans">SIP Loans</option>
                                    <option value="Training">Training</option>
                                    <option value="Advisories">Advisories</option>
                                    <option value="">none</option>
                                </select>
                            </div>
                            :
                            <div className='filterRow'>
                                {
                                    innerContents.length != 0 &&
                                    <div className="filter">
                                        <select
                                            onChange={(e) => { setSubFilter(e.target.value) }}
                                            value={SubFilter}
                                        >
                                            <option value="">Filter By:</option>
                                            <option value="Advisories">Advisories</option>
                                            <option value="Campaign Guidelines">Campaign Guidelines</option>
                                            <option value="Training">Training</option>

                                            <option value="Our Customers">Our Customers</option>
                                            <option value="Performance">Performance</option>
                                            <option value="Team Updates">Team Updates</option>
                                            <option value="Sales Support Corner">Sales Support Corner</option>
                                            <option value="">none</option>
                                        </select>
                                    </div>
                                }
                                {
                                    SubFilter === 'Advisories' &&
                                    <div className="filter">
                                        <select>
                                            <option value="">Select Sub-Category:</option>
                                            <option value="Credit Cards">Credit Cards</option>
                                            <option value="Personal Loans">Personal Loans</option>
                                            <option value="SIP Loans">SIP Loans</option>
                                        </select>
                                    </div>
                                }
                                {
                                    SubFilter === 'Campaign Guidelines' &&
                                    <div className="filter">
                                        <select
                                            onChange={(e) => { setCampaignTab(e.target.value) }}
                                            value={CampaignTab}
                                        >
                                            <option value="">Select Sub-Category:</option>
                                            <option value="Credit Cards">Credit Cards</option>
                                            <option value="Personal Loans">Personal Loans</option>
                                            <option value="SIP Loans">SIP Loans</option>
                                        </select>
                                    </div>
                                }
                                {
                                    CampaignTab === 'Credit Cards' && SubFilter === 'Campaign Guidelines' &&
                                    <div className="filter">
                                        <select
                                            onChange={(e) => { setSearchedTab(e.target.value) }}
                                            value={searchedTab}
                                        >
                                            <option value="">Select Sub-Category:</option>
                                            <option value="Filtering of Leads">Filtering of Leads</option>
                                            <option value="Call Flow And Spiels">Call Flow And Spiels</option>
                                            <option value="Documentation">Documentation</option>
                                            <option value="Exception of Handling">Exception of Handling</option>
                                        </select>
                                    </div>
                                }
                                {
                                    CampaignTab === 'Personal Loans' && SubFilter === 'Campaign Guidelines' &&
                                    <div className="filter">
                                        <select
                                            onChange={(e) => { setSearchedTab(e.target.value) }}
                                            value={searchedTab}
                                        >
                                            <option value="">Select Sub-Category:</option>
                                            <option value="Filtering of Leads">Filtering of Leads</option>
                                            <option value="Call Flow And Spiels">Call Flow And Spiels</option>
                                            <option value="Other Guidelines for DocuSign">Other Guidelines for DocuSign</option>
                                            <option value="Documentation">Documentation</option>
                                            <option value="Exception of Handling">Exception of Handling</option>
                                        </select>
                                    </div>
                                }
                                {
                                    CampaignTab === 'SIP Loans' && SubFilter === 'Campaign Guidelines' &&
                                    <div className="filter">
                                        <select
                                            onChange={(e) => { setSearchedTab(e.target.value) }}
                                            value={searchedTab}
                                        >
                                            <option value="">Select Sub-Category:</option>
                                            <option value="Filtering of Leads">Filtering of Leads</option>
                                            <option value="Documentation">Documentation</option>
                                            <option value="Exception of Handling">Exception of Handling</option>
                                        </select>
                                    </div>
                                }
                                {
                                    SubFilter === 'Training' &&
                                    <div className="filter">
                                        <select
                                            onChange={(e) => { setCampaignTab(e.target.value) }}
                                            value={CampaignTab}
                                        >
                                            <option value="">Select Sub-Category:</option>
                                            <option value="Supported Products">Supported Products</option>
                                            <option value="Credit Cards">Credit Cards</option>
                                            <option value="SIP Loans">SIP Loans</option>

                                            <option value="Personal Loan">Personal Loan</option>
                                            <option value="Deposit Products">Deposit Products</option>
                                            <option value="Other Bank Products">Other Bank Products</option>
                                            <option value="Handling Objections">Handling Objections</option>
                                            <option value="Sales Tips for the Month">Sales Tips for the Month</option>
                                            <option value="FAQS">FAQS</option>
                                        </select>
                                    </div>
                                }
                                {
                                    SubFilter === 'Our Customers' &&
                                    <div className="filter">
                                        <select
                                            onChange={(e) => { setCampaignTab(e.target.value) }}
                                            value={CampaignTab}
                                        >
                                            <option value="">Select Sub-Category:</option>
                                            <option value="Different Personas">Different Personas</option>
                                            <option value="Competitor Analysis">Competitor Analysis</option>
                                            <option value="SIP Loans">SIP Loans</option>
                                            <option value="Competitor Products">Competitor Products</option>
                                            <option value="Key Differentiators">Key Differentiator</option>
                                        </select>
                                    </div>
                                }
                                {
                                    SubFilter === 'Performance' &&
                                    <div className="filter">
                                        <select
                                            onChange={(e) => { setCampaignTab(e.target.value) }}
                                            value={CampaignTab}
                                        >
                                            <option value="">Select Sub-Category:</option>
                                            <option value="Sales Reports">Sales Reports</option>
                                            <option value="MIS">MIS</option>
                                            <option value="Quality Monitoring Corner">Quality Monitoring Corner</option>
                                            <option value="QM Guidelines">QM Guidelines</option>
                                            <option value="Top QM Performers">Key Differentiator</option>
                                            <option value="QM Grades">QM Grades</option>
                                            <option value="Commendations">Commendations</option>
                                        </select>
                                    </div>
                                }
                                {
                                    SubFilter === 'Team Updates' &&
                                    <div className="filter">
                                        <select
                                            onChange={(e) => { setCampaignTab(e.target.value) }}
                                            value={CampaignTab}
                                        >
                                            <option value="">Select Sub-Category:</option>
                                            <option value="Table of Organization">Table of Organization</option>
                                            <option value="Top Performers">Top Performers</option>
                                        </select>
                                    </div>
                                }
                                {
                                    SubFilter === 'Sales Support Corner' &&
                                    <div className="filter">
                                        <select
                                            onChange={(e) => { setCampaignTab(e.target.value) }}
                                            value={CampaignTab}
                                        >
                                            <option value="">Select Sub-Category:</option>
                                            <option value="Announcements">Announcements</option>
                                            <option value="Transmital and Assignment Process">Transmital and Assignment Process</option>
                                            <option value="Validation Process">Validation Process</option>
                                            <option value="Guide to Handling Verifs">Guide to Handling Verifs</option>
                                            <option value="Guide to Handling Deficiencies">Guide to Handling Deficiencies</option>
                                        </select>
                                    </div>
                                }

                            </div>
                    }
                    <div className="resultCon">

                        {
                            tabination === "content" ?
                                <>
                                    {filteredObject.length === 0 ? (
                                        <div className="sorry">
                                            <span><ion-icon name="search-outline"></ion-icon></span>
                                            Sorry, there's no item found with your keyword. Try searching something different.
                                        </div>
                                    ) : (
                                        <>
                                            {fitleredCon.length === 0 && `no results for ${conFilter}`}
                                            {
                                                fitleredCon.map((itm, index) => (
                                                    <div
                                                        key={index} className="searchedTitle">
                                                        <div className="Title">
                                                            <span>{itm.headerTitle}</span> |  {itm.title}
                                                        </div>
                                                        <button onClick={() => { nav(itm.link); window.scrollTo(0, 0) }}>
                                                            NAVIGATE  <ion-icon name="arrow-forward-outline"></ion-icon>
                                                        </button>
                                                    </div>
                                                ))
                                            }
                                        </>
                                    )}
                                </> :
                                <>
                                    {innerContents.length === 0 ? (
                                        <div className="sorry">
                                            <span><ion-icon name="search-outline"></ion-icon></span>
                                            Sorry, there's no item found with your keyword. Try searching something different.
                                        </div>
                                    ) : (
                                        <>
                                            {SubCon.length === 0 && `no results for ${SubFilter}`}

                                            {
                                                SubFilter ?
                                                    <>
                                                        {SubCon.map((itm, index) => (
                                                            <div
                                                                key={index} className="searchedTitle innertConSearched">
                                                                <div className="Title">
                                                                    <h3>
                                                                        {itm.title}
                                                                    </h3>
                                                                    <div className="line"></div>
                                                                    <span>{itm.Category} | ({itm.SemiCat})</span>
                                                                </div>
                                                                <Link
                                                                    to={`${itm.link}`}
                                                                    state={{ headerTitle: itm.title }}

                                                                >

                                                                    NAVIGATE  <ion-icon name="arrow-forward-outline"></ion-icon>
                                                                </Link>
                                                            </div>
                                                        ))}
                                                    </>
                                                    :
                                                    <>
                                                        {innerContents.map((itm, index) => (
                                                            <div
                                                                key={index} className="searchedTitle innertConSearched">
                                                                <div className="Title">
                                                                    <h3>
                                                                        {itm.title}
                                                                    </h3>
                                                                    <div className="line"></div>
                                                                    <span>{itm.Category} | ({itm.SemiCat})</span>
                                                                </div>
                                                                <Link
                                                                    to={`${itm.link}`}
                                                                    state={{ headerTitle: itm.title }}

                                                                >

                                                                    NAVIGATE  <ion-icon name="arrow-forward-outline"></ion-icon>
                                                                </Link>
                                                            </div>
                                                        ))}
                                                    </>
                                            }

                                        </>
                                    )}
                                </>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SearchedItem
