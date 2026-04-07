import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const agendamentosIniciais = [
  { id: 1, hora: '09:00', cliente: 'João Silva', servico: 'Corte', barbeiro: 'Carlos', status: 'confirmado' },
  { id: 2, hora: '10:00', cliente: 'Rafael Souza', servico: 'Barba', barbeiro: 'Marcos', status: 'pendente' },
  { id: 3, hora: '11:00', cliente: 'Lucas Pereira', servico: 'Combo', barbeiro: 'Pedro', status: 'cancelado' },
  { id: 4, hora: '14:00', cliente: 'Marcos Lima', servico: 'Corte', barbeiro: 'Carlos', status: 'confirmado' },
  { id: 5, hora: '15:00', cliente: 'Felipe Costa', servico: 'Combo', barbeiro: 'Pedro', status: 'confirmado' },
]

const equipe = [
  { nome: 'Carlos', iniciais: 'CA', salario: 'R$ 2.200', folga: '12/04', atendimentos: 18 },
  { nome: 'Marcos', iniciais: 'MA', salario: 'R$ 1.900', folga: '15/04', atendimentos: 14 },
  { nome: 'Pedro', iniciais: 'PE', salario: 'R$ 2.500', folga: '18/04', atendimentos: 21 },
]

function PainelAdmin() {
  const [agendamentos] = useState(agendamentosIniciais)
  const navigate = useNavigate()

  const badgeStyle = (status) => {
    if (status === 'confirmado') return { background: '#0f2e1a', color: '#4caf7d', border: '0.5px solid #1a4a2a' }
    if (status === 'pendente') return { background: '#2e2410', color: '#c9a84c', border: '0.5px solid #4a3a18' }
    return { background: '#2e1010', color: '#e05555', border: '0.5px solid #4a1818' }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f0f', fontFamily: "'DM Sans', sans-serif", color: '#f0ece0' }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      <style>
        {`
          @media (max-width: 768px) {
            .header-admin {
              padding: 1rem !important;
              flex-direction: column !important;
              gap: 0.5rem !important;
              align-items: flex-start !important;
            }
            .header-title {
              font-size: 16px !important;
            }
            .header-subtitle {
              font-size: 11px !important;
            }
            .btn-sair {
              align-self: flex-end !important;
              padding: 4px 10px !important;
              font-size: 11px !important;
            }
            .container-admin {
              padding: 1rem !important;
            }
            .grid-financeiro {
              grid-template-columns: 1fr !important;
            }
            .grid-equipe {
              grid-template-columns: 1fr !important;
            }
            .card-equipe {
              flex-direction: row !important;
              align-items: center !important;
            }
            .equipe-info {
              flex: 1 !important;
            }
            .equipe-details {
              display: none !important;
            }
            .agendamento-item {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 8px !important;
            }
            .hora-agendamento {
              min-width: auto !important;
              align-self: flex-start !important;
            }
            .status-badge {
              align-self: flex-end !important;
            }
          }
        `}
      </style>

      {/* Header */}
      <div className="header-admin" style={{ background: '#1a1a1a', borderBottom: '0.5px solid #2e2e2e', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 className="header-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: '600', color: '#f0ece0', margin: '0 0 2px' }}>BarberSystem</h1>
          <span className="header-subtitle" style={{ fontSize: '12px', color: '#666' }}>Painel do Admin</span>
        </div>
        <button className="btn-sair" onClick={() => navigate('/')} style={{ background: 'transparent', border: '0.5px solid #2e2e2e', borderRadius: '8px', padding: '6px 14px', fontSize: '12px', color: '#888', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
          Sair
        </button>
      </div>

      <div className="container-admin" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        {/* Financeiro */}
        <div>
          <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: '500' }}>Financeiro</p>
          <div className="grid-financeiro" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '10px' }}>
            {[{ num: 'R$ 4.280', label: 'Receita total' }, { num: 'R$ 1.120', label: 'Receita do mês' }].map(s => (
              <div key={s.label} style={{ background: '#1a1a1a', border: '0.5px solid #2e2e2e', borderRadius: '10px', padding: '14px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: '500', color: '#c9a84c', marginBottom: '4px' }}>{s.num}</div>
                <div style={{ fontSize: '11px', color: '#666' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid-financeiro" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {[{ num: 'R$ 42', label: 'Ticket médio' }, { num: 'Combo', label: 'Serviço mais vendido' }].map(s => (
              <div key={s.label} style={{ background: '#1a1a1a', border: '0.5px solid #2e2e2e', borderRadius: '10px', padding: '14px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: '500', color: '#c9a84c', marginBottom: '4px' }}>{s.num}</div>
                <div style={{ fontSize: '11px', color: '#666' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '0.5px solid #2e2e2e', margin: 0 }} />

        {/* Equipe */}
        <div>
          <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: '500' }}>Equipe</p>
          <div className="grid-equipe" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {equipe.map(b => (
              <div className="card-equipe" key={b.nome} style={{ background: '#1a1a1a', border: '0.5px solid #2e2e2e', borderRadius: '10px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#c9a84c22', border: '0.5px solid #c9a84c55', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '500', color: '#c9a84c', flexShrink: 0 }}>
                    {b.iniciais}
                  </div>
                  <div className="equipe-info">
                    <div style={{ fontSize: '13px', fontWeight: '500', color: '#f0ece0' }}>{b.nome}</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>{b.atendimentos} atend. no mês</div>
                  </div>
                </div>
                <div className="equipe-details" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: '#666' }}>Salário</span>
                    <span style={{ color: '#f0ece0' }}>{b.salario}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', alignItems: 'center' }}>
                    <span style={{ color: '#666' }}>Folga</span>
                    <span style={{ background: '#1f1c13', border: '0.5px solid #4a3a18', borderRadius: '6px', padding: '3px 8px', fontSize: '11px', color: '#c9a84c' }}>{b.folga}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '0.5px solid #2e2e2e', margin: 0 }} />

        {/* Agendamentos */}
        <div>
          <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: '500' }}>Agendamentos de hoje</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {agendamentos.map(a => (
              <div className="agendamento-item" key={a.id} style={{ background: '#1a1a1a', border: '0.5px solid #2e2e2e', borderRadius: '10px', padding: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="hora-agendamento" style={{ fontSize: '15px', fontWeight: '500', color: '#c9a84c', minWidth: '48px' }}>{a.hora}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', color: '#f0ece0', fontWeight: '500', marginBottom: '3px' }}>{a.cliente}</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>{a.servico} · {a.barbeiro}</div>
                </div>
                <span className="status-badge" style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: '500', ...badgeStyle(a.status) }}>
                  {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default PainelAdmin