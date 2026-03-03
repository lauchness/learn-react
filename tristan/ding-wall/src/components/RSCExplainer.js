import React, { useState } from 'react';
import './RSCExplainer.css';

function RSCExplainer() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="rsc-explainer">
      <h1 className="rsc-title">React Server Components Explained</h1>

      <div className="rsc-tabs">
        <button
          className={activeTab === 'overview' ? 'tab-active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={activeTab === 'comparison' ? 'tab-active' : ''}
          onClick={() => setActiveTab('comparison')}
        >
          Server vs Client
        </button>
        <button
          className={activeTab === 'benefits' ? 'tab-active' : ''}
          onClick={() => setActiveTab('benefits')}
        >
          Benefits
        </button>
        <button
          className={activeTab === 'examples' ? 'tab-active' : ''}
          onClick={() => setActiveTab('examples')}
        >
          Examples
        </button>
      </div>

      <div className="rsc-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>What Are React Server Components?</h2>
            <p>
              React Server Components (RSC) are a new paradigm introduced in React 18 that allows
              components to render exclusively on the server. Unlike traditional React components
              that run in the browser, Server Components:
            </p>
            <ul>
              <li>Render on the server during build time or on each request</li>
              <li>Have direct access to backend resources (databases, file systems)</li>
              <li>Send only their rendered output to the client, not the component code</li>
              <li>Dramatically reduce JavaScript bundle sizes</li>
            </ul>
            <div className="info-box">
              <strong>Note:</strong> This repository uses React 16.13, which predates RSC.
              To use RSC, you need React 18+ and a supporting framework like Next.js 13+.
            </div>
          </div>
        )}

        {activeTab === 'comparison' && (
          <div className="tab-content">
            <h2>Server Components vs Client Components</h2>

            <div className="comparison-grid">
              <div className="comparison-card server">
                <h3>Server Components</h3>
                <p className="component-type">Runs on the server only</p>
                <h4>Can:</h4>
                <ul>
                  <li>Use async/await directly</li>
                  <li>Access databases and file systems</li>
                  <li>Keep sensitive data on server</li>
                  <li>Use heavy dependencies without client cost</li>
                </ul>
                <h4>Cannot:</h4>
                <ul>
                  <li>Use React hooks (useState, useEffect)</li>
                  <li>Access browser APIs</li>
                  <li>Handle user events</li>
                  <li>Maintain client-side state</li>
                </ul>
              </div>

              <div className="comparison-card client">
                <h3>Client Components</h3>
                <p className="component-type">Runs in the browser</p>
                <h4>Can:</h4>
                <ul>
                  <li>Use all React hooks</li>
                  <li>Access browser APIs</li>
                  <li>Handle user events (clicks, input)</li>
                  <li>Maintain interactive state</li>
                </ul>
                <h4>Cannot:</h4>
                <ul>
                  <li>Directly access server resources</li>
                  <li>Use heavy dependencies without bundle cost</li>
                  <li>Keep sensitive data secure</li>
                  <li>Import Server Components directly</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className="tab-content">
            <h2>Key Benefits of React Server Components</h2>

            <div className="benefit-card">
              <h3>1. Reduced Bundle Size</h3>
              <p>
                Server Components don't ship to the client. Large dependencies like markdown
                parsers or date libraries used in Server Components never reach the browser,
                resulting in smaller JavaScript bundles and faster page loads.
              </p>
            </div>

            <div className="benefit-card">
              <h3>2. Direct Backend Access</h3>
              <p>
                Query databases, read files, or call internal APIs directly in your components
                without creating separate API endpoints or exposing credentials to the client.
              </p>
            </div>

            <div className="benefit-card">
              <h3>3. Improved Performance</h3>
              <p>
                Faster initial page loads, better Time to Interactive (TTI), and support for
                streaming progressive rendering improve overall user experience.
              </p>
            </div>

            <div className="benefit-card">
              <h3>4. Automatic Code Splitting</h3>
              <p>
                Server Components enable fine-grained, automatic code splitting without manual
                configuration or intervention.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'examples' && (
          <div className="tab-content">
            <h2>Code Examples</h2>

            <div className="code-example">
              <h3>Traditional Client Component (like this app)</h3>
              <pre>
                <code>{`import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  // Fetch happens in browser
  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return <div>{/* render todos */}</div>;
}`}</code>
              </pre>
            </div>

            <div className="code-example">
              <h3>Server Component (React 18+ / Next.js 13+)</h3>
              <pre>
                <code>{`// This component runs on the server
async function TodoApp() {
  // Direct database access
  const todos = await db.todos.findAll();

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}`}</code>
              </pre>
            </div>

            <div className="code-example">
              <h3>Client Component for Interactivity</h3>
              <pre>
                <code>{`'use client'; // Marks as Client Component

import { useState } from 'react';

function TodoItem({ todo }) {
  const [checked, setChecked] = useState(todo.completed);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
}`}</code>
              </pre>
            </div>

            <div className="info-box">
              <strong>Want to learn more?</strong> Explore the tabs above for comprehensive information about React Server Components, including benefits, use cases, and code examples.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RSCExplainer;
