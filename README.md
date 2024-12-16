# ReactTaskButton

A React component library for creating highly customizable buttons that handle asynchronous operations (promises) with built-in UI feedback for loading, success, and error states. Perfect for modern, interactive user interfaces.

## Features

- **Async Operations**: Automatically handles promises passed to the button.
- **Built-in States**: Idle, Loading, Success, Error, and Confirmation.
- **Customizable Components**: Customize visuals for loading, success, error, and confirmation states.
- **Dynamic Background Colors**: Adjust the button's appearance for different states.
- **Optional Confirmation**: Support for buttons requiring user confirmation before execution.

## Installation

Install the package via npm or yarn:

```bash
npm install react-task-button
# or
yarn add react-task-button
```

## Usage

```
import React from "react";
import { PromiseButton } from "react-task-button";

const App = () => {
  const handleAsyncAction = async () => {
    // Simulate an asynchronous operation
    return new Promise<void>((resolve, reject) => {
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
