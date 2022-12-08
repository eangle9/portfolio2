import './IntroStyle.css';
import React from 'react';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import boy from '../../img/boy.png';
import Vector2 from '../../img/Vector2.png';


const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hy! I Am</span>
                    <span>Engdawork Yismaw</span>
                    <span>Frontend Developer with high level of experience in web designing and development, <br />producting the Quality work</span>
                </div>
                <button className='btn i-btn'>Hire me</button>
                <div className='i-icons'>
                    <a href="https://github.com/eangle9" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt='img' />
                    </a>
                    <a href='https://www.linkedin.com/in/engdawork-yismaw-2707b7258/' target='_blank' rel='noopener noreferrer'>
                        <img src={Linkedin} alt='img' />
                    </a>
                    <a>
                        <img src={Instagram} alt='img' />
                    </a>



                </div>
            </div>
            <div className='i-right'>
                    <img src={Vector1} alt='img' />
                    <img src={Vector2} alt='img' />
                    <img src={boy} alt='img' />
            </div>
        </div>

    )
}

export default Intro;
