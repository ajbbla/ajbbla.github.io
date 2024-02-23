import { useContext, useEffect, useState } from 'react'
import { useVisitedPages } from '../contexts/VisitedPagesContext'

const usePageVisit = (pageName) => {
    const { visitedPages } = useVisitedPages()
    const visitCount = visitedPages[pageName] || 0

    return { visitCount }
}

export default usePageVisit