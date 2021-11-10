import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'

const useEffect2 = () => {
    const [size, setSize] = useState(window.screen.width);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize(window.screen.width);
            return () => {
                window.removeEventListener('resize');
            }
        })
    }, [size])
    return (
        <>
            <h1>The Actual Size of Window Is:</h1>
            <h5 className="text-center">{size}px</h5>
        </>
    )
}

export default useEffect2
