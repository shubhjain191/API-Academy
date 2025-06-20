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
  Sparkles,
  Brain,
  Zap,
} from "lucide-react"

const menuItems = [
  {
    title: "HTTP Fundamentals",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    items: [
      { title: "HTTP Verbs", id: "http-verbs", icon: Globe, color: "text-blue-500" },
      { title: "HTTP Status Codes", id: "http-status-codes", icon: CheckCircle, color: "text-green-500" },
      { title: "Response Headers", id: "response-headers", icon: FileText, color: "text-purple-500" },
    ],
  },
  {
    title: "API Design & Architecture",
    icon: Building,
    color: "from-purple-500 to-pink-500",
    items: [
      { title: "API Designs", id: "api-designs", icon: Layers, color: "text-purple-500" },
      { title: "API Architectures", id: "api-architectures", icon: Building, color: "text-indigo-500" },
      { title: "API Design Patterns", id: "api-design-patterns", icon: Map, color: "text-pink-500" },
    ],
  },
  {
    title: "Security & Testing",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    items: [
      { title: "API Security", id: "api-security", icon: Shield, color: "text-red-500" },
      { title: "API Testing", id: "api-testing", icon: TestTube, color: "text-orange-500" },
    ],
  },
  {
    title: "Development & Implementation",
    icon: FileCode,
    color: "from-green-500 to-teal-500",
    items: [
      { title: "API Development", id: "api-development", icon: FileCode, color: "text-green-500" },
      {
        title: "API Implementation Platforms",
        id: "api-implementation-platforms",
        icon: Rocket,
        color: "text-teal-500",
      },
    ],
  },
  {
    title: "Performance & Monitoring",
    icon: Gauge,
    color: "from-yellow-500 to-amber-500",
    items: [
      { title: "API Performance", id: "api-performance", icon: Gauge, color: "text-yellow-500" },
      { title: "API Monitoring", id: "api-monitoring", icon: Activity, color: "text-amber-500" },
    ],
  },
  {
    title: "Standards & Governance",
    icon: Award,
    color: "from-indigo-500 to-blue-500",
    items: [
      { title: "API Standards", id: "api-standards", icon: Award, color: "text-indigo-500" },
      { title: "API Standard Organizations", id: "api-standard-organizations", icon: Users, color: "text-blue-500" },
      { title: "API Governance", id: "api-governance", icon: Building, color: "text-slate-500" },
    ],
  },
  {
    title: "Documentation & Deployment",
    icon: Book,
    color: "from-cyan-500 to-blue-500",
    items: [
      { title: "API Documentation", id: "api-documentation", icon: Book, color: "text-cyan-500" },
      { title: "API Deployment", id: "api-deployment", icon: Rocket, color: "text-blue-500" },
    ],
  },
  {
    title: "Best Practices & Guides",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
    items: [
      { title: "API Best Practices", id: "api-best-practices", icon: Award, color: "text-pink-500" },
      { title: "API Guides", id: "api-guides", icon: Map, color: "text-rose-500" },
      { title: "API Tools", id: "api-tools", icon: FileCode, color: "text-violet-500" },
    ],
  },
  {
    title: "Interview & Revision",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
    items: [
      { title: "Interview Prep", id: "interview-prep", icon: Brain, color: "text-violet-500" },
      { title: "Quick Revision", id: "quick-revision", icon: Zap, color: "text-purple-500" },
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
    <Sidebar className="border-r-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <SidebarHeader className="p-6 bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 animate-pulse-glow">
              <Book className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-float">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">API Academy</h2>
            <p className="text-sm text-slate-300">Master API Development</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-slate-900 to-slate-800">
        <ScrollArea className="h-full">
          {isSearching ? (
            <SidebarGroup className="p-4">
              <SidebarGroupLabel className="text-slate-300 font-semibold text-sm mb-3 flex items-center gap-2">
                <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
                Search Results ({searchResults.length})
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-2">
                  {searchResults.length === 0 ? (
                    <div className="p-4 text-center text-slate-400 bg-slate-800/50 rounded-lg border border-slate-700">
                      No results found for "{searchQuery}"
                    </div>
                  ) : (
                    searchResults.map((result) => (
                      <SidebarMenuItem key={result.topicId}>
                        <SidebarMenuButton
                          onClick={() => onTopicSelect(result.topicId)}
                          isActive={selectedTopic === result.topicId}
                          className="flex-col items-start h-auto p-4 hover:bg-slate-700/50 transition-all duration-300 rounded-lg border border-transparent hover:border-slate-600 card-hover"
                        >
                          <div className="font-medium text-white">{result.title}</div>
                          <div className="text-xs text-slate-400 mt-1 line-clamp-2">
                            {result.matchedContent || result.description}
                          </div>
                          <Badge
                            variant="secondary"
                            className="mt-2 text-xs bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none"
                          >
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
            menuItems.map((section, sectionIndex) => (
              <SidebarGroup key={section.title} className="p-4 mb-2">
                <SidebarGroupLabel className="text-slate-300 font-semibold text-sm mb-3 flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${section.color}`}></div>
                  <section.icon className="h-4 w-4" />
                  {section.title}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton
                          onClick={() => onTopicSelect(item.id)}
                          isActive={selectedTopic === item.id}
                          className={`hover:bg-slate-700/50 transition-all duration-300 rounded-lg border border-transparent hover:border-slate-600 group ${
                            selectedTopic === item.id
                              ? "bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-blue-500/50 text-white"
                              : "text-slate-300 hover:text-white"
                          }`}
                        >
                          <item.icon
                            className={`h-4 w-4 transition-colors ${
                              selectedTopic === item.id ? item.color : "text-slate-400 group-hover:text-slate-300"
                            }`}
                          />
                          <span
                            className={`transition-colors ${
                              selectedTopic === item.id ? "font-medium" : "group-hover:font-medium"
                            }`}
                          >
                            {item.title}
                          </span>
                          {selectedTopic === item.id && (
                            <div className="ml-auto h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
                          )}
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
