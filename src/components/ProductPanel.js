import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProductPanel = ({id, name, image, price, grid = true}) => {

    if(grid) {
        return(
            <article>
                <div className="relative h-48 rounded">
                    <img
                        alt={name}
                        className="h-full rounded bg-black object-cover w-full"
                        src={image}
                    />
                    <div className="absolute top-0 left-0 w-full h-full rounded transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100 flex justify-center items-center bg-opacity-40 bg-gray-800">
                        <Link to={`/products/${id}`} className="cursor-pointer relative w-10 h-10 text-white rounded-full bg-blue-500 p-2.5">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                        </Link>
                    </div>
                </div>
                <footer className="flex justify-between items-center mt-4 capitalize">
                    <h6>{name}</h6>
                    <p className="text-blue-500 tracking-widest">{price.toCurrency()}</p>
                </footer>
            </article>
        )
    }

    return(
        <article className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-10">
            <div className="relative h-48 w-10/12 md:w-7/12 lg:w-4/12 rounded">
                <img
                    alt={name}
                    className="h-full rounded bg-black object-cover w-full"
                    src={image}
                />
            </div>
            <footer className="w-full lg:w-8/12 flex flex-col gap-3 justify-center capitalize">
                <div>
                    <h4 className="font-bold">{name}</h4>
                    <p className="text-blue-500 tracking-widest font-semibold">{price.toCurrency()}</p>
                </div>
                <p>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic ...</p>
                <Link to={`/products/${id}`} className="btn bg-blue-500 text-white w-max text-xs">
                    Details
                </Link>
            </footer>
        </article>
    )
}

ProductPanel.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    grid: PropTypes.bool
}

export default ProductPanel