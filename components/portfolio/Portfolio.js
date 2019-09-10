import React, { useState, useContext } from 'react'
import Layout from '../window/Layout'
import Icon from '../Icon'
import Button from '../Button'
import { deletePortfolio } from '../../actions'
import { toastContext } from '../../context/toastContext'

const renderTech = techs =>
    techs.map((tech, index) => <li key={index}>{tech}</li>)
// const renderImages = images =>
//     images.map((image, index) => (
//         <img
//             key={index}
//             className="portfolio__image"
//             src={`port-images/${image}`}
//         />
//     ))
let currentIndex = 0
const Portfolio = props => {
    let { detail, onClose, x, y } = props

    if (!detail) detail = {}

    const toastCtx = useContext(toastContext)

    const { title, body, git, images, techs, _id } = detail

    let lastIndex = images.length - 1

    const [currentImage, setCurrentImage] = useState(images[0])
    const [nextBtnDisabled, setNextBtnDisabled] = useState(false)
    const [prevBtnDisabled, setprevBtnDisabled] = useState(false)

    const nextImage = () => {
        currentIndex++
        setprevBtnDisabled(false)
        setNextBtnDisabled(false)

        if (currentIndex >= lastIndex) {
            currentIndex = lastIndex
            setNextBtnDisabled(true)
        }

        setCurrentImage(images[currentIndex])
    }
    const prevImage = () => {
        currentIndex--
        setNextBtnDisabled(false)
        setprevBtnDisabled(false)

        if (currentIndex <= 0) {
            currentIndex = 0
            setprevBtnDisabled(true)
        }
        setCurrentImage(images[currentIndex])
    }

    const handleDelete = async () => {
        try {
            await deletePortfolio(_id)

            toastCtx.addToast('포트폴리오가 완벽하게 지워졌습니다.')
            onClose()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Layout x={x} y={y} title={title} onClose={onClose}>
            <div className="images__box">
                <img
                    className="portfolio__image"
                    src={`port-images/${currentImage}`}
                />

                <div className="box__btns">
                    <Button
                        title="이전"
                        disabled={prevBtnDisabled}
                        onClick={prevImage}
                    ></Button>
                    <Button
                        title="다음"
                        disabled={nextBtnDisabled}
                        onClick={nextImage}
                    ></Button>
                </div>

                {/* {images && renderImages(images)} */}
            </div>

            <div className="devider" />
            <div className="portfolio__about">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            <div className="devider" />

            <div className="portfolio__techsheet">
                <h1>Technical Sheet</h1>
                <ul>{techs && renderTech(techs)}</ul>
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

            {/* 관리자만 볼 수 있는 메뉴 */}
            <div className="portfolio__tools">
                <Button title="삭제" onClick={handleDelete}></Button>
                <Button title="수정" onClick={() => {}}></Button>
            </div>
        </Layout>
    )
}

export default Portfolio
