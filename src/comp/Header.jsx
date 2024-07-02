import React, { useEffect, useState } from 'react'
import 'react-dropdown/style.css';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import LogOut from './LogOut';
import { CategoryOBJ } from './Category';


const Header = () => {
    const [isSelected, setSelected] = useState("")
    const nav = useNavigate()


    const optionsForAdvisories = CategoryOBJ[0]?.subCater ? [
        {
            HaveContent: CategoryOBJ[0].HaveContent,
            content: CategoryOBJ[0].subCater.map((itm) => ({
                title: itm?.title,
                links: itm?.link,
                HaveContent: itm?.HaveContent
            }))
        }
    ] : [];

    const optionsForCampaign = [
        ...CategoryOBJ[1].subCater.map((itm) => ({
            title: itm.title,
            HaveContent: itm?.HaveContent,
            content: [
                itm.content.map((sub) => (
                    { title: sub.title, link: sub.link }
                ))
            ]
        }))
    ];



    const optionForTraining = CategoryOBJ[6]?.subCater ? [
        {
            HaveContent: CategoryOBJ[6].HaveContent,
            content: CategoryOBJ[6].subCater.map((itm) => ({
                title: itm?.title,
                links: itm?.link,
                HaveContent: itm?.HaveContent
            }))
        }
    ] : [];


    const optionForCustomers = CategoryOBJ[2]?.subCater ? [
        {
            HaveContent: CategoryOBJ[2].HaveContent,
            content: CategoryOBJ[2].subCater.map((itm) => ({
                title: itm?.title,
                links: itm?.link,
                HaveContent: itm?.HaveContent
            }))
        }
    ] : [];



    const optionForPerfomance = CategoryOBJ[3]?.subCater ? [
        {
            HaveContent: CategoryOBJ[3].HaveContent,
            content: CategoryOBJ[3].subCater.map((itm) => ({
                title: itm?.title,
                links: itm?.link,
                HaveContent: itm?.HaveContent
            }))
        }
    ] : [];


    const optionForTeam = CategoryOBJ[4]?.subCater ? [
        {
            HaveContent: CategoryOBJ[4].HaveContent,
            content: CategoryOBJ[4].subCater.map((itm) => ({
                title: itm?.title,
                links: itm?.link,
                HaveContent: itm?.HaveContent
            }))
        }
    ] : [];


    const optionForSales = CategoryOBJ[5]?.subCater ? [
        {
            HaveContent: CategoryOBJ[5].HaveContent,
            content: CategoryOBJ[5].subCater.map((itm) => ({
                title: itm?.title,
                links: itm?.link,
                HaveContent: itm?.HaveContent
            }))
        }
    ] : [];


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
        };
        setSubCategoryPosition(position);
        setSelectedCategory(selectedCategory === title ? null : title);
    };

    const renderMenu = () => {
        switch (isSelected) {
            case 'Advisories':
                return (
                    <div className="menuItem advisories" onClick={handleClick}>
                        {optionsForAdvisories[0]?.content.map((item, index) => (
                            <div className={`navigator ${optionsForAdvisories[0]?.content.link === "/under-development" ? "" : "noCon"}`}
                                key={index} onClick={() => { nav(item.links); window.scrollTo(0, 0) }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Campaign':
                return (
                    <div className="menuItem Campaign" onClick={handleClick}>
                        {optionsForCampaign.map((item, index) => (
                            <div key={index} className="categoryContainer">
                                <div className={`navigator`} onClick={(event) => { handleCategoryClick(item.title, event); setIsActive(item.title) }}>
                                    <div className={`naviTitle ${item.title === isActive && 'activated'}`}>
                                        {item.title}
                                    </div>
                                </div>
                                {selectedCategory === item.title && (
                                    <div className="subContent" style={{ subCategoryPosition }}>
                                        {item.content[0].map((subItem, idx) => (
                                            <div
                                             className="subItem" key={idx} onClick={() => { nav(subItem.link); window.scrollTo(0, 0) }}>
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
                        {optionForTraining[0]?.content.map((item, index) => (
                            <div key={index}
                             className={`navigator ${optionForTraining[0]?.content.link === "/under-development" ? "" : "noCon"}`}
                                onClick={() => { nav(item.links); window.scrollTo(0, 0) }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Customers':
                return (
                    <div className="menuItem Customers" onClick={handleClick}>
                        {optionForCustomers[0].content.map((item, index) => (
                            <div 
                            key={index}
                            className={`navigator ${optionForCustomers[0]?.content.link === "/under-development" ? "" : "noCon"}`}
                                onClick={() => { nav(item.links); window.scrollTo(0, 0) }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Performance':
                return (
                    <div className="menuItem Performance" onClick={handleClick}>
                        {optionForPerfomance[0].content.map((item, index) => (
                            <div
                            key={index}
                             className={`navigator ${optionForPerfomance[0]?.content.link === "/under-development" ? "" : "noCon"}`}
                                onClick={() => { nav(item.links); window.scrollTo(0, 0) }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Team':
                return (
                    <div className="menuItem Team" onClick={handleClick}>
                        {optionForTeam[0].content.map((item, index) => (
                            <div
                            key={index}
                             className={`navigator ${optionForTeam[0]?.content.link === "/under-development" ? "" : "noCon"}`}
                                onClick={() => { nav(item.links); window.scrollTo(0, 0) }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            case 'Sales':
                return (
                    <div className="menuItem Sales" onClick={handleClick}>
                        {optionForSales[0].content.map((item,index) => (
                            <div key={index}
                             className={`navigator ${optionForSales[0]?.content.link === "/under-development" ? "" : "noCon"}`}
                                onClick={() => { nav(item.links); window.scrollTo(0, 0) }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };


    // const renderMenus = () => {

    
    //     const getOptions = () => {
    //         switch (isSelected) {
    //             case 'Advisories':
    //                 return optionsForAdvisories[0];
    //             case 'Campaign':
    //                 return optionsForCampaign;
    //             case 'Training':
    //                 return optionForTraining[0];
    //             case 'Customers':
    //                 return optionForCustomers[0];
    //             case 'Performance':
    //                 return optionForPerfomance[0];
    //             case 'Team':
    //                 return optionForTeam[0];
    //             case 'Sales':
    //                 return optionForSales[0];
    //             default:
    //                 return null;
    //         }
    //     };
    //     const options = getOptions();

    //     console.log(options);
    
    //     if (isSelected !== "Campaign") {
    //         return (
    //             <div className="menuItem advisories" onClick={handleClick}>
    //                 {options?.content.map((item) => (
    //                     <div 
    //                         className={`navigator ${item.link === "/under-development" ? "" : "noCon"}`}
    //                         key={item.title}
    //                         onClick={() => { nav(item.link); window.scrollTo(0, 0); }}
    //                     >
    //                         {item.title}
    //                     </div>
    //                 ))}
    //             </div>
    //         );
    //     } else {
    //         return (
    //             <div className="menuItem Campaign" onClick={handleClick}>
    //                 {options.map((item) => (
    //                     <div key={item.title} className="categoryContainer">
    //                         <div 
    //                             className="navigator"
    //                             onClick={(event) => { handleCategoryClick(item.title, event); setIsActive(item.title); }}
    //                         >
    //                             <div className={`naviTitle ${item.title === isActive ? 'activated' : ''}`}>
    //                                 {item.title}
    //                             </div>
    //                         </div>
    //                         {selectedCategory === item.title && (
    //                             <div className="subContent subCategoryPosition">
    //                                 {item.content[0].map((subItem) => (
    //                                     <div 
    //                                         className="subItem" 
    //                                         key={subItem.title} 
    //                                         onClick={() => { nav(subItem.link); window.scrollTo(0, 0); }}
    //                                     >
    //                                         {subItem.title}
    //                                     </div>
    //                                 ))}
    //                             </div>
    //                         )}
    //                     </div>
    //                 ))}
    //             </div>
    //         );
    //     }
    // };
    


    // useEffect(() => {
    //     renderMenus()
    // }, [isSelected])

    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.absoMenu') && !event.target.closest('.absoMenuBtn')) {
                setIsClose(false);
                setSelected(null);
            }
        };

        const homepageContent = document.querySelector('.closer');

        homepageContent.addEventListener('click', handleClickOutside);
        homepageContent.addEventListener('click', setIsActive(''));
        homepageContent.addEventListener('click', setSelectedCategory(''));


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

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        setScrollPosition(scrollPercentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div className="firstLayer">
                <div className="logo" onClick={() => { nav('/Home'); window.scrollTo(0, 0) }}>UTS.com</div>
                {isSearch === false ? (
                    <div className="dropdowns">
                        <button className='AdvisoriesBtn' onClick={() => { openModal("Advisories") }}>
                            <div className={`DropText ${optionsForAdvisories[0]?.content.link === "/under-development" ? "" : "noContent"}`} >
                                Advisories <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Advisories" && (
                                <div className="absoMenu" onClick={() => { setIsClose(false); setSelected("Advisories") }}>
                                    {renderMenu()}
                                </div>
                            )}

                        </button>


                        <button className='CampaignBtn' onClick={() => { openModal("Campaign") }}>
                            <div className="DropText">
                                Campaign Guidelines  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Campaign" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}

                        </button>

                        <button className='TrainingBtn' onClick={() => { openModal("Training") }}>
                            <div className={`DropText ${optionForTraining[0]?.content.link === "/under-development" ? "" : "noContent"}`} >
                                Training  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Training" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}

                        </button>

                        <button className='CustomersBtn' onClick={() => { openModal("Customers") }}>
                            <div className={`DropText ${optionForCustomers[0]?.content.link === "/under-development" ? "" : "noContent"}`} >
                                Our Customers  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Customers" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}
                        </button>

                        <button className='PerformanceBtn' onClick={() => { openModal("Performance") }}>
                            <div className={`DropText ${optionForPerfomance[0]?.content.link === "/under-development" ? "" : "noContent"}`} >
                                Performance  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Performance" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}
                        </button>

                        <button className='TeamBtn' onClick={() => { openModal("Team") }}>
                            <div className={`DropText ${optionForTeam[0]?.content.link === "/under-development" ? "" : "noContent"}`} >
                                Team Updates  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                            {isSelected === "Team" && (
                                <div className="absoMenu">
                                    {renderMenu()}
                                </div>
                            )}
                        </button>

                        <button className='SalesBtn' onClick={() => { openModal("Sales") }}>
                            <div className={`DropText ${optionForSales[0]?.content.link === "/under-development" ? "" : "noContent"}`} >
                                Sales Support Corner  <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
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
                    <LogOut />
                </div>

                <div className="menuEl">
                    <button className='AdvisoriesBtn' onClick={() => { openModal("Advisories") }}>
                        <div className="DropText">Advisories <span><ion-icon name="chevron-down-outline"></ion-icon></span></div>
                        {isSelected === "Advisories" && (
                            <div className="absoMenu" onClick={() => { setIsClose(false); setSelected("Advisories"); }}>
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

            <div className="progress">
                <div className="progress-bar" style={{ width: `${scrollPosition}%` }}></div>
            </div>
        </header>
    )
}

export default Header
