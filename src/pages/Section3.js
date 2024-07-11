import React, { useRef, useState, useEffect } from "react";
import styles from '../styles/Section3.module.css'

function Section3({device}){
    // v. hover 이펙트 / click 이벤트 구현.
    const [countClickedPage, setCountClickedPage] = useState(0)
    const [countClickedDiv, setCountClickedDiv] = useState(0)
    
    const textBox = useRef(null)
    const borderBox = useRef(null)
    const border1 = useRef(null)
    const border2 = useRef(null)

    // 1번 div
    const effect1Hover = () => {
        if(device === 'pc'){
            textBox.current.style.setProperty('bottom', '-2px')
        }
    }
    const effect1Leave = () => {
        if(device === 'pc'){
            textBox.current.style.setProperty('bottom', '200px')
            textBox.current.style.setProperty('opacity', 0)

            setTimeout(function(){
                textBox.current.style.setProperty('transition', 'none')
                textBox.current.style.setProperty('bottom', '-200px')
                textBox.current.style.setProperty('display', 'none')

                setTimeout(function(){
                    textBox.current.style.setProperty('opacity', 1)
                    textBox.current.style.setProperty('display', 'flex')
                    textBox.current.style.setProperty('transition', '.6s')
                }, 10)
            }, 600)
        }
    }

    // 2번 div
    const effect2Hover = () => {
        if(device === 'pc'){
            borderBox.current.style.setProperty('background-color', '#2ca')
            border1.current.style.setProperty('display', 'block')
        }
    }
    const effect2Leave = () => {
        if(device === 'pc'){
            borderBox.current.style.setProperty('border', '2px solid #c00')
            borderBox.current.style.setProperty('background-color', '#0c0')
            border2.current.style.setProperty('display', 'block')
        }
    }


    // 3번 div
    const clickDiv = () => {
        if(device === 'pc'){
            setCountClickedDiv(prevCount => prevCount + 1)
        }
    }
    const clickWindow = () => {
        setCountClickedPage(prevCount => prevCount + 1)
    }

    useEffect(() => {
        window.addEventListener('click', clickWindow)
    }, [])

    return (
        <div className={styles.section3Page}>
            {/* iv.	반응형 레이아웃 배치. */}
            <div className={
                    device === 'mobile' ? `${styles.boxContainerMo}` :
                    device === 'tablet' ? `${styles.boxContainerTa}` :
                    `${styles.boxContainerPc}`
                }>
                {/* ii.	페이지 중앙에 배치되는 200px*200px 크기의 div 3개 생성. */}
                {/* 1번 div */}
                <div className={device === 'pc' ? `${styles.boxPc}` : `${styles.box}`} onMouseEnter={effect1Hover} onMouseLeave={effect1Leave}>
                    <div ref={textBox} className={styles.textBox}>Hello World</div>
                </div>
                {/* 2번 div */}
                <div ref={borderBox} className={device === 'pc' ? `${styles.boxPc}` : `${styles.box}`} onMouseEnter={effect2Hover} onMouseLeave={effect2Leave}>
                    <div ref={border1} className={styles.border1}>
                        <div ref={border2} className={styles.border2}></div>
                    </div>
                </div>
                {/* 3번 div */}
                <div className={device === 'pc' ? `${styles.boxPc}` : `${styles.box}`} onClick={clickDiv}>
                    <div className={styles.countClickBox} count={countClickedPage}></div>
                    <div className={styles.countClickBox} count={countClickedDiv}></div>
                </div>
            </div>
        </div>
    )
}
export default Section3