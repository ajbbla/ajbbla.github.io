import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useVisitedPages } from '../contexts/VisitedPagesContext'

// Handles redirection logic based on query parameters
const Redirector = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { markPageAsVisited } = useVisitedPages()

    useEffect(() => {
        // Extract page name from pathname and increment visit count
        const pageName = pathname.replace('/', '')
        console.log(`PAGENAME: ${pageName}`)

        if (pageName) {
            markPageAsVisited(pageName)
        }
    }, [pathname])

    return null // no need to render anything
}

export default Redirector
