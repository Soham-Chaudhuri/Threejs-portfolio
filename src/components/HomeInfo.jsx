import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';
const InfoBox = ({text,link,btnText})=>(
<div className="mx-5 flex max-w-2xl flex-col gap-3 px-8 py-4 text-white bg-[#2b77e780] relative rounded-[10px] border-[#2b77e7] backdrop-blur-md">
    <p className="font-medium sm:text-xl text-center">
    {text}
    </p>
    <Link to={link} className='text-center neobtn'>
    {btnText}  →
    {/* <img src={arrow} className='w-4 h-4 object-contain'/> */}
    </Link>
</div>
)
const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center bg-[#2b77e780] relative rounded-[10px] border-[#2b77e7] backdrop-blur-md py-4 px-8 text-white mx-5'>Hi,I am <span className="font-semibold">Soham</span> 👋
        <br />
        A Software Engineer from India
        </h1>
    ),
    2:(
        <InfoBox
        text="Been a part of various teams and created various projects"
        link="/about"
        btnText="Learn more"
        />
    ),
    3:(
        <InfoBox
        text="Curious about the impact?"
        link="/projects"
        btnText="Visit my portfolio"
        />
    ),
    4:(
        <InfoBox
        text="Need a project done or looking for a dev? I am just a few keystrokes away"
        link="/contact"
        btnText="Let's talk"
        />
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
