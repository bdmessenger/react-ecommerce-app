import React from 'react'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import {StoreProvider} from '../context'
import Navbar from './Navbar'

const Footer = () => (
    <footer className="bg-gray-800">
        <div className="tw-container text-center py-6 text-sm md:text-base text-white tracking-widest">© 2020 Digital Comfort All rights reserved</div>
    </footer>
)

function Content({children}) {
    const { isLoading, error } = useAuth0()

    if(isLoading) return null;
    if(error) return 'error...';

    return(
        <>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default function AppProvider(props){

    return(
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH_DOMAIN}
            clientId={process.env.REACT_APP_CLIENT_ID}
            redirectUri={window.location.origin}
        >
            <StoreProvider>
                <Content {...props}/>
            </StoreProvider>
        </Auth0Provider>
    );
}