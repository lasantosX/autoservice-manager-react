import DataTable from "../components/DataTable";

const vehicles = [
  { vin: "1HGCM82633A004352", year: 2021, make: "Toyota", model: "Camry", customer: "Michael Johnson" },
  { vin: "2FTRX18W1XCA01234", year: 2020, make: "Ford", model: "F-150", customer: "Sarah Connor" },
  { vin: "3VWFE21C04M000001", year: 2019, make: "Honda", model: "Civic", customer: "Robert Miles" },
];

export default function Vehicles() {
  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <p className="eyebrow">Vehicle Records</p>
          <h2>Vehicles</h2>
          <p>Track vehicle information linked to customer service history.</p>
        </div>
        <button className="primary-button">Add Vehicle</button>
      </div>

      <DataTable
        columns={[
          { key: "vin", header: "VIN" },
          { key: "year", header: "Year" },
          { key: "make", header: "Make" },
          { key: "model", header: "Model" },
          { key: "customer", header: "Customer" },
        ]}
        data={vehicles}
      />
    </section>
  );
}