import React from "react";
import austin from "../../assets/austin.jpg";
import austinSmall from "../../assets/austin-small.JPG";

function Home() {
    return (
        <section>
            <div>
            
            <div className="bg-cover bg-center">
            <div className="responsive inset-x-0 top-20 flex justify-center items-center">
                    <h2 className="md:text-3xl font-sans">Austin, Texas based Web Developer</h2>
                </div>
                <img
                    src={austin}
                    className="min-w-full hidden md:block"
                    alt="austin skyline over lake"
                />
                <img
                    src={austinSmall}
                    className="min-w-full md:hidden"
                    alt="austin skyline over lake"
                />
                
            </div>
            </div>
        </section>
    );
}

export default Home;
