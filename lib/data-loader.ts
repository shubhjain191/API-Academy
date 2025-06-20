import { httpVerbsData } from "@/data/http-verbs"
import { httpStatusCodesData } from "@/data/http-status-codes"
import { responseHeadersData } from "@/data/response-headers"
import { apiDesignsData } from "@/data/api-designs"
import { apiArchitecturesData } from "@/data/api-architectures"
import { apiDesignPatternsData } from "@/data/api-design-patterns"
import { apiSecurityData } from "@/data/api-security"
import { apiTestingData } from "@/data/api-testing"
import { apiDevelopmentData } from "@/data/api-development"
import { apiImplementationPlatformsData } from "@/data/api-implementation-platforms"
import { apiPerformanceData } from "@/data/api-performance"
import { apiMonitoringData } from "@/data/api-monitoring"
import { apiStandardsData } from "@/data/api-standards"
import { apiStandardOrganizationsData } from "@/data/api-standard-organizations"
import { apiGovernanceData } from "@/data/api-governance"
import { apiDocumentationData } from "@/data/api-documentation"
import { apiDeploymentData } from "@/data/api-deployment"
import { apiBestPracticesData } from "@/data/api-best-practices"
import { apiGuidesData } from "@/data/api-guides"
import { apiToolsData } from "@/data/api-tools"
import { interviewPrepData } from "@/data/interview-prep"
import { quickRevisionData } from "@/data/quick-revision"

const dataMap = {
  "http-verbs": httpVerbsData,
  "http-status-codes": httpStatusCodesData,
  "response-headers": responseHeadersData,
  "api-designs": apiDesignsData,
  "api-architectures": apiArchitecturesData,
  "api-design-patterns": apiDesignPatternsData,
  "api-security": apiSecurityData,
  "api-testing": apiTestingData,
  "api-development": apiDevelopmentData,
  "api-implementation-platforms": apiImplementationPlatformsData,
  "api-performance": apiPerformanceData,
  "api-monitoring": apiMonitoringData,
  "api-standards": apiStandardsData,
  "api-standard-organizations": apiStandardOrganizationsData,
  "api-governance": apiGovernanceData,
  "api-documentation": apiDocumentationData,
  "api-deployment": apiDeploymentData,
  "api-best-practices": apiBestPracticesData,
  "api-guides": apiGuidesData,
  "api-tools": apiToolsData,
  "interview-prep": interviewPrepData,
  "quick-revision": quickRevisionData,
}

export function getTopicData(topicId: string) {
  return dataMap[topicId as keyof typeof dataMap] || null
}

export function getAllTopicsData() {
  return dataMap
}
