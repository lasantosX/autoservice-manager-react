import DataTable from "../components/DataTable";

const customers = [
  { name: "Michael Johnson", email: "michael@demo.com", phone: "555-1201", status: "Active" },
  { name: "Sarah Connor", email: "sarah@demo.com", phone: "555-8842", status: "Active" },
  { name: "Robert Miles", email: "robert@demo.com", phone: "555-3319", status: "Inactive" },
];

export default function Customers() {
  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <p className="eyebrow">Customer Management</p>
          <h2>Customers</h2>
          <p>Manage customer profiles and contact information.</p>
        </div>
        <button className="primary-button">Add Customer</button>
      </div>

      <DataTable
        columns={[
          { key: "name", header: "Name" },
          { key: "email", header: "Email" },
          { key: "phone", header: "Phone" },
          { key: "status", header: "Status" },
        ]}
        data={customers}
      />
    </section>
  );
}