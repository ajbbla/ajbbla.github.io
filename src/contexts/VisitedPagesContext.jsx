import React, { createContext, useCallback, useContext, useState } from 'react'
import { debounce } from 'lodash'

const VisitedPagesContext = createContext()

export const VisitedPagesProvider = ({ children }) => {
    const [visitedPages, setVisitedPages] = useState(() => {
        const saved = sessionStorage.getItem('visitedPages')
        return saved ? JSON.parse(saved) : {}
    })

    // Throttle to once every 100ms for direct URLs/page refreshes
    const markPageAsVisited = useCallback(debounce((pageName) => {
        setVisitedPages(prevVisitedPages => {
            const newVisitedPages = { 
                ...prevVisitedPages, 
                [pageName]: (prevVisitedPages[pageName] || 0) + 1 
            }
            sessionStorage.setItem('visitedPages', JSON.stringify(newVisitedPages))  // update session storage
            return newVisitedPages
        })
    }, 100), [])

    return (
        <VisitedPagesContext.Provider value={{ visitedPages, markPageAsVisited }}>
            { children }
        </VisitedPagesContext.Provider>
    )
}

export const useVisitedPages = () => useContext(VisitedPagesContext)