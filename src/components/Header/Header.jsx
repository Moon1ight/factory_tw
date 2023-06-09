import { formatDate } from "../../utils"
import Clock from "./Clock"

import "./Header.scss"

const Header = () => {
    const date = new Date()

    const cashbox = "Касса #1"

    return (
        <div className='header'>
            <div>{formatDate(date)}</div>
            <div>
                <Clock />
            </div>
            <div>{cashbox}</div>
        </div>
    )
}

export default Header
