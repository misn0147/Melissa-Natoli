import React from "react"; 
import { Container } from "react-bootstrap"; 

const Instructions = (props) => {
    let userMsg = "text-lime-500 text-xs md:text-base"; 
    if (props.userMessage === "You guessed incorrectly! Play again?") {
        userMsg += " text-red-900 font-bold"; 
    } else if (props.userMessage === "You won!") {
        userMsg += "text-lime font-bold"; 
    }
    return (
        <Container fluid className="shadow-box p-2 max-w-95 md:max-w-3/4 mx-auto flex-col justify-center text-center bg-gray-500">
            <h2 className="mt-2 text-xs md:text-base text-lime-50">
                Thanks for checking out my portfolio! While you're here try to
                win the game!
            </h2>
            <p className="text-xs md:text-base text-lime-50">
                Click on a photo to earn a point, but don't click a photo more
                than once or the game will be over! 12 points wins the game!
            </p>
            {/* show message from props  */}
            <h5 className={userMsg}>{props.userMessage}</h5>{" "}
            <h6 className="text-xs md:text-base text-lime-50">
                {/* show current user score and high score */}
                Current Score: {props.userScore || 0}  | High Score:{" "}
                {props.userTopScore || 0}
            </h6>{" "}
            
        </Container>
    );
};

export default Instructions;
