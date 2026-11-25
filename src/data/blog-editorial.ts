/** Editorial acceptance fixtures, not performed merchant tests. */
export type WelcomeAudience = 'small Shopify stores' | 'DTC brands' | 'fashion stores' | 'beauty stores' | 'food and beverage stores' | 'subscription brands' | 'Shopify Plus merchants' | 'international merchants' | 'new Shopify stores' | 'high-volume stores';
/** Explicit editorial contracts; remaining goals retain their existing renderer. */
export type EditorialGoal = 'welcome email apps' | 'abandoned cart apps' | 'post-purchase email apps' | 'win-back email apps' | 'product launch email apps' | 'back-in-stock email apps';
export type GoalEditorial = {
  audience: WelcomeAudience; goal: EditorialGoal; question: string; entry: string;
  fields: string; guard: string; purchaseExit: string; retry: string;
  nativeRationale: string; profileRationale: string; acceptance: string;
  failure: string; edges: readonly [string, string]; denominator: string; handover: string;
};
export type WelcomeEditorial = GoalEditorial & { goal: 'welcome email apps' };
export type CartEditorial = GoalEditorial & { goal: 'abandoned cart apps' };
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
export const cartEditorial: Record<string, CartEditorial> = {
  "best-shopify-abandoned-cart-apps-for-small-shopify-stores": {
    "audience": "small Shopify stores",
    "goal": "abandoned cart apps",
    "question": "Can one owner recover a checkout without competing senders?",
    "entry": "Identified abandoned checkout; anonymous cart additions do not qualify",
    "fields": "checkout ID, cart token, customer ID, permission source, paid-order state, sender owner",
    "guard": "Resolve cart token to checkout and permit only the maintained sender",
    "purchaseExit": "Refresh order state for the checkout before sending; an unmatched order enters owner review",
    "retry": "Replay checkout ID once; uncertain delivery acknowledgement stays held",
    "failure": "Native and installed app both send a recovery coupon",
    "edges": [
      "An empty cart must stop the job rather than link to an empty basket",
      "Owner absence transfers the exception queue to a named backup"
    ],
    "denominator": "Unique permission-eligible identified checkouts assigned before dispatch",
    "handover": "Store owner records active sender and backup; service answers checkout problems",
    "nativeRationale": "Consider Shopify Messaging: a single maintained checkout reminder keeps inspection within the owner budget. This is our proposed operating design, conditional on the account demonstration.",
    "profileRationale": "Consider Klaviyo: separate cart and checkout entry becomes useful if the existing team already maintains both event feeds. This rationale requires maintained fields and verified transitions in the offered account.",
    "acceptance": "Replay a checkout through both installed senders and accept only one intended dispatch; empty the cart and prove the hold. Prefer the setup the backup can pause."
  },
  "best-shopify-abandoned-cart-apps-for-dtc-brands": {
    "audience": "DTC brands",
    "goal": "abandoned cart apps",
    "question": "Will recovering this checkout preserve the acquisition offer and contribution?",
    "entry": "Identified campaign checkout with its original offer version",
    "fields": "checkout ID, campaign, cart value, margin band, offer version, first-order eligibility",
    "guard": "Revalidate the original offer and stacking rules; preserve the full-price branch",
    "purchaseExit": "Paid order for the identity invalidates recovery offers even if campaign attribution arrives late",
    "retry": "Expired offer versions require growth approval; never silently create a replacement coupon",
    "failure": "A retry replaces an expired acquisition offer with a larger unapproved discount",
    "edges": [
      "A merged repeat buyer must lose first-order eligibility",
      "A product substitution that changes margin must invalidate the old offer calculation"
    ],
    "denominator": "Unique eligible checkouts assigned within campaign and margin band",
    "handover": "Growth owns offer versions; finance reconciles discount, return and fulfillment cost",
    "nativeRationale": "Consider Shopify Messaging: a narrow checkout reminder can preserve one approved acquisition promise with fewer handoffs. This is our proposed operating design, conditional on the account demonstration.",
    "profileRationale": "Consider Klaviyo: distinct cart and checkout paths help growth separate early product interest from checkout objections. This rationale requires maintained fields and verified transitions in the offered account.",
    "acceptance": "Demonstrate a full-price checkout, expired offer and merged repeat buyer. Accept only with correct offer decisions and a finance-readable trace; neither candidate is assumed to calculate margin."
  },
  "best-shopify-abandoned-cart-apps-for-fashion-stores": {
    "audience": "fashion stores",
    "goal": "abandoned cart apps",
    "question": "Can the shopper still buy the exact size left in the cart?",
    "entry": "Identified added-to-cart event for a variant; checkout start transfers ownership",
    "fields": "cart token, checkout ID when created, variant and size, stock observation, preorder flag",
    "guard": "Refresh the actual variant; stop on empty cart and transfer to checkout flow without duplicate outreach",
    "purchaseExit": "A paid order for the shopper ends recovery for the purchased cart; uncertain identity goes to review",
    "retry": "Re-read cart contents and stock on replay, retaining the original job key",
    "failure": "The style is available but the cart size sold out during the delay",
    "edges": [
      "Removing the last size must close recovery rather than substitute another size",
      "Preorder stock keeps its distinct delivery promise and cannot inherit in-stock urgency"
    ],
    "denominator": "Unique eligible identified carts by known size and stock state at assignment",
    "handover": "Merchandising owns variant fallbacks; service answers fit and preorder questions",
    "nativeRationale": "Consider Shopify Messaging: native cart and checkout templates offer a bounded starting point for a merchandiser-owned variant exercise. This is our proposed operating design, conditional on the account demonstration.",
    "profileRationale": "Consider Klaviyo: separate Added to Cart entry offers a useful earlier size-help path before checkout begins. This rationale requires maintained fields and verified transitions in the offered account.",
    "acceptance": "Empty a size-specific cart, sell out that size and start checkout during delay. Accept only the candidate whose configuration holds stale content and transfers ownership once."
  },
  "best-shopify-abandoned-cart-apps-for-beauty-stores": {
    "audience": "beauty stores",
    "goal": "abandoned cart apps",
    "question": "Does the cart reminder preserve the selected kit and approved usage guidance?",
    "entry": "Identified cart addition of a routine kit, with checkout promotion tracked separately",
    "fields": "cart token, kit SKU, instruction version, declared interest, checkout ID, support hold",
    "guard": "Use current kit contents and approved copy; unknown interest cannot become a diagnosis",
    "purchaseExit": "Paid kit order stops recovery selling and transfers to the actual purchased-kit education",
    "retry": "A substituted kit requires instruction refresh and educator approval before retry",
    "failure": "A cart edit replaces a kit but queued copy retains incompatible usage instructions",
    "edges": [
      "A product-use support case holds promotion for service review",
      "A sample-only cart must not inherit a full-routine efficacy promise"
    ],
    "denominator": "Unique eligible kit carts by kit version and declared versus unknown interest",
    "handover": "Product educator approves changed copy; service owns use-related replies",
    "nativeRationale": "Consider Shopify Messaging: a simple native reminder can link to approved kit guidance without inventing personalization. This is our proposed operating design, conditional on the account demonstration.",
    "profileRationale": "Consider Klaviyo: cart versus checkout entry allows kit questions to precede payment objections when event mapping is maintained. This rationale requires maintained fields and verified transitions in the offered account.",
    "acceptance": "Replace the kit and open a service case during delay. Accept only with refreshed instructions, the correct hold and a paid-kit exit trace."
  },
  "best-shopify-abandoned-cart-apps-for-food-and-beverage-stores": {
    "audience": "food and beverage stores",
    "goal": "abandoned cart apps",
    "question": "Can the abandoned gift cart still meet the delivery occasion?",
    "entry": "Identified gift cart; checkout adds buyer and destination evidence",
    "fields": "cart token, checkout ID, buyer permission, destination, gift date, pack, shipping cutoff",
    "guard": "Recompute destination and perishable cutoff before promising delivery; recipient details never grant permission",
    "purchaseExit": "Paid gift checkout ends buyer recovery; recipient fulfillment notices remain separately owned",
    "retry": "A delayed retry past cutoff drops the occasion promise and asks fulfillment for an approved alternative",
    "failure": "A queued gift reminder promises a delivery date after the dispatch cutoff",
    "edges": [
      "An unsupported chilled-shipping destination holds the offer",
      "A recipient email different from the buyer must not become the recovery identity"
    ],
    "denominator": "Unique eligible buyer carts by destination and gift/self intent",
    "handover": "Fulfillment owns cutoffs and alternatives; service handles gift changes",
    "nativeRationale": "Consider Shopify Messaging: native checkout recovery is a useful bounded buyer path when destination is established at checkout. This is our proposed operating design, conditional on the account demonstration.",
    "profileRationale": "Consider Klaviyo: cart entry can support earlier pack questions if later checkout events reliably supersede it. This rationale requires maintained fields and verified transitions in the offered account.",
    "acceptance": "Advance the cutoff and change buyer/recipient addresses. Accept only after the expired promise is held and marketing remains attached to the permitted buyer."
  },
  "best-shopify-abandoned-cart-apps-for-subscription-brands": {
    "audience": "subscription brands",
    "goal": "abandoned cart apps",
    "question": "Is this an abandoned acquisition cart or a member changing an existing plan?",
    "entry": "Identified subscription-plan cart, distinct from portal pause and renewal events",
    "fields": "cart token, checkout ID, selling plan, subscription ID, paused/skipped/active state, state timestamp",
    "guard": "Refresh portal state; pause and skip are not new-cart acquisition permission or cancellation",
    "purchaseExit": "Paid initial order exits recovery; renewal and failed-payment service keep separate owners",
    "retry": "Unavailable subscription state holds retry; reconcile order and portal clocks before dispatch",
    "failure": "A paused member receives a new-customer discount from a portal event mislabeled as cart abandonment",
    "edges": [
      "A one-time item beside a subscription retains its separate order meaning",
      "A skipped renewal must not generate an abandoned acquisition checkout"
    ],
    "denominator": "Unique eligible acquisition carts excluding existing active, paused and skipped members",
    "handover": "Subscription operations resolves portal mismatches; service owns member requests",
    "nativeRationale": "Consider Shopify Messaging: a narrow native checkout path can keep initial acquisition separate from renewal service. This is our proposed operating design, conditional on the account demonstration.",
    "profileRationale": "Consider Klaviyo: cart and checkout filters are useful where maintained selling-plan fields distinguish prospect intent. This rationale requires maintained fields and verified transitions in the offered account.",
    "acceptance": "Replay pause, skip and one-time-item fixtures alongside an initial purchase. Accept only with correct membership exclusion and a demonstrated order exit, without claiming automatic cancellation."
  },
  "best-shopify-abandoned-cart-apps-for-shopify-plus-merchants": {
    "audience": "Shopify Plus merchants",
    "goal": "abandoned cart apps",
    "question": "Which storefront owns recovery when one identity has carts in two regions?",
    "entry": "Identified store-local cart with explicit checkout and cross-store identity mapping",
    "fields": "store ID, cart token, checkout ID, identity version, regional permission, content approval",
    "guard": "Use store-scoped keys and region-approved content; shared identity does not merge permissions",
    "purchaseExit": "A linked-store paid order triggers reconciliation before any competing offer is released",
    "retry": "Approval withdrawal invalidates queued copy; unresolved cross-store match holds replay",
    "failure": "Two regional flows treat the same checkout intent as separate eligible people",
    "edges": [
      "The same cart token in two stores must not collide",
      "An identity merge must preserve regional permission and currency boundaries"
    ],
    "denominator": "Unique eligible store-scoped intents with documented cross-store deduplication",
    "handover": "Regional approver owns content; platform operations owns identity and queue holds",
    "nativeRationale": "Consider Shopify Messaging: native store-local recovery can give each regional team a clear operating boundary. This is our proposed operating design, conditional on the account demonstration.",
    "profileRationale": "Consider Klaviyo: separate event-based paths are useful when the platform team supplies store-scoped identity fields. This rationale requires maintained fields and verified transitions in the offered account.",
    "acceptance": "Replay colliding tokens, revoke approval and purchase in the linked store. Accept only with preserved permissions, traceable reconciliation and one accountable queue owner."
  },
  "best-shopify-abandoned-cart-apps-for-international-merchants": {
    "audience": "international merchants",
    "goal": "abandoned cart apps",
    "question": "Does the recovered checkout still match its market, currency and permitted local time?",
    "entry": "Identified localized cart; checkout resolves shipping market and currency",
    "fields": "cart token, checkout ID, market, displayed currency, locale, timezone evidence, permission version",
    "guard": "Refresh market eligibility and currency; unknown timezone uses approved hold handling",
    "purchaseExit": "Paid order in any currency stops matched checkout recovery; do not reset identity on currency change",
    "retry": "Changed market or language invalidates old queued copy before retry",
    "failure": "A cart reminder displays one currency but restores checkout in another market",
    "edges": [
      "Travel IP cannot overwrite declared shipping market",
      "A language or permission change during delay must defeat the old queued template"
    ],
    "denominator": "Unique eligible carts by declared market and currency at assignment",
    "handover": "Localization approves copy; operations owns market restrictions and time handling",
    "nativeRationale": "Consider Shopify Messaging: localized native recovery is a useful starting point for a deliberately supported market set. This is our proposed operating design, conditional on the account demonstration.",
    "profileRationale": "Consider Klaviyo: separate cart and checkout paths help preserve declared locale as shipping evidence becomes available. This rationale requires maintained fields and verified transitions in the offered account.",
    "acceptance": "Switch market, currency and language while queued, then buy in another currency. Accept only with refreshed links, current permission and matched-order suppression."
  },
  "best-shopify-abandoned-cart-apps-for-new-shopify-stores": {
    "audience": "new Shopify stores",
    "goal": "abandoned cart apps",
    "question": "Can the founder trace the first live abandoned checkout without mistaking tests for demand?",
    "entry": "First identified live checkout abandonment after instrumentation signoff",
    "fields": "live/test flag, checkout ID, cart token, event timestamp, permission record, order ID",
    "guard": "Exclude staff fixtures; hold missing IDs rather than infer a reachable anonymous cart",
    "purchaseExit": "Use paid-order state to stop recovery even when analytics attribution is blocked",
    "retry": "Replay the stable checkout ID; missing or conflicting events enter the founder exception log",
    "failure": "A test checkout or duplicate event is reported as recovered live revenue",
    "edges": [
      "Zero eligible checkouts has no conversion rate",
      "A real purchase with blocked analytics still needs an order-based exit"
    ],
    "denominator": "Unique live eligible checkouts excluding staff and test fixtures; zero means no rate",
    "handover": "Founder signs the first event trace; support owns replies and payment questions",
    "nativeRationale": "Consider Shopify Messaging: native checkout recovery provides a bounded first pipeline the founder can inspect. This is our proposed operating design, conditional on the account demonstration.",
    "profileRationale": "Consider Klaviyo: event-based checkout recovery is useful if the store already maintains that feed and can verify live/test separation. This rationale requires maintained fields and verified transitions in the offered account.",
    "acceptance": "Trace one live fixture and one staff fixture through retry and purchase. Accept only with stable IDs and no test conversions; keep performance undecided with sparse counts."
  },
  "best-shopify-abandoned-cart-apps-for-high-volume-stores": {
    "audience": "high-volume stores",
    "goal": "abandoned cart apps",
    "question": "Can duplicate cart events arriving after purchase stay out of the recovery queue?",
    "entry": "Identified cart event through ingest; checkout event advances the same intent version",
    "fields": "event ID, cart/checkout link, identity version, order watermark, consent version, queue age",
    "guard": "Reject stale event versions and check latest order and permission state at dispatch",
    "purchaseExit": "Paid-order watermark invalidates matched queued intents; prove worker behavior before rollout",
    "retry": "Lost acknowledgement reconciles without blind resend; duplicate old cart events cannot reopen a purchased intent",
    "failure": "An old cart event arrives after the paid-order event and recreates recovery",
    "edges": [
      "A burst crossing offer expiry must expire rather than drain stale jobs",
      "Checkout promotion during a cart retry must retain one owner across workers"
    ],
    "denominator": "Unique eligible intents assigned at ingest including later expired jobs, deduplicated across cart and checkout",
    "handover": "Messaging operations owns backlog and reconciliation; incident lead pauses dispatch and approves rollback",
    "nativeRationale": "Consider Shopify Messaging: a bounded native recovery path remains useful if operations demonstrates burst handling and owned exceptions. This is our proposed operating design, conditional on the account demonstration.",
    "profileRationale": "Consider Klaviyo: distinct cart/checkout triggers provide explicit transition points for a maintained ingest contract. This rationale requires maintained fields and verified transitions in the offered account.",
    "acceptance": "Replay duplicate events after purchase, lose an acknowledgement and promote cart to checkout across workers. Accept only with no stale reopening, one intended dispatch and an actionable pause trace."
  }
};
export type PostPurchaseEditorial = GoalEditorial & { goal: 'post-purchase email apps' };
export const postPurchaseEditorial: Record<string, PostPurchaseEditorial> = {
  "best-shopify-post-purchase-email-apps-for-small-shopify-stores": {
    "audience": "small Shopify stores",
    "goal": "post-purchase email apps",
    "question": "Can the owner send a useful thank-you without duplicating the receipt?",
    "entry": "Paid first order awaiting fulfillment",
    "fields": "order ID, paid timestamp, first-order count, sender owner, service hold",
    "guard": "Send one approved thank-you without claiming delivery",
    "purchaseExit": "A second paid order retires first-order copy; cancellation or refund holds promotion",
    "retry": "Replay the order-purpose key; uncertain acknowledgement goes to the owner",
    "failure": "The native receipt and two apps all send the same sales offer",
    "edges": [
      "An unpaid order is not a paid first purchase",
      "Owner absence transfers queued exceptions to the backup"
    ],
    "denominator": "Unique eligible first-order buyers assigned at payment",
    "handover": "Owner maintains sender inventory; backup handles exceptions",
    "nativeRationale": "Consider Shopify Messaging: a native first-purchase thank-you keeps a small sender inventory inspectable. This proposed operating design requires the account exercise below.",
    "profileRationale": "Consider Klaviyo: Placed Order entry and first-versus-repeat splits suit an owner already maintaining customer history. These documented building blocks require verified field mapping in the account.",
    "acceptance": "Replay payment twice and place a second order before dispatch; accept one intended thank-you and current purchase wording."
  },
  "best-shopify-post-purchase-email-apps-for-dtc-brands": {
    "audience": "DTC brands",
    "goal": "post-purchase email apps",
    "question": "Can product onboarding protect the original acquisition promise?",
    "entry": "Paid campaign order entering product onboarding",
    "fields": "order ID, campaign promise, purchased SKU, offer version, margin band, refund state",
    "guard": "Teach the purchased product before any approved complementary offer",
    "purchaseExit": "A repeat purchase removes already-owned recommendations; refund holds the affected product branch",
    "retry": "Refresh purchased items and offer version; expired approvals require growth signoff",
    "failure": "A refunded acquisition bundle still receives a cross-sell built on its original margin",
    "edges": [
      "A full-price buyer keeps the no-incentive branch",
      "A partial refund removes only the returned item from education"
    ],
    "denominator": "Unique eligible campaign buyers assigned within source and margin band",
    "handover": "Growth owns promise and offer versions; finance reconciles returns",
    "nativeRationale": "Consider Shopify Messaging: a narrow thank-you can preserve the acquisition promise without an immediate incentive. This proposed operating design requires the account exercise below.",
    "profileRationale": "Consider Klaviyo: product-specific order filters provide an explicit starting cohort for maintained SKU education. These documented building blocks require verified field mapping in the account.",
    "acceptance": "Refund one bundle item and buy the suggested accessory before release; accept corrected education and no already-owned upsell."
  },
  "best-shopify-post-purchase-email-apps-for-fashion-stores": {
    "audience": "fashion stores",
    "goal": "post-purchase email apps",
    "question": "Does care guidance describe the size and fabric actually retained?",
    "entry": "Paid apparel order with line-level fulfillment pending",
    "fields": "order ID, line ID, size, fabric, care version, exchange ID, delivered evidence",
    "guard": "Release wear-and-care content only for the delivered retained item",
    "purchaseExit": "A new order updates ownership; exchange or refund invalidates old size-specific follow-up",
    "retry": "Reload exchange mapping before retry; unknown replacement holds care copy",
    "failure": "An exchanged garment receives instructions for the returned fabric",
    "edges": [
      "A split shipment cannot mark all garments received",
      "A preorder retains its distinct arrival window"
    ],
    "denominator": "Unique eligible apparel buyers by original size and fulfillment cohort",
    "handover": "Merchandiser owns care versions; service owns exchanges",
    "nativeRationale": "Consider Shopify Messaging: a native thank-you can link to a stable care hub while garment state is reconciled. This proposed operating design requires the account exercise below.",
    "profileRationale": "Consider Klaviyo: order-product filtering supports separate fabric cohorts when line and exchange mapping is maintained. These documented building blocks require verified field mapping in the account.",
    "acceptance": "Exchange to a different fabric and split the shipment; accept care for the retained delivered item only."
  },
  "best-shopify-post-purchase-email-apps-for-beauty-stores": {
    "audience": "beauty stores",
    "goal": "post-purchase email apps",
    "question": "Can purchased-kit education stay aligned with approved instructions?",
    "entry": "Paid routine-kit order awaiting verified receipt",
    "fields": "order ID, kit version, instruction approval, substitution, receipt evidence, use-related case",
    "guard": "Use approved directions for the actual delivered kit; do not infer a diagnosis",
    "purchaseExit": "Another kit purchase refreshes ownership; a refund or use-related case holds promotional follow-up",
    "retry": "Changed instructions need educator approval before replay under the same job key",
    "failure": "A substituted kit receives outdated directions from the original order",
    "edges": [
      "Unknown preference asks a question rather than assigning a condition",
      "A sample purchase cannot inherit full-kit usage claims"
    ],
    "denominator": "Unique eligible kit buyers by instruction version at assignment",
    "handover": "Educator approves directions; service handles use-related replies",
    "nativeRationale": "Consider Shopify Messaging: a native thank-you can provide an approved instruction link without speculative personalization. This proposed operating design requires the account exercise below.",
    "profileRationale": "Consider Klaviyo: product-specific entry filters help maintain separate kit-education cohorts. These documented building blocks require verified field mapping in the account.",
    "acceptance": "Substitute the kit and open a use-related case while delayed; accept current approved directions and a promotion hold."
  },
  "best-shopify-post-purchase-email-apps-for-food-and-beverage-stores": {
    "audience": "food and beverage stores",
    "goal": "post-purchase email apps",
    "question": "Who should receive gift guidance when buyer and recipient differ?",
    "entry": "Paid gift order with destination and dispatch promise",
    "fields": "order ID, buyer permission, gift flag, pack, recipient role, dispatch cutoff, delivery exception",
    "guard": "Keep buyer promotion separate from recipient delivery information; use current fulfillment evidence",
    "purchaseExit": "A repeat gift order remains a separate occasion; refund or delivery exception holds celebratory offers",
    "retry": "Recompute delivery context after delay; missed occasion goes to service rather than urgency",
    "failure": "A buyer receives an invitation to consume a gift that has not reached its recipient",
    "edges": [
      "A chilled-shipping exception requires fulfillment review",
      "Recipient contact details do not enroll that person in marketing"
    ],
    "denominator": "Unique eligible gift buyers by destination and occasion at assignment",
    "handover": "Fulfillment owns exceptions; service handles missed occasions",
    "nativeRationale": "Consider Shopify Messaging: a native thank-you gives the buyer a clear order follow-up while delivery stays separately owned. This proposed operating design requires the account exercise below.",
    "profileRationale": "Consider Klaviyo: order filters offer a basis for gift versus self-purchase paths with maintained gift fields. These documented building blocks require verified field mapping in the account.",
    "acceptance": "Delay a perishable shipment past the occasion and change recipient contact; accept buyer-only promotion and an owned service handoff."
  },
  "best-shopify-post-purchase-email-apps-for-subscription-brands": {
    "audience": "subscription brands",
    "goal": "post-purchase email apps",
    "question": "Can initial plan education remain distinct from renewal service?",
    "entry": "Paid initial subscription order, excluding renewal events",
    "fields": "order ID, subscription ID, selling plan, initial/renewal flag, pause/skip state, state timestamp",
    "guard": "Refresh portal state before onboarding; do not treat a renewal as a new member",
    "purchaseExit": "Another purchase updates the plan context; refund, cancellation or pause holds acquisition-style upsell",
    "retry": "Unavailable portal state holds retry until subscription operations reconciles clocks",
    "failure": "A skipped renewal starts a fresh welcome-to-the-plan promotion",
    "edges": [
      "A one-time add-on keeps its separate usage instructions",
      "A changed delivery interval invalidates the old consumption calendar"
    ],
    "denominator": "Unique eligible initial-plan buyers excluding renewal events at assignment",
    "handover": "Subscription operations owns portal mapping; service owns billing notices",
    "nativeRationale": "Consider Shopify Messaging: a bounded first-purchase thank-you can keep initial plan explanation separate from required billing. This proposed operating design requires the account exercise below.",
    "profileRationale": "Consider Klaviyo: first-versus-repeat order splits are a starting point when operations supplies the true initial-plan flag. These documented building blocks require verified field mapping in the account.",
    "acceptance": "Replay renewal, skip and interval change alongside an initial order; accept only the initial onboarding with refreshed plan context."
  },
  "best-shopify-post-purchase-email-apps-for-shopify-plus-merchants": {
    "audience": "Shopify Plus merchants",
    "goal": "post-purchase email apps",
    "question": "Which storefront owns education for a shared customer order?",
    "entry": "Paid store-local order with regional approval",
    "fields": "store ID, order ID, identity version, region, approval version, fulfillment owner",
    "guard": "Require store-scoped order keys and valid regional approval",
    "purchaseExit": "A linked-store purchase reconciles overlapping offers; refund or approval withdrawal holds queued promotion",
    "retry": "Revoked approval cannot be replayed; unresolved identity mapping waits for platform review",
    "failure": "Two regional teams send conflicting instructions for one transferred order",
    "edges": [
      "Identical order numbers in two stores must not collide",
      "An identity merge preserves store-specific permissions"
    ],
    "denominator": "Unique eligible buyers within store and region with declared cross-store deduplication",
    "handover": "Regional approver owns copy; platform operations owns identity and queue inventory",
    "nativeRationale": "Consider Shopify Messaging: store-local native thank-you ownership can make regional accountability visible. This proposed operating design requires the account exercise below.",
    "profileRationale": "Consider Klaviyo: order-trigger filters provide cohort boundaries when store and approval fields are maintained. These documented building blocks require verified field mapping in the account.",
    "acceptance": "Revoke approval, collide order numbers and transfer fulfillment; accept one accountable instruction owner and no revoked template."
  },
  "best-shopify-post-purchase-email-apps-for-international-merchants": {
    "audience": "international merchants",
    "goal": "post-purchase email apps",
    "question": "Will delivered-product guidance preserve the order language and market?",
    "entry": "Paid localized order with fulfillment and locale evidence",
    "fields": "order ID, market, currency, declared locale, timezone evidence, delivery state, copy version",
    "guard": "Use approved current-language guidance and distinguish shipped from received",
    "purchaseExit": "A cross-currency repeat order updates ownership; refund or market restriction holds recommendations",
    "retry": "A locale change invalidates queued translations; unknown timezone uses approved hold handling",
    "failure": "A delayed translated guide links to an accessory unavailable in the delivery market",
    "edges": [
      "Travel IP must not replace declared order market",
      "A customs delay prevents received-product wording"
    ],
    "denominator": "Unique eligible buyers by declared market and locale at assignment",
    "handover": "Localization owns approved copy; operations owns market and customs exceptions",
    "nativeRationale": "Consider Shopify Messaging: a native thank-you is a bounded starting point for a deliberately supported language set. This proposed operating design requires the account exercise below.",
    "profileRationale": "Consider Klaviyo: order-based entry and maintained profile filters support explicit locale cohorts. These documented building blocks require verified field mapping in the account.",
    "acceptance": "Change locale and delay customs clearance; accept current-language links and no received-product claim before evidence."
  },
  "best-shopify-post-purchase-email-apps-for-new-shopify-stores": {
    "audience": "new Shopify stores",
    "goal": "post-purchase email apps",
    "question": "Can the founder trace a real order through education without counting staff fixtures?",
    "entry": "First live paid order after event signoff",
    "fields": "live/test flag, order ID, paid event ID, fulfillment timestamp, permission source, support owner",
    "guard": "Exclude staff fixtures and hold missing order IDs; first message is a useful thank-you",
    "purchaseExit": "A real repeat purchase ends first-order wording; cancelled or refunded orders leave promotion",
    "retry": "Replay stable live order ID; conflicting payment and fulfillment timestamps require founder review",
    "failure": "A staff order is reported as successful customer onboarding",
    "edges": [
      "Zero eligible live buyers produces no rate",
      "Blocked analytics does not erase order or refund state"
    ],
    "denominator": "Unique live eligible buyers excluding test and staff orders",
    "handover": "Founder signs the event trace; support owns real replies",
    "nativeRationale": "Consider Shopify Messaging: one native thank-you gives the founder a bounded order-to-message trace. This proposed operating design requires the account exercise below.",
    "profileRationale": "Consider Klaviyo: Placed Order entry is useful if the existing integration demonstrably separates live and test orders. These documented building blocks require verified field mapping in the account.",
    "acceptance": "Trace a staff order, a live refund and a repeated payment event; accept only one live eligible onboarding and no fabricated conversion."
  },
  "best-shopify-post-purchase-email-apps-for-high-volume-stores": {
    "audience": "high-volume stores",
    "goal": "post-purchase email apps",
    "question": "Can delayed order events avoid reopening completed education?",
    "entry": "Paid order event received through maintained ingest",
    "fields": "event ID, store/order key, line version, fulfillment watermark, consent version, queue age",
    "guard": "Reject stale versions and check latest fulfillment and permission at dispatch",
    "purchaseExit": "New purchases update owned products; refund watermarks invalidate affected promotional jobs across workers",
    "retry": "Lost acknowledgement requires reconciliation; older paid events cannot reopen a refunded order",
    "failure": "A replayed payment after refund recreates a queued cross-sell",
    "edges": [
      "Partial fulfillment across workers keeps line-level ownership",
      "A backlog beyond instruction validity expires rather than draining stale copy"
    ],
    "denominator": "Unique eligible buyers assigned at ingest including later expired jobs",
    "handover": "Messaging operations owns reconciliation; incident lead owns pause and rollback",
    "nativeRationale": "Consider Shopify Messaging: a bounded native thank-you remains useful if operations demonstrates representative burst handling. This proposed operating design requires the account exercise below.",
    "profileRationale": "Consider Klaviyo: metric entry and send-time profile filters provide checkpoints for a maintained state contract. These documented building blocks require verified field mapping in the account.",
    "acceptance": "Replay old payment after refund, lose an acknowledgement and split fulfillment across workers; accept no reopened promotion and an inspectable pause trace."
  }
};
export type WinBackEditorial = GoalEditorial & { goal: 'win-back email apps' };
export const winBackEditorial: Record<string, WinBackEditorial> = {
  "best-shopify-win-back-email-apps-for-small-shopify-stores": {
    "audience": "small Shopify stores",
    "goal": "win-back email apps",
    "question": "Can the owner close a lapsed-buyer conversation without creating an endless discount loop?",
    "entry": "Buyer joins the owner-approved lapse segment after the normal reorder window",
    "fields": "customer ID, last paid order, lapse rule version, permission, sender and backup, final-contact flag",
    "guard": "Send one useful preference invitation; final-contact completion closes this lapse episode",
    "purchaseExit": "A new paid order retires the episode and transfers to order care",
    "retry": "Replay the customer/last-order/rule key; unresolved acknowledgement waits for the backup",
    "failure": "Two apps repeatedly re-enroll the same inactive buyer",
    "edges": [
      "A historical import cannot become a newly lapsed buyer without dated orders",
      "Owner absence holds the final invitation instead of restarting the series"
    ],
    "denominator": "Unique permitted lapsed buyers assigned under the owner-approved rule",
    "handover": "Owner records the final-contact disposition; backup owns held replies",
    "nativeRationale": "Consider Shopify Messaging: segment-based native win-back makes one small lapse list visible in the store workflow. This proposed design requires the configured-account exercise.",
    "profileRationale": "Consider Klaviyo: a Placed Order flow with a no-new-order filter suits an owner already maintaining that feed. Supplied audience fields and queue behavior still require demonstration.",
    "acceptance": "Import an undated buyer, replay a completed episode and order during delay; accept no import entry, no reopened invitation and an order-care handoff."
  },
  "best-shopify-win-back-email-apps-for-dtc-brands": {
    "audience": "DTC brands",
    "goal": "win-back email apps",
    "question": "Does reactivation earn contribution without rewarding every delayed repeat order?",
    "entry": "Campaign buyer exceeds the observed reorder window within a margin band",
    "fields": "customer ID, acquisition source, last order, margin band, incentive eligibility, offer version, holdout",
    "guard": "Preserve a no-incentive cohort; release only the approved return offer for this band",
    "purchaseExit": "Any new paid purchase closes reactivation regardless of campaign attribution",
    "retry": "Expired incentives require growth approval; a replay retains original assignment",
    "failure": "A repeat-order discount is counted as incremental profit without a comparison",
    "edges": [
      "A returned acquisition bundle changes eligibility before dispatch",
      "An organic repeat order exits even when ad attribution is absent"
    ],
    "denominator": "Unique lapsed campaign buyers assigned within original source and margin band",
    "handover": "Growth owns lapse and incentive versions; finance reconciles net contribution",
    "nativeRationale": "Consider Shopify Messaging: a single native lapse segment is useful for a narrow approved return offer with inspectable ownership. This proposed design requires the configured-account exercise.",
    "profileRationale": "Consider Klaviyo: order-triggered delays and purchase filters support separate maintained campaign cohorts. Supplied audience fields and queue behavior still require demonstration.",
    "acceptance": "Return the acquisition bundle, expire the offer and record an unattributed repeat order; accept revised eligibility, preserved holdout and no late incentive."
  },
  "best-shopify-win-back-email-apps-for-fashion-stores": {
    "audience": "fashion stores",
    "goal": "win-back email apps",
    "question": "Is the buyer inactive or simply waiting for a relevant size and season?",
    "entry": "Prior apparel buyer crosses a category-specific seasonal lapse threshold",
    "fields": "customer ID, retained size, category, season, last order, variant stock timestamp, returns hold",
    "guard": "Offer a relevant currently purchasable size or a preference update, never substitute fit silently",
    "purchaseExit": "A new order ends the lapse episode; an open exchange routes to service",
    "retry": "Recheck size and season after delay; a sold-out variant becomes a size-preference path",
    "failure": "Off-season outerwear buyers receive generic urgency for unavailable sizes",
    "edges": [
      "An exchange is not evidence of a second independent purchase",
      "A new season cannot reuse expired clearance terms"
    ],
    "denominator": "Unique lapsed apparel buyers by category and season at assignment",
    "handover": "Merchandising owns season and size fallbacks; service resolves exchanges",
    "nativeRationale": "Consider Shopify Messaging: a native segment can support a bounded seasonal return invitation with a stable size-guide fallback. This proposed design requires the configured-account exercise.",
    "profileRationale": "Consider Klaviyo: order-based flows with maintained category properties help separate seasonal buying cycles. Supplied audience fields and queue behavior still require demonstration.",
    "acceptance": "Sell out the retained size, open an exchange and roll the season; accept a useful preference path with current terms and no exchange misclassification."
  },
  "best-shopify-win-back-email-apps-for-beauty-stores": {
    "audience": "beauty stores",
    "goal": "win-back email apps",
    "question": "Can a routine invitation respect a buyer who stopped using the product?",
    "entry": "Routine buyer passes a product-specific review window with no later order",
    "fields": "customer ID, purchased routine, approved copy version, declared interest, use-related case, last order",
    "guard": "Ask whether the routine is still relevant; hold promotion during a use-related case",
    "purchaseExit": "A paid order ends win-back; a request to stop routine content closes that purpose",
    "retry": "Changed product directions require educator review before replay",
    "failure": "Inactivity is interpreted as a diagnosis and triggers a stronger product claim",
    "edges": [
      "A sample buyer cannot inherit a full-routine depletion estimate",
      "A discontinued product needs approved alternatives rather than invented equivalence"
    ],
    "denominator": "Unique permitted routine buyers by purchased product and declared interest",
    "handover": "Educator owns routine copy; service handles use-related replies",
    "nativeRationale": "Consider Shopify Messaging: a native lapse invitation can ask a preference question without inferring product suitability. This proposed design requires the configured-account exercise.",
    "profileRationale": "Consider Klaviyo: purchase-based delay and maintained profile filters help separate sample and routine cohorts. Supplied audience fields and queue behavior still require demonstration.",
    "acceptance": "Open a use-related case, discontinue the product and request no routine mail; accept a service hold, reviewed alternative and purpose closure."
  },
  "best-shopify-win-back-email-apps-for-food-and-beverage-stores": {
    "audience": "food and beverage stores",
    "goal": "win-back email apps",
    "question": "Is the next useful contact a new gifting occasion rather than a pantry refill?",
    "entry": "Gift buyer reaches an approved occasion-review date without another buyer order",
    "fields": "buyer ID, gift/self intent, occasion permission, destination, shipping cutoff, pack availability",
    "guard": "Invite the buyer to update occasion preferences; promise delivery only after a fresh cutoff check",
    "purchaseExit": "New buyer purchase closes this occasion episode; recipient activity does not renew buyer permission",
    "retry": "Retry recomputes occasion and cutoff; a missed date moves to a future-occasion preference path",
    "failure": "A gift recipient is targeted as a lapsed buyer using delivery details",
    "edges": [
      "A chilled destination becoming unsupported holds the offer",
      "A one-off gift must not imply recurring consumption"
    ],
    "denominator": "Unique permitted gift buyers by declared occasion and destination",
    "handover": "Fulfillment owns cutoff changes; marketing owns buyer occasion preferences",
    "nativeRationale": "Consider Shopify Messaging: a native segment-based invitation gives a small gifting program a clear buyer-only audience. This proposed design requires the configured-account exercise.",
    "profileRationale": "Consider Klaviyo: maintained gift properties alongside order history support separate gift and self-purchase delays. Supplied audience fields and queue behavior still require demonstration.",
    "acceptance": "Pass the shipping cutoff, restrict the destination and change recipient details; accept no missed-date promise and no recipient marketing enrollment."
  },
  "best-shopify-win-back-email-apps-for-subscription-brands": {
    "audience": "subscription brands",
    "goal": "win-back email apps",
    "question": "Is a former member ready to return, or is the plan merely paused?",
    "entry": "Confirmed cancelled member passes an approved cancellation review date",
    "fields": "customer ID, subscription ID, cancellation reason, pause/skip/active state, portal timestamp, offer eligibility",
    "guard": "Refresh portal state; invite only eligible former members and respect cancellation reason",
    "purchaseExit": "Resubscription or reactivation ends win-back; renewal service remains separately owned",
    "retry": "Unavailable portal state holds replay until subscription operations reconciles it",
    "failure": "A paused member is offered an acquisition discount for an active plan",
    "edges": [
      "A failed payment belongs to owned billing service rather than voluntary lapse",
      "A one-time purchase does not prove the subscription resumed"
    ],
    "denominator": "Unique eligible cancelled members excluding active, paused and skipped plans",
    "handover": "Subscription operations owns portal truth; retention approves return terms",
    "nativeRationale": "Consider Shopify Messaging: a maintained former-member segment can keep native return invitations distinct from billing service. This proposed design requires the configured-account exercise.",
    "profileRationale": "Consider Klaviyo: profile filters on supplied subscription state provide checkpoints around an order-based flow. Supplied audience fields and queue behavior still require demonstration.",
    "acceptance": "Pause a plan, fail a renewal and buy a one-time item; accept no paused-member offer, separate billing handoff and no false resubscription."
  },
  "best-shopify-win-back-email-apps-for-shopify-plus-merchants": {
    "audience": "Shopify Plus merchants",
    "goal": "win-back email apps",
    "question": "Which region owns the return invitation after a cross-store purchase?",
    "entry": "Store-local lapse segment entry under valid regional approval",
    "fields": "store ID, identity version, regional permission, last orders across linked stores, approval version",
    "guard": "Reconcile linked-store purchases and assign one region-approved return owner",
    "purchaseExit": "A linked-store order closes competing win-back jobs while preserving separate permissions",
    "retry": "Revoked regional approval blocks replay; identity uncertainty waits for platform review",
    "failure": "Two stores offer conflicting return incentives to one merged buyer",
    "edges": [
      "Identical local customer IDs must remain store-scoped",
      "A regional transfer cannot carry withdrawn marketing permission"
    ],
    "denominator": "Unique eligible reconciled identities by assigned region",
    "handover": "Regional approver owns return copy; platform team owns cross-store queue reconciliation",
    "nativeRationale": "Consider Shopify Messaging: store-local native segments make regional ownership explicit when the platform supplies cross-store gates. This proposed design requires the configured-account exercise.",
    "profileRationale": "Consider Klaviyo: maintained region and identity properties offer explicit filter boundaries for a shared flow program. Supplied audience fields and queue behavior still require demonstration.",
    "acceptance": "Collide local IDs, buy in the linked store and revoke regional approval; accept one reconciled owner and no revoked incentive."
  },
  "best-shopify-win-back-email-apps-for-international-merchants": {
    "audience": "international merchants",
    "goal": "win-back email apps",
    "question": "Can the returning buyer still shop the market and language used by the invitation?",
    "entry": "Localized buyer exceeds the market-specific reorder window",
    "fields": "customer ID, declared market, locale, last order currency, current shipping eligibility, timezone evidence",
    "guard": "Use current market links and approved language; hold unsupported destinations",
    "purchaseExit": "A purchase in any currency closes the matched lapse episode",
    "retry": "A locale or market change invalidates old content; unknown time handling waits for operations",
    "failure": "An old-market return offer links to unavailable goods in a different currency",
    "edges": [
      "Travel IP cannot redefine the declared destination",
      "A translated promotion must preserve the approved expiry timezone"
    ],
    "denominator": "Unique eligible lapsed buyers by declared market and locale",
    "handover": "Localization owns translations; market operations owns eligibility and time rules",
    "nativeRationale": "Consider Shopify Messaging: a deliberately limited native segment set can support approved localized return copy. This proposed design requires the configured-account exercise.",
    "profileRationale": "Consider Klaviyo: maintained market properties plus order filters provide checkpoints for locale-specific delays. Supplied audience fields and queue behavior still require demonstration.",
    "acceptance": "Change language and shipping market while queued, then buy in another currency; accept current links and a matched-order exit."
  },
  "best-shopify-win-back-email-apps-for-new-shopify-stores": {
    "audience": "new Shopify stores",
    "goal": "win-back email apps",
    "question": "Does the new store have evidence of lapse before calling its first buyers inactive?",
    "entry": "First live buyer cohort reaches a founder-approved review date",
    "fields": "live/test flag, customer ID, last paid order, observation start, order feed health, permission source",
    "guard": "Exclude staff and incomplete history; use a preference question when reorder evidence is sparse",
    "purchaseExit": "A real repeat order ends the episode even if analytics is blocked",
    "retry": "Missing order history holds retry; founder reconciles rather than inventing a lapse date",
    "failure": "A tiny cohort is reported as proof of profitable reactivation",
    "edges": [
      "Zero eligible buyers has no rate",
      "A long-lead preorder cannot be treated as unused goods awaiting replenishment"
    ],
    "denominator": "Unique live buyers with complete history assigned at review, excluding staff",
    "handover": "Founder owns the first cohort trace; support owns preference replies",
    "nativeRationale": "Consider Shopify Messaging: one native segment invitation gives the founder a bounded first retention workflow to inspect. This proposed design requires the configured-account exercise.",
    "profileRationale": "Consider Klaviyo: an existing Placed Order feed can anchor a traceable lapse delay when live/test separation is demonstrated. Supplied audience fields and queue behavior still require demonstration.",
    "acceptance": "Include a staff order, incomplete history and a live unattributed repeat order; accept staff exclusion, history hold and a real order exit without a performance claim."
  },
  "best-shopify-win-back-email-apps-for-high-volume-stores": {
    "audience": "high-volume stores",
    "goal": "win-back email apps",
    "question": "Can late order events prevent a stale lapse segment from draining during a backlog?",
    "entry": "Versioned lapse eligibility event enters the maintained dispatch queue",
    "fields": "event ID, identity version, last-order watermark, rule version, permission watermark, queue age",
    "guard": "Reject stale eligibility and check current order, permission and final-contact state before dispatch",
    "purchaseExit": "A newer paid-order watermark invalidates every matched pending lapse job",
    "retry": "Lost acknowledgement goes to reconciliation; old segment events cannot reopen closed episodes",
    "failure": "An old lapse event arrives after purchase and recreates a return offer",
    "edges": [
      "A rule change must not re-enroll an already completed episode automatically",
      "Backlog beyond offer validity expires with an owned disposition"
    ],
    "denominator": "Unique eligible identities assigned at ingest including later expired jobs",
    "handover": "Messaging operations owns backlog and reconciliation; incident lead owns pause and rollback",
    "nativeRationale": "Consider Shopify Messaging: a bounded native segment program remains useful if operations demonstrates freshness during representative bursts. This proposed design requires the configured-account exercise.",
    "profileRationale": "Consider Klaviyo: purchase profile filters provide documented action checkpoints alongside a maintained watermark contract. Supplied audience fields and queue behavior still require demonstration.",
    "acceptance": "Replay stale eligibility after purchase, lose an acknowledgement and change the lapse rule; accept no reopened episode, no blind resend and an inspectable pause trace."
  }
};

export type LaunchEditorial = GoalEditorial & { goal: 'product launch email apps' };
export const launchEditorial: Record<string, LaunchEditorial> = {
  "best-shopify-product-launch-email-apps-for-small-shopify-stores": {
    "audience": "small Shopify stores",
    "goal": "product launch email apps",
    "question": "Can one owner release a new SKU without sending an unavailable promise?",
    "entry": "Owner approves a published release for a consented launch audience",
    "fields": "launch ID, customer ID, variant ID, publication status, available-to-sell timestamp, opening and closing time, permission, sender owner, dispatch ledger",
    "guard": "Refresh channel publication and variant stock after selection; hold unknown or zero stock and jobs outside the sale window",
    "purchaseExit": "Paid purchase of the launch variant closes its promotion; sale close or withdrawal retires pending jobs",
    "retry": "Reconcile the launch/customer/message ledger before replay; unknown acknowledgements require owner review, and reopening needs a new approved release version",
    "failure": "A second sender repeats the launch after the first sender times out",
    "edges": [
      "Stock falls to zero after selection: expect hold, no substitution promise, and stock-owner review",
      "Publication is delayed past opening: expect hold until publication is verified within the still-valid sale window"
    ],
    "denominator": "Unique eligible recipients actually sent during the approved release window; numerator is unique launch-variant paid buyers within seven days of send",
    "handover": "Store owner owns the pause control; backup reconciles stock and dispatch exceptions before reopening",
    "nativeRationale": "Shopify Messaging is a useful candidate when one approved SKU announcement can be drafted beside the store catalog. Demonstrate the release-specific dispatch checks in the offered account.",
    "profileRationale": "Klaviyo is a useful candidate when an existing launch-interest profile property can separate interested customers from the general list. Demonstrate the required field mappings and refresh behavior before selection.",
    "acceptance": "Compare both candidates using these two proposed boundary fixtures and a purchase-exit trace. Save expected and actual queue dispositions, field timestamps, template version and owner decision. Choose the simpler maintained configuration that passes; unknown state or an unowned queue blocks selection. These exercises have not been performed for a merchant."
  },
  "best-shopify-product-launch-email-apps-for-dtc-brands": {
    "audience": "DTC brands",
    "goal": "product launch email apps",
    "question": "Can early access remain distinct from the public release?",
    "entry": "Release owner approves a versioned early-access cohort before public opening",
    "fields": "release version, cohort assignment, entitlement source and expiry, access URL, allocation timestamp, public opening, consent, customer and dispatch keys",
    "guard": "Refresh entitlement and allocated stock at dispatch; verify destination access separately because a segment does not enforce storefront access",
    "purchaseExit": "Launch purchase closes promotion; entitlement expiry or release-version change holds queued early-access jobs and routes review to the release owner",
    "retry": "Reconcile acknowledgements by release/customer/message key; never relabel a stale early-access job as public outreach",
    "failure": "An expired entitlement receives a working early-access promise after a release delay",
    "edges": [
      "Entitlement is revoked during queue delay: expect hold even if original segment membership remains",
      "Public opening shifts with VIP messages queued: expect version hold and explicit cohort reassignment before any new dispatch"
    ],
    "denominator": "Unique eligible early-access recipients actually sent; count unique launch buyers within seven days, reporting public recipients separately",
    "handover": "Release owner approves cohort changes; merchandising owns allocation and destination access, and finance reviews contribution",
    "nativeRationale": "Shopify Messaging is a useful candidate when a separately approved early-access announcement needs a branded template and selected audience. Demonstrate the release-specific dispatch checks in the offered account.",
    "profileRationale": "Klaviyo is a useful candidate when maintained entitlement properties can support a filtered early-access flow with an owned access integration. Demonstrate the required field mappings and refresh behavior before selection.",
    "acceptance": "Compare both candidates using these two proposed boundary fixtures and a purchase-exit trace. Save expected and actual queue dispositions, field timestamps, template version and owner decision. Choose the simpler maintained configuration that passes; unknown state or an unowned queue blocks selection. These exercises have not been performed for a merchant."
  },
  "best-shopify-product-launch-email-apps-for-fashion-stores": {
    "audience": "fashion stores",
    "goal": "product launch email apps",
    "question": "Is the advertised capsule available in the recipient\u2019s size and color?",
    "entry": "Merchandiser approves a capsule announcement for declared variant interest",
    "fields": "capsule/release ID, preference source and timestamp, size/color variant, available-to-sell timestamp, publication, season cutoff, consent, customer and dispatch keys",
    "guard": "Refresh the requested variant at dispatch; product-wide stock cannot establish size availability, and unknown preference stays in a separate general-announcement cohort",
    "purchaseExit": "Relevant variant purchase closes its promotion; sold-out interest moves only to an explicitly consented waitlist, and season close expires the release",
    "retry": "Reconcile capsule/customer/variant/message acknowledgements; alternatives require new approved copy and eligibility rather than automatic substitution",
    "failure": "A stocked product is advertised as available although the requested size is sold out",
    "edges": [
      "Preferred size sells out after selection: expect hold and separately consented waitlist option",
      "Hero color is unavailable but another color is stocked: expect no automatic replacement promise; merchandiser approves an alternative branch"
    ],
    "denominator": "Unique sent recipients with a known eligible size/color preference; numerator is unique preferred-variant buyers within seven days; report unknown-preference sends separately",
    "handover": "Merchandising owns variant freshness and seasonal stop; support owns size questions and returns feedback",
    "nativeRationale": "Shopify Messaging is a useful candidate when the merchandiser needs a branded capsule announcement with a selected customer audience. Demonstrate the release-specific dispatch checks in the offered account.",
    "profileRationale": "Klaviyo is a useful candidate when maintained size-interest profile properties can support separate message conditions rather than one capsule promise. Demonstrate the required field mappings and refresh behavior before selection.",
    "acceptance": "Compare both candidates using these two proposed boundary fixtures and a purchase-exit trace. Save expected and actual queue dispositions, field timestamps, template version and owner decision. Choose the simpler maintained configuration that passes; unknown state or an unowned queue blocks selection. These exercises have not been performed for a merchant."
  },
  "best-shopify-product-launch-email-apps-for-beauty-stores": {
    "audience": "beauty stores",
    "goal": "product launch email apps",
    "question": "Can a new routine step be introduced with current approved instructions?",
    "entry": "Copy approver releases a new-product announcement for declared routine interest",
    "fields": "release and SKU IDs, declared interest and timestamp, approved claims/instructions version, existing ownership, current stock, sale cutoff, consent and dispatch key",
    "guard": "Refresh declared interest, ownership, stock and approved copy before dispatch; hold incompatible or unknown interest and never infer a diagnosis from browsing",
    "purchaseExit": "Purchase of the new product exits selling into approved usage education; withdrawal, copy withdrawal or sale cutoff holds queued promotion",
    "retry": "Reconcile release/customer/copy-version acknowledgements; a changed instruction requires fresh approval before replay",
    "failure": "A delayed message sends superseded usage instructions to a customer who withdrew interest",
    "edges": [
      "Interest opt-out arrives after segment selection: expect hold and no inferred replacement routine",
      "Approved instructions change before dispatch: expect stale-copy hold and approver sign-off on the replacement"
    ],
    "denominator": "Unique eligible recipients actually sent; numerator is unique new-product buyers within seven days, with usage-related support contacts reported separately",
    "handover": "Claims/copy approver owns template release and stop; support receives usage questions and ownership exceptions",
    "nativeRationale": "Shopify Messaging is a useful candidate when approved routine education can be maintained in a branded campaign template. Demonstrate the release-specific dispatch checks in the offered account.",
    "profileRationale": "Klaviyo is a useful candidate when declared routine-interest properties can condition messages when the team maintains approval and ownership mappings. Demonstrate the required field mappings and refresh behavior before selection.",
    "acceptance": "Compare both candidates using these two proposed boundary fixtures and a purchase-exit trace. Save expected and actual queue dispositions, field timestamps, template version and owner decision. Choose the simpler maintained configuration that passes; unknown state or an unowned queue blocks selection. These exercises have not been performed for a merchant."
  },
  "best-shopify-product-launch-email-apps-for-food-and-beverage-stores": {
    "audience": "food and beverage stores",
    "goal": "product launch email apps",
    "question": "Can the recipient still order within a deliverable fresh-release window?",
    "entry": "Fulfillment approves a perishable release for eligible buyer destinations",
    "fields": "release ID, buyer versus gift-recipient identity, destination eligibility timestamp, available allocation, shelf-life promise, dispatch calendar and timezone, cutoff, consent and dispatch key",
    "guard": "Refresh destination eligibility, allocation and fulfillment cutoff before dispatch; unknown destination or expired window holds the offer",
    "purchaseExit": "Launch purchase closes promotion; fulfillment-window expiry or allocation exhaustion retires pending jobs, without converting gift recipients into subscribers",
    "retry": "Reconcile release/customer/window/message acknowledgements; an expired batch needs a newly approved fulfillment window and dedupe review before restart",
    "failure": "A failed batch replays after the final dispatch cutoff with an impossible freshness promise",
    "edges": [
      "Destination becomes unavailable after selection: expect hold and fulfillment-owner review",
      "Cutoff passes while a failed batch awaits replay: expect expiry, no retry under the old window"
    ],
    "denominator": "Unique eligible recipients actually sent before cutoff; numerator is fulfilled launch orders within the declared fourteen-day fulfillment window, with cancellations and nonfulfillment reported separately",
    "handover": "Fulfillment owns the cutoff and emergency stop; customer service handles gift identity and failed-delivery exceptions",
    "nativeRationale": "Shopify Messaging is a useful candidate when a time-bounded release announcement can use a selected destination audience and approved template. Demonstrate the release-specific dispatch checks in the offered account.",
    "profileRationale": "Klaviyo is a useful candidate when maintained destination properties can condition a release flow when fulfillment supplies current window state. Demonstrate the required field mappings and refresh behavior before selection.",
    "acceptance": "Compare both candidates using these two proposed boundary fixtures and a purchase-exit trace. Save expected and actual queue dispositions, field timestamps, template version and owner decision. Choose the simpler maintained configuration that passes; unknown state or an unowned queue blocks selection. These exercises have not been performed for a merchant."
  },
  "best-shopify-product-launch-email-apps-for-subscription-brands": {
    "audience": "subscription brands",
    "goal": "product launch email apps",
    "question": "Can a subscriber receive a launch offer without confusing billing status with access?",
    "entry": "Release owner approves a new-product offer for members with separately verified launch entitlement",
    "fields": "store/release/customer/subscription IDs, billing status timestamp, access entitlement and expiry, renewal date, skip state, variant availability, consent, cutoff and dispatch key",
    "guard": "Refresh billing and access independently at dispatch; a paid invoice alone does not establish launch access. Hold unknown entitlement and route billing failures to the service owner",
    "purchaseExit": "Launch-variant purchase closes its promotion; entitlement expiry or release close holds pending offers. A renewal payment or skipped renewal is not a launch purchase",
    "retry": "Reconcile release/customer/message acknowledgements before replay; refresh access after a skip or renewal change and require an approved release version for any restart",
    "failure": "A renewal receipt is treated as a launch conversion while an expired member receives an access promise",
    "edges": [
      "Renewal fails after audience selection but access remains valid: route billing service separately and require the release owner to decide promotional eligibility from current entitlement",
      "Member skips the next shipment after selection: do not infer cancellation or a launch purchase; refresh launch entitlement and hold unknown access before dispatch"
    ],
    "denominator": "Unique entitled recipients actually sent before release close; numerator is unique launch-variant buyers within seven days of send, excluding renewal-only orders",
    "handover": "Subscription operations owns billing and skip exceptions; release owner owns entitlement decisions and the promotion stop, with support receiving access disputes",
    "nativeRationale": "Shopify Messaging is a useful candidate when a separately approved member announcement needs a branded template and a selected audience distinct from renewal notices. Demonstrate the release-specific dispatch checks in the offered account.",
    "profileRationale": "Klaviyo is a useful candidate when maintained entitlement and skip-state properties can separate release messages from renewal flows. Demonstrate field mappings and refresh behavior in the offered account.",
    "acceptance": "Trace a failed renewal with retained access and a skipped shipment with unknown access; record separate service and promotion dispositions plus a launch-purchase exit. Compare both candidates against these proposed fixtures, recording expected and actual queue state, field timestamps, copy version and owner decisions. Unknown state or an unowned queue blocks selection. These exercises have not been performed for a merchant."
  },
  "best-shopify-product-launch-email-apps-for-shopify-plus-merchants": {
    "audience": "Shopify Plus merchants",
    "goal": "product launch email apps",
    "question": "Can each store approve its own release without inheriting another store\u2019s catalog promise?",
    "entry": "Central release lead requests store- and region-specific sign-off on a versioned catalog release",
    "fields": "store ID, region, release version, catalog/variant IDs, local approval owner and timestamp, publication, allocation, destination, consent, cutoff and store-scoped dispatch key",
    "guard": "Require the destination store\u2019s catalog and regional copy approval before dispatch; central approval does not establish local publication or availability. Hold missing local sign-off",
    "purchaseExit": "Launch purchase in the designated store closes that offer; approval withdrawal, catalog-version change or local cutoff holds pending jobs for that store",
    "retry": "Reconcile by store/release/customer/message rather than customer alone; replay only after local owners reconcile acknowledgements and approve the current catalog version",
    "failure": "A central template links one region to a different store\u2019s unreleased catalog",
    "edges": [
      "One region withdraws approval while another is ready: hold the withdrawn region without silently changing its destination to the approved store",
      "The same customer belongs to two stores: inspect store-scoped keys and each permission record; a purchase in one store must not be counted twice as two launch buyers in a combined report"
    ],
    "denominator": "Unique eligible recipient identities actually sent per store during its release window; numerator is unique launch buyers in that store within seven days; deduplicate customer identity before any combined cross-store report",
    "handover": "Central lead owns the release manifest; each store merchandiser signs catalog and copy approval and can stop local dispatch; analytics owns cross-store identity reconciliation",
    "nativeRationale": "Shopify Messaging is a useful candidate when each store team can maintain a locally approved branded announcement and customer selection. Demonstrate the release-specific dispatch checks in the offered account.",
    "profileRationale": "Klaviyo is a useful candidate when store-scoped profile properties and message conditions are maintained with explicit catalog ownership. Demonstrate field mappings and refresh behavior in the offered account.",
    "acceptance": "Trace a withdrawn regional approval and a shared customer across stores; save destination, local sign-off and store-scoped purchase-exit evidence. Compare both candidates against these proposed fixtures, recording expected and actual queue state, field timestamps, copy version and owner decisions. Unknown state or an unowned queue blocks selection. These exercises have not been performed for a merchant."
  },
  "best-shopify-product-launch-email-apps-for-international-merchants": {
    "audience": "international merchants",
    "goal": "product launch email apps",
    "question": "Does each recipient reach the approved market in the intended language and currency?",
    "entry": "Market owner approves a localized release for consented recipients with a verified destination market",
    "fields": "release/customer IDs, market and locale source/timestamp, currency, destination URL and shipping eligibility, translated-copy version, publication/allocation, local cutoff/timezone, permission and dispatch key",
    "guard": "Refresh market eligibility and verify the locale, currency and destination together; language preference alone does not prove deliverability or currency. Hold unknown market or unapproved translation",
    "purchaseExit": "Launch purchase closes the relevant market offer; destination withdrawal, translated-copy withdrawal or local cutoff holds queued jobs without automatic reassignment to another market",
    "retry": "Reconcile market/release/customer/message acknowledgements; a market change requires fresh destination and copy approval before replay, not just a translated subject",
    "failure": "A correctly translated email opens an unavailable market with a different checkout currency",
    "edges": [
      "Recipient changes destination country after selection: hold the old market offer until shipping eligibility, currency and approved URL are reconciled",
      "Local launch cutoff passes during a timezone conversion error: expire that market job and record the corrected timezone before any new release"
    ],
    "denominator": "Unique eligible recipients actually sent per market before its local cutoff; numerator is unique launch buyers within seven days of send; report markets separately and convert contribution using one declared exchange-rate convention",
    "handover": "Market owner approves destination and translated copy; commerce operations verifies currency and shipping, and local support receives destination exceptions",
    "nativeRationale": "Shopify Messaging is a useful candidate when a market owner needs a branded localized announcement with an explicitly selected audience. Demonstrate the release-specific dispatch checks in the offered account.",
    "profileRationale": "Klaviyo is a useful candidate when maintained market and locale properties can condition messages when destination mappings have an accountable owner. Demonstrate field mappings and refresh behavior in the offered account.",
    "acceptance": "Trace a country change and a cutoff crossing; save the actual destination locale/currency and queue hold, then demonstrate the market-specific purchase exit. Compare both candidates against these proposed fixtures, recording expected and actual queue state, field timestamps, copy version and owner decisions. Unknown state or an unowned queue blocks selection. These exercises have not been performed for a merchant."
  },
  "best-shopify-product-launch-email-apps-for-new-shopify-stores": {
    "audience": "new Shopify stores",
    "goal": "product launch email apps",
    "question": "Can a first launch distinguish live buying signals from rehearsal and sparse history?",
    "entry": "Store owner approves the first live release after a separately labeled test dispatch and destination check",
    "fields": "store/release/customer/variant IDs, live versus test mode, test-order marker, publication and stock timestamps, consent provenance, opening/cutoff, template approval and dispatch key",
    "guard": "Exclude test identities and orders from the live cohort; verify publication and destination with a live-state check. Sparse history is not proof of intent, so use declared launch permission rather than inferred affinity",
    "purchaseExit": "Live launch purchase closes promotion; a test purchase verifies the rehearsal branch only. Withdrawal or release expiry holds pending live messages",
    "retry": "Reconcile live and rehearsal ledgers separately before replay; never import test acknowledgements as live delivery evidence or infer success from an empty event history",
    "failure": "A test order suppresses a real subscriber while a tiny live sample is reported as reliable lift",
    "edges": [
      "A rehearsal order shares an email with the owner\u2019s live profile: retain mode/order markers and prove it cannot create a live launch conversion",
      "No prior orders exist and the first cohort has zero sent recipients: record no rate, hold unverified publication and obtain an owned destination check before opening"
    ],
    "denominator": "Unique consented live recipients actually sent during the release window; numerator is unique live launch buyers within seven days; exclude rehearsal sends/orders and show raw counts with sparse-count uncertainty",
    "handover": "Store owner signs live opening and pause; backup separates test records and reconciles pending jobs; support receives first-order destination failures",
    "nativeRationale": "Shopify Messaging is a useful candidate when a first release can be maintained as one approved branded announcement alongside the catalog. Demonstrate the release-specific dispatch checks in the offered account.",
    "profileRationale": "Klaviyo is a useful candidate when explicit live/test and declared-interest properties can organize a growing audience without inventing purchase history. Demonstrate field mappings and refresh behavior in the offered account.",
    "acceptance": "Trace the shared rehearsal identity and an empty live cohort; save mode separation, zero-denominator treatment and a live purchase-exit trace. Compare both candidates against these proposed fixtures, recording expected and actual queue state, field timestamps, copy version and owner decisions. Unknown state or an unowned queue blocks selection. These exercises have not been performed for a merchant."
  },
  "best-shopify-product-launch-email-apps-for-high-volume-stores": {
    "audience": "high-volume stores",
    "goal": "product launch email apps",
    "question": "Can a large release resume without replaying recipients whose acknowledgements are uncertain?",
    "entry": "Dispatch owner approves a versioned release with a finite audience snapshot, batch watermark and expiry",
    "fields": "store/release/customer/message IDs, cohort snapshot, batch and watermark, selected/attempted/acknowledged timestamps, provider response ID, uncertain state, permission/purchase refresh, stock/publication, throughput budget and cutoff",
    "guard": "Refresh eligibility before each batch; apply an operator-approved throughput budget and stop at cutoff. A watermark records processing progress, not proof of delivery or current eligibility",
    "purchaseExit": "Launch purchase closes remaining promotional attempts for that identity; release expiry holds the backlog. Reconcile pending jobs explicitly because a skipped step does not prove cancellation",
    "retry": "Join provider response IDs to the dispatch ledger before replay; isolate uncertain acknowledgements, deduplicate confirmed attempts and resume only reconciled identities within the valid window",
    "failure": "A timeout advances the watermark, then a bulk restart duplicates accepted messages and outlives the release window",
    "edges": [
      "Provider accepts a batch but its response times out: mark acknowledgement uncertain, reconcile provider evidence and hold those identities rather than replaying the entire batch",
      "Backlog throughput would cross the sale cutoff: stop expired jobs, record dispositions and require a newly approved release before any remaining recipients are reassigned"
    ],
    "denominator": "Unique eligible recipients actually sent across deduplicated batches before cutoff; numerator is unique launch buyers within seven days of send; report uncertain acknowledgements separately until reconciled and retain all originally assigned identities in any holdout comparison",
    "handover": "Dispatch operator owns throughput and pause; on-call backup receives watermark, provider IDs and unresolved acknowledgements before restart; merchandising owns availability and expiry",
    "nativeRationale": "Shopify Messaging is a useful candidate when a finite approved announcement and selected audience fit the operator\u2019s demonstrated batch controls. Demonstrate the release-specific dispatch checks in the offered account.",
    "profileRationale": "Klaviyo is a useful candidate when maintained release and purchase properties support message conditions alongside an independently demonstrated reconciliation ledger. Demonstrate field mappings and refresh behavior in the offered account.",
    "acceptance": "Trace an accepted batch with a lost response and a cutoff-limited backlog; save per-identity dispositions, watermark evidence and purchase exits before approving restart. Compare both candidates against these proposed fixtures, recording expected and actual queue state, field timestamps, copy version and owner decisions. Unknown state or an unowned queue blocks selection. These exercises have not been performed for a merchant."
  }
};

export const backInStockEditorial: Record<string, GoalEditorial> = {
  "best-shopify-back-in-stock-email-apps-for-small-shopify-stores": {
    "audience": "small Shopify stores",
    "goal": "back-in-stock email apps",
    "question": "Can one owner clear a small restock queue without turning a stock request into newsletter permission?",
    "entry": "Confirmed email request for one sold-out variant, recorded separately from newsletter membership",
    "fields": "store, subscription ID, stable customer identity, variant ID, requested purpose, permission timestamp, observation source/time, batch ID, copy version, expiry and queue disposition",
    "guard": "Owner verifies the requested variant is published and purchasable in the destination, with a fresh available-to-sell observation; release only the approved stock notice to still-permitted requesters. Unknown state pauses the batch",
    "purchaseExit": "A paid purchase containing the requested variant closes that request; an unrelated order does not. Withdrawal or expiry closes it without transferring the address to promotions",
    "retry": "Reuse the subscription/variant/restock-episode key. Reconcile an uncertain provider acknowledgement before replay; pause the sole sender while the owner is absent and do not revive closed requests on the next stock update",
    "nativeRationale": "Shopify Messaging offers branded admin templates and segment selection. For a small owner-reviewed restock batch, that familiar drafting surface can keep approved copy and dispatch review together. Select it only with a demonstrated external or account-native variant-request register and fresh availability check; a customer segment alone is insufficient.",
    "profileRationale": "Klaviyo profile and action filtering can help an owner inspect requester eligibility in an existing account. This is useful when maintained variant-request fields already exist, but one profile field must not overwrite simultaneous requests. Require the subscription-level queue demonstration before choosing this design.",
    "acceptance": "Propose one small batch with saved input snapshots, approved copy and a named cover owner. Accept only if duplicate events create one job, unrelated purchases retain the valid request and all held jobs have an owner. Compare ongoing register maintenance with the cost of adding a sender.",
    "failure": "A newsletter segment sends a general promotion to people who asked only for one stock notice",
    "edges": [
      "Proposed fixture: the provider accepted the notice but the response was lost. Reconcile the original job receipt; expect no second notice, with an acknowledged disposition saved.",
      "Proposed fixture: the requester buys another variant while the owner is absent. Preserve the requested variant subscription but hold its pending job until cover accepts ownership; do not infer purchase exit from any order."
    ],
    "denominator": "Unique permitted customer/variant requests actually sent in this restock episode; numerator is those same units with a paid matching-variant purchase within seven days of dispatch. Deduplicate replay and keep unrelated orders out",
    "handover": "Owner and cover sign the variant register, observation freshness limit, approved template, batch count, held jobs and closure ledger before resuming"
  },
  "best-shopify-back-in-stock-email-apps-for-dtc-brands": {
    "audience": "DTC brands",
    "goal": "back-in-stock email apps",
    "question": "Does a DTC restock preserve the acquisition promise without silently substituting a bundle?",
    "entry": "Confirmed variant-specific stock request from an acquisition landing page, independent of campaign or newsletter enrollment",
    "fields": "subscription and customer IDs, requested variant, acquisition promise version, bundle membership, approved landing destination, margin band, permission, observation time/source, episode and batch keys",
    "guard": "Growth releases only the requested sellable variant with the approved price and landing promise after merchandising validates current availability; a changed bundle is a different offer requiring review, not an automatic substitution",
    "purchaseExit": "Matching-variant purchase closes the stock request, including a bundle only when its line mapping proves that variant was acquired. Unrelated campaign conversion does not close it; withdrawal and the declared episode expiry do",
    "retry": "Keep the original request and promise version across retries. Reconcile ambiguous acknowledgements, retire closed jobs and require explicit fresh permission for a new offer rather than restarting from an updated campaign tag",
    "nativeRationale": "Shopify Messaging branded templates and customer-segment selection are useful for a merchandising-approved DTC batch with one landing promise. Keeping campaign approval in the admin can reduce copy handoffs, provided the team demonstrates a separate subscription ledger and variant-level dispatch refresh.",
    "profileRationale": "Klaviyo filtering on maintained profile properties and past actions can help growth inspect acquisition cohorts. It is a positive option when those fields are already owned there; prove that customer-level cohorts do not erase separate variant requests or treat a generic order as matching purchase exit.",
    "acceptance": "Propose a batch with full-price approved stock copy and finance-reviewed contribution assumptions. Accept only after tracing request to exact landing variant, preserving the original acquisition promise and reconciling every substituted or held item. No coupon or recovered-sale result is assumed.",
    "failure": "A stock request becomes permission to send a higher-margin replacement bundle",
    "edges": [
      "Proposed fixture: a returned bundle SKU contains the requested variant under a different parent product. Resolve line identity before deciding closure; hold ambiguous mapping rather than send a second invitation.",
      "Proposed fixture: the acquisition page changes to a discounted bundle while the queue waits. Hold the old destination and seek merchandising approval; do not rewrite the request or infer permission for the new offer."
    ],
    "denominator": "Unique customer/requested-variant units actually sent in the approved restock episode; count units with matching paid purchases within seven days, allocating bundle lines once and reporting subsequent refunds separately",
    "handover": "Growth owns subscription purpose and campaign mapping; merchandising signs variant and copy approval; finance owns margin assumptions. Queue owner records held destination changes before sender transfer"
  },
  "best-shopify-back-in-stock-email-apps-for-fashion-stores": {
    "audience": "fashion stores",
    "goal": "back-in-stock email apps",
    "question": "Can a size-and-color request survive a seasonal catalog change without becoming a different garment?",
    "entry": "Confirmed email stock request for the exact size/color variant, not a product-wide waitlist",
    "fields": "subscription, customer, immutable variant ID, size/color labels, season, replacement-SKU mapping, sales channel, current availability observation, permission, copy version and episode expiry",
    "guard": "Merchandising checks exact size/color identity, current publication and sellable availability before each batch. A similar size, returned garment pending inspection or new-season replacement does not satisfy this request",
    "purchaseExit": "Close on a paid order for that variant or explicit withdrawal/expiry. A later return does not automatically reopen permission; a new request must be explicit. Buying another size does not silently cancel the original request",
    "retry": "Deduplicate by request/variant/episode, reconcile acknowledgements and stop on closure. When a catalog migration changes variant IDs, hold for reviewed identity mapping instead of replaying old requests against new IDs",
    "nativeRationale": "Shopify Messaging templates and segment selection can keep a short seasonal restock batch close to merchandising approval. That is valuable when one team reviews size-specific copy, provided a demonstrated variant ledger prevents product-level segments from broadening the request.",
    "profileRationale": "Klaviyo profile and message filters are useful checkpoints when a fashion team already maintains season and preference data there. Choose that workflow only if it preserves parallel size/color subscriptions and refreshes variant identity before dispatch; preference data alone is not a stock request.",
    "acceptance": "Propose a size/color matrix with signed mappings and saved availability snapshots. Accept only if migration ambiguity holds, inspected stock alone becomes releasable and no approved copy claims a reservation. Review return-related contribution alongside sales.",
    "failure": "A product-level restock segment advertises the wrong size or counts uninspected returns as sellable",
    "edges": [
      "Proposed fixture: a new-season garment reuses the old size label but has a new variant ID and changed fit. Hold the old request and ask for a fresh request rather than silently mapping by label.",
      "Proposed fixture: one returned unit appears in warehouse stock but remains quarantined for inspection. Expect hold despite a positive physical quantity; save the sellable-source decision and later inspection event separately."
    ],
    "denominator": "Unique customer/size-color-variant requests actually sent in one restock episode; matching paid buyers per unit within seven days, deduplicated across batches. Report retained matching purchases after a separately declared return window as a second measure",
    "handover": "Merchandising owns variant migration and seasonal expiry; warehouse owns sellable observations; lifecycle operator inventories held sizes, signed copy and acknowledged jobs before switching sender"
  },
  "best-shopify-back-in-stock-email-apps-for-beauty-stores": {
    "audience": "beauty stores",
    "goal": "back-in-stock email apps",
    "question": "Can a beauty restock distinguish the requested formula and shade from an unapproved replacement?",
    "entry": "Confirmed email request for one unavailable shade/formula variant; routine interest is not permission for all beauty promotions",
    "fields": "subscription and customer IDs, variant, shade, formula/package revision, approved claims version, batch release state, permission, observation source/time, destination and queue expiry",
    "guard": "Product owner confirms the exact shade/formula remains the requested product and that released stock is purchasable. Dispatch only approved factual stock copy; formula changes or withdrawn claims hold the batch for review, never infer suitability from browsing",
    "purchaseExit": "Matching shade/formula purchase, withdrawal or expiry closes the request. A service complaint pauses relevant promotion for review; a replenishment schedule or another routine purchase does not reopen a closed stock request",
    "retry": "Keep subscription/variant/episode and copy revision stable. Reconcile uncertain receipts before retry; stop all pending jobs when product approval is withdrawn, inventory each disposition and require fresh review rather than rerunning the whole queue",
    "nativeRationale": "Shopify Messaging branded templates make centrally approved beauty copy reusable in an admin-reviewed batch. Segment selection is useful for selecting the intended cohort only after the operator proves a maintained shade/formula request ledger and current product-release guard.",
    "profileRationale": "Klaviyo profile and action filters can help coordinate existing routine and service context with a stock request. This is useful when that context is maintained, but acceptance must prove that a routine preference neither grants stock-notice permission nor substitutes another formula.",
    "acceptance": "Propose a shade/formula trace with the approved claims revision and release decision saved. Accept only if changed formula and withdrawn copy both hold the relevant work, while unrelated valid requests remain independently inspectable. No efficacy, safety or merchant sales outcome is claimed.",
    "failure": "An old stock notice recommends a reformulated product using claims approved for its predecessor",
    "edges": [
      "Proposed fixture: the shade name is unchanged but the formula revision changes. Hold the request for product review and obtain a fresh request where identity has changed; do not equate the name with equivalence.",
      "Proposed fixture: approved copy is withdrawn after batch creation but before dispatch. Pause the affected batch, enumerate pending versus acknowledged jobs and record review ownership; do not assume skipping one action cancels later jobs."
    ],
    "denominator": "Unique customer/shade-formula request units actually sent in the episode; numerator is matching paid purchases in seven days. Keep service holds and refunds visible separately and do not count unrelated routine items as stock conversions",
    "handover": "Product owner signs formula identity and claims revision; inventory owner signs released-stock observations; lifecycle owner reconciles paused batches and service holds before reapproval"
  },
  "best-shopify-back-in-stock-email-apps-for-food-and-beverage-stores": {
    "audience": "food and beverage stores",
    "goal": "back-in-stock email apps",
    "question": "Will a food restock still be deliverable within its shelf-life and destination constraints?",
    "entry": "Confirmed email request for one unavailable food/beverage pack variant and destination context, separate from recurring delivery or newsletter permission",
    "fields": "subscription, customer, variant/pack size, lot release, shelf-life threshold, destination eligibility, dispatch cutoff/timezone, current sellable observation, permission, approved copy revision and episode key",
    "guard": "Fulfillment validates released sellable stock, remaining shelf life, destination and shipping cutoff before each batch; unknown cold-chain or delivery eligibility holds. Approved copy describes current availability without guaranteeing delivery from a stale observation",
    "purchaseExit": "A matching paid pack purchase closes the request; fulfilled status is measured separately. Withdrawal, cutoff or lot expiry closes pending work. A recurring-plan renewal does not count unless its actual order lines satisfy the request",
    "retry": "Reconcile original acknowledgement before replay using request/variant/episode identity. Revalidate lot and cutoff on every retry; expire late work rather than rolling it into the next lot or silently changing pack size",
    "nativeRationale": "Shopify Messaging template approval and segment selection can support a bounded fulfillment-reviewed food batch. Keeping one approved availability message in the admin is useful when fulfillment owns the lot and destination checks outside the template and demonstrates them at dispatch.",
    "profileRationale": "Klaviyo filters can use maintained destination and purchase context to narrow a batch in an existing account. That can reduce manual cohort assembly, provided integration owners demonstrate timely lot/cutoff fields and retain each pack-specific subscription; filtering itself does not establish shelf life or cold-chain eligibility.",
    "acceptance": "Propose a pack/lot/destination batch with a declared final send time and fulfillment signoff. Accept only if late jobs expire, changed destinations hold and paid versus fulfilled outcomes remain separate. Include spoilage and variable cold-chain costs in contribution.",
    "failure": "A positive stock count releases notices for a lot that cannot reach the requested destination within its approved window",
    "edges": [
      "Proposed fixture: a queue retry occurs after the local shipping cutoff despite stock remaining. Expect expiry, no rollover to another lot and a saved terminal disposition.",
      "Proposed fixture: the requester changes destination to an unsupported cold-chain zone after enrollment. Hold dispatch for fulfillment review; do not treat the original destination or newsletter membership as authorization to send the offer."
    ],
    "denominator": "Unique customer/pack-variant/destination request units actually sent before cutoff; count matching paid purchases within seven days and fulfilled matching orders separately after the declared fulfillment window. Deduplicate lot batches and exclude unrelated plan renewals",
    "handover": "Fulfillment owns lot release, shelf-life and destination rules; lifecycle owner signs cutoff timezone, copy and batch dispositions; finance records spoilage and shipping costs before transfer"
  },
  "best-shopify-back-in-stock-email-apps-for-subscription-brands": {
    "question": "Can a paused subscriber request an exact restock without acquiring member-only access?",
    "entry": "Confirmed email stock request for one variant with a separately recorded membership-access requirement; subscription billing status is not stock-notice permission",
    "fields": "request/customer/variant IDs, plan and access source/version/time, paused or cancelled billing state, request permission, sellable observation source/time, episode expiry, copy approval and acknowledgement key",
    "guard": "Refresh the exact variant and destination, fresh sellable availability and current access entitlement. A paused billing plan neither grants nor necessarily removes storefront access; hold until the access owner resolves the entitlement independently",
    "purchaseExit": "Paid matching-variant purchase closes the request. Billing renewal or an unrelated subscription shipment does not; withdrawal and expiry close pending work without enrolling the requester in renewal marketing",
    "retry": "Retain the request/variant/episode key and recheck access on every retry. Reconcile provider acknowledgements before replay; never restart a closed request when a plan resumes",
    "failure": "A plan-resumed event releases a member-only stock notice to a requester whose access was revoked",
    "edges": [
      "Proposed fixture: billing is paused but access remains valid. Expect an eligible exact-variant request to survive billing pause, with current access evidence and stock checks saved; no renewal campaign is created.",
      "Proposed fixture: access is revoked after selection while billing remains active. Hold the queued notice, reconcile any accepted provider job and route the access discrepancy to the membership owner before retry."
    ],
    "handover": "Membership operations owns access disputes; merchandising owns variant freshness; dispatch cover receives permission, access version, acknowledged and held jobs before assuming the sole sender",
    "nativeRationale": "An approved member restock template can fit Shopify Messaging when the team wants centralized copy review. Choose this candidate only after demonstrating a separate request ledger and current access checks; billing segments alone cannot authorize release",
    "profileRationale": "Klaviyo filtering is a useful candidate when maintained membership properties support eligibility review. Demonstrate independent billing and access fields, simultaneous variant requests and permanent closure in the offered account before selection",
    "acceptance": "Propose both membership fixtures with recorded expected and actual dispositions. Require distinct billing/access evidence and a matching-purchase exit; do not accept a renewal event as permission. Compare access reconciliation work and integration cost for the same cohort. These are proposed acceptance exercises, not performed merchant tests. Hold selection for unknown state or an unowned queue.",
    "audience": "subscription brands",
    "goal": "back-in-stock email apps",
    "denominator": "Unique permitted live customer/variant requests actually sent in this restock episode; numerator is those same request units with a paid matching-variant purchase within seven days of dispatch. Deduplicate retries, exclude test orders and report uncertain acknowledgements separately until reconciled"
  },
  "best-shopify-back-in-stock-email-apps-for-shopify-plus-merchants": {
    "question": "Can a Plus restock release survive a catalog approval change without treating the plan as authorization?",
    "entry": "Confirmed exact-variant stock request linked to a specific company location and approved catalog revision, independent of general marketing membership",
    "fields": "request/customer/company-location/variant IDs, catalog and approval revision, approver, destination and entitlement timestamps, sellable observation source/time, copy approval, episode expiry and dispatch receipt",
    "guard": "Refresh company-location authorization, published catalog revision, destination and fresh sellable availability before dispatch. Plus status is not catalog approval; hold removed or ambiguous catalog access even when global stock is positive",
    "purchaseExit": "Matching-variant paid purchase for the requesting company location closes its request; another location order does not silently consume it. Withdrawal, approval revocation and expiry close or hold pending work with explicit dispositions",
    "retry": "Use the company-location/request/variant/episode key. Reconcile uncertain acknowledgements before retry and require an approved current catalog revision; never inherit authority from a superseded approval",
    "failure": "An enterprise stock batch sends an obsolete catalog link after the approver withdraws that company location from the release",
    "edges": [
      "Proposed fixture: an approver revokes a catalog revision after selection. Expect unsent jobs held and approved destination/version evidence required before release; accepted jobs receive an explicit acknowledged disposition.",
      "Proposed fixture: one buyer requests the same variant at two company locations and purchases at one. Close only the matching location request and recheck catalog access for the other, without merging distinct authorization contexts."
    ],
    "handover": "Catalog approver signs revision and location scope; commerce operations owns access refresh; dispatch owner transfers the sole sender only with location-level holds, closures and provider receipts",
    "nativeRationale": "Shopify Messaging is a useful drafting candidate for a catalog-approved batch where one approver maintains the copy. Selection requires demonstrated company-location request records and dispatch authorization checks beyond customer segments",
    "profileRationale": "Klaviyo conditions can help review maintained eligibility properties across enterprise workflows. Select it only if the team demonstrates location-scoped requests and current catalog approvals without flattening them into one customer flag",
    "acceptance": "Propose approval revocation and two-location purchase traces. Require catalog revision, approver, location-specific closure and queue disposition evidence. Compare ongoing approval maintenance and integration quotes before choosing a sender. These are proposed acceptance exercises, not performed merchant tests. Hold selection for unknown state or an unowned queue.",
    "audience": "Shopify Plus merchants",
    "goal": "back-in-stock email apps",
    "denominator": "Unique permitted live customer/company-location/variant requests actually sent in this restock episode; numerator is those same request units with a paid matching-variant purchase within seven days of dispatch. Deduplicate retries, exclude test orders and report uncertain acknowledgements separately until reconciled"
  },
  "best-shopify-back-in-stock-email-apps-for-international-merchants": {
    "question": "Can a stock notice still be fulfilled in the requested destination before its local window closes?",
    "entry": "Confirmed email request for one variant in a declared destination and notification window; language preference alone does not establish the destination",
    "fields": "request/customer/variant IDs, destination country, market and currency, shipping eligibility, timezone/window, approved localized URL/copy version, permission, sellable source/time and episode receipt",
    "guard": "Refresh exact-variant sellability in the destination, approved URL/currency, shipping eligibility and local cutoff using an owned timezone rule. Hold changed destinations or stale observations; stock in another market cannot release this request",
    "purchaseExit": "A paid matching-variant purchase for this destination closes the request; an unrelated market purchase requires reconciliation. Withdrawal or the declared local expiry terminates queued notices without rolling them into tomorrow",
    "retry": "Keep request/variant/destination/episode identity and reconcile acknowledgements before replay. Recompute the local window and freshness; a destination change needs renewed review rather than automatic translation and resend",
    "failure": "A translated notice points to stock that cannot ship to the requester before the destination cutoff",
    "edges": [
      "Proposed fixture: the requester changes country after selection. Hold the old destination job; require current shipping, currency, URL and permission evidence before any reviewed release to the new destination.",
      "Proposed fixture: a retry crosses the local cutoff during a timezone change. Expire the job, record the timezone calculation and reconcile any provider acceptance; do not extend the promise to clear the backlog."
    ],
    "handover": "Market owner approves localized promise and timezone; fulfillment owns destination eligibility; support and dispatch cover receive expired jobs, destination exceptions and acknowledged receipts",
    "nativeRationale": "Shopify Messaging is useful for an owner-approved localized restock template with a selected audience. Choose it only after demonstrating destination-scoped request records and fresh shipping/window checks outside copy selection",
    "profileRationale": "Klaviyo filtering is useful when maintained market properties support destination review. Require separate request-level destination history and cutoff evaluation so a language property cannot silently redirect stock notices",
    "acceptance": "Propose the country-change and cutoff fixtures, saving destination, timestamp, timezone and expected versus actual queue states. Compare matched integration and localization work; no merchant exercises have been performed. These are proposed acceptance exercises, not performed merchant tests. Hold selection for unknown state or an unowned queue.",
    "audience": "international merchants",
    "goal": "back-in-stock email apps",
    "denominator": "Unique permitted live customer/variant/destination requests actually sent in this restock episode; numerator is those same request units with a paid matching-variant purchase within seven days of dispatch. Deduplicate retries, exclude test orders and report uncertain acknowledgements separately until reconciled"
  },
  "best-shopify-back-in-stock-email-apps-for-new-shopify-stores": {
    "question": "Can a first restock distinguish a live request from rehearsal when order history is empty?",
    "entry": "Confirmed live email request for an exact sold-out variant, explicitly separated from owner rehearsal identities and test orders",
    "fields": "live/test mode, request/customer/variant IDs, permission source/time, publication and sellable observation source/time, owner freshness limit, rehearsal receipt, live approval, episode expiry and provider acknowledgement",
    "guard": "Require owned live evidence of variant publication, destination and fresh sellable availability. Empty purchase history does not establish consent or demand. Hold the first batch until a live-state destination check and separate rehearsal review are signed",
    "purchaseExit": "Only a live paid matching-variant purchase closes a live request. Rehearsal purchases prove a proposed branch only; withdrawal and expiry terminate pending live work without promoting test contacts into the queue",
    "retry": "Keep live and rehearsal keys and acknowledgement ledgers separate. Reconcile uncertain live receipts before retry, refresh stock and permission, and never infer success or safe replay from an empty event log",
    "failure": "An owner test purchase suppresses a real stock request and a single rehearsal send is reported as merchant conversion evidence",
    "edges": [
      "Proposed fixture: the owner uses the same email for rehearsal and a live request. Expect mode-specific ledgers and a test order unable to close the live variant request; save both dispositions.",
      "Proposed fixture: first live inventory evidence is missing and no notices were sent. Hold dispatch for a dated sellable observation and signed live destination check; report zero sends with no rate, rather than treating the rehearsal as proof."
    ],
    "handover": "Store owner approves the first live batch and freshness limit; named cover receives separate rehearsal/live ledgers, held observations, acknowledged jobs and pause instructions",
    "nativeRationale": "Shopify Messaging offers a useful familiar template workspace for a first owner-approved notice. Selection requires a demonstrated live request register and explicit rehearsal separation before unattended sending",
    "profileRationale": "Klaviyo filtering is a useful candidate when explicit live/test properties can organize the growing workflow. Require request-level evidence and mode-specific purchase exits instead of inferring intent from sparse profiles",
    "acceptance": "Propose shared-identity rehearsal and missing-live-evidence traces with expected and actual states. Require signed live checks and zero-denominator treatment. Compare register upkeep and setup cost before introducing another sender. These are proposed acceptance exercises, not performed merchant tests. Hold selection for unknown state or an unowned queue.",
    "audience": "new Shopify stores",
    "goal": "back-in-stock email apps",
    "denominator": "Unique permitted live customer/variant requests actually sent in this restock episode; numerator is those same request units with a paid matching-variant purchase within seven days of dispatch. Deduplicate retries, exclude test orders and report uncertain acknowledgements separately until reconciled"
  },
  "best-shopify-back-in-stock-email-apps-for-high-volume-stores": {
    "question": "Can a large restock batch stop after a single-unit race without replaying accepted notices?",
    "entry": "Confirmed exact-variant email requests admitted to a finite restock episode with an approved contact budget, batch watermark and expiry",
    "fields": "request/customer/variant/episode IDs, queue order and batch watermark, permission/purchase refresh, sellable source/time and freshness limit, allocation policy, cutoff, attempt/acknowledgement IDs and unresolved dispositions",
    "guard": "Refresh permission, exact-variant sellability and destination before each batch; use an operator-approved batch size and ordering policy. A single sellable unit does not justify a claim that every selected requester can buy; email never reserves inventory. Stop dispatch on depletion, stale state or cutoff",
    "purchaseExit": "A paid matching-variant purchase closes only that customer request; depletion holds other unsent jobs until fresh evidence within the same approved budget. Withdrawal or expiry closes work and does not create another restock episode automatically",
    "retry": "Resume only reconciled request/variant/episode keys after joining provider receipts to per-request state. Watermark advancement is not acknowledgement. Hold uncertain attempts and recheck depletion before retry; never replay the entire batch after timeout",
    "failure": "Two workers select the same single unit, advance watermarks and replay accepted notices while inventory has already disappeared",
    "edges": [
      "Proposed fixture: two workers observe one sellable unit and a matching purchase consumes it between batches. Expect one dispatch owner, documented contact budget and a depletion hold for unsent jobs; no reservation or guaranteed purchase is claimed.",
      "Proposed fixture: the provider accepts a batch but its response is lost as the backlog reaches expiry. Hold uncertain jobs, reconcile receipts and close expired unsent work; restarting from the watermark must not resend acknowledged requests."
    ],
    "handover": "Dispatch on-call owns batch pause and sole-sender transfer; inventory operations owns freshness and depletion decisions; backup receives watermark, per-request receipts, expired jobs and unresolved acknowledgements",
    "nativeRationale": "Shopify Messaging is a useful template candidate when a finite batch fits demonstrated operator controls. Require an independent request ledger, stock refresh and reconciliation demonstration; segment selection alone does not resolve competing workers",
    "profileRationale": "Klaviyo filtering is useful for maintained purchase and eligibility conditions in a larger workflow. Select it only alongside demonstrated request-level reconciliation and batch ownership; profile conditions are not inventory locks",
    "acceptance": "Propose the single-unit race and lost-response/expiry fixtures. Require per-request receipts, observed depletion holds and documented ordering decisions before restart. Compare reconciliation labor and integration cost at the same deduplicated request volume. These are proposed acceptance exercises, not performed merchant tests. Hold selection for unknown state or an unowned queue.",
    "audience": "high-volume stores",
    "goal": "back-in-stock email apps",
    "denominator": "Unique permitted live customer/variant requests actually sent in this restock episode; numerator is those same request units with a paid matching-variant purchase within seven days of dispatch. Deduplicate retries, exclude test orders and report uncertain acknowledgements separately until reconciled"
  }
};
