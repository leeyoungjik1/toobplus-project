// 1. 헤더 제작
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import styles from '../styles/GNB.module.css'

const subMenus = [
    [
        {
            url: '/section1',
            name: '섹션1'
        },
        {
            url: '/',
            name: '섹션2'
        }
    ],
    [
        {
            url: '/test1',
            name: 'test1'
        },
        {
            url: '/',
            name: 'test2'
        },
        {
            url: '/',
            name: 'test3'
        },
        {
            url: '/',
            name: 'test4'
        }
    ],
    [
        {
            url: '/section3',
            name: 'section3'
        },
        {
            url: '/freeContent',
            name: 'test5'
        }
    ],
]

function GNB({device}){
    const [isShowMenu, setIsShowMenu] = useState(false)

    // 토글 아이콘 클릭 시 메뉴 표시.
    const showMenu = () => {
        setIsShowMenu(!isShowMenu)
    }

    // v. 1 depth 메뉴 터치 시 해당 2 depth 메뉴 목록만을 슬라이드 형식으로 표시. 
    const showSubMenu = (e) => {
        if(!e.target.nextSibling.className){
            e.target.nextSibling.classList.add(`${styles.show}`)
        }else{
            e.target.nextSibling.classList.remove(`${styles.show}`)
        }
    }

    // vi. 2 depth 메뉴 터치 시 페이지 이동, gnb 닫힘. 
    const clickSubMenu = () => {
        setIsShowMenu(false)
        const subMenus = document.querySelectorAll('ul ul')
        for(const subMenu of subMenus){
            if(subMenu.className){
                subMenu.classList.remove(`${styles.show}`)
            }
        }
    }

    // vii.	gnb 영역 외 터치 시 gnb 닫힘. 
    const closeMenus = (e) => {
        if(e.target.className.includes('backgroundBlack')){
            setIsShowMenu(false)
        }
    }

    // iii.	hover 시 2 depth 메뉴 슬라이드. iv.	메인메뉴명, 서브메뉴명 각각에 다른 방식의 hover 이펙트 개별 적용. 
    const showPcSubMenu = (e) => {
        e.target.style.setProperty('color', 'tan')
        if(e.target.name === 'menu'){
            e.target.nextSibling.classList.add(`${styles.show}`)
        }
    }
    const hidePcSubMenu = (e) => {
        const subMenus = document.querySelectorAll('ul ul')
        const Menus = document.querySelectorAll('nav>div>ul>li>a')
        for(const subMenu of subMenus){
            if(subMenu.className){
                subMenu.classList.remove(`${styles.show}`)
            }
        }
        for(const Menu of Menus){
            if(Menu.style.color === 'tan'){
                Menu.style.setProperty('color', 'black')
            }
        }
    }

    useEffect(() => {
        window.addEventListener('click', closeMenus)
    }, [])

    return (
        <>
            {device === 'mobile' || device === 'tablet' ? 
                <nav>
                    {/* c. 로고 자리에 logo.png를 데이터로 활용., d. 로고 클릭 시 홈으로 이동하도록 설정. */}
                    <NavLink to='/'><img src={logo} className={styles.logo}></img></NavLink>
                    <div className={styles.menusContainer}>
                        {/* ii.	헤더 영역 높이값 60px, 메뉴명 표시하지 않고 Toggle 버튼 활용. */}
                        <div className={styles.iconMenu} onClick={showMenu}></div>
                        {/* e. 메뉴 구성  */}
                        <ul className={isShowMenu ? `${styles.menus} ${styles.show}` : `${styles.menus}`}>
                            <li>
                                {/* iv. 1 depth 메뉴 터치 시 2 depth의 1번째 페이지로 이동, gnb 닫히지 않음. */}
                                <NavLink to='/section1' onClick={showSubMenu}>메뉴1</NavLink>
                                <ul className={styles.subMenus}>
                                    {/* vi.	2 depth 메뉴 터치 시 페이지 이동, gnb 닫힘. */}
                                    {subMenus[0].map((subMenu, id) => 
                                        <li key={id}><NavLink to={subMenu.url} onClick={clickSubMenu}>{subMenu.name}</NavLink></li>
                                    )}
                                </ul>
                            </li>
                            <li>
                                <NavLink to='/test1' onClick={showSubMenu}>메뉴2</NavLink>
                                <ul className={styles.subMenus}>
                                    {subMenus[1].map((subMenu, id) => 
                                        <li key={id}><NavLink to={subMenu.url} onClick={clickSubMenu}>{subMenu.name}</NavLink></li>
                                    )}
                                </ul>
                            </li>
                            <li>
                                <NavLink to='/section3' onClick={showSubMenu}>menu3</NavLink>
                                <ul className={styles.subMenus}>
                                    {subMenus[2].map((subMenu, id) => 
                                        <li key={id}><NavLink to={subMenu.url} onClick={clickSubMenu}>{subMenu.name}</NavLink></li>
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* iii. Modal 창 출력 시 gnb 영역 외 black 기반 투명도 30% 배경 적용. */}
                    <div className={isShowMenu ? 
                        `${styles.backgroundBlack} ${styles.show}` : 
                        `${styles.backgroundBlack}`
                    }></div>
                </nav> :
                // PC 버전 GNB
                // ii. 헤더 영역 높이값 80px, Toggle 버튼이 사라지고 메뉴명 표시. 
                <nav className={styles.pcNav}>
                    <NavLink to='/'><img src={logo} className={styles.logo}></img></NavLink>
                    <div className={styles.menusContainer}>
                        <ul className={styles.pcMenus}>
                            <li onMouseEnter={showPcSubMenu} onMouseLeave={hidePcSubMenu}>
                                <NavLink to='/section1' name='menu'>메뉴1</NavLink>
                                <ul className={styles.pcSubMenus}>
                                    {subMenus[0].map((subMenu, id) => 
                                        <li key={id}><NavLink to={subMenu.url}>{subMenu.name}</NavLink></li>
                                    )}
                                </ul>
                            </li>
                            <li onMouseEnter={showPcSubMenu} onMouseLeave={hidePcSubMenu}>
                                <NavLink to='/test1' name='menu'>메뉴2</NavLink>
                                <ul className={styles.pcSubMenus}>
                                    {subMenus[1].map((subMenu, id) => 
                                        <li key={id}><NavLink to={subMenu.url}>{subMenu.name}</NavLink></li>
                                    )}
                                </ul>
                            </li>
                            <li onMouseEnter={showPcSubMenu} onMouseLeave={hidePcSubMenu}>
                                <NavLink to='/section3' name='menu'>menu3</NavLink>
                                <ul className={styles.pcSubMenus}>
                                    {subMenus[2].map((subMenu, id) => 
                                        <li key={id}><NavLink to={subMenu.url}>{subMenu.name}</NavLink></li>
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            }
        </>
    )
}
export default GNB