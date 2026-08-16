# Esther Cho Website — Media Consent & Ethical Review Policy

Status: SPRINT-0 POLICY DRAFT

This policy governs whether archival/editorial media may be rendered publicly. It is deliberately conservative: uncertainty does not become permission by default.

It is an editorial and technical safety policy, not a substitute for jurisdiction-specific legal advice.

## 1. Default state

Every newly ingested archival/editorial media object defaults to:

`review`

No media becomes publicly renderable merely because it was uploaded, attached to a Story, or previously shared on social media.

## 2. States

### `cleared`

The project has enough basis to publish the media in the intended context.

Clearance may depend on:

- Esther's own ownership/permission,
- creator/photographer rights where relevant,
- third-party privacy and dignity,
- intended caption/context,
- whether identifiable children or vulnerable people are present.

### `review`

Publication basis is incomplete or contextual review is still required.

Future public rendering should fail safe: a `review` image is omitted or held rather than published accidentally.

### `restricted`

The media must not be rendered publicly in the current project context.

The archival record may remain private for preservation/history.

## 3. Rejected creative assets

An asset can also be editorially `rejected-retired` even when legal/consent permission is not the issue.

Rejected media must not re-enter active media selection simply because an old manifest or file reference still exists.

## 4. Third parties

Do not publicly identify third parties unless identity and publication basis are confirmed.

Recognition by the editor is not sufficient evidence of permission.

Captions should avoid unnecessary personal identification when the Story does not require it.

## 5. Children and vulnerable people

Photographs containing identifiable children or people in vulnerable circumstances receive heightened review.

This includes refugee-camp/service imagery.

The current Bangladesh/refugee-camp service photograph and any additional images from that collection begin at `review` during registry migration.

Review considers more than legal permission. It also asks whether publication centers Esther's story without turning another person's vulnerability into atmosphere, evidence of virtue, or decorative context.

## 6. Service / mission imagery

Service photographs must not be used as generic proof that Esther is a good Christian/person.

They require a specific narrative reason and accurate context.

Where third-party exposure is unnecessary, cropping or selecting a different real image is preferred to publishing identifiable vulnerable people.

## 7. Family photographs

Family relation does not automatically equal public clearance.

Categories requiring explicit review before future use include:

- children,
- spouse/ex-spouse,
- parents,
- extended family,
- wedding photographs,
- funeral photographs,
- medical/caregiving contexts.

## 8. Social-media screenshots

A screenshot from Instagram or another social platform is not automatically a cleared archive master.

The record should distinguish:

- screenshot/source evidence,
- underlying photograph if available,
- public-site derivative,
- rights/consent basis.

If only a screenshot survives, that limitation is recorded rather than hidden.

## 9. Drawings and reinterpretations

Original Esther drawings are treated as creative works with provenance.

Later editorial/AI-assisted reinterpretations must:

- be labelled as reinterpretations when context could otherwise mislead,
- link to approved source material in the internal registry,
- never be presented as a historical photograph or original childhood artifact.

## 10. Author-facing publishing UX

The author UI should not expose legal jargon as the primary interaction.

A simple question may map to internal state, for example:

- `I know this is okay to publish` → candidate for clearance/review workflow,
- `I'm not sure` → `review`,
- `Do not publish this` → `restricted`.

The system must not let a blank field mean `cleared`.

## 11. Technical enforcement

When the future Photo/media boundary exists:

- `cleared` may render publicly,
- `review` does not render publicly by default,
- `restricted` never renders publicly,
- rejected-retired media is not offered as active content.

A content build may warn that a Story references non-cleared media, but the safest public behavior is omission/hold rather than publishing first and fixing later.

## 12. Audit record

For any media whose status changes, the registry should be able to record:

- status,
- reviewed date,
- reviewer/decision owner,
- short note/basis,
- scope if permission is contextual rather than universal.

The public site does not need to expose private review notes.

## 13. Existing-site migration rule

Current public presence is evidence of past editorial use, not automatic proof of future `cleared` status.

During canonical registry migration, sensitive categories may return to `review` until the basis is reconstructed.

This is especially true for Bangladesh/refugee-camp imagery and identifiable third-party family/service photographs.

## 14. Escalation

If publication could materially affect privacy, safety, dignity, contractual rights, or legal exposure and the basis is uncertain, do not resolve the uncertainty through AI inference.

Hold the asset and obtain human/legal review appropriate to the situation.
