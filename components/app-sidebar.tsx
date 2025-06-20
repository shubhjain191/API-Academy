"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Globe,
  CheckCircle,
  FileText,
  Layers,
  Book,
  Building,
  Map,
  Shield,
  TestTube,
  FileCode,
  Rocket,
  Gauge,
  Activity,
  Award,
  Users,
} from "lucide-react"

const menuItems = [
  {
    title: "HTTP Fundamentals",
    items: [
      { title: "HTTP Verbs", id: "http-verbs", icon: Globe },
      { title: "HTTP Status Codes", id: "http-status-codes", icon: CheckCircle },
      { title: "Response Headers", id: "response-headers", icon: FileText },
    ],
  },
  {
    title: "API Design & Architecture",
    items: [
      { title: "API Designs", id: "api-designs", icon: Layers },
      { title: "API Architectures", id: "api-architectures", icon: Building },
      { title: "API Design Patterns", id: "api-design-patterns", icon: Map },
    ],
  },
  {
    title: "Security & Testing",
    items: [
      { title: "API Security", id: "api-security", icon: Shield },
      { title: "API Testing", id: "api-testing", icon: TestTube },
    ],
  },
  {
    title: "Development & Implementation",
    items: [
      { title: "API Development", id: "api-development", icon: FileCode },
      { title: "API Implementation Platforms", id: "api-implementation-platforms", icon: Rocket },
    ],
  },
  {
    title: "Performance & Monitoring",
    items: [
      { title: "API Performance", id: "api-performance", icon: Gauge },
      { title: "API Monitoring", id: "api-monitoring", icon: Activity },
    ],
  },
  {
    title: "Standards & Governance",
    items: [
      { title: "API Standards", id: "api-standards", icon: Award },
      { title: "API Standard Organizations", id: "api-standard-organizations", icon: Users },
      { title: "API Governance", id: "api-governance", icon: Building },
    ],
  },
  {
    title: "Documentation & Deployment",
    items: [
      { title: "API Documentation", id: "api-documentation", icon: Book },
      { title: "API Deployment", id: "api-deployment", icon: Rocket },
    ],
  },
  {
    title: "Best Practices & Guides",
    items: [
      { title: "API Best Practices", id: "api-best-practices", icon: Award },
      { title: "API Guides", id: "api-guides", icon: Map },
      { title: "API Tools", id: "api-tools", icon: FileCode },
    ],
  },
  {
    title: "Interview & Revision",
    items: [
      { title: "Interview Prep", id: "interview-prep", icon: TestTube },
      { title: "Quick Revision", id: "quick-revision", icon: Book },
    ],
  },
]

interface AppSidebarProps {
  selectedTopic: string
  onTopicSelect: (topic: string) => void
  searchResults: Array<{
    topicId: string
    title: string
    description: string
    matchType: string
    matchedContent?: string
  }>
  isSearching: boolean
  searchQuery: string
}

export function AppSidebar({ selectedTopic, onTopicSelect, searchResults, isSearching, searchQuery }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4 bg-gray-800 text-white">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-700">
            <Book className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-lg font-bold">API Academy</h2>
            <p className="text-sm text-gray-300">Master API Development</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gray-50">
        <ScrollArea className="h-full">
          {isSearching ? (
            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-700 font-semibold">
                Search Results ({searchResults.length})
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {searchResults.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">No results found for "{searchQuery}"</div>
                  ) : (
                    searchResults.map((result) => (
                      <SidebarMenuItem key={result.topicId}>
                        <SidebarMenuButton
                          onClick={() => onTopicSelect(result.topicId)}
                          isActive={selectedTopic === result.topicId}
                          className="flex-col items-start h-auto p-3 hover:bg-gray-100"
                        >
                          <div className="font-medium text-gray-800">{result.title}</div>
                          <div className="text-xs text-gray-600 mt-1">
                            {result.matchedContent || result.description}
                          </div>
                          <Badge variant="secondary" className="mt-1 text-xs bg-gray-200 text-gray-700">
                            {result.matchType}
                          </Badge>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ) : (
            menuItems.map((section) => (
              <SidebarGroup key={section.title} className="mb-2">
                <SidebarGroupLabel className="text-gray-700 font-semibold text-sm">{section.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton
                          onClick={() => onTopicSelect(item.id)}
                          isActive={selectedTopic === item.id}
                          className="hover:bg-gray-100 transition-colors duration-200"
                        >
                          <item.icon
                            className={`h-4 w-4 ${selectedTopic === item.id ? "text-gray-800" : "text-gray-500"}`}
                          />
                          <span className={selectedTopic === item.id ? "text-gray-800 font-medium" : "text-gray-700"}>
                            {item.title}
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))
          )}
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  )
}
