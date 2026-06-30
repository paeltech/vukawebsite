/* Hero — full-viewport hero section with headline, body, dual CTA */
const Hero = () => (
  <section style={{
    background: '#F5EFE6', paddingTop: '148px', paddingBottom: '100px',
    minHeight: '100vh', display: 'flex', alignItems: 'center',
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', width: '100%' }}>
      {/* Category label */}
      <div style={{
        fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
        fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase',
        color: '#8B5A2B', marginBottom: '36px',
      }}>
        Venture Studio · East Africa
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: 'Codec Pro, sans-serif', fontWeight: 800,
        fontSize: 'clamp(76px, 9vw, 123px)', lineHeight: 1.0,
        letterSpacing: '-0.03em', color: '#1A1008',
        maxWidth: '820px', marginBottom: '36px',
        textWrap: 'balance',
      }}>
        We build technology companies with founders,{' '}
        <span style={{ color: '#C4581C' }}>not for them.</span>
      </h1>

      {/* Body */}
      <p style={{
        fontFamily: 'Codec Pro, sans-serif', fontWeight: 400,
        fontSize: '18px', lineHeight: 1.7, color: '#3D2B0E',
        maxWidth: '520px', marginBottom: '52px',
      }}>
        Vuka is a venture studio that removes the infrastructure barriers
        that were never supposed to exist — and builds alongside the founders
        who are reshaping East Africa's economic future.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="#" style={{
          fontFamily: 'Codec Pro, sans-serif', fontWeight: 700,
          fontSize: '18px', letterSpacing: '0.02em',
          background: '#C4581C', color: '#F5EFE6',
          padding: '14px 32px', borderRadius: '2px',
          textDecoration: 'none',
          transition: 'background 150ms ease',
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#a8490f'}
          onMouseLeave={e => e.currentTarget.style.background = '#C4581C'}
        >
          Apply to Cohort 05
        </a>
        <a href="#" style={{
          fontFamily: 'Codec Pro, sans-serif', fontWeight: 400,
          fontSize: '18px', letterSpacing: '0.04em',
          color: '#8B5A2B', textDecoration: 'none',
          borderBottom: '1px solid #D4C4A8',
          paddingBottom: '2px',
          transition: 'color 150ms ease, border-color 150ms ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.color = '#1A1008'; e.currentTarget.style.borderColor = '#8B5A2B'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#8B5A2B'; e.currentTarget.style.borderColor = '#D4C4A8'; }}
        >
          Explore the portfolio →
        </a>
      </div>

      {/* Stat strip */}
      <div style={{
        display: 'flex', gap: '64px', marginTop: '96px',
        paddingTop: '40px', borderTop: '1px solid #D4C4A8',
        flexWrap: 'wrap',
      }}>
        {[
          { num: '04', label: 'Cohorts completed' },
          { num: '23', label: 'Portfolio companies' },
          { num: '6', label: 'Countries' },
          { num: '$40M+', label: 'Capital mobilised' },
        ].map(({ num, label }) => (
          <div key={label}>
            <div style={{
              fontFamily: 'Codec Pro, sans-serif', fontWeight: 800,
              fontSize: '47px', letterSpacing: '-0.03em', color: '#1A1008',
              lineHeight: 1,
            }}>
              {num}
            </div>
            <div style={{
              fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
              fontSize: '11px', letterSpacing: '0.12em', color: '#8B5A2B',
              marginTop: '6px', textTransform: 'uppercase',
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { Hero });
