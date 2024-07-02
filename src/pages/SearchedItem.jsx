import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../comp/Header'
import { dataSearch } from '../CampaignResources/SearchedObject'
import Footer from '../comp/Footer'
import { innerContent, CategoryOBJ} from '../comp/Category'

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


    useEffect(() => {
        const filteredData =
            dataSearch.filter(item => item.title.toLowerCase().includes(id.toLowerCase()))
        SetFiltered(filteredData);
        const foundMatchForInnerCon = Array.isArray(innerContent) && innerContent.reduce((acc, itms) => {
            return acc.concat(itms.content.map(item => ({
                ...item,
                outerTitle: itms.title,
                Category: itms.Category,
            })));
        }, []);
        const fitleredSubContent = foundMatchForInnerCon.filter(item => item.title.toLowerCase().includes(id.toLowerCase()));
        setInnerContent(fitleredSubContent)
    }, [id, query,]);

    const [conFilter, setConFilter] = useState('')
    const [SubFilter, setSubFilter] = useState('')



    useEffect(() => {
  
        if (conFilter || SubFilter) {
            const filtered = dataSearch.filter((itm) => itm.title === conFilter)
            console.log(filtered)
        }

    }, [conFilter, SubFilter, dataSearch])

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
                            <div className="filter">
                                <select
                                    onChange={(e) => { setConFilter(e.target.value) }}
                                    value={conFilter}
                                >
                                    <option>Filter By:</option>
                                    <option value="Advisories">Advisories</option>
                                    <option value="Campaign Guidelines">Campaign Guidelines</option>
                                    <option value="Our Customer">Our Customer</option>
                                    <option value="Performance">Performance</option>
                                    <option value="Team Updates">Team Updates</option>
                                    <option value="Sales Support Corner">Sales Support Corner</option>
                                    <option value="Advisories">Training</option>
                                    <option value="">none</option>
                                </select>
                            </div>
                            :
                            <div className="filter">
                                <select
                                    onChange={(e) => { setSubFilter(e.target.value) }}
                                    value={SubFilter}
                                >
                                    <option>Filter By:</option>
                                    <option value="Advisories">Advisories</option>
                                    <option value="Campaign Guidelines">Campaign Guidelines</option>
                                    <option value="Our Customer">Our Customer</option>
                                    <option value="Performance">Performance</option>
                                    <option value="Team Updates">Team Updates</option>
                                    <option value="Sales Support Corner">Sales Support Corner</option>
                                    <option value="Advisories">Training</option>
                                    <option value="">none</option>
                                </select>
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
                                        filteredObject.map((itm, index) => (
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
                                    )}
                                </> :
                                <>
                                    {innerContents.length === 0 ? (
                                        <div className="sorry">
                                            <span><ion-icon name="search-outline"></ion-icon></span>
                                            Sorry, there's no item found with your keyword. Try searching something different.
                                        </div>
                                    ) : (
                                        innerContents.map((itm, index) => (
                                            <div
                                                key={index} className="searchedTitle innertConSearched">
                                                <div className="Title">
                                                    <h3>
                                                        {itm.title}
                                                    </h3>
                                                    <div className="line"></div>
                                                    <span>{itm.Category} | ({itm.outerTitle})</span>
                                                </div>
                                                <button onClick={() => { nav(itm.link); window.scrollTo(0, 0) }}>
                                                    NAVIGATE  <ion-icon name="arrow-forward-outline"></ion-icon>
                                                </button>
                                            </div>
                                        ))
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
