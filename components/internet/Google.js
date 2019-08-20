import Layout from '../window/Layout'

const Google = ({ x, y, onClose }) => {
    return (
        <Layout x={x} y={y} onClose={onClose} title="Internet">
            {/* <iframe src="https://www.youtube.com/" /> */}
            <form action="http://google.com/search" target="_blank">
                <input name="q" />>
                <input type="submit" />
            </form>
        </Layout>
    )
}

export default Google
