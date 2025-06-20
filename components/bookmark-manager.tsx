"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookmarkX, ExternalLink } from "lucide-react"
import { getTopicData } from "@/lib/data-loader"
import { useBookmarks } from "@/hooks/use-bookmarks"

interface BookmarkManagerProps {
  bookmarks: string[]
  onTopicSelect: (topic: string) => void
  onClose: () => void
}

export function BookmarkManager({ bookmarks, onTopicSelect, onClose }: BookmarkManagerProps) {
  const { toggleBookmark } = useBookmarks()

  if (bookmarks.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="text-6xl mb-4">📚</div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">No Bookmarks Yet</h2>
        <p className="text-gray-600 mb-6">Start bookmarking your favorite API topics to access them quickly later.</p>
        <Button onClick={onClose} className="bg-gray-800 hover:bg-gray-700">
          Continue Learning
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Your Bookmarks</h1>
          <p className="text-gray-600">
            {bookmarks.length} saved topic{bookmarks.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Button variant="outline" onClick={onClose}>
          Back to Learning
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {bookmarks.map((topicId) => {
          const topicData = getTopicData(topicId)
          if (!topicData) return null

          return (
            <Card key={topicId} className="hover:shadow-lg transition-shadow border-l-4 border-l-gray-600">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-gray-800">{topicData.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{topicData.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleBookmark(topicId)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <BookmarkX className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                    {topicData.sections.length} section{topicData.sections.length !== 1 ? "s" : ""}
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onTopicSelect(topicId)}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Open
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
