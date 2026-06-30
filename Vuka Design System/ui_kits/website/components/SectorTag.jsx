/* SectorTag — Vuka colour-coded taxonomy tags */
const SectorTag = ({ variant = 'sector', children }) => {
  const variantStyles = {
    sector:     { background: '#C4581C', color: '#F5EFE6' },
    climate:    { background: '#2A4A3A', color: '#D4C4A8' },
    programme:  { background: '#1A1008', color: '#F5EFE6' },
    status:     { background: '#D4C4A8', color: '#8B5A2B' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontFamily: 'Codec Pro, sans-serif',
      fontSize: '10px', fontWeight: 300,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      padding: '4px 10px', borderRadius: '2px',
      whiteSpace: 'nowrap',
      ...(variantStyles[variant] || variantStyles.sector),
    }}>
      {children}
    </span>
  );
};

Object.assign(window, { SectorTag });
