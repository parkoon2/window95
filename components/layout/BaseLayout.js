import React from 'react'
import Meta from '../shared/Meta'
import styled from 'styled-components'

const BaseLayout = ({ children }) => {
    return (
        <>
            <Meta />
            {/* <NavBar /> */}

            {/* <Container> */}
            {children}
            {/* <Footer /> */}
            {/* </Container> */}
        </>
    )
}

export default BaseLayout
