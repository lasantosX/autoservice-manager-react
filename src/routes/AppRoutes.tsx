import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Vehicles from "../pages/Vehicles";
import Technicians from "../pages/Technicians";
import ServiceOrders from "../pages/ServiceOrders";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="technicians" element={<Technicians />} />
        <Route path="service-orders" element={<ServiceOrders />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}