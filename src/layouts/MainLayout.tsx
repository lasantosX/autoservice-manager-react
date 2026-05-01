import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Car,
  Wrench,
  ClipboardList,
  Settings,
} from "lucide-react";

const menuItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/customers", label: "Customers", icon: Users },
  { path: "/vehicles", label: "Vehicles", icon: Car },
  { path: "/technicians", label: "Technicians", icon: Wrench },
  { path: "/service-orders", label: "Service Orders", icon: ClipboardList },
  { path: "/settings", label: "Settings", icon: Settings },
];

export default function MainLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">ASM</div>
          <div>
            <h1>AutoService Manager</h1>
            <p>React Frontend</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}