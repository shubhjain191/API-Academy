"use client"

import { Search, X, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-xl group-focus-within:blur-2xl transition-all duration-300"></div>
      <div className="relative glass rounded-xl border border-white/30 group-focus-within:border-blue-300/50 transition-all duration-300">
        <div className="flex items-center">
          <div className="pl-4 pr-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Search className="h-4 w-4 text-white" />
            </div>
          </div>
          <Input
            type="text"
            placeholder="Search API topics, definitions, examples..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-slate-700 placeholder:text-slate-500 text-base"
          />
          {searchQuery ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onSearchChange("")}
              className="mr-2 h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </Button>
          ) : (
            <div className="mr-4 flex items-center gap-1 text-xs text-slate-400">
              <Sparkles className="h-3 w-3" />
              <span>AI-powered</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
