import type { Product } from '@/types';
import type { CartItem } from '@/types';
import { products as placeholderProducts } from '@/data/products';

// TODO: Shopify Storefront API Configuration
// ──────────────────────────────────────────────────────────
// To connect to Shopify:
// 1. Set NEXT_PUBLIC_SHOPIFY_DOMAIN in .env.local
// 2. Set NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN in .env.local
// 3. Uncomment the shopifyFetch function below
// 4. Replace placeholder returns with actual API calls
// ──────────────────────────────────────────────────────────

const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

const isShopifyConfigured = Boolean(domain && token);

// TODO: Uncomment when Shopify is configured
// async function shopifyFetch<T>({ query, variables }: { query: string; variables?: Record<string, unknown> }): Promise<T> {
//   const response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Shopify-Storefront-Access-Token': token!,
//     },
//     body: JSON.stringify({ query, variables }),
//   });
//
//   const json = await response.json();
//   if (json.errors) {
//     throw new Error(json.errors[0].message);
//   }
//   return json.data;
// }

/**
 * Fetch all products.
 * TODO: Replace with Shopify Storefront API call using ALL_PRODUCTS_QUERY
 */
export async function getProducts(): Promise<Product[]> {
  if (isShopifyConfigured) {
    // TODO: return shopifyFetch({ query: ALL_PRODUCTS_QUERY }).then(mapShopifyProducts);
  }
  return placeholderProducts;
}

/**
 * Fetch a single product by slug.
 * TODO: Replace with Shopify Storefront API call using PRODUCT_BY_HANDLE_QUERY
 */
export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  if (isShopifyConfigured) {
    // TODO: return shopifyFetch({ query: PRODUCT_BY_HANDLE_QUERY, variables: { handle: slug } })
    //         .then(data => mapShopifyProduct(data.productByHandle));
  }
  return placeholderProducts.find((p) => p.slug === slug) ?? null;
}

/**
 * Get featured products.
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  const all = await getProducts();
  return all.filter((p) => p.featured);
}

/**
 * Create a Shopify checkout URL from cart items.
 * TODO: Replace with Shopify cart creation using CREATE_CART_MUTATION
 */
export async function createCheckoutUrl(
  _items: CartItem[]
): Promise<string> {
  if (isShopifyConfigured) {
    // TODO: Create Shopify cart and return checkoutUrl
    // const cart = await shopifyFetch({ query: CREATE_CART_MUTATION, variables: { lines: mapCartLines(items) } });
    // return cart.cartCreate.cart.checkoutUrl;
  }
  // Placeholder: return shop page
  return '/shop';
}
