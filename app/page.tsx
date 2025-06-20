"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { MainContent } from "@/components/main-content"
import { SearchBar } from "@/components/search-bar"
import { BookmarkManager } from "@/components/bookmark-manager"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Bookmark, BookmarkCheck } from "lucide-react"
import { useBookmarks } from "@/hooks/use-bookmarks"
import { useSearch } from "@/hooks/use-search"

export default function APIAcademy() {
  const [selectedTopic, setSelectedTopic] = useState("http-verbs")
  const [showBookmarks, setShowBookmarks] = useState(false)
  const { bookmarks, toggleBookmark, isBookmarked } = useBookmarks()
  const { searchQuery, setSearchQuery, searchResults, isSearching } = useSearch()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AppSidebar
          selectedTopic={selectedTopic}
          onTopicSelect={setSelectedTopic}
          searchResults={searchResults}
          isSearching={isSearching}
          searchQuery={searchQuery}
        />
        <div className="flex-1 flex flex-col">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4 shadow-sm">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-gray-800">API Academy</h1>
              <div className="hidden sm:block text-sm text-gray-600">Master API Development</div>
            </div>
            <div className="flex-1 max-w-md mx-4">
              <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleBookmark(selectedTopic)}
                className="hidden sm:flex"
              >
                {isBookmarked(selectedTopic) ? (
                  <BookmarkCheck className="h-4 w-4 text-gray-700" />
                ) : (
                  <Bookmark className="h-4 w-4" />
                )}
              </Button>
              <Button variant="outline" size="sm" onClick={() => setShowBookmarks(!showBookmarks)} className="relative">
                <Bookmark className="h-4 w-4" />
                {bookmarks.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-gray-800 text-white text-xs rounded-full flex items-center justify-center">
                    {bookmarks.length}
                  </span>
                )}
              </Button>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            {showBookmarks ? (
              <BookmarkManager
                bookmarks={bookmarks}
                onTopicSelect={(topic) => {
                  setSelectedTopic(topic)
                  setShowBookmarks(false)
                }}
                onClose={() => setShowBookmarks(false)}
              />
            ) : (
              <MainContent
                selectedTopic={selectedTopic}
                searchResults={searchResults}
                isSearching={isSearching}
                searchQuery={searchQuery}
              />
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
