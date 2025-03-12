# Personal Website with SOLID Principles

This project is a personal website that has been refactored to follow SOLID principles.

## SOLID Principles Applied

### Single Responsibility Principle (SRP)

- Extracted timeline data into a separate `timelineData.js` file
- Created a dedicated `Timeline` component to handle rendering the timeline
- Each component now has a single responsibility:
  - `App.jsx`: Main application layout and structure
  - `Timeline.jsx`: Rendering the timeline with its entries
  - `TimelineBlock.jsx`: Rendering individual timeline entries
  - `timelineData.jsx`: Providing the data for the timeline

### Open/Closed Principle (OCP)

- The timeline data structure is open for extension (new entries can be added) but closed for modification
- The Timeline component can render any number of timeline entries without changing its implementation

### Liskov Substitution Principle (LSP)

- Components use proper prop types to ensure type safety
- Child components can be substituted without affecting parent components

### Interface Segregation Principle (ISP)

- Components only receive the props they need
- The Timeline component accepts only the timelineData it needs to render

### Dependency Inversion Principle (DIP)

- High-level components (App) depend on abstractions (Timeline) rather than concrete implementations
- Data is passed down as props, making components more reusable and testable

## Project Structure

```
src/
├── assets/            # Images and other static assets
├── components/        # React components
│   ├── Connectors/    # Timeline connector components
│   │   ├── TimelineConnector.jsx
│   │   ├── TimelineEnd.jsx
│   │   └── TimelineStart.jsx
│   ├── Timeline.jsx   # Timeline component
│   └── TimelineBlock.jsx # Individual timeline entry component
├── data/              # Data files
│   └── timelineData.jsx # Timeline data
└── App.jsx            # Main application component
```

## Benefits of This Refactoring

1. **Maintainability**: Easier to maintain as each component has a single responsibility
2. **Scalability**: Easy to add new timeline entries without changing the rendering logic
3. **Testability**: Components can be tested in isolation
4. **Reusability**: Components can be reused in different parts of the application
5. **Readability**: Code is more organized and easier to understand
