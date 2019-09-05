import React, { useRef, useEffect, useContext, useState } from 'react'
import Icon from '../Icon'
import { windowContext } from '../../context/windowContext'
import Layout from '../window/Layout'
import { getPortfolios } from '../../actions'

const PortfolioFolder = props => {
    const { title, onClose, x, y } = props

    const windowCtx = useContext(windowContext)
    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                let res = await getPortfolios()
                setPortfolios(res.portfolios)
            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    }, [])

    const renderItems = () => {
        return portfolios.map((portfolio, index) => {
            return (
                <li
                    className="folder"
                    key={index}
                    onDoubleClick={windowCtx.openPortfolio.bind(
                        this,
                        portfolio
                    )}
                >
                    <Icon name="portfolio" title={portfolio.title} />
                </li>
            )
        })
    }

    return (
        <Layout x={x} y={y} title={title} onClose={onClose}>
            <ul className="folder__container">{renderItems()}</ul>
        </Layout>
    )
}

export default PortfolioFolder
