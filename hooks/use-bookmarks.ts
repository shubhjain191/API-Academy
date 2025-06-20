"use client"

import { useState, useEffect } from "react"

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("api-academy-bookmarks")
    if (saved) {
      setBookmarks(JSON.parse(saved))
    }
  }, [])

  const toggleBookmark = (topicId: string) => {
    setBookmarks((prev) => {
      const newBookmarks = prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]

      localStorage.setItem("api-academy-bookmarks", JSON.stringify(newBookmarks))
      return newBookmarks
    })
  }

  const isBookmarked = (topicId: string) => bookmarks.includes(topicId)

  return { bookmarks, toggleBookmark, isBookmarked }
}
