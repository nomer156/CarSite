import { Link } from "react-router";

export default function CarsList() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">🚗 Мои машины</h1>
      {/* позже здесь цикл по Zustand-стору */}
      <Link to="1" className="text-blue-600 mt-2 block">Машина #1</Link>
    </div>
  );
}
