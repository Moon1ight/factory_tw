import React from "react"
import "./Payment.scss"
import Header from "./Header/Header"
import Check from "./Check/Check"
import Arrow from "./Arrow"

const Payment = () => {
    return (
        <div className='payment'>
            <Header />
            <Check />
            <Arrow />
        </div>
    )
}

export default Payment
