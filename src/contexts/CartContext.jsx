import { createContext, useState } from "react"


export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const addItem = (item, quantity) =>
        setItems(prev => [...prev, { ...item, quantity }])

    const removeItem = id => {
        const itemsFiltered = items.filter(item =>item.id != id)
        setItems(itemsFiltered)
    }

    const clear = () => setItems([])
        

    console.log(items)
    return (
        <CartContext.Provider value={{ addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider >
    )
}