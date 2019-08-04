import React from 'react'
// import '../../styles/footer.css'
const Footer = () => {
    return (
        <div className="footer">
            {/* <div className="hr" /> */}
            <div className="contents">
                <div className="col">
                    <div className="title">connect with me</div>
                    <div className="body">
                        <span>ig @parkoon</span>
                    </div>
                </div>
                <div className="col">
                    <div className="title">follow me</div>
                    <div className="body">
                        <span className="fb">fb</span>
                        <span className="gh">gh</span>
                        <span className="tw">tw</span>
                        <span className="yt">yt</span>
                    </div>
                </div>
                <div className="col">
                    <div className="title">say hello</div>
                    <div className="body">
                        <span>devparkoon@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
