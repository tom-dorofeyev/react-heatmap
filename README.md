# 🔥 React Heatmap

A simple and lightweight **Heatmap component** for React.

Feel free to copy and use it in your projects!

```tsx
const data = [
  [
    { id: "10-09-2024", count: 10, tooltip: "10-09-2024 - 10 commits" },
    { id: "11-09-2024", count: 15, tooltip: "11-09-2024 - 15 commits" },
    // add more to populate row...
  ],
  [
    { id: "10-10-2024", count: 20, tooltip: "11-10-2024 - 20 commits" },
    { id: "11-10-2024", count: 50, tooltip: "11-10-2024 - 50 commits" },
    // add more to populate row...
  ],
];

function App() {
  return <Heatmap data={data} />;
}
```
