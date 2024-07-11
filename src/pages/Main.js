import React from "react";
import styles from '../styles/Main.module.css'

function Main(){
    return (
        <div className={styles.mainPage}>
            {/* ii.	섹션 내부 텍스트 : 과제전형 <br /> 지원자명 (크기 : 5rem). */}
            <p>과제전형 <br/>이영직</p>
        </div>
    )
}
export default Main