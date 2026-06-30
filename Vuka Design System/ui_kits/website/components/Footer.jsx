/* Footer — site footer with logo, links, contact */
const Footer = () => (
  <footer style={{ background: '#1A1008', padding: '72px 0 40px' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
      {/* Top row */}
      <div style={{ display: 'flex', gap: '80px', marginBottom: '64px', flexWrap: 'wrap' }}>
        {/* Brand */}
        <div style={{ flex: '0 0 auto', maxWidth: '280px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <img src="../../assets/mark-ember.svg" alt="Vuka mark" style={{ width: '28px', height: '28px' }} />
            <span style={{
              fontFamily: 'Codec Pro, sans-serif', fontWeight: 900,
              fontSize: '29px', letterSpacing: '-0.03em', color: '#F5EFE6',
              lineHeight: 1, textTransform: 'lowercase',
            }}>
              vuka<span style={{ color: '#C4581C' }}>.</span>
            </span>
          </div>
          <p style={{
            fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
            fontSize: '18px', lineHeight: 1.7, color: '#8B5A2B',
          }}>
            An East African venture studio that builds technology companies
            with founders, not for them.
          </p>
        </div>

        {/* Links */}
        {[
          { title: 'Studio', links: ['About', 'How we build', 'Team', 'Thesis'] },
          { title: 'Programmes', links: ['Apply', 'Cohort 05', 'Alumni', 'Studio Build'] },
          { title: 'Portfolio', links: ['All companies', 'Fintech', 'Agritech', 'Climate'] },
        ].map(({ title, links }) => (
          <div key={title} style={{ flex: '0 0 auto' }}>
            <div style={{
              fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
              fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#8B5A2B', marginBottom: '20px',
            }}>
              {title}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {links.map(link => (
                <a key={link} href="#" style={{
                  fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
                  fontSize: '18px', color: '#D4C4A8', textDecoration: 'none',
                  transition: 'color 150ms ease',
                }}
                  onMouseEnter={e => e.target.style.color = '#F5EFE6'}
                  onMouseLeave={e => e.target.style.color = '#D4C4A8'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Contact */}
        <div style={{ flex: '0 0 auto', marginLeft: 'auto' }}>
          <div style={{
            fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
            fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase',
            color: '#8B5A2B', marginBottom: '20px',
          }}>
            Contact
          </div>
          <a href="mailto:hello@vuka.studio" style={{
            fontFamily: 'Codec Pro, sans-serif', fontWeight: 700,
            fontSize: '18px', color: '#F5EFE6', textDecoration: 'none',
            display: 'block', marginBottom: '8px',
          }}>
            hello@vuka.studio
          </a>
          <div style={{
            fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
            fontSize: '11px', color: '#8B5A2B', lineHeight: 1.6,
          }}>
            Nairobi · Dar es Salaam<br />Kigali · Kampala
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{
        borderTop: '1px solid rgba(139,90,43,0.3)',
        paddingTop: '28px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '12px',
      }}>
        <div style={{
          fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
          fontSize: '11px', letterSpacing: '0.10em', color: '#8B5A2B',
        }}>
          © 2026 Vuka Venture Studio. All rights reserved.
        </div>
        <div style={{
          fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
          fontSize: '11px', letterSpacing: '0.10em', color: '#8B5A2B',
        }}>
          paulmandele.co
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
