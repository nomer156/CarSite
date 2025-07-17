// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-green-500">
        🎉 React + Tailwind + Router работают!
      </h1>

      <Routes>
        <Route path="/" element={<p>Это главная страница</p>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
