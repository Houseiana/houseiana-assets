"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ══════════════════════════════════════
   BRAND
══════════════════════════════════════ */
const Y  = "#FCC519";
const DC = "#1D242B";
const GW = "#F9F9FA";
const WB = "#D4A373";

/* ══════════════════════════════════════
   CONTACT
══════════════════════════════════════ */
const PHONE   = "+201036425474";
const WA_NUM  = "201036425474";
const EMAIL   = "assets@houseiana.com";
const SOCIAL  = [
  { name: "Facebook",  url: "https://www.facebook.com/profile.php?id=61583585009921",  color: "#1877F2" },
  { name: "Instagram", url: "https://www.instagram.com/houseiana_assets_management/",  color: "#E1306C" },
  { name: "TikTok",    url: "https://www.tiktok.com/@houseiana.assets",                color: "#fff"    },
];

function wa(msg = "مرحباً، أود الاستفسار عن خدمات إدارة الأصول العقارية في هاوسيانا.") {
  window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`, "_blank");
}
function waPkg(name: string) {
  wa(`مرحباً، أريد الاشتراك في ${name} لإدارة عقاري عبر هاوسيانا.`);
}

/* ══════════════════════════════════════
   H LOGO SVG
══════════════════════════════════════ */
function HMark({ size = 36, fill = Y }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={Math.round(size * 1.75)} viewBox="0 0 100 175" fill="none">
      <path fill={fill} fillRule="evenodd"
        d="M 20,0 L 80,0 L 100,35 L 100,140 L 80,175 L 20,175 L 0,140 L 0,35 Z
           M 29,0 L 71,0 L 67,68 Q 50,84 33,68 Z
           M 29,175 L 29,111 Q 50,93 71,111 L 71,175 Z" />
    </svg>
  );
}

function Logo({ size = 32 }: { size?: number }) {
  const height = Math.round(size * 2.2);
  const width  = Math.round(height * 3.5);
  return (
    <Image
      src="/logo.jpg"
      alt="Houseiana"
      width={width}
      height={height}
      style={{ objectFit: "contain" }}
      priority
    />
  );
}

/* ══════════════════════════════════════
   SOCIAL ICONS
══════════════════════════════════════ */
function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}
function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}
function TkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.73a4.85 4.85 0 01-1.01-.04z"/>
    </svg>
  );
}
function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
interface Package {
  id: string;
  name: string;
  price: string;
  unit: string;
  extra: string | null;
  pill: string;
  accent: boolean;
  items: string[];
}

const PKG: Package[] = [
  {
    id: "std", name: "باقة الأعمال", price: "50", unit: "/شهر", extra: null,
    pill: "للبداية الواضحة", accent: false,
    items: ["إدراج العقار على منصة هاوسيانا","إدراج لدى وكلاء السفر والسياحة","٤ زيارات شهرية لمتابعة الحالة","تقرير أسبوعي بالصور عبر واتساب","متابعة المرافق والصيانة","إدارة المشتريات وعروض الأسعار"],
  },
  {
    id: "inv", name: "باقة المستثمر", price: "85", unit: "/شهر", extra: null,
    pill: "الأكثر اختياراً", accent: true,
    items: ["كل ما في باقة الأعمال","جرد المحتويات وتكويدها","تسجيل العقار كمنزل عطلات","إعداد الوحدة لاستقبال الضيوف","إدارة الحجز والتواصل مع الضيوف","خدمة التحصيل عبر روابط الدفع","حساب ROI وتسعير ديناميكي"],
  },
  {
    id: "sup", name: "سوبر مستثمر", price: "200", unit: "/شهر", extra: null,
    pill: "الأشمل", accent: false,
    items: ["كل ما في باقة المستثمر","مراقبة أداء شهرية عبر KPIs","براندينج وتصوير احترافي","تسويق عبر قنوات الشركة","أولوية الظهور في البحث","دعم فني وتشغيلي ٢٤/٧","مدير حساب مخصص"],
  },
];

type CmpRow = [string, boolean, boolean, boolean];

const CMP: CmpRow[] = [
  ["إدراج على المنصات",          true,  true,  true ],
  ["تقارير أسبوعية بالصور",      true,  true,  true ],
  ["متابعة المرافق والصيانة",     true,  true,  true ],
  ["جرد وتكويد المحتويات",       false, true,  true ],
  ["إدارة الحجز والضيوف",        false, true,  true ],
  ["ROI وتسعير ديناميكي",       false, true,  true ],
  ["KPIs وتقارير شهرية",        false, false, true ],
  ["براندينج وتسويق خاص",        false, false, true ],
  ["مدير حساب مخصص",             false, false, true ],
];

interface Step {
  n: string;
  t: string;
  d: string;
}

const STEPS: Step[] = [
  { n:"١", t:"شارك بيانات العقار",  d:"نوع الوحدة، الموقع، وحالة التشغيل الحالية." },
  { n:"٢", t:"نحدد الباقة الأنسب", d:"نقترح مستوى الإدارة بحسب هدفك وجاهزية العقار." },
  { n:"٣", t:"نبدأ التنفيذ فوراً",  d:"متابعة فعلية أو تشغيل كامل — بخطوات واضحة." },
];

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  { q:"هل الباقات مناسبة لوحدة واحدة فقط؟",    a:"نعم، ويمكن تكييف التنفيذ للمالكين الذين يديرون أكثر من وحدة حسب حجم التشغيل." },
  { q:"متى تبدأ إدارة الضيوف والتشغيل الكامل؟", a:"إدارة الضيوف تبدأ من باقة المستثمر. باقة الأعمال تركز على المتابعة وجاهزية الأصل." },
  { q:"هل توجد تكاليف إضافية؟",                 a:"بعض البنود كرسوم التسجيل أو الصيانة قد تُحتسب منفصلاً حسب حالة العقار." },
  { q:"ماذا يحدث إذا كان العقار غير مؤجّر؟",   a:"نبدأ بتقييم الجاهزية وتهيئة الوحدة، ثم ننتقل لمرحلة الإدراج والتشغيل بالتسلسل المناسب." },
];

interface NavItem {
  label: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label:"الباقات",   id:"packages"   },
  { label:"المقارنة",  id:"comparison" },
  { label:"كيف نعمل", id:"how"        },
  { label:"الأسئلة",   id:"faq"        },
  { label:"عن الشركة", id:"about"      },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior:"smooth", block:"start" });
}

/* ══════════════════════════════════════
   ATOMS
══════════════════════════════════════ */
function CheckFill() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill={Y}/>
      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke={DC} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CrossLine({ dark }: { dark?: boolean }) {
  const c = dark ? "rgba(29,36,43,.18)" : "rgba(255,255,255,.14)";
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8.5" stroke={c}/>
      <path d="M6.5 6.5l5 5M11.5 6.5l-5 5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function FAQRow({ q, a }: FAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(o => !o)} style={{ cursor:"pointer", borderBottom:"1px solid rgba(29,36,43,.1)" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 0", gap:16 }}>
        <span style={{ fontSize:15, fontWeight:500, color:DC, lineHeight:1.5 }}>{q}</span>
        <div style={{
          width:28, height:28, borderRadius:"50%", flexShrink:0,
          background: open ? Y : "transparent",
          border:`1.5px solid ${open ? Y : "rgba(29,36,43,.2)"}`,
          display:"flex", alignItems:"center", justifyContent:"center", transition:"all .18s",
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10"
            style={{ transform: open ? "rotate(45deg)" : "none", transition:"transform .18s" }}>
            <path d="M5 1v8M1 5h8" stroke={DC} strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <div style={{ overflow:"hidden", maxHeight: open ? 200 : 0, transition:"max-height .25s ease" }}>
        <p style={{ fontSize:14, color:"#6B7280", lineHeight:1.85, paddingBottom:18, margin:0 }}>{a}</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   PAGE
══════════════════════════════════════ */
export default function HouseianaMgmt() {
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen,      setMenuOpen]      = useState(false);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      let cur = "";
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) cur = id;
      });
      setActiveSection(cur);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function navGo(id: string) {
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 10);
  }

  const MAX: React.CSSProperties = { maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,64px)" };

  return (
    <div dir="rtl" style={{ fontFamily:"'Readex Pro','Cairo',sans-serif", background:GW, color:DC, minHeight:"100vh", overflowX:"hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        button { cursor:pointer; font-family:inherit; }
        a { text-decoration:none; }

        /* ── BUTTONS ── */
        .btn-y { border:none; font-family:inherit; border-radius:40px; font-weight:700; transition:opacity .15s; cursor:pointer; }
        .btn-y:hover { opacity:.86; }
        .pkg:hover { transform:translateY(-5px); }
        .pkg { transition:transform .22s; overflow:hidden; position:relative; }

        /* ── NAV ── */
        .nav-link { font-size:13px; transition:color .15s; cursor:pointer; padding-bottom:2px; }
        .nav-link:hover { color:${Y} !important; }

        /* ── MOBILE MENU ── */
        .mob-menu {
          position:fixed; inset:0; top:62px; z-index:190;
          background:rgba(29,36,43,.99); backdrop-filter:blur(16px);
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          gap:32px; padding:40px 24px;
          transition:opacity .22s, transform .22s;
        }
        .mob-menu.closed { opacity:0; transform:translateY(-12px); pointer-events:none; }
        .mob-menu.open   { opacity:1; transform:translateY(0); }
        .mob-nav-link { font-size:22px; font-weight:600; color:rgba(249,249,250,.6);
          cursor:pointer; transition:color .15s; padding:8px 0; }
        .mob-nav-link:hover { color:${Y}; }

        /* ── SECTIONS ── */
        #packages, #comparison, #how, #faq, #about { scroll-margin-top:62px; }

        /* ── LAYOUT BREAKPOINTS ── */
        @media (max-width:900px) {
          .hero-grid   { grid-template-columns:1fr !important; }
          .pkg-grid    { grid-template-columns:1fr !important; gap:16px !important; }
          .step-grid   { grid-template-columns:1fr !important; }
          .step-grid > div { border-left:none !important; border-top:1px solid rgba(29,36,43,.1); }
          .step-grid > div:first-child { border-top:none; }
          .faq-grid    { grid-template-columns:1fr !important; gap:32px !important; }
          .faq-sticky  { position:static !important; }
          .cmp-wrap    { overflow-x:auto; -webkit-overflow-scrolling:touch; }
          .cmp-inner   { min-width:520px; }
          .hide-sm     { display:none !important; }
          .hero-stats  { padding-top:24px !important; margin-top:32px !important; }
          .hero-h1     { font-size:clamp(28px,8vw,42px) !important; }
          .section-pad { padding:52px 0 !important; }
          .pkg-pad     { padding:52px 0 60px !important; }
        }

        @media (max-width:480px) {
          .hero-btns   { flex-direction:column !important; }
          .hero-btns button { width:100% !important; }
          .footer-cols { flex-direction:column !important; gap:32px !important; }
          .footer-social { justify-content:center !important; }
          .cmp-inner   { min-width:460px; }
        }

        /* ── WA PULSE ── */
        @keyframes waPulse {
          0%,100% { box-shadow:0 4px 20px rgba(37,211,102,.45); }
          50%      { box-shadow:0 4px 36px rgba(37,211,102,.75); }
        }

        /* ── SOCIAL HOVER ── */
        .social-btn { transition:opacity .15s, transform .15s; }
        .social-btn:hover { opacity:.8; transform:scale(1.1); }
      `}</style>

      {/* ══ NAV ══ */}
      <nav style={{
        position:"sticky", top:0, zIndex:200,
        background: scrolled || menuOpen ? "rgba(29,36,43,.97)" : DC,
        backdropFilter:"blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.06)" : "none",
        transition:"border-color .2s, background .2s",
      }}>
        <div style={{ ...MAX, height:62, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <Logo size={30}/>

          {/* Desktop links */}
          <div className="hide-sm" style={{ display:"flex", gap:28 }}>
            {NAV_ITEMS.map(({ label, id }) => (
              <span key={id} className="nav-link" onClick={() => navGo(id)} style={{
                color: activeSection === id ? Y : "rgba(249,249,250,.4)",
                borderBottom: activeSection === id ? `1px solid ${Y}` : "1px solid transparent",
              }}>{label}</span>
            ))}
          </div>

          <div style={{ display:"flex", gap:10, alignItems:"center" }}>
            <button className="btn-y hide-sm" style={{ background:Y, color:DC, fontSize:13, padding:"9px 22px" }}
              onClick={() => navGo("packages")}>
              ابدأ الآن
            </button>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(o => !o)} style={{
              display:"none", background:"transparent", border:"none",
              cursor:"pointer", padding:8, color:GW,
            }} className="show-sm">
              {menuOpen
                ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6"/></svg>
                : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mob-menu ${menuOpen ? "open" : "closed"}`}>
        {NAV_ITEMS.map(({ label, id }) => (
          <span key={id} className="mob-nav-link"
            style={{ color: activeSection === id ? Y : "rgba(249,249,250,.6)" }}
            onClick={() => navGo(id)}>{label}</span>
        ))}
        <button className="btn-y" style={{ background:Y, color:DC, fontSize:15, padding:"14px 40px", marginTop:8 }}
          onClick={() => { setMenuOpen(false); wa(); }}>
          <span style={{ display:"flex", alignItems:"center", gap:8 }}>
            <WaIcon size={18}/> تواصل معنا
          </span>
        </button>
        <div style={{ display:"flex", gap:16, marginTop:8 }}>
          {SOCIAL.map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
              style={{ color:"rgba(249,249,250,.5)", display:"flex", alignItems:"center", justifyContent:"center",
                width:40, height:40, borderRadius:"50%", background:"rgba(255,255,255,.07)" }}>
              {s.name === "Facebook" ? <FbIcon/> : s.name === "Instagram" ? <IgIcon/> : <TkIcon/>}
            </a>
          ))}
        </div>
      </div>

      {/* ══ HERO ══ */}
      <section style={{ background:DC, padding:"84px 0 76px", position:"relative", overflow:"hidden" }}>
        {[{l:"-2%",t:"8%",s:130,r:0},{l:"12%",t:"55%",s:80,r:14},{l:"72%",t:"-6%",s:180,r:-10},{l:"84%",t:"52%",s:110,r:18},{l:"46%",t:"15%",s:60,r:5}]
          .map((p, i) => (
          <div key={i} style={{ position:"absolute", left:p.l, top:p.t, opacity:.035,
            transform:`rotate(${p.r}deg)`, pointerEvents:"none" }}>
            <HMark size={p.s}/>
          </div>
        ))}
        <div style={{ position:"absolute", top:0, right:"39%", width:1, height:"100%",
          background:"linear-gradient(to bottom,transparent,rgba(252,197,25,.1),transparent)",
          pointerEvents:"none" }}/>

        <div style={MAX}>
          <div className="hero-grid" style={{ display:"grid", gridTemplateColumns:"1fr 360px", gap:56, alignItems:"center" }}>
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:10, marginBottom:24,
                background:"rgba(252,197,25,.1)", border:"1px solid rgba(252,197,25,.2)",
                borderRadius:40, padding:"6px 16px" }}>
                <div style={{ width:6, height:6, borderRadius:"50%", background:Y }}/>
                <span style={{ fontSize:11, color:Y, fontWeight:600, letterSpacing:".18em" }}>ASSET MANAGEMENT</span>
              </div>

              <h1 className="hero-h1" style={{ fontSize:"clamp(32px,4.5vw,58px)", fontWeight:700, color:GW,
                lineHeight:1.1, letterSpacing:"-0.03em", marginBottom:20 }}>
                إدارة أصولك العقارية<br/>
                <span style={{ color:Y }}>بوضوح وراحة بال.</span>
              </h1>

              <p style={{ fontSize:16, color:"rgba(249,249,250,.48)", lineHeight:1.9,
                maxWidth:480, marginBottom:36, fontWeight:300 }}>
                ثلاث باقات مصممة لتحافظ على قيمة عقارك وتزيد جاهزيته التشغيلية —
                دون أن تتحمّل عبء المتابعة اليومية.
              </p>

              <div className="hero-btns" style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <button className="btn-y" style={{ background:Y, color:DC, fontSize:14, padding:"14px 30px" }}
                  onClick={() => navGo("packages")}>
                  استعرض الباقات
                </button>
                <button style={{ background:"#25D366", color:"#fff", border:"none",
                  fontSize:14, padding:"14px 24px", borderRadius:40, fontFamily:"inherit",
                  cursor:"pointer", fontWeight:600, display:"flex", alignItems:"center", gap:8 }}
                  onClick={() => wa()}>
                  <WaIcon size={18}/> واتساب
                </button>
              </div>

              <div className="hero-stats" style={{ display:"flex", marginTop:44, paddingTop:28,
                borderTop:"1px solid rgba(255,255,255,.07)" }}>
                {([["٣","باقات متكاملة"],["٢٤/٧","دعم وتشغيل"],["١٠٠٪","شفافية وتقارير"]] as [string,string][]).map(([n,l],i) => (
                  <div key={i} style={{ flex:1, paddingLeft:i>0?20:0, marginLeft:i>0?20:0,
                    borderLeft:i>0?"1px solid rgba(255,255,255,.07)":"none" }}>
                    <div style={{ fontSize:28, fontWeight:700, color:Y, letterSpacing:"-0.04em" }}>{n}</div>
                    <div style={{ fontSize:12, color:"rgba(249,249,250,.3)", marginTop:3, fontWeight:300 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview card */}
            <div style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)",
              borderRadius:20, overflow:"hidden" }}>
              <div style={{ background:"rgba(252,197,25,.06)", borderBottom:"1px solid rgba(255,255,255,.06)",
                padding:"14px 22px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontSize:11, letterSpacing:".18em", color:"rgba(249,249,250,.28)", fontWeight:500 }}>PACKAGES</span>
                <div style={{ display:"flex", gap:6 }}>
                  {[0,1,2].map(i => <div key={i} style={{ width:6, height:6, borderRadius:"50%",
                    background:i===1?Y:"rgba(255,255,255,.18)" }}/>)}
                </div>
              </div>
              {PKG.map((p, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
                  padding:"14px 22px",
                  borderBottom:i<2?"1px solid rgba(255,255,255,.05)":"none",
                  background:p.accent?"rgba(252,197,25,.04)":"transparent" }}>
                  <div>
                    <div style={{ fontSize:13, fontWeight:p.accent?500:400,
                      color:p.accent?GW:"rgba(249,249,250,.45)" }}>{p.name}</div>
                    {p.extra && <div style={{ fontSize:11, color:"rgba(252,197,25,.45)", marginTop:3 }}>{p.extra}</div>}
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    {p.accent && <span style={{ fontSize:10, fontWeight:700, background:Y, color:DC,
                      padding:"2px 10px", borderRadius:20 }}>مميزة</span>}
                    <span style={{ fontSize:22, fontWeight:700, letterSpacing:"-0.04em",
                      color:p.accent?Y:"rgba(249,249,250,.5)" }}>${p.price}</span>
                  </div>
                </div>
              ))}
              <div style={{ padding:"14px 22px" }}>
                <div style={{ background:"rgba(252,197,25,.07)", border:"1px solid rgba(252,197,25,.12)",
                  borderRadius:12, padding:"12px 14px" }}>
                  <div style={{ fontSize:11, color:"rgba(249,249,250,.26)", marginBottom:5, letterSpacing:".06em" }}>على فين؟</div>
                  <div style={{ fontSize:13, color:"rgba(249,249,250,.48)", lineHeight:1.75, fontWeight:300 }}>
                    راحة بال من خلال إدارة احترافية تضع المالك في مركز القرار.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PACKAGES ══ */}
      <section id="packages" className="pkg-pad" style={{ background:DC, padding:"72px 0 80px", borderTop:"1px solid rgba(255,255,255,.04)" }}>
        <div style={MAX}>
          <div style={{ marginBottom:36 }}>
            <div style={{ fontSize:11, letterSpacing:".2em", color:"rgba(252,197,25,.55)", fontWeight:500, marginBottom:10 }}>PACKAGES</div>
            <h2 style={{ fontSize:"clamp(24px,3vw,38px)", fontWeight:700, color:GW, letterSpacing:"-0.03em" }}>اختر ما يناسب عقارك</h2>
          </div>

          <div className="pkg-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:3 }}>
            {PKG.map(pkg => (
              <div key={pkg.id} className="pkg" style={{
                borderRadius:20, padding:"28px 24px", display:"flex", flexDirection:"column",
                background:pkg.accent?Y:"rgba(255,255,255,.03)",
                border:pkg.accent?"none":"1px solid rgba(255,255,255,.07)" }}>
                {!pkg.accent && <div style={{ position:"absolute", bottom:-14, left:-10, opacity:.045, pointerEvents:"none" }}><HMark size={100}/></div>}

                <span style={{ alignSelf:"flex-start", fontSize:10, fontWeight:700, letterSpacing:".14em",
                  padding:"4px 14px", borderRadius:20, marginBottom:20,
                  background:pkg.accent?"rgba(29,36,43,.14)":"rgba(252,197,25,.1)",
                  color:pkg.accent?DC:Y }}>{pkg.pill}</span>

                <div style={{ fontSize:13, fontWeight:500, marginBottom:4,
                  color:pkg.accent?"rgba(29,36,43,.55)":"rgba(249,249,250,.38)" }}>{pkg.name}</div>

                <div>
                  <span style={{ fontSize:48, fontWeight:700, letterSpacing:"-0.05em", color:pkg.accent?DC:GW }}>${pkg.price}</span>
                  <span style={{ fontSize:13, marginRight:4, color:pkg.accent?"rgba(29,36,43,.38)":"rgba(249,249,250,.3)" }}>{pkg.unit}</span>
                </div>

                {pkg.extra
                  ? <div style={{ fontSize:12, fontWeight:500, marginBottom:22, marginTop:4,
                      color:pkg.accent?"rgba(29,36,43,.45)":"rgba(252,197,25,.5)" }}>{pkg.extra}</div>
                  : <div style={{ marginBottom:22 }}/>}

                <div style={{ height:1, background:pkg.accent?"rgba(29,36,43,.1)":"rgba(255,255,255,.06)", marginBottom:20 }}/>

                <ul style={{ listStyle:"none", flex:1, display:"flex", flexDirection:"column", gap:10, marginBottom:24 }}>
                  {pkg.items.map((item, ii) => (
                    <li key={ii} style={{ display:"flex", gap:10, alignItems:"flex-start", fontSize:13, lineHeight:1.6,
                      color:pkg.accent?"rgba(29,36,43,.72)":"rgba(249,249,250,.58)" }}>
                      <span style={{ flexShrink:0, marginTop:2 }}><CheckFill/></span>{item}
                    </li>
                  ))}
                </ul>

                <button className="btn-y" style={{ background:pkg.accent?DC:"transparent", color:Y,
                  border:pkg.accent?"none":"1px solid rgba(252,197,25,.28)",
                  padding:"12px 0", fontSize:14, fontWeight:600, width:"100%",
                  display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}
                  onClick={() => waPkg(pkg.name)}>
                  <WaIcon size={16}/> اختر هذه الباقة
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPARISON ══ */}
      <section id="comparison" className="section-pad" style={{ background:"#fff", padding:"80px 0" }}>
        <div style={MAX}>
          <div style={{ marginBottom:36 }}>
            <div style={{ fontSize:11, letterSpacing:".2em", color:WB, fontWeight:500, marginBottom:10 }}>COMPARISON</div>
            <h2 style={{ fontSize:"clamp(22px,2.8vw,34px)", fontWeight:700, letterSpacing:"-0.025em" }}>مقارنة تفصيلية</h2>
          </div>
          <div className="cmp-wrap">
            <div className="cmp-inner" style={{ border:"1px solid rgba(29,36,43,.1)", borderRadius:16, overflow:"hidden" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1.8fr 1fr 1fr 1fr", background:DC, padding:"14px 24px" }}>
                <div style={{ fontSize:12, color:"rgba(249,249,250,.3)", fontWeight:500 }}>الميزة</div>
                {["القياسية","المستثمر","السوبر"].map((h, i) => (
                  <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
                    <span style={{ fontSize:12, fontWeight:600, color:i===1?Y:"rgba(249,249,250,.4)" }}>{h}</span>
                    {i===1 && <div style={{ width:20, height:2, background:Y, borderRadius:2 }}/>}
                  </div>
                ))}
              </div>
              {CMP.map(([label, ...vals], ri) => (
                <div key={ri} style={{ display:"grid", gridTemplateColumns:"1.8fr 1fr 1fr 1fr",
                  padding:"11px 24px", background:ri%2===0?"#FAFAFA":"#fff",
                  borderBottom:"1px solid rgba(29,36,43,.08)" }}>
                  <span style={{ fontSize:14, color:DC }}>{label}</span>
                  {(vals as boolean[]).map((v, ci) => (
                    <div key={ci} style={{ display:"flex", justifyContent:"center", alignItems:"center",
                      background:ci===1?"rgba(252,197,25,.03)":"transparent" }}>
                      {v ? <CheckFill/> : <CrossLine dark/>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section id="how" className="section-pad" style={{ background:GW, padding:"0 0 80px" }}>
        <div style={MAX}>
          <div style={{ marginBottom:36 }}>
            <div style={{ fontSize:11, letterSpacing:".2em", color:WB, fontWeight:500, marginBottom:10 }}>HOW IT WORKS</div>
            <h2 style={{ fontSize:"clamp(22px,2.8vw,34px)", fontWeight:700, letterSpacing:"-0.025em" }}>ثلاث خطوات للبدء</h2>
          </div>
          <div className="step-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)",
            border:"1px solid rgba(29,36,43,.1)", borderRadius:16, overflow:"hidden" }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ padding:"36px 28px", borderLeft:i>0?"1px solid rgba(29,36,43,.1)":"none" }}>
                <div style={{ fontSize:72, fontWeight:700, color:Y, lineHeight:1, marginBottom:18, letterSpacing:"-0.06em" }}>{s.n}</div>
                <h3 style={{ fontSize:17, fontWeight:600, marginBottom:10 }}>{s.t}</h3>
                <p style={{ fontSize:14, color:"#6B7280", lineHeight:1.8, margin:0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BAND ══ */}
      <section style={{ background:Y, padding:"60px 0", position:"relative", overflow:"hidden" }}>
        {[{r:"2%",t:"-22%",s:180},{r:"22%",t:"28%",s:100},{r:"56%",t:"-12%",s:130}].map((p, i) => (
          <div key={i} style={{ position:"absolute", right:p.r, top:p.t, opacity:.08, pointerEvents:"none" }}>
            <HMark size={p.s} fill={DC}/>
          </div>
        ))}
        <div style={{ ...MAX, display:"flex", justifyContent:"space-between", alignItems:"center",
          gap:28, flexWrap:"wrap", position:"relative", zIndex:1 }}>
          <div>
            <h2 style={{ fontSize:"clamp(20px,3vw,38px)", fontWeight:700, color:DC,
              letterSpacing:"-0.025em", lineHeight:1.2, marginBottom:8 }}>
              عقارك يستحق إدارة<br/>على مستوى طموحك.
            </h2>
            <p style={{ fontSize:15, color:"rgba(29,36,43,.52)", maxWidth:420, fontWeight:300, lineHeight:1.7 }}>
              تواصل معنا وسنحدد معاً الباقة الأنسب لأهدافك الاستثمارية.
            </p>
          </div>
          <button className="btn-y" style={{ background:DC, color:Y, fontSize:15, padding:"15px 36px",
            whiteSpace:"nowrap", flexShrink:0, display:"flex", alignItems:"center", gap:10 }}
            onClick={() => wa()}>
            <WaIcon size={18}/> اطلب استشارة مجانية
          </button>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" className="section-pad" style={{ padding:"80px 0" }}>
        <div style={MAX}>
          <div className="faq-grid" style={{ display:"grid", gridTemplateColumns:"280px 1fr", gap:72, alignItems:"start" }}>
            <div className="faq-sticky" style={{ position:"sticky", top:80 }}>
              <div style={{ fontSize:11, letterSpacing:".2em", color:WB, fontWeight:500, marginBottom:10 }}>FAQ</div>
              <h2 style={{ fontSize:"clamp(22px,2.5vw,32px)", fontWeight:700, letterSpacing:"-0.025em", lineHeight:1.25, marginBottom:14 }}>
                أسئلة شائعة
              </h2>
              <p style={{ fontSize:14, color:"#6B7280", lineHeight:1.85, marginBottom:24, fontWeight:300 }}>
                إجابات مباشرة على ما يسأله ملاك العقارات.
              </p>
              <div onClick={() => wa()} style={{ display:"inline-flex", alignItems:"center", gap:10,
                background:"#25D366", borderRadius:40, padding:"10px 18px", cursor:"pointer",
                transition:"opacity .15s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                <WaIcon size={18}/>
                <span style={{ fontSize:13, fontWeight:700, color:"#fff" }}>راسلنا على واتساب</span>
              </div>
            </div>
            <div style={{ background:"#fff", border:"1px solid rgba(29,36,43,.1)", borderRadius:20, padding:"4px 28px" }}>
              {FAQS.map((f, i) => <FAQRow key={i} {...f}/>)}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="section-pad" style={{ background:"#fff", padding:"80px 0" }}>
        <div style={MAX}>
          <div style={{ marginBottom:40 }}>
            <div style={{ fontSize:11, letterSpacing:".2em", color:WB, fontWeight:500, marginBottom:10 }}>ABOUT US</div>
            <h2 style={{ fontSize:"clamp(22px,2.8vw,34px)", fontWeight:700, letterSpacing:"-0.025em" }}>نبذة عن الشركة</h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"start" }} className="about-grid">
            <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
              <p style={{ fontSize:15, color:"#374151", lineHeight:2, margin:0 }}>
                تتمتع <strong style={{ color:DC }}>Houseiana</strong> بحضور متنامٍ في السوق الإقليمي لإدارة وتشغيل منازل العطلات، مستفيدة من خبرات عملية في{" "}
                <strong style={{ color:DC }}>أسواق العقارات والسياحة في مصر ودول الخليج</strong>. هذا التواجد الإقليمي منح الشركة فهمًا عميقًا لطبيعة الطلب السياحي، وسلوك المسافرين، وآليات تشغيل العقارات قصيرة الأجل بطريقة احترافية تحقق أفضل عائد للمالك.
              </p>
              <p style={{ fontSize:15, color:"#374151", lineHeight:2, margin:0 }}>
                على مدار سنوات العمل في هذه الأسواق، طورت Houseiana شبكة علاقات قوية مع{" "}
                <strong style={{ color:DC }}>وكلاء السفر المحليين والدوليين</strong>، إضافة إلى شراكات مع{" "}
                <strong style={{ color:DC }}>مقدمي الخدمات اللوجستية والتشغيلية</strong> في قطاع الضيافة والسياحة، وهو ما يتيح تسويق العقارات عبر قنوات متعددة والوصول إلى شرائح واسعة من المسافرين.
              </p>
            </div>

            <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
              <p style={{ fontSize:15, color:"#374151", lineHeight:2, margin:0 }}>
                كما تعتمد الشركة على منظومة تشغيل متكاملة تجمع بين{" "}
                <strong style={{ color:DC }}>إدارة الأصول العقارية، والتسويق السياحي، وإدارة تجربة الضيوف</strong>، بما يضمن تقديم تجربة إقامة احترافية للضيف، وفي الوقت نفسه تحقيق تشغيل مستقر ومستدام للعقار.
              </p>
              <p style={{ fontSize:15, color:"#374151", lineHeight:2, margin:0 }}>
                من خلال هذا التكامل بين الخبرة المحلية والامتداد الإقليمي، تعمل Houseiana على تحويل العقارات إلى{" "}
                <strong style={{ color:DC }}>أصول سياحية مُدارة باحتراف</strong>، تستفيد من شبكة تسويق واسعة ونظام تشغيل يعتمد على أفضل الممارسات في قطاع إدارة منازل العطلات.
              </p>

              {/* Key highlights */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:8 }}>
                {[
                  { icon:"🏠", label:"إدارة الأصول العقارية"    },
                  { icon:"✈️", label:"التسويق السياحي"           },
                  { icon:"🤝", label:"شبكة وكلاء دولية"          },
                  { icon:"⭐", label:"إدارة تجربة الضيوف"        },
                ].map((item, i) => (
                  <div key={i} style={{
                    display:"flex", alignItems:"center", gap:10,
                    background:GW, borderRadius:12, padding:"12px 16px",
                    border:"1px solid rgba(29,36,43,.08)"
                  }}>
                    <span style={{ fontSize:20 }}>{item.icon}</span>
                    <span style={{ fontSize:13, fontWeight:500, color:DC }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Addresses */}
              <div style={{ display:"flex", flexDirection:"column", gap:12, marginTop:8 }}>
                {[
                  {
                    flag:"🇪🇬",
                    company:"هاوسيانا لإدارة وتسويق الأصول العقارية",
                    country:"جمهورية مصر العربية",
                    address:"شارع أحمد بهجت، أبراج عثمان — برج ٧ متوسط، المعادي، القاهرة",
                  },
                  {
                    flag:"🇶🇦",
                    company:"هاوسيانا لخدمات الحجز والسفر",
                    country:"دولة قطر",
                    address:"مارينا لوسيل، توين تاور — الطابق ١٣",
                  },
                ].map((loc, i) => (
                  <div key={i} style={{
                    display:"flex", gap:14, alignItems:"flex-start",
                    background:GW, borderRadius:14, padding:"16px 18px",
                    border:"1px solid rgba(29,36,43,.08)",
                  }}>
                    <div style={{
                      width:40, height:40, borderRadius:"50%", flexShrink:0,
                      background:`rgba(252,197,25,.12)`, border:`1px solid rgba(252,197,25,.25)`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:20,
                    }}>{loc.flag}</div>
                    <div>
                      <div style={{ fontSize:13, fontWeight:700, color:DC, marginBottom:2 }}>{loc.company}</div>
                      <div style={{ fontSize:11, color:Y, fontWeight:600, marginBottom:4, letterSpacing:".04em" }}>{loc.country}</div>
                      <div style={{ fontSize:12, color:"#6B7280", lineHeight:1.7 }}>{loc.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width:900px) {
          .about-grid { grid-template-columns:1fr !important; gap:24px !important; }
        }
      `}</style>

      {/* ══ FOOTER ══ */}
      <footer style={{ background:DC, borderTop:"1px solid rgba(255,255,255,.05)", padding:"52px 0 32px" }}>
        <div style={MAX}>
          <div className="footer-cols" style={{ display:"flex", justifyContent:"space-between", gap:48, flexWrap:"wrap", marginBottom:40 }}>

            {/* Brand col */}
            <div style={{ minWidth:200, maxWidth:280 }}>
              <Logo size={28}/>
              <p style={{ fontSize:13, color:"rgba(249,249,250,.4)", lineHeight:1.8, marginTop:14, fontWeight:300 }}>
                إدارة احترافية لأصولك العقارية في مصر — تضع المالك في مركز القرار.
              </p>
              <div className="footer-social" style={{ display:"flex", gap:10, marginTop:20 }}>
                {[
                  { s:SOCIAL[0], icon:<FbIcon/>,  bg:"#1877F2" },
                  { s:SOCIAL[1], icon:<IgIcon/>,  bg:"linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)" },
                  { s:SOCIAL[2], icon:<TkIcon/>,  bg:"#000" },
                ].map(({ s, icon, bg }) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
                    className="social-btn"
                    style={{ width:36, height:36, borderRadius:"50%", background:bg,
                      display:"flex", alignItems:"center", justifyContent:"center", color:"#fff" }}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact col */}
            <div>
              <div style={{ fontSize:11, letterSpacing:".18em", color:"rgba(249,249,250,.3)", fontWeight:500, marginBottom:18 }}>
                تواصل معنا
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {/* WhatsApp */}
                <a href={`https://wa.me/${WA_NUM}`} target="_blank" rel="noreferrer"
                  style={{ display:"flex", alignItems:"center", gap:12, color:GW, textDecoration:"none" }}>
                  <div style={{ width:36, height:36, borderRadius:"50%", background:"#25D366",
                    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <WaIcon size={18}/>
                  </div>
                  <div>
                    <div style={{ fontSize:10, color:"rgba(249,249,250,.3)", marginBottom:2 }}>واتساب</div>
                    <div style={{ fontSize:14, fontWeight:500, direction:"ltr", letterSpacing:".02em" }}>{PHONE}</div>
                  </div>
                </a>

                {/* Phone */}
                <a href={`tel:${PHONE}`}
                  style={{ display:"flex", alignItems:"center", gap:12, color:GW, textDecoration:"none" }}>
                  <div style={{ width:36, height:36, borderRadius:"50%",
                    background:"rgba(252,197,25,.15)", border:"1px solid rgba(252,197,25,.25)",
                    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={Y} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.127 1.005.362 1.99.7 2.94a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45c.95.338 1.935.573 2.94.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize:10, color:"rgba(249,249,250,.3)", marginBottom:2 }}>اتصل بنا</div>
                    <div style={{ fontSize:14, fontWeight:500, direction:"ltr", letterSpacing:".02em" }}>{PHONE}</div>
                  </div>
                </a>

                {/* Email */}
                <a href={`mailto:${EMAIL}`}
                  style={{ display:"flex", alignItems:"center", gap:12, color:GW, textDecoration:"none" }}>
                  <div style={{ width:36, height:36, borderRadius:"50%",
                    background:"rgba(252,197,25,.15)", border:"1px solid rgba(252,197,25,.25)",
                    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={Y} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize:10, color:"rgba(249,249,250,.3)", marginBottom:2 }}>البريد الإلكتروني</div>
                    <div style={{ fontSize:14, fontWeight:500, direction:"ltr", letterSpacing:".01em" }}>{EMAIL}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick links col */}
            <div>
              <div style={{ fontSize:11, letterSpacing:".18em", color:"rgba(249,249,250,.3)", fontWeight:500, marginBottom:18 }}>
                روابط سريعة
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {NAV_ITEMS.map(({ label, id }) => (
                  <span key={id} onClick={() => scrollToSection(id)}
                    style={{ fontSize:14, color:"rgba(249,249,250,.45)", cursor:"pointer", transition:"color .15s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = Y)}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(249,249,250,.45)")}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop:"1px solid rgba(255,255,255,.06)", paddingTop:24,
            display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
            <span style={{ fontSize:12, color:"rgba(249,249,250,.2)", fontWeight:300 }}>
              © 2026 Houseiana Asset Management. جميع الحقوق محفوظة.
            </span>
            <span style={{ fontSize:12, color:"rgba(249,249,250,.18)", fontWeight:300 }}>
              Asset Management · Qatar
            </span>
          </div>
        </div>
      </footer>

      {/* ══ FLOATING WHATSAPP ══ */}
      <div onClick={() => wa()} style={{
        position:"fixed", bottom:24, left:24, zIndex:999,
        display:"flex", alignItems:"center", gap:10,
        background:"#25D366", borderRadius:40,
        padding:"12px 20px 12px 14px",
        cursor:"pointer", animation:"waPulse 2.5s ease-in-out infinite",
        transition:"transform .18s",
      }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
        <WaIcon size={24}/>
        <span style={{ fontSize:14, fontWeight:700, color:"#fff", whiteSpace:"nowrap" }}>تواصل عبر واتساب</span>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width:860px) {
          .show-sm { display:flex !important; }
        }
        @media (min-width:861px) {
          .show-sm { display:none !important; }
        }
        @media (max-width:600px) {
          .wa-float-text { display:none !important; }
        }
      `}</style>

    </div>
  );
}
