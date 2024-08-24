import React from 'react'


const Process = () => {
    return (
        <>
            <div className='mainContainer'>
                <div>
                    <div className='processButton'>
                        <span className='buttonText'>Process</span>
                    </div>
                    <div className='textContainer'>
                        <h4>Our simple 3-step process <br /> to <span className='instrument-serif-regular-italic'>transform</span> your health.</h4>
                        <p>From personalized meal plans to AI-driven insights and expert guidance, we've got your health journey fully covered.</p>
                    </div>
                </div>
                <div className='contents'>
                    <div className='card'>
                        <img src="/user-profile.gif" />
                        <p className='heading'>User Profile</p>
                        <p className='subHeading'>We'll start with your health details and lifestyle preferences.</p>
                    </div>
                    <div className='card'>
                        <img src="/user-profile.gif" />
                        <p className='heading'>Ai Analysis  </p>
                        <p className='subHeading'>Our advanced AI analyzes your profile to deliver a customized diet plan.</p>
                    </div>
                    <div className='card'>
                        <img src="/user-profile.gif" />
                        <p className='heading'>Follow and Thrive</p>
                        <p className='subHeading'>Follow your plan and experience the benefits of a healthier, happier you.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Process