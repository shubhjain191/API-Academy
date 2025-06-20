import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info, Lightbulb, Code, BookOpen } from "lucide-react"
import { getTopicData } from "@/lib/data-loader"
import { InterviewPrepContent } from "@/components/interview-prep-content"
import { QuickRevisionContent } from "@/components/quick-revision-content"

interface MainContentProps {
  selectedTopic: string
  searchResults: any[]
  isSearching: boolean
  searchQuery: string
}

export function MainContent({ selectedTopic, searchResults, isSearching, searchQuery }: MainContentProps) {
  const topicData = getTopicData(selectedTopic)

  if (!topicData) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl text-gray-600">Topic not found</p>
        </div>
      </div>
    )
  }

  if (selectedTopic === "interview-prep") {
    return <InterviewPrepContent data={topicData} />
  }

  if (selectedTopic === "quick-revision") {
    return <QuickRevisionContent data={topicData} />
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gray-800 flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{topicData.title}</h1>
            <p className="text-lg text-gray-600 mt-1">{topicData.description}</p>
          </div>
        </div>

        {/* Overview Alert */}
        {topicData.overview && (
          <Alert className="border-gray-200 bg-gray-50">
            <Info className="h-4 w-4 text-gray-600" />
            <AlertDescription className="text-gray-700">
              <strong>What is {topicData.title}?</strong> {topicData.overview}
            </AlertDescription>
          </Alert>
        )}
      </div>

      <Separator className="bg-gray-200" />

      {/* Key Concepts */}
      {topicData.keyConcepts && (
        <Card className="border-l-4 border-l-amber-500 shadow-sm">
          <CardHeader className="bg-amber-50">
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <Lightbulb className="h-5 w-5" />
              Key Concepts
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-3 md:grid-cols-2">
              {topicData.keyConcepts.map((concept: any, index: number) => (
                <div key={index} className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">{concept.term}</h4>
                  <p className="text-sm text-amber-700">{concept.definition}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Sections */}
      <div className="space-y-6">
        {topicData.sections.map((section: any, index: number) => (
          <Card key={index} className="shadow-sm border border-gray-200">
            <CardHeader className="bg-gray-50">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="h-8 w-8 rounded-lg bg-gray-800 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-gray-800">{section.title}</span>
                {section.badge && (
                  <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                    {section.badge}
                  </Badge>
                )}
              </CardTitle>
              {section.description && (
                <CardDescription className="text-base text-gray-600">{section.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {section.items && (
                <div className="grid gap-4 lg:grid-cols-2">
                  {section.items.map((item: any, itemIndex: number) => (
                    <div
                      key={itemIndex}
                      className="group p-5 border rounded-xl hover:shadow-md transition-all duration-200 bg-white hover:bg-gray-50"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <Badge variant="outline" className="bg-gray-800 text-white border-gray-800 font-semibold">
                          {item.code || item.name || item.method || item.title}
                        </Badge>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                            {item.title || item.description || item.name}
                          </h4>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {item.description || item.usage || item.explanation}
                      </p>
                      {item.example && (
                        <div className="mt-3 p-3 bg-gray-900 rounded-lg border">
                          <div className="flex items-center gap-2 mb-2">
                            <Code className="h-3 w-3 text-green-400" />
                            <span className="text-xs text-green-400 font-medium">Example</span>
                          </div>
                          <code className="text-xs text-green-300 font-mono block whitespace-pre-wrap">
                            {item.example}
                          </code>
                        </div>
                      )}
                      {item.useCase && (
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="text-xs text-blue-600 font-medium mb-1">Use Case:</div>
                          <div className="text-xs text-blue-700">{item.useCase}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {section.content && (
                <div className="prose prose-gray max-w-none">
                  <div className="p-6 bg-gray-50 rounded-xl border">
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Best Practices Footer */}
      {topicData.bestPractices && (
        <Card className="border-l-4 border-l-green-500 shadow-sm">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Lightbulb className="h-5 w-5" />
              Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {topicData.bestPractices.map((practice: string, index: number) => (
                <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-green-50">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                  <span className="text-green-800">{practice}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
