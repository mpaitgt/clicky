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

    shuffleList = () => {
        let shuffle = this.state.images.sort(() => Math.random() - 0.5);
        this.setState({
            images: shuffle
        })
    }

    determineScore = (i) => {
        if (this.state.selected.includes(i.id)) {
            this.resetGame();
        } else {
            this.state.selected.push(i.id);
            this.setState({
                your_score: this.state.your_score + 1
            })  
        }
        this.shuffleList();
    }

    resetGame = () => {
        this.setState({
            images: this.state.images,
            selected: [],
            your_score: 0
        })
        this.newHighScore();
    }

    newHighScore = () => {
        if (this.state.your_score > this.state.high_score) {
            this.setState({
                high_score: this.state.your_score
            }) 
        } else {
            this.setState({
                high_score: this.state.high_score
            }) 
        }
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
                                chooseImage={() => this.determineScore(img)}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Game;