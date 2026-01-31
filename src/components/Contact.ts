import React from 'react'

const Contact = () => {
    return (
        <>
            <h2 className='contact-title text-[--dark-text] text-3xl text-center title-bg'> LET'S KEEP IN TOUCH</h2>
            <h3 className='contact-text text-stone-200 text-xl text-center'>You can find me here</h3>
            <section className='contact-section'>
                <ul className='contactItems-list flex flex-1 gap-[50px] justify-center'>
                    <li>
                        <a href='mailto:anhtuan273@gmail.com' target='_blank'>
                            <img
                                className='contact-icon'
                                src={require('../assets/icons/email.png')}
                                width={50}
                                height={50} />
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/ATT273' target='_blank'>
                            <img
                                className='contact-icon'
                                src={require('../assets/icons/github.png')}
                                width={50}
                                height={50} />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/tuan-tran-7b565b198/' target='_blank'>
                            <img
                                className='contact-icon'
                                src={require('../assets/icons/linkedin.png')}
                                width={50}
                                height={50} />
                        </a>
                    </li>
                </ul>
                {/* <div className='other-platforms'></div> */}
            </section>
        </>
    )
}

export default Contact