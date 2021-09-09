import React from "react";
import Instructions from '../Instructions';
//bootstrap components
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import images from "../../images.json";

class Game extends React.Component {
    state = {
        count: 0,
        score: 0,
        images,
        alreadyGuessed: [],
        message: "Click an image to begin!",
        won: false,
    };
    handleCount = (id) => {
        //create array of clicked images
        let alreadyGuessed = [...this.state.alreadyGuessed];

        //look through alreadyGuessed array for ID of clicked image
        if (alreadyGuessed.indexOf(id) === -1) {
            alreadyGuessed.push(id);

            if (alreadyGuessed.length === images.length) {
                //if we won, set count to 0, set score to alreadyGuessed.length 
                this.setState({
                    count: 0,
                    alreadyGuessed: [],
                    score: alreadyGuessed.length,
                    message: "You won!",
                    won: true,
                });

            } else if (this.state.count < this.state.score) {
                //if the count less than high score keep increasing the count, show guessed correctly message and updating alreadyGuessed array
                this.setState({
                    count: this.state.count + 1,
                    alreadyGuessed,
                    message: "You guessed correctly!",
                });
            } else {
                //same as above, but also increase high score with count
                this.setState({
                    count: this.state.count + 1,
                    alreadyGuessed,
                    score: this.state.score + 1,
                    message: "You guessed correctly!",
                });
            }
        } else {
            //reset the count, emptying alreadyGuessed array, save the high score, display incorrect guess message
            this.setState({
                count: 0,
                alreadyGuessed: [],
                score: this.state.score,
                message: "You guessed incorrectly! Play again?",
            });
        }
    };

    render() {
        return (
            <div className="mb-5 pb-5 pb-md-0">
                <Instructions userScore={this.state.count} userTopScore={this.state.score} userMessage={this.state.message} />
                
                <div className="mb-5 pb-5 pb-md-0  m-w-3/4">
                    <Container className="mx-auto">
                        <Row >
                            <Col className="grid grid-cols-3 md:grid-cols-4 place-items-center">
                                {
                                    /* shuffle images collection and after that nicely mapping trough the json collection and rendering our images */
                                    this.state.images
                                        .sort(() => Math.random() - 0.5)
                                        .map((image) => 
                                            <Card
                                                key={image.id}
                                                link={image.link}
                                                id={image.id}
                                                handleCount={this.handleCount}
                                            />
                                        )
                                }
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
function Card(props) {
    return (
        <Image
            src={process.env.PUBLIC_URL + "/images/" + props.link}
            thumbnail
            className="m-1 m-md-2 m-lg-3"
            id={props.id}
            onClick={() => props.handleCount(props.id)}
        />
    );
}

export default Game;
