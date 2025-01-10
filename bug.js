```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic to update count
    if (count < 5) {
      const intervalId = setInterval(() => {
        setCount(count + 1); // This is problematic
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```