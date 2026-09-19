/**
 * Steal a Brainrot — verified data layer.
 * Source of truth: D:\AI建站\tier1-rescue\real-data\stealabrainrot.md
 * Cross-verified against stealabrainrot.fandom.com, Beebom, GameRant, Sportskeeda,
 * Eldorado.gg and Fossbytes. Last verified: 2026-09-19.
 *
 * Editorial rules:
 * - Only entries verifiable against the forensic report are listed. No invented characters.
 * - "Tung Tung Tung Sahur" was REMOVED from the game (Noxa copyright claim, listed as
 *   Unobtainable/Removed on the Fandom Wiki) and is intentionally NOT included.
 * - Where sources conflict, the note field records both numbers explicitly.
 */

export interface CodeItem {
  code: string;
  reward: string;
  status: 'ACTIVE' | 'EXPIRED';
  isNew?: boolean;
  note?: string;
}

export type BrainrotTier =
  | 'COMMON'
  | 'RARE'
  | 'EPIC'
  | 'LEGENDARY'
  | 'MYTHIC'
  | 'BRAINROT GOD'
  | 'SECRET';

export interface BrainrotCharacter {
  id: string;
  name: string;
  tier: BrainrotTier;
  /** Verified base income in cash per second (Beebom table, cross-checked with Fandom). */
  incomePerSec: number;
  /** Verified red-carpet purchase price in cash. */
  cost: number;
  /** Factual description of what is verified about this unit. */
  description: string;
  /** Optional sourcing / conflict note shown to readers. */
  note?: string;
  icon: string;
}

export interface RebirthTier {
  level: number;
  /** Required cash. Where the Wiki itself records conflicting player reports, both are shown. */
  cost: string;
  /** Permanent cash-income multiplier granted by this rebirth (x0.5 through x17). */
  multiplier: number;
  /** One-time cash bonus paid out on rebirth. */
  cashBonus: string;
  /** Brainrot(s) that must be on your base to rebirth. */
  requiredBrainrots: string[];
  /** New Cash-shop Gear unlocked at this rebirth level. */
  gearUnlocked: string[];
}

export interface GearItem {
  id: string;
  name: string;
  /** Cash-shop price. */
  price: string;
  /** Minimum rebirth level required to buy from the shop. */
  rebirthReq: number;
  /** Effect summary paraphrased from the Fandom Gears page. */
  effect: string;
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

export const DATA_VERIFIED_DATE = 'September 19, 2026';

export const BRAINROT_CHARACTERS: BrainrotCharacter[] = [
  // ---- Common ----
  { id: 'noobini-pizzanini', name: 'Noobini Pizzanini', tier: 'COMMON', incomePerSec: 1, cost: 25, description: 'Entry-level Common brainrot that walks in on the Red Carpet. The cheapest unit in the game.', icon: '🍕' },
  { id: 'tim-cheese', name: 'Tim Cheese', tier: 'COMMON', incomePerSec: 5, cost: 500, description: 'Common cat-cheese hybrid from the Red Carpet. Early-game income filler.', icon: '🧀' },
  { id: 'fluriflura', name: 'Fluriflura', tier: 'COMMON', incomePerSec: 7.5, cost: 1000, description: 'Common flower-brainrot that spawns on the Red Carpet.', icon: '🌸' },
  { id: 'talpa-di-fero', name: 'Talpa Di Fero', tier: 'COMMON', incomePerSec: 10, cost: 1500, description: 'Common iron mole unit from the Red Carpet.', icon: '⛏️' },
  { id: 'svinina-bombardino', name: 'Svinina Bombardino', tier: 'COMMON', incomePerSec: 12.5, cost: 2000, description: 'Common pig-bomber hybrid that spawns on the Red Carpet.', icon: '💣' },
  { id: 'pipi-kiwi', name: 'Pipi Kiwi', tier: 'COMMON', incomePerSec: 15, cost: 2500, description: 'Common kiwi unit and the highest earners of the Common layer.', icon: '🥝' },
  // ---- Rare ----
  { id: 'trippi-troppi', name: 'Trippi Troppi', tier: 'RARE', incomePerSec: 20, cost: 3500, description: 'Rare shrimp-cat unit from the Red Carpet. Required brainrot for Rebirth 1.', note: 'Rebirth 1 requirement (Fandom Rebirth table).', icon: '🍤' },
  { id: 'gangster-footera', name: 'Gangster Footera', tier: 'RARE', incomePerSec: 25, cost: 4500, description: 'Rare footballer brainrot. Required brainrot for Rebirth 1.', note: 'Replaced Tung Tung Tung Sahur as the Rebirth 1 requirement after Noxa claimed the copyright and had it removed.', icon: '🦶' },
  { id: 'boneca-ambalabu', name: 'Boneca Ambalabu', tier: 'RARE', incomePerSec: 30, cost: 5000, description: 'Rare frog-tire hybrid. Required brainrot for Rebirth 2.', icon: '🐸' },
  { id: 'cacto-hipopotamo', name: 'Cacto Hipopotamo', tier: 'RARE', incomePerSec: 35, cost: 5500, description: 'Rare cactus-hippo unit that spawns on the Red Carpet.', icon: '🌵' },
  { id: 'te-te-te-sahur', name: 'Te Te Te Sahur', tier: 'RARE', incomePerSec: 37.5, cost: 7500, description: 'Rare drum unit. Required brainrot for Rebirth 8. Not to be confused with the removed Tung Tung Tung Sahur.', note: 'A separate Mythic-tier variant of the same name also exists in the game.', icon: '🥁' },
  { id: 'tric-trac-baraboom', name: 'Tric Trac Baraboom', tier: 'RARE', incomePerSec: 40, cost: 7500, description: 'Rare explosive unit from the Red Carpet.', icon: '💥' },
  // ---- Epic ----
  { id: 'brr-brr-patapim', name: 'Brr Brr Patapim', tier: 'EPIC', incomePerSec: 75, cost: 15000, description: 'Epic tree-monkey hybrid. Required brainrot for Rebirth 2.', icon: '🌳' },
  { id: 'cappuccino-assassino', name: 'Cappuccino Assassino', tier: 'EPIC', incomePerSec: 87.5, cost: 17500, description: 'Epic ninja coffee cup from the Red Carpet.', icon: '☕' },
  { id: 'trulimero-trulicina', name: 'Trulimero Trulicina', tier: 'EPIC', incomePerSec: 100, cost: 22500, description: 'Epic fish-legs unit. Required brainrot for Rebirth 3.', icon: '🐟' },
  { id: 'chimpanzini-bananini', name: 'Chimpanzini Bananini', tier: 'EPIC', incomePerSec: 110, cost: 25000, description: 'Epic banana-chimp hybrid. Required brainrot for Rebirth 3.', icon: '🍌' },
  { id: 'salamino-penguino', name: 'Salamino Penguino', tier: 'EPIC', incomePerSec: 250, cost: 37500, description: 'Epic penguin-salami unit and the top Epic earner.', note: 'Income corroborated by Fossbytes as well as Beebom.', icon: '🐧' },
  // ---- Legendary ----
  { id: 'burbaloni-loliloli', name: 'Burbaloni Loliloli', tier: 'LEGENDARY', incomePerSec: 300, cost: 50000, description: 'Legendary capybara-coconut unit from the Red Carpet.', icon: '🦫' },
  { id: 'ballerina-cappuccina', name: 'Ballerina Cappuccina', tier: 'LEGENDARY', incomePerSec: 350, cost: 60000, description: 'Legendary dancing coffee cup. One of the most recognizable mid-game units.', icon: '🩰' },
  { id: 'chef-crabracadabra', name: 'Chef Crabracadabra', tier: 'LEGENDARY', incomePerSec: 400, cost: 65000, description: 'Legendary crab chef. Required brainrot for Rebirth 4.', icon: '🦀' },
  { id: 'glorbo-fruttodrillo', name: 'Glorbo Fruttodrillo', tier: 'LEGENDARY', incomePerSec: 450, cost: 75000, description: 'Legendary watermelon-crocodile hybrid. Required brainrot for Rebirth 4.', icon: '🐊' },
  { id: 'blueberrinni-octopusini', name: 'Blueberrinni Octopusini', tier: 'LEGENDARY', incomePerSec: 550, cost: 95000, description: 'Legendary blueberry octopus unit from the Red Carpet.', icon: '🐙' },
  { id: 'strawberelli-flamingelli', name: 'Strawberelli Flamingelli', tier: 'LEGENDARY', incomePerSec: 600, cost: 100000, description: 'Legendary strawberry flamingo unit.', icon: '🦩' },
  { id: 'pandaccini-bananini', name: 'Pandaccini Bananini', tier: 'LEGENDARY', incomePerSec: 650, cost: 125000, description: 'Legendary panda-banana hybrid and the top Legendary earner.', icon: '🐼' },
  // ---- Mythic ----
  { id: 'frigo-camelo', name: 'Frigo Camelo', tier: 'MYTHIC', incomePerSec: 1000, cost: 250000, description: 'Mythic camel-fridge hybrid. Required brainrot for Rebirth 5.', icon: '🐪' },
  { id: 'orangutini-ananassini', name: 'Orangutini Ananassini', tier: 'MYTHIC', incomePerSec: 1150, cost: 275000, description: 'Mythic orangutan-pineapple unit. Required brainrot for Rebirth 5.', icon: '🦧' },
  { id: 'rhino-toasterino', name: 'Rhino Toasterino', tier: 'MYTHIC', incomePerSec: 1250, cost: 300000, description: 'Mythic rhino-toaster hybrid from the Red Carpet.', icon: '🦏' },
  { id: 'bombardiro-crocodilo', name: 'Bombardiro Crocodilo', tier: 'MYTHIC', incomePerSec: 1500, cost: 350000, description: 'Mythic bomber-crocodile plane. Required brainrot for Rebirth 6.', icon: '✈️' },
  { id: 'bombombini-gusini', name: 'Bombombini Gusini', tier: 'MYTHIC', incomePerSec: 1600, cost: 375000, description: 'Mythic bomber goose. Required brainrot for Rebirth 7.', icon: '🦢' },
  { id: 'cavallo-virtuoso', name: 'Cavallo Virtuoso', tier: 'MYTHIC', incomePerSec: 1750, cost: 400000, description: 'Mythic horse unit from the Red Carpet.', icon: '🐴' },
  { id: 'gorillo-watermelondrillo', name: 'Gorillo Watermelondrillo', tier: 'MYTHIC', incomePerSec: 2000, cost: 450000, description: 'Mythic gorilla-watermelon hybrid and the top Mythic earner.', icon: '🍉' },
  // ---- Brainrot God ----
  { id: 'cocofanto-elefanto', name: 'Cocofanto Elefanto', tier: 'BRAINROT GOD', incomePerSec: 2500, cost: 500000, description: 'Brainrot God elephant-coconut unit. Required brainrot for Rebirth 9.', note: 'Was also the Rebirth 8 requirement before that slot moved to Te Te Te Sahur.', icon: '🐘' },
  { id: 'girafa-celestre', name: 'Girafa Celestre', tier: 'BRAINROT GOD', incomePerSec: 3000, cost: 600000, description: 'Brainrot God celestial giraffe. Required brainrot for Rebirth 10.', icon: '🦒' },
  { id: 'tralalero-tralala', name: 'Tralalero Tralala', tier: 'BRAINROT GOD', incomePerSec: 5000, cost: 1000000, description: 'Brainrot God three-legged shark in Nikes. Required brainrot for Rebirth 11.', note: 'Income conflict: Beebom lists $5K/s while GameRant and Sportskeeda list $50K/s — likely a mutation/event multiplier difference. This site standardizes on $5K/s base. An event-only "Extinct" variant costs $125M and earns $450K/s.', icon: '🦈' },
  { id: 'odin-din-din-dun', name: 'Odin Din Din Dun', tier: 'BRAINROT GOD', incomePerSec: 6000, cost: 1250000, description: 'Brainrot God thunder unit. Required brainrot for Rebirth 12.', icon: '🌩️' },
  { id: 'trenostruzzo-turbo-3000', name: 'Trenostruzzo Turbo 3000', tier: 'BRAINROT GOD', incomePerSec: 7000, cost: 1750000, description: 'Brainrot God ostrich-train hybrid. Required brainrot for Rebirth 13.', icon: '🚄' },
  { id: 'trippi-troppi-troppa-trippa', name: 'Trippi Troppi Troppa Trippa', tier: 'BRAINROT GOD', incomePerSec: 7500, cost: 2000000, description: 'Brainrot God evolved form of Trippi Troppi. Required brainrot for Rebirth 14.', icon: '🍤' },
  { id: 'ballerino-lololo', name: 'Ballerino Lololo', tier: 'BRAINROT GOD', incomePerSec: 8000, cost: 2250000, description: 'Brainrot God dancing unit from the Red Carpet.', note: 'Was moved out of the Rebirth 14 requirement chain after the Rebirth 14 update.', icon: '🩰' },
  // ---- Secret ----
  { id: 'la-vacca-saturno-saturnita', name: 'La Vacca Saturno Saturnita', tier: 'SECRET', incomePerSec: 7500, cost: 5000000, description: 'Secret Saturn-cow hybrid. Announced to the whole server when it spawns on the Red Carpet.', note: 'The most commonly seen Secret on the Fandom Wiki (marked "Hated" for its high stock), and the reward of the BESTBRAINROTEVER code.', icon: '🐄' },
  { id: 'los-tralaleritos', name: 'Los Tralaleritos', tier: 'SECRET', incomePerSec: 12500, cost: 10000000, description: 'Secret trio of small Tralalero sharks. First Secret required for a Rebirth (Rebirth 16).', icon: '🦈' },
  { id: 'las-tralalaleritas', name: 'Las Tralalaleritas', tier: 'SECRET', incomePerSec: 15000, cost: 12500000, description: 'Secret female counterpart trio of the Tralalero family.', icon: '🦈' },
  { id: 'graipuss-medussi', name: 'Graipuss Medussi', tier: 'SECRET', incomePerSec: 20000, cost: 12500000, description: 'Secret grape-jellyfish unit from the Red Carpet.', icon: '🪼' },
  { id: 'la-vacca-jacko-linterino', name: 'La Vacca Jacko Linterino', tier: 'SECRET', incomePerSec: 20000, cost: 12500000, description: 'Secret pumpkin-headed cow unit.', icon: '🎃' },
  { id: 'torrtuginni-dragonfrutini', name: 'Torrtuginni Dragonfrutini', tier: 'SECRET', incomePerSec: 25000, cost: 12500000, description: 'Secret dragonfruit tortoise unit.', icon: '🐢' },
  { id: 'pot-hotspot', name: 'Pot Hotspot', tier: 'SECRET', incomePerSec: 25000, cost: 25000000, description: 'Secret boiling-pot unit from the Red Carpet.', icon: '🍲' },
  { id: 'chicleteira-bicicleteira', name: 'Chicleteira Bicicleteira', tier: 'SECRET', incomePerSec: 35000, cost: 22500000, description: 'Secret gum-bicycle unit. One of the two Secrets required for Rebirth 17.', icon: '🚲' },
  { id: 'la-grande-combinasion', name: 'La Grande Combinasion', tier: 'SECRET', incomePerSec: 50000, cost: 40000000, description: 'Secret combined mega-unit from the Red Carpet.', icon: '🧩' },
  { id: 'ketupat-kepat', name: 'Ketupat Kepat', tier: 'SECRET', incomePerSec: 60000, cost: 50000000, description: 'Secret rice-cake unit from the Red Carpet.', icon: '🍛' },
  { id: 'nuclearo-dinossauro', name: 'Nuclearo Dinossauro', tier: 'SECRET', incomePerSec: 62500, cost: 50000000, description: 'Secret irradiated dinosaur unit.', icon: '☢️' },
  { id: 'dragon-cannelloni', name: 'Dragon Cannelloni', tier: 'SECRET', incomePerSec: 75000, cost: 62500000, description: 'Secret pasta dragon unit from the Red Carpet.', icon: '🐉' },
  { id: 'los-combinasionas', name: 'Los Combinasionas', tier: 'SECRET', incomePerSec: 100000, cost: 75000000, description: 'Secret combined unit, currently the second-highest verified earner.', icon: '🧩' },
  { id: 'garama-and-madundung', name: 'Garama and Madundung', tier: 'SECRET', incomePerSec: 150000, cost: 100000000, description: 'Secret duo unit and the highest verified earner in the game at $150K/s.', icon: '🐲' }
];

export const REBIRTH_DATA: RebirthTier[] = [
  {
    level: 1,
    cost: '$500K (some players report $1M)',
    multiplier: 0.5,
    cashBonus: '$5K',
    requiredBrainrots: ['Trippi Troppi', 'Gangster Footera'],
    gearUnlocked: ['Friend Controller', 'Iron Slap', 'Gravity Coil', 'Bee Launcher']
  },
  {
    level: 2,
    cost: '$1.5M (also reported as $3M)',
    multiplier: 1,
    cashBonus: '$10K',
    requiredBrainrots: ['Boneca Ambalabu', 'Brr Brr Patapim'],
    gearUnlocked: ['Gold Slap', 'Coil Combo', 'Rage Table']
  },
  {
    level: 3,
    cost: '$12.5M',
    multiplier: 2,
    cashBonus: '$25K',
    requiredBrainrots: ['Trulimero Trulicina', 'Chimpanzini Bananini'],
    gearUnlocked: ['Diamond Slap', 'Grapple Hook', 'Taser Gun']
  },
  {
    level: 4,
    cost: '$35M',
    multiplier: 3,
    cashBonus: '$50K',
    requiredBrainrots: ['Chef Crabracadabra', 'Glorbo Fruttodrillo'],
    gearUnlocked: ['Emerald Slap', 'Invisibility Cloak', 'Boogie Bomb']
  },
  {
    level: 5,
    cost: '$100M',
    multiplier: 4,
    cashBonus: '$100K',
    requiredBrainrots: ['Frigo Camelo'],
    gearUnlocked: ["Ruby Slap", "Medusa's Head"]
  },
  {
    level: 6,
    cost: '$350M',
    multiplier: 5,
    cashBonus: '$250K',
    requiredBrainrots: ['Bombardiro Crocodilo'],
    gearUnlocked: ['Dark Matter Slap', 'Web Slinger']
  },
  {
    level: 7,
    cost: '$1B',
    multiplier: 6,
    cashBonus: '$500K',
    requiredBrainrots: ['Bombombini Gusini'],
    gearUnlocked: ['Flame Slap', 'Quantum Cloner', 'All-Seeing Sentry']
  },
  {
    level: 8,
    cost: '$5B',
    multiplier: 7,
    cashBonus: '$1M',
    requiredBrainrots: ['Te Te Te Sahur'],
    gearUnlocked: ['Nuclear Slap', 'Rainbowrath Sword']
  },
  {
    level: 9,
    cost: '$12.5B (also reported as $25B)',
    multiplier: 8,
    cashBonus: '$5M',
    requiredBrainrots: ['Cocofanto Elefanto'],
    gearUnlocked: ['Galaxy Slap', 'Laser Cape']
  },
  {
    level: 10,
    cost: '$125B (also reported as $250B)',
    multiplier: 9,
    cashBonus: '$25M',
    requiredBrainrots: ['Girafa Celestre'],
    gearUnlocked: ['Glitched Slap', 'Body Swap Potion']
  },
  {
    level: 11,
    cost: '$800B (also reported as $1T)',
    multiplier: 10,
    cashBonus: '$100M',
    requiredBrainrots: ['Tralalero Tralala'],
    gearUnlocked: ['Splatter Slap', 'Paintball Gun']
  },
  {
    level: 12,
    cost: '$3.5T (also reported as $7T)',
    multiplier: 11,
    cashBonus: '$500M',
    requiredBrainrots: ['Odin Din Din Dun'],
    gearUnlocked: ['Heart Balloon', 'Magnet']
  },
  {
    level: 13,
    cost: '$14T (also reported as $35T)',
    multiplier: 12,
    cashBonus: '$1B',
    requiredBrainrots: ['Trenostruzzo Turbo 3000'],
    gearUnlocked: ['Megaphone', 'Beehive']
  },
  {
    level: 14,
    cost: '$40T (also reported as $100T)',
    multiplier: 13,
    cashBonus: '$2.5T',
    requiredBrainrots: ['Trippi Troppi Troppa Trippa'],
    gearUnlocked: ['Gummy Bear', 'Subspace Mine']
  },
  {
    level: 15,
    cost: '$100T (also reported as $500T)',
    multiplier: 15,
    cashBonus: '$10T',
    requiredBrainrots: ['Pakrahmatmamat'],
    gearUnlocked: ['Heatseeker']
  },
  {
    level: 16,
    cost: '$1Qa',
    multiplier: 16,
    cashBonus: '$25T',
    requiredBrainrots: ['Los Tralaleritos'],
    gearUnlocked: ['Attack Doge']
  },
  {
    level: 17,
    cost: '$2.5Qa',
    multiplier: 17,
    cashBonus: '$50T',
    requiredBrainrots: ['Job Job Job Sahur', 'Chicleteira Bicicleteira'],
    gearUnlocked: ['Giant Potion']
  }
];

/**
 * Verified Cash-shop Gear (39 items, Fandom Gears page).
 * Prices are the shop unlock prices; purchase requires the listed rebirth level.
 * Event-wheel and Robux-shop gear prices were NOT verifiable and are intentionally omitted.
 */
export const GEAR_DATA: GearItem[] = [
  { id: 'slap', name: 'Slap', price: '$500', rebirthReq: 0, effect: 'Stronger and longer knockback than the default baseball bat.' },
  { id: 'speed-coil', name: 'Speed Coil', price: '$750', rebirthReq: 0, effect: 'Increases walk speed by 50% (34 to 51).' },
  { id: 'trap', name: 'Trap', price: '$1K', rebirthReq: 0, effect: 'Freezes a thief for 7 seconds. Maximum 5 active on the map at once.' },
  { id: 'iron-slap', name: 'Iron Slap', price: '$2.5K', rebirthReq: 1, effect: 'Upgraded version of the Slap.' },
  { id: 'gravity-coil', name: 'Gravity Coil', price: '$3K', rebirthReq: 1, effect: 'Doubles jump height and slows your fall.' },
  { id: 'bee-launcher', name: 'Bee Launcher', price: '$10K', rebirthReq: 1, effect: 'Reverses the hit player\'s controls for 5 seconds.' },
  { id: 'gold-slap', name: 'Gold Slap', price: '$15K', rebirthReq: 2, effect: 'Knocks victims back even further.' },
  { id: 'coil-combo', name: 'Coil Combo', price: '$20K', rebirthReq: 2, effect: 'Combines Speed Coil and Gravity Coil effects in one item.' },
  { id: 'rage-table', name: 'Rage Table', price: '$25K', rebirthReq: 2, effect: 'Throw a table that knocks down every player in its path.' },
  { id: 'diamond-slap', name: 'Diamond Slap', price: '$50K', rebirthReq: 3, effect: 'Upgraded version of the Gold Slap.' },
  { id: 'grapple-hook', name: 'Grapple Hook', price: '$75K', rebirthReq: 3, effect: 'Hook-shot movement tool for fast repositioning.' },
  { id: 'taser-gun', name: 'Taser Gun', price: '$100K', rebirthReq: 3, effect: 'Stuns the target for 3 seconds.' },
  { id: 'emerald-slap', name: 'Emerald Slap', price: '$200K', rebirthReq: 4, effect: 'Upgraded version of the Diamond Slap.' },
  { id: 'invisibility-cloak', name: 'Invisibility Cloak', price: '$300K', rebirthReq: 4, effect: 'Turns you invisible and doubles your movement speed.' },
  { id: 'boogie-bomb', name: 'Boogie Bomb', price: '$500K', rebirthReq: 4, effect: 'Players in the radius drop their carried Brainrot and dance for 10 seconds.' },
  { id: 'ruby-slap', name: 'Ruby Slap', price: '$1M', rebirthReq: 5, effect: 'Upgraded version of the Emerald Slap.' },
  { id: 'medusas-head', name: "Medusa's Head", price: '$5M', rebirthReq: 5, effect: 'Petrifies players in an area for 3 seconds.' },
  { id: 'dark-matter-slap', name: 'Dark Matter Slap', price: '$1.5M', rebirthReq: 6, effect: 'Upgraded version of the Ruby Slap.' },
  { id: 'web-slinger', name: 'Web Slinger', price: '$2M', rebirthReq: 6, effect: 'Webs a player for 10 seconds and lets you drag them around.' },
  { id: 'flame-slap', name: 'Flame Slap', price: '$2.5M', rebirthReq: 7, effect: 'Upgraded version of the Dark Matter Slap.' },
  { id: 'quantum-cloner', name: 'Quantum Cloner', price: '$3.5M', rebirthReq: 7, effect: 'Deploys a clone decoy you can swap places with.' },
  { id: 'all-seeing-sentry', name: 'All-Seeing Sentry', price: '$5M', rebirthReq: 7, effect: 'Auto-turret for 60 seconds that can spot invisible players through walls.' },
  { id: 'nuclear-slap', name: 'Nuclear Slap', price: '$6M', rebirthReq: 8, effect: 'Upgraded version of the Flame Slap.' },
  { id: 'rainbowrath-sword', name: 'Rainbowrath Sword', price: '$10M', rebirthReq: 8, effect: 'Every third hit dashes forward and flings players in the path.' },
  { id: 'galaxy-slap', name: 'Galaxy Slap', price: '$15M', rebirthReq: 9, effect: 'Upgraded version of the Nuclear Slap.' },
  { id: 'laser-cape', name: 'Laser Cape', price: '$20M', rebirthReq: 9, effect: 'Fires eye lasers, reveals invisible players, and adds 50% move speed.' },
  { id: 'glitched-slap', name: 'Glitched Slap', price: '$25M', rebirthReq: 10, effect: 'Upgraded version of the Galaxy Slap.' },
  { id: 'body-swap-potion', name: 'Body Swap Potion', price: '$50M', rebirthReq: 10, effect: 'Swaps your position with the target player.' },
  { id: 'splatter-slap', name: 'Splatter Slap', price: '$75M', rebirthReq: 11, effect: 'Upgraded Glitched Slap that splatters paint over the victim\'s screen for 5 seconds.' },
  { id: 'paintball-gun', name: 'Paintball Gun', price: '$100M', rebirthReq: 11, effect: 'Hits slow the victim by 60%; a 5-hit combo triggers a stun.' },
  { id: 'heart-balloon', name: 'Heart Balloon', price: '$150M', rebirthReq: 12, effect: 'Lifts you into the air, floating for 10 seconds.' },
  { id: 'magnet', name: 'Magnet', price: '$200M', rebirthReq: 12, effect: 'Pulls the targeted player toward you.' },
  { id: 'megaphone', name: 'Megaphone', price: '$250M', rebirthReq: 13, effect: 'Area jumpscare that stuns everyone in range.' },
  { id: 'beehive', name: 'Beehive', price: '$300M', rebirthReq: 13, effect: 'Base defense for 60 seconds, same effect as the Bee Launcher.' },
  { id: 'gummy-bear', name: 'Gummy Bear (Gummy Slap)', price: '$400M', rebirthReq: 14, effect: 'Hits freeze the victim inside gummy for 3 seconds.' },
  { id: 'subspace-mine', name: 'Subspace Mine', price: '$500M', rebirthReq: 14, effect: 'Invisible mine (max 2) that stuns for 9 seconds on trigger.' },
  { id: 'heatseeker', name: 'Heatseeker', price: '$700M', rebirthReq: 15, effect: 'Homing missile that locks onto the nearest player.' },
  { id: 'attack-doge', name: 'Attack Doge', price: '$1B', rebirthReq: 16, effect: 'Summons a guard dog that stuns anyone it touches.' },
  { id: 'giant-potion', name: 'Giant Potion', price: '$1.5B', rebirthReq: 17, effect: 'Grows you 4x larger for 20 seconds with stun immunity. The most expensive shop item.' }
];

/** Rebirth mechanics trivia verified on the Fandom Rebirth page — safe for FAQ content. */
export const REBIRTH_TRIVIA: string[] = [
  'Rebirth wipes your current cash and base progress in exchange for a permanent income multiplier, a one-time cash bonus, +10 seconds of base lock time per level, and one extra base slot (Rebirth 1 gives no slot).',
  'Rebirth 5 through 16 each require exactly one Brainrot; Rebirth 1-4 require two, and Rebirth 17 is the only level that requires two Secrets.',
  'Common and OG rarities are never required for any Rebirth.',
  'Rebirth 8 is the last level that requires a Mythic, Rebirth 15 is the last that requires a Brainrot God, and Rebirth 11 is the last level that rewards a Slap.',
  'A Brainrot that is being stolen disappears if its owner rebirths mid-heist, and one walking to your base is sent back to the Red Carpet.',
  'A new Rebirth level is added roughly once a month — the Wiki currently documents 17 levels (Eldorado reported 19, a discrepancy we flag rather than hide).'
];
