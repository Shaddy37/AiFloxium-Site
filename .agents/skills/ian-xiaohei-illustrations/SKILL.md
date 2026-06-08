---
name: ian-xiaohei-illustrations
description: Generate Ian-style English article illustrations. Used when the user requests generating "absurd", "Xiaohei", "hand-drawn", "article illustrations", "illustration suggestions", "shot list", or other tasks for articles, posts, blogs, Notion docs, workflow docs, methodologies, processes, structures, states, metaphors, or opinions. It defaults to using the Xiaohei IP, pure white hand-drawn style, minimal red/orange/blue annotations, and a clean, fresh, yet imaginative visual style.
---

# Ian Xiaohei Absurd Article Illustrations

## Core Position

Design and generate 16:9 horizontal article illustrations for English articles. The goal is not to create commercial illustrations, PPT infographics, or cute cartoons, but to transform key assertions, processes, structures, states, or metaphors in the article into a clean, absurd, creative, readable, yet non-technical hand-drawn explanation.

The default visual IP is "Xiaohei": a solid black creature with white dot eyes, thin legs, and a blank expression, seriously performing an absurd but meaningful action. Xiaohei must be the active subject of the core action in the image, not just a decorative element standing on the side.

## References

Read these reference files as needed; do not overload the context with all references at once:

- `references/style-dna.md`: Style DNA, colors, text, and taboos.
- `references/xiaohei-ip.md`: Xiaohei IP's design, personality, action library, and taboos.
- `references/composition-patterns.md`: Structure types, original metaphor methods, and repetition rules.
- `references/prompt-template.md`: Single image generation prompt template.
- `references/qa-checklist.md`: Post-generation check and iteration rules.
- `assets/examples/`: Low-frequency visual calibration only; do not copy these examples' layouts, objects, or annotations directly.

## Workflow

### 1. Digestion of Text

Read the text, link, Notion page, Markdown file, or screenshot provided by the user. Distill:

- What is the core opinion or statement?
- Which paragraphs carry cognitive transitions?
- Which content is suitable for visual explanation?
- Which parts are only suitable for text and do not need a diagram?

Do not generate too many diagrams. Prioritize "cognitive anchors" such as: core assertions, comparisons/gaps, input-output loops, branching/routing, before/after comparisons, multi-purpose systems, integration paths, common pitfalls, and character state changes.

### 2. Formulate Illustration Strategy First

If the user only asks to "analyze how to illustrate" or "think about where illustrations are needed", provide a shot list first. For each image, specify:

- Where to place it (which paragraph/section)
- Image theme
- Core message
- Structure type
- What Xiaohei is doing in the image
- Suggested visual elements
- Suggested English handwritten labels

The default is 4-8 images. For short articles, use 1-3 images; even for long articles, do not exceed 9 images. Keep it minimal to avoid turning the text into a picture book.

### 3. Single Image Generation

If the user explicitly requests to "generate / output / draw / make the image", do not wait for confirmation; generate each image individually. Do not combine multiple images into a single canvas.

Each image explains only one core structure. The prompt must contain:

- 16:9 horizontal English article illustration
- Pure white background
- Minimalist black hand-drawn line art
- Minimal red/orange/blue handwritten English annotations
- Generous white space
- Xiaohei as the active subject of the core action
- No PPT slide style, commercial vector look, childish cartoon feel, complex system architecture diagrams, or category titles in the top-left corner.

Do not directly copy previous examples. Examples only provide style density and Xiaohei's participation style; do not reuse metaphors unless requested. Always invent a fresh metaphor from the current article.

### 4. Check & Iterate

Check against `references/qa-checklist.md` after generating. If the following issues occur, regenerate or edit locally:

- Xiaohei is purely decorative
- The canvas is too crowded
- Looks too much like a standard flowchart or PPT slide
- Too many words or typos in English annotations
- A category title like "Pitfalls/Flowchart/System Architecture" appears in the top-left corner
- The style is too cute, childish, or rigid
- The background is not a clean, pure white

### 5. Save & Deliver

If working in a workspace, copy the final images to:

```text
assets/<article-slug>-illustrations/
```

Name them sequentially:

```text
01-topic-name.png
02-topic-name.png
```

Keep the original generated files and do not overwrite existing assets unless explicitly requested.

## Output Format

Before-generation strategy output should be short and precise. After-generation delivery should include:

- Number of images generated
- Purpose of each image
- Save paths
- Which images are most critical vs optional

Do not write long paragraphs explaining style theory; let the drawings speak for themselves.
