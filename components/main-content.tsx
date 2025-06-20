import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info, Lightbulb, Code, BookOpen, Sparkles, Zap, Star } from "lucide-react"
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
      <div className="flex items-center justify-center h-full min-h-[60vh]">
        <div className="text-center animate-fade-in-up">
          <div className="text-8xl mb-6 animate-float">🔍</div>
          <h2 className="text-3xl font-bold gradient-text mb-2">Topic Not Found</h2>
          <p className="text-slate-600">The requested topic could not be loaded.</p>
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
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      {/* Enhanced Header Section */}
      <div className="space-y-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl"></div>
          <div className="relative glass rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center animate-pulse-glow">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 h-6 w-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-float">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-5xl font-bold gradient-text mb-3">{topicData.title}</h1>
                <p className="text-xl text-slate-600 leading-relaxed">{topicData.description}</p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none">
                    <Star className="h-3 w-3 mr-1" />
                    Essential Topic
                  </Badge>
                  <Badge variant="outline" className="border-slate-300">
                    {topicData.sections?.length || 0} Sections
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Overview Alert */}
        {topicData.overview && (
          <Alert className="glass border border-blue-200/50 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 animate-slide-in">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Info className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <AlertDescription className="text-slate-700 text-base leading-relaxed">
                  <strong className="gradient-text-blue">What is {topicData.title}?</strong> {topicData.overview}
                </AlertDescription>
              </div>
            </div>
          </Alert>
        )}
      </div>

      <Separator className="bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      {/* Enhanced Key Concepts */}
      {topicData.keyConcepts && (
        <Card className="card-hover glass border border-amber-200/50 bg-gradient-to-br from-amber-50/50 to-yellow-50/50">
          <CardHeader className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border-b border-amber-200/30">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              <span className="gradient-text">Key Concepts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid gap-6 md:grid-cols-2">
              {topicData.keyConcepts.map((concept: any, index: number) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl glass border border-amber-200/30 hover:border-amber-300/50 transition-all duration-300 card-hover"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800 mb-3 text-lg">{concept.term}</h4>
                      <p className="text-amber-700 leading-relaxed">{concept.definition}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Enhanced Main Sections */}
      <div className="space-y-8">
        {topicData.sections.map((section: any, index: number) => (
          <Card key={index} className="card-hover glass border border-white/30 bg-white/50 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-slate-50/80 to-blue-50/80 border-b border-slate-200/50">
              <CardTitle className="flex items-center gap-4 text-2xl">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <span className="gradient-text-blue">{section.title}</span>
                {section.badge && (
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none">
                    {section.badge}
                  </Badge>
                )}
              </CardTitle>
              {section.description && (
                <CardDescription className="text-lg text-slate-600 ml-16">{section.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="pt-8 space-y-8">
              {section.items && (
                <div className="grid gap-6 lg:grid-cols-2">
                  {section.items.map((item: any, itemIndex: number) => (
                    <div
                      key={itemIndex}
                      className="group p-6 border rounded-2xl card-hover bg-gradient-to-br from-white to-slate-50 border-slate-200/50 hover:border-blue-300/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <Badge className="bg-gradient-to-r from-slate-700 to-slate-900 text-white border-none font-bold px-3 py-1">
                          {item.code || item.name || item.method || item.title}
                        </Badge>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-800 group-hover:text-slate-900 transition-colors text-lg">
                            {item.title || item.description || item.name}
                          </h4>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {item.description || item.usage || item.explanation}
                      </p>
                      {item.example && (
                        <div className="mt-4 p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                              <Code className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-sm text-green-400 font-semibold">Example</span>
                          </div>
                          <code className="text-sm text-green-300 font-mono block whitespace-pre-wrap leading-relaxed">
                            {item.example}
                          </code>
                        </div>
                      )}
                      {item.useCase && (
                        <div className="mt-4 p-4 glass rounded-xl border border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-blue-600 font-semibold">Use Case:</span>
                          </div>
                          <div className="text-sm text-blue-700 leading-relaxed">{item.useCase}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {section.content && (
                <div className="prose prose-slate max-w-none">
                  <div className="p-8 glass rounded-2xl border border-slate-200/50 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
                    <p className="text-slate-700 leading-relaxed text-lg">{section.content}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Best Practices Footer */}
      {topicData.bestPractices && (
        <Card className="card-hover glass border border-green-200/50 bg-gradient-to-br from-green-50/50 to-emerald-50/50">
          <CardHeader className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-b border-green-200/30">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              <span className="gradient-text">Best Practices</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <ul className="space-y-4">
              {topicData.bestPractices.map((practice: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl glass border border-green-200/30 hover:border-green-300/50 transition-all duration-300 card-hover"
                >
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-xs">{index + 1}</span>
                  </div>
                  <span className="text-green-800 leading-relaxed font-medium">{practice}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
