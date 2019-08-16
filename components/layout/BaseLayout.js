import React from 'react'
import Meta from '../shared/Meta'

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
