/** Editorial acceptance fixtures, not performed merchant tests. */
export type WelcomeAudience = 'small Shopify stores' | 'DTC brands' | 'fashion stores' | 'beauty stores' | 'food and beverage stores' | 'subscription brands' | 'Shopify Plus merchants' | 'international merchants' | 'new Shopify stores' | 'high-volume stores';
/** Only welcome is implemented; other route goals deliberately retain their existing renderer. */
export type WelcomeEditorial = {
  audience: WelcomeAudience; goal: 'welcome email apps'; question: string; entry: string;
  fields: string; guard: string; purchaseExit: string; retry: string;
  nativeRationale: string; profileRationale: string; acceptance: string;
  failure: string; edges: readonly [string, string]; denominator: string; handover: string;
};
export const welcomeEditorial: Record<string, WelcomeEditorial> = {
  "best-shopify-welcome-email-apps-for-small-shopify-stores": {
    "audience": "small Shopify stores",
    "goal": "welcome email apps",
    "nativeRationale": "A single owner can keep form capture and the introduction together with Shopify Messaging. Start with that native candidate when one approved template fulfills the signup promise; fewer sender handoffs make the duplicate-coupon exercise easier to inspect.",
    "profileRationale": "Klaviyo list entry is useful when the store already maintains a subscriber list there: keep the existing operator workflow rather than introducing another sender. Select it only if the owner can demonstrate the import exclusion and cover absence.",
    "acceptance": "Prefer the candidate whose owner can replay one signup without a second coupon, exclude an imported customer and pause queued offers during absence. Record the active sender, replay ID and backup owner; hold selection if either candidate leaves an unowned queue.",
    "question": "Can one owner maintain a useful introduction without a second sender?",
    "entry": "Confirmed newsletter form subscription",
    "fields": "form source, owner, first-order state",
    "guard": "Only the approved single welcome automation may dispatch",
    "purchaseExit": "Cancel the introduction on the first paid order; hand over to order education",
    "retry": "Replay the same subscription ID without creating another welcome job",
    "failure": "Two installed apps send the same coupon",
    "edges": [
      "An imported customer must not enter as a fresh signup",
      "An owner absence must pause pending offers rather than leave an unowned queue"
    ],
    "denominator": "Unique confirmed first-time subscribers assigned before dispatch",
    "handover": "Store owner reviews queued exceptions and records who covers absence"
  },
  "best-shopify-welcome-email-apps-for-dtc-brands": {
    "audience": "DTC brands",
    "goal": "welcome email apps",
    "nativeRationale": "For a DTC offer with a simple acquisition promise, Shopify Messaging keeps the introduction close to the store workflow. It is a positive starting point when growth can maintain the offer version there and finance can trace its cost.",
    "profileRationale": "Klaviyo profile filtering is a useful building block for separating acquisition cohorts when campaign and margin fields are reliably supplied. This is an architecture proposal: prove those fields and repeat-buyer exclusions in the account before selecting that branch.",
    "acceptance": "Accept only with a full-price cohort preserved, an expired coupon held and a merged repeat buyer excluded. Save campaign, margin band, offer version and order trace together. Prefer the configuration that preserves the landing-page promise with the least ongoing reconciliation work.",
    "question": "Does the first-order offer preserve contribution for this acquisition source?",
    "entry": "Confirmed acquisition landing-page subscription",
    "fields": "campaign ID, offer eligibility, margin band, order history",
    "guard": "Validate the landing-page promise and non-stacking offer eligibility",
    "purchaseExit": "Paid order cancels acquisition offers even if the first-order flag arrives late",
    "retry": "Retry with the original offer version; expired promises go to an operator",
    "failure": "A repeat buyer receives a first-order incentive after identity merge",
    "edges": [
      "A full-price acquisition cohort must retain its no-discount branch",
      "A coupon expiring during the queue must not become a replacement discount automatically"
    ],
    "denominator": "Unique eligible acquisition subscribers randomized within source and margin band",
    "handover": "Growth owner approves offer versions; finance reconciles refunds and discount cost"
  },
  "best-shopify-welcome-email-apps-for-fashion-stores": {
    "audience": "fashion stores",
    "goal": "welcome email apps",
    "nativeRationale": "Shopify Messaging is worth a native trial for a fashion introduction centered on a size guide: a helpful first action can work even without a live product recommendation. Use a guide fallback while the merchandiser validates variant mapping.",
    "profileRationale": "Klaviyo filtering offers a reason to trial preference-based branches when a declared size is available as maintained profile data. A size-specific recommendation remains conditional on a fresh purchasable variant check; a profile preference alone cannot establish inventory.",
    "acceptance": "Accept a recommendation branch only after a sold-out requested size selects the guide fallback and a preorder keeps its separate delivery promise. Log variant, stock observation and template version. Prefer the guide-only configuration if fresh inventory cannot be demonstrated.",
    "question": "Can a welcome recommendation still be bought in the subscriber\u2019s size?",
    "entry": "Confirmed style-guide signup with optional size preference",
    "fields": "size preference, variant ID, stock timestamp, return-policy version",
    "guard": "Refresh size availability and link only purchasable variants",
    "purchaseExit": "Any paid first order ends welcome selling and routes to size/care guidance",
    "retry": "Recompute variant choices on retry without resending an already acknowledged message",
    "failure": "A popular style remains in stock but the requested size is gone",
    "edges": [
      "Missing size goes to a size-guide link rather than an inferred body profile",
      "A preorder needs its own delivery promise rather than an in-stock claim"
    ],
    "denominator": "Unique confirmed style signups, stratified by known versus unknown size",
    "handover": "Merchandiser owns variant fallbacks; service owns sizing questions"
  },
  "best-shopify-welcome-email-apps-for-beauty-stores": {
    "audience": "beauty stores",
    "goal": "welcome email apps",
    "nativeRationale": "Shopify Messaging is a useful candidate for an educator-led introduction with approved routine copy and a simple preference question. Keeping that narrow message near the store can reduce editorial handoffs while the product educator owns instructions.",
    "profileRationale": "Klaviyo profile filters are a useful basis for declared-interest branches if the educator can maintain those fields. Trial it for distinct routine paths, with instruction versions supplied explicitly; no diagnosis or product suitability is inferred from the documented flow features.",
    "acceptance": "Accept only when unknown interest asks a question, a substituted bundle refreshes instructions and a paid starter kit exits selling. Record educator approval alongside the kit version. Choose the simpler educational path if either system cannot invalidate old directions.",
    "question": "Should the introduction teach routine order before recommending another product?",
    "entry": "Confirmed routine-education signup",
    "fields": "declared routine interest, product instructions, catalog version, purchase state",
    "guard": "Use approved product-use instructions and only declared preferences",
    "purchaseExit": "Paid starter-kit order exits selling into that kit\u2019s usage education",
    "retry": "Retry against current instructions; changed directions require editorial approval",
    "failure": "A welcome branch invents a skin diagnosis from browsing",
    "edges": [
      "Unknown routine interest receives a preference question rather than a diagnosis",
      "A bundle substitution must refresh instructions before any queued recommendation"
    ],
    "denominator": "Unique confirmed routine subscribers, separated by declared interest",
    "handover": "Product educator approves instructions; service receives adverse-use questions"
  },
  "best-shopify-welcome-email-apps-for-food-and-beverage-stores": {
    "audience": "food and beverage stores",
    "goal": "welcome email apps",
    "nativeRationale": "Shopify Messaging can be a useful starting point for a tasting-list welcome that explains pack choices without a delivery deadline. Native form entry supports keeping buyer capture close to the store while fulfillment owns any later cutoff logic.",
    "profileRationale": "Klaviyo filtering is a useful candidate for declared gift versus self-interest branches when destination and intent are maintained fields. The benefit is relevant buyer copy; destination eligibility and perishable deadlines still need an explicit current-state integration.",
    "acceptance": "Accept only after a delayed job loses an expired delivery promise, recipient details remain unenrolled and an existing subscriber avoids an acquisition box offer. Save destination, cutoff and buyer permission trace. Prefer deadline-free copy if cutoff freshness cannot be proved.",
    "question": "Can the first welcome offer reach this destination before its promised occasion?",
    "entry": "Confirmed tasting-list subscription with optional gifting intent",
    "fields": "destination, pack size, gift intent, shipping cutoff, subscription state",
    "guard": "Validate destination eligibility and the current perishable shipping cutoff",
    "purchaseExit": "Paid gift order ends buyer offers; never enroll the recipient from delivery details",
    "retry": "Re-evaluate cutoff on retry and replace urgency with a future availability path",
    "failure": "A delayed welcome promises a gift delivery window that has already closed",
    "edges": [
      "A gift recipient address is fulfillment data rather than marketing permission",
      "An existing subscription buyer needs preferences rather than another acquisition box"
    ],
    "denominator": "Unique confirmed tasting subscribers by destination and gift/self intent",
    "handover": "Fulfillment owns cutoffs; marketing owns buyer permission and gift copy"
  },
  "best-shopify-welcome-email-apps-for-subscription-brands": {
    "audience": "subscription brands",
    "goal": "welcome email apps",
    "nativeRationale": "Shopify Messaging offers a native prospect introduction when the subscription operations team can supply a trustworthy prospect gate. Its value here is a narrow plan explanation linked to the store, with subscription service notices separately owned.",
    "profileRationale": "Klaviyo profile filtering is worth testing when active, skipped and paused states are already maintained in profiles. That can make prospect exclusions inspectable, but documentation of filters does not establish portal sync or the freshness of those states.",
    "acceptance": "Accept only when skipped and paused members stay excluded, unavailable portal state holds the offer and cancellation does not grant a new discount automatically. Record state timestamps and the operations owner. Prefer either candidate only after the portal-state mismatch is resolved.",
    "question": "Is this a new prospect or an existing subscriber changing their relationship?",
    "entry": "Confirmed subscription-interest signup",
    "fields": "subscription ID, active/skipped/paused/cancelled state, next renewal, plan",
    "guard": "Fetch subscription state before offering an acquisition plan",
    "purchaseExit": "First subscription purchase exits welcome; renewal service messages keep their own owner",
    "retry": "Retry only after state refresh; an unavailable portal state holds the offer",
    "failure": "A paused member is welcomed as a new customer with an incompatible offer",
    "edges": [
      "A skipped renewal must stay a subscriber rather than become a new prospect",
      "A cancelled member resubscribing needs explicit offer eligibility review"
    ],
    "denominator": "Unique confirmed prospects with no active, skipped or paused subscription at assignment",
    "handover": "Retention owner resolves portal-state mismatches with subscription operations"
  },
  "best-shopify-welcome-email-apps-for-shopify-plus-merchants": {
    "audience": "Shopify Plus merchants",
    "goal": "welcome email apps",
    "nativeRationale": "Shopify Messaging merits a storefront-local trial where regional teams can own approved content in their store workflow. The benefit is clear local ownership; cross-store identity reconciliation must be supplied and demonstrated separately.",
    "profileRationale": "Klaviyo filtering is a candidate for region and approval-version branches when the platform team can supply maintained identity fields. This may make eligibility review easier for regional approvers, subject to demonstrating the actual account and storefront boundaries.",
    "acceptance": "Accept only after approval withdrawal blocks the queued draft and a linked-store purchase cancels duplicate introductions without erasing purpose-specific permissions. Keep regional signoff and identity traces together. Choose the configuration with an accountable cross-store cancellation owner, or hold rollout.",
    "question": "Which regional team owns the introduction when multiple storefronts recognize one person?",
    "entry": "Confirmed storefront subscription carrying region and approval version",
    "fields": "storefront, region, sender owner, template approval, customer identity",
    "guard": "Require region-approved content and one sender owner for this welcome purpose",
    "purchaseExit": "Paid order on a linked storefront cancels duplicate acquisition introductions",
    "retry": "Retry keeps the approval version only while valid; revoke queued drafts on approval withdrawal",
    "failure": "Two regional teams welcome the same merged identity",
    "edges": [
      "A regional approval revoked during delay must block the queued template",
      "An identity shared across storefronts must preserve each purpose-specific permission"
    ],
    "denominator": "Unique eligible identities per approved region, with cross-store duplicates reconciled",
    "handover": "Regional approver signs content; platform owner controls identity and queue cancellation"
  },
  "best-shopify-welcome-email-apps-for-international-merchants": {
    "audience": "international merchants",
    "goal": "welcome email apps",
    "nativeRationale": "Shopify Messaging is a useful native candidate for a localized form-to-introduction path when a localization owner can maintain the approved copy. A narrowly supported destination set lets the team fulfill a specific promise before expanding markets.",
    "profileRationale": "Klaviyo profile filtering is useful to trial declared-language branches if locale and destination survive capture and updates. Its benefit is explicit preference routing; currency correctness, shipping support and timezone handling require their own demonstrated mappings.",
    "acceptance": "Accept only after a language change invalidates queued old-language content, travel IP does not overwrite destination and a cross-currency purchase ends selling. Save form locale and destination evidence. Prefer a supported-language fallback with human review over an unverified market expansion.",
    "question": "Does the introduction preserve the language and destination promise made by the form?",
    "entry": "Confirmed localized form subscription",
    "fields": "form locale, destination, currency, timezone evidence, permission source",
    "guard": "Resolve supported language, delivery destination and displayed currency before dispatch",
    "purchaseExit": "Paid cross-currency order ends acquisition selling without resetting identity",
    "retry": "Retry uses current destination rules; unknown timezone waits for configured safe handling",
    "failure": "Form locale is lost and the welcome promises shipping to an unsupported market",
    "edges": [
      "Travel-related IP location must not overwrite the declared destination",
      "A bilingual subscriber preference change must invalidate queued old-language content"
    ],
    "denominator": "Unique confirmed subscribers by declared locale and supported destination",
    "handover": "Localization owner approves fallback copy; operations owns destination restrictions"
  },
  "best-shopify-welcome-email-apps-for-new-shopify-stores": {
    "audience": "new Shopify stores",
    "goal": "welcome email apps",
    "nativeRationale": "Shopify Messaging is a useful first candidate for a new store because a single form-triggered introduction gives the founder a bounded event trace to inspect. Begin with a useful first action and one sender before adding branches.",
    "profileRationale": "Klaviyo list entry is worth testing if the new store already uses its signup capture and can identify live versus test profiles reliably. The benefit is continuity from capture to introduction, conditional on demonstrating the purchase exit independently of analytics attribution.",
    "acceptance": "Accept only with a stable signup replay, staff exclusion and a paid-order suppression trace when analytics is blocked. An empty eligible cohort has no performance rate. Prefer the setup the founder can diagnose end to end; keep both in draft if event IDs are missing.",
    "question": "Can the first welcome prove the signup-to-purchase handoff before adding branches?",
    "entry": "First confirmed live newsletter signup after instrumentation approval",
    "fields": "subscription ID, confirmation timestamp, test/live flag, paid-order event ID",
    "guard": "Exclude test identities and require a traceable live consent record",
    "purchaseExit": "First paid-order event closes welcome even when analytics attribution is missing",
    "retry": "Replay the first event using its stable ID; missing IDs enter a manual exception list",
    "failure": "A test checkout is reported as a successful live welcome conversion",
    "edges": [
      "Zero eligible subscribers should produce no rate rather than a 0% performance verdict",
      "A purchase with blocked analytics must still suppress marketing through order state"
    ],
    "denominator": "Unique live confirmed subscribers excluding staff and test fixtures",
    "handover": "Founder signs off an event trace; support owns the first real reply"
  },
  "best-shopify-welcome-email-apps-for-high-volume-stores": {
    "audience": "high-volume stores",
    "goal": "welcome email apps",
    "nativeRationale": "Shopify Messaging remains a candidate for a bounded native welcome if operations can demonstrate the required queue behavior under a representative signup burst. Keeping a single sender in the store workflow can simplify incident ownership; volume alone does not rule it out.",
    "profileRationale": "Klaviyo send-time filtering is a useful eligibility building block for changing subscriber state during delays. Trial it with the ingest contract, while separately proving acknowledgement reconciliation, stale-job expiry and event ordering; filtering documentation is not a throughput guarantee.",
    "acceptance": "Accept only after duplicate event replay produces one intended dispatch, ambiguous acknowledgements reach reconciliation and a newer withdrawal defeats an older signup. Record backlog age, identity version and pause owner. Select on demonstrated freshness and recovery behavior rather than a claimed volume ranking.",
    "question": "Can the welcome queue survive a signup burst without duplicate or stale offers?",
    "entry": "Confirmed subscription event received through the production ingest queue",
    "fields": "event ID, identity version, observed time, consent version, queue age",
    "guard": "Enforce freshness and idempotency per identity and welcome purpose before dispatch",
    "purchaseExit": "Paid-order updates invalidate queued jobs across all workers before further offers",
    "retry": "Replay a burst with duplicate IDs; ambiguous delivery acknowledgement goes to reconciliation",
    "failure": "A worker retries after delivery acknowledgement is lost and sends twice",
    "edges": [
      "A consent withdrawal arriving out of order must supersede an older subscription event",
      "A backlog beyond the offer window must expire rather than drain stale offers"
    ],
    "denominator": "Unique eligible identities assigned at ingest, including later expired jobs in assigned cohorts",
    "handover": "Messaging operations owns backlog alerts; incident lead can pause and reconcile delivery acknowledgements"
  }
};
