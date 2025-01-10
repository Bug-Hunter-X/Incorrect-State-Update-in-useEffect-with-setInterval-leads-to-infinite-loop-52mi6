# React useEffect Infinite Loop Bug
This repository demonstrates a common React bug involving an infinite loop caused by incorrect state updates within a `useEffect` hook that uses `setInterval`.

## Bug Description
The `MyComponent` component attempts to increment a counter every second until it reaches 5. However, the way `setCount` is used within `setInterval` leads to an infinite loop because React re-renders the component with every state update, triggering the `useEffect` again, restarting the `setInterval`.

## Solution
The solution uses the functional update form of `setCount` to ensure the update is based on the previous state value, preventing the infinite loop.