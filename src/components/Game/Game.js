import React from 'react';
import './Game.css';
import images from '../../utils/images';
import Image from '../Image/Image';

class Game extends React.Component {

    state = {
        images: images,
        selected: [],
        your_score: 0,
        high_score: 0
    };

    shuffleList = e => {

        console.log('You clicked me!');
        console.log(this);
        // this.setState({
        //     your_score: this.state.your_score + 1
        // })
    }

    render() {
        return (
            <div className="game">
                <div className="score">
                    Click on an image below to earn points, but don't click any more than once.
                    <h3>Your Score: {this.state.your_score} | High Score: {this.state.high_score}</h3>
                </div>
                <div className="board">
                    {this.state.images.map(img => {
                        return (
                            <Image 
                                source={img.ref}
                                chooseImage={() => this.shuffleList()}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Game;