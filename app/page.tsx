"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { MainContent } from "@/components/main-content"
import { SearchBar } from "@/components/search-bar"
import { BookmarkManager } from "@/components/bookmark-manager"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useSearch } from "@/hooks/use-search"
import { useBookmarks } from "@/hooks/use-bookmarks"
import { Bookmark, Sparkles, Zap, Brain } from "lucide-react"

export default function HomePage() {
  const [selectedTopic, setSelectedTopic] = useState("http-verbs")
  const [showBookmarks, setShowBookmarks] = useState(false)
  const { searchQuery, searchResults, isSearching, handleSearch } = useSearch()
  const { bookmarks, isBookmarked, toggleBookmark } = useBookmarks()

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic)
    setShowBookmarks(false)
  }

  const handleShowBookmarks = () => {
    setShowBookmarks(true)
  }

  const handleCloseBookmarks = () => {
    setShowBookmarks(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SidebarProvider>
        <AppSidebar
          selectedTopic={selectedTopic}
          onTopicSelect={handleTopicSelect}
          searchResults={searchResults}
          isSearching={isSearching}
          searchQuery={searchQuery}
        />
        <SidebarInset className="flex flex-col">
          {/* Enhanced Header */}
          <header className="sticky top-0 z-50 glass border-b border-white/20 backdrop-blur-xl">
            <div className="flex h-20 items-center gap-4 px-6">
              <SidebarTrigger className="btn-gradient text-white hover:scale-105 transition-transform" />
              <Separator orientation="vertical" className="h-8 bg-gradient-to-b from-blue-200 to-indigo-300" />

              {/* Logo and Title */}
              <div className="flex items-center gap-3 animate-fade-in-up">
                <div className="relative">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center animate-pulse-glow">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles className="h-2 w-2 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold gradient-text-blue">API Academy</h1>
                  <p className="text-xs text-slate-600">Master Modern APIs</p>
                </div>
              </div>

              <div className="flex-1 max-w-md mx-4">
                <SearchBar searchQuery={searchQuery} onSearchChange={handleSearch} />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShowBookmarks}
                  className="glass border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Bookmark className="h-4 w-4 mr-2" />
                  Bookmarks
                  {bookmarks.length > 0 && (
                    <Badge variant="secondary" className="ml-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                      {bookmarks.length}
                    </Badge>
                  )}
                </Button>

                {!showBookmarks && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleBookmark(selectedTopic)}
                    className={`transition-all duration-300 hover:scale-105 ${
                      isBookmarked(selectedTopic)
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-yellow-400 hover:from-yellow-500 hover:to-orange-600"
                        : "glass border-white/30 hover:bg-white/20"
                    }`}
                  >
                    <Bookmark className={`h-4 w-4 ${isBookmarked(selectedTopic) ? "fill-current" : ""}`} />
                  </Button>
                )}
              </div>
            </div>
          </header>

          {/* Enhanced Main Content */}
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto p-6 animate-fade-in-up">
              {showBookmarks ? (
                <div className="animate-slide-in">
                  <BookmarkManager
                    bookmarks={bookmarks}
                    onTopicSelect={handleTopicSelect}
                    onClose={handleCloseBookmarks}
                  />
                </div>
              ) : (
                <div className="animate-fade-in-up">
                  <MainContent
                    selectedTopic={selectedTopic}
                    searchResults={searchResults}
                    isSearching={isSearching}
                    searchQuery={searchQuery}
                  />
                </div>
              )}
            </div>
          </main>

          {/* Enhanced Footer */}
          <footer className="glass border-t border-white/20 backdrop-blur-xl mt-auto">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-500" />
                  <span>Built with Next.js & Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>© 2024 API Academy</span>
                  <Badge
                    variant="outline"
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-none"
                  >
                    v2.0
                  </Badge>
                </div>
              </div>
            </div>
          </footer>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
