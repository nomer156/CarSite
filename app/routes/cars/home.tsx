import { useParams } from "react-router";

export default function CarOverview() {
  const { carId } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">📋 Обзор машины {carId}</h1>
    </div>
  );
}
