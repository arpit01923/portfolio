import SubTitle from '@/components/extra/Subtitle'
import Title from '@/components/extra/Title'
import ProjectCard from '@/components/extra/card/projectCard'
import Image from 'next/image'

const professionalProjects = [
    {
        projectName: "Nainer",
        src: "/assets/images/projects/nainer.png",
        liveLink: "https://nainer.com/",
        description: "Nainer: The place where founding teams are made, connecting innovation, business, ideas, expertise, investors, and winning collaborations.",
        tags: ["HTML", "Tailwind CSS", "Next.js", "Typescript", "Socket.io", "Redux"]
    },
    {
        projectName: "Book Jane",
        src: "/assets/images/projects/book-jane.png",
        liveLink: "https://book-jane.com/",
        description: "Jane Bond BBQ is the best restaurant in Calgary, serving fresh & delicious buns & more. Jane Bond BBQ smokes some of Calgary's Best Brisket, Ribs, Pork Belly and more! ",
        tags: ["HTML", "Tailwind CSS", "Next.js"]
    },
]
const personalProjects = [
    {
        projectName: "Video-Library",
        src: "/assets/images/projects/video-library.png",
        description: "Laugh Factory is a fully functional video library which provides the different pages like Home Page,Video lising page, Playlist Management, Like/Dislike, Watch Later, History,Login/Signup page.",
        liveLink: "https://laugh-factory.netlify.app/",
        githubLink: "https://github.com/arpit01923/Video-Library",
        tags: ["redux", "javascript", "react-router", "es6", "frontend", "css3", "reactjs"]
    },
    {
        projectName: "E-Commerce",
        src: "/assets/images/projects/e-commerce.png",
        description: "An ecommerce website where you will shop product according to latest fashion. Here are the amazing deals. Shopzila can generate a curated list of product according to the filter you apply.",
        liveLink: "https://shop-zila.netlify.app/",
        githubLink: "https://github.com/arpit01923/e-com",
        tags: ["javascript", "react-router", "es6", "css3", "reactjs"]
    },
    {
        projectName: "Browser Extension",
        src: "/assets/images/projects/browser-extension.png",
        description: "This is fully functional browser extension which inluded add user name, add main focus,display time and current weather in sync, wallpaper and quote changing on every page refresh,add todos.",
        liveLink: "https://fresh-move.netlify.app/",
        githubLink: "https://github.com/arpit01923/browser-extension",
        tags: ["javascript", "es6", "frontend", "css3", "reactjs", "weather - api"]
    },
]
const Projects = () => {
    return (
        <section className='grid gap-5'>
            <Title classNames='text-3xl sm:text-4xl xl:text-6xl text-center font-bold'>Innovative Creations!</Title>
            <SubTitle classNames='text-lg uppercase font-bold'>Professional Projects</SubTitle>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {professionalProjects.map(item => <ProjectCard>
                    <div className='grid gap-2'>
                        <a href={item?.liveLink} target='_blank'><Image alt='project-image' src={item?.src} width={300} height={200} className='rounded-lg w-full h-[200px] shadow-md' unoptimized /></a>
                        <h1 className='text-2xl font-bold'>{item?.projectName}</h1>
                        <p className='line-clamp-3'>{item?.description}</p>
                        <div className='flex gap-2 flex-wrap'>
                            {item?.tags?.map((inst) =>
                                <span className='text-white text-sm p-1 rounded-md bg-primary'>{inst}</span>
                            )}
                        </div>
                        <p className='underline'><a href={item?.liveLink} target="_blank">Visit</a></p>
                    </div>
                </ProjectCard>)}
            </div>
            <SubTitle classNames='text-lg uppercase font-bold mt-5'>Personal Projects</SubTitle>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {personalProjects.map(item => <ProjectCard>
                    <div className='grid gap-2'>
                        <a href={item?.liveLink} target='_blank'><Image alt='project-image' src={item?.src} width={300} height={200} className='rounded-lg w-full h-[200px] shadow-md' unoptimized /></a>
                        <h1 className='text-2xl font-bold'>{item?.projectName}</h1>
                        <p className='line-clamp-4'>{item?.description}</p>
                        <div className='flex gap-2 flex-wrap'>
                            {item?.tags?.map((inst) =>
                                <span className='text-white text-sm p-1 rounded-md bg-primary'>{inst}</span>
                            )}
                        </div>
                        <div className='flex justify-between'>
                            <p className='underline'><a href={item?.liveLink} target="blank">Visit</a></p>
                            <p><a href={item?.githubLink} target="blank"><Image src="/assets/icons/Github.svg" width={25} alt='github-icon' height={25} /> </a>
                            </p>
                        </div>
                    </div>
                </ProjectCard>)}
            </div>
        </section>
    )
}

export default Projects