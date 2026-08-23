export interface CodeItem {
  code: string;
  reward: string;
  status: 'ACTIVE' | 'EXPIRED';
  dateAdded: string;
  isNew?: boolean;
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
  { code: 'SIGMA2026', reward: '$500,000 Brainrot Cash + 2x Luck Potion (30m)', status: 'ACTIVE', dateAdded: '2026-08-20', isNew: true },
  { code: 'STEALKING', reward: 'Free Mythic CaseOh Character + 50,000 Cash', status: 'ACTIVE', dateAdded: '2026-08-15', isNew: true },
  { code: 'SKIBIDI800M', reward: '$1,000,000 Cash + Ultra Shield Potion', status: 'ACTIVE', dateAdded: '2026-08-10', isNew: true },
  { code: 'RIZZLER99', reward: 'Free Legendary Rizzler + 2x Cash Multiplier (1h)', status: 'ACTIVE', dateAdded: '2026-08-01' },
  { code: 'FANUMTAX', reward: '$250,000 Cash + Speed Boost (15m)', status: 'ACTIVE', dateAdded: '2026-07-25' },
  { code: 'GRIMACE666', reward: 'Grimace Shake Aura + $100,000 Cash', status: 'ACTIVE', dateAdded: '2026-07-15' },
  { code: 'MEWING100K', reward: 'Free Epic Mewing Cat + $50,000 Cash', status: 'ACTIVE', dateAdded: '2026-07-01' },
  { code: 'EXPIRED100', reward: 'Old Release Reward', status: 'EXPIRED', dateAdded: '2026-05-01' }
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
  }
];

export const REBIRTH_DATA: RebirthTier[] = [
  { level: 1, cost: '$10,000,000', multiplier: '2x Cash Boost', unlockedCharacters: ['Baby Gronk Fanum'] },
  { level: 2, cost: '$50,000,000', multiplier: '5x Cash Boost', unlockedCharacters: ['Sigma Rizzler'] },
  { level: 3, cost: '$250,000,000', multiplier: '12x Cash Boost', unlockedCharacters: ['Grimace Sovereign'] },
  { level: 4, cost: '$1,000,000,000', multiplier: '30x Cash Boost', unlockedCharacters: ['CaseOh Prime'] },
  { level: 5, cost: '$5,000,000,000', multiplier: '100x Cash Boost', unlockedCharacters: ['Tung Tung Sah', 'Tralalelo God'] }
];
