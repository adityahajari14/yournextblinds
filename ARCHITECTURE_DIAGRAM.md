# Category-Based Customization System - Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         USER INTERACTION FLOW                            │
└─────────────────────────────────────────────────────────────────────────┘

1. User visits product page
   │
   ├─→ /product/[slug]
   │
   └─→ ProductPageRoute Component
       │
       ├─→ Fetches product from API
       │   │
       │   └─→ fetchProductBySlug(slug)
       │
       └─→ Transforms API data
           │
           └─→ transformProduct(apiProduct)
               │
               ├─→ Extracts category slug
               │   (e.g., "vertical-blinds")
               │
               ├─→ getCategoryCustomizations(categorySlug)
               │   │
               │   └─→ Returns ProductFeatures for category
               │
               └─→ Returns Product with category-specific features


┌─────────────────────────────────────────────────────────────────────────┐
│                      CATEGORY CUSTOMIZATION MAPPING                      │
└─────────────────────────────────────────────────────────────────────────┘

categoryCustomizations.ts
│
├─→ CATEGORY_CUSTOMIZATIONS
│   │
│   ├─→ "vertical-blinds": {
│   │     hasHeadrail: true,
│   │     hasOpenStyle: true,
│   │     hasWandPosition: true,
│   │     hasValance: true,
│   │     ...
│   │   }
│   │
│   ├─→ "roller-blinds": {
│   │     hasControl: true,
│   │     hasRollerStyle: true,
│   │     hasFabricType: true,
│   │     hasBottomBar: true,
│   │     ...
│   │   }
│   │
│   ├─→ "roman-blinds": {
│   │     hasLift: true,
│   │     hasFabricType: true,
│   │     ...
│   │   }
│   │
│   └─→ "default": { ... }
│
└─→ getCategoryCustomizations(slug)
    │
    ├─→ Exact match lookup
    ├─→ Partial match fallback
    └─→ Default fallback


┌─────────────────────────────────────────────────────────────────────────┐
│                    CUSTOMIZATION MODAL RENDERING                         │
└─────────────────────────────────────────────────────────────────────────┘

CustomizationModal Component
│
├─→ Receives product with features
│
└─→ Conditionally renders selectors:
    │
    ├─→ {product.features.hasSize && <SizeSelector />}
    ├─→ {product.features.hasMount && <MountSelector />}
    ├─→ {product.features.hasHeadrail && <HeadrailSelector />}
    ├─→ {product.features.hasOpenStyle && <OpenStyleSelector />}
    ├─→ {product.features.hasValance && <ValanceSelector />}
    ├─→ {product.features.hasControl && <ControlSelector />}
    ├─→ {product.features.hasRollerStyle && <RollerStyleSelector />}
    ├─→ {product.features.hasFabricType && <FabricTypeSelector />}
    ├─→ {product.features.hasBottomBar && <BottomBarSelector />}
    ├─→ {product.features.hasLift && <LiftSelector />}
    └─→ ... and more


┌─────────────────────────────────────────────────────────────────────────┐
│                         DATA FLOW EXAMPLE                                │
└─────────────────────────────────────────────────────────────────────────┘

Example: Vertical Blinds Product

1. API Response:
   {
     id: "123",
     slug: "textured-vinyl-vertical",
     title: "Textured Vinyl Vertical Blinds",
     categories: [
       { slug: "vertical-blinds", name: "Vertical Blinds" }
     ]
   }

2. Category Detection:
   categorySlug = "vertical-blinds"

3. Feature Lookup:
   getCategoryCustomizations("vertical-blinds")
   ↓
   Returns:
   {
     hasSize: true,
     hasHeadrail: true,
     hasOpenStyle: true,
     hasWandPosition: true,
     hasValance: true,
     hasBottomChain: true,
     hasBracketType: true,
     hasColour: true,
     hasRollerStyle: false,  ← Not shown for vertical blinds
     hasFabricType: false,   ← Not shown for vertical blinds
     hasBottomBar: false,    ← Not shown for vertical blinds
     ...
   }

4. Product Object:
   {
     id: "123",
     name: "Textured Vinyl Vertical Blinds",
     category: "Vertical Blinds",
     features: { ... vertical blind features ... }
   }

5. Modal Renders:
   ✓ Size Selector
   ✓ Mount Selector
   ✓ Headrail Selector
   ✓ Open Style Selector
   ✓ Wand Position Selector
   ✓ Valance Selector
   ✓ Bottom Chain Selector
   ✓ Bracket Type Selector
   ✓ Colour Selector
   ✗ Roller Style Selector (hidden)
   ✗ Fabric Type Selector (hidden)
   ✗ Bottom Bar Selector (hidden)


┌─────────────────────────────────────────────────────────────────────────┐
│                         FILE STRUCTURE                                   │
└─────────────────────────────────────────────────────────────────────────┘

src/
├── data/
│   ├── categoryCustomizations.ts  ← NEW: Category-to-features mapping
│   └── customizations.ts          ← Existing: Option definitions
│
├── lib/
│   └── api.ts                     ← MODIFIED: Uses getCategoryCustomizations
│
├── types/
│   └── index.ts                   ← Existing: ProductFeatures interface
│
└── components/
    └── product/
        ├── CustomizationModal.tsx ← Existing: Conditional rendering
        └── customization/         ← Existing: Selector components
            ├── SizeSelector.tsx
            ├── MountSelector.tsx
            ├── HeadrailSelector.tsx
            └── ...


┌─────────────────────────────────────────────────────────────────────────┐
│                    COMPARISON: BEFORE vs AFTER                           │
└─────────────────────────────────────────────────────────────────────────┘

BEFORE:
-------
All products → DEFAULT_PRODUCT_FEATURES → Same customizations for all

Problems:
- Roller blinds showed vertical blind options
- Vertical blinds showed roller blind options
- Confusing user experience
- Not scalable


AFTER:
------
Product → Category Slug → Category-Specific Features → Relevant customizations

Benefits:
✓ Each category has appropriate options
✓ Centralized configuration
✓ Easy to maintain and extend
✓ Professional user experience
✓ Scalable architecture
```
