import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import styles from './dashboard.module.css'
import { logout } from '../login/actions'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch Strategy Calls
  const { data: strategyCalls } = await supabase
    .from('strategy_calls')
    .select('id, created_at, name, company, status')
    .order('created_at', { ascending: false })
    .limit(5);

  const { count: strategyCallsCount } = await supabase
    .from('strategy_calls')
    .select('*', { count: 'exact', head: true });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Founder Console</h1>
        <form action={logout}>
          <button className="btn btn-ghost" type="submit">Sign Out</button>
        </form>
      </header>

      {/* Business Snapshot */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Business Snapshot</h2>
        </div>
        <div className={styles.gridOverview}>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Strategy Calls</span>
            <span className={styles.cardValue}>{strategyCallsCount || 0}</span>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Subscribers</span>
            <span className={styles.cardValue}>--</span>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Contact Messages</span>
            <span className={styles.cardValue}>--</span>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Visitors (Today)</span>
            <span className={styles.cardValue}>--</span>
          </div>
        </div>
      </section>

      {/* Recent Strategy Calls */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Recent Strategy Calls</h2>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Company</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {!strategyCalls || strategyCalls.length === 0 ? (
                <tr>
                  <td colSpan={4} className={styles.emptyState}>No strategy calls yet.</td>
                </tr>
              ) : (
                strategyCalls.map((call) => (
                  <tr key={call.id}>
                    <td>{new Date(call.created_at).toLocaleDateString()}</td>
                    <td>{call.name}</td>
                    <td>{call.company || '-'}</td>
                    <td>
                      <span className={call.status === 'new' ? styles.badgeSuccess : styles.badgePending}>
                        {call.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recent Subscribers */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Recent Subscribers</h2>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Email</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} className={styles.emptyState}>No subscribers yet.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Recent Contact Messages */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Recent Messages</h2>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} className={styles.emptyState}>No messages yet.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Actions & System Status Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' }}>
        
        {/* Quick Actions */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Quick Actions</h2>
          </div>
          <div className={styles.gridQuickActions}>
            <Link href="/" target="_blank" className={styles.actionButton}>
              View Website
            </Link>
            <button className={styles.actionButton}>
              Google Analytics
            </button>
            <button className={styles.actionButton}>
              Microsoft Clarity
            </button>
            <button className={styles.actionButton}>
              Export Leads
            </button>
          </div>
        </section>

        {/* System Status */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>System Status</h2>
          </div>
          <div className={styles.gridSystemStatus}>
            <div className={styles.card}>
              <span className={styles.cardTitle}>Authentication</span>
              <span className={styles.badgeSuccess} style={{ width: 'fit-content', marginTop: '0.25rem' }}>Operational</span>
            </div>
            <div className={styles.card}>
              <span className={styles.cardTitle}>Database</span>
              <span className={styles.badgeSuccess} style={{ width: 'fit-content', marginTop: '0.25rem' }}>Operational</span>
            </div>
            <div className={styles.card}>
              <span className={styles.cardTitle}>Analytics</span>
              <span className={styles.badgePending} style={{ width: 'fit-content', marginTop: '0.25rem' }}>Pending</span>
            </div>
          </div>
        </section>

      </div>

    </div>
  )
}
