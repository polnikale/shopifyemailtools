export function getBlogPaths() {
  const audiences = ['small Shopify stores','DTC brands','fashion stores','beauty stores','food and beverage stores','subscription brands','Shopify Plus merchants','international merchants','new Shopify stores','high-volume stores','B2B Shopify stores','wholesale merchants','home goods stores','pet brands','sports brands','health and wellness brands','electronics stores','apparel stores','gift stores','creator-led stores'];
  const goals = ['welcome email apps','abandoned cart apps','post-purchase email apps','win-back email apps','product launch email apps','back-in-stock email apps','review request apps','VIP customer email apps','replenishment email apps','email and SMS marketing apps'];
  return audiences.flatMap(audience => goals.map(goal => ({ params: { slug: `best-shopify-${goal}-for-${audience}`.toLowerCase().replace(/\s+/g, '-') }, props: { topic: { audience, goal } } }))).slice(0, 100);
}
