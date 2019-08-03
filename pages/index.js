import React from 'react'
import Typed from 'react-typed'
import Portfolios from '../components/portfolios/Portfolios'
import Landing from '../components/Landing'
import Container from '../components/shared/Container'
import '../styles/home.css'
import { Card, CardFlexContainer } from '../components/card'
const roles = [
    'Developer',
    'Tech Lover',
    'Team Player',
    'Course Creater',
    'React.js'
]

class Home extends React.Component {
    render() {
        return (
            <section className="home">
                <Landing />
                <h1 className="title">
                    <Typed
                        loop
                        typeSpeed={66}
                        backSpeed={66}
                        strings={roles}
                        smartBackspace
                        shuffle={false}
                        backDelay={1000}
                        loopCount={0}
                        showCursor
                        cursorChar="|"
                    />
                </h1>
                {/* <div className="arrow-down" /> */}
                <Container>
                    <h1 className="featured-work">
                        featured work <span>.</span>
                    </h1>

                    <CardFlexContainer>
                        <Card color="dark" />
                        <Card />
                        <Card color="dark" />
                        <Card />
                        <Card color="dark" />
                        <Card />
                        <Card color="dark" />
                    </CardFlexContainer>

                    <div className="more-work">
                        <button>See all works</button>
                    </div>
                </Container>
            </section>
        )
    }
}

export default Home
