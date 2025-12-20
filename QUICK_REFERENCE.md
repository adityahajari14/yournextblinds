# Quick Reference Guide - Category Customizations

## For Developers

### Quick Start

**To add a new blind category:**
1. Open `src/data/categoryCustomizations.ts`
2. Add entry to `CATEGORY_CUSTOMIZATIONS`
3. Set features to `true`/`false`

**To add a new customization option:**
1. Update `ProductFeatures` in `src/types/index.ts`
2. Add to all categories in `categoryCustomizations.ts`
3. Create selector component
4. Add to `CustomizationModal.tsx`
5. Update `ProductConfiguration` type

---

## Category Feature Matrix

| Category | Headrail | Open Style | Wand Pos | Valance | Control | Roller | Fabric | Bottom Bar | Lift |
|----------|----------|------------|----------|---------|---------|--------|--------|------------|------|
| Vertical Blinds | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Roller Blinds | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ |
| Roman Blinds | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ |
| Venetian Blinds | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ |
| Cellular Blinds | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ |
| Pleated Blinds | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ |
| Panel Track | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ |
| Sheer Shades | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ |
| Zebra Blinds | ✗ | ✗ | ✗ | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ |

*Note: All categories have Size, Room, Mount, Colour, Bottom Chain, and Bracket Type*

---

## Common Tasks

### Task 1: Change which options appear for a category

```typescript
// File: src/data/categoryCustomizations.ts

'vertical-blinds': {
  hasSize: true,
  hasHeadrail: true,    // Change to false to hide
  hasOpenStyle: true,   // Change to false to hide
  // ... other options
}
```

### Task 2: Add a new category

```typescript
// File: src/data/categoryCustomizations.ts

export const CATEGORY_CUSTOMIZATIONS: Record<string, ProductFeatures> = {
  // ... existing categories
  
  'new-category-slug': {
    hasSize: true,
    hasRoom: true,
    hasMount: true,
    hasHeadrail: false,
    hasOpenStyle: false,
    hasWandPosition: false,
    hasValance: false,
    hasBottomChain: true,
    hasBracketType: true,
    hasControl: false,
    hasColour: true,
    hasRollerStyle: false,
    hasFabricType: false,
    hasBottomBar: false,
    hasLift: false,
  },
};
```

### Task 3: Debug which features are being used

```typescript
// Add this to transformProduct() in src/lib/api.ts
const features = getCategoryCustomizations(categorySlug);
console.log(`Category: ${categorySlug}`, features);
```

### Task 4: Test a specific category

1. Navigate to: `/collections/[category-slug]`
2. Click on any product
3. Click "Customize and Buy"
4. Verify correct options appear

---

## File Locations

| Purpose | File Path |
|---------|-----------|
| Category mappings | `src/data/categoryCustomizations.ts` |
| Product transformation | `src/lib/api.ts` |
| Type definitions | `src/types/index.ts` |
| Customization modal | `src/components/product/CustomizationModal.tsx` |
| Option definitions | `src/data/customizations.ts` |
| Selector components | `src/components/product/customization/` |

---

## Key Functions

### `getCategoryCustomizations(categorySlug: string)`
**Location**: `src/data/categoryCustomizations.ts`
**Purpose**: Get features for a category
**Returns**: `ProductFeatures` object

```typescript
const features = getCategoryCustomizations('vertical-blinds');
// Returns: { hasSize: true, hasHeadrail: true, ... }
```

### `transformProduct(apiProduct: ApiProduct)`
**Location**: `src/lib/api.ts`
**Purpose**: Convert API data to frontend Product type
**Uses**: `getCategoryCustomizations()` to set features

```typescript
const product = transformProduct(apiProduct);
// product.features will be category-specific
```

---

## Troubleshooting

### Problem: Wrong options showing for a category
**Solution**: Check category slug matches in `CATEGORY_CUSTOMIZATIONS`

### Problem: No options showing
**Solution**: Verify category exists in database and has correct slug

### Problem: TypeScript errors
**Solution**: Ensure all new features are added to `ProductFeatures` interface

### Problem: Options not hiding
**Solution**: Check `CustomizationModal.tsx` has conditional rendering for the feature

---

## Best Practices

1. **Always use lowercase slugs** with hyphens (e.g., `vertical-blinds`)
2. **Test both desktop and mobile** views when adding options
3. **Keep the default category** updated with basic options
4. **Document custom categories** in this file
5. **Use descriptive feature names** (e.g., `hasHeadrail` not `hasOption1`)

---

## Example: Complete Flow

```typescript
// 1. Database has product with category
{
  slug: "textured-vinyl",
  categories: [{ slug: "vertical-blinds" }]
}

// 2. API returns product data
const apiProduct = await fetchProductBySlug("textured-vinyl");

// 3. Transform applies category features
const product = transformProduct(apiProduct);
// product.features = { hasHeadrail: true, hasOpenStyle: true, ... }

// 4. Modal renders based on features
{product.features.hasHeadrail && <HeadrailSelector />}  // ✓ Shows
{product.features.hasRollerStyle && <RollerStyleSelector />}  // ✗ Hidden
```

---

## Quick Commands

```bash
# Start dev server
npm run dev

# Check TypeScript errors
npx tsc --noEmit

# View all categories
# Navigate to: http://localhost:3000/collections
```

---

## Support

- **Documentation**: See `CATEGORY_CUSTOMIZATIONS.md`
- **Architecture**: See `ARCHITECTURE_DIAGRAM.md`
- **Code Comments**: Check `categoryCustomizations.ts`
