# React Timeline Challenge

This project is a timeline application built using Vite, React, TypeScript, TailwindCSS, clsx, dayjs, and dnd kit. The goal was to create an interactive timeline that allows for zooming, inline editing, and drag-and-drop functionality for events.

## Project Overview

### Time Spent

I spent approximately 4 hours on this assignment.

### What I Liked About My Implementation

- Performance: Leveraging Vite for development provided an incredibly fast environment, reducing the feedback loop during development with instant Hot Module Replacement (HMR).
- Modularity and Type Safety: Using React with TypeScript ensured type safety and enhanced the development experience by catching potential bugs early and providing better IDE support.

- Styling Flexibility: TailwindCSS allowed me to quickly style the components with utility classes, resulting in a consistent design and reduced custom CSS.

- Drag-and-Drop Functionality: Implementing drag-and-drop with dnd kit provided a smooth user experience with great flexibility for customizing the drag events and behaviors.

### What I Would Change If I Were to Do It Again

- Code Organization by Features/Modules: For larger projects, I would adopt a “Grouping by Features/Modules” folder structure. This approach organizes code by logical features or modules rather than by file type (e.g., separating components, hooks, and styles). For instance, each feature (like the timeline, events, or header) would have its own folder containing all the related components, hooks, styles, and tests. This structure improves maintainability by making it easier to find and modify related pieces of code and helps to scale the project more effectively.

  ```
  /src
    ├── /features
    │    ├── /timeline
    │    │     ├── components/
    │    │     ├── hooks/
    │    │     ├── styles/
    │    │     └── tests/
    │    ├── /events
    │    │     ├── components/
    │    │     ├── hooks/
    │    │     ├── styles/
    │    │     └── tests/
    ├── /utils
    ├── /assets
    ├── App.tsx
    └── index.tsx
  ```

- State Management: For a larger-scale application, I would introduce a more robust state management solution (like Redux or Zustand) to handle complex state changes and improve scalability.

- Accessibility Improvements: I would focus more on accessibility, such as adding keyboard support for drag-and-drop operations, ensuring ARIA attributes are properly set, and improving color contrast.

- Unit Tests: Incorporate more comprehensive unit tests using a testing library like React Testing Library to ensure each component works as expected in isolation.

### Design Decisions

- Inspiration: I took inspiration from existing timeline applications in google.

### Future Testing Plans

If I had more time, I would focus on the following testing strategies:

- Unit Testing: Use Jest and React Testing Library to test individual components, ensuring that they render correctly and behave as expected in various scenarios (e.g., drag-and-drop interactions, editing, zooming).

- End-to-End Testing: Use Cypress or Playwright to create end-to-end tests that simulate real user interactions, such as dragging and dropping events, editing event names, and zooming in and out on the timeline.

- Accessibility Testing: Utilize tools like Axe or Lighthouse to identify and address accessibility issues, ensuring the application is usable by people with various disabilities.

- Performance Testing: Measure performance using tools like Lighthouse or React Profiler, and optimize any bottlenecks identified during testing.

## Getting started

Install dependencies:

### `pnpm install`

Run the project:

### `pnpm dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.
