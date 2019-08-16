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
                // onDoubleClick={() => handleDoubleClick(icon)}
            >
                <Icon name="computer" title="About me" />
            </li>
            <li
                className="item"
                style={{ top: 100, left: 0 }}
                // onDoubleClick={() => handleDoubleClick(icon)}
            >
                <Icon name="recyclebin" title="Recycle Bin" />
            </li>
            <li
                className="item"
                style={{ top: 190, left: 0 }}
                // onDoubleClick={() => handleDoubleClick(icon)}
            >
                <Icon name="internet" title="The internet" />
            </li>
            <li
                className="item"
                style={{ top: 280, left: 0 }}
                // onDoubleClick={() => handleDoubleClick(icon)}
            >
                <Icon name="inbox" title="Contact me" />
            </li>
            <li
                className="item"
                style={{ top: 370, left: 0 }}
                onDoubleClick={windowCtx.openFolder.bind(
                    this,
                    'Portfolios',
                    portfolios
                )}
            >
                <Icon name="briefcase" title="Portfolios" />
            </li>
            <li
                className="item"
                style={{ top: 460, left: 0 }}
                onDoubleClick={createPortfolioHandler}
            >
                <Icon name="portfolio-form" title="Create Portfolio" />
            </li>
        </ul>
    )
}

export default Nav
