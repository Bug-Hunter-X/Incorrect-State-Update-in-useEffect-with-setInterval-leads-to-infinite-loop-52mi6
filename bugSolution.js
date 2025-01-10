```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 5) {
      const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1); // Correct way
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```