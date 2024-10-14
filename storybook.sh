#!/bin/bash

pnpm build-storybook --test
pnpm serve-storybook & pnpm test-storybook --coverage
kill -9 $(lsof -t -i:6006)