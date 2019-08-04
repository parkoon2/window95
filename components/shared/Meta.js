import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
const Meta = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <link
                href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700&display=swap"
                rel="stylesheet"
            />
            <meta
                name="description"
                content="My name is Parkoon and I am an experienced software engineer and web developer. I have a bachelor's degree in Computer engineering and several years of experience working on a wide range of technologies and portfolios from C++ development for ultrasound devices to modern mobile and web applications in React and Angular. Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. I invite you to take my course, where I have put a lot of effort to explain web and software engineering concepts in a detailed, hands-on and understandable way."
            />
            <meta
                name="keywords"
                content="parkoon portfolio, programming, developer, web programmer, fontend developer, backend developer, fullstack developer, blog, html, css, javascript, react, react-native, node, express, mongodb, sql "
            />
            <meta
                property="og:title"
                content="Parkoon - programmer, developer, bloger"
            />
            <meta property="og:locale" content="en_EU" />
            <meta property="og:url" content={`http://localhost:3000`} />
            {/* <meta property="og:url" content={`${process.env.BASE_URL}`} /> */}
            <meta property="og:type" content="website" />
            <meta
                property="og:description"
                content="My name is Park Jong Hyeok and I am an experienced software engineer and full stack developer."
            />
            <script src="https://kit.fontawesome.com/788c552a2d.js" />
            <link rel="icon" type="image/ico" href="/static/favicon.ico" />
        </Head>
    )
}

Meta.propTypes = {
    title: PropTypes.string
}

Meta.defaultProps = {
    title: 'Parkoon Portfolio Page'
}

export default Meta
