import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../comp/Header'
import { dataSearch } from '../CampaignResources/SearchedObject'
import Footer from '../comp/Footer'
const SearchedItem = () => {
    const { id } = useParams()
    console.log(id)
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
    useEffect(() => {
        const filteredData = dataSearch.filter(item => item.title.toLowerCase().includes(id.toLowerCase()));
        SetFiltered(filteredData);
    }, [id,]);


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
                    {filteredObject.length != 0 ? (
                        <div className="resultText">
                            Results for "{id}"
                        </div>
                    ) : (
                        <div className="resultText">
                            no results found for "{id}"
                        </div>
                    )}
                    <div className="resultCon">

                        {filteredObject.length === 0 ? (
                            <div className="sorry">
                                <span><ion-icon name="search-outline"></ion-icon></span>
                                Sorry, there's no item found with your keyword. Try searching something different.
                            </div>
                        ) : (
                            filteredObject.map((itm) => (
                                <div key={itm.link} className="searchedTitle">
                                    <div className="Title">
                                        <span>{itm.headerTitle}</span> |  {itm.title}
                                    </div>
                                    <button onClick={() => {nav(itm.link)}}>
                                        NAVIGATE  <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </button>
                                </div>
                            ))
                        )}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SearchedItem
