import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { getServiceOrders } from "../api/serviceOrderService";
import type { ServiceOrder } from "../types/serviceOrder";

type ServiceOrderRow = {
  id: number;
  orderNumber: string;
  vehicleId: number;
  status: string;
  total: string;
};

export default function ServiceOrders() {
  const [orders, setOrders] = useState<ServiceOrderRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data: ServiceOrder[] = await getServiceOrders();

        setOrders(
          data.map((order) => ({
            id: order.serviceOrderId,
            orderNumber: order.orderNumber,
            vehicleId: order.vehicleId,
            status: String(order.status),
            total: `$${order.totalAmount.toFixed(2)}`,
          }))
        );
      } catch (err) {
        console.error("Error loading service orders:", err);
        setError("Unable to load service orders.");
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <p className="eyebrow">Repair Order Workflow</p>
          <h2>Service Orders</h2>
          <p>Review repair orders from the API.</p>
        </div>
        <button className="primary-button">Create Service Order</button>
      </div>

      {loading && <p>Loading service orders...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <DataTable
          columns={[
            { key: "id", header: "ID" },
            { key: "orderNumber", header: "Order Number" },
            { key: "vehicleId", header: "Vehicle ID" },
            { key: "status", header: "Status" },
            { key: "total", header: "Total" },
          ]}
          data={orders}
        />
      )}
    </section>
  );
}