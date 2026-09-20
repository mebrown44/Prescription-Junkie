/* =========================================================
   PRESCRIPTION JUNKIE — shared data + logic
   Loaded via <script src="./data.js"></script> on every
   account page. Works fine over file:// (unlike fetch()).
   ========================================================= */

// ---------- USERS (security.txt) ----------
const USERS = [
  { id: "001", username: "mbrown",        password: "steelhacks", name: "Margo Brown",              phone: "2406601242",  email: "margobrownmeb@gmail.com" },
  { id: "002", username: "Oldie",         password: "bones",      name: "DJ Twizzle",                phone: "2084456214",  email: "margobrownmeb@gmail.com" },
  { id: "003", username: "DebukinDonuts", password: "deb",        name: "Ashley Debukin",            phone: "4150098786",  email: "adebukin11@gmail.com" },
  { id: "004", username: "Dish",          password: "hubby",      name: "Thirishaa Pothini Balaji",  phone: "3018527743",  email: "thirishaapbnj@gmail.com" },
  { id: "005", username: "honeybee",      password: "kentucky",   name: "John Wawa",                 phone: "18004449292", email: "John@wawa.com" },
];

// ---------- PREFERENCES (preferences.txt) ----------
// values order: [In Network, Walking Distance, Within 5mi, Quick Service,
//                Polite Staff, Clean, Prescriptions In Stock,
//                ASL/HoH Friendly, Sight Friendly, Accessible Parking]
const PREF_LABELS = [
  "In Network", "Walking Distance", "Within 5 Miles", "Quick Service",
  "Polite Staff", "Clean", "Prescriptions In Stock",
  "ASL / HoH Friendly", "Sight Friendly", "Accessible Parking",
];

// NOTE: source row 005 only had 9 values — padded with a trailing 0.
const PREFERENCES = {
  "001": { pharmacies: ["Giant"],                    values: [3, 1, 2, 3, 3, 5, 5, 0, 0, 5] },
  "002": { pharmacies: ["CVS", "Walgreens"],          values: [1, 0, 1, 5, 5, 5, 3, 0, 0, 3] },
  "003": { pharmacies: ["Target"],                    values: [4, 3, 5, 2, 4, 5, 5, 5, 0, 1] },
  "004": { pharmacies: ["CVS"],                       values: [5, 3, 4, 1, 0, 5, 3, 0, 3, 2] },
  "005": { pharmacies: ["Rx Discount Pharmacy"],      values: [5, 1, 2, 5, 3, 2, 5, 0, 0, 0] },
};

// ---------- PRESCRIPTIONS (prescription-info.txt) ----------
const PRESCRIPTIONS = [
  { userId: "001", name: "Sertraline HCL",   id: "se001", dose: "150 mg",                    lastFilled: "08/16/2026" },
  { userId: "001", name: "Spironolactone",   id: "sp002", dose: "50 mg",                     lastFilled: "08/16/2026" },
  { userId: "001", name: "Birth Control",    id: "bi003", dose: "1.5/30",                    lastFilled: "08/16/2026" },
  { userId: "001", name: "Metformin",        id: "me004", dose: "50 mg, twice daily",        lastFilled: "09/09/2026" },
  { userId: "002", name: "Donepezil",        id: "do005", dose: "10 mg",                     lastFilled: "08/28/2026" },
  { userId: "002", name: "Memantine",        id: "me006", dose: "10 mg, twice daily",        lastFilled: "08/28/2026" },
  { userId: "002", name: "Lactulose",        id: "la007", dose: "30 mL, three times daily",  lastFilled: "09/02/2026" },
  { userId: "002", name: "Rifaximin",        id: "ri008", dose: "550 mg, twice daily",       lastFilled: "09/02/2026" },
  { userId: "002", name: "Furosemide",       id: "fu009", dose: "40 mg",                     lastFilled: "08/19/2026" },
  { userId: "002", name: "Propranolol",      id: "pr010", dose: "20 mg, twice daily",        lastFilled: "08/19/2026" },
  { userId: "002", name: "Omeprazole",       id: "om011", dose: "20 mg",                     lastFilled: "09/05/2026" },
  { userId: "002", name: "Thiamine",         id: "th012", dose: "100 mg",                    lastFilled: "09/05/2026" },
  { userId: "003", name: "Albuterol",        id: "al013", dose: "90 mcg inhaler",            lastFilled: "09/01/2026" },
  { userId: "003", name: "Iron Supplement",  id: "ir014", dose: "65 mg",                     lastFilled: "08/22/2026" },
  { userId: "004", name: "Buspirone",        id: "bu015", dose: "10 mg, twice daily",        lastFilled: "09/10/2026" },
  { userId: "005", name: "Atorvastatin",     id: "at016", dose: "20 mg",                     lastFilled: "08/25/2026" },
  { userId: "005", name: "Lisinopril",       id: "li017", dose: "10 mg",                     lastFilled: "08/25/2026" },
  { userId: "005", name: "Metformin",        id: "me018", dose: "500 mg, twice daily",       lastFilled: "09/04/2026" },
  { userId: "005", name: "Amlodipine",       id: "am019", dose: "5 mg",                      lastFilled: "09/04/2026" },
];

// ---------- PHARMACIES ----------
// Representative sample pulled from pharmacy-master.csv (real names/
// addresses/chain flags). The full file is 3,200+ rows and mixes two
// different coordinate systems, so this sample drives the "nearby /
// find pharmacy" features instead of true geolocation. chain: 1 = chain, 0 = independent.
const PHARMACIES = [
  { name: "CVS PHARMACY #10685",        address: "675 K St NW, Washington, DC",         chain: 1 },
  { name: "CVS/PHARMACY #1337",         address: "1403 Wisconsin Ave NW, Washington, DC", chain: 1 },
  { name: "CVS/PHARMACY #7174",         address: "1200 1st St NE, Washington, DC",      chain: 1 },
  { name: "WALGREENS - 9878",           address: "1009 N 9th St, Stroudsburg, PA",      chain: 1 },
  { name: "WALGREENS - 7739",           address: "330 S Main Ave, Scranton, PA",        chain: 1 },
  { name: "GIANT",                      address: "3560 State Route 611, Bartonsville, PA", chain: 1 },
  { name: "GIANT - 81",                 address: "70 S Locust St, Hazleton, PA",        chain: 1 },
  { name: "WAL-MART SUPERCENTER - 1794",address: "100 Lunger Dr, Bloomsburg, PA",       chain: 1 },
  { name: "TARGET PHARMACY",            address: "3100 14th St NW, Washington, DC",     chain: 1 },
  { name: "COSTCO PHARMACY #1120",      address: "2441 Market St NE, Washington, DC",   chain: 1 },
  { name: "RITE AID - 1426",            address: "1650 Main St, Olyphant, PA",          chain: 0 },
  { name: "RITE AID - 218",             address: "5 E Main St, Nanticoke, PA",          chain: 0 },
  { name: "ALPHA PEOPLES DRUGS",        address: "1638 R St NW Ste 1, Washington, DC",  chain: 0 },
  { name: "DUPONT CIRCLE PHARMACY",     address: "1506 21st St NW Ste 100, Washington, DC", chain: 0 },
  { name: "CAPITAL CARE PHARMACY",      address: "3845 Pennsylvania Ave SE, Washington, DC", chain: 0 },
  { name: "COMMUNITY OF HOPE PHARMACY", address: "2120 Bladensburg Rd NE, Washington, DC", chain: 0 },
  { name: "CENTRAL PHARMACY LLC",       address: "2202 Martin Luther King Jr Ave SE, Washington, DC", chain: 0 },
  { name: "SHAFERS PHARMACY",           address: "11 Center St, Tamaqua, PA",           chain: 0 },
  { name: "CRESTWOOD PHARMACY",         address: "10 S Mountain Blvd, Mountain Top, PA", chain: 0 },
  { name: "COSTA DRUGS",                address: "609 Prospect Ave, Scranton, PA",      chain: 0 },
  { name: "Rx Discount Pharmacy",       address: "Local independent pharmacy",          chain: 0 },
];

/* =========================================================
   SESSION HELPERS
   ========================================================= */
function getCurrentUserId() {
  return sessionStorage.getItem("loggedInUserId") || "001"; // default for direct-open testing
}

function getCurrentUser() {
  return USERS.find(u => u.id === getCurrentUserId());
}

function getPrescriptionsForUser(userId) {
  return PRESCRIPTIONS.filter(p => p.userId === userId);
}

function getPreferences(userId) {
  return PREFERENCES[userId] || { pharmacies: ["Unknown"], values: PREF_LABELS.map(() => 0) };
}

function getCurrentPharmacyName(userId) {
  return getPreferences(userId).pharmacies[0];
}

function findPharmacyByName(name) {
  return PHARMACIES.find(p => p.name.toLowerCase() === String(name).toLowerCase());
}

/* =========================================================
   CORE FEATURES: switching pharmacies + transferring scripts
   In-memory only — resets on reload since there's no backend.
   ========================================================= */

// Pick up to n pharmacies that are NOT the user's current pharmacy.
function getNearbyPharmacies(userId, n = 3) {
  const current = getCurrentPharmacyName(userId);
  const others = PHARMACIES.filter(p => p.name.toLowerCase() !== String(current).toLowerCase());
  const shuffled = [...others].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

// Randomly generated "attribute" scores for a pharmacy card, weighted
// by whether it's a chain (chains skew toward network/speed; independents
// skew toward staff/cleanliness) — matches the [Att.1][Att.2][Att.3] circles.
function computePharmacyAttributes(pharmacy) {
  const chainLeaning = ["In Network", "Quick Service", "Accessible Parking"];
  const indieLeaning = ["Polite Staff", "Clean", "ASL / HoH Friendly", "Sight Friendly"];
  const pool = pharmacy.chain ? [...chainLeaning, ...indieLeaning] : [...indieLeaning, ...chainLeaning];

  const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
  return shuffled.map(label => {
    const favored = pharmacy.chain ? chainLeaning.includes(label) : indieLeaning.includes(label);
    const min = favored ? 3 : 1;
    const max = favored ? 5 : 4;
    const score = Math.floor(Math.random() * (max - min + 1)) + min;
    return { label, score };
  });
}

// Switches the user's current pharmacy (moves old current into "past").
function switchCurrentPharmacy(userId, newPharmacyName) {
  const prefs = getPreferences(userId);
  const oldCurrent = prefs.pharmacies[0];
  prefs.pharmacies = [newPharmacyName, ...prefs.pharmacies.filter(p => p !== newPharmacyName)];
  return { oldCurrent, newCurrent: newPharmacyName };
}

// "Transfers" a prescription by switching the user's current pharmacy
// to the chosen one (this data model doesn't tie individual scripts to
// individual pharmacies — the whole account has one active pharmacy).
function transferPrescription(userId, prescriptionId, newPharmacyName) {
  return switchCurrentPharmacy(userId, newPharmacyName);
}

function addPrescriptionVisual(userId, name) {
  const id = name.slice(0, 2).toLowerCase() + String(Math.floor(Math.random() * 900) + 100);
  const newRx = {
    userId,
    name,
    id,
    dose: "TBD",
    lastFilled: new Date().toLocaleDateString("en-US"),
  };
  PRESCRIPTIONS.push(newRx);
  return newRx;
}
