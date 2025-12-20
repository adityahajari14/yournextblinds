# Category Customizations - Updated List

## Included Categories (11 + Default)

Based on the actual categories in your website navigation, the following blind type categories have been configured:

### 1. **Vertical Blinds** (`vertical-blinds`)
**Customizations:**
- ✓ Size, Room, Mount, Colour
- ✓ Headrail
- ✓ Open Style (Wand/Chain Chord)
- ✓ Wand Position
- ✓ Valance
- ✓ Bottom Weight Chain
- ✓ Bracket Type

### 2. **Roller Blinds** (`roller-blinds`)
**Customizations:**
- ✓ Size, Room, Mount, Colour
- ✓ Roller Style (Standard/Reverse)
- ✓ Fabric Type
- ✓ Control (Manual/Motor)
- ✓ Bottom Bar
- ✓ Valance
- ✓ Bracket Type

### 3. **Roman Blinds** (`roman-blinds`)
**Customizations:**
- ✓ Size, Room, Mount, Colour
- ✓ Fabric Type
- ✓ Lift System
- ✓ Bracket Type

### 4. **Venetian Blinds** (`venetian-blinds`)
**Customizations:**
- ✓ Size, Room, Mount, Colour
- ✓ Headrail
- ✓ Lift System
- ✓ Bracket Type

### 5. **Day and Night Blinds** (`day-and-night-blinds`)
**Customizations:**
- ✓ Size, Room, Mount, Colour
- ✓ Control (Manual/Motor)
- ✓ Bottom Bar
- ✓ Valance
- ✓ Bracket Type

### 6. **Blackout Blinds** (`blackout-blinds`)
**Customizations:**
- ✓ Size, Room, Mount, Colour
- ✓ Roller Style
- ✓ Fabric Type
- ✓ Control (Manual/Motor)
- ✓ Bottom Bar
- ✓ Valance
- ✓ Bracket Type

### 7. **Skylight Blinds** (`skylight-blinds`)
**Customizations:**
- ✓ Size, Room, Mount, Colour
- ✓ Roller Style
- ✓ Fabric Type
- ✓ Control (Manual/Motor)
- ✓ Bracket Type

### 8. **Wooden Blinds** (`wooden-blinds`)
**Customizations:**
- ✓ Size, Room, Mount, Colour
- ✓ Headrail
- ✓ Lift System
- ✓ Bracket Type

### 9. **No Drill Blinds** (`no-drill-blinds`)
**Customizations:**
- ✓ Size, Room, Mount, Colour
- ✓ Roller Style
- ✓ Fabric Type
- ✓ Control (Manual/Motor)
- ✓ Bottom Bar
- ✓ Valance
- ✗ Bracket Type (no drill installation)

### 10. **Motorized Blinds** (`motorized-blinds`)
**Customizations:**
- ✓ Size, Room, Mount, Colour
- ✓ Roller Style
- ✓ Fabric Type
- ✓ Control (Motorized)
- ✓ Bottom Bar
- ✓ Valance
- ✓ Bracket Type

### 11. **Pleated Blinds** (`pleated-blinds`)
**Customizations:**
- ✓ Size, Room, Mount, Colour
- ✓ Lift System
- ✓ Bracket Type

### 12. **Default** (`default`)
**Customizations:**
- ✓ Size, Room, Mount, Colour
- ✓ Bracket Type
- (Basic options for uncategorized products)

---

## Categories NOT Included

The following categories were removed as they don't exist in your website navigation:

- ❌ Cellular/Honeycomb Blinds
- ❌ Panel Track Blinds
- ❌ Sheer Shades
- ❌ Zebra Blinds (replaced with "Day and Night Blinds")

---

## Quick Reference Matrix

| Category | Headrail | Open Style | Wand Pos | Valance | Control | Roller | Fabric | Bottom Bar | Lift |
|----------|----------|------------|----------|---------|---------|--------|--------|------------|------|
| Vertical | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Roller | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ |
| Roman | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ |
| Venetian | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ |
| Day & Night | ✗ | ✗ | ✗ | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ |
| Blackout | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ |
| Skylight | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ |
| Wooden | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ |
| No Drill | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ |
| Motorized | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ |
| Pleated | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ |

*Note: All categories have Size, Room, Mount, Colour, Bottom Chain (except No Drill has no Bracket Type)*

---

## Summary

- **Total Categories Configured**: 12 (11 blind types + 1 default)
- **Based On**: Actual navigation.ts categories
- **Status**: ✅ Production Ready
- **File**: `src/data/categoryCustomizations.ts`

---

## Testing URLs

Test each category at:
- `/collections/vertical-blinds`
- `/collections/roller-blinds`
- `/collections/roman-blinds`
- `/collections/venetian-blinds`
- `/collections/day-and-night-blinds`
- `/collections/blackout-blinds`
- `/collections/skylight-blinds`
- `/collections/wooden-blinds`
- `/collections/no-drill-blinds`
- `/collections/motorized-blinds`
- `/collections/pleated-blinds`

---

*Last Updated: December 20, 2025*
*Categories based on: src/data/navigation.ts*
