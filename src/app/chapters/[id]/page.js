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

  // Example next and previous chapter IDs, you should replace these with actual data from your chapters
  const prevChapterId = id > 1 ? (parseInt(id) - 1).toString() : null // Replace with actual logic
  const nextChapterId = (parseInt(id) + 1).toString() // Replace with actual logic

  useEffect(() => {
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
  }, []) // Only run on mount


  if (error) {
    return <Error/>
  }

  if (!chapter) {
    return <Loader/>
  }

//   const isFirstChapter = chapter.id === 1 // Assuming chapter.id is the ID of the chapter

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-black'>
      <ChapterDetails
        chapterId={id}
        chapter={chapter}
        prevChapterId={prevChapterId}
        nextChapterId={nextChapterId}
      />
    </div>
  )
}
