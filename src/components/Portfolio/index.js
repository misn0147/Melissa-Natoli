import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper/core";

import '../../app.css';

//project photos
import pourDecisions from "../../assets/pour-decisions.PNG";
import mealMatch from "../../assets/meal_match.JPG";
import techBlog from "../../assets/my_tech_blog.JPG";
import notedPic from "../../assets/Noted.JPG";
import weatherApp from "../../assets/weather_dash.JPG";
import workdayPic from "../../assets/workday_scheduler.JPG";
import bikeSleuthPic from "../../assets/BikeSleuth.JPG";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

function Portfolio() {
    const myWork = [
        {
            title: "BikeSleuth",
            link: "https://bikesleuth.herokuapp.com/#/",
            description:
                "Bootcamp group project created to help bike owners reunite with their lost or stolen bicycles.",
            technologies:
                "React, GraphQL, Node.js, Tailwinds CSS, MongoDB, Mongoose, Express.js, Apollo Server, Bcrypt",
            repo: "https://github.com/misn0147/BikeSleuth",
            pic: bikeSleuthPic,
        },
        {
            title: "Pour Decisions",
            link: "https://pour-decisions.herokuapp.com/",
            description:
                "Bootcamp group project created as a review website for wineries in the Texas Hill Country.",
            technologies:
                "Node.js, Express.js, Handlebars.js, MySQL2, and Sequelize",
            repo: "https://github.com/misn0147/pour-decisions",
            pic: pourDecisions,
        },
        {
            title: "Meal Match",
            link: "https://misn0147.github.io/meal_match/",
            description:
                "Bootcamp group project created using JavaScript to randomly choose a food and drink pairing to help you have a fun and exciting date night.",
            technologies: "HTML, JavaScript, Materialize",
            repo: "https://github.com/misn0147/meal_match",
            pic: mealMatch,
        },
        {
            title: "My.Tech.Blog",
            link: "https://misn0147-my-tech-blog.herokuapp.com/",
            description:
                "Blog website for users to blog about tech topics. Users can interact with the blog poster through comments on the blog.",
            technologies:
                "JavaScript, Express.js, Handlebars.js, bcrypt, MySQL, Sequelize",
            repo: "https://github.com/misn0147/my-tech-blog",
            pic: techBlog,
        },
        {
            title: "Noted",
            link: "https://misn0147-noted.herokuapp.com/",
            description: "Note taking application created using Express.",
            technologies: "Express.js, Uuid, JavaScript",
            repo: "https://github.com/misn0147/noted",
            pic: notedPic,
        },
        {
            title: "Weather Dashboard",
            link: "https://misn0147.github.io/weather-dashboard/",
            description:
                "Desktop weather application that uses OpenWeather API to display current weather and upcoming forecast for any city searched.",
            technologies: "JavaScript, OpenWeatherMap API, Bootstrap",
            repo: "https://github.com/misn0147/weather-dashboard",
            pic: weatherApp,
        },
        {
            title: "Workday Scheduler",
            link: "https://misn0147.github.io/work-day-scheduler/",
            description:
                "Calendar application where user can log daily tasks and save them. The color of the task changes as the workday progresses.",
            technologies: "JavaScript, Moment.js",
            repo: "https://github.com/misn0147/work-day-scheduler",
            pic: workdayPic,
        },
    ];
    return (
        <section className="my-5 max-w-full">
            <h1 className="text-center text-2xl font-serif text-lime-100">
                My Work
            </h1>
            <hr className="w-2/3 h-3 mx-auto text-lime-100"></hr>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={100}
                    loop={true}
                    navigation={true}
                    className="max-w-full"
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                >
                    {myWork.map((project) => (
                        <SwiperSlide key={project.title}>
                            <div className="max-w-95 md:max-w-3/4 shadow-lg m-auto">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="rounded-t-lg">
                                        <div className="shadow-lg hover:shadow-xl rounded-t-lg transform transition duration-500 bg-white ">
                                            <img
                                                className="w-full"
                                                src={project.pic}
                                                alt="project homepage"
                                            />

                                            <div className="px-4 py-2">
                                                <h1 className="text-xl font-gray-700 font-bold">
                                                    {project.title}
                                                </h1>
                                                <p className="text-sm tracking-normal">
                                                    {project.description}
                                                    <br></br>
                                                    <u>Technologies Used</u>
                                                    <li>
                                                        {project.technologies}
                                                    </li>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <button className="w-full text-center bg-yellow-400 py-0.5 rounded-b-lg underline ">
                                    <a
                                        href={project.repo}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        GitHub Repo
                                    </a>
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </section>
    );
}

export default Portfolio;
