const menuBar = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Articles", link: "/articles" },
];
const professionalProjects = [
    {
        projectName: "Family Flight",
        src: "/assets/images/projects/family-flight.png",
        liveLink: "https://www.familyflight.com/",
        description:
            "Familyflight are available 24/7 to address your travel needs. Booking a new flight ticket, or check status on the old bookings - we are just a call away and would be glad to address your travel enquires.",
        tags: ["HTML", "SCSS", "Javascript", "Nuxt.js", "Vue.js"],
    },
    {
        projectName: "Nainer",
        src: "/assets/images/projects/nainer.png",
        liveLink: "https://nainer.com/",
        description:
            "Nainer: The place where founding teams are made, connecting innovation, business, ideas, expertise, investors, and winning collaborations.",
        tags: ["HTML", "Tailwind CSS", "Next.js", "Typescript", "Socket.io", "Redux", "Ag-Grid"],
    },
    {
        projectName: "Book Jane",
        src: "/assets/images/projects/book-jane.png",
        liveLink: "https://book-jane.com/",
        description:
            "Jane Bond BBQ is the best restaurant in Calgary, serving fresh & delicious buns & more. Jane Bond BBQ smokes some of Calgary's Best Brisket, Ribs, Pork Belly and more! ",
        tags: ["HTML", "Tailwind CSS", "Next.js"],
    },
    {
        projectName: "Cyltex",
        src: "/assets/images/projects/cyltex.png",
        liveLink: "http://dev.cyltex.com/device-monitoring",
        description:
            "Cyltex, LLC is a company that manufactures and distributes a wide range of products for the gas industries. They offer a variety of cylinders, valves, regulators, and other accessories for compressed gases. Their products are used in a variety of industries, including welding, healthcare, and manufacturing.",
        tags: ["HTML", "Tailwind CSS", "Next.js", "Typescript", "Socket.io", "Google Maps API"],
    },
    {
        projectName: "Business Financial Group",
        src: "/assets/images/projects/bfg.png",
        liveLink: "https://app.businessfinancialgroup.biz/",
        description:
            "Business Financial Group (BFG) is a full-service accounting firm that offers a variety of tax services to businesses and individuals. Their tax team has extensive experience in all aspects of business taxation.",
        tags: ["HTML", "Tailwind CSS", "Next.js", "Typescript", "Ag-Grid"],
    },
];
const openSourceProjects = [
    {
        projectName: "Real Dev Squad",
        src: "/assets/images/projects/real-dev-squad.png",
        liveLink: "https://realdevsquad.com/",
        description:
            "Real Dev Squad is an online non-profit open source free fun community for people in tech, mainly developers, designers, college students, or product managers, to come, learn and contribute towards building a platform for our community, that helps upskill everyone.",
        tags: ["HTML", "Next.js", "Typescript", "Testing", "Redux"],
    },
];
// const personalProjects = [
//     {
//         projectName: "Video-Library",
//         src: "/assets/images/projects/video-library.png",
//         description:
//             "Laugh Factory is a fully functional video library which provides the different pages like Home Page,Video lising page, Playlist Management, Like/Dislike, Watch Later, History,Login/Signup page.",
//         liveLink: "https://laugh-factory.netlify.app/",
//         githubLink: "https://github.com/arpit01923/Video-Library",
//         tags: ["redux", "javascript", "react-router", "es6", "frontend", "css3", "reactjs"],
//     },
//     {
//         projectName: "E-Commerce",
//         src: "/assets/images/projects/e-commerce.png",
//         description:
//             "An ecommerce website where you will shop product according to latest fashion. Here are the amazing deals. Shopzila can generate a curated list of product according to the filter you apply.",
//         liveLink: "https://shop-zila.netlify.app/",
//         githubLink: "https://github.com/arpit01923/e-com",
//         tags: ["javascript", "react-router", "es6", "css3", "reactjs"],
//     },
//     {
//         projectName: "Browser Extension",
//         src: "/assets/images/projects/browser-extension.png",
//         description:
//             "This is fully functional browser extension which inluded add user name, add main focus,display time and current weather in sync, wallpaper and quote changing on every page refresh,add todos.",
//         liveLink: "https://fresh-move.netlify.app/",
//         githubLink: "https://github.com/arpit01923/browser-extension",
//         tags: ["javascript", "es6", "frontend", "css3", "reactjs", "weather - api"],
//     },
// ];
const articles = [
    {
        projectName: "Hoisting In JS",
        liveLink: "https://vany02.hashnode.dev/hoisting-in-js",
        description:
            "You know most hated language is JavaScript !!! You know most loved language is JavaScript !!! And you know according to research which is the most flexible / powerfull language ???? It's again JavaScript",
        date: "May 10, 2022",
        readTime: "2 min read",
    },
    {
        projectName: "Beginner friendly Git commands to run your project",
        liveLink: "https://vany02.hashnode.dev/beginner-friendly-git-commands-to-run-your-project",
        description:
            "Git is a free and open source distributed code management and Version control system that is distributed under the GNU General Public License version 2.",
        date: "May 10, 2022",
        readTime: "2 min read",
    },
    {
        projectName: "Async vs Defer",
        liveLink: "https://vany02.hashnode.dev/async-vs-defer",
        description:
            "Async vs Defer* the most confusing topic. A lot of programmer want understand this. Don't worry after this blog you will never be confused about this topic.",
        date: "Jun 9, 2022",
        readTime: "2 min read",
    },
];
const education = [
    {
        course: "Bachelor of Technology In Computer Science",
        dateAndTime: "2018-2022 | Kurukshetra University, Kurukshetra, India",
        title: "A Bachelor of Technology in Computer Science equips individuals with a comprehensive understanding of computer systems and software development, enabling them to tackle complex technological challenges and drive innovation in the digital era.",
    },
    {
        course: "10+2",
        dateAndTime: "2017-2018 | C.B.S.E, Delhi, India",
        title: "Completing my education in the CBSE Board's 10+2 system, I gained a comprehensive understanding of diverse subjects, fostering a well-rounded academic foundation.",
    },
];
const experience = [
    {
        position: "Software Engineer",
        name: "Farenexus",
        dateAndTime: "Dec 2023-Present | Mohali, Punjab, India",
        title: "Optimized code for performance, addressing bottlenecks and improving load times. Develop and integrate RESTful APIs to fetch and display data from server endpoints.",
    },
    {
        position: "Junior Web Developer",
        name: "eSoftware Solutions",
        dateAndTime: "Sept 2022-Aug 2023 | Yamuna Nagar, Haryana, India",
        title: "Collaborate with the design and backend teams to develop responsive and intuitive user interfaces for web applications.Implement frontend solutions, leveraging React.js to enhance website performance and user engagement.",
    },
    // {
    //     position: "React Developer",
    //     name: "Socialpubli Influencer Marketing Company",
    //     dateAndTime: "July 2021-Aug 2022 | Vadodara, Gujarat, India",
    //     title: "I am actively engaged in crafting innovative and efficient web applications. With a strong focus on code quality and best practices, I continuously strive to enhance the performance and scalability of React.js projects at Socialpubli Influencer Marketing Company.",
    // },
];

export { menuBar, professionalProjects, openSourceProjects, articles, education, experience };
