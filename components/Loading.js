const Loading = () => {
    return (
        <div className="loading-wrapper">
            <div className="header">
                <h1>Microsoft</h1>
            </div>
            <div className="center">
                <img src="/static/images/window95_logo.png" className="logo" />
                <div className="title">
                    <p className="top">Microsoft</p>
                    <h1>Windows</h1>
                    <span>95</span>
                    <p className="bottom">Microsoft Internet Exporler</p>
                </div>
            </div>
            <div className="progress">
                <div className="color-anime" />
            </div>
        </div>
    )
}

export default Loading
