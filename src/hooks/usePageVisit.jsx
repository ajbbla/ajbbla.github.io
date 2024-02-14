import { useState, useEffect } from 'react'
import { useVisitedPages } from '../contexts/VisitedPagesContext'

const usePageVisit = (pageName) => {
    const { visitedPages, markPageAsVisited } = useVisitedPages()
    const [isVisited, setIsVisited] = useState(visitedPages[pageName] ? true : false)
    const [isTypingDone, setIsTypingDone] = useState(isVisited)

    // Effect to mark the page as visited on first visit
    useEffect(() => {
        if (!isVisited) {
            markPageAsVisited(pageName)
        } 
    }, [isVisited, markPageAsVisited, pageName])

    return { isVisited, isTypingDone, setIsTypingDone }
}

export default usePageVisit