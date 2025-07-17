// app/routes/_layout.tsx
import { Outlet, NavLink } from "react-router";
import "../app.css";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <nav className="flex justify-around p-4 border-t bg-white">
        <NavLink to="/" end className="flex flex-col items-center">
          <span>🏠</span>
          <span className="text-xs">Главная</span>
        </NavLink>
        <NavLink to="/cars" className="flex flex-col items-center">
          <span>🚗</span>
          <span className="text-xs">Моя машина</span>
        </NavLink>
        <NavLink to="/expenses" className="flex flex-col items-center">
          <span>💰</span>
          <span className="text-xs">Расходы</span>
        </NavLink>
        <NavLink to="/reminders" className="flex flex-col items-center">
          <span>🔔</span>
          <span className="text-xs">Напоминания</span>
        </NavLink>
        <NavLink to="/settings" className="flex flex-col items-center">
          <span>⚙️</span>
          <span className="text-xs">Настройки</span>
        </NavLink>
      </nav>
    </div>
  );
}
