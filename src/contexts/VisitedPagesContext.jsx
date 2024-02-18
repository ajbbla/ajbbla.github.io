import React, { createContext, useContext, useState } from 'react'

const VisitedPagesContext = createContext()

export const useVisitedPages = () => useContext(VisitedPagesContext)

export const VisitedPagesProvider = ({ children }) => {
    const [visitedPages, setVisitedPages] = useState(() => {
        const saved = sessionStorage.getItem('visitedPages')
        return saved ? JSON.parse(saved) : {}
    })

    const markPageAsVisited = (pageName) => {
        // Create a new object with existing visited pages and current visited page
        const newVisitedPages = { ...visitedPages, [pageName]: true }
        setVisitedPages(newVisitedPages)  // update state
        sessionStorage.setItem('visitedPages', JSON.stringify(newVisitedPages))  // update session storage
    }

    return (
        <VisitedPagesContext.Provider value={{ visitedPages, markPageAsVisited }}>
            { children }
        </VisitedPagesContext.Provider>
    )
}