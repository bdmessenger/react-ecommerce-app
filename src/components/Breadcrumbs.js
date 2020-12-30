import React from 'react'
import PropTypes from 'prop-types'

function Breadcrumbs({children}){
    const arr = Array.from(children);
    return(
        <section className="bg-blue-100">
            <div className="tw-container py-8 md:py-16">
            {
                arr.map((child, i) => (
                    <span key={i} className={`text-xl md:text-3xl lg:text-4xl tracking-wider font-bold capitalize ${arr.length - 1 !== i ? 'text-blue-700' : 'text-blue-900'}`}>
                        {child}{(arr.length - 1) !== i ? ' / ' : ''}
                    </span>
                ))
            }
            </div>
        </section>
    );
}

Breadcrumbs.propTypes = {
    children: PropTypes.node.isRequired
}

export default Breadcrumbs