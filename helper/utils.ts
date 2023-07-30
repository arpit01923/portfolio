const menuBar = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Articles", link: "/articles" },
];
const professionalProjects = [
    {
        projectName: "Nainer",
        src: "/assets/images/projects/nainer.png",
        liveLink: "https://nainer.com/",
        description:
            "Nainer: The place where founding teams are made, connecting innovation, business, ideas, expertise, investors, and winning collaborations.",
        tags: ["HTML", "Tailwind CSS", "Next.js", "Typescript", "Socket.io", "Redux"],
    },
    {
        projectName: "Book Jane",
        src: "/assets/images/projects/book-jane.png",
        liveLink: "https://book-jane.com/",
        description:
            "Jane Bond BBQ is the best restaurant in Calgary, serving fresh & delicious buns & more. Jane Bond BBQ smokes some of Calgary's Best Brisket, Ribs, Pork Belly and more! ",
        tags: ["HTML", "Tailwind CSS", "Next.js"],
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
const personalProjects = [
    {
        projectName: "Video-Library",
        src: "/assets/images/projects/video-library.png",
        description:
            "Laugh Factory is a fully functional video library which provides the different pages like Home Page,Video lising page, Playlist Management, Like/Dislike, Watch Later, History,Login/Signup page.",
        liveLink: "https://laugh-factory.netlify.app/",
        githubLink: "https://github.com/arpit01923/Video-Library",
        tags: ["redux", "javascript", "react-router", "es6", "frontend", "css3", "reactjs"],
    },
    {
        projectName: "E-Commerce",
        src: "/assets/images/projects/e-commerce.png",
        description:
            "An ecommerce website where you will shop product according to latest fashion. Here are the amazing deals. Shopzila can generate a curated list of product according to the filter you apply.",
        liveLink: "https://shop-zila.netlify.app/",
        githubLink: "https://github.com/arpit01923/e-com",
        tags: ["javascript", "react-router", "es6", "css3", "reactjs"],
    },
    {
        projectName: "Browser Extension",
        src: "/assets/images/projects/browser-extension.png",
        description:
            "This is fully functional browser extension which inluded add user name, add main focus,display time and current weather in sync, wallpaper and quote changing on every page refresh,add todos.",
        liveLink: "https://fresh-move.netlify.app/",
        githubLink: "https://github.com/arpit01923/browser-extension",
        tags: ["javascript", "es6", "frontend", "css3", "reactjs", "weather - api"],
    },
];
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

export { menuBar, professionalProjects, openSourceProjects, personalProjects, articles };
