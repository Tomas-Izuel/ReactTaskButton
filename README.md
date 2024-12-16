# ReactTaskButton

ReactTaskButton is a lightweight, customizable React component library for creating buttons that handle asynchronous operations (promises) with built-in feedback for loading, success, and error states.

## Features

- **Promise Handling:** Automatically handles promises with feedback in the UI.
- **Dynamic States:** Supports idle, loading, success, error, and confirmation states.
- **Customizable UI:** Fully customizable visuals for different states.
- **Background Colors:** Dynamic background colors for each state.
- **Optional Confirmation:** Easily enable user confirmation for sensitive actions.

## Installation

Install ReactTaskButton via npm or yarn:

```bash
npm install react-task-button
# or
yarn add react-task-button
```

## Usage

Here’s an example of how to use the `PromiseButton` component:

```tsx
import React from "react";
import { PromiseButton } from "react-task-button";

const App = () => {
  const handleAsyncAction = async () => {
    // Simulate an async operation
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 2000);
    });
  };

  return (
    <div className="App">
      <PromiseButton
        onClickPromise={handleAsyncAction}
        label="Submit"
        confirm
        className="custom-class"
        backgroundColor="bg-blue-500"
        loadingBackgroundColor="bg-gray-400"
        successBackgroundColor="bg-green-500"
        errorBackgroundColor="bg-red-500"
      />
    </div>
  );
};

export default App;
```

## Props

| Prop                     | Type                  | Default             | Description                                                         |
| ------------------------ | --------------------- | ------------------- | ------------------------------------------------------------------- |
| `onClickPromise`         | `() => Promise<void>` | **Required**        | The asynchronous function to execute when the button is clicked.    |
| `label`                  | `string               | JSX.Element`        | "Submit". The label displayed on the button in the idle state.      |
| `confirm`                | `boolean`             | `false`             | If `true`, requires user confirmation before executing the promise. |
| `className`              | `string`              | `""`                | Custom class names to style the button.                             |
| `disabled`               | `boolean`             | `false`             | Disables the button when set to `true`.                             |
| `loadingComponent`       | `React.ReactNode`     | Spinner             | Custom component displayed during the loading state.                |
| `successComponent`       | `React.ReactNode`     | Check Icon          | Custom component displayed during the success state.                |
| `errorComponent`         | `React.ReactNode`     | Error Icon          | Custom component displayed during the error state.                  |
| `confirmComponent`       | `React.ReactNode`     | Confirmation Dialog | Custom component displayed during the confirmation state.           |
| `backgroundColor`        | `string`              | "bg-blue-500"       | Background color for the idle state.                                |
| `loadingBackgroundColor` | `string`              | "bg-transparent"    | Background color for the loading state.                             |
| `successBackgroundColor` | `string`              | "bg-green-500"      | Background color for the success state.                             |
| `errorBackgroundColor`   | `string`              | "bg-red-500"        | Background color for the error state.                               |

## States

The `PromiseButton` component manages the following states:

- **Idle:** The button is ready to be clicked.
- **Loading:** The asynchronous action is in progress.
- **Success:** The action completed successfully.
- **Error:** The action failed.
- **Confirming:** The button is awaiting user confirmation (if `confirm` is enabled).

## Customization

Customize the button by providing your own components for the various states or by using CSS classes to style it. The component is built with flexibility in mind to fit your project’s requirements.

## License

ReactTaskButton is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
