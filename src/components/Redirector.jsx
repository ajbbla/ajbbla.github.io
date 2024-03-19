import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useVisitedPages } from '../contexts/VisitedPagesContext'

// Handles redirection logic based on query parameters
const Redirector = () => {
    const { pathname } = useLocation()
    const { markPageAsVisited } = useVisitedPages()

    useEffect(() => {
        // Extract page name from pathname and increment visit count
        const pageName = pathname.replace('/', '')

        if (pageName) {
            markPageAsVisited(pageName)
        }
    }, [pathname])

    return null // no need to render anything
}

export default Redirector