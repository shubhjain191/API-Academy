"use client"

import { useState, useMemo } from "react"
import { getAllTopicsData } from "@/lib/data-loader"

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const allTopicsData = getAllTopicsData()

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase()
    const results: Array<{
      topicId: string
      title: string
      description: string
      matchType: "title" | "description" | "content"
      matchedContent?: string
    }> = []

    Object.entries(allTopicsData).forEach(([topicId, data]) => {
      // Search in title
      if (data.title.toLowerCase().includes(query)) {
        results.push({
          topicId,
          title: data.title,
          description: data.description,
          matchType: "title",
        })
        return
      }

      // Search in description
      if (data.description.toLowerCase().includes(query)) {
        results.push({
          topicId,
          title: data.title,
          description: data.description,
          matchType: "description",
        })
        return
      }

      // Search in content
      for (const section of data.sections) {
        if (section.title.toLowerCase().includes(query)) {
          results.push({
            topicId,
            title: data.title,
            description: data.description,
            matchType: "content",
            matchedContent: section.title,
          })
          return
        }

        if (section.items) {
          for (const item of section.items) {
            if (
              item.name?.toLowerCase().includes(query) ||
              item.title?.toLowerCase().includes(query) ||
              item.description?.toLowerCase().includes(query)
            ) {
              results.push({
                topicId,
                title: data.title,
                description: data.description,
                matchType: "content",
                matchedContent: item.name || item.title || item.description,
              })
              return
            }
          }
        }
      }
    })

    return results.slice(0, 10) // Limit results
  }, [searchQuery, allTopicsData])

  const isSearching = searchQuery.trim().length > 0

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
  }
}
