# Record Store Shopping

## __How to play__

### This is a game built with React. The goal is to click the records for points. If you select the same record twice, you lose. [Play now and try to beat your high score!](https://mpaitgt.github.io/clicky/)

![](clicky-example.gif)

---

## __App Structure__

### This app is structured into several components - the _Navbar_, _Game_, and _Image_ components.

### The state of the game and all of the in-game logic are all handled by the _Game_ component, and passed down into the _Image_ component. See below for the game's state:

```
    state = {
        images: images,
        selected: [],
        your_score: 0,
        high_score: 0,
        status: 'Click on an image below to earn points, but don\'t click any more than once.'
    };
```

### Likewise, the score is determined after each click with the __determineScore__ function. If the user clicks the same image twice, the __resetGame__ function runs and resets the state of the application.

```
    determineScore = (i) => {
        if (this.state.selected.includes(i.id)) {
            this.resetGame();
        } else {
            this.state.selected.push(i.id);
            this.setState({
                your_score: this.state.your_score + 1,
                status: 'You guessed correctly!'
            })  
        }
        this.shuffleList();
    }
```
---
## __Technologies used__

- React
- JSX
- Javascript
- CSS / CSS Grid
---
## __Collaborators__

Matt Pignatore - mpaitgt
