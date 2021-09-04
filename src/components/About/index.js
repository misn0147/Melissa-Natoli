import React from "react";
import myPhoto from "../../assets/melissa_pic.jpeg";
import myResume from "../../assets/MelissaNResume.pdf";

function About() {
    return (
        <section className="my-5">
            <h1 className="titles">
                About Me
            </h1>
            <hr></hr>
            <div id="container">
                <div className="img-text-box col"> 
                <div className="img-box col-lg-4"><img src={myPhoto} alt="Me" className="margin-block my-pic"/></div>
                <div className="my-2 margin-block col-lg-8">
                    <p>
                        I am a MERN Stack Developer holding a Bachelor of Science in Hospitality Management from Texas Tech University. I recently earned a certificate in Full Stack Development from the University of Texas. Skilled at writing well-designed, testable, and efficient code using current best practices in Web development. 
                    </p>
                    <p>What I bring to every project:</p>
                    <ul className="bullets">
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
                    <p>
                        When I'm not coding, I enjoy travelling the world, playing and watching sports, practicing the ukulele, and spending time with my two little dogs - Toby and Cheesepuff.
                    </p>
                </div>
                </div>
            </div>
            <div className="boxes">
                <h3 className="titles">My Technical Skills</h3>
                <ul>
                    <li>
                        <u>Programming Languages:</u> HTML, CSS, JavaScript
                    </li>
                    <li>
                        <u>Database Management:</u> MySQL, Sequelize, MongoDB,
                        Mongoose
                    </li>
                    <li>
                        <u>Libraries/Frameworks:</u> jQuery, React.js,
                        Express.js, Bootstrap, Materialize
                    </li>
                    <li>
                        <u>Other Technologies:</u> Node.js, Passport.js,
                        Handlebars, Git, Bash, Heroku, IndexedDB
                    </li>
                </ul>
                <a className="resume-button" href={myResume}><button>Download my Resume</button></a>
            </div>
        </section>
    );
}

export default About;
