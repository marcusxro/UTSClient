import React, { useEffect, useState } from 'react'
import 'react-dropdown/style.css';
import { useDropdown } from './Advisories';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isSelected, setSelected] = useState("")
    const nav = useNavigate()
    const optionsForAdvisories = [
        { title: 'New campaigns', links: ['/new-campaigns'] },
        { title: 'Promos', links: ['/promos'] },
        { title: 'New guidelines', links: ['/new-guidelines'] },
    ]

    const optionsForCampaign = [
        { title: 'Filtering of Leads', links: ['/filtering-of-leads'] },
        { title: 'Call Flow and Spiels', links: ['/call-flow-and-spiels'] },
        { title: 'Documentation', links: ['/documentation'] },
        { title: 'Exception Handling', links: ['/exception-handling'] },
        { title: 'add Sub', links: ['/exception-handling'] },
    ]
    const optionForTraining = [
        { title: 'Supported Products', links: ['/supported-products'] },
        { title: 'Credit Cards', links: ['/credit-cards'] },
        { title: 'SIP Loans', links: ['/sip-loans'] },
        { title: 'Personal Loan', links: ['/personal-loan'] },
        { title: 'Deposit Products', links: ['/deposit-products'] },
        { title: 'Other Bank Products', links: ['/other-bank-products'] },
        { title: 'Handling Objections', links: ['/handling-objections'] },
        { title: 'Sales Tips for the Month', links: ['/sales-tips'] },
        { title: 'FAQS', links: ['/faqs'] },
    ]

    const optionForCustomers = [
        { title: 'Different Personas', links: ['/different-personas'] },
        { title: 'Competitor Analysis', links: ['/competitor-analysis'] },
        { title: 'Competitor Products', links: ['/competitor-products'] },
        { title: 'Key Differentiators', links: ['/key-differentiators'] },
    ]
    const optionForPerfomance = [
        { title: 'Sales Reports', links: ['/sales-reports'] },
        { title: 'MIS', links: ['/mis'] },
        { title: 'Quality Monitoring Corner', links: ['/quality-monitoring'] },
        { title: 'QM Guidelines', links: ['/qm-guidelines'] },
        { title: 'Top QM Performers', links: ['/top-qm-performers'] },
        { title: 'QM Grades', links: ['/qm-grades'] },
        { title: 'Commendations', links: ['/commendations'] },
    ]

    const optionForTeam = [
        { title: 'Table of Organization', links: ['/table-of-organization'] },
        { title: 'Top Performers', links: ['/top-performers'] },
    ]

    const optionForSales = [
        { title: 'Announcements', links: ['/announcements'] },
        { title: 'Transmittal and Assignment Process', links: ['/transmittal-assignment'] },
        { title: 'Validation Process', links: ['/validation-process'] },
        { title: 'Guide to Handling Verifs', links: ['/handling-verifs'] },
        { title: 'Guide to Handling Deficiencies', links: ['/handling-deficiencies'] },

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
    const renderMenu = () => {
        switch (isSelected) {
            case 'Advisories':
                return (
                    <div className="menuItem Advisories" onClick={handleClick}>
                        {optionsForAdvisories.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Campaign':
                return (
                    <div className="menuItem Campaign" onClick={handleClick}>
                        {optionsForCampaign.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); }}>

                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Training':
                return (
                    <div className="menuItem Training" onClick={handleClick}>
                        {optionForTraining.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Customers':
                return (
                    <div className="menuItem Customers" onClick={handleClick}>
                        {optionForCustomers.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Performance':
                return (
                    <div className="menuItem Performance" onClick={handleClick}>
                        {optionForPerfomance.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Team':
                return (
                    <div className="menuItem Team" onClick={handleClick}>
                        {optionForTeam.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Sales':
                return (
                    <div className="menuItem Sales" onClick={handleClick}>
                        {optionForSales.map((item) => (
                            <div className="navigator" key={item.title} onClick={() => { nav(item.links.join('')); }}>
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

        const homepageContent = document.querySelector('.Homepage');

        // Add event listener when component mounts
        homepageContent.addEventListener('click', handleClickOutside);

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
        if(!query) {
            alert("Please type something")
        } else {
            nav(`/query/${query}`)
            setQuery('')
            setSearch(false)
        }

    }
    return (
        <header>
            <div className="firstLayer">
                <div className="logo" onClick={() => { nav('/') }}>UTS.com</div>

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
                            <div className="absoMenus">
                                {renderMenu()}
                            </div>
                        )}

                    </button>


                    <button className='CampaignBtn' onClick={() => { openModal("Campaign") }}>
                        <div className="DropText">Campaign Guidelines  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                        {isSelected === "Campaign" && (
                            <div className="absoMenus">
                                {renderMenu()}
                            </div>
                        )}

                    </button>

                    <button className='TrainingBtn' onClick={() => { openModal("Training") }}>
                        <div className="DropText">Training  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                        {isSelected === "Training" && (
                            <div className="absoMenus">
                                {renderMenu()}
                            </div>
                        )}

                    </button>

                    <button className='CustomersBtn' onClick={() => { openModal("Customers") }}>
                        <div className="DropText">Our Customers  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                        {isSelected === "Customers" && (
                            <div className="absoMenus">
                                {renderMenu()}
                            </div>
                        )}
                    </button>

                    <button className='PerformanceBtn' onClick={() => { openModal("Performance") }}>
                        <div className="DropText">Performance  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                        {isSelected === "Performance" && (
                            <div className="absoMenus">
                                {renderMenu()}
                            </div>
                        )}
                    </button>

                    <button className='TeamBtn' onClick={() => { openModal("Team") }}>
                        <div className="DropText">Team Updates  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                        {isSelected === "Team" && (
                            <div className="absoMenus">
                                {renderMenu()}
                            </div>
                        )}
                    </button>

                    <button className='SalesBtn' onClick={() => { openModal("Sales") }}>
                        <div className="DropText">Sales Support Corner  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                        {isSelected === "Sales" && (
                            <div className="absoMenus" >
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
