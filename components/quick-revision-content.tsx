import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Zap, Clock } from "lucide-react"

interface QuickRevisionContentProps {
  data: any
}

export function QuickRevisionContent({ data }: QuickRevisionContentProps) {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gray-800 flex items-center justify-center">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{data.title}</h1>
            <p className="text-lg text-gray-600 mt-1">{data.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>Quick reference for last-minute review</span>
        </div>
      </div>

      <Separator className="bg-gray-200" />

      {/* Revision Sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        {data.sections.map((section: any, sectionIndex: number) => (
          <Card key={sectionIndex} className="shadow-sm border border-gray-200 h-fit">
            <CardHeader className="bg-gray-50">
              <CardTitle className="flex items-center gap-2 text-xl">
                <div className="h-6 w-6 rounded-md bg-gray-800 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">{sectionIndex + 1}</span>
                </div>
                <span className="text-gray-800">{section.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {section.items.map((item: any, itemIndex: number) => (
                  <div key={itemIndex} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{item.topic}</h4>
                      <Badge variant="outline" className="text-xs bg-gray-100">
                        Key Point
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.summary}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Tips */}
      <Card className="border-l-4 border-l-amber-500 shadow-sm">
        <CardHeader className="bg-amber-50">
          <CardTitle className="flex items-center gap-2 text-amber-800">
            <Zap className="h-5 w-5" />
            Quick Tips for Success
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span className="text-amber-800">Review these concepts regularly to reinforce understanding</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span className="text-amber-800">Practice explaining concepts in your own words</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span className="text-amber-800">Connect concepts to real-world examples and projects</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span className="text-amber-800">Use this as a checklist before interviews or exams</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
