# Frontend Architecture Stabilization Plan

## ROOT CAUSES IDENTIFIED

1. **Mixed SSR/SPA Architecture**: Project uses TanStack Start (SSR) but needs to be pure Vite SPA
2. **Vercel Serverless Conflicts**: Attempting SSR deployment with incompatible runtime
3. **Hydration Mismatches**: SSR shell components causing client/server mismatch
4. **Complex Build Pipeline**: Custom build scripts creating unstable output
5. **Runtime Version Issues**: nodejs24.x not supported by Vercel

## STABILIZATION STRATEGY

### Phase 1: Remove SSR Architecture
- Remove TanStack Start dependencies
- Remove server.ts, start.ts, and SSR entry points
- Remove api/index.js serverless function
- Remove custom build scripts

### Phase 2: Implement Pure React Router
- Replace TanStack Router with React Router v6
- Remove SSR-specific route configuration
- Implement client-side only routing
- Remove hydration wrappers

### Phase 3: Simplify Build Pipeline
- Use standard Vite build (no custom scripts)
- Configure for static SPA deployment
- Remove serverless function generation

### Phase 4: Fix Vercel Deployment
- Update vercel.json for static SPA
- Remove function runtime configuration
- Add proper SPA fallback routing

### Phase 5: Validate Stability
- Test local build and preview
- Verify no hydration warnings
- Confirm consistent behavior
- Deploy to Vercel successfully

## EXECUTION ORDER

1. Install React Router
2. Create new router configuration
3. Convert route files to React Router format
4. Update root component
5. Remove SSR dependencies
6. Update build configuration
7. Fix Vercel deployment config
8. Test and validate
