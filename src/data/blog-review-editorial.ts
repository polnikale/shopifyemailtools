import type { GoalEditorial } from './blog-editorial';

/** Proposed acceptance contracts, not performed merchant tests. */
export type ReviewEditorial = Omit<GoalEditorial, 'goal'> & { goal: 'review request apps' };
export const reviewEditorial: Record<string, ReviewEditorial> = {
  "best-shopify-review-request-apps-for-small-shopify-stores": {
    "audience": "small Shopify stores",
    "goal": "review request apps",
    "question": "Can one owner reconcile delivery and stop duplicate review jobs?",
    "entry": "Delivered line with a short, documented experience window; missing carrier evidence goes to the owner rather than a payment-date timer.",
    "fields": "order and line ID, variant ID, delivery evidence timestamp, permission source, request purpose, sender and backup owner",
    "guard": "Check delivery readiness, current request-purpose permission, unsubscribe and bounce suppression, existing review receipt, expiry and relevant service state immediately before dispatch. Apply the same documented rules regardless of rating, survey response or predicted sentiment. A support link and public review path remain available to everyone; never route only satisfied customers to public reviews.",
    "purchaseExit": "Close only the matched order-line request on a submitted-review receipt, withdrawal or expiry. Hold stale line mapping for reconciliation. An unrelated new purchase does not cancel existing review requests. Refunds and returns receive a documented neutral line-level disposition, not a negative-sentiment exclusion.",
    "retry": "Use an order-line, variant, purpose and episode idempotency key. Reconcile provider acknowledgement before retrying an ambiguous send; a timeout is not proof of non-delivery. Recheck readiness and permission before one bounded reminder. Submitted review, withdrawal, expiry or permanent failure stops pending jobs in every active sender; save cancellation acknowledgements and escalate missing ones.",
    "nativeRationale": "Judge.me is a useful first candidate for a small store that wants a dedicated request queue and can maintain its delivery feed.",
    "profileRationale": "Klaviyo Reviews is a useful candidate when the owner already operates Klaviyo flows and can inspect each Ready to review event without introducing a second active sender.",
    "acceptance": "Choose only after the owner demonstrates both proposed fixtures, the correct product review destination, current permission checks and a complete pending-job ledger. Neither supplier documentation proves this account meets these controls. Disable competing request senders before release; do not infer cancellation from a skipped flow step.",
    "failure": "A queued request outlives its line state or a provider acknowledgement is mistaken for a completed review.",
    "edges": [
      "Carrier evidence never arrives: hold the line and assign a delivery check; do not substitute paid date.",
      "The owner is absent during a sender migration: backup reconciles pending IDs before enabling the replacement."
    ],
    "denominator": "Use all delivered order-line episodes in the declared cohort as the readiness denominator; report eligible, held, expired and suppressed counts with reasons. For request completion, report unique submitted-review receipts over all eligible episodes assigned before sending, including unsent failures. Separately report acknowledgements, duplicate attempts and time to closure. Never remove poor ratings from the denominator or report star average as causal lift.",
    "handover": "Store owner and named backup owns the exception register, a fixed review deadline and backup coverage. Record order-line evidence, permission, request and provider IDs, disposition, retry budget and stop acknowledgements. Support resolution does not require a favorable review; re-entry after a service hold uses the same neutral readiness rules with a finite expiry."
  },
  "best-shopify-review-request-apps-for-dtc-brands": {
    "audience": "DTC brands",
    "goal": "review request apps",
    "question": "Can a bundle request retain line identity across acquisition cohorts?",
    "entry": "Delivered bundle components with documented component experience windows; acquisition source changes reporting, never access to a review.",
    "fields": "bundle parent and component lines, variant mapping version, acquisition cohort, delivery timestamps, request ID and submitted-review receipt",
    "guard": "Check delivery readiness, current request-purpose permission, unsubscribe and bounce suppression, existing review receipt, expiry and relevant service state immediately before dispatch. Apply the same documented rules regardless of rating, survey response or predicted sentiment. A support link and public review path remain available to everyone; never route only satisfied customers to public reviews.",
    "purchaseExit": "Close only the matched order-line request on a submitted-review receipt, withdrawal or expiry. Hold stale line mapping for reconciliation. An unrelated new purchase does not cancel existing review requests. Refunds and returns receive a documented neutral line-level disposition, not a negative-sentiment exclusion.",
    "retry": "Use an order-line, variant, purpose and episode idempotency key. Reconcile provider acknowledgement before retrying an ambiguous send; a timeout is not proof of non-delivery. Recheck readiness and permission before one bounded reminder. Submitted review, withdrawal, expiry or permanent failure stops pending jobs in every active sender; save cancellation acknowledgements and escalate missing ones.",
    "nativeRationale": "Judge.me is a useful candidate when the DTC team wants the dedicated review queue separate from campaign attribution, provided bundle mappings can be demonstrated.",
    "profileRationale": "Klaviyo Reviews is a useful candidate when the team maintains acquisition cohorts in Klaviyo and wants review-event flows beside them; prove component identity before selection.",
    "acceptance": "Choose only after the owner demonstrates both proposed fixtures, the correct product review destination, current permission checks and a complete pending-job ledger. Neither supplier documentation proves this account meets these controls. Disable competing request senders before release; do not infer cancellation from a skipped flow step.",
    "failure": "A queued request outlives its line state or a provider acknowledgement is mistaken for a completed review.",
    "edges": [
      "One bundle component is delivered and another delayed: request only the ready component and retain a separate pending disposition.",
      "An identity merge repeats a delivery event: reconcile the original request and review receipt without sending a second invitation."
    ],
    "denominator": "Use all delivered order-line episodes in the declared cohort as the readiness denominator; report eligible, held, expired and suppressed counts with reasons. For request completion, report unique submitted-review receipts over all eligible episodes assigned before sending, including unsent failures. Separately report acknowledgements, duplicate attempts and time to closure. Never remove poor ratings from the denominator or report star average as causal lift.",
    "handover": "Lifecycle lead with the data owner owns the exception register, a fixed review deadline and backup coverage. Record order-line evidence, permission, request and provider IDs, disposition, retry budget and stop acknowledgements. Support resolution does not require a favorable review; re-entry after a service hold uses the same neutral readiness rules with a finite expiry."
  },
  "best-shopify-review-request-apps-for-fashion-stores": {
    "audience": "fashion stores",
    "goal": "review request apps",
    "question": "Can the invitation follow the worn variant through an exchange?",
    "entry": "Delivered garment after the declared try-on window, with exchange and retained-variant reconciliation before dispatch.",
    "fields": "original and replacement line IDs, size and color variant, exchange state, delivery time, readiness deadline and review destination",
    "guard": "Check delivery readiness, current request-purpose permission, unsubscribe and bounce suppression, existing review receipt, expiry and relevant service state immediately before dispatch. Apply the same documented rules regardless of rating, survey response or predicted sentiment. A support link and public review path remain available to everyone; never route only satisfied customers to public reviews.",
    "purchaseExit": "Close only the matched order-line request on a submitted-review receipt, withdrawal or expiry. Hold stale line mapping for reconciliation. An unrelated new purchase does not cancel existing review requests. Refunds and returns receive a documented neutral line-level disposition, not a negative-sentiment exclusion.",
    "retry": "Use an order-line, variant, purpose and episode idempotency key. Reconcile provider acknowledgement before retrying an ambiguous send; a timeout is not proof of non-delivery. Recheck readiness and permission before one bounded reminder. Submitted review, withdrawal, expiry or permanent failure stops pending jobs in every active sender; save cancellation acknowledgements and escalate missing ones.",
    "nativeRationale": "Judge.me is a useful candidate for a fashion team that wants delivery-based scheduling with a dedicated review operator, if the retained variant can be reconciled.",
    "profileRationale": "Klaviyo Reviews is a useful candidate where fashion lifecycle staff already inspect review flows and can map exchange events; an order event alone does not establish the worn size.",
    "acceptance": "Choose only after the owner demonstrates both proposed fixtures, the correct product review destination, current permission checks and a complete pending-job ledger. Neither supplier documentation proves this account meets these controls. Disable competing request senders before release; do not infer cancellation from a skipped flow step.",
    "failure": "A queued request outlives its line state or a provider acknowledgement is mistaken for a completed review.",
    "edges": [
      "A size exchange completes after the original request was queued: retire the stale variant job and explicitly reconcile the replacement.",
      "A partial return leaves a retained color variant: apply the documented rule to each line, without treating return reason as sentiment."
    ],
    "denominator": "Use all delivered order-line episodes in the declared cohort as the readiness denominator; report eligible, held, expired and suppressed counts with reasons. For request completion, report unique submitted-review receipts over all eligible episodes assigned before sending, including unsent failures. Separately report acknowledgements, duplicate attempts and time to closure. Never remove poor ratings from the denominator or report star average as causal lift.",
    "handover": "Returns lead and review operator owns the exception register, a fixed review deadline and backup coverage. Record order-line evidence, permission, request and provider IDs, disposition, retry budget and stop acknowledgements. Support resolution does not require a favorable review; re-entry after a service hold uses the same neutral readiness rules with a finite expiry."
  },
  "best-shopify-review-request-apps-for-beauty-stores": {
    "audience": "beauty stores",
    "goal": "review request apps",
    "question": "Can readiness reflect experience without screening for a positive result?",
    "entry": "Delivered formula after a documented product-specific experience interval; never wait for a favorable survey or inferred result.",
    "fields": "shade or formula variant, product experience interval version, delivery evidence, request-purpose permission and relevant service-case status",
    "guard": "Check delivery readiness, current request-purpose permission, unsubscribe and bounce suppression, existing review receipt, expiry and relevant service state immediately before dispatch. Apply the same documented rules regardless of rating, survey response or predicted sentiment. A support link and public review path remain available to everyone; never route only satisfied customers to public reviews.",
    "purchaseExit": "Close only the matched order-line request on a submitted-review receipt, withdrawal or expiry. Hold stale line mapping for reconciliation. An unrelated new purchase does not cancel existing review requests. Refunds and returns receive a documented neutral line-level disposition, not a negative-sentiment exclusion.",
    "retry": "Use an order-line, variant, purpose and episode idempotency key. Reconcile provider acknowledgement before retrying an ambiguous send; a timeout is not proof of non-delivery. Recheck readiness and permission before one bounded reminder. Submitted review, withdrawal, expiry or permanent failure stops pending jobs in every active sender; save cancellation acknowledgements and escalate missing ones.",
    "nativeRationale": "Judge.me is a useful candidate for a beauty catalog whose operator can maintain delivery and product timing settings, subject to a demonstrated formula mapping.",
    "profileRationale": "Klaviyo Reviews is a useful candidate for a team already maintaining product cohorts and review-event flows, provided the experience interval is independently verified.",
    "acceptance": "Choose only after the owner demonstrates both proposed fixtures, the correct product review destination, current permission checks and a complete pending-job ledger. Neither supplier documentation proves this account meets these controls. Disable competing request senders before release; do not infer cancellation from a skipped flow step.",
    "failure": "A queued request outlives its line state or a provider acknowledgement is mistaken for a completed review.",
    "edges": [
      "A shade is replaced while the original formula request is queued: hold and reconcile the actual received variant.",
      "A safety-related service case opens: route urgent help immediately and keep the public review path available, with a time-bounded neutral invitation hold."
    ],
    "denominator": "Use all delivered order-line episodes in the declared cohort as the readiness denominator; report eligible, held, expired and suppressed counts with reasons. For request completion, report unique submitted-review receipts over all eligible episodes assigned before sending, including unsent failures. Separately report acknowledgements, duplicate attempts and time to closure. Never remove poor ratings from the denominator or report star average as causal lift.",
    "handover": "Customer care lead with the catalog owner owns the exception register, a fixed review deadline and backup coverage. Record order-line evidence, permission, request and provider IDs, disposition, retry budget and stop acknowledgements. Support resolution does not require a favorable review; re-entry after a service hold uses the same neutral readiness rules with a finite expiry."
  },
  "best-shopify-review-request-apps-for-food-and-beverage-stores": {
    "audience": "food and beverage stores",
    "goal": "review request apps",
    "question": "Can perishable delivery and consumption readiness be verified per pack?",
    "entry": "Delivered pack with a documented tasting window and verified delivery condition; a subscription payment does not prove receipt.",
    "fields": "pack variant, lot reference if available, delivery and tasting-window timestamps, replacement line, service status and request expiry",
    "guard": "Check delivery readiness, current request-purpose permission, unsubscribe and bounce suppression, existing review receipt, expiry and relevant service state immediately before dispatch. Apply the same documented rules regardless of rating, survey response or predicted sentiment. A support link and public review path remain available to everyone; never route only satisfied customers to public reviews.",
    "purchaseExit": "Close only the matched order-line request on a submitted-review receipt, withdrawal or expiry. Hold stale line mapping for reconciliation. An unrelated new purchase does not cancel existing review requests. Refunds and returns receive a documented neutral line-level disposition, not a negative-sentiment exclusion.",
    "retry": "Use an order-line, variant, purpose and episode idempotency key. Reconcile provider acknowledgement before retrying an ambiguous send; a timeout is not proof of non-delivery. Recheck readiness and permission before one bounded reminder. Submitted review, withdrawal, expiry or permanent failure stops pending jobs in every active sender; save cancellation acknowledgements and escalate missing ones.",
    "nativeRationale": "Judge.me is a useful candidate for a food operator seeking a dedicated delivery-based review queue, if pack readiness can be reconciled with the carrier feed.",
    "profileRationale": "Klaviyo Reviews is a useful candidate when a food brand already operates product review flows in Klaviyo and can supply pack delivery context; subscription renewal alone is insufficient.",
    "acceptance": "Choose only after the owner demonstrates both proposed fixtures, the correct product review destination, current permission checks and a complete pending-job ledger. Neither supplier documentation proves this account meets these controls. Disable competing request senders before release; do not infer cancellation from a skipped flow step.",
    "failure": "A queued request outlives its line state or a provider acknowledgement is mistaken for a completed review.",
    "edges": [
      "A chilled delivery is replaced: retire the stale pack invitation and reconcile the replacement delivery independently.",
      "A recurring payment arrives before the first pack is delivered: do not start a second tasting clock or cancel the first request."
    ],
    "denominator": "Use all delivered order-line episodes in the declared cohort as the readiness denominator; report eligible, held, expired and suppressed counts with reasons. For request completion, report unique submitted-review receipts over all eligible episodes assigned before sending, including unsent failures. Separately report acknowledgements, duplicate attempts and time to closure. Never remove poor ratings from the denominator or report star average as causal lift.",
    "handover": "Fulfillment lead and customer care owner owns the exception register, a fixed review deadline and backup coverage. Record order-line evidence, permission, request and provider IDs, disposition, retry budget and stop acknowledgements. Support resolution does not require a favorable review; re-entry after a service hold uses the same neutral readiness rules with a finite expiry."
  }
};
