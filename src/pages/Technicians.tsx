import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { getTechnicians } from "../api/technicianService";
import type { Technician } from "../types/technician";

type TechnicianRow = {
  id: number;
  name: string;
  email: string;
  status: string;
};

export default function Technicians() {
  const [technicians, setTechnicians] = useState<TechnicianRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTechnicians = async () => {
      try {
        const data: Technician[] = await getTechnicians();

        setTechnicians(
          data.map((t) => ({
            id: t.technicianId,
            name: t.fullName,
            email: t.email,
            status: t.isActive ? "Active" : "Inactive",
          }))
        );
      } catch (err) {
        console.error("Error loading technicians:", err);
        setError("Unable to load technicians.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnicians();
  }, []);

  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <p className="eyebrow">Shop Management</p>
          <h2>Technicians</h2>
          <p>Monitor technicians from the API.</p>
        </div>
        <button className="primary-button">Add Technician</button>
      </div>

      {loading && <p>Loading technicians...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <DataTable
          columns={[
            { key: "id", header: "ID" },
            { key: "name", header: "Name" },
            { key: "email", header: "Email" },
            { key: "status", header: "Status" },
          ]}
          data={technicians}
        />
      )}
    </section>
  );
}