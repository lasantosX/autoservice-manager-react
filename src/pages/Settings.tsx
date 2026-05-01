export default function Settings() {
  return (
    <section className="page-section">
      <div className="page-header">
        <div>
          <p className="eyebrow">System Configuration</p>
          <h2>Settings</h2>
          <p>Configure service workflow options and application preferences.</p>
        </div>
      </div>

      <div className="settings-grid">
        <article className="panel">
          <h3>Service Rules</h3>
          <p>Require customer approval before closing high-value repair orders.</p>
          <span className="status-pill enabled">Enabled</span>
        </article>

        <article className="panel">
          <h3>Notifications</h3>
          <p>Notify advisors when repair orders are waiting for parts.</p>
          <span className="status-pill enabled">Enabled</span>
        </article>

        <article className="panel">
          <h3>Audit Tracking</h3>
          <p>Track created and modified dates for service workflow records.</p>
          <span className="status-pill">Standard</span>
        </article>
      </div>
    </section>
  );
}