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
    name: 'Sarah M.',
    location: 'Ballantyne',
    rating: 5,
    text: 'Two companies told us they\u2019d need to jackhammer the master bath slab. These guys walked in with a sensor, spent 45 minutes scanning, and found the leak under the guest bathroom instead \u2014 completely different room. Tiny repair, $800 vs the $6K quote we had. I\u2019m still shocked.',
  },
  {
    name: 'James R.',
    location: 'Piper Glen',
    rating: 5,
    text: 'Water shooting up through the garage floor at 11 PM on a Tuesday. They answered the phone \u2014 not a service, an actual person \u2014 and had someone at my house in 25 minutes. Located it with thermal imaging, isolated the line, and finished the repair by 7 AM. My garage floor has a 6-inch patch. That\u2019s it.',
  },
  {
    name: 'Linda K.',
    location: 'Weddington',
    rating: 5,
    text: 'Water bill went from $80 to $340 in one month. Our regular plumber couldn\u2019t find anything. These guys did a pressure test, isolated it to the main line, then used a camera to find a hairline crack about 4 feet from the meter. Repaired it same day, zero damage to the yard. Bill is back to normal.',
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
