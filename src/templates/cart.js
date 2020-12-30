import React, { useContext } from 'react'
import { StoreContext } from '../context'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Breadcrumbs from '../components/Breadcrumbs'
import Counter from '../components/Counter'

export default function Cart() {
    const { isAuthenticated, loginWithRedirect } = useAuth0()
    const { cart, setCart } = useContext(StoreContext)

    const handleAmountChange = (value, max, index) => {
        if(value <= 0 || value > max || !cart[index]) return;
        setCart(cart => {
            cart[index].amount = value;
            return [...cart];
        })
    }

    const handleDeleteItem = (index) => {
        if(!cart[index]) return;
        setCart(cart => cart.filter((_, i) => i !== index))
    }

    const handleClearCart = () => {
        if(window.confirm("You're about to clear shopping cart. Is that okay?")) {
            setCart([]);
        }
    }

    const getSubtotal = () => {
        return cart.reduce((total, item) => {
            total += (item.price * item.amount);
            return total;
        }, 0);
    }

    return(
        <>
        {
            cart.length > 0 ?
            <>
                <Breadcrumbs>
                    <Link to="/">Home</Link>
                    <span>Cart</span>
                </Breadcrumbs>
                <section className="py-12">
                    <div className="tw-container">
                        <article className="hidden lg:block py-10">
                            <div className="grid text-center" style={{gridTemplateColumns: '1fr 1fr 1fr 1fr auto'}}>
                                <h5>Item</h5>
                                <h5>Price</h5>
                                <h5>Quantity</h5>
                                <h5>Subtotal</h5>
                                <span className="w-8 h-8"></span>
                            </div>
                            <hr className="mt-6"/>
                        </article>
                        {
                            cart.map((item, i) => {
                                const {name, price, amount, image, color, max} = item;
                                return (
                                    <article key={i} className="grid cart-grid-cols-3 lg:cart-grid-cols-5 place-items-center mb-6 capitalize">
                                        <div className="flex w-full gap-2 md:gap-4 items-center">
                                            <img alt={name} className="object-cover w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-md" src={image}/>
                                            <div>
                                                <h5 className="text-base md:text-lg lg:text-xl font-semibold">{name}</h5>
                                                <div className="flex items-center gap-2 text-sm lg:text-base">Color: <div style={{background: color }} className="w-3 h-3 lg:w-4 lg:h-4 rounded"/></div>
                                                <div className="lg:hidden">{price.toCurrency()}</div>
                                            </div>
                                        </div>
                                        <h5 className="hidden lg:block">{price.toCurrency()}</h5>
                                        <Counter
                                            className="text-3xl md:text-4xl"
                                            count={amount}
                                            setCount={(value) => handleAmountChange(value, max, i)}
                                            maxNum={max}
                                        />
                                        <h5 className="hidden lg:block">{(amount * price).toCurrency()}</h5>
                                        <button className="block ml-3 md:ml-0 w-7 h-7 p-2 bg-red-600 text-white rounded" onClick={() => handleDeleteItem(i)}>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
                                        </button>
                                    </article>
                                )
                            })
                        }
                        <hr className="mt-10"/>
                        <div className="flex justify-between py-8">
                            <Link to="/products" className="btn-sm w-max bg-blue-500 text-white text-bold">Continue Shopping</Link>
                            <button onClick={handleClearCart} className="btn-sm font-bold text-red-900 bg-red-300">Clear Cart</button>
                        </div>
                        <section className="flex justify-center lg:justify-end">
                            <div className="w-full md:w-auto">
                                <article className="md:border px-4 py-2 md:px-12 md:py-6">
                                    <h6 className="grid" style={{gridTemplateColumns: '200px 1fr'}}>
                                        Subtotal:
                                        <span>{getSubtotal().toCurrency()}</span>
                                    </h6>
                                    <h6 className="grid" style={{gridTemplateColumns: '200px 1fr'}}>
                                        Shipping Fee:
                                        <span>$5.34</span>
                                    </h6>
                                    <hr className="my-4"/>
                                    <h4 className="grid" style={{gridTemplateColumns: '200px 1fr'}}>
                                        Order Total:
                                        <span>{(getSubtotal() + 534).toCurrency()}</span>
                                    </h4>
                                </article>
                                { isAuthenticated ?
                                    <Link to="/checkout" className="mt-4 text-center btn w-full bg-yellow-600 text-blue-50 font-semibold">Proceed To Checkout</Link>
                                    :
                                    <button onClick={loginWithRedirect} className="text-center mt-4 btn w-full bg-yellow-600 text-blue-50 font-semibold">Login</button>
                                }
                            </div>
                        </section>
                    </div>
                </section>
            </>
            :
            <div className="tw-container text-center py-20">
                <h2 className="font-bold">Your cart is empty</h2>
                <Link to="/products" className="mt-5 btn-sm w-max mx-auto">Fill It</Link>
            </div>
        }
        </>
    )
}