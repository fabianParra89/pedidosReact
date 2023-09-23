import { createContext, useState } from "react"


export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const addItem = (item, quantity) => {
        const alreadyExists = items.some(prod => prod.id === item.id)
        if (!alreadyExists) setItems(prev => [...prev, { ...item, quantity }])
        else {
            const actualizaItems = items.map(prod => {
                if (prod.id === item.id)
                    return {
                        ...prod,
                        quantity: prod.quantity + quantity,
                    }
                else return prod
            })
            setItems(actualizaItems)
        }
    }


const totalWidget = items.reduce((acc, val) => acc + val.quantity, 0)

const removeItem = id => {
    const itemsFiltered = items.filter(item => item.id != id)
    setItems(itemsFiltered)
}

const clear = () => setItems([])

return (
    <CartContext.Provider value={{ addItem, items, removeItem, clear, totalWidget }}>
        {children}
    </CartContext.Provider >
)
}