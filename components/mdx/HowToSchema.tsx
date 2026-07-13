import React from 'react';

export interface HowToStep {
  name: string;
  text: string;
}

export interface HowToSchemaProps {
  name: string;
  description: string;
  image?: string;
  steps: HowToStep[];
}

export function HowToSchema({ name, description, image, steps }: HowToSchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(image && { image }),
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
