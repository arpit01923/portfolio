import SubTitle from '@/components/extra/Subtitle'
import Title from '@/components/extra/Title'
import UserCard from '@/components/extra/card/userCard'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className='grid gap-10'>
            <Title classNames='text-3xl sm:text-4xl xl:text-6xl text-center font-bold'>Code with Passion!</Title>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                <div className='order-2 md:order-1'>
                    <h5 className='uppercase font-semibold text-lg'>Biography</h5>
                    <div className='grid gap-3 mt-3'>
                        <p>Hi I'm <span className='font-bold'>Arpit</span> as a frontend developer, I am deeply passionate about creating engaging and user-centric digital experiences. With a keen eye for design and a strong command of web technologies, I strive to bring ideas to life through clean and elegant code.</p>

                        <p>With several years of experience in frontend development, I have honed my skills in HTML, CSS, JavaScript, and various frontend frameworks. I am constantly staying up-to-date with the latest industry trends and best practices, always seeking to expand my knowledge and enhance my abilities.</p>

                        <p>Beyond technical expertise, I possess a strong sense of collaboration and a commitment to delivering high-quality work within deadlines. Ultimately, my passion for frontend development drives me to continually push boundaries, create meaningful experiences, and contribute to the ever-evolving digital landscape.</p>
                    </div>
                </div>
                <div className='order-1 md:order-2 mx-auto'>
                    <UserCard>
                        <Image alt='' src="/assets/images/resumepic.jpg" width={300} height={200} className='rounded-lg' />
                    </UserCard>
                </div>
                <div className='order-3 flex xl:flex-col justify-between md:col-span-2 xl:col-span-1'>
                    <div className='text-center'>
                        <Title classNames='text-3xl sm:text-4xl xl:text-6xl font-bold'>3+</Title>
                        <p className='text-2xl'>Satisfied Clients</p>
                    </div>
                    <div className='text-center'>
                        <Title classNames='text-3xl sm:text-4xl xl:text-6xl font-bold'>5+</Title>
                        <p className='text-2xl'>Projects Completed</p>
                    </div>
                    <div className='text-center'>
                        <Title classNames='text-3xl sm:text-4xl xl:text-6xl font-bold'>1+</Title>
                        <p className='text-2xl'>Years Of Experience</p>
                    </div>
                </div>
            </div>
            <Title classNames='text-3xl sm:text-4xl xl:text-6xl text-center font-bold'>Skills</Title>
            <div></div>
            <Title classNames='text-3xl sm:text-4xl xl:text-6xl text-center font-bold'>Experience</Title>
            <div className='grid gap-5'>
                <div className='max-w-[600px] mx-auto'>
                    <p className='text-2xl font-bold'>MERN Stack Developer{" "}
                        <span className='text-primary'>@E Software Solutions</span>
                    </p>
                    <p className='font-thin'>2022-Present | Haryana, India</p>
                    <p>
                        Collaborate with the design and backend teams to develop responsive and intuitive user interfaces for web applications. Implement frontend solutions, leveraging React.js to enhance website performance and user engagement.
                    </p>
                </div>
                <div className='max-w-[600px] mx-auto'>
                    <p className='text-2xl font-bold'>Intern{" "}
                        <span className='text-primary'>@Emulus Consulting</span>
                    </p>
                    <p className='font-thin'>Summer 2022 | Gurugram, India</p>
                    <p>
                        I am actively engaged in crafting innovative and efficient web applications. With a strong focus on code quality and best practices, I continuously strive to enhance the performance and scalability of React.js projects at Emulus Consulting.
                    </p>
                </div>
            </div>
            <Title classNames='text-3xl sm:text-4xl xl:text-6xl text-center font-bold'>Education</Title>
            <div className='grid gap-5'>
                <div className='max-w-[600px] mx-auto'>
                    <p className='text-2xl font-bold'> Bachelor of Technology In Computer Science
                    </p>
                    <p className='font-thin'>2018-2022 | Kurukshetra University, Kurukshetra, India</p>
                    <p>
                        A Bachelor of Technology in Computer Science equips individuals with a comprehensive understanding of computer systems and software development, enabling them to tackle complex technological challenges and drive innovation in the digital era.
                    </p>
                </div>
                <div className='max-w-[600px] mx-auto'>
                    <p className='text-2xl font-bold'>10+2{" "}
                    </p>
                    <p className='font-thin'>2017-2018 | C.B.S.E, Delhi, India</p>
                    <p>
                        Completing my education in the CBSE Board's 10+2 system, I gained a comprehensive understanding of diverse subjects, fostering a well-rounded academic foundation.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About