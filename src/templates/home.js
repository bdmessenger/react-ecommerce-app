import React from 'react'
import { Link } from 'react-router-dom'

const Panel = ({id, name, image, price}) => (
    <article>
        <div className="relative h-56 rounded">
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
            <h6 className="tracking-wider">{name}</h6>
            <p className="text-blue-500 tracking-widest">{price.toCurrency()}</p>
        </footer>
    </article>
)

const ServiceBox = ({title, children}) => (
    <div className="flex flex-col bg-blue-600 px-8 py-10 gap-4 rounded-md justify-center items-center">
        <div className="relative mx-auto w-16 h-16 rounded-full bg-blue-400 flex justify-center items-center p-2.5">
            {children} 
        </div>
        <div>
            <h4 className="font-semibold">{title}</h4>
            <p className="mt-2 leading-7 w-full text-sm md:text-base lg:text-lg">
                Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Voluptates, ea. Perferendis 
                corrupti reiciendis nesciunt rerum velit autem 
                unde numquam nisi
            </p>
        </div>
    </div>
)

const Home = () => (
    <>
        <section id="showcase" className="py-16">
            <div className="tw-container grid lg:grid-cols-2 place-items-center gap-x-32">
                <article>
                    <h1 className="tracking-wider font-bold text-4xl md:text-5xl">
                        Design Your<br/>
                        Comfort Zone
                    </h1>
                    <p className="mt-8 max-w-lg leading-loose ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Iusto, at sed omnis corporis doloremque possimus velit! 
                        Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero 
                        et quia tempora excepturi quis alias?
                    </p>
                    <Link to="/products" className="btn px-6 py-3 bg-blue-500 text-white w-full md:w-max text-center mt-8">Shop Now</Link>
                </article>
                <article id="showcase-image" className="relative hidden lg:block">
                    <img 
                        alt="dining-room-example"
                        style={{
                            height: '550px',
                        }}
                        className="object-cover bg-gray-100 w-full rounded-md"
                        src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
                    />
                    <img
                        alt="media-shelves-room"
                        className="z-30 bg-gray-100 transform -translate-x-2/4 absolute left-0 bottom-0  w-5/12 h-40 rounded-md"
                        src="https://dl.airtable.com/.attachments/d42fd61c4d1ae2a02afe29114bd0fef3/d312dda5/product-2.jpg"
                    />
                </article>
            </div>
        </section>
        <section id="featured-products" className="bg-gray-100">
            <div className="tw-container py-14">
                <div>
                    <h2 className="text-center font-bold text-3xl lg:text-4xl">Featured Products</h2>
                    <div className="mt-3 w-24 h-1 bg-blue-400 mx-auto"/>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <Panel
                        id="rec3jeKnhInKHJuz2"
                        name="vase table"
                        image="https://dl.airtable.com/.attachments/599ba19cf24d2114fea3c93d40c4e34c/46b486f1/vase-table.jpeg"
                        price={120999}
                    />
                    <Panel
                        id="rec7JInsuCEHgmaGe"
                        name="Utopia Sofa"
                        image="https://dl.airtable.com/.attachments/799a334af47039d9d0482f51f77675e9/bceadec0/product-3.jpg"
                        price={79999}
                    />
                    <Panel
                        id="recNZ0koOqEmilmoz"
                        name="Entertainment Center"
                        image="https://dl.airtable.com/.attachments/d42fd61c4d1ae2a02afe29114bd0fef3/d312dda5/product-2.jpg"
                        price={59999}
                    />
                </div>
                <button className="btn-sm md:btn mt-16 mx-auto bg-blue-500 text-blue-50 font-semibold">All Products</button>
            </div>
        </section>
        <section id="services" className="bg-blue-400">
            <div className="transform py-20 xl:py-0 xl:translate-y-20 tw-container text-blue-50">
                <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 items-center gap-y-4">
                    <h3 className="font-bold">Custom Furniture<br/>Built Only For You</h3>
                    <p className="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-center gap-10">
                    <ServiceBox title="Mission">
                        <svg className="w-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M203.97 23l-18.032 4.844 11.656 43.468c-25.837 8.076-50.32 
                            21.653-71.594 40.75L94.53 80.594l-13.218 13.22 31.376 31.374c-19.467 
                            21.125-33.414 45.53-41.813 71.343l-42.313-11.343-4.843 18.063 42.25 11.313c-6.057 
                            27.3-6.157 55.656-.345 83L23.72 308.78l4.843 18.064 41.812-11.22c6.693 21.225 
                            17.114 41.525 31.25 59.876l-29.97 52.688-16.81 29.593 29.56-16.842 52.657-29.97c18.41 
                            14.216 38.784 24.69 60.094 31.407l-11.22 41.844 18.033 4.81 11.218-41.905c27.345 5.808 
                            55.698 5.686 83-.375l11.312 42.28 18.063-4.81-11.344-42.376c25.812-8.4 50.217-22.315 
                            71.342-41.78l31.375 31.373 13.22-13.218-31.47-31.47c19.09-21.266 32.643-45.738 
                            40.72-71.563l43.53 11.657 4.813-18.063-43.625-11.686c5.68-27.044 
                            5.576-55.06-.344-82.063l43.97-11.78-4.813-18.063L440.908 197c-6.73-20.866-17.08-40.79-31.032-58.844l29.97-52.656 
                            16.842-29.563-29.593 16.844-52.656 29.97c-17.998-13.875-37.874-24.198-58.657-30.906l11.783-44L309.5 
                            23l-11.78 43.97c-27-5.925-55.02-6.05-82.064-.376L203.97 23zm201.56 85L297.25 298.313l-.75.437-40.844-40.875-148.72 
                            148.72-2.186 1.25 109.125-191.75 41.78 41.78L405.532 108zm-149.686 10.594c21.858 0 43.717 5.166 63.594 15.47l-116.625 66.342-2.22 
                            1.28-1.28 2.22-66.25 116.406c-26.942-52.04-18.616-117.603 25.03-161.25 26.99-26.988 62.38-40.468 97.75-40.468zm122.72 
                            74.594c26.994 52.054 18.67 117.672-25.002 161.343-43.66 43.662-109.263 52.005-161.312 25.033l116.438-66.282 2.25-1.25 
                            1.25-2.25 66.375-116.592z"></path>
                        </svg>
                    </ServiceBox>
                    <ServiceBox title="Vision">
                        <svg className="w-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M78.594 20.313c-20.396-.083-40.037 3.83-57.78 12.468C126.016 63.043 213.21 117.8 289.185 187.813c-9.978-45.738-40.414-87.43-79.375-117.78-11.143 8.35-27.725 8.505-41.156.75-13.402-7.74-21.53-22.143-19.906-35.938-23.19-9.237-47.145-14.438-70.156-14.532zm101.625 6.625c-5.215.166-9.516 2.475-11.532 5.968-3.442 5.962-.55 15.975 9.343 21.688 9.894 5.713 19.997 3.212 23.44-2.75 3.44-5.962.58-16.006-9.314-21.72-3.71-2.14-7.465-3.108-10.875-3.186-.354-.01-.714-.012-1.06 0zm-43.25 73.906L31.75 283.188c5.972 8.454 13.093 14.29 25.125 15.062l105.47-182.78c-8.03-5.31-16.5-10.178-25.376-14.626zm194.78 6.25l-17.406 10.78-10.22 66.657 38.313-59.124-10.687-18.312zm-140.344 61.72l-21.844 13.467 14.375 17.314 86.157-4.75-78.688-26.03zm209.75.686l-3.78 1.156-181.095 55.906-3.75 1.188-1.81 3.5-42.314 82.875-3.625 7.125 6.47 4.688 216.53 157.25 10.126 7.343 4.156-11.81 88.563-251.44 2.656-7.5-7-3.81-81.655-44.564-3.47-1.906zm-2.03 20.188l63.28 34.562-65.97 20.344-33.248-43.813 35.937-11.093zm-54.97 16.968l33.28 43.813L279 280.843l2.78-54.938 62.376-19.25zM262.78 231.78L260 286.72l-67.22 20.75 32.782-64.19 37.22-11.5zm202.5 11.126L400 428.312l4.063-166.5 61.218-18.906zm-80.06 24.72l-4.064 166.5-98.812-134.72 102.875-31.78zm-121.783 37.593L364.75 443.374 201.062 324.5l62.375-19.28z" fillRule="evenodd"></path></svg>
                    </ServiceBox>
                    <ServiceBox title="History">
                        <svg className="w-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M453.295 17.117c-.546 7.232 1.619 15.478 5.957 22.612 4.338 7.133 10.666 12.847 17.338 15.69 9.655-11.206-5.483-37.974-20.092-38.624-1.09-.07-2.254.137-3.203.322zm-111.547 8.38L329.492 49.61l61.018 100.326 25.627-2.127 13.676-21.777-9.063-14.9-27.34 16.628-37.931-62.371L350.8 57.7l27.34-16.628-9.346-15.368zm93.977 1.62l-60.194 36.61 23.905 39.303 60.193-36.61c-6.345-4.604-11.676-10.635-15.754-17.34-4.078-6.704-6.981-14.21-8.15-21.963zm-125.01 19.711l-161.647 2.62c10.403 24.036 7.492 47.197-4.388 65.648-18.658-14.237-44.341-15.374-63.407-17.717-14.06 123.827-6.22 225.967-6.271 342.149-.004 9.469-1.157 23.12 4.826 32.947 1.887 3.1 4.37 5.928 8.129 8.342 17.708-6.206 41.405-12.44 54.87-22.274-6.951-.825-14.755.952-21.138.955-8.458-.04-19.144-6.11-24.748-19.496-2.919-6.973-6.636-18.193-.181-29.072 2.838-4.785 9.383-10.302 14.26-10.328 94.651.504 191.392-.32 279.568.154-5.523-76.851-10.013-154.096-5.53-232.308l-4.146.343-14.842-24.404-66.867 40.668 6.781 10.598-15.162 9.699-59.097-92.371 15.16-9.7L255 115.966l68.46-41.637-11.95-19.65-2.606-4.285zm-180.17 4.383c-15.366 8.213-29.102 17.702-40.99 28.707 16.167 1.495 33.74 3.063 48.64 9.95 3.139-13.836-3.247-26.896-7.65-38.657zm202.268 38.494l-66.645 40.534 7.275 11.962 33.325-20.265 9.351 15.377-33.322 20.267 7.277 11.963 66.643-40.533zM201.41 136.278l.445 17.992c-30.522.253-58.62 2.029-90.013 2.11V138.38a35163.72 35163.72 0 0 0 89.568-2.103zm144.983 78.98l.24 17.996-234.346 3.143-.242-17.996zm.078 40.684l.408 17.992-123.654 2.81-.41-17.994zm-235.178 3.097h90.602v17.998h-90.602zm234.795 33.237l.406 17.992-62.158 1.406-.406-17.994zm-83.686 1.455l.338 17.996-150.3 2.808-.337-17.994zm85.946 52.806l.402 17.995-125.647 2.808-.402-17.992zm-196.323 70.79c10.05 9.261 17.925 22.065 15.078 36.718-2.074 10.682-10.422 17.606-19.814 23.106s-20.775 9.866-32.512 13.914a1395.68 1395.68 0 0 1-12.238 4.154l301.387-7.672c7.772-.45 14.658-5.66 19.734-13.406 5.082-7.754 7.477-17.817 6.895-23.236-.583-5.419-4.857-14.677-10.973-21.48-6.116-6.805-13.547-10.824-19.025-10.618l-.198.008zm-39.785 2.787c-1.07 1.802-.466 8.714 1.303 12.939 3.72 8.887 6.028 8.437 8.232 8.447 8.877 2.102 17.347.269 25.85-1.025-2.053-4.123-5.283-8.704-10.283-12.113-4.12-2.809-20.675-15.634-25.102-8.248z"></path></svg>
                    </ServiceBox>
                </div>
            </div>
        </section>
        <section id="newsletter">
            <div className="tw-container my-16 md:my-32 lg:my-64">
                <h2 className="font-bold">Join our newsletter and get 20% off</h2>
                <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 items-center gap-x-32">
                    <p className="leading-7 mt-8 max-w-lg opacity-60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Placeat sint unde quaerat ratione soluta veniam provident 
                        adipisci cumque eveniet tempore?
                    </p>
                    <form className="mt-6 md:mt-0 grid grid-cols-1 md:grid-cols-2 md:border-2 border-blue-500 rounded w-full max-w-lg  text-base md:text-lg lg:text-xl" style={{gridTemplateColumns: '1fr auto'}}>
                        <input className="bg-gray-100 border border-blue-400 md:bg-transparent md:border-0 px-3 py-2 outline-none" type="email" placeholder="Enter Email"/>
                        <button className="mt-4 md:mt-0 rounded btn-form bg-blue-500 text-white font-semibold md:rounded-none" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    </>
)

export default Home