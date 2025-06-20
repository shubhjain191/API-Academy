"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronRight, Brain, Target, Zap } from "lucide-react"

interface InterviewPrepContentProps {
  data: any
}

export function InterviewPrepContent({ data }: InterviewPrepContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("basic")
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set())

  const toggleQuestion = (index: number) => {
    const newExpanded = new Set(expandedQuestions)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedQuestions(newExpanded)
  }

  const categoryIcons = {
    basic: Brain,
    intermediate: Target,
    advanced: Zap,
  }

  const categoryColors = {
    basic: "bg-green-50 border-green-200 text-green-800",
    intermediate: "bg-blue-50 border-blue-200 text-blue-800",
    advanced: "bg-purple-50 border-purple-200 text-purple-800",
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gray-800 flex items-center justify-center">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{data.title}</h1>
            <p className="text-lg text-gray-600 mt-1">{data.description}</p>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-200" />

      {/* Category Selection */}
      <div className="flex flex-wrap gap-3">
        {Object.entries(data.categories).map(([key, category]: [string, any]) => {
          const Icon = categoryIcons[key as keyof typeof categoryIcons]
          const isSelected = selectedCategory === key

          return (
            <Button
              key={key}
              variant={isSelected ? "default" : "outline"}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center gap-2 ${isSelected ? "bg-gray-800 text-white" : "hover:bg-gray-50"}`}
            >
              <Icon className="h-4 w-4" />
              {category.title}
              <Badge variant="secondary" className="ml-1">
                {category.questions.length}
              </Badge>
            </Button>
          )
        })}
      </div>

      {/* Selected Category Content */}
      {selectedCategory && (
        <Card className="shadow-sm border border-gray-200">
          <CardHeader className={`${categoryColors[selectedCategory as keyof typeof categoryColors]}`}>
            <CardTitle className="flex items-center gap-2">
              {React.createElement(categoryIcons[selectedCategory as keyof typeof categoryIcons], {
                className: "h-5 w-5",
              })}
              {data.categories[selectedCategory].title}
            </CardTitle>
            <CardDescription className="text-current opacity-80">
              {data.categories[selectedCategory].description}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {data.categories[selectedCategory].questions.map((item: any, index: number) => {
                const isExpanded = expandedQuestions.has(index)

                return (
                  <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardHeader
                      className="cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => toggleQuestion(index)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-800 flex items-start gap-2">
                            <span className="text-sm font-bold text-gray-500 mt-1">Q{index + 1}.</span>
                            {item.question}
                          </CardTitle>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.topics.map((topic: string, topicIndex: number) => (
                              <Badge key={topicIndex} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-2">
                          {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        </Button>
                      </div>
                    </CardHeader>
                    {isExpanded && (
                      <CardContent className="pt-0">
                        <div className="p-4 bg-gray-50 rounded-lg border">
                          <div className="text-sm font-medium text-gray-700 mb-2">Answer:</div>
                          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
