import { Link, useLocation } from "react-router-dom";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-auto">{children}</main>
      <nav className="flex justify-around p-4 border-t bg-white">
        {/* каждый Link ведёт на свой path */}
        <Link to="/" className={`flex flex-col items-center ${pathname === "/" ? "text-blue-500" : ""}`}>
          🏠<span className="text-xs">Главная</span>
        </Link>
        <Link to="/cars" className={`flex flex-col items-center ${pathname.startsWith("/cars") ? "text-blue-500" : ""}`}>
          🚗<span className="text-xs">Машины</span>
        </Link>
        <Link to="/expenses" className={`flex flex-col items-center ${pathname === "/expenses" ? "text-blue-500" : ""}`}>
          💰<span className="text-xs">Расходы</span>
        </Link>
        <Link to="/reminders" className={`flex flex-col items-center ${pathname === "/reminders" ? "text-blue-500" : ""}`}>
          🔔<span className="text-xs">Напоминания</span>
        </Link>
        <Link to="/settings" className={`flex flex-col items-center ${pathname === "/settings" ? "text-blue-500" : ""}`}>
          ⚙️<span className="text-xs">Настройки</span>
        </Link>
      </nav>
    </div>
  );
}
