export type ShopifyApp = {
  slug: string;
  name: string;
  category: string;
  bestFor: string;
  pricing: string;
  priceDetail: string;
  rating: string;
  shopifyDepth: string;
  automationDepth: string;
  tagline: string;
  strengths: string[];
  limits: string[];
  features: string[];
  channels: string[];
  shopifyFit: string;
};

// Feature demonstrations are procurement questions, not verified plan entitlements.
export const APPS: ShopifyApp[] = [
  {
    "slug": "sequenzy",
    "name": "Sequenzy",
    "category": "Email automation",
    "bestFor": "Teams evaluating AI-assisted email workflows with Shopify data",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Email automation with a supplier-described Shopify connection.",
    "strengths": [
      "AI-assisted campaign and sequence creation",
      "API and webhook access",
      "Marketing and transactional email"
    ],
    "limits": [
      "Validate required Shopify events before migration",
      "Confirm channel coverage and consent handling for your store",
      "Supplier documentation is not evidence of merchant results"
    ],
    "features": [
      "Customer, order, and product sync",
      "Abandoned-cart flows",
      "Post-purchase flows",
      "Winback flows"
    ],
    "channels": [
      "email",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Sequenzy describes Shopify customer, order, and product sync and cart, post-purchase, and winback workflows. Test event delivery, suppression after purchase, and attribution in your own store before replacing an existing lifecycle setup."
  },
  {
    "slug": "klaviyo",
    "name": "Klaviyo",
    "category": "Email & SMS automation",
    "bestFor": "Teams evaluating catalog and behavior-based journeys",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Catalog and behavior-based journeys.",
    "strengths": [
      "Evaluation focus: catalog and behavior-based journeys",
      "Proposed acceptance case: Inspect product and variant identifiers on an identified browse event; check predictive metric eligibility and missing-data branches before using a prediction."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Shopify sync",
      "Demonstrate: Predictive CLV",
      "Demonstrate: Flow A/B testing",
      "Demonstrate: Dynamic product blocks",
      "Demonstrate: RFM segmentation",
      "Demonstrate: SMS + email journeys",
      "Demonstrate: Benchmark reporting",
      "Demonstrate: Reviews integration"
    ],
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Inspect product and variant identifiers on an identified browse event; check predictive metric eligibility and missing-data branches before using a prediction. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "omnisend",
    "name": "Omnisend",
    "category": "Email, SMS & push",
    "bestFor": "Teams evaluating coordinated channel workflows",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Coordinated channel workflows.",
    "strengths": [
      "Evaluation focus: coordinated channel workflows",
      "Proposed acceptance case: Demonstrate welcome and cart branches with channel-specific permission, an SMS opt-out and a purchase while both messages are queued."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Prebuilt automations",
      "Demonstrate: Product picker blocks",
      "Demonstrate: SMS workflows",
      "Demonstrate: Push notifications",
      "Demonstrate: Audience sync",
      "Demonstrate: Gamified signup forms",
      "Demonstrate: Campaign presets",
      "Demonstrate: Revenue per message"
    ],
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Demonstrate welcome and cart branches with channel-specific permission, an SMS opt-out and a purchase while both messages are queued. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "shopify-email",
    "name": "Shopify Messaging (formerly Shopify Email)",
    "category": "Shopify marketing campaigns and automations",
    "bestFor": "Merchants wanting campaigns and automations inside Shopify",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Email allowances and volume tiers differ from SMS and WhatsApp charges; check eligibility",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Campaigns, customer segments, and marketing automations within Shopify.",
    "strengths": [
      "Shopify catalog content in campaigns",
      "Customer segments",
      "Marketing automation templates"
    ],
    "limits": [
      "Check channel and regional availability",
      "Validate required triggers and automation customization",
      "Coordinate marketing automations with existing store notifications"
    ],
    "features": [
      "Product email blocks",
      "Customer segments",
      "Welcome automations",
      "Abandoned checkout automations",
      "Email, SMS, and WhatsApp marketing automations"
    ],
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Shopify Messaging includes campaigns and marketing automations, rather than newsletters alone. Check the supported template, channel, customer eligibility, and stop conditions for each workflow before adding a separate sender."
  },
  {
    "slug": "yotpo-email-sms",
    "name": "Yotpo Email & SMS",
    "category": "Discontinued product",
    "bestFor": "Existing users checking migration history",
    "pricing": "Not available for new adoption",
    "priceDetail": "Check replacement supplier pricing and migration costs",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Historical listing: Yotpo has decommissioned its Email and SMS products.",
    "strengths": [
      "Historical context for migration planning"
    ],
    "limits": [
      "Email and SMS products are decommissioned",
      "Not a current sending option",
      "Yotpo reviews and loyalty are separate products"
    ],
    "features": [
      "Migration planning"
    ],
    "channels": [],
    "shopifyFit": "Yotpo announced full Email and SMS deprecation for December 31, 2025 and now marks the product decommissioned. Preserve consent records, suppression lists, and workflow logic when moving to a supported sender. This route is retained for historical context."
  },
  {
    "slug": "privy",
    "name": "Privy",
    "category": "Popups, email & SMS",
    "bestFor": "Teams evaluating capture-to-welcome handoff",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Capture-to-welcome handoff.",
    "strengths": [
      "Evaluation focus: capture-to-welcome handoff",
      "Proposed acceptance case: Submit a popup twice with different preferences; inspect consent fields, coupon eligibility and the receiving sender before enabling welcome."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Exit-intent popups",
      "Demonstrate: Spin wheels",
      "Demonstrate: Cart saver bars",
      "Demonstrate: automations",
      "Demonstrate: SMS opt-in",
      "Demonstrate: Coupon delivery",
      "Demonstrate: A/B popup tests"
    ],
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Submit a popup twice with different preferences; inspect consent fields, coupon eligibility and the receiving sender before enabling welcome. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "drip",
    "name": "Drip",
    "category": "Ecommerce automation",
    "bestFor": "Teams evaluating behavior-based workflow design",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Behavior-based workflow design.",
    "strengths": [
      "Evaluation focus: behavior-based workflow design",
      "Proposed acceptance case: Map a product event to a visual branch; replay the event and place a purchase before dispatch to inspect deduplication and exits."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Visual automation builder",
      "Demonstrate: Tag and event triggers",
      "Demonstrate: Revenue dashboards",
      "Demonstrate: A/B workflow splits",
      "Demonstrate: Custom fields",
      "Demonstrate: Shopify product triggers",
      "Demonstrate: Lead scoring"
    ],
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Map a product event to a visual branch; replay the event and place a purchase before dispatch to inspect deduplication and exits. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "postscript",
    "name": "Postscript",
    "category": "SMS marketing",
    "bestFor": "Teams evaluating mobile-message evaluation",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Mobile-message evaluation.",
    "strengths": [
      "Evaluation focus: mobile-message evaluation",
      "Proposed acceptance case: Demonstrate an opted-in cart reminder, reply handling, opt-out propagation and cancellation after an email-driven purchase."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: TCPA compliance tools",
      "Demonstrate: Keyword opt-in",
      "Demonstrate: Cart abandonment SMS",
      "Demonstrate: Segmented broadcasts",
      "Demonstrate: Reply handling",
      "Demonstrate: Revenue tracking",
      "Demonstrate: Shopify event triggers"
    ],
    "channels": [
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Demonstrate an opted-in cart reminder, reply handling, opt-out propagation and cancellation after an email-driven purchase. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "attentive",
    "name": "Attentive",
    "category": "SMS & email marketing",
    "bestFor": "Teams evaluating channel acquisition and journey evaluation",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Channel acquisition and journey evaluation.",
    "strengths": [
      "Evaluation focus: channel acquisition and journey evaluation",
      "Proposed acceptance case: Use your traffic and message volume in a scoped quote; demonstrate opt-in capture, channel eligibility and suppression across the proposed journeys."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Two-tap mobile opt-in",
      "Demonstrate: Journey orchestration",
      "Demonstrate: AI send-time optimization",
      "Demonstrate: Concierge onboarding",
      "Demonstrate: Creative services",
      "Demonstrate: Cross-channel journeys"
    ],
    "channels": [
      "sms",
      "email",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Use your traffic and message volume in a scoped quote; demonstrate opt-in capture, channel eligibility and suppression across the proposed journeys. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "mailchimp",
    "name": "Mailchimp",
    "category": "General email marketing",
    "bestFor": "Teams evaluating existing audience and campaign continuity",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Existing audience and campaign continuity.",
    "strengths": [
      "Evaluation focus: existing audience and campaign continuity",
      "Proposed acceptance case: Connect a staff Shopify profile and reproduce the required welcome branch; compare event fields and unsubscribe exports with your current setup."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Drag-drop editor",
      "Demonstrate: automations",
      "Demonstrate: Shopify product sync",
      "Demonstrate: Audience dashboard",
      "Demonstrate: Social posting",
      "Demonstrate: Landing pages",
      "Demonstrate: Surveys"
    ],
    "channels": [
      "email",
      "marketing"
    ],
    "shopifyFit": "Connect a staff Shopify profile and reproduce the required welcome branch; compare event fields and unsubscribe exports with your current setup. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "activecampaign",
    "name": "ActiveCampaign",
    "category": "Marketing automation & CRM",
    "bestFor": "Teams evaluating crm and store handoffs",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "CRM and store handoffs.",
    "strengths": [
      "Evaluation focus: crm and store handoffs",
      "Proposed acceptance case: Route a wholesale reorder signal to a sales owner; check duplicate deals, ordinary retail exclusions and the boundary between rep and automated messages."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: CRM pipelines",
      "Demonstrate: Conditional automations",
      "Demonstrate: Lead scoring",
      "Demonstrate: Site tracking",
      "Demonstrate: Split testing",
      "Demonstrate: Shopify deep data sync",
      "Demonstrate: Sales automations"
    ],
    "channels": [
      "email",
      "marketing"
    ],
    "shopifyFit": "Route a wholesale reorder signal to a sales owner; check duplicate deals, ordinary retail exclusions and the boundary between rep and automated messages. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "brevo",
    "name": "Brevo",
    "category": "Email, SMS & transactional",
    "bestFor": "Teams evaluating campaign and service-message boundaries",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Campaign and service-message boundaries.",
    "strengths": [
      "Evaluation focus: campaign and service-message boundaries",
      "Proposed acceptance case: Quote normal and peak sending months; demonstrate a campaign separately from a service notice and inspect authentication and permission handling for each."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Marketing automation",
      "Demonstrate: Transactional email",
      "Demonstrate: SMS campaigns",
      "Demonstrate: Contact scoring",
      "Demonstrate: Landing pages",
      "Demonstrate: Shopify integration",
      "Demonstrate: WhatsApp (select markets)"
    ],
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "shopifyFit": "Quote normal and peak sending months; demonstrate a campaign separately from a service notice and inspect authentication and permission handling for each. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "sendlane",
    "name": "Sendlane",
    "category": "Email & SMS for ecommerce",
    "bestFor": "Teams evaluating retention migration and operating support",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Retention migration and operating support.",
    "strengths": [
      "Evaluation focus: retention migration and operating support",
      "Proposed acceptance case: Request a written migration scope, named owner and rollback criteria; reproduce cart and replenishment exits before switching sender ownership."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Multi-channel journeys",
      "Demonstrate: Custom audiences",
      "Demonstrate: Revenue attribution",
      "Demonstrate: SMS automations",
      "Demonstrate: Onboarding support",
      "Demonstrate: Deliverability tools",
      "Demonstrate: A/B testing"
    ],
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Request a written migration scope, named owner and rollback criteria; reproduce cart and replenishment exits before switching sender ownership. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "aftership-email",
    "name": "AfterShip Email",
    "category": "Email & SMS marketing",
    "bestFor": "Teams evaluating campaign scope versus tracking products",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Campaign scope versus tracking products.",
    "strengths": [
      "Evaluation focus: campaign scope versus tracking products",
      "Proposed acceptance case: Demonstrate a campaign and a delivery-dependent branch; identify which AfterShip product supplies each event and its separate charges."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Shipping-triggered emails",
      "Demonstrate: Delivery notifications",
      "Demonstrate: Review requests post-delivery",
      "Demonstrate: SMS updates",
      "Demonstrate: Returns messaging",
      "Demonstrate: Tracking page integration"
    ],
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "shopifyFit": "Demonstrate a campaign and a delivery-dependent branch; identify which AfterShip product supplies each event and its separate charges. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "recart",
    "name": "Recart",
    "category": "Mobile cart-recovery evaluation",
    "bestFor": "Teams evaluating mobile cart-recovery evaluation",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Mobile cart-recovery evaluation.",
    "strengths": [
      "Evaluation focus: mobile cart-recovery evaluation",
      "Proposed acceptance case: Demonstrate an opted-in recovery message with a valid cart link, purchase cancellation and an email suppression policy; confirm currently supported channels."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Abandoned cart SMS",
      "Demonstrate: Messenger recovery",
      "Demonstrate: Browse abandonment",
      "Demonstrate: Discount automation",
      "Demonstrate: Subscriber growth tools",
      "Demonstrate: Revenue reporting"
    ],
    "channels": [
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Demonstrate an opted-in recovery message with a valid cart link, purchase cancellation and an email suppression policy; confirm currently supported channels. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "justuno",
    "name": "Justuno",
    "category": "Conversion & list capture",
    "bestFor": "Teams evaluating onsite capture and downstream data",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Onsite capture and downstream data.",
    "strengths": [
      "Evaluation focus: onsite capture and downstream data",
      "Proposed acceptance case: Submit a targeted form or quiz; inspect preference mapping, duplicate submissions and withdrawal at the receiving sender rather than assuming capture authorizes every channel."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: popups",
      "Demonstrate: Product quizzes",
      "Demonstrate: Gamification",
      "Demonstrate: AI recommendations",
      "Demonstrate: A/B testing",
      "Demonstrate: Segmentation by behavior",
      "Demonstrate: Shopify sync"
    ],
    "channels": [
      "marketing"
    ],
    "shopifyFit": "Submit a targeted form or quiz; inspect preference mapping, duplicate submissions and withdrawal at the receiving sender rather than assuming capture authorizes every channel. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "rejoiner",
    "name": "Rejoiner",
    "category": "Managed email & SMS lifecycle",
    "bestFor": "Teams evaluating managed lifecycle delivery",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Managed lifecycle delivery.",
    "strengths": [
      "Evaluation focus: managed lifecycle delivery",
      "Proposed acceptance case: Ask for a scoped flow audit with approval ownership, creative revisions, export rights and service fees; demonstrate the proposed cart exit before launch."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Managed automations",
      "Demonstrate: Creative services",
      "Demonstrate: Strategy consulting",
      "Demonstrate: Cart recovery specialization",
      "Demonstrate: Revenue reporting",
      "Demonstrate: A/B testing support"
    ],
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ],
    "shopifyFit": "Ask for a scoped flow audit with approval ownership, creative revisions, export rights and service fees; demonstrate the proposed cart exit before launch. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "marsello",
    "name": "Marsello",
    "category": "Email, SMS & loyalty",
    "bestFor": "Teams evaluating pos and loyalty state handoffs",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "POS and loyalty state handoffs.",
    "strengths": [
      "Evaluation focus: pos and loyalty state handoffs",
      "Proposed acceptance case: Reconcile a POS and online profile, then demonstrate a tier change, returned order and points-expiry message without duplicating promotional sends."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Loyalty program",
      "Demonstrate: Email campaigns",
      "Demonstrate: SMS marketing",
      "Demonstrate: POS sync",
      "Demonstrate: Referral programs",
      "Demonstrate: Segment by loyalty tier",
      "Demonstrate: Review prompts"
    ],
    "channels": [
      "email",
      "sms",
      "marketing"
    ],
    "shopifyFit": "Reconcile a POS and online profile, then demonstrate a tier change, returned order and points-expiry message without duplicating promotional sends. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "firepush",
    "name": "Firepush",
    "category": "Push and mobile messaging evaluation",
    "bestFor": "Teams evaluating push and mobile notification evaluation",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Push and mobile notification evaluation.",
    "strengths": [
      "Evaluation focus: push and mobile notification evaluation",
      "Proposed acceptance case: Confirm current channels first; demonstrate a variant restock with opt-out and a second stockout before dispatch. Do not assume email is included."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: Web push notifications",
      "Demonstrate: SMS automations",
      "Demonstrate: Email campaigns",
      "Demonstrate: Abandoned cart flows",
      "Demonstrate: Price drop alerts",
      "Demonstrate: Back-in-stock push"
    ],
    "channels": [
      "sms",
      "marketing"
    ],
    "shopifyFit": "Confirm current channels first; demonstrate a variant restock with opt-out and a second stockout before dispatch. Do not assume email is included. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  },
  {
    "slug": "smsbump",
    "name": "SMSBump (Yotpo SMS)",
    "category": "Discontinued product",
    "bestFor": "Existing users checking migration history",
    "pricing": "Not available for new adoption",
    "priceDetail": "Check replacement supplier pricing and migration costs",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Historical listing: Yotpo has decommissioned its Email and SMS products.",
    "strengths": [
      "Historical context for migration planning"
    ],
    "limits": [
      "Email and SMS products are decommissioned",
      "Not a current sending option",
      "Yotpo reviews and loyalty are separate products"
    ],
    "features": [
      "Migration planning"
    ],
    "channels": [],
    "shopifyFit": "Yotpo announced full Email and SMS deprecation for December 31, 2025 and now marks the product decommissioned. Preserve consent records, suppression lists, and workflow logic when moving to a supported sender. This route is retained for historical context."
  },
  {
    "slug": "tinyemail",
    "name": "tinyEmail",
    "category": "AI-assisted email marketing",
    "bestFor": "Teams evaluating campaign drafting and product content",
    "pricing": "Check current supplier pricing",
    "priceDetail": "Compare contacts, sends, channel charges, required features, and services",
    "rating": "Not independently rated",
    "shopifyDepth": "Verify required events",
    "automationDepth": "Verify required controls",
    "tagline": "Campaign drafting and product content.",
    "strengths": [
      "Evaluation focus: campaign drafting and product content",
      "Proposed acceptance case: Draft a product campaign, verify variant links and image-off rendering, then request a demonstration of any required automation instead of assuming a future upgrade is needed."
    ],
    "limits": [
      "Confirm current plan, integration and channel availability with the supplier",
      "No comparative speed, cost or revenue advantage is established by this profile"
    ],
    "features": [
      "Demonstrate: AI copy generation",
      "Demonstrate: Product email blocks",
      "Demonstrate: automations",
      "Demonstrate: Template library",
      "Demonstrate: Shopify sync",
      "Demonstrate: Campaign scheduling"
    ],
    "channels": [
      "email",
      "marketing"
    ],
    "shopifyFit": "Draft a product campaign, verify variant links and image-off rendering, then request a demonstration of any required automation instead of assuming a future upgrade is needed. Record the event payload, operator steps and unresolved requirements; this is a proposed evaluation, not a performed merchant test."
  }
];

export function appBySlug(slug: string) {
  return APPS.find((a) => a.slug === slug);
}

export function channelApps(channel: string) {
  return APPS.filter((app) => app.channels.includes(channel) || app.channels.includes('marketing'));
}

export function comparisonPairs() {
  const pairs: [ShopifyApp, ShopifyApp][] = [];
  const emailApps = channelApps('email');
  for (let i = 0; i < emailApps.length; i++) {
    for (let j = i + 1; j < Math.min(emailApps.length, i + 7); j++) {
      pairs.push([emailApps[i], emailApps[j]]);
    }
  }
  return pairs.slice(0, 70);
}
