# Card Component

A reusable Card component for Docusaurus documentation with both legacy and compositional usage patterns. The href prop is now optional - when not provided, the card renders as a div instead of a link.

## Usage

### Card without href (div)
```jsx
import Card from '@site/src/components/Card';

// Div without link
<Card title="Static Card" description="This card has no link" />

// Compositional without link
<Card>
  <Card.Header title="Static Card" />
  <Card.Body>This card has no link</Card.Body>
</Card>
```

### Legacy Usage (Props-based)
```jsx
import Card from '@site/src/components/Card';

// Internal link
<Card
  href="../dashboard/live_processing"
  title="Dashboard"
  description="To configure the live processing options, follow the steps during the stream creation."
/>

// External link
<Card
  href="https://api.nanostream.cloud/docs/bintu/#operation/processing"
  title="Bintu API"
  description="To utilize the API requests, read more in the bintu docs."
/>

// Without href (div)
<Card
  title="Static Card"
  description="This is a card without a link"
/>
```

### Compositional Usage (with CardHeader and CardBody)
```jsx
import Card from '@site/src/components/Card';

// Internal link
<Card href="../dashboard/live_processing">
  <Card.Header title="Dashboard" />
  <Card.Body>
    To configure the live processing options, follow the steps during the stream creation.
  </Card.Body>
</Card>

// External link
<Card href="https://api.nanostream.cloud/docs/bintu/#operation/processing">
  <Card.Header title="Bintu API" />
  <Card.Body>
    To utilize the API requests, read more in the bintu docs.
  </Card.Body>
</Card>

// Without href (div)
<Card>
  <Card.Header title="Static Card" />
  <Card.Body>This is a card without a link</Card.Body>
</Card>
```

## Components

### Card
Main card container component.

| Prop        | Type   | Required | Description                    |
|-------------|--------|----------|--------------------------------|
| `href`      | string | No       | URL for the card link (optional) |
| `title`     | string | No*      | Title text (legacy mode)       |
| `description`| string | No*      | Description text (legacy mode) |
| `className` | string | No       | Additional CSS classes         |
| `children`  | node   | No*      | Child components (compositional mode) |

*Use either legacy props OR children, not both. When href is not provided, the card renders as a div.

### CardHeader
Title component for card headers.

| Prop        | Type   | Required | Description                    |
|-------------|--------|----------|--------------------------------|
| `children`  | node   | No       | Child content                  |
| `title`     | string | No       | Title text                     |
| `className` | string | No       | Additional CSS classes         |

### CardBody
Body component for card descriptions.

| Prop        | Type   | Required | Description                    |
|-------------|--------|----------|--------------------------------|
| `children`  | node   | Yes      | Child content                  |
| `className` | string | No       | Additional CSS classes         |
