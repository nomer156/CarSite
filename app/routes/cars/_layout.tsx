import { Outlet, NavLink, useParams } from "react-router";
export default function CarDetailLayout() {
  const { carId } = useParams();
  return (
    <div>
      <header className="p-4 bg-gray-100">🚗 Детали машины {carId}</header>
      <nav className="flex space-x-4 p-2">
        <NavLink to="." end>Обзор</NavLink>
        <NavLink to="expenses">Расходы</NavLink>
        <NavLink to="parts">Запчасти</NavLink>
        <NavLink to="reminders">Напоминания</NavLink>
        <NavLink to="qr">QR</NavLink>
      </nav>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
