import React from 'react'
import Layout from '../window/Layout'

const renderTech = techs =>
    techs.map((tech, index) => <li key={index}>{tech}</li>)
const renderImages = images =>
    images.map((image, index) => (
        <img key={index} className="portfolio__image" src={image} />
    ))

const Portfolio = props => {
    let { detail, onClose, x, y } = props

    if (!detail) detail = {}

    const { title, body, git, images, tech } = detail

    return (
        <Layout x={x} y={y} title={title} onClose={onClose}>
            {images && renderImages(images)}
            <div className="devider" />
            <div className="portfolio__about">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            <div className="devider" />

            <div className="portfolio__techsheet">
                <h1>Technical Sheet</h1>
                <ul>{tech && renderTech(tech)}</ul>
            </div>

            <div className="devider" />

            <div className="portfolio__resources">
                <h1>Resources</h1>
                <span>
                    git:{' '}
                    <a href={git} target="__blank">
                        {git}
                    </a>
                </span>
            </div>
        </Layout>
    )
}

export default Portfolio
