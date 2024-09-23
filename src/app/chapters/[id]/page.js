'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import ChapterDetails from '../../components/ChapterDetails'
import { Loader } from '@/app/components/Loader'
import { Error } from '@/app/components/Error'

export default function ChapterPage() {
  const { id } = useParams()
  const [chapter, setChapter] = useState(null)
  const [error, setError] = useState(null)

  // State to determine if next chapter exists
  const [nextChapterExists, setNextChapterExists] = useState(false)

  // Example previous chapter ID
  const prevChapterId = id > 1 ? (parseInt(id) - 1).toString() : null 

  // Check if next chapter ID exists in the database
  const checkNextChapter = async () => {
    const nextId = (parseInt(id) + 1).toString()
    try {
      const response = await fetch(`/api/chapters/${nextId}`)
      setNextChapterExists(response.ok) // true if the chapter exists
    } catch (error) {
      console.error('Error checking next chapter:', error)
      setNextChapterExists(false)
    }
  }

  useEffect(() => {
    // Check for next chapter when the component mounts
    checkNextChapter()
    
    const fetchChapter = async () => {
      try {
        const response = await fetch(`/api/chapters/${id}`)
        if (!response.ok) {
          throw new Error('Error fetching chapter data')
        }
        const data = await response.json()
        setChapter(data)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchChapter()
  }, [id])

  // Apply dark mode from localStorage
  useEffect(() => {
    const storedPreference = localStorage.getItem('theme')
    if (storedPreference === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  if (error) {
    return <Error/>
  }

  if (!chapter) {
    return <Loader/>
  }

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-black'>
      <ChapterDetails
        chapterId={id}
        chapter={chapter}
        prevChapterId={prevChapterId}
        nextChapterId={nextChapterExists ? (parseInt(id) + 1).toString() : null} // Pass the next ID if it exists
      />
    </div>
  )
}
