# API Academy 🚀

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/shubhjain191s-projects/v0-next-js-api-dashboard)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/TghX9RorXd2)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A comprehensive, interactive learning platform for API development concepts, featuring a modern dashboard interface with extensive topic coverage, interview preparation, and quick revision tools.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage Guidelines](#usage-guidelines)
- [Data Management](#data-management)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [License](#license)

## 🎯 Overview

API Academy is a modern, responsive web application designed to provide comprehensive learning resources for API development. Built with Next.js and featuring a clean, professional interface, it serves as a one-stop platform for developers to learn, practice, and master API concepts.

### Key Objectives:
- **Educational Excellence**: Comprehensive coverage of API topics from basics to advanced concepts
- **Interview Readiness**: Structured interview preparation with difficulty-based filtering
- **Quick Reference**: Fast access to essential API information for daily development work
- **Interactive Learning**: Engaging UI with search, bookmarks, and organized content navigation

## ✨ Features

### 🎓 Core Learning Features
- **Comprehensive Topic Coverage**: 20+ API-related topics including REST, GraphQL, authentication, security, and more
- **Structured Content**: Well-organized information with examples, best practices, and real-world scenarios
- **Search Functionality**: Powerful search across all topics and content
- **Bookmark System**: Save and organize favorite topics for quick access

### 🎯 Interview Preparation
- **Three Difficulty Levels**: Basic, Intermediate, and Advanced questions
- **Interactive Q&A Format**: Expandable answers with detailed explanations
- **Topic Categorization**: Questions organized by API domains
- **Progress Tracking**: Visual indicators for completed sections

### ⚡ Quick Revision
- **Concise Summaries**: Key concepts in bullet-point format
- **Topic-wise Organization**: Structured by API domains
- **Scannable Layout**: Optimized for quick review sessions
- **Essential Tips**: Success tips and best practices

### 🎨 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Clean Interface**: Professional, distraction-free learning environment
- **Intuitive Navigation**: Sidebar-based topic selection with clear visual hierarchy
- **Fast Performance**: Optimized loading and smooth interactions

## 🏗️ Architecture

### Application Structure
\`\`\`
API Academy
├── Frontend (Next.js App Router)
├── Data Layer (Static JSON modules)
├── Component Library (Shadcn/ui)
└── Utility Layer (Custom hooks & helpers)
\`\`\`

### Data Flow
1. **Data Loading**: `/lib/data-loader.ts` centralizes all data imports
2. **Component Rendering**: React components consume processed data
3. **State Management**: Custom hooks manage bookmarks, search, and UI state
4. **User Interaction**: Sidebar navigation triggers content updates

### Key Architecture Components

#### `/lib/data-loader.ts` - Central Data Management
\`\`\`typescript
// Centralized data loading and processing
export const getTopicData = (topicId: string) => {
  // Dynamic import and processing logic
  return processedTopicData;
};
\`\`\`

#### `/data/api-architectures.js` - Architecture Patterns
\`\`\`javascript
// Comprehensive API architecture patterns and examples
export const apiArchitectures = {
  patterns: [...],
  examples: [...],
  bestPractices: [...]
};
\`\`\`

## 🛠️ Technologies Used

### Core Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library with modern hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Modern component library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **Custom Hooks** - Reusable state logic

## 📁 Project Structure

\`\`\`
api-academy/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── loading.tsx              # Loading UI
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── ui/                      # Shadcn/ui components
│   ├── app-sidebar.tsx          # Main navigation
│   ├── bookmark-manager.tsx     # Bookmark functionality
│   ├── interview-prep-content.tsx # Interview section
│   ├── main-content.tsx         # Content display
│   ├── quick-revision-content.tsx # Revision section
│   └── search-bar.tsx           # Search functionality
├── data/                        # Static data files
│   ├── api-architectures.js     # Architecture patterns
│   ├── api-best-practices.js    # Best practices
│   ├── api-design-patterns.js   # Design patterns
│   ├── api-security.js          # Security concepts
│   ├── authentication.js        # Auth methods
│   ├── interview-prep.js        # Interview questions
│   ├── quick-revision.js        # Revision summaries
│   └── [20+ other topic files]
├── hooks/                       # Custom React hooks
│   ├── use-bookmarks.ts         # Bookmark management
│   ├── use-search.ts            # Search functionality
│   └── use-toast.ts             # Toast notifications
├── lib/                         # Utility functions
│   ├── data-loader.ts           # Data loading logic
│   └── utils.ts                 # Helper functions
└── public/                      # Static assets
    └── [images and icons]
\`\`\`

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation Steps

1. **Clone the Repository**
   \`\`\`bash
   git clone https://github.com/shubhjain191/API-Academy.git
   cd API-Academy
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run Development Server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

## 📖 Usage Guidelines

### Navigation
1. **Sidebar Navigation**: Click on any topic in the left sidebar to view its content
2. **Search**: Use the search bar to find specific topics or concepts
3. **Bookmarks**: Click the bookmark icon to save topics for later reference

### Interview Preparation
1. Navigate to "Interview Prep" in the sidebar
2. Select difficulty level: Basic, Intermediate, or Advanced
3. Click on questions to reveal detailed answers
4. Use topic tags to filter questions by domain

### Quick Revision
1. Access "Quick Revision" from the sidebar
2. Browse topic summaries organized by category
3. Use for last-minute review before interviews or meetings

### Content Organization
- **Topic-Focused Display**: Only selected topic content is shown in the main area
- **Responsive Layout**: Content adapts to different screen sizes
- **Interactive Elements**: Expandable sections and hover effects enhance usability

## 🗄️ Data Management

### Data Loading Architecture

The `/lib/data-loader.ts` module serves as the central hub for all data operations:

\`\`\`typescript
// Example data loading pattern
import { apiArchitectures } from '../data/api-architectures';
import { apiSecurity } from '../data/api-security';

export const loadTopicData = (topicId: string) => {
  const dataMap = {
    'api-architectures': apiArchitectures,
    'api-security': apiSecurity,
    // ... other mappings
  };
  
  return dataMap[topicId] || null;
};
\`\`\`

### Data File Structure

Each data file follows a consistent structure:

\`\`\`javascript
// Example: /data/api-architectures.js
export const apiArchitectures = {
  title: "API Architectures",
  description: "Comprehensive guide to API architectural patterns",
  sections: [
    {
      title: "REST Architecture",
      content: "...",
      examples: [...],
      bestPractices: [...]
    }
    // ... more sections
  ]
};
\`\`\`

### Adding New Topics

1. Create a new data file in `/data/` directory
2. Follow the established data structure
3. Update `/lib/data-loader.ts` to include the new topic
4. Add navigation entry in `/components/app-sidebar.tsx`

## 🤝 Contributing

We welcome contributions to improve API Academy! Here's how you can help:

### Ways to Contribute
- **Content**: Add new topics, improve existing content, fix typos
- **Features**: Implement new functionality, enhance user experience
- **Bug Fixes**: Report and fix issues
- **Documentation**: Improve README, add code comments

### Contribution Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 🚀 Deployment

### Vercel Deployment (Recommended)
The project is optimized for Vercel deployment:

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Auto-Deploy**: Pushes to main branch trigger automatic deployments
3. **Environment**: No environment variables required for basic functionality

**Live Demo**: [https://vercel.com/shubhjain191s-projects/v0-next-js-api-dashboard](https://vercel.com/shubhjain191s-projects/v0-next-js-api-dashboard)

### Other Deployment Options
- **Netlify**: Compatible with static site generation
- **AWS Amplify**: Full-stack deployment support
- **Docker**: Containerized deployment ready

## 📝 Project History

### Initial Commit
- **Commit**: `ee279ce`
- **Message**: "Initialized repository for project Next.js API Dashboard"
- **Co-authored-by**: Shubh Jain <70976110+shubhjain191@users.noreply.github.com>

This commit established the foundation of the API Academy project, setting up the basic Next.js structure and initial component architecture.

## 🎯 Roadmap

### Upcoming Features
- [ ] **Dark Mode Toggle** - Theme switching functionality
- [ ] **Progress Tracking** - Learning progress visualization
- [ ] **Interactive Code Playground** - Live code testing environment
- [ ] **Advanced Search Filters** - Enhanced search capabilities
- [ ] **User Profiles** - Personalized learning experience
- [ ] **Mobile App** - Native mobile application

### Content Expansion
- [ ] **GraphQL Advanced Topics** - Subscriptions, Federation
- [ ] **API Gateway Patterns** - Kong, AWS API Gateway
- [ ] **Microservices Architecture** - Service mesh, communication patterns
- [ ] **API Analytics** - Monitoring and observability

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[v0.dev](https://v0.dev)** - AI-powered development platform
- **[Shadcn/ui](https://ui.shadcn.com/)** - Beautiful component library
- **[Vercel](https://vercel.com)** - Deployment and hosting platform
- **Open Source Community** - For the amazing tools and libraries

## 📞 Support

If you encounter any issues or have questions:

1. **GitHub Issues**: [Create an issue](https://github.com/shubhjain191/API-Academy/issues)
2. **Discussions**: [Join the discussion](https://github.com/shubhjain191/API-Academy/discussions)
3. **Email**: Contact the maintainers directly

---

**Built with ❤️ by [Shubh Jain](https://github.com/shubhjain191) using [v0.dev](https://v0.dev)**

*Happy Learning! 🚀*
