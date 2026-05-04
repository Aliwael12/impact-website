export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = {
  label: string;
  href?: string;
  children?: { title?: string; items: NavChild[] }[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        title: "Learning & Development",
        items: [
          { label: "L&D Solutions Overview", href: "/solutions/learning-development", desc: "Structured learning journeys for capability growth" },
          { label: "Competency-Based", href: "/solutions/competency-based", desc: "Leading Self · Relations · Teams" },
          { label: "Participant Level", href: "/solutions/participant-level", desc: "Frontline → Senior Leaders" },
          { label: "Duration-Based", href: "/solutions/duration-based", desc: "Journeys · Workshops · Impulse" },
          { label: "Experiential Learning", href: "/solutions/experiential-learning", desc: "Business simulations & gamified labs" },
        ],
      },
      {
        title: "Organizational Development",
        items: [
          { label: "OD Overview", href: "/solutions/organizational-development", desc: "Strategy, talent, governance & culture" },
          { label: "Strategy", href: "/solutions/strategy" },
          { label: "Talent Development", href: "/solutions/talent-development" },
          { label: "Competency Building", href: "/solutions/competency-building" },
          { label: "Policies & Procedures", href: "/solutions/organizational-policies" },
          { label: "Corporate Governance", href: "/solutions/corporate-governance" },
          { label: "Cultural Transformation", href: "/solutions/cultural-transformation" },
        ],
      },
    ],
  },
  {
    label: "Assessments & Coaching",
    href: "/assessments-coaching",
  },
  {
    label: "Experiences",
    children: [
      {
        items: [
          { label: "Impact GO", href: "/impact-go", desc: "Team experiences & corporate events" },
          { label: "Impulse by Impact", href: "/impulse", desc: "Modular microlearning library" },
          { label: "International Affiliates", href: "/affiliates", desc: "Gallup · Knolskape · Culture Partners · BCon" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];
