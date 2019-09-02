import Layout from '../window/Layout'
import Button from '../Button'
import axios from 'axios'
import { useState, useRef } from 'react'

const Google = ({ x, y, onClose, title }) => {
    const [searchValue, setSearchValue] = useState('')

    const nomalSearchRef = useRef()
    const directSearchRef = useRef()
    const formRef = useRef()

    const handleOnChange = e => {
        setSearchValue(e.target.value)
    }

    return (
        <Layout
            x={x}
            y={y}
            onClose={onClose}
            title={title}
            noActionbar={true}
            width="670px"
            height="480px"
        >
            {/* <iframe src="https://www.youtube.com/" /> */}
            <div className="internet__container">
                <h1 className="internet__title">
                    <span>G</span>
                    <span>o</span>
                    <span>o</span>
                    <span>g</span>
                    <span>l</span>
                    <span>e</span>
                    <span>!</span>
                </h1>

                <span className="internet__subtitle">
                    Search the web using Google
                </span>
                <form
                    // action="http://google.com/search"
                    action="http://google.com/search"
                    target="_blank"
                    method="GET"
                    ref={formRef}
                >
                    {/* <input name="q" /> */}
                    <input
                        ref={nomalSearchRef}
                        name={`q`}
                        onChange={handleOnChange}
                        value={searchValue}
                    />
                    <div className="internet__btns">
                        <Button
                            title="Google Search"
                            onClick={() => {
                                formRef.current.dispatchEvent(
                                    new Event('submit')
                                )
                            }}
                        />
                        <Button
                            title="Im Feel Lucky"
                            onClick={() => {
                                formRef.current.dispatchEvent(
                                    new Event('submit')
                                )
                            }}
                            name="btnI"
                        />
                    </div>
                </form>
                <p className="internet__copyright">
                    Copyright ©1990 Google Inc.
                </p>
            </div>
        </Layout>
    )
}

export default Google
