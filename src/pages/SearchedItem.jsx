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
                SemiCat: itms.SemiCat
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



    useEffect(() => {
        if (SubFilter) {
            const lowerCaseId = id.toLowerCase();
            const filtered = innerContents.filter(item =>
                item.outerTitle.toLowerCase().includes(lowerCaseId) && item.outerTitle === SubFilter
            );
            console.log(filtered)
            SetSubCon(filtered);
        } else {
            SetSubCon(findSubCon());
        }
    }, [SubFilter, id]);

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
                                    <option>Filter By:</option>
                                    <option value="Credit Card">Credit Card</option>
                                    <option value="Personal Loans">Personal Loans</option>
                                    <option value="SIP Loans">SIP Loans</option>
                                    <option value="Training">Training</option>
                                    <option value="Advisories">Advisories</option>
                                    <option value="">none</option>
                                </select>
                            </div>
                            :
                            <>
                                {
                                    innerContents.length != 0 &&
                                    <div className="filter">
                                        <select
                                            onChange={(e) => { setSubFilter(e.target.value) }}
                                            value={SubFilter}
                                        >
                                            <option value="">Filter By:</option>
                                            <option value="Filtering Of Leads">Filtering Of Leads</option>
                                            <option value="Call Flow And Spiels">Call Flow And Spiels</option>
                                            <option value="SIP Loans">SIP Loans</option>
                                            <option value="">none</option>
                                        </select>
                                    </div>
                                }
                            </>
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
                                                     to= {`${itm.link}`}
                                                    state={{headerTitle: itm.title}}

                                                    >

                                                        NAVIGATE  <ion-icon name="arrow-forward-outline"></ion-icon>
                                                    </Link>
                                                    {/* <button onClick={() => { nav(itm.link); window.scrollTo(0, 0) }}>
                                                        NAVIGATE  <ion-icon name="arrow-forward-outline"></ion-icon>
                                                    </button> */}
                                                </div>
                                            ))}
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
