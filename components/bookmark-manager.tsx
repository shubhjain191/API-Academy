"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookmarkX, ExternalLink, Sparkles, Heart } from "lucide-react"
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
      <div className="max-w-2xl mx-auto text-center py-16 animate-fade-in-up">
        <div className="relative mb-8">
          <div className="text-8xl animate-float">📚</div>
          <div className="absolute -top-2 -right-2 h-8 w-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
        </div>
        <h2 className="text-4xl font-bold gradient-text mb-4">No Bookmarks Yet</h2>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Start bookmarking your favorite API topics to access them quickly later.
        </p>
        <Button onClick={onClose} className="btn-gradient text-white px-8 py-3 text-lg">
          <Heart className="h-5 w-5 mr-2" />
          Continue Learning
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      {/* Enhanced Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative glass rounded-2xl p-8 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-pulse-glow">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold gradient-text">Your Bookmarks</h1>
                <p className="text-xl text-slate-600 mt-2">
                  {bookmarks.length} saved topic{bookmarks.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
            <Button variant="outline" onClick={onClose} className="glass border-white/30 hover:bg-white/20 px-6 py-3">
              Back to Learning
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Bookmarks Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bookmarks.map((topicId, index) => {
          const topicData = getTopicData(topicId)
          if (!topicData) return null

          return (
            <Card
              key={topicId}
              className="card-hover glass border border-white/30 bg-white/50 backdrop-blur-sm group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl gradient-text-blue mb-2 group-hover:scale-105 transition-transform">
                      {topicData.title}
                    </CardTitle>
                    <p className="text-sm text-slate-600 leading-relaxed">{topicData.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleBookmark(topicId)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 transition-all duration-300 hover:scale-110"
                  >
                    <BookmarkX className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none">
                    {topicData.sections.length} section{topicData.sections.length !== 1 ? "s" : ""}
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onTopicSelect(topicId)}
                    className="flex items-center gap-2 glass border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
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
