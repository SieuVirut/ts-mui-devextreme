import React, { useState } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { MenuLeft } from '../MenuLeft'

export interface ILayoutConsumer {
    expand?: boolean,
    onChangeExpand?: () => void
}
export const LayoutContext = React.createContext({
    expand: false,
    onChangeExpand: () => { }
})

const LayoutProvider = (props) => {

    const [isExpand, setIsExpand] = useState(false)

    const value = {
        expand: isExpand,
        onChangeExpand: () => setIsExpand(!isExpand)
    }
    return <LayoutContext.Provider
        value={value}
    >
        <Header />
        <MenuLeft />
        {props.children}
        <Footer />
    </LayoutContext.Provider>
}

const LayoutConsumer = LayoutContext.Consumer;

export { LayoutProvider, LayoutConsumer };