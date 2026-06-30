/* Header — sticky nav with logo mark + wordmark, links, apply CTA */
const Header = ({ scrolled = false }) => {
  const [isScrolled, setIsScrolled] = React.useState(scrolled);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['About', 'Portfolio', 'Programmes', 'Insights'];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: isScrolled ? 'rgba(245,239,230,0.96)' : '#F5EFE6',
      backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      borderBottom: isScrolled ? '1px solid #D4C4A8' : '1px solid transparent',
      transition: 'border-color 200ms ease, background 200ms ease',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 40px', height: '68px',
        display: 'flex', alignItems: 'center', gap: '48px',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
          <img src="../../assets/mark-ember.svg" alt="Vuka mark" style={{ width: '28px', height: '28px' }} />
          <span style={{
            fontFamily: 'Codec Pro, sans-serif', fontWeight: 900,
            fontSize: '29px', letterSpacing: '-0.03em', color: '#1A1008',
            lineHeight: 1, textTransform: 'lowercase',
          }}>
            vuka<span style={{ color: '#C4581C' }}>.</span>
          </span>
        </a>

        {/* Nav links */}
        <nav style={{ display: 'flex', gap: '32px', flex: 1 }}>
          {navLinks.map(link => (
            <a key={link} href="#" style={{
              fontFamily: 'Codec Pro, sans-serif', fontWeight: 300,
              fontSize: '18px', letterSpacing: '0.06em', color: '#8B5A2B',
              textDecoration: 'none', transition: 'color 150ms ease',
            }}
              onMouseEnter={e => e.target.style.color = '#1A1008'}
              onMouseLeave={e => e.target.style.color = '#8B5A2B'}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#" style={{
          fontFamily: 'Codec Pro, sans-serif', fontWeight: 700,
          fontSize: '18px', letterSpacing: '0.04em',
          background: '#C4581C', color: '#F5EFE6',
          padding: '9px 20px', borderRadius: '2px',
          textDecoration: 'none', whiteSpace: 'nowrap',
          transition: 'background 150ms ease',
          flexShrink: 0,
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#a8490f'}
          onMouseLeave={e => e.currentTarget.style.background = '#C4581C'}
        >
          Apply now
        </a>
      </div>
    </header>
  );
};

Object.assign(window, { Header });
