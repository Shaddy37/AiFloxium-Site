import { NextResponse } from 'next/server';
import { SITE_URL, PRIMARY_EMAIL, PHONE_NUMBER, LINKEDIN_URL, X_URL } from '@/lib/site';

const openApiSpec = {
  openapi: '3.0.0',
  info: {
    title: 'AIFLOXIUM API',
    description: 'AI automation and technical implementation services by Muhammad Shadab Shams. Connect AI systems, build workflows, and automate business processes.',
    version: '1.0.0',
    contact: {
      email: PRIMARY_EMAIL,
      url: SITE_URL
    }
  },
  servers: [
    {
      url: SITE_URL,
      description: 'Production server'
    }
  ],
  paths: {
    '/': {
      get: {
        summary: 'Home page',
        description: 'Main landing page with AI automation services overview',
        operationId: 'getHome'
      }
    },
    '/services': {
      get: {
        summary: 'Services listing',
        description: 'All AI automation services offered by AIFLOXIUM',
        operationId: 'getServices'
      }
    },
    '/services/n8n-workflow-automation': {
      get: {
        summary: 'n8n Workflow Automation Service',
        description: 'Build and automate workflows using n8n',
        operationId: 'getN8nService'
      }
    },
    '/services/autonomous-voice-agents': {
      get: {
        summary: 'Autonomous Voice Agents',
        description: 'AI-powered voice agents for business automation',
        operationId: 'getVoiceAgentsService'
      }
    },
    '/services/vibe-coding': {
      get: {
        summary: 'Vibe Coding Service',
        description: 'AI-assisted development using Claude and other AI tools',
        operationId: 'getVibeCodingService'
      }
    },
    '/blog': {
      get: {
        summary: 'Blog listing',
        description: 'Articles about AI automation, workflow optimization, and technical implementation',
        operationId: 'getBlog'
      }
    },
    '/blog/{slug}': {
      get: {
        summary: 'Blog post',
        description: 'Individual blog post by slug',
        operationId: 'getBlogPost',
        parameters: [
          {
            name: 'slug',
            in: 'path',
            required: true,
            schema: { type: 'string' }
          }
        ]
      }
    },
    '/ai-consulting': {
      get: {
        summary: 'AI Consulting',
        description: 'AI strategy and consulting services',
        operationId: 'getConsulting'
      }
    },
    '/projects': {
      get: {
        summary: 'Projects showcase',
        description: 'Showcase of completed AI automation projects',
        operationId: 'getProjects'
      }
    }
  },
  components: {
    schemas: {
      Service: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          description: { type: 'string' },
          useCases: { type: 'array', items: { type: 'string' } }
        }
      },
      BlogPost: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          description: { type: 'string' },
          date: { type: 'string', format: 'date' },
          author: { type: 'string' }
        }
      }
    }
  }
};

export async function GET() {
  return NextResponse.json(openApiSpec, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}