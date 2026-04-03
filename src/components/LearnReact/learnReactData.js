const learnReactData = [
  {
    title: "1. Form Validation in React",
    description: "Implement a reusable hook to fetch data from an API, handling loading states, data, and errors efficiently.",
    code: `const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(e => { setError(e); setLoading(false); });
  }, [url]);

  return { data, loading, error };
};`
  },
  {
    title: "2. Debounce Hook",
    description: "A hook that delays updating a value until a specified time has passed. Perfect for search inputs.",
    code: `function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}`
  },
  {
    title: "3. Optimized Task List (useMemo)",
    description: "How to use useMemo to prevent expensive calculations on every render when filtering a list.",
    code: `const MemoizedList = ({ items, query }) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.includes(query));
  }, [items, query]);

  return (
    <ul>
      {filteredItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};`
  }
];

export default learnReactData;