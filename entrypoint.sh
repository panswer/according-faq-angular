#!/bin/bash
# filepath: entrypoint.sh

# Start the Angular dev server in the background
npx ng serve --host 0.0.0.0 &

# Wait for the server to be ready (adjust the sleep as needed)
sleep 15

# Run E2E tests
npx ng e2e