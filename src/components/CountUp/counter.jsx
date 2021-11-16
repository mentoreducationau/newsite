import React, { useState, useEffect, useRef } from 'react'
import useScrollTrigger from '../../hooks/useScrollTrigger';
import { CounterText } from './counter.css'

const easeOutSine = t => -(Math.cos(Math.PI * t) - 1) / 2; // from easings.net
const frameDuration = 1000 / 60;

/*
    contains optional props from styled-comp:
        font    =>  @font-family (default = Futura)
        color   =>  @color (default = #ff0808)
        size    =>  @font-size (default = 18vw)
        weight  =>  @font-weight (default = 900)
*/

const CountUp = ({ children, duration = 5000, ...props }) => {

    let ref = useRef()
    const targetNumber = parseInt(children, 10)
    const [hasScrolled, setScrolled] = useState(false)
    const [displayNumber, setDisplayNumber] = useState(0)

    useScrollTrigger(
        ref,
        triggered => setScrolled(triggered),
        { offset: 30 }
    )

    useEffect(() => {
        let frame = 0;
        const totalFrames = Math.round( duration / frameDuration )

        if (hasScrolled) {
            const counter = setInterval(() => {
                frame++
                var progress = easeOutSine(frame / totalFrames)
                setDisplayNumber(targetNumber * progress)
    
                if (frame === totalFrames) {
                    clearInterval(counter)
                }
            },frameDuration)
        }
    },[hasScrolled, duration, targetNumber])
    
    return (
        <CounterText ref={ref} {...props}>
            {Math.floor(displayNumber)}
        </CounterText>
    )
}

export default CountUp