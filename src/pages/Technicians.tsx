import DataTable from "../components/DataTable";

const technicians = [
  { name: "Daniel Rivera", specialty: "Engine Repair", activeOrders: 6, efficiency: "94%" },
  { name: "Emily Parker", specialty: "Electrical Systems", activeOrders: 4, efficiency: "91%" },
  { name: "Carlos Mendoza", specialty: "Transmission", activeOrders: 5, efficiency: "97%" },
];

export default function Technicians() {
  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <p className="eyebrow">Shop Management</p>
          <h2>Technicians</h2>
          <p>Monitor technician workload, specialization, and performance.</p>
        </div>
        <button className="primary-button">Add Technician</button>
      </div>

      <DataTable
        columns={[
          { key: "name", header: "Name" },
          { key: "specialty", header: "Specialty" },
          { key: "activeOrders", header: "Active Orders" },
          { key: "efficiency", header: "Efficiency" },
        ]}
        data={technicians}
      />
    </section>
  );
}