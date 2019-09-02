import Icon from './Icon'
import { windowContext } from '../context/windowContext'
import { useContext } from 'react'

const Nav = ({ portfolios }) => {
    const windowCtx = useContext(windowContext)
    const isAuthenticated = true

    const createPortfolioHandler = () => {
        if (!isAuthenticated) {
            windowCtx.showWarning(
                '관리자만 접근 할 수 있습니다. 관리자로 로그인 해주세요.'
            )
            return
        }

        windowCtx.openPorfolioForm()
    }
    return (
        <ul className="window__container">
            <li
                className="item"
                style={{ top: 10, left: 0 }}
                onDoubleClick={windowCtx.openAboutMe}
            >
                <Icon name="computer" title="내 컴퓨터" />
            </li>
            <li
                className="item"
                style={{ top: 100, left: 0 }}
                // onDoubleClick={() => handleDoubleClick(icon)}
            >
                <Icon name="recyclebin" title="휴지통" />
            </li>
            <li
                className="item"
                style={{ top: 190, left: 0 }}
                onDoubleClick={windowCtx.openInternet}
            >
                <Icon name="internet" title="인터넷" />
            </li>
            <li
                className="item"
                style={{ top: 280, left: 0 }}
                onDoubleClick={windowCtx.openContact}
            >
                <Icon name="inbox" title="편지쓰기" />
            </li>
            <li
                className="item"
                style={{ top: 370, left: 0 }}
                onDoubleClick={windowCtx.openFolder.bind(
                    this,
                    '포트폴리오',
                    portfolios
                )}
            >
                <Icon name="briefcase" title="포트폴리오" />
            </li>
            <li
                className="item"
                style={{ top: 460, left: 0 }}
                onDoubleClick={createPortfolioHandler}
            >
                <Icon name="portfolio-form" title="문서작성" />
            </li>
        </ul>
    )
}

export default Nav
