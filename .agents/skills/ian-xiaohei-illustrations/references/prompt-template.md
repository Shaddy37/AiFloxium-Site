# Image Prompt Template

Generate each image individually. Replace variables based on the article context. Do not combine multiple illustrations into a single canvas.

```text
Generate one standalone 16:9 horizontal English article illustration.

Visual DNA:
Pure white background. Minimalist black hand-drawn line art. Slightly wobbly pen lines. Lots of empty white space. Sparse red/orange/blue handwritten English annotations. Clean absurd product-sketch feeling. No gradients, no shadows, no paper texture, no complex background, no commercial vector style, no PPT infographic look, no cute mascot poster, no children's illustration, no realistic UI.

Recurring IP character required:
Xiaohei, a small solid-black absurd creature with white dot eyes, tiny thin legs, blank serious expression, slightly uneven hand-drawn body shape. Xiaohei must perform the core conceptual action, not decorate the scene. Make Xiaohei serious, deadpan, and slightly bizarre, not cute.

Theme:
{Illustration Theme / Subject}

Structure type:
{Structure Type: Workflow / System Architecture / Before-After Comparison / Character State / Conceptual Metaphor / Method Stack / Map Route / Mini-Comic Panels}

Core idea:
{The core message this illustration should convey}

Composition:
{Specific layout: Where Xiaohei is, what Xiaohei is doing, what the main objects are, and how information flows}

Suggested elements:
{Element 1} / {Element 2} / {Element 3} / {Element 4}

English handwritten labels:
{Label 1} / {Label 2} / {Label 3} / {Label 4} / {Optional Label 5}

Color use:
Black for main line art and Xiaohei. Orange for main flow/path/arrows. Red only for key warnings/problems/results. Blue only for secondary notes or feedback/system state.

Constraints:
One image explains only one core structure. Keep the main subject around 40%-60% of the canvas. Preserve at least 35% blank white space. Use at most 5-8 short handwritten English labels. Do not write a title in the top-left corner. Do not write the structure type on the image. Do not make it a formal diagram, course slide, or dense explainer. Do not copy prior examples or reuse known case compositions unless explicitly requested; invent a fresh visual metaphor for this specific article. It should be clear but not instructional, interesting but not childish, strange but clean.
```

## Image Edit Prompts

Remove Top-Left Title:

```text
Edit the provided image. Remove only the handwritten title "{Title to Remove}" and its underline from the top-left corner. Fill that area with the same clean white background, matching the surrounding blank paper. Preserve everything else exactly: characters, labels, paths, line style, composition, aspect ratio, and image quality. Do not add any new text or objects.
```

Enhance Absurdity:

```text
Regenerate this illustration with the same core meaning and simple layout, but make Xiaohei more central to the conceptual action. Xiaohei should be doing the strange work that explains the idea, not standing beside the diagram. Keep it clean, sparse, hand-drawn, and not cute.
```
