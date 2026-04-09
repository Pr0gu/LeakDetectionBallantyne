export const SITE = {
  name: 'Leak Detection Ballantyne',
  domain: 'leakdetectionballantyne.com',
  url: 'https://leakdetectionballantyne.com',
  phone: '980-405-4186',
  phoneHref: 'tel:+19804054186',
  email: 'hello@leakdetectionballantyne.com',
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
  { name: 'South Charlotte', primary: false },
  { name: 'Weddington', primary: false },
  { name: 'Matthews', primary: false },
  { name: 'Mint Hill', primary: false },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Thomas Wright',
    location: 'Ballantyne',
    rating: 5,
    text: 'Found an underground irrigation leak that was destroying our foundation. Their technology is impressive and saved us from disaster.',
  },
  {
    name: 'John Davidson',
    location: 'Ballantyne',
    rating: 5,
    text: 'Emergency water heater replacement on a Sunday. They arrived in 30 minutes and had hot water restored in 2 hours. Incredible service!',
  },
  {
    name: 'Mark Stevens',
    location: 'Eastover',
    rating: 5,
    text: 'Pool leak detection experts! Found and fixed a leak that was wasting hundreds of gallons daily. Saved our summer!',
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
