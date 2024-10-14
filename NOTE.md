# Vitest

## Coverage

- Run with `vitest run --coverage`
- Use istanbul coverage
- include only `src/**` and not storybook file

## Vitest Browser

- Initialize via vitest

  ```sh
  pnpm vitest init browser
  ```

- Add type reference in `vite-env.d.ts`

  ```ts
  /// <reference types="@vitest/browser/providers/playwright" />
  ```

# Storybook

## Test runner

- Install

  ```sh
  pnpm add -D @storybook/test-runner
  ```

- Build with test flag for speed

  ```sh
  pnpm build-storybook --test
  ```

- Serve on :6006

  ```sh
  pnpm i -D serve
  pnpm serve storybook-static
  ```

## Vitest addons

- Install

  ```sh
  ./node_modules/.bin/storybook add @storybook/experimental-addon-test
  ```
