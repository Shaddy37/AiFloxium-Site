# Homepage Hero Redesign

Date: 2026-05-15
Scope: Homepage hero only
Status: Approved for planning review

## Goal

Redesign the homepage hero to feel minimal, focused, and outcome-led while preserving the existing navbar and the site's light-theme brand language.

## Constraints

- Do not modify the existing navbar.
- Keep the redesign scoped to the homepage hero only.
- Preserve the light theme.
- Merge the desired reference direction into the current visual style rather than copying it literally.
- Keep the current hero placement within the homepage structure so downstream sections remain unchanged.

## Current Problems

- The hero has too many competing focal points.
- The oversized headline, chip row, multiple CTAs, floating CTA, decorative line, video popup, glow effects, and animated globe all compete for attention.
- The current composition feels dense instead of intentional.
- The visual emphasis is split across too many elements instead of landing on one clear message.

## Design Direction

The redesigned hero should use a headline-first editorial layout with a single dominant outcome-led statement. Supporting content should be reduced to the minimum needed to explain the offer and provide a next action. The 3D globe remains, but only as quiet atmosphere.

Recommended approach: Editorial minimal.

Rejected alternatives:

- Split emphasis with a proof card: adds credibility but reintroduces density.
- Monument headline with near-zero support: strong visually, but too sparse and dependent on perfect copy.

## Content Strategy

### Tone

Outcome-led.

The message should emphasize business results such as removing bottlenecks, accelerating teams, and turning messy operations into reliable systems.

### Hierarchy

1. Eyebrow
2. Dominant headline
3. Short supporting paragraph
4. Primary CTA
5. Secondary link

### Copy Rules

- The headline should carry the main promise.
- Supporting copy should mention automation, internal tools, and AI agents once, without turning into a service list.
- CTA language should stay business-focused.
- Avoid repeated claims expressed in multiple formats.

## Layout

### Overall Structure

- Keep `Navbar` unchanged above the hero.
- Keep the hero rendered via the existing homepage `Hero3D` and `HeroContent` slot.
- Use one centered content column with generous vertical spacing.
- The content block should occupy the visual center of the hero.

### Desktop

- Large centered headline across roughly 2 to 4 lines depending on viewport width.
- Supporting paragraph directly below with controlled line length.
- One primary CTA button with one subdued secondary text link.
- Ample whitespace around the content block.

### Mobile

- Preserve the same hierarchy.
- Tighten vertical spacing and line lengths.
- Remove nonessential decoration before reducing the headline's importance.

## Visual System

### Theme

- Keep the light theme.
- Use the existing brand orange and plum accents sparingly.
- Favor cleaner surfaces and softer contrast over layered glow-heavy treatment.

### Background

- Keep the 3D globe background.
- Reduce its visual dominance with lower contrast and calmer motion.
- Treat it as texture, not as the hero's main feature.

### Motion

- Use restrained entrance motion such as simple fade and slight upward movement.
- Remove multiple simultaneous animated accents that compete with readability.

## Elements To Remove

- Status chips
- Third CTA
- Fixed floating CTA
- Heavy glow layers competing with text
- Decorative linework that adds noise to the center
- Repetitive copy patterns

## Elements To Keep In Spirit

- Brand accents
- Premium feel
- Some motion
- 3D identity

These should remain, but in a quieter and more disciplined form.

## Implementation Scope

### Files Expected To Change

- `components/sections/HeroContent.tsx`
- Potentially `components/sections/Hero3D.tsx`
- Potentially `components/ui/globe-hero.tsx`

### Files Explicitly Out Of Scope

- `components/layouts/Navbar.tsx`
- Non-hero homepage sections
- Site-wide theme changes

## Success Criteria

- The headline is the immediate focal point.
- The hero feels cleaner and less clustered than the current version.
- Users can understand the offer quickly without scanning multiple competing elements.
- The design still feels consistent with the site's brand.
- The navbar remains unchanged.

## Risks

- Over-simplifying could make the hero feel generic if the headline and supporting copy are weak.
- Keeping the globe too visible could preserve the current clutter problem.
- Retaining too many accents in the name of brand consistency could undermine the redesign.

## Verification Expectations

- Review the hero at desktop and mobile widths.
- Confirm the navbar is untouched.
- Confirm the light theme remains intact.
- Confirm the content hierarchy is eyebrow, headline, body copy, primary CTA, secondary link.
- Confirm no floating CTA or chip row remains in the hero.
