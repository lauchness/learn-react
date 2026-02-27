# React Server Components (RSC) Explained

## Overview

React Server Components (RSC) is a new paradigm introduced in React 18 that allows components to render on the server, sending only the necessary JavaScript to the client. This is a fundamental shift from traditional React where all components run on the client.

## What Are React Server Components?

React Server Components are components that run exclusively on the server. They don't have access to browser APIs, hooks like `useState` or `useEffect`, or event handlers. Instead, they:

- Render on the server during the build or on each request
- Have direct access to server-side resources (databases, file systems, APIs)
- Send only their rendered output to the client (not the component code)
- Reduce the JavaScript bundle size sent to the browser

## Server Components vs Client Components

### Traditional React (Client Components)

```jsx
'use client'; // In frameworks like Next.js 13+

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Characteristics:**
- Runs in the browser
- Has access to browser APIs and React hooks
- Can use event handlers and interactivity
- Entire component code is sent to the client
- Re-renders happen in the browser

### Server Components

```jsx
// No 'use client' directive - this is a Server Component by default

async function UserProfile({ userId }) {
  // Direct database access on the server
  const user = await db.users.findById(userId);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

**Characteristics:**
- Runs only on the server
- Can directly access backend resources
- Cannot use browser APIs or React hooks
- No event handlers or interactivity
- Only rendered HTML/output sent to client
- Zero JavaScript bundle for this component

## Key Benefits

### 1. Reduced Bundle Size

Server Components don't ship to the client, dramatically reducing JavaScript bundle sizes. Large dependencies used only in Server Components (e.g., markdown parsers, date libraries) never reach the browser.

### 2. Direct Backend Access

Server Components can directly query databases, read files, or call internal APIs without exposing credentials or creating additional API endpoints.

```jsx
// Server Component
async function BlogPost({ slug }) {
  // Direct file system access
  const content = await fs.readFile(`./posts/${slug}.md`, 'utf-8');
  const parsed = markdownParser.parse(content); // Heavy library stays on server

  return <article>{parsed}</article>;
}
```

### 3. Improved Performance

- Faster initial page loads (less JavaScript to download and parse)
- Better Time to Interactive (TTI)
- Streaming support for progressive rendering

### 4. Automatic Code Splitting

Server Components enable automatic, fine-grained code splitting without manual intervention.

## How Server and Client Components Work Together

Server and Client Components can be composed together:

```jsx
// app/page.js (Server Component)
import ClientCounter from './ClientCounter';

export default async function Page() {
  const data = await fetchDataFromDatabase();

  return (
    <div>
      <h1>Server-rendered content: {data.title}</h1>
      {/* Client Component embedded in Server Component */}
      <ClientCounter initialCount={data.count} />
    </div>
  );
}

// ClientCounter.js (Client Component)
'use client';

import { useState } from 'react';

export default function ClientCounter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

## Important Rules

### Server Components Can:
- Use async/await directly in the component
- Access server-side resources (databases, file systems)
- Import and render other Server Components
- Import and render Client Components

### Server Components Cannot:
- Use hooks (`useState`, `useEffect`, `useContext`, etc.)
- Use browser APIs (`window`, `document`, `localStorage`)
- Have event handlers (`onClick`, `onChange`, etc.)
- Use context providers (but can read from them if provided by a Client Component)

### Client Components Can:
- Use all React hooks
- Have event handlers and interactivity
- Access browser APIs
- Render other Client Components
- Render Server Components only if passed as children/props (not imported directly)

## When to Use Server Components

Use Server Components when you need to:
- Fetch data from a database or API
- Access server-side resources
- Keep sensitive logic/data on the server
- Reduce client-side JavaScript bundle

Use Client Components when you need to:
- Add interactivity (buttons, forms, user input)
- Use React hooks for state or effects
- Access browser APIs
- Use event listeners

## Comparison with This Codebase

This repository uses React 16.13, which predates React Server Components. All components here are traditional client-side components:

**Current approach (React 16.13):**
```jsx
// All of this runs in the browser
function TodoApp() {
  const [todos, setTodos] = useState([]);

  // Client-side data fetching
  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return <div>{/* render todos */}</div>;
}
```

**With RSC (React 18+/Next.js 13+):**
```jsx
// Server Component - runs on server
async function TodoApp() {
  // Direct data access on server
  const todos = await db.todos.findAll();

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

// Client Component - interactive part
'use client';
function TodoItem({ todo }) {
  const [checked, setChecked] = useState(todo.completed);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
}
```

## Framework Support

React Server Components require framework support. Currently available in:

- **Next.js 13+** (App Router)
- **Gatsby 5+** (experimental)
- **Remix** (experimental support in progress)

React Server Components are **not available** in Create React App or standalone React applications.

## Getting Started with RSC

To use React Server Components:

1. Upgrade to React 18+
2. Use a supporting framework (e.g., Next.js 13+)
3. Use the App Router in Next.js
4. Components are Server Components by default
5. Add `'use client'` directive at the top of files that need client-side features

## Additional Resources

- [React RFC: React Server Components](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [React Server Components Demo](https://github.com/reactjs/server-components-demo)
- [Making Sense of React Server Components](https://www.joshwcomeau.com/react/server-components/)

## Summary

React Server Components represent a paradigm shift in how we build React applications, offering better performance, smaller bundles, and direct backend access. While this codebase uses traditional client-side React, understanding RSC is valuable as it becomes the standard for modern React development.
