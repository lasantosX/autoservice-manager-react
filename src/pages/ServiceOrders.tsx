import DataTable from "../components/DataTable";

const serviceOrders = [
  { number: "RO-10482", customer: "Michael Johnson", vehicle: "2021 Toyota Camry", status: "In Progress", total: "$845.20" },
  { number: "RO-10483", customer: "Sarah Connor", vehicle: "2020 Ford F-150", status: "Waiting Parts", total: "$1,240.00" },
  { number: "RO-10484", customer: "Robert Miles", vehicle: "2019 Honda Civic", status: "Ready to Close", total: "$390.75" },
];

export default function ServiceOrders() {
  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <p className="eyebrow">Repair Order Workflow</p>
          <h2>Service Orders</h2>
          <p>Review repair orders, customer approvals, service status, and totals.</p>
        </div>
        <button className="primary-button">Create Service Order</button>
      </div>

      <DataTable
        columns={[
          { key: "number", header: "RO Number" },
          { key: "customer", header: "Customer" },
          { key: "vehicle", header: "Vehicle" },
          { key: "status", header: "Status" },
          { key: "total", header: "Total" },
        ]}
        data={serviceOrders}
      />
    </section>
  );
}