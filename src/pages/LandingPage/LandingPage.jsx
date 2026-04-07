import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#0f0f0f', fontFamily: "'DM Sans', sans-serif", color: '#f0ece0' }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      <style>{`
        .lp-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .lp-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        .lp-hero-btns { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
        .lp-nav-btns { display: flex; gap: 8px; }
        @media (max-width: 600px) {
          .lp-grid-3 { grid-template-columns: 1fr; }
          .lp-grid-2 { grid-template-columns: 1fr; }
          .lp-hero h1 { font-size: 24px !important; }
          .lp-pricing { padding: 1.5rem !important; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ background: '#0f0f0f', borderBottom: '0.5px solid #2e2e2e', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: '600', color: '#f0ece0' }}>BarberSystem</div>
        <div className="lp-nav-btns">
          <button onClick={() => navigate('/login')} style={{ background: 'transparent', border: '0.5px solid #2e2e2e', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', color: '#888', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            Entrar
          </button>
          <button onClick={() => navigate('/login')} style={{ background: '#c9a84c', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', fontWeight: '500', color: '#0f0f0f', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            Contratar
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="lp-hero" style={{ padding: '4rem 1.5rem 3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <span style={{ background: '#1f1c13', border: '0.5px solid #4a3a18', borderRadius: '20px', padding: '5px 14px', fontSize: '12px', color: '#c9a84c' }}>
          Sistema de agendamento para barbearias
        </span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: '700', color: '#f0ece0', lineHeight: '1.2', margin: 0, maxWidth: '500px' }}>
          Chega de agendar pelo <span style={{ color: '#c9a84c' }}>WhatsApp</span>
        </h1>
        <p style={{ fontSize: '14px', color: '#666', maxWidth: '400px', lineHeight: '1.7', margin: 0, fontWeight: '300' }}>
          Seu cliente agenda online, você gerencia tudo num painel simples. Sem confusão, sem esquecimento.
        </p>
        <div className="lp-hero-btns">
          <button onClick={() => navigate('/login')} style={{ background: '#c9a84c', border: 'none', borderRadius: '8px', padding: '12px 24px', fontSize: '13px', fontWeight: '500', color: '#0f0f0f', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            Ver demonstração
          </button>
          <button style={{ background: 'transparent', border: '0.5px solid #2e2e2e', borderRadius: '8px', padding: '12px 24px', fontSize: '13px', color: '#888', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            Saiba mais
          </button>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '0.5px solid #2e2e2e', margin: 0 }} />

      {/* Problemas */}
      <div style={{ padding: '2.5rem 1.5rem' }}>
        <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: '500', textAlign: 'center' }}>Por que mudar?</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '600', color: '#f0ece0', textAlign: 'center', margin: '0 0 2rem' }}>
          Problemas que você <span style={{ color: '#c9a84c' }}>já conhece</span>
        </h2>
        <div className="lp-grid-3">
          {[
            { icon: '💬', title: 'Agendamento pelo WhatsApp', desc: 'Mensagens perdidas, horários duplicados e confusão na agenda.' },
            { icon: '📋', title: 'Controle manual', desc: 'Caderno ou planilha que qualquer um pode errar na hora de anotar.' },
            { icon: '❌', title: 'Faltas sem aviso', desc: 'Cliente some e você só descobre quando o barbeiro fica parado.' },
          ].map(p => (
            <div key={p.title} style={{ background: '#1a1a1a', border: '0.5px solid #2e2e2e', borderRadius: '10px', padding: '16px' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>{p.icon}</div>
              <div style={{ fontSize: '13px', fontWeight: '500', color: '#f0ece0', marginBottom: '6px' }}>{p.title}</div>
              <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.5', fontWeight: '300' }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '0.5px solid #2e2e2e', margin: 0 }} />

      {/* Funcionalidades */}
      <div style={{ padding: '2.5rem 1.5rem' }}>
        <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: '500', textAlign: 'center' }}>O que oferecemos</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '600', color: '#f0ece0', textAlign: 'center', margin: '0 0 2rem' }}>
          Tudo que sua barbearia <span style={{ color: '#c9a84c' }}>precisa</span>
        </h2>
        <div className="lp-grid-2">
          {[
            { title: 'Agendamento online', desc: 'Cliente escolhe barbeiro, serviço, data e horário direto pelo celular.' },
            { title: 'Painel do recepcionista', desc: 'Confirme ou cancele agendamentos e veja a agenda do dia em tempo real.' },
            { title: 'Painel do dono', desc: 'Acompanhe receita, salários, folgas e desempenho da equipe.' },
            { title: 'Personalizado pra você', desc: 'Logo, cores e nome da sua barbearia. Parece que foi feito só pra você.' },
          ].map(f => (
            <div key={f.title} style={{ background: '#1a1a1a', border: '0.5px solid #2e2e2e', borderRadius: '10px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c9a84c', flexShrink: 0, marginTop: '5px' }}></div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '500', color: '#f0ece0', marginBottom: '4px' }}>{f.title}</div>
                <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.5', fontWeight: '300' }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '0.5px solid #2e2e2e', margin: 0 }} />

      {/* Preços */}
      <div style={{ padding: '2.5rem 1.5rem' }}>
        <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: '500', textAlign: 'center' }}>Investimento</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '600', color: '#f0ece0', textAlign: 'center', margin: '0 0 2rem' }}>
          Simples e <span style={{ color: '#c9a84c' }}>acessível</span>
        </h2>
        <div className="lp-pricing" style={{ background: '#1a1a1a', border: '0.5px solid #c9a84c', borderRadius: '16px', padding: '2rem', maxWidth: '340px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ textAlign: 'center', paddingBottom: '1rem', borderBottom: '0.5px solid #2e2e2e' }}>
            <div style={{ fontSize: '32px', fontWeight: '500', color: '#c9a84c' }}>R$ 300</div>
            <div style={{ fontSize: '12px', color: '#666' }}>taxa de implantação única</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '26px', fontWeight: '500', color: '#f0ece0' }}>R$ 80<span style={{ fontSize: '14px', color: '#666' }}>/mês</span></div>
            <div style={{ fontSize: '12px', color: '#666' }}>por unidade</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              'Configuração completa do sistema',
              'Personalização com sua identidade',
              'Suporte e manutenção inclusos',
              'Atualizações sem custo extra',
              'Backup dos dados garantido',
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#888' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4caf7d', flexShrink: 0 }}></div>
                {item}
              </div>
            ))}
          </div>
          <button onClick={() => navigate('/login')} style={{ background: '#c9a84c', border: 'none', borderRadius: '8px', padding: '13px', fontSize: '14px', fontWeight: '500', color: '#0f0f0f', cursor: 'pointer', width: '100%', fontFamily: "'DM Sans', sans-serif" }}>
            Quero contratar
          </button>
        </div>
      </div>

      {/* CTA Final */}
      <div style={{ background: '#1a1a1a', borderTop: '0.5px solid #2e2e2e', padding: '3rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: '600', color: '#f0ece0', margin: 0 }}>
          Pronto pra modernizar sua barbearia?
        </h2>
        <p style={{ fontSize: '13px', color: '#666', margin: 0, fontWeight: '300' }}>
          Entre em contato e receba uma demonstração gratuita.
        </p>
        <a href="https://wa.me/5571982594652" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{ background: '#c9a84c', border: 'none', borderRadius: '8px', padding: '13px 28px', fontSize: '14px', fontWeight: '500', color: '#0f0f0f', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            Falar pelo WhatsApp
          </button>
        </a>
      </div>

    </div>
  )
}

export default LandingPage