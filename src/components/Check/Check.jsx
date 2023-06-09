import React from "react"

import "./Check.scss"

const Check = () => {
    return (
        <div className='check'>
            <div className='check-content'>
                <div className='check-content-title'>Стоимость покупок</div>
                <div className='check-content-price'>
                    820<span>,95</span>₽
                </div>
                <div className='check-content-description'>
                    Приложите
                    <br />
                    или прокатайте карту
                </div>
            </div>
        </div>
    )
}

export default Check
