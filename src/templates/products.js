import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ColorSelector from '../components/ColorSelector'
import ProductPanel from '../components/ProductPanel'
import { StoreContext } from '../context'

const CATEGORIES = [
    'bedroom',
    'office',
    'kitchen',
    'living room',
    'kids',
    'dining'
]

const COMPANIES = [
    'ikea',
    'marcos',
    'liddy',
    'caressa'
]

const COLORS = [
    '#0000ff',
    '#000',
    '#ff0000',
    '#ffb900',
    '#00ff00'
]

export default function Products() {
    const {
        query, setQuery,
        categoryIndex, setCategoryIndex,
        freeShipping, setFreeShipping,
        price, setPrice, 
        colorIndex, setColorIndex,
        companyIndex, setCompanyIndex,
        sortByIndex, setSortByIndex,
        viewGrid, setViewGrid,
        products, clearFilters
    } = useContext(StoreContext)

    const filteredProducts = products && products.filter(product => {
        if(
            (query.trim() !== '' && !product.name.includes(query.trim().toLowerCase())) ||
            ((categoryIndex > -1 && categoryIndex < 6) && product.category !== CATEGORIES[categoryIndex]) ||
            ((companyIndex > -1 && companyIndex < 4) && product.company !== COMPANIES[companyIndex]) ||
            ((colorIndex > -1 && colorIndex < 5) && product.colors.find(c => c !== COLORS[colorIndex])) ||
            (product.price > price) ||
            (freeShipping && (!product.hasOwnProperty('shipping') || !product.shipping))
        ) return false;
        return true;
    })

    const sortProducts = (products, index) => {
        if(index < 0 || index > 4) return products;
        switch(index) {
            case 0:
                return products.sort((a, b) => a.price - b.price);
            case 1:
                return products.sort((a, b) => a.price - b.price).reverse();
            case 2:
                return products.sort((a,b) => {
                    const aName = a.name.toLowerCase();
                    const bName = b.name.toLowerCase();
                    if(aName < bName) return -1;
                    if(aName > bName) return 1;
                    return 0;
                });
            case 3:
                return products.sort((a,b) => {
                    const aName = a.name.toLowerCase();
                    const bName = b.name.toLowerCase();
                    if(aName < bName) return -1;
                    if(aName > bName) return 1;
                    return 0;
                }).reverse();
            default:
                return products;
        }
    }

    return(
        <>
            <Breadcrumbs>
                <Link to='/'>Home</Link>
                <span>Products</span>
            </Breadcrumbs>
            <section>
                <div className="tw-container py-10 flex flex-col md:flex-row gap-10">
                    <section id="filters">
                        <div className="sticky top-10 flex flex-col gap-4">
                            {/* Search Input */}
                            <input 
                                type="text" 
                                placeholder="Search"
                                value={query}
                                className="bg-gray-200 w-5/12 md:w-full py-1 px-2 rounded"
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            {/* Categories */}
                            <div id="categories">
                                <h5>Category</h5>
                                <ul className="mt-2">
                                    <li>
                                        <button
                                            onClick={() => setCategoryIndex(-1)}
                                            className={`${categoryIndex === -1 ? 'underline' : ''}`}
                                        >All</button>
                                    </li>
                                    {
                                        CATEGORIES.map((category, i) => (
                                            <li key={i} className="capitalize">
                                                <button
                                                    onClick={() => setCategoryIndex(i)}
                                                    className={`${categoryIndex === i ? 'underline' : ''}`}
                                                >
                                                    {category}
                                                </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            {/* Companies */}
                            <div id="companies-form">
                                <h5>Company</h5>
                                <select className="mt-2" value={companyIndex} onChange={(e) => setCompanyIndex(parseInt(e.target.value))}>
                                    <option value={-1}>all</option>
                                    {
                                        COMPANIES.map((company, i) => (
                                            <option key={i} value={i}>{company}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            {/* Colors */}
                            <div id="colors">
                                <h5>Colors</h5>
                                <div className="mt-2 flex items-center gap-3">
                                    <button
                                        onClick={() => setColorIndex(-1)}
                                        className={`${colorIndex === -1 ? 'underline' : ''}`}
                                    >All</button>
                                    <ColorSelector 
                                        colors={COLORS} 
                                        index={colorIndex}
                                        setIndex={setColorIndex}
                                    />
                                </div>
                            </div>
                            {/* Price */}
                            <div id="price-range">
                                <h5>Price</h5>
                                <p className="mt-2">{price.toCurrency()}</p>
                                <input 
                                    type="range" 
                                    min={0} 
                                    max={309999}
                                    onChange={(e) => setPrice(parseInt(e.currentTarget.value))}
                                    value={price}
                                />
                            </div>
                            {/* Free Shipping */}
                            <div id="free-shipping" className="flex gap-1 items-center">
                                <label>Free Shipping</label>
                                <input 
                                    type="checkbox" 
                                    checked={freeShipping}
                                    onChange={() => setFreeShipping(state => !state)}
                                />
                            </div>
                            <button className="btn-sm bg-red-300 text-red-900 font-bold" onClick={clearFilters}>Clear Filters</button>
                        </div>
                    </section>
                    <section id="products" className="w-full">
                        <article id="list-header" className={"flex flex-col md:grid md:items-center gap-y-2 gap-x-6"} style={{gridTemplateColumns: 'auto auto 1fr auto'}}>
                            <div className="btn-container">
                                <button 
                                    className={`border border-black rounded w-6 md:w-7 p-1 ${viewGrid ? 'bg-black text-white' : ''}`}
                                    onClick={() => setViewGrid(true)}
                                >
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z" clipRule="evenodd"></path></svg>
                                </button>
                                <button 
                                    className={`border border-black rounded w-6 md:w-7 p-1 ${!viewGrid ? 'bg-black text-white' : ''}`}
                                    onClick={() => setViewGrid(false)}
                                >
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <p>{filteredProducts && filteredProducts.length} Products Found</p>
                            <hr/>
                            <form>
                                <label>Sort By: </label>
                                <select className="px-2 py-1" value={sortByIndex} onChange={(e) => setSortByIndex(parseInt(e.target.value))}>
                                    <option value={0}>Price (Lowest)</option>
                                    <option value={1}>Price (Highest)</option>
                                    <option value={2}>Name (A-Z)</option>
                                    <option value={3}>Name (Z-A)</option>
                                </select>
                            </form>
                        </article>
                        <article id="products-list">
                            <div className={`mt-6 ${viewGrid ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8" : ''}`}>
                            {
                                sortProducts(filteredProducts, sortByIndex).map(product => (
                                    <ProductPanel
                                        key={product.id}
                                        {...product}
                                        grid={viewGrid}
                                    />
                                ))
                            }
                            </div>
                        </article>
                    </section>
                </div>
            </section>
        </>
    )
}