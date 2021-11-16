import { useState, useEffect } from 'react'

export const useWindowSize = () => {
    const [size, setSize] = useState([0, 0])
    
    useEffect(() => {
        let timeout = null
        const updateSize = () => {
            clearTimeout(timeout)
            const { innerWidth, innerHeight } = window
            timeout = setTimeout(() => {
                setSize([innerWidth, innerHeight])
            }, 150)
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return size
}