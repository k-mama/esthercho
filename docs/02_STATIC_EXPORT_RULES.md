This project uses Next.js Static HTML Export. The following Next.js features are prohibited:

- Server Actions
- cookies()
- headers()
- draftMode()
- request-dependent Route Handlers
- runtime API routes
- ISR and revalidate
- middleware that requires a server
- dynamic routes without generateStaticParams()
- default server-based Next.js image optimization

Additionally:

- next/image may be used only with the approved static-export image strategy.
- all routes must be build-time renderable.
- all locale routes must be generated during build.
