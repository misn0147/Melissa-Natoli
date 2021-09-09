import React from "react";
import Game from "../Game";

function Home() {
    return (
        <section>
            <div className="bg-cover bg-center">
            <div className="responsive inset-x-0 top-20 flex justify-center items-center">
                    <h2 className="md:text-2xl font-sans text-lime-50">Austin, Texas based Web Developer</h2>
            </div>
                <Game></Game>
            </div>
        </section>
    );
}

export default Home;
