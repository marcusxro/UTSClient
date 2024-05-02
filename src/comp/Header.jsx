import React, { useEffect, useState } from 'react'
import 'react-dropdown/style.css';
import { useDropdown } from './Advisories';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isSelected, setSelected] = useState("")
    const nav = useNavigate()

    const optionsForAdvisories = [
        { title: 'New campaigns', links: ['/'] },
        { title: 'Promos', links: ['/'] },
        { title: 'New guidelines', links: ['/'] },
    ]

    const optionsForCampaign = [
        {
            title: 'Credit Cards',
            links: ['/filtering-of-leads'],
            content: [
                { title: '1. Filtering of Leads', links: ['/campaign/filtering-of-leads'] },
                { title: '2. Call flow and Spiels', links: ['/campaign/call-flow-and-spiels'] },
                { title: '3. Documentation', links: ['/campaign/documentation'] },
                { title: '4. Exception Handling', links: ['/campaign/exception-handling'] }
            ]
        },
        {
            title: 'Personal Loans',
            links: ['/filtering-of-leads'],
            content: [
                { title: '1. Filtering of Leads', links: ['/personal-loan/filtering-of-leads'] },
                { title: '2. Call flow and Spiels', links: ['/personal-loan/call-flow-and-spiels'] },
                { title: '3. Other Guidelines for DocuSign', links: ['/personal-loan/other-guidlines-for-docusign'] },
                { title: '4. documentation', links: ['/personal-loan/documentation'] },
                { title: '5. Exception Handling', links: ['/personal-loan/exception-handling'] }
            ]
        },

        {
            title: 'SIP Loans',
            links: ['/filtering-of-leads'],
            content: [
                { title: '1. Filtering of Leads', links: ['/SIP-loan/filtering-of-leads'] },
                { title: '2. Documentation', links: ['/SIP-loan/documentation'] },
                { title: '3. Exception Handling', links: ['/SIP-loan/exception-handling'] }
            ]
        },

    ]
    const optionForTraining = [
        { title: 'Supported Products', links: ['/'] },
        { title: 'Credit Cards', links: ['/'] },
        { title: 'SIP Loans', links: ['/'] },
        { title: 'Personal Loan', links: ['/'] },
        { title: 'Deposit Products', links: ['/'] },
        { title: 'Other Bank Products', links: ['/'] },
        { title: 'Handling Objections', links: ['/'] },
        { title: 'Sales Tips for the Month', links: ['/'] },
        { title: 'FAQS', links: ['/faqs'] },
    ]

    const optionForCustomers = [
        { title: 'Different Personas', links: ['/'] },
        { title: 'Competitor Analysis', links: ['/-'] },
        { title: 'Competitor Products', links: ['/'] },
        { title: 'Key Differentiators', links: ['/'] },
    ]
    const optionForPerfomance = [
        { title: 'Sales Reports', links: ['/'] },
        { title: 'MIS', links: ['/'] },
        { title: 'Quality Monitoring Corner', links: ['/'] },
        { title: 'QM Guidelines', links: ['/'] },
        { title: 'Top QM Performers', links: ['/'] },
        { title: 'QM Grades', links: ['/'] },
        { title: 'Commendations', links: ['/'] },
    ]

    const optionForTeam = [
        { title: 'Table of Organization', links: ['/'] },
        { title: 'Top Performers', links: ['/'] },
    ]

    const optionForSales = [
        { title: 'Announcements', links: ['/'] },
        { title: 'Transmittal and Assignment Process', links: ['/'] },
        { title: 'Validation Process', links: ['/'] },
        { title: 'Guide to Handling Verifs', links: ['/'] },
        { title: 'Guide to Handling Deficiencies', links: ['/'] },

    ]
    const [isClose, setIsClose] = useState(false)

    const openModal = (text) => {
        if (isSelected === text && isClose) {
            setIsClose(false);
            setSelected(null);
        } else {
            setSelected(text);
            setIsClose(true);
        }
    };

    const handleClick = (event) => {
        event.stopPropagation();
    };

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [subCategoryPosition, setSubCategoryPosition] = useState({});
    const [isActive, setIsActive] = useState('')
    const handleCategoryClick = (title, event) => {
        const rect = event.target.getBoundingClientRect();
        const position = {
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width
        };
        setSubCategoryPosition(position);
        setSelectedCategory(selectedCategory === title ? null : title);
    };
    const renderMenu = () => {
        switch (isSelected) {
            case 'Advisories':
                return (
                    <div className="menuItem Advisories" onClick={handleClick}>
                        {optionsForAdvisories.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); window.scrollTo(0, 0) }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Campaign':
                return (
                    <div className="menuItem Campaign" onClick={handleClick}>
                        {optionsForCampaign.map((item) => (
                            <div key={item.title} className="categoryContainer">
                                <div className={`navigator`} onClick={(event) => { handleCategoryClick(item.title, event); setIsActive(item.title) }}>
                                    <div className={`naviTitle ${item.title === isActive && 'activated'}`}>
                                        {item.title}
                                    </div>
                                </div>
                                {selectedCategory === item.title && (
                                    <div className="subContent" style={{ ...subCategoryPosition }}>
                                        {item.content.map((subItem) => (
                                            <div className="subItem" key={subItem.title} onClick={() => { nav(subItem.links.join('')); window.scrollTo(0, 0) }}>
                                                {subItem.title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );

            case 'Training':
                return (
                    <div className="menuItem Training" onClick={handleClick}>
                        {optionForTraining.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); window.scrollTo(0, 0) }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Customers':
                return (
                    <div className="menuItem Customers" onClick={handleClick}>
                        {optionForCustomers.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); window.scrollTo(0, 0) }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Performance':
                return (
                    <div className="menuItem Performance" onClick={handleClick}>
                        {optionForPerfomance.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); window.scrollTo(0, 0) }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Team':
                return (
                    <div className="menuItem Team" onClick={handleClick}>
                        {optionForTeam.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); window.scrollTo(0, 0) }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Sales':
                return (
                    <div className="menuItem Sales" onClick={handleClick}>
                        {optionForSales.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); window.scrollTo(0, 0) }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.absoMenu') && !event.target.closest('.absoMenuBtn')) {
                setIsClose(false);
                setSelected(null);
            }
        };

        const homepageContent = document.querySelector('.closer');

        // Add event listener when component mounts
        homepageContent.addEventListener('click', handleClickOutside);
        homepageContent.addEventListener('click', setIsActive(''));
        // Remove event listener when component unmounts
        return () => {
            homepageContent.removeEventListener('click', handleClickOutside);
        };
    }, []);




    const [isSearch, setSearch] = useState(false)


    const [isShow, setShow] = useState(false)

    const showMenu = () => {
        setSearch(false)
        setShow(true)
        gsap.to('.menuEl', {
            right: 0
        })
        if (isShow === true) {
            setShow(false)
            gsap.to('.menuEl', {
                right: "-300px"
            })
        }
    }
    useEffect(() => {
        if (isSearch) {
            setShow(false)
            gsap.to('.menuEl', {
                right: "-300px"
            })
        }
    }, [isSearch])


    const [query, setQuery] = useState('')

    const submitQuery = (e) => {
        e.preventDefault()
        if (!query) {
            alert("Please type something")
        } else {
            nav(`/query/${query}`)
            setQuery('')
            setSearch(false)
            window.scrollTo(0, 0)
        }

    }
    return (
        <header>
            <div className="firstLayer">
                <div className="logo" onClick={() => { nav('/'); window.scrollTo(0,0) }}>UTS.com</div>
                {isSearch === false ? (
                    <div className="dropdowns">
                        <button className='AdvisoriesBtn' onClick={() => { openModal("Advisories") }}>
                            <div className="DropText">Advisories <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Advisories" && (
                                <div className="absoMenu" onClick={() => { setIsClose(false); setSelected("Advisories") }}>
                                    {renderMenu()}
                                </div>
                            )}

                        </button>


                        <button className='CampaignBtn' onClick={() => { openModal("Campaign") }}>
                            <div className="DropText">Campaign Guidelines  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Campaign" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}

                        </button>

                        <button className='TrainingBtn' onClick={() => { openModal("Training") }}>
                            <div className="DropText">Training  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Training" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}

                        </button>

                        <button className='CustomersBtn' onClick={() => { openModal("Customers") }}>
                            <div className="DropText">Our Customers  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Customers" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}
                        </button>

                        <button className='PerformanceBtn' onClick={() => { openModal("Performance") }}>
                            <div className="DropText">Performance  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Performance" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}
                        </button>

                        <button className='TeamBtn' onClick={() => { openModal("Team") }}>
                            <div className="DropText">Team Updates  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Team" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}
                        </button>

                        <button className='SalesBtn' onClick={() => { openModal("Sales") }}>
                            <div className="DropText">Sales Support Corner  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Sales" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}
                        </button>

                    </div>
                ) : <></>}


                <div className="rightNav">
                    <div className="searchBar" onClick={() => { setSearch(!isSearch); }}>

                        {isSearch === true ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="search-outline"></ion-icon>}
                    </div>
                    <div className="Menu" onClick={() => { showMenu() }}>
                        {isShow === true ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="menu-outline"></ion-icon>}
                    </div>
                </div>

                <div className="menuEl">
                <button className='AdvisoriesBtn' onClick={() => { openModal("Advisories") }}>
                            <div className="DropText">Advisories <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Advisories" && (
                                <div className="absoMenu" onClick={() => { setIsClose(false); setSelected("Advisories") }}>
                                    {renderMenu()}
                                </div>
                            )}

                        </button>


                        <button className='CampaignBtn' onClick={() => { openModal("Campaign") }}>
                            <div className="DropText">Campaign Guidelines  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Campaign" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}

                        </button>

                        <button className='TrainingBtn' onClick={() => { openModal("Training") }}>
                            <div className="DropText">Training  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Training" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}

                        </button>

                        <button className='CustomersBtn' onClick={() => { openModal("Customers") }}>
                            <div className="DropText">Our Customers  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Customers" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}
                        </button>

                        <button className='PerformanceBtn' onClick={() => { openModal("Performance") }}>
                            <div className="DropText">Performance  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Performance" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}
                        </button>

                        <button className='TeamBtn' onClick={() => { openModal("Team") }}>
                            <div className="DropText">Team Updates  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Team" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}
                        </button>

                        <button className='SalesBtn' onClick={() => { openModal("Sales") }}>
                            <div className="DropText">Sales Support Corner  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Sales" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}
                        </button>
                </div>

            </div>
            {isSearch === true ? (
                <div className="secondLayer">
                    <div className="secondLayerText">
                        What would you like to learn today?
                    </div>
                    <div className="line"></div>
                    <form onSubmit={submitQuery} className="searchInput">
                        <input value={query} onChange={(e) => { setQuery(e.target.value) }} type="text" placeholder='What you want to find?' />
                        <button type='submit'><ion-icon name="arrow-forward-outline"></ion-icon></button>
                    </form>
                </div>
            ) : <></>}


        </header>
    )
}

export default Header
