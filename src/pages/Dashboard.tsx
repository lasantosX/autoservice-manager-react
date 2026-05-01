import {
  Car,
  ClipboardList,
  Users,
  Wrench,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

const stats = [
  { label: "Active Service Orders", value: "128", icon: ClipboardList },
  { label: "Customers", value: "842", icon: Users },
  { label: "Vehicles", value: "1,236", icon: Car },
  { label: "Technicians", value: "24", icon: Wrench },
];

export default function Dashboard() {
  return (
    <section className="dashboard-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Operations Overview</p>
          <h2>Service Dashboard</h2>
          <p>
            Monitor repair orders, technicians, customer activity, and service
            workflow performance.
          </p>
        </div>

        <button className="primary-button">Create Service Order</button>
      </div>

      <div className="stats-grid">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <article className="stat-card" key={item.label}>
              <div className="stat-icon">
                <Icon size={22} />
              </div>
              <div>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </div>
            </article>
          );
        })}
      </div>

      <div className="dashboard-grid">
        <article className="panel">
          <div className="panel-title">
            <TrendingUp size={20} />
            <h3>Service Performance</h3>
          </div>
          <p>
            Average cycle time improved by 14% this month across active repair
            orders.
          </p>
        </article>

        <article className="panel">
          <div className="panel-title">
            <AlertCircle size={20} />
            <h3>Pending Attention</h3>
          </div>
          <p>
            9 service orders require advisor review before closing or customer
            approval.
          </p>
        </article>
      </div>
    </section>
  );
}