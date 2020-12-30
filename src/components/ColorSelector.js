import React from 'react'
import PropTypes from 'prop-types'

const CheckMark = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 
        0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 
        312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 
        36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 
        9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
)


const ColorSelector = ({colors, index = 0, setIndex}) => (
    <div className="flex gap-2">
        {
            colors.map((color, i) => (
                <button
                    key={i}
                    style={{background: color}}
                    className={`
                        w-6 h-6 rounded-full
                        p-1.5 text-white
                        ${index !== i ? 'opacity-50' : ''}
                    `}
                    onClick={() => setIndex(i)}
                >
                {
                    index === i &&
                    <CheckMark/>
                }
                </button>
            ))
        }
    </div>
)

ColorSelector.propTypes = {
    colors: PropTypes.array.isRequired,
    index: PropTypes.number,
    setIndex: PropTypes.func.isRequired
}

export default ColorSelector