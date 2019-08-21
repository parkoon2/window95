import Layout from '../window/Layout'
import Button from '../Button'
import axios from 'axios'
import { useState, useRef } from 'react'

const Google = ({ x, y, onClose }) => {
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
            title="Internet"
            noActionbar={true}
            width="670px"
            height="480px"
        >
            {/* <iframe src="https://www.youtube.com/" /> */}
            <h1>
                <span>G</span>
                <span>o</span>
                <span>o</span>
                <span>g</span>
                <span>l</span>
                <span>e</span>
            </h1>
            <form
                action="http://google.com/search?q=12121"
                target="_blank"
                method="GET"
                onSubmit={e => console.log(e.target.submit())}
                ref={formRef}
            >
                {/* <input name="q" /> */}
                <input
                    ref={nomalSearchRef}
                    name={`q`}
                    onChange={handleOnChange}
                    value={searchValue}
                />
                {/* https://www.google.com/search?q=your+search+query+here&btnI= */}
                {/* https://www.google.com/search?q= */}
                <Button
                    title="Google Search"
                    onClick={() => {
                        formRef.current.dispatchEvent(new Event('submit'))
                    }}
                />
                <input type="submit" />
            </form>
        </Layout>
    )
}

export default Google
