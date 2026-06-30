/* @ds-bundle: {"format":3,"namespace":"VukaDesignSystem_f54dbc","components":[],"sourceHashes":{"ui_kits/website/components/Footer.jsx":"a200987d9ad6","ui_kits/website/components/Header.jsx":"39d397ba1e21","ui_kits/website/components/Hero.jsx":"06bfdd5c2c6e","ui_kits/website/components/PortfolioCard.jsx":"7cd1009b1e74","ui_kits/website/components/SectorTag.jsx":"de4c6fb8a948"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VukaDesignSystem_f54dbc = window.VukaDesignSystem_f54dbc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/components/Footer.jsx
try { (() => {
/* Footer — site footer with logo, links, contact */
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  style: {
    background: '#1A1008',
    padding: '72px 0 40px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: '80px',
    marginBottom: '64px',
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    flex: '0 0 auto',
    maxWidth: '280px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/mark-ember.svg",
  alt: "Vuka mark",
  style: {
    width: '28px',
    height: '28px'
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 900,
    fontSize: '29px',
    letterSpacing: '-0.03em',
    color: '#F5EFE6',
    lineHeight: 1,
    textTransform: 'lowercase'
  }
}, "vuka", /*#__PURE__*/React.createElement("span", {
  style: {
    color: '#C4581C'
  }
}, "."))), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 300,
    fontSize: '18px',
    lineHeight: 1.7,
    color: '#8B5A2B'
  }
}, "An East African venture studio that builds technology companies with founders, not for them.")), [{
  title: 'Studio',
  links: ['About', 'How we build', 'Team', 'Thesis']
}, {
  title: 'Programmes',
  links: ['Apply', 'Cohort 05', 'Alumni', 'Studio Build']
}, {
  title: 'Portfolio',
  links: ['All companies', 'Fintech', 'Agritech', 'Climate']
}].map(({
  title,
  links
}) => /*#__PURE__*/React.createElement("div", {
  key: title,
  style: {
    flex: '0 0 auto'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 300,
    fontSize: '11px',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#8B5A2B',
    marginBottom: '20px'
  }
}, title), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }
}, links.map(link => /*#__PURE__*/React.createElement("a", {
  key: link,
  href: "#",
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 300,
    fontSize: '18px',
    color: '#D4C4A8',
    textDecoration: 'none',
    transition: 'color 150ms ease'
  },
  onMouseEnter: e => e.target.style.color = '#F5EFE6',
  onMouseLeave: e => e.target.style.color = '#D4C4A8'
}, link))))), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: '0 0 auto',
    marginLeft: 'auto'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 300,
    fontSize: '11px',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#8B5A2B',
    marginBottom: '20px'
  }
}, "Contact"), /*#__PURE__*/React.createElement("a", {
  href: "mailto:hello@vuka.studio",
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 700,
    fontSize: '18px',
    color: '#F5EFE6',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px'
  }
}, "hello@vuka.studio"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 300,
    fontSize: '11px',
    color: '#8B5A2B',
    lineHeight: 1.6
  }
}, "Nairobi \xB7 Dar es Salaam", /*#__PURE__*/React.createElement("br", null), "Kigali \xB7 Kampala"))), /*#__PURE__*/React.createElement("div", {
  style: {
    borderTop: '1px solid rgba(139,90,43,0.3)',
    paddingTop: '28px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 300,
    fontSize: '11px',
    letterSpacing: '0.10em',
    color: '#8B5A2B'
  }
}, "\xA9 2026 Vuka Venture Studio. All rights reserved."), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 300,
    fontSize: '11px',
    letterSpacing: '0.10em',
    color: '#8B5A2B'
  }
}, "paulmandele.co"))));
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/Header.jsx
try { (() => {
/* Header — sticky nav with logo mark + wordmark, links, apply CTA */
const Header = ({
  scrolled = false
}) => {
  const [isScrolled, setIsScrolled] = React.useState(scrolled);
  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navLinks = ['About', 'Portfolio', 'Programmes', 'Insights'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: isScrolled ? 'rgba(245,239,230,0.96)' : '#F5EFE6',
      backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      borderBottom: isScrolled ? '1px solid #D4C4A8' : '1px solid transparent',
      transition: 'border-color 200ms ease, background 200ms ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px',
      height: '68px',
      display: 'flex',
      alignItems: 'center',
      gap: '48px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-ember.svg",
    alt: "Vuka mark",
    style: {
      width: '28px',
      height: '28px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Codec Pro, sans-serif',
      fontWeight: 900,
      fontSize: '29px',
      letterSpacing: '-0.03em',
      color: '#1A1008',
      lineHeight: 1,
      textTransform: 'lowercase'
    }
  }, "vuka", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C4581C'
    }
  }, "."))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '32px',
      flex: 1
    }
  }, navLinks.map(link => /*#__PURE__*/React.createElement("a", {
    key: link,
    href: "#",
    style: {
      fontFamily: 'Codec Pro, sans-serif',
      fontWeight: 300,
      fontSize: '18px',
      letterSpacing: '0.06em',
      color: '#8B5A2B',
      textDecoration: 'none',
      transition: 'color 150ms ease'
    },
    onMouseEnter: e => e.target.style.color = '#1A1008',
    onMouseLeave: e => e.target.style.color = '#8B5A2B'
  }, link))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'Codec Pro, sans-serif',
      fontWeight: 700,
      fontSize: '18px',
      letterSpacing: '0.04em',
      background: '#C4581C',
      color: '#F5EFE6',
      padding: '9px 20px',
      borderRadius: '2px',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'background 150ms ease',
      flexShrink: 0
    },
    onMouseEnter: e => e.currentTarget.style.background = '#a8490f',
    onMouseLeave: e => e.currentTarget.style.background = '#C4581C'
  }, "Apply now")));
};
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/Hero.jsx
try { (() => {
/* Hero — full-viewport hero section with headline, body, dual CTA */
const Hero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: '#F5EFE6',
    paddingTop: '148px',
    paddingBottom: '100px',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    width: '100%'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 300,
    fontSize: '11px',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#8B5A2B',
    marginBottom: '36px'
  }
}, "Venture Studio \xB7 East Africa"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 800,
    fontSize: 'clamp(76px, 9vw, 123px)',
    lineHeight: 1.0,
    letterSpacing: '-0.03em',
    color: '#1A1008',
    maxWidth: '820px',
    marginBottom: '36px',
    textWrap: 'balance'
  }
}, "We build technology companies with founders,", ' ', /*#__PURE__*/React.createElement("span", {
  style: {
    color: '#C4581C'
  }
}, "not for them.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: 1.7,
    color: '#3D2B0E',
    maxWidth: '520px',
    marginBottom: '52px'
  }
}, "Vuka is a venture studio that removes the infrastructure barriers that were never supposed to exist \u2014 and builds alongside the founders who are reshaping East Africa's economic future."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 700,
    fontSize: '18px',
    letterSpacing: '0.02em',
    background: '#C4581C',
    color: '#F5EFE6',
    padding: '14px 32px',
    borderRadius: '2px',
    textDecoration: 'none',
    transition: 'background 150ms ease'
  },
  onMouseEnter: e => e.currentTarget.style.background = '#a8490f',
  onMouseLeave: e => e.currentTarget.style.background = '#C4581C'
}, "Apply to Cohort 05"), /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 400,
    fontSize: '18px',
    letterSpacing: '0.04em',
    color: '#8B5A2B',
    textDecoration: 'none',
    borderBottom: '1px solid #D4C4A8',
    paddingBottom: '2px',
    transition: 'color 150ms ease, border-color 150ms ease'
  },
  onMouseEnter: e => {
    e.currentTarget.style.color = '#1A1008';
    e.currentTarget.style.borderColor = '#8B5A2B';
  },
  onMouseLeave: e => {
    e.currentTarget.style.color = '#8B5A2B';
    e.currentTarget.style.borderColor = '#D4C4A8';
  }
}, "Explore the portfolio \u2192")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: '64px',
    marginTop: '96px',
    paddingTop: '40px',
    borderTop: '1px solid #D4C4A8',
    flexWrap: 'wrap'
  }
}, [{
  num: '04',
  label: 'Cohorts completed'
}, {
  num: '23',
  label: 'Portfolio companies'
}, {
  num: '6',
  label: 'Countries'
}, {
  num: '$40M+',
  label: 'Capital mobilised'
}].map(({
  num,
  label
}) => /*#__PURE__*/React.createElement("div", {
  key: label
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 800,
    fontSize: '47px',
    letterSpacing: '-0.03em',
    color: '#1A1008',
    lineHeight: 1
  }
}, num), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 300,
    fontSize: '11px',
    letterSpacing: '0.12em',
    color: '#8B5A2B',
    marginTop: '6px',
    textTransform: 'uppercase'
  }
}, label))))));
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/PortfolioCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* PortfolioCard + PortfolioGrid — company cards with sector tags */
const PORTFOLIO = [{
  name: 'Duka Digital',
  sector: 'Fintech',
  tag: 'sector',
  desc: 'Point-of-sale infrastructure for informal traders across East Africa.',
  country: 'Kenya'
}, {
  name: 'Sokoni',
  sector: 'Agritech',
  tag: 'sector',
  desc: 'Market connectivity platform for smallholder farmers and off-takers.',
  country: 'Tanzania'
}, {
  name: 'Jamii Health',
  sector: 'Healthtech',
  tag: 'sector',
  desc: 'Community health record systems for last-mile clinics.',
  country: 'Uganda'
}, {
  name: 'Barabara',
  sector: 'Logistics',
  tag: 'sector',
  desc: 'Last-mile delivery infrastructure for e-commerce and FMCG.',
  country: 'Kenya'
}, {
  name: 'Mwanga Energy',
  sector: 'Clean Energy',
  tag: 'climate',
  desc: 'Solar financing and asset management for SMEs and anchor institutions.',
  country: 'Rwanda'
}, {
  name: 'Akili',
  sector: 'Edtech',
  tag: 'sector',
  desc: 'Skills assessment and workforce development platform for employers.',
  country: 'Kenya'
}];
const PortfolioCard = ({
  name,
  sector,
  tag,
  desc,
  country
}) => {
  const tagStyles = {
    sector: {
      background: '#C4581C',
      color: '#F5EFE6'
    },
    climate: {
      background: '#2A4A3A',
      color: '#D4C4A8'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F5EFE6',
      border: '1px solid #D4C4A8',
      borderRadius: '2px',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      transition: 'box-shadow 200ms ease, border-color 200ms ease',
      cursor: 'pointer'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,16,8,0.10)';
      e.currentTarget.style.borderColor = '#8B5A2B';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.borderColor = '#D4C4A8';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'Codec Pro, sans-serif',
      fontWeight: 300,
      fontSize: '11px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: '2px',
      alignSelf: 'flex-start',
      ...(tagStyles[tag] || tagStyles.sector)
    }
  }, sector), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Codec Pro, sans-serif',
      fontWeight: 800,
      fontSize: '29px',
      letterSpacing: '-0.02em',
      color: '#1A1008',
      lineHeight: 1.1,
      marginBottom: '10px'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Codec Pro, sans-serif',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: 1.65,
      color: '#3D2B0E'
    }
  }, desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Codec Pro, sans-serif',
      fontWeight: 300,
      fontSize: '11px',
      letterSpacing: '0.14em',
      color: '#8B5A2B',
      textTransform: 'uppercase',
      marginTop: 'auto',
      paddingTop: '8px',
      borderTop: '1px solid #D4C4A8'
    }
  }, country));
};
const PortfolioGrid = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: '#F5EFE6',
    padding: '96px 0'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '52px'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 300,
    fontSize: '11px',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#8B5A2B',
    marginBottom: '14px'
  }
}, "Portfolio"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 800,
    fontSize: '47px',
    letterSpacing: '-0.03em',
    color: '#1A1008',
    lineHeight: 1.05
  }
}, "23 companies.", /*#__PURE__*/React.createElement("br", null), "One region.")), /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    fontFamily: 'Codec Pro, sans-serif',
    fontWeight: 400,
    fontSize: '18px',
    letterSpacing: '0.06em',
    color: '#8B5A2B',
    textDecoration: 'none',
    borderBottom: '1px solid #D4C4A8',
    paddingBottom: '2px',
    alignSelf: 'flex-end'
  }
}, "View all companies \u2192")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px'
  }
}, PORTFOLIO.map(co => /*#__PURE__*/React.createElement(PortfolioCard, _extends({
  key: co.name
}, co))))));
Object.assign(window, {
  PortfolioCard,
  PortfolioGrid,
  PORTFOLIO
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/PortfolioCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/SectorTag.jsx
try { (() => {
/* SectorTag — Vuka colour-coded taxonomy tags */
const SectorTag = ({
  variant = 'sector',
  children
}) => {
  const variantStyles = {
    sector: {
      background: '#C4581C',
      color: '#F5EFE6'
    },
    climate: {
      background: '#2A4A3A',
      color: '#D4C4A8'
    },
    programme: {
      background: '#1A1008',
      color: '#F5EFE6'
    },
    status: {
      background: '#D4C4A8',
      color: '#8B5A2B'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'Codec Pro, sans-serif',
      fontSize: '10px',
      fontWeight: 300,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: '2px',
      whiteSpace: 'nowrap',
      ...(variantStyles[variant] || variantStyles.sector)
    }
  }, children);
};
Object.assign(window, {
  SectorTag
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/SectorTag.jsx", error: String((e && e.message) || e) }); }

})();
