# Category-Based Customization System

## Overview
This document explains the category-based customization system implemented for the YourNextBlinds e-commerce platform. The system allows different product categories to have different customization options available to customers.

## Problem Statement
Previously, all products had the same customization options defined by `DEFAULT_PRODUCT_FEATURES`. This meant that:
- Roller blinds had the same options as vertical blinds
- Irrelevant customization options were shown to users
- The system was inflexible and not scalable

## Solution
We implemented a category-based customization system where:
- Each category has its own set of customization options
- Customization options are automatically assigned based on product category
- The system is centralized and easy to maintain

## Architecture

### 1. Category Customization Configuration
**File**: `src/data/categoryCustomizations.ts`

This file contains:
- `CATEGORY_CUSTOMIZATIONS`: A mapping of category slugs to their available features
- `getCategoryCustomizations()`: Function to retrieve features for a specific category
- `getAllCategoryCustomizations()`: Function to get all category configurations

#### Example Configuration:
```typescript
'vertical-blinds': {
  hasSize: true,
  hasRoom: true,
  hasMount: true,
  hasHeadrail: true,
  hasOpenStyle: true,
  hasWandPosition: true,
  hasValance: true,
  hasBottomChain: true,
  hasBracketType: true,
  hasControl: false,
  hasColour: true,
  hasRollerStyle: false,
  hasFabricType: false,
  hasBottomBar: false,
  hasLift: false,
}
```

### 2. Product Transformation
**File**: `src/lib/api.ts`

The `transformProduct()` function now:
1. Extracts the category slug from the API product data
2. Calls `getCategoryCustomizations(categorySlug)` to get the appropriate features
3. Assigns these features to the product

```typescript
export function transformProduct(apiProduct: ApiProduct): Product {
  const categorySlug = apiProduct.categories[0]?.slug || 'default';
  const features = getCategoryCustomizations(categorySlug);
  
  return {
    // ... other properties
    features: features,
  };
}
```

### 3. Customization Modal
**File**: `src/components/product/CustomizationModal.tsx`

The modal automatically shows/hides customization options based on the product's features:
- If `product.features.hasHeadrail` is true, the headrail selector is shown
- If `product.features.hasRollerStyle` is true, the roller style selector is shown
- And so on for all customization options

## Supported Categories

The system currently supports the following categories:

1. **Vertical Blinds** (`vertical-blinds`)
   - Headrail, Open Style, Wand Position, Valance, Bottom Chain, Bracket Type

2. **Roller Blinds** (`roller-blinds`)
   - Control, Roller Style, Fabric Type, Bottom Bar, Valance, Bracket Type

3. **Roman Blinds** (`roman-blinds`)
   - Lift, Fabric Type, Bracket Type

4. **Venetian Blinds** (`venetian-blinds`)
   - Headrail, Lift, Bracket Type

5. **Cellular/Honeycomb Blinds** (`cellular-blinds`)
   - Headrail, Lift, Bracket Type

6. **Pleated Blinds** (`pleated-blinds`)
   - Lift, Bracket Type

7. **Panel Track Blinds** (`panel-track-blinds`)
   - Headrail, Fabric Type, Bracket Type

8. **Sheer Shades** (`sheer-shades`)
   - Valance, Lift, Bracket Type

9. **Zebra/Day & Night Blinds** (`zebra-blinds`)
   - Control, Bottom Bar, Valance, Bracket Type

10. **Default** (`default`)
    - Basic options for uncategorized products

## Common Customizations

All categories include these base customizations:
- **Size**: Width and height input (hasSize)
- **Room**: Room selection (hasRoom)
- **Mount**: Inside/Outside mount (hasMount)
- **Colour**: Color selection (hasColour)

## How to Add a New Category

1. Open `src/data/categoryCustomizations.ts`
2. Add a new entry to `CATEGORY_CUSTOMIZATIONS`:

```typescript
'new-category-slug': {
  hasSize: true,
  hasRoom: true,
  hasMount: true,
  hasHeadrail: false,
  hasOpenStyle: false,
  hasWandPosition: false,
  hasValance: false,
  hasBottomChain: false,
  hasBracketType: false,
  hasControl: false,
  hasColour: true,
  hasRollerStyle: false,
  hasFabricType: false,
  hasBottomBar: false,
  hasLift: false,
}
```

3. Set each feature to `true` or `false` based on what customizations should be available

## How to Add a New Customization Option

1. **Update Types** (`src/types/index.ts`):
   ```typescript
   export interface ProductFeatures {
     // ... existing features
     hasNewFeature: boolean; // Add new feature
   }
   ```

2. **Update Configuration** (`src/data/categoryCustomizations.ts`):
   - Add `hasNewFeature: true/false` to each category

3. **Create Selector Component** (`src/components/product/customization/`):
   - Create a new selector component (e.g., `NewFeatureSelector.tsx`)

4. **Add to Customization Modal** (`src/components/product/CustomizationModal.tsx`):
   ```tsx
   {product.features.hasNewFeature && (
     <div className="pt-6">
       <NewFeatureSelector
         options={NEW_FEATURE_OPTIONS}
         selectedValue={config.newFeature}
         onValueChange={(value) => setConfig({ ...config, newFeature: value })}
       />
     </div>
   )}
   ```

5. **Update Configuration Type** (`src/types/index.ts`):
   ```typescript
   export interface ProductConfiguration {
     // ... existing config
     newFeature: string | null;
   }
   ```

## Benefits

1. **Flexibility**: Each category can have unique customization options
2. **Maintainability**: All configurations in one centralized file
3. **Scalability**: Easy to add new categories or customization options
4. **User Experience**: Customers only see relevant options for their product
5. **Professional**: Clean, organized code structure

## Testing

To test the implementation:

1. **Navigate to different product categories**:
   - Go to `/collections/vertical-blinds` and select a product
   - Click "Customize and Buy"
   - Verify that vertical blind-specific options appear

2. **Compare different categories**:
   - Test a roller blind product
   - Test a roman blind product
   - Verify that each shows different customization options

3. **Check fallback behavior**:
   - Test a product with no category
   - Verify it uses the default customization set

## Future Enhancements

Potential improvements to consider:

1. **Database Integration**: Store category customizations in the database instead of code
2. **Admin Panel**: Create an admin interface to manage category customizations
3. **Product-Level Overrides**: Allow specific products to override category defaults
4. **Conditional Options**: Show/hide options based on other selections
5. **Dynamic Pricing**: Adjust prices based on category-specific rules

## Technical Notes

- The system uses TypeScript for type safety
- Category slug matching is case-insensitive and supports partial matching
- If no category is found, the system falls back to 'default' configuration
- All customization options are defined in `src/data/customizations.ts`

## Support

For questions or issues with the category-based customization system, please refer to:
- This documentation
- Code comments in `src/data/categoryCustomizations.ts`
- Type definitions in `src/types/index.ts`
