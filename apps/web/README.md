# Web (Frontend)

This is the frontend application built with Next.js.

## Technologies

- Next.js
- React
- TypeScript
- [Add other relevant technologies like styling libraries, state management, etc.]

## Getting Started

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Install dependencies (from the Turborepo root):

    ```bash
    pnpm install
    ```

3.  Start the development server (from the Turborepo root):

    ```bash
    pnpm dev
    # or to start only the frontend
    pnpm --filter=web dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building

To build the production version:

```bash
pnpm build
# or to build only the frontend
pnpm --filter=web build
```
