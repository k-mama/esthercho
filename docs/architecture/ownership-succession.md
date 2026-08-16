# Esther Cho Website — Ownership & Succession Inventory

Status: SPRINT-0 INVENTORY — NO CREDENTIALS IN REPOSITORY

This document records system stewardship and unresolved ownership questions without storing passwords, recovery codes, private account IDs, or other secrets.

A ten-year personal archive must survive a change of developer, account owner, or service provider.

## 1. Repository

Known:

- GitHub repository: `k-mama/esthercho`
- repository is currently public
- production work is committed to `main`

Operational implication:

- the current GitHub namespace/account is a critical continuity dependency,
- repository history is recoverable through clones, but write/deployment authority depends on account access.

Still to confirm outside the repository:

- who should be the long-term administrative owner if the current technical steward stops maintaining the project,
- whether Esther should hold direct repository/account recovery access or whether another designated successor should,
- offline recovery procedure.

## 2. Cloudflare Pages

Known from project operation:

- the site is deployed through Cloudflare Pages from the GitHub `main` branch,
- current public Pages hostname: `esthercho.pages.dev`.

Not proven by repository data:

- legal/account owner of the Cloudflare account,
- who else has administrator access,
- recovery email/2FA succession procedure,
- exact project ownership/transfer plan.

These items must be confirmed in a private operational record, not committed here.

## 3. Custom domain

Current production identity in the codebase uses the Pages hostname.

No long-term custom-domain ownership record is established in this Sprint-0 inventory.

If a custom domain is introduced later, the continuity record must include privately:

- registrar,
- registrant/administrative owner,
- renewal responsibility,
- recovery method,
- DNS owner,
- successor access.

Domain expiry is an archive-continuity risk and must never depend on one person's memory.

## 4. Author identity and content stewardship

The site represents Esther Cho / 조성연 as the author identity.

The technical repository must not become the only place where the meaning, provenance, or publication status of her life archive can be understood.

Long-term content stewardship requires a human decision about:

- who may publish in Esther's name,
- who may correct factual/archive metadata,
- who may approve sensitive family/service media,
- who may approve publishing/rights excerpts,
- who acts if Esther cannot make the decision herself.

These roles are not fully documented yet.

## 5. Archive masters

Current repository manifests prove source filenames for a number of assets, but they do not prove durable Archive Master storage.

Unresolved:

- where original photographs/scans/videos currently live,
- who controls that storage,
- whether a preservation copy exists,
- whether any originals exist only on a phone, transient upload directory, messaging service, or single external drive.

This is the highest non-code succession risk currently identified.

## 6. CMS

No production CMS is selected yet.

This is beneficial during Sprint 0 because no additional account/vendor dependency has been created.

CMS selection must document:

- who authenticates,
- who can publish,
- what happens if the CMS vendor disappears,
- how content remains recoverable as plain text in Git,
- how successor access is transferred.

## 7. Media delivery / R2

No constitutional commitment has been made to R2 or another external media store yet.

If adopted, the ownership record must distinguish:

- Archive Master storage,
- Preservation Copy storage,
- Web Delivery storage,
- billing/account owner,
- API/deployment credentials,
- successor/recovery access.

Web delivery storage must never be the sole preservation copy.

## 8. GitHub Actions and deployment credentials

Current audit workflows use repository Actions and do not intentionally place secrets in source files.

Any future secret/token must:

- live in the appropriate secret store,
- have a documented purpose and owner,
- have a rotation/recovery procedure,
- be removable without losing canonical content.

Never record token values in this document.

## 9. Minimum private succession packet

Before the project is considered operationally mature, the human owners should maintain a private packet outside the public repository containing at least:

- GitHub recovery/administrator plan,
- Cloudflare recovery/administrator plan,
- custom-domain registrar access if a domain exists,
- archive-master storage map,
- preservation-copy storage map,
- CMS administrator/recovery plan,
- rights/contact decision owner,
- list of people authorized to publish or remove sensitive material,
- instructions for handing the project to a new technical maintainer.

The packet itself must not be committed to the public repository.

## 10. Succession acceptance test

A future maintainer who has never worked on the site should be able, with authorized access, to answer:

1. Where is the canonical source code?
2. How is production deployed?
3. Where are the original archive masters?
4. Which system contains public delivery derivatives?
5. How can a Story be published without editing JSX?
6. Who can approve sensitive media and manuscript excerpts?
7. How are EN and KO originals paired?
8. How are old URLs preserved?
9. How is the domain renewed/recovered?
10. How can the project be moved away from any vendor without losing the archive?

If those answers depend on one person's memory, succession is not complete.

## 11. Current Sprint-0 classification

Confirmed:

- GitHub repository identity,
- public Pages hostname,
- GitHub-to-Cloudflare deployment pattern.

Unknown / human confirmation required:

- Cloudflare account owner/recovery,
- durable archive-master locations,
- preservation-copy locations,
- long-term administrative successor,
- sensitive-content approval successor,
- future custom-domain ownership,
- future CMS ownership.

Sprint 0 may document these unknowns. It must not guess them.
