# AxeKitv

A modern, accessible React component library built with [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/).

[![npm version](https://img.shields.io/npm/v/axekit.svg)](https://www.npmjs.com/package/axekit)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Modern Design** - Clean, minimal components with Tailwind CSS
- ♿ **Accessible** - Built on Radix UI primitives for accessibility
- 🎯 **TypeScript** - Full TypeScript support with type definitions
- 📦 **Tree-shakeable** - Import only what you need
- 🎭 **Customizable** - Variant-based styling with class-variance-authority
- 📖 **Storybook** - Interactive component documentation

## 📦 Installation

```bash
npm install axekit
```

**Peer Dependencies:**
```bash
npm install react react-dom
```

## 🚀 Quick Start

```tsx
import { Button, Modal, Tooltip, Dropdown } from 'axekit';

function App() {
  return (
    <div>
      <Button intent="primary" size="medium">
        Click me!
      </Button>
    </div>
  );
}
```

## 📚 Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from 'axekit';

// Primary button (default)
<Button intent="primary" size="medium">
  Primary Button
</Button>

// Secondary button
<Button intent="secondary" size="small">
  Secondary Button
</Button>
```

**Props:**
- `intent`: `"primary"` | `"secondary"` (default: `"primary"`)
- `size`: `"small"` | `"medium"` (default: `"medium"`)
- Extends all standard HTML button attributes

### Modal

A dialog/modal component powered by Radix UI Dialog.

```tsx
import { Modal, Button } from 'axekit';

<Modal
  trigger={<Button>Open Modal</Button>}
  title="Modal Title"
  description="This is a modal description"
  body={<div>Custom modal content here</div>}
/>
```

**Props:**
- `trigger`: React element that opens the modal
- `title`: Modal title (string)
- `description`: Modal description (string)
- `body`: Optional custom content (React element)

### Tooltip

Display helpful tooltips on hover.

```tsx
import { Tooltip, Button } from 'axekit';

<Tooltip
  trigger={<Button>Hover me</Button>}
  text="This is a helpful tooltip"
  position="top"
  intent="normal"
/>
```

**Props:**
- `trigger`: React element that triggers the tooltip
- `text`: Tooltip content (string)
- `position`: `"top"` | `"bottom"` | `"left"` | `"right"` (default: `"top"`)
- `intent`: `"normal"` | `"danger"` (default: `"normal"`)

### Dropdown

A dropdown menu component.

```tsx
import { Dropdown, Button } from 'axekit';

<Dropdown
  trigger={<Button>Menu</Button>}
  items={['Option 1', 'Option 2', 'Option 3']}
/>
```

**Props:**
- `trigger`: React element that opens the dropdown
- `items`: Array of menu items (strings)

## 🎨 Styling

AxeKit uses Tailwind CSS for styling. Make sure you have Tailwind CSS configured in your project to use the components effectively.

Components use dark-themed styling by default with customizable variants.

## 🛠️ Development

To run the Storybook development environment:

```bash
npm run storybook
```

To build the library:

```bash
npm run build
```

## 📄 License

MIT © [Pranjal Negi](https://github.com/yourusername)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/axekit)
- [GitHub Repository](https://github.com/yourusername/axeui)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
