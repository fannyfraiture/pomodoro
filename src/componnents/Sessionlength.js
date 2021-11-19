import React from 'react';

function Sessionlength(props) {
    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }

    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }

    return (

        <section>
            <h4>Work</h4>
        <section className="interval-container">
            <button onClick={decreaseSession}>Down</button>
            <p className="interval-length">{props.sessionLength}</p>
            <button onClick={increaseSession}>Up</button>

        </section>
        </section>
    )
}

export default Sessionlength;