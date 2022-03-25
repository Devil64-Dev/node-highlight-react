# node-highlight-react

React parser for [node-highlight](https://github.com/Devil64-Dev/node-highlight.git).

## Installation

yarn: `yarn add node-highlight-react`

npm: `npm install node-highlight-react`

**NOTE**: You should install `node-highlight` if not is already installed.

## Usage

This exports the core highlight functions `highlight`, `highlightSync`, and the
ready to use React component `CodeHighlight`.

The `highlightSync` returns an array of React child's with the properties
key, className and children. For asynchronous code use `highlight`. See `Element` type
for more help.

The `CodeHighlight` element provides a JSX friendly usage of this parser. Example:}

```jsx
const code = `const Element = () => (
  <>
    <h1>Hello World</h1>
    <p>This is a React Function Component</p>
  </>
);`;

<CodeHighlight language="javascript">
  {code}
</CodeHighlight>
```

Or just using props.

```jsx
<CodeHighlight language="javascript" code={code}/>
```

The component accepts the following props.

- code: String (optional).

- children: String (optional).

- language: Name of the supported language for `node-highlight`.

- className: Custom class name for the `pre` element. Defaults to &#96;`${prefix}${language}`&#96; (optional).

- prefix: String passed to `highlight` function of `node-highlight` (optional).
