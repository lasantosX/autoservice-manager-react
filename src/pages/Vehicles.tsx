import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { getVehiclesByCustomer } from "../api/vehicleService";
import type { Vehicle } from "../types/vehicle";

type VehicleRow = {
  id: number;
  vin: string;
  make: string;
  model: string;
  year: number;
};

export default function Vehicles() {
  const [vehicles, setVehicles] = useState<VehicleRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const data: Vehicle[] = await getVehiclesByCustomer(1);

        const rows = data.map((v) => ({
          id: v.vehicleId,
          vin: v.vin,
          make: v.make,
          model: v.model,
          year: v.year,
        }));

        setVehicles(rows);
      } catch (err) {
        console.error("Error loading vehicles:", err);
        setError("Unable to load vehicles.");
      } finally {
        setLoading(false);
      }
    };

    loadVehicles();
  }, []);

  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <p className="eyebrow">Vehicle Records</p>
          <h2>Vehicles</h2>
          <p>Track vehicles from the API.</p>
        </div>
        <button className="primary-button">Add Vehicle</button>
      </div>

      {loading && <p>Loading vehicles...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <DataTable
          columns={[
            { key: "id", header: "ID" },
            { key: "vin", header: "VIN" },
            { key: "make", header: "Make" },
            { key: "model", header: "Model" },
            { key: "year", header: "Year" },
          ]}
          data={vehicles}
        />
      )}
    </section>
  );
}