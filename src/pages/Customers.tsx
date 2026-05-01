import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { getCustomers } from "../api/customerService";
import type { Customer } from "../types/customer";

type CustomerRow = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function Customers() {
  const [customers, setCustomers] = useState<CustomerRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const data: Customer[] = await getCustomers();

        const rows = data.map((customer) => ({
          id: customer.customerId,
          name: `${customer.firstName} ${customer.lastName}`,
          email: customer.email,
          phone: customer.phone,
        }));

        setCustomers(rows);
      } catch {
        setError("Unable to load customers.");
      } finally {
        setLoading(false);
      }
    };

    loadCustomers();
  }, []);

  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <p className="eyebrow">Customer Management</p>
          <h2>Customers</h2>
          <p>Manage customer profiles and contact information from the API.</p>
        </div>
        <button className="primary-button">Add Customer</button>
      </div>

      {loading && <p>Loading customers...</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <DataTable
          columns={[
            { key: "id", header: "ID" },
            { key: "name", header: "Name" },
            { key: "email", header: "Email" },
            { key: "phone", header: "Phone" },
          ]}
          data={customers}
        />
      )}
    </section>
  );
}