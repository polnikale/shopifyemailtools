export interface EmailSmsEditorial {
  audience: string; owner: string; question: string; workflow: string; fields: string;
  nativeFit: string; profileFit: string; fixtures: string[];
}
/** Proposed merchant acceptance contracts; these fixtures have not been executed. */
export const emailSmsEditorial: Record<string, EmailSmsEditorial> = {
  "best-shopify-email-and-sms-marketing-apps-for-small-shopify-stores": {
    "audience": "small Shopify stores",
    "owner": "Store owner and backup",
    "question": "One reviewed welcome promise",
    "workflow": "A separate email opt-in starts a compact product introduction; only an explicitly requested, time-sensitive reminder may use SMS. The owner approves a finite episode deadline and two total promotional slots across channels, with no SMS merely because an email was unopened.",
    "fields": "requested reminder, permission receipts, product, deadline",
    "nativeFit": "Shopify Messaging fits an owner reviewing a small campaign cohort in the admin.",
    "profileFit": "Klaviyo fits a small store needing a maintained consent split inside a flow.",
    "fixtures": [
      "An email-only customer supplies a checkout phone number. Expect email eligibility only, no text; inspect both permission receipts and the blocked SMS slot.",
      "The sole owner queues a reminder, then a matching purchase arrives during a provider timeout. Expect closure, provider reconciliation and no replacement text; inspect the cancellation and late receipt."
    ]
  },
  "best-shopify-email-and-sms-marketing-apps-for-dtc-brands": {
    "audience": "DTC brands",
    "owner": "Lifecycle lead with data owner",
    "question": "One acquisition promise across two channels",
    "workflow": "A documented acquisition offer starts one customer journey. Email explains the bundle and terms; SMS can deliver a requested deadline alert only after independent permission and current offer eligibility checks. The lead approves at most two promotional slots total and retires competing acquisition campaigns before dispatch.",
    "fields": "acquisition cohort, offer version, bundle identity, campaign owner",
    "nativeFit": "Shopify Messaging fits a bounded acquisition campaign with reviewed segments.",
    "profileFit": "Klaviyo fits a maintained email/SMS acquisition flow with consent-based branches.",
    "fixtures": [
      "Two acquisition integrations replay the same signup with different transport IDs. Expect one canonical journey and slot allocation; inspect the source event mapping and collision ledger.",
      "A second email shares a household phone, then a bundle purchase arrives. Expect identity hold without automatic merging, and purchase reconciliation before outreach; inspect mapping authority and both pending queues."
    ]
  },
  "best-shopify-email-and-sms-marketing-apps-for-fashion-stores": {
    "audience": "fashion stores",
    "owner": "Merchandising lead with returns owner",
    "question": "An exact variant alert without duplicate pressure",
    "workflow": "A requested size/color release starts the episode. Email supplies fit and exchange information; SMS is reserved for a separately requested alert when that exact sellable variant is available. Approve at most two total slots; an inventory refresh cannot restart an expired episode or reserve stock.",
    "fields": "size, color, variant, sellable stock timestamp, exchange state",
    "nativeFit": "Shopify Messaging fits a merchandiser reviewing one variant segment and campaign.",
    "profileFit": "Klaviyo fits variant-event flows when the team maintains stock and consent bindings.",
    "fixtures": [
      "The requested size sells out after email scheduling but another size remains. Expect held SMS and no substitute claim; inspect fresh variant availability and destination.",
      "An exchange case opens after SMS queues, then the old stock event replays. Expect both channels held until returns-owner resolution, with no replayed dispatch; inspect the case and stable slot ledger."
    ]
  },
  "best-shopify-email-and-sms-marketing-apps-for-beauty-stores": {
    "audience": "beauty stores",
    "owner": "Lifecycle lead with product safety owner",
    "question": "Education before a requested routine reminder",
    "workflow": "A declared routine interest starts an education episode, not a diagnosis or depletion prediction. Email explains approved usage; SMS can provide a separately requested routine reminder only if product and content remain eligible. Approve two slots total; adverse-use support takes priority over promotion.",
    "fields": "routine preference, product claims approval, retained quantity, adverse-use case",
    "nativeFit": "Shopify Messaging fits a reviewed education cohort with approved product copy.",
    "profileFit": "Klaviyo fits a routine-interest flow with maintained consent and product checks.",
    "fixtures": [
      "A customer withdraws SMS permission but retains email education permission. Expect SMS cancellation, email only after its own fresh guard, and no fallback sale text; inspect channel receipts.",
      "An adverse-use support case arrives before a scheduled reminder and an old clear-case event arrives later. Expect hold across channels until authoritative safety resolution; inspect event versions and pending-job dispositions."
    ]
  },
  "best-shopify-email-and-sms-marketing-apps-for-food-and-beverage-stores": {
    "audience": "food and beverage stores",
    "owner": "Retention lead with fulfillment owner",
    "question": "A fresh delivery promise with channel limits",
    "workflow": "A requested non-restricted product availability episode starts with email explaining ingredients and delivery limits. A separately requested SMS alert may follow only while stock and destination-specific shipping cutoff remain valid. Approve two total slots; do not infer consumption or dietary suitability from an order.",
    "fields": "lot availability, ingredient approval, destination, cutoff timezone, subscription shipment",
    "nativeFit": "Shopify Messaging fits a reviewed eligible non-alcohol product campaign.",
    "profileFit": "Klaviyo fits a delivery-sensitive flow when country, content and number eligibility are maintained.",
    "fixtures": [
      "A delivery cutoff changes after email queues. Expect the SMS alert held until fulfillment approves a valid promise; inspect timezone, destination and current cutoff.",
      "An active subscription shipment is discovered while an alert acknowledgement is late. Expect competing promotion closed without changing the plan and no resend; inspect subscription authority, provider receipt and both queues."
    ]
  },
  "best-shopify-email-and-sms-marketing-apps-for-subscription-brands": {
    "audience": "subscription brands",
    "owner": "Retention lead with subscription operations owner",
    "question": "A requested reminder without changing the plan",
    "workflow": "A purpose-specific subscription education request starts one episode. Email explains the current plan; SMS may carry only a separately requested reminder after fresh plan status and channel-purpose preferences are checked. Pause, skip, cancellation, matching purchase and support exits must refresh at each channel dispatch. An email click grants neither SMS permission nor authority to resume, edit or charge a subscription.",
    "fields": "subscription ID, status version, next shipment, skip/pause state, purpose-specific preferences",
    "nativeFit": "Shopify Messaging fits an owner-reviewed subscriber campaign when authoritative plan exclusions are supplied and account eligibility is confirmed.",
    "profileFit": "Klaviyo fits a consent-branched subscriber flow when the integration supplies current plan status and purpose-specific preferences; demonstrate exits before enabling either channel.",
    "fixtures": [
      "A subscriber pauses after the email queues but before the requested SMS reminder. Expect held promotion in both queues through a demonstrated subscription integration, with no resume or charge; inspect status version and cancellation receipts.",
      "A subscriber keeps educational email permission but withdraws reminder SMS permission, then clicks the email. Expect only independently eligible education, no SMS or plan edit; inspect separate purpose receipts and the blocked slot."
    ]
  },
  "best-shopify-email-and-sms-marketing-apps-for-shopify-plus-merchants": {
    "audience": "Shopify Plus merchants",
    "owner": "Organization lifecycle lead with account and location administrator",
    "question": "A location-scoped promise with explicit authority",
    "workflow": "An approved account/location offer starts one owned episode. Email describes authorized terms; separately requested SMS requires its own permission and a current recipient role at the intended account and location. An email click confers no account privileges, purchasing authority or SMS permission. Refresh account membership, location role, support, matching purchase and channel exits before each dispatch; hold stale role data.",
    "fields": "account ID, location ID, contact role version, storefront entitlement, approving administrator",
    "nativeFit": "Shopify Messaging fits a Plus team reviewing bounded admin campaigns when the administrator supplies verified account/location eligibility.",
    "profileFit": "Klaviyo fits maintained consent branches when account/location roles are integrated and checked; a marketing profile alone cannot confer account access.",
    "fixtures": [
      "A buyer moves from location A to B after an A-specific email is queued. Expect both A jobs held, no B entitlement inferred and administrator review; inspect role version, destination and queue dispositions.",
      "A location viewer clicks an offer while a purchasing administrator places the matching account order. Expect no privilege elevation or SMS enrollment and the competing episode closed after authorized order matching; inspect account/location keys and both channel exits."
    ]
  },
  "best-shopify-email-and-sms-marketing-apps-for-international-merchants": {
    "audience": "international merchants",
    "owner": "Regional lifecycle lead with localization and messaging owner",
    "question": "A destination-eligible localized promise",
    "workflow": "One requested regional offer starts an episode with email explaining destination-specific terms. SMS requires separate permission plus current recipient-region, number-type, sender-registration and content eligibility. Currency and locale are presentation preferences, not proof of residence or SMS eligibility. Confirm destination pricing and translated terms; hold mismatches and refresh purchase, support and permission exits per channel.",
    "fields": "recipient region, phone country, active number type, registration, currency, locale, localized offer version",
    "nativeFit": "Shopify Messaging fits reviewed regional campaigns where recipient-country eligibility and localized offer terms are confirmed; its paused destinations must remain excluded.",
    "profileFit": "Klaviyo fits country-aware consent branches when an active supported sender and maintained locale/currency bindings are verified; unsupported destinations stay held.",
    "fixtures": [
      "A euro-priced French email preference accompanies an Austrian phone destination. Expect independent country/number checks, no inferred SMS eligibility from currency or locale, and Shopify SMS held while Austria is paused; inspect destination and sender records.",
      "A recipient changes shipping region after a localized offer queues, then a purchase arrives in another currency. Expect stale terms held and authorized order reconciliation before either channel dispatch; inspect exchange-rate timestamp, localized terms and purchase exit rather than converting attribution into lift."
    ]
  },
  "best-shopify-email-and-sms-marketing-apps-for-new-shopify-stores": {
    "audience": "new Shopify stores",
    "owner": "Store owner with named backup approver",
    "question": "A manually approved first welcome episode",
    "workflow": "A documented email signup starts a small, manually reviewed welcome cohort. SMS is optional only for a separately requested reminder with a valid permission receipt and eligible active sender. Sparse permissions mean fewer eligible recipients, not permission to import checkout phones. The owner approves copy, deadline and both channel jobs; hold unknown purchase, support or consent state at each dispatch. Manual approval does not override channel withdrawal.",
    "fields": "signup disclosure, confirmation state, requested reminder, manual approver, approval version, deadline",
    "nativeFit": "Shopify Messaging fits an owner approving a bounded first campaign after plan, privacy and recipient eligibility checks.",
    "profileFit": "Klaviyo fits a first consent-branched flow when the owner can maintain it and keep actions under manual review until permission and exit checks pass.",
    "fixtures": [
      "A new store imports twelve checkout numbers with only two documented SMS reminder receipts. Expect eligibility assessed from each receipt, no bulk SMS approval and no claimed lift from sparse counts; inspect the held ten and owner review.",
      "The backup approves an email while the primary owner withdraws the offer and a support case opens before SMS dispatch. Expect version conflict held, refreshed exits for both channels and a reviewed cancellation, not an automatic fallback text; inspect approval versions and sender receipts."
    ]
  },
  "best-shopify-email-and-sms-marketing-apps-for-high-volume-stores": {
    "audience": "high-volume stores",
    "owner": "Lifecycle operations lead with dispatch and incident owners",
    "question": "One owned journey under concurrent dispatch",
    "workflow": "A single owned customer-purpose journey allocates its two total promotional slots across campaigns and channels. Require a demonstrated integration with atomic episode/slot claims and a shared cross-channel dispatch ledger before enabling concurrent senders; platform consent branches alone do not establish this control. Refresh channel permissions, matching purchases, subscription pauses and support exits at dispatch. Hold uncertain claims or timeouts, reconcile provider status and bind late acknowledgements to the original slot without reopening it.",
    "fields": "canonical identity, episode key, atomic claim token, channel slot ID, provider ID, ledger version, reconciliation owner",
    "nativeFit": "Shopify Messaging fits a bounded operations-reviewed campaign when external dispatch ownership and reconciliation are demonstrated; do not assume a native shared ledger.",
    "profileFit": "Klaviyo fits maintained email/SMS consent branches when the team demonstrates atomic claims and shared ledger integration across every sender; flow controls alone do not prove global suppression.",
    "fixtures": [
      "Email and SMS workers claim the last available slot concurrently while a campaign replays the source event. Expect exactly one atomic claim and all duplicate jobs held under the same episode; inspect claim tokens and the shared ledger across all three senders.",
      "An SMS provider times out, a matching purchase closes the episode, and a late acknowledgement arrives during migration. Expect original-slot reconciliation consuming its budget, both queues retired through demonstrated integration and no retry or reopened episode; inspect provider ID, purchase exit and migration dispositions."
    ]
  }
};
