import React from "react"
import "./Buttons.scss"

const ButtonBack = () => {
    return (
        <button className='button button-back'>
            <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <rect x='13.5005' y='24.0001' width='21.2133' height='5.30333' rx='2.65167' transform='rotate(-45 13.5005 24.0001)' />
                <path d='M15.375 22.1249C16.4106 21.0893 18.0895 21.0893 19.125 22.1249L30.3751 33.375C31.4106 34.4105 31.4106 36.0894 30.3751 37.125V37.125C29.3396 38.1605 27.6606 38.1605 26.6251 37.125L15.375 25.8749C14.3395 24.8394 14.3395 23.1604 15.375 22.1249V22.1249Z' />
            </svg>
        </button>
    )
}

export default ButtonBack
