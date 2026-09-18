export interface CodeItem {
  code: string;
  reward: string;
  status: 'ACTIVE' | 'EXPIRED';
  isNew?: boolean;
  note?: string;
}

export interface BrainrotCharacter {
  id: string;
  name: string;
  tier: 'GOD' | 'SECRET' | 'MYTHIC' | 'LEGENDARY' | 'EPIC' | 'RARE';
  incomePerSec: number; // Cash per sec
  stealDifficulty: 'EXTREME' | 'HARD' | 'MEDIUM' | 'EASY';
  value: string;
  multiplier: string;
  description: string;
  icon: string;
}

export interface RebirthTier {
  level: number;
  cost: string;
  multiplier: string;
  unlockedCharacters: string[];
}

export const CODES_DATA: CodeItem[] = [
  {
    code: 'BESTBRAINROTEVER',
    reward: 'La Vacca Saturno Saturnita (Secret Brainrot)',
    status: 'ACTIVE',
    isNew: true,
    note: 'Spawns the unit on the Red Carpet. One tracker reports this code as already exhausted, so redeem it as soon as possible.'
  },
  { code: 'FREEOCTOBLOCK777', reward: 'Octo Lucky Block', status: 'EXPIRED' },
  { code: 'OCTOBLOCK555', reward: 'Octo Lucky Block', status: 'EXPIRED' },
  { code: 'FREEOCTO555', reward: 'Octo Lucky Block', status: 'EXPIRED' },
  { code: 'FREEPREMIUMOCTO777', reward: 'Premium Octo Lucky Block', status: 'EXPIRED' },
  { code: 'WSUMMERUPD1', reward: 'Premium Octo Lucky Block', status: 'EXPIRED' },
  { code: 'FREEOCTOBASE333W', reward: 'Octo Base', status: 'EXPIRED' },
  { code: 'ILOVEFOOD123', reward: 'Kraken', status: 'EXPIRED' },
  { code: 'SUMMERUPD3', reward: 'Rocketini', status: 'EXPIRED' },
  { code: 'NEEDTHIS4CRAFT333', reward: 'Chicleteira Surfeiteira', status: 'EXPIRED' },
  { code: 'WAVERIDER4FREELOL', reward: 'Waverider', status: 'EXPIRED' },
  { code: 'FREE500DRAGS', reward: 'Dragon Cannelloni', status: 'EXPIRED' },
  { code: 'JOHNPORKDAPIGGY', reward: 'John Pork', status: 'EXPIRED' },
  { code: 'CODESAREREAL321', reward: 'John Pork', status: 'EXPIRED' },
  { code: 'L2EXPLOITERS', reward: 'John Pork', status: 'EXPIRED' },
  { code: 'IMANEGG', reward: 'Strawberry Elephant', status: 'EXPIRED' },
  { code: 'PIZZAISYUM', reward: 'Pizza And Ranch', status: 'EXPIRED' },
  { code: 'MAYMEOWLJANDEL', reward: 'Meowl', status: 'EXPIRED', note: 'Riddle reward rather than a typed code.' },
  { code: 'CANDY24SAMMY', reward: 'Strawberry Elephant', status: 'EXPIRED', note: 'Riddle reward rather than a typed code.' },
  { code: 'DIVINECURSED', reward: 'Strawberry Elephant', status: 'EXPIRED', note: 'Riddle reward rather than a typed code.' }
];

export const BRAINROT_CHARACTERS: BrainrotCharacter[] = [
  {
    id: 'tralalelo',
    name: 'Tralalelo God',
    tier: 'GOD',
    incomePerSec: 5000000,
    stealDifficulty: 'EXTREME',
    value: '500M Cash',
    multiplier: '100x Multiplier',
    description: 'The supreme Brainrot entity. Generates 5M Cash per second and grants stealth cloaking during steals.',
    icon: '👑'
  },
  {
    id: 'tung-tung',
    name: 'Tung Tung Sah',
    tier: 'SECRET',
    incomePerSec: 2500000,
    stealDifficulty: 'EXTREME',
    value: '250M Cash',
    multiplier: '50x Multiplier',
    description: 'Secret meme entity unlocked through 5th Rebirth. High steal resistance.',
    icon: '🔮'
  },
  {
    id: 'caseoh-prime',
    name: 'CaseOh Prime',
    tier: 'MYTHIC',
    incomePerSec: 1000000,
    stealDifficulty: 'HARD',
    value: '100M Cash',
    multiplier: '25x Multiplier',
    description: 'Massive gravitational meme presence. Increases base base storage space by 300%.',
    icon: '🍔'
  },
  {
    id: 'grimace-god',
    name: 'Grimace Sovereign',
    tier: 'MYTHIC',
    incomePerSec: 750000,
    stealDifficulty: 'HARD',
    value: '75M Cash',
    multiplier: '20x Multiplier',
    description: 'Purple void aura meme. Reduces opponent steal success rate by 45%.',
    icon: '🍇'
  },
  {
    id: 'sigma-rizzler',
    name: 'Ultimate Sigma Rizzler',
    tier: 'LEGENDARY',
    incomePerSec: 350000,
    stealDifficulty: 'MEDIUM',
    value: '35M Cash',
    multiplier: '10x Multiplier',
    description: 'Combines maximum Rizzler charm with Sigma grindset. High passive cash multiplier.',
    icon: '🗿'
  },
  {
    id: 'kai-cenat',
    name: 'Mewing Kai Cenat',
    tier: 'LEGENDARY',
    incomePerSec: 200000,
    stealDifficulty: 'MEDIUM',
    value: '20M Cash',
    multiplier: '7.5x Multiplier',
    description: 'Extreme speed multiplier during base raiding and stealing ops.',
    icon: '⚡'
  },
  {
    id: 'baby-gronk',
    name: 'Baby Gronk Fanum',
    tier: 'EPIC',
    incomePerSec: 80000,
    stealDifficulty: 'EASY',
    value: '8M Cash',
    multiplier: '4x Multiplier',
    description: 'Rizzed up Livvy Dunne meme character. Great mid-game cash printer.',
    icon: '🏈'
  },
  {
    id: 'skibidi-toilet',
    name: 'Skibidi Toilet Titan',
    tier: 'EPIC',
    incomePerSec: 50000,
    stealDifficulty: 'EASY',
    value: '5M Cash',
    multiplier: '3x Multiplier',
    description: 'Classic meme titan. Easy to steal, solid passive income.',
    icon: '🚽'
  },
  {
    id: 'fanum-taxer',
    name: 'Fanum Taxer',
    tier: 'RARE',
    incomePerSec: 15000,
    stealDifficulty: 'EASY',
    value: '1.5M Cash',
    multiplier: '1.8x Multiplier',
    description: 'Takes 10% cash bonus whenever you successfully steal from another player.',
    icon: '🍕'
  },
  {
    id: 'gigachad-prime',
    name: 'Gigachad Prime',
    tier: 'MYTHIC',
    incomePerSec: 850000,
    stealDifficulty: 'HARD',
    value: '85M Cash',
    multiplier: '22x Multiplier',
    description: 'Chiseled jawline aura that deflects 40% of incoming slap attacks.',
    icon: '🗿'
  },
  {
    id: 'smurf-cat',
    name: 'Shailushai Smurf Cat',
    tier: 'LEGENDARY',
    incomePerSec: 300000,
    stealDifficulty: 'MEDIUM',
    value: '30M Cash',
    multiplier: '8x Multiplier',
    description: 'We live we love we lie. Grants camouflage in outdoor zones.',
    icon: '🍄'
  },
  {
    id: 'quandale-dingle',
    name: 'Quandale Dingle Senior',
    tier: 'EPIC',
    incomePerSec: 75000,
    stealDifficulty: 'EASY',
    value: '7.5M Cash',
    multiplier: '3.5x Multiplier',
    description: 'Goofy ahh audio aura that disorients pursuing defenders.',
    icon: '👃'
  },
  {
    id: 'skibidi-scientist',
    name: 'Scientist Toilet Mech',
    tier: 'GOD',
    incomePerSec: 4200000,
    stealDifficulty: 'EXTREME',
    value: '420M Cash',
    multiplier: '80x Multiplier',
    description: 'Robotic laser toilet entity capable of remote base defense.',
    icon: '🤖'
  },
  {
    id: 'ohio-final-boss',
    name: 'Ohio Final Boss',
    tier: 'SECRET',
    incomePerSec: 3100000,
    stealDifficulty: 'EXTREME',
    value: '310M Cash',
    multiplier: '65x Multiplier',
    description: 'The darkest meme anomaly from the Ohio wasteland.',
    icon: '💀'
  },
  {
    id: 'mewing-god-cat',
    name: 'Lord Mewington',
    tier: 'LEGENDARY',
    incomePerSec: 260000,
    stealDifficulty: 'MEDIUM',
    value: '26M Cash',
    multiplier: '7x Multiplier',
    description: 'Maintains unbroken tongue posture, generating steady compounding returns.',
    icon: '🐱'
  },
  {
    id: 'ice-spice-munch',
    name: 'Deli Munch Queen',
    tier: 'EPIC',
    incomePerSec: 60000,
    stealDifficulty: 'EASY',
    value: '6M Cash',
    multiplier: '3.2x Multiplier',
    description: 'Fast passive dropper booster with orange afro styling.',
    icon: '👩‍🦰'
  },
  {
    id: 'john-pork',
    name: 'John Pork Calling',
    tier: 'RARE',
    incomePerSec: 25000,
    stealDifficulty: 'EASY',
    value: '2.5M Cash',
    multiplier: '2x Multiplier',
    description: 'Ring ring phone alert that creates a loud decoy noise.',
    icon: '🐷'
  },
  {
    id: 'nyan-cat-og',
    name: 'Nyan Rainbow Cruiser',
    tier: 'LEGENDARY',
    incomePerSec: 380000,
    stealDifficulty: 'MEDIUM',
    value: '38M Cash',
    multiplier: '9.5x Multiplier',
    description: 'Pop-tart cat leaving rainbow speed trails across the map.',
    icon: '🌈'
  },
  {
    id: 'amogus-impostor',
    name: 'Red Impostor Sus',
    tier: 'EPIC',
    incomePerSec: 90000,
    stealDifficulty: 'EASY',
    value: '9M Cash',
    multiplier: '4.2x Multiplier',
    description: 'Vents between player bases for stealth infiltration.',
    icon: '📮'
  }
];

export interface TrollGearItem {
  id: string;
  name: string;
  price: string;
  effect: string;
  cooldown: string;
  tier: 'BASIC' | 'PRO' | 'GOD';
}

export const TROLL_GEAR_DATA: TrollGearItem[] = [
  { id: 'slap-hand-basic', name: 'Golden Slap Glove', price: '$500,000', effect: 'Knocks back intruders 15 studs', cooldown: '2.5s', tier: 'BASIC' },
  { id: 'speed-coil-troll', name: 'Neon Hyper Coil', price: '$1,200,000', effect: '+85% Sprint Speed during base heist', cooldown: '0s', tier: 'BASIC' },
  { id: 'gravity-disruptor', name: 'Low Gravity Gun', price: '$3,500,000', effect: 'Floats opponents into the sky for 4 seconds', cooldown: '8s', tier: 'PRO' },
  { id: 'base-lockdown-emp', name: 'EMP Jammer', price: '$12,000,000', effect: 'Disables all thief stealth cloaks for 15s', cooldown: '30s', tier: 'PRO' },
  { id: 'troll-anvil-drop', name: '100-Ton Anvil Drop', price: '$25,000,000', effect: 'Crushes target thief causing immediate drop', cooldown: '12s', tier: 'GOD' },
  { id: 'troll-banana-peel', name: 'Quantum Banana Slip', price: '$750,000', effect: 'Trips pursuing enemies causing 3s stun', cooldown: '5s', tier: 'BASIC' },
  { id: 'stealth-invis-cloak', name: 'Sigma Shadow Cloak', price: '$18,000,000', effect: '100% Invisibility for 8 seconds', cooldown: '25s', tier: 'PRO' },
  { id: 'black-hole-vacuum', name: 'CaseOh Gravity Sink', price: '$85,000,000', effect: 'Pulls all dropped cash in 40 studs radius', cooldown: '20s', tier: 'GOD' }
];

export const REBIRTH_DATA: RebirthTier[] = [
  { level: 1, cost: '$10,000,000', multiplier: '2x Cash Boost', unlockedCharacters: ['Baby Gronk Fanum'] },
  { level: 2, cost: '$50,000,000', multiplier: '5x Cash Boost', unlockedCharacters: ['Sigma Rizzler'] },
  { level: 3, cost: '$250,000,000', multiplier: '12x Cash Boost', unlockedCharacters: ['Grimace Sovereign'] },
  { level: 4, cost: '$1,000,000,000', multiplier: '30x Cash Boost', unlockedCharacters: ['CaseOh Prime'] },
  { level: 5, cost: '$5,000,000,000', multiplier: '100x Cash Boost', unlockedCharacters: ['Tung Tung Sah', 'Tralalelo God'] }
];
