import React from "react";
import myPhoto from "../../assets/melissa_pic.jpeg";
import myResume from "../../assets/MelissaNResume.pdf";

function About() {
    return (
        <section className="my-5">
            <h1 className="text-center text-2xl font-serif text-lime-100">
                About Me
            </h1>
            <hr className="w-2/3 h-3 mx-auto text-lime-100"></hr>
            <div className="mx-auto max-w-95 md:max-w-3/4">
                <div className="justify-center md:grid md:grid-cols-3 md:gap-x-7"> 
                <img src={myPhoto} alt="me" className="max-w-3/4 flex justify-center mx-auto md:max-w-95"/>
                <div className="md:col-span-2 text-lime-100">
                    <p>
                        I am a MERN Stack Developer holding a Bachelor of Science in Hospitality Management from Texas Tech University. I recently earned a certificate in Full Stack Development from the University of Texas and am skilled at writing well-designed, testable, and efficient code using current best practices in Web development. 
                    </p>
                    <br></br>
                    <p className="underline text-blue-100">What I bring to every project:</p>
                    <ul className="list-inside list-disc text-blue-100">
                        <li>Problem-solving skills and perseverance with the ability to learn new concepts quickly</li>
                        <li>
                            Dedication to teamwork and flexible collaboration
                        </li>
                        <li>
                            Foundational knowledge of agile software development
                            principles
                        </li>
                        <li>
                            A curious mind and a desire to attack difficult
                            challenges
                        </li>
                    </ul>
                    <br></br>
                    <p>
                        When I'm not coding, I enjoy traveling the world, playing and watching sports, practicing the ukulele, and spending time with my two little dogs - Toby and Cheesepuff.
                    </p>
                </div>
                </div>
            </div>
            <br></br>
            <div className="shadow-box p-2 max-w-95 md:max-w-3/4 mx-auto flex-col justify-center">
                <h3 className="text-center text-2xl font-serif text-lime-100 underline">My Technical Skills</h3>
                <ul className="text-purple-100 md:mx-auto md:text-center">
                    <li>
                        <u>Programming Languages:</u> Java, JavaScript, TypeScript, HTML, CSS
                    </li>
                    <li>
                        <u>Database Management:</u> MySQL, Sequelize, MongoDB,
                        Mongoose
                    </li>
                    <li>
                        <u>Libraries/Frameworks:</u> jQuery, React.js,
                        Express.js, Bootstrap, Materialize, Tailwind CSS
                    </li>
                    <li>
                        <u>Other Technologies:</u> Node.js, Passport.js,
                        Handlebars, Git, Bash, Heroku, IndexedDB
                    </li>
                </ul>
                <br></br>
                <div className="flex"><button className="flex justify-center mx-auto"><a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mx-auto flex justify-center" href={myResume} rel="noreferrer" target="_blank"><svg className="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg><span>Download my Resume</span></a></button></div>
            </div>
        </section>
    );
}

export default About;
