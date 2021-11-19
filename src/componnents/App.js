import React from 'react';
import '../App.css';
import Breakinterval from './Breakinterval';
import Sessionlength from './Sessionlength';
import Timer from './Timer'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            breakLength: 5,
            sessionLength: 25,
            TimerMinute: 25, 
            isPlay: false
        };

        this.onIncreaseBreaklength = this.onIncreaseBreaklength.bind
        (this);

        this.onDecreaseBreaklength = this.onDecreaseBreaklength.bind
        (this);
        this.onIncreaseSessionlength = this.onIncreaseSessionlength.bind
        (this);

        this.onDecreaseSessionlength = this.onDecreaseSessionlength.bind
        (this);
        this.onToggleInterval = this.onToggleInterval.bind
        (this);
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind
        (this);
        this.onPlayStopTimer = this.onPlayStopTimer.bind
        (this);
        this.onResetTimer = this.onResetTimer.bind
        (this);
    }

    

    onIncreaseBreaklength() {
        this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength + 1
            }
        })
    }

    onDecreaseBreaklength() {
        this.setState(prevState => {
            return {
                breakLength: prevState.breakLength - 1
            };
        });
    }

    onIncreaseSessionlength() {
        this.setState(prevState => {
            return {
                sessionLength: prevState.sessionLength + 1,
                timerMinute: prevState.sessionLength + 1,
            };
        });
    }

    onDecreaseSessionlength() {
        this.setState(prevState => {
            return {
                sessionLength: prevState.sessionLength - 1,
                timerMinute: prevState.sessionLength - 1,
            };
        });
    }

    onUpdateTimerMinute() {
        this.setState((prevState) => {
        return {
            timerMinute: prevState.timerMinute - 1
        }
    })
    }

    onToggleInterval(isSession) {
        if (isSession) {
        this.setState({
            timerMinute: this.state.sessionLength   
    })
    } else {
        this.setState({
            timerMinute: this.state.breakLength
        })
    }
}

    onResetTimer(){
        this.setState({
            timerMinute: this.state.sessionLength
        })
    }

    onPlayStopTimer(isPlay) {
        this.setState({
            isPlay: isPlay
        })
    }


    render(){

    return (
        <main>
            <h2>Pomodoro Clock</h2>
            <section className="interval-length-container">
                <Breakinterval 
                isPlay={this.state.isPlay}
                breakInterval={this.state.breakLength}
                increaseBreak={this.onIncreaseBreaklength}
                decreaseBreak={this.onDecreaseBreaklength} 
                />

                <Sessionlength 
                isPlay={this.state.isPlay}
                sessionLength={this.state.sessionLength}
                increaseSession={this.onIncreaseSessionlength}
                decreaseSession={this.onDecreaseSessionlength} />
            </section>

            <Timer 
            timerMinute={this.state.timerMinute}
            breakTimer={this.state.breakLength} 
            updateTimerMinute={this.onUpdateTimerMinute}
            toggleInterval={this.onToggleInterval}
            resetTimer={this.onResetTimer}
            onPlayStopTimer={this.onPlayStopTimer}
            />

        </main>
    );

    }
    
}

export default App;