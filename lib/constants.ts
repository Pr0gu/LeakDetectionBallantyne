export const SITE = {
  name: 'Leak Detection Ballantyne',
  domain: 'leakdetectionballantyne.com',
  url: 'https://leakdetectionballantyne.com',
  phone: '980-405-4186',
  phoneHref: 'tel:+19804054186',
  email: 'info@artfixplumbing.com',
  address: {
    street: '3412 Brooktree Ln',
    city: 'Indian Trail',
    state: 'NC',
    zip: '28079',
    full: '3412 Brooktree Ln, Indian Trail, NC 28079',
  },
  hours: {
    weekday: 'Mon-Fri 7AM-8PM',
    saturday: 'Sat 8AM-6PM',
    sunday: 'Sun Emergency 24/7',
  },
} as const;

export const SERVICES = [
  {
    id: 'slab-leak',
    title: 'Slab Leak Detection',
    description:
      'Non-invasive acoustic and thermal imaging to pinpoint leaks beneath your foundation — no unnecessary digging, no guesswork.',
    icon: 'layers' as const,
  },
  {
    id: 'water-line',
    title: 'Water Line Leak Detection',
    description:
      'Underground pipe locating and pressure testing to find hidden water line leaks before they cause major damage.',
    icon: 'pipette' as const,
  },
  {
    id: 'pool-spa',
    title: 'Pool & Spa Leak Detection',
    description:
      'Precision dye testing and structural analysis to identify exactly where your pool or spa is losing water.',
    icon: 'waves' as const,
  },
  {
    id: 'sewer-camera',
    title: 'Sewer Camera Inspection',
    description:
      'HD camera pipe inspection and line locating to diagnose blockages, breaks, and bellied pipes without excavation.',
    icon: 'camera' as const,
  },
  {
    id: 'emergency',
    title: 'Emergency Leak Repair',
    description:
      '24/7 rapid response for burst pipes and active leaks. We stop the water damage and make permanent repairs — fast.',
    icon: 'siren' as const,
  },
  {
    id: 'full-plumbing',
    title: 'Full Plumbing Services',
    description:
      'Complete plumbing solutions including water heater installation, drain cleaning, repiping, and fixture repair.',
    icon: 'wrench' as const,
  },
] as const;

export const SERVICE_AREAS = [
  { name: 'Ballantyne', primary: true },
  { name: 'Piper Glen', primary: false },
  { name: 'Providence', primary: false },
  { name: 'Pineville', primary: false },
  { name: 'Waxhaw', primary: false },
  { name: 'Fort Mill, SC', primary: false },
  { name: 'Marvin', primary: false },
  { name: 'Indian Trail', primary: false },
  { name: 'Weddington', primary: false },
  { name: 'Matthews', primary: false },
  { name: 'Mint Hill', primary: false },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    location: 'Ballantyne',
    rating: 5,
    text: 'They found a slab leak that two other companies missed. Used acoustic detection and pinpointed it exactly — saved us thousands in unnecessary demolition. Incredible technology and professionalism.',
  },
  {
    name: 'James R.',
    location: 'Piper Glen',
    rating: 5,
    text: 'Called at 11 PM with water pouring from under the foundation. They were here in 25 minutes, located the leak with thermal imaging, and had it repaired by morning. True emergency response.',
  },
  {
    name: 'Linda K.',
    location: 'Weddington',
    rating: 5,
    text: 'Our water bill doubled and nobody could figure out why. Their team used pressure testing and camera inspection to find a hairline crack in our main water line. Fixed it the same day with zero damage to the yard.',
  },
] as const;

export const TECHNOLOGIES = [
  {
    title: 'Acoustic Listening',
    description:
      'Ground microphones and acoustic sensors detect the sound of water escaping pipes — even through concrete slabs and underground.',
    icon: 'ear' as const,
  },
  {
    title: 'Thermal Imaging',
    description:
      'Infrared cameras reveal temperature anomalies caused by leaking water, making hidden leaks visible without any demolition.',
    icon: 'thermometer' as const,
  },
  {
    title: 'Video Inspection',
    description:
      'HD waterproof cameras inserted directly into pipes provide real-time visual confirmation of cracks, corrosion, and blockages.',
    icon: 'video' as const,
  },
  {
    title: 'Pressure Testing',
    description:
      'Isolated pressure tests on individual pipe segments confirm the exact location and severity of leaks with scientific precision.',
    icon: 'gauge' as const,
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: 'Non-Invasive Detection',
    description:
      'Our advanced technology locates leaks without tearing up floors, walls, or landscaping. Pinpoint accuracy, zero destruction.',
    icon: 'shield-check' as const,
  },
  {
    title: '30-Minute Response',
    description:
      'Ballantyne is our home base. When you call, a technician is dispatched immediately — average arrival time under 30 minutes.',
    icon: 'clock' as const,
  },
  {
    title: 'Licensed NC & SC',
    description:
      'Fully licensed and insured in both North Carolina and South Carolina. We serve Ballantyne and the entire southern Charlotte metro.',
    icon: 'badge-check' as const,
  },
  {
    title: 'Upfront Pricing',
    description:
      'Transparent, honest pricing before any work begins. No hidden fees, no surprise charges. You approve the cost first — always.',
    icon: 'dollar-sign' as const,
  },
] as const;
