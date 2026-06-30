/* PortfolioCard + PortfolioGrid — company cards with sector tags */
const PORTFOLIO = [
  { name: 'Duka Digital', sector: 'Fintech', tag: 'sector', desc: 'Point-of-sale infrastructure for informal traders across East Africa.', country: 'Kenya' },
  { name: 'Sokoni', sector: 'Agritech', tag: 'sector', desc: 'Market connectivity platform for smallholder farmers and off-takers.', country: 'Tanzania' },
  { name: 'Jamii Health', sector: 'Healthtech', tag: 'sector', desc: 'Community health record systems for last-mile clinics.', country: 'Uganda' },
  { name: 'Barabara', sector: 'Logistics', tag: 'sector', desc: 'Last-mile delivery infrastructure for e-commerce and FMCG.', country: 'Kenya' },
  { name: 'Mwanga Energy', sector: 'Clean Energy', tag: 'climate', desc: 'Solar financing and asset management for SMEs and anchor institutions.', country: 'Rwanda' },
  { name: 'Akili', sector: 'Edtech', tag: 'sector', desc: 'Skills assessment and workforce development platform for employers.', country: 'Kenya' },
];

const PortfolioCard = ({ name, sector, tag, desc, country }) => {
  const tagStyles = {
    sector:  { background: '#C4581C', color: '#F5EFE6' },
    climate: { background: '#2A4A3A', color: '#D4C4A8' },
  };

  return (
    <div style={{
      background: '#F5EFE6', border: '1px solid #D4C4A8',
      borderRadius: '2px', padding: '28px',
      display: 'flex', flexDirection: 'column', gap: '16px',
      transition: 'box-shadow 200ms ease, border-color 200ms ease',
      cursor: 'pointer',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,16,8,0.10)';
        e.currentTarget.style.borderColor = '#8B5A2B';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = '#D4C4A8';
      }}
    >
      <span style={{
        display: 'inline-flex', alignItems: 'center',
        fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
        fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
        padding: '4px 10px', borderRadius: '2px',
        alignSelf: 'flex-start',
        ...(tagStyles[tag] || tagStyles.sector),
      }}>
        {sector}
      </span>

      <div>
        <div style={{
          fontFamily: 'Codec Pro, sans-serif', fontWeight: 800,
          fontSize: '29px', letterSpacing: '-0.02em', color: '#1A1008',
          lineHeight: 1.1, marginBottom: '10px',
        }}>
          {name}
        </div>
        <div style={{
          fontFamily: 'Codec Pro, sans-serif', fontWeight: 400,
          fontSize: '18px', lineHeight: 1.65, color: '#3D2B0E',
        }}>
          {desc}
        </div>
      </div>

      <div style={{
        fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
        fontSize: '11px', letterSpacing: '0.14em', color: '#8B5A2B',
        textTransform: 'uppercase', marginTop: 'auto', paddingTop: '8px',
        borderTop: '1px solid #D4C4A8',
      }}>
        {country}
      </div>
    </div>
  );
};

const PortfolioGrid = () => (
  <section style={{ background: '#F5EFE6', padding: '96px 0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-end', marginBottom: '52px',
      }}>
        <div>
          <div style={{
            fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
            fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase',
            color: '#8B5A2B', marginBottom: '14px',
          }}>
            Portfolio
          </div>
          <h2 style={{
            fontFamily: 'Codec Pro, sans-serif', fontWeight: 800,
            fontSize: '47px', letterSpacing: '-0.03em', color: '#1A1008',
            lineHeight: 1.05,
          }}>
            23 companies.<br />One region.
          </h2>
        </div>
        <a href="#" style={{
          fontFamily: 'Codec Pro, sans-serif', fontWeight: 400,
          fontSize: '18px', letterSpacing: '0.06em', color: '#8B5A2B',
          textDecoration: 'none', borderBottom: '1px solid #D4C4A8',
          paddingBottom: '2px', alignSelf: 'flex-end',
        }}>
          View all companies →
        </a>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }}>
        {PORTFOLIO.map(co => <PortfolioCard key={co.name} {...co} />)}
      </div>
    </div>
  </section>
);

Object.assign(window, { PortfolioCard, PortfolioGrid, PORTFOLIO });
