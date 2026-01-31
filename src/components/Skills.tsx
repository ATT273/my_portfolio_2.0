import React from 'react'

const Skills = () => {
    return (
        <>
            <h2 className='skill-title text-[--dark-text] text-3xl text-center title-bg'>SKILLS</h2>
            <div className='skill-section'>
                <section className='flex flex-col'>
                    <div className='languages flex flex-1 gap-[50px] mb-[50px]'>
                        <img
                            className='skill-logo'
                            src={require('../assets/images/js.png')}
                            alt='logo' />
                        <img
                            className='skill-logo'
                            src={require('../assets/images/html.png')}
                            alt='logo' />
                        <img
                            className='skill-logo'
                            src={require('../assets/images/css.png')}
                            alt='logo' />
                    </div>
                    <div className='framework flex flex-1 gap-[50px] mb-[150px]'>
                        <img
                            className='skill-logo'
                            src={require('../assets/images/react.png')}
                            alt='logo' />
                        <img
                            className='skill-logo nextjs-icon'
                            src={require('../assets/images/next-js.png')}
                            alt='logo' />
                        <img
                            className='skill-logo'
                            src={require('../assets/images/php.png')}
                            alt='logo' />
                        <img
                            className='skill-logo tailwinds-icon'
                            src={require('../assets/images/tailwinds.png')}
                            alt='logo' />
                        <img
                            className='skill-logo flutter-icon'
                            src={require('../assets/images/flutter.png')}
                            alt='logo' />
                        <img
                            className='skill-logo laravel-icon'
                            src={require('../assets/images/laravel.png')}
                            alt='logo' />
                    </div>
                </section>
            </div>
            <div id='ct' className='division-line'></div>
        </>
    )
}

export default Skills