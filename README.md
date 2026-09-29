# ByteSpace New

Figma → Next.js conversion (Doin Tech assessment). Next.js (App Router) · TypeScript · Tailwind CSS v4.

## Run

```bash
npm install
npm run dev
```

Scripts: `lint`, `typecheck`, `format`, `format:check`, `build`.

## Structure

```
public/images/{common,home,auth}   page অনুযায়ী image
public/icons                       static SVG
src/app/(marketing)                landing page (Header + Footer সহ)
src/app/(auth)                     login, signup (layout ছাড়া)
src/components/ui                  Button, Container, Section — reusable primitives
src/components/layout              Header, Footer
src/components/sections/home       Hero, Courses, Categories ... (page section)
src/components/common              একাধিক section এ ব্যবহৃত component (CourseCard ইত্যাদি)
src/components/icons               inline SVG icon component
src/config                         site info, navigation
src/data                           static mock data
src/types                          shared TypeScript types
src/lib                            helper (cn)
```

## Theme

সব design token `src/app/globals.css` এর `@theme` block এ। Component এ hex/px hardcode করা যাবে না।

## Git

`main` এ সরাসরি কাজ নয় — feature branch থেকে PR।
