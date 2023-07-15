import React from 'react'
import Header from './header'

interface Props {
    children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='container mx-auto p-5'>
                {children}
            </div>
        </div>
    )
}

export default Layout