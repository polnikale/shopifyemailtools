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
  }
};
