import './IntroStyle.css';
import React from 'react'

const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hy! I Am</span>
                    <span>Engdawork Yismaw</span>
                    <span>Frontend Developer with high level of experience in web designing and development, <br/>producting the Quality work</span>
                </div>
                <button className='btn i-btn'>Hire me</button>
            </div>
            <div className='i-right'>this is right side</div>
        </div>

    )
}

export default Intro;
