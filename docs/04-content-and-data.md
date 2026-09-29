# AVRÉN — Content & Static Data

## 1. Content Model

The website is static.

Do not build:
- CMS
- database
- admin
- login
- authentication
- API for products

Products should be represented by local static data so they are easy to edit later.

A conceptual product object:

```js
{
  id: 'product-01',
  name: 'Product Name',
  category: 'Category',
  collection: 'Collection Name',
  price: 'Rp xxx.xxx',
  image: '/images/products/product-01.webp',
  description: 'Short product description'
}
```

The exact implementation can use a Nuxt composable, local data file, or component data. Avoid unnecessary abstraction.

## 2. Product Content

Do not invent a large catalog before assets and actual product information are available.

Use placeholders only where necessary and make them easy to replace.

Recommended initial collection size:
- 4–8 products

This is enough to establish the visual system without creating unnecessary content.

## 3. Product Information Hierarchy

Priority:

1. Product image
2. Product name
3. Price
4. Collection/category
5. Short description, only when useful

Keep product copy short.

## 4. Brand Copy Direction

AVRÉN should sound:
- concise
- confident
- restrained
- contemporary
- premium

Avoid:
- excessive exclamation marks
- generic "best quality" claims
- aggressive sales copy
- long paragraphs

Directional phrases:
- Defined by Detail.
- Modern Essentials.
- Wear Your Presence.
- Made with Intention.
- Quiet Confidence.

These can be replaced with final approved brand copy.

## 5. Generated Images

When assets are not supplied, use Gemini through the Antigravity workflow to generate images consistent with the visual art direction.

Image prompts should maintain:
- consistent model identity where appropriate
- consistent lighting
- black/neutral environment
- editorial fashion photography
- premium composition
- sufficient negative space for typography
- realistic textile detail

Do not generate unrelated visual styles for different sections.
