# Keystatic — Sprint 0 Proof of Concept

Status: SCHEMA/ARCHITECTURE POC — NOT SELECTED FOR PRODUCTION

This folder is intentionally isolated from the production Next.js application.

`keystatic.config.example.txt` is kept out of the production TypeScript graph because the main application does not install Keystatic packages during Sprint 0.

## What this PoC tests

The schema experiment asks whether one Story entry can own:

- immutable semantic Story ID,
- shared archival metadata,
- independent KO/EN publication states,
- separate KO/EN titles and public slugs,
- separate long-form KO/EN bodies,
- Story photos with simple author-facing consent questions,
- plain-text/Git-backed output.

## Strong point discovered

Keystatic has stronger typed schema composition than the current Sveltia YAML PoC.

A single entry can conceptually keep shared metadata once while storing multiple long-form MDX/Markdown fields separately from the main data file.

That is attractive because it avoids physically duplicating shared archival fields across locale files.

## Important Story-ID weakness

Keystatic collections require a slug field that controls the physical entry path.

That storage slug must not be mistaken for the immutable semantic `storyId`.

The example therefore separates:

- `entryKey` — physical collection path key,
- `storyId` — semantic immutable identity,
- `korean.publicSlug` / `english.publicSlug` — public presentation URLs.

Unlike the Sveltia PoC's read-only UUID field, this example does not yet provide a built-in author-safe automatic immutable Story-ID generator.

A production Keystatic design would need to solve that without making Esther type or manage technical identity.

## Deployment constraint

This is the decisive architectural issue.

Keystatic's official Next.js integration requires:

- the `/keystatic` admin UI,
- a Keystatic API route handler,
- server-side code.

The official deployment guide states that the hosting provider must support Node.js because Keystatic requires server-side code and Next.js API routes.

The current Esther site intentionally uses Next static export and Cloudflare Pages static deployment.

Therefore Keystatic cannot simply be inserted into the current production application while preserving that architecture.

A realistic Keystatic production option would require one of these changes:

1. a separate server-capable admin application that writes to the same GitHub repository,
2. moving the whole site away from pure static export to a supported server runtime,
3. another supported Keystatic deployment architecture proven separately.

Option 2 is currently disproportionate because the public site itself does not need a server.

## Why the separate-admin option remains worth testing

A separate Keystatic admin could theoretically provide:

- richer typed content forms,
- shared metadata without locale duplication,
- Git-backed plain-text content,
- no need to make the public Esther site dynamic.

But it adds another deployed application, authentication surface, operational owner, and recovery procedure.

That complexity must be compared against Sveltia's smaller static admin plus OAuth authenticator/Worker.

## Media observation

Keystatic's standard image field writes image files into the local filesystem/Git repository in local/GitHub storage modes.

That is suitable for the current small-asset phase but does not by itself solve the long-term canonical Media registry or future R2 delivery architecture.

As with Sveltia, photo upload in the author form is only the front end of the problem. A production integration still needs a canonical media-ingestion boundary.

## Human acceptance task

Keystatic cannot be selected from schema elegance alone.

A runnable separate-admin PoC would still need Esther to attempt the same task used for Sveltia:

1. create a Story,
2. write only one language original,
3. add photos/captions,
4. leave the other language not-started,
5. save/publish without developer assistance,
6. later add the second original,
7. understand whether production deployment succeeded.

## Current comparison status

### Sveltia

Pros:

- naturally static admin shell,
- strong built-in i18n model,
- read-only generated UUID field,
- one-screen locale editing model,
- closest fit to current static public architecture.

Costs/risks:

- still beta,
- production GitHub login for non-technical users still needs OAuth infrastructure such as a Cloudflare Worker,
- shared fields in multiple locale files need divergence/authority testing,
- canonical media registry remains custom integration work.

### Keystatic

Pros:

- strong typed schema,
- shared metadata can remain single-source in one entry,
- multiple long-form content fields can be stored separately,
- plain-text/Git-oriented content model.

Costs/risks:

- deployed Next admin requires server-side/API routes,
- does not fit the current static production app without a separate runtime or architecture change,
- automatic immutable Story-ID author UX still needs design,
- separate admin application would add operational ownership and deployment complexity.

## PoC conclusion so far

Neither CMS is selected yet.

Sveltia currently has the lower architectural mismatch with the public static site, while Keystatic currently has the cleaner typed shared-metadata model.

The next CMS decision gate is not more documentation. It is a runnable author-facing comparison plus deployment/authentication proof.
