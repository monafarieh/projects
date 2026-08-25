const symbols = `H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og`.split(' ');
const englishElementNames = {
  H:'Hydrogen', He:'Helium', Li:'Lithium', Be:'Beryllium', B:'Boron', C:'Carbon', N:'Nitrogen', O:'Oxygen', F:'Fluorine', Ne:'Neon',
  Na:'Sodium', Mg:'Magnesium', Al:'Aluminium', Si:'Silicon', P:'Phosphorus', S:'Sulfur', Cl:'Chlorine', Ar:'Argon', K:'Potassium', Ca:'Calcium',
  Fe:'Iron', Co:'Cobalt', Ni:'Nickel', Cu:'Copper', Zn:'Zinc', Ga:'Gallium', Ge:'Germanium', As:'Arsenic', Se:'Selenium', Br:'Bromine', I:'Iodine',
  Rb:'Rubidium', Sr:'Strontium', Ag:'Silver', Cd:'Cadmium', In:'Indium', Sn:'Tin', Ba:'Barium', Hg:'Mercury', Pb:'Lead', Bi:'Bismuth', Au:'Gold'
};
Object.assign(englishElementNames, { Sc:'Scandium', Ti:'Titanium', V:'Vanadium', Cr:'Chromium', Mn:'Manganese', Kr:'Krypton', Y:'Yttrium', Zr:'Zirconium', Nb:'Niobium', Mo:'Molybdenum', Tc:'Technetium', Ru:'Ruthenium', Rh:'Rhodium', Pd:'Palladium', Sb:'Antimony', Te:'Tellurium', Xe:'Xenon', Cs:'Caesium', La:'Lanthanum', Ce:'Cerium', Pr:'Praseodymium', Nd:'Neodymium', Pm:'Promethium', Sm:'Samarium', Eu:'Europium', Gd:'Gadolinium', Tb:'Terbium', Dy:'Dysprosium', Ho:'Holmium', Er:'Erbium', Tm:'Thulium', Yb:'Ytterbium', Lu:'Lutetium', Hf:'Hafnium', Ta:'Tantalum', W:'Tungsten', Re:'Rhenium', Os:'Osmium', Ir:'Iridium', Pt:'Platinum', Tl:'Thallium', Po:'Polonium', At:'Astatine', Rn:'Radon', Fr:'Francium', Ra:'Radium', Ac:'Actinium', Th:'Thorium', Pa:'Protactinium', U:'Uranium', Np:'Neptunium', Pu:'Plutonium', Am:'Americium', Cm:'Curium', Bk:'Berkelium', Cf:'Californium', Es:'Einsteinium', Fm:'Fermium', Md:'Mendelevium', No:'Nobelium', Lr:'Lawrencium', Rf:'Rutherfordium', Db:'Dubnium', Sg:'Seaborgium', Bh:'Bohrium', Hs:'Hassium', Mt:'Meitnerium', Ds:'Darmstadtium', Rg:'Roentgenium', Cn:'Copernicium', Nh:'Nihonium', Fl:'Flerovium', Mc:'Moscovium', Lv:'Livermorium', Ts:'Tennessine', Og:'Oganesson' });
const elementName = symbol => englishElementNames[symbol] || `Element ${symbols.indexOf(symbol) + 1}`;
const names = `هیدروژن هلیوم لیتیم بریلیم بور کربن نیتروژن اکسیژن فلوئور نئون سدیم منیزیم آلومینیوم سیلیسیم فسفر گوگرد کلر آرگون پتاسیم کلسیم اسکاندیم تیتانیم وانادیم کروم منگنز آهن کبالت نیکل مس روی گالیم ژرمانیم آرسنیک سلنیوم برم کریپتون روبیدیم استرانسیم ایتریم زیرکونیم نیوبیم مولیبدن تکنسیم روتنیم رودیوم پالادیم نقره کادمیم ایندیم قلع آنتیموان تلوریم ید زنون سزیم باریم لانتان سریم پرازئودیمیم نئودیمیم پرومتیم ساماریم یوروپیم گادولینیم تربیم دیسپروزیم هولمیم اربیم تولیم ایتربیم لوتتیم هافنیم تانتالوم تنگستن رنیم اسمیم ایریدیم پلاتین طلا جیوه تالیم سرب بیسموت پولونیم آستاتین رادون فرانسیم رادیم اکتینیم توریم پروتاکتینیم اورانیم نپتونیم پلوتونیم آمریکیم کوریم برکلیم کالیفرنیم اینشتینیم فرمیم مندلیفیم نوبلیم لورنسیم رادرفوردیم دوبنیم سیبورگیم بوهریم هاسیم مایتنریم دارمشتاتیم رنتگنیم دارمشتاتیم رنتگنیم کوپرنیسیم نیهونیوم فلروویم مسکوویم لیورموریوم تنسین اوگانسون`.split(' ');
const layout = [[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[3,4,0,0,0,0,0,0,0,0,0,0,5,6,7,8,9,10],[11,12,0,0,0,0,0,0,0,0,0,0,13,14,15,16,17,18],Array.from({length:18},(_,i)=>i+19),Array.from({length:18},(_,i)=>i+37),[55,56,57,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86],[87,88,89,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]];
const table = document.querySelector('#periodic-table');
const detail = document.querySelector('#workspace-message');
const canvas = document.querySelector('#workspace-canvas');
const trash = document.querySelector('#trash-bin');
const undoButton = document.querySelector('#undo-reaction');
const clearWorkbenchButton = document.querySelector('#clear-workbench');
const reactionFilter = document.querySelector('#reaction-filter');
const reactionList = document.querySelector('#reaction-list');
const reactionCategory = document.querySelector('#reaction-category');
const materialSearch = document.querySelector('#material-search');
const materialResults = document.querySelector('#material-results');
const conditionButtons = [...document.querySelectorAll('[data-condition]')];
const shelfButtons = [...document.querySelectorAll('[data-shelf]')];
const producedMaterials = new Map();
const reactionStack = [];
let selectedReactionElement = null;
let selectedReactionSpecies = null;
const superscripts = {'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉'};
const metalNumbers = new Set([...Array(2).keys()].map(i=>i+3).concat([...Array(12).keys()].map(i=>i+19),[37,38,39,...Array(12).keys()].map(i=>i+40),[55,56,...Array(12).keys()].map(i=>i+72),[87,88,...Array(12).keys()].map(i=>i+104)));

function formula(composition) {
  return Object.entries(composition).sort(([a],[b]) => {
    const aMetal = metalNumbers.has(symbols.indexOf(a)+1), bMetal = metalNumbers.has(symbols.indexOf(b)+1);
    return aMetal === bMetal ? 0 : (aMetal ? -1 : 1);
  }).map(([symbol,count]) => symbol + (count > 1 ? String(count).split('').map(n=>superscripts[n]).join('') : '')).join('');
}
function plainFormula(composition) {
  return Object.entries(composition).sort(([a],[b]) => {
    const aMetal = metalNumbers.has(symbols.indexOf(a)+1), bMetal = metalNumbers.has(symbols.indexOf(b)+1);
    return aMetal === bMetal ? 0 : (aMetal ? -1 : 1);
  }).map(([symbol,count]) => symbol + (count > 1 ? count : '')).join('');
}
const compoundNames = { H2O:'Water', O2:'Oxygen', H2:'Hydrogen', N2:'Nitrogen', Cl2:'Chlorine', Fe2O3:'Iron(III) oxide', NaCl:'Sodium chloride', MgO:'Magnesium oxide', CO2:'Carbon dioxide', NH3:'Ammonia', SO2:'Sulfur dioxide', SO3:'Sulfur trioxide', H2SO4:'Sulfuric acid', CaO:'Calcium oxide', HCl:'Hydrogen chloride', Al2O3:'Aluminium oxide', SiO2:'Silicon dioxide', KCl:'Potassium chloride', KBr:'Potassium bromide', LiF:'Lithium fluoride', CaCl2:'Calcium chloride', P2O5:'Phosphorus pentoxide' };
Object.assign(compoundNames, { LiOH:'Lithium hydroxide', NaOH:'Sodium hydroxide', KOH:'Potassium hydroxide', Na2SO4:'Sodium sulfate', 'Ca(OH)2':'Calcium hydroxide', 'Mg(OH)2':'Magnesium hydroxide', MgCl2:'Magnesium chloride', FeCl2:'Iron(II) chloride', SnCl2:'Tin(II) chloride', H2CO3:'Carbonic acid', H2SO3:'Sulfurous acid', H3PO4:'Phosphoric acid', MgCO3:'Magnesium carbonate' });
// These elements occur as stable diatomic molecules under ordinary conditions.
const naturalForms = { H:2, N:2, O:2, F:2, Cl:2, Br:2, I:2 };
// The workbench deliberately only combines pairs with a known educational reaction.
// A product formula can include the correct stoichiometric ratio even when one ball of each element was dragged.
const knownReactions = {
  'H2|O2': { H:2, O:1 }, 'Fe|O2': { Fe:2, O:3 }, 'Cl2|Na': { Na:1, Cl:1 },
  'Mg|O2': { Mg:1, O:1 }, 'C|O2': { C:1, O:2 }, 'H2|N2': { N:1, H:3 },
  'O2|S': { S:1, O:2 }, 'Ca|O2': { Ca:1, O:1 }, 'Cl2|H2': { H:1, Cl:1 },
  'Al|O2': { Al:2, O:3 }, 'O2|Si': { Si:1, O:2 }, 'Cl2|K': { K:1, Cl:1 },
  'Br2|K': { K:1, Br:1 }, 'F2|Li': { Li:1, F:1 }, 'Ca|Cl2': { Ca:1, Cl:2 }, 'O2|P': { P:2, O:5 },
  'Fe|S': { Fe:1, S:1 }, 'Cl2|Mg': { Mg:1, Cl:2 }, 'Br2|Na': { Na:1, Br:1 },
  'I2|K': { K:1, I:1 }, 'Cu|O2': { Cu:1, O:1 }, 'O2|Zn': { Zn:1, O:1 }
};
const secondaryReactions = {
  // Mg + 2H2O -> Mg(OH)2 + H2. The reaction is slow in cold water because of surface passivation.
  'H2O|Mg': {
    products:[
      { composition:{ Mg:1, O:2, H:2 }, species:'Mg(OH)2', display:'Mg(OH)₂', name:'Magnesium hydroxide' },
      { composition:{ H:2 }, species:'H2', display:'H₂', name:'Hydrogen' }
    ],
    equation:'Mg + 2H₂O → Mg(OH)₂ + H₂', guide:'Guide: slow in cold water; faster with heat'
  },
  'H2O|Na': { products:[{ composition:{ Na:1, O:1, H:1 }, species:'NaOH', display:'NaOH', name:'Sodium hydroxide' }, { composition:{ H:2 }, species:'H2', display:'H₂', name:'Hydrogen' }], equation:'2Na + 2H₂O → 2NaOH + H₂', guide:'Guide: vigorous reaction' },
  'H2O|Li': { products:[{ composition:{ Li:1, O:1, H:1 }, species:'LiOH', display:'LiOH', name:'Lithium hydroxide' }, { composition:{ H:2 }, species:'H2', display:'H₂', name:'Hydrogen' }], equation:'2Li + 2H₂O → 2LiOH + H₂', guide:'Guide: water; vigorous reaction' },
  'Ca|H2O': { products:[{ composition:{ Ca:1, O:2, H:2 }, species:'Ca(OH)2', display:'Ca(OH)₂', name:'Calcium hydroxide' }, { composition:{ H:2 }, species:'H2', display:'H₂', name:'Hydrogen' }], equation:'Ca + 2H₂O → Ca(OH)₂ + H₂' },
  'Fe|HCl': { products:[{ composition:{ Fe:1, Cl:2 }, species:'FeCl2', display:'FeCl₂', name:'Iron(II) chloride' }, { composition:{ H:2 }, species:'H2', display:'H₂', name:'Hydrogen' }], equation:'Fe + 2HCl → FeCl₂ + H₂', guide:'Guide: dilute HCl; slow reaction' },
  'HCl|Mg': { products:[{ composition:{ Mg:1, Cl:2 }, species:'MgCl2', display:'MgCl₂', name:'Magnesium chloride' }, { composition:{ H:2 }, species:'H2', display:'H₂', name:'Hydrogen' }], equation:'Mg + 2HCl → MgCl₂ + H₂' },
  'HCl|Zn': { products:[{ composition:{ Zn:1, Cl:2 }, species:'ZnCl2', display:'ZnCl₂', name:'Zinc chloride' }, { composition:{ H:2 }, species:'H2', display:'H₂', name:'Hydrogen' }], equation:'Zn + 2HCl → ZnCl₂ + H₂' },
  'Ca|HCl': { products:[{ composition:{ Ca:1, Cl:2 }, species:'CaCl2', display:'CaCl₂', name:'Calcium chloride' }, { composition:{ H:2 }, species:'H2', display:'H₂', name:'Hydrogen' }], equation:'Ca + 2HCl → CaCl₂ + H₂' },
  'HCl|Sn': { products:[{ composition:{ Sn:1, Cl:2 }, species:'SnCl2', display:'SnCl₂', name:'Tin(II) chloride' }, { composition:{ H:2 }, species:'H2', display:'H₂', name:'Hydrogen' }], equation:'Sn + 2HCl → SnCl₂ + H₂', guide:'Guide: dilute HCl; slow reaction' },
  'H2O|MgO': { product:{ Mg:1, O:2, H:2 }, species:'Mg(OH)2', display:'Mg(OH)₂', name:'Magnesium hydroxide', equation:'MgO + H₂O → Mg(OH)₂' },
  'CaO|H2O': { product:{ Ca:1, O:2, H:2 }, species:'Ca(OH)2', display:'Ca(OH)₂', name:'Calcium hydroxide', equation:'CaO + H₂O → Ca(OH)₂' },
  'CO2|H2O': { product:{ H:2, C:1, O:3 }, species:'H2CO3', display:'H₂CO₃', name:'Carbonic acid', equation:'CO₂ + H₂O ⇌ H₂CO₃' },
  'H2O|SO2': { product:{ H:2, S:1, O:3 }, species:'H2SO3', display:'H₂SO₃', name:'Sulfurous acid', equation:'SO₂ + H₂O ⇌ H₂SO₃' },
  'H2O|P2O5': { products:[{ composition:{ H:3, P:1, O:4 }, species:'H3PO4', display:'H₃PO₄', name:'Phosphoric acid' }, { composition:{ H:3, P:1, O:4 }, species:'H3PO4', display:'H₃PO₄', name:'Phosphoric acid' }], equation:'P₂O₅ + 3H₂O → 2H₃PO₄' },
  'CO2|MgO': { product:{ Mg:1, C:1, O:3 }, species:'MgCO3', display:'MgCO₃', name:'Magnesium carbonate', equation:'MgO + CO₂ → MgCO₃' },
  'O2|SO2': { product:{ S:1, O:3 }, species:'SO3', display:'SO₃', name:'Sulfur trioxide', equation:'2SO₂ + O₂ ⇌ 2SO₃', guide:'Guide: heat and catalyst' },
  'H2O|SO3': { product:{ H:2, S:1, O:4 }, species:'H2SO4', display:'H₂SO₄', name:'Sulfuric acid', equation:'SO₃ + H₂O → H₂SO₄' },
  'HCl|Mg(OH)2': { products:[{ composition:{ Mg:1, Cl:2 }, species:'MgCl2', display:'MgCl₂', name:'Magnesium chloride' }, { composition:{ H:2, O:1 }, species:'H2O', display:'H₂O', name:'Water' }], equation:'Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O' },
  'HCl|NaOH': { products:[{ composition:{ Na:1, Cl:1 }, species:'NaCl', display:'NaCl', name:'Sodium chloride' }, { composition:{ H:2, O:1 }, species:'H2O', display:'H₂O', name:'Water' }], equation:'NaOH + HCl → NaCl + H₂O' }
  ,'H2SO4|NaOH': { products:[{ composition:{ Na:2, S:1, O:4 }, species:'Na2SO4', display:'Na₂SO₄', name:'Sodium sulfate' }, { composition:{ H:2, O:1 }, species:'H2O', display:'H₂O', name:'Water' }], equation:'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O' }
};
const earlierReactionReferences = [
  '2H₂ + O₂ → 2H₂O','N₂ + 3H₂ → 2NH₃','H₂ + Cl₂ → 2HCl','2Na + Cl₂ → 2NaCl','2Mg + O₂ → 2MgO','2Ca + O₂ → 2CaO','4Al + 3O₂ → 2Al₂O₃','4Fe + 3O₂ → 2Fe₂O₃','Fe + S → FeS','C + O₂ → CO₂','2C + O₂ → 2CO','S + O₂ → SO₂','P₄ + 5O₂ → P₄O₁₀','2K + Cl₂ → 2KCl','4Li + O₂ → 2Li₂O',
  'CH₄ + 2O₂ → CO₂ + 2H₂O','2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O','C₃H₈ + 5O₂ → 3CO₂ + 4H₂O','2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O','C₅H₁₂ + 8O₂ → 5CO₂ + 6H₂O','2C₆H₁₄ + 19O₂ → 12CO₂ + 14H₂O','C₇H₁₆ + 11O₂ → 7CO₂ + 8H₂O','2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O','2CH₃OH + 3O₂ → 2CO₂ + 4H₂O','C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O','2C₃H₇OH + 9O₂ → 6CO₂ + 8H₂O','C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O','2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O','C₂H₄ + 3O₂ → 2CO₂ + 2H₂O','2C₆H₆ + 15O₂ → 12CO₂ + 6H₂O',
  'HCl + NaOH → NaCl + H₂O','HCl + KOH → KCl + H₂O','2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O','2HCl + Mg(OH)₂ → MgCl₂ + 2H₂O','H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O','H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O','H₂SO₄ + Ca(OH)₂ → CaSO₄ + 2H₂O','HNO₃ + NaOH → NaNO₃ + H₂O','HNO₃ + KOH → KNO₃ + H₂O','2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O','CH₃COOH + NaOH → CH₃COONa + H₂O','H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O','H₃PO₄ + 3KOH → K₃PO₄ + 3H₂O','H₂CO₃ + 2NaOH → Na₂CO₃ + 2H₂O','H₂CO₃ + 2KOH → K₂CO₃ + 2H₂O',
  'Zn + 2HCl → ZnCl₂ + H₂','Mg + 2HCl → MgCl₂ + H₂','Fe + 2HCl → FeCl₂ + H₂','2Al + 6HCl → 2AlCl₃ + 3H₂','Ca + 2HCl → CaCl₂ + H₂','Zn + H₂SO₄ → ZnSO₄ + H₂','Mg + H₂SO₄ → MgSO₄ + H₂','Fe + H₂SO₄ → FeSO₄ + H₂','2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂','Ca + H₂SO₄ → CaSO₄ + H₂',
  '2Na + 2H₂O → 2NaOH + H₂','2K + 2H₂O → 2KOH + H₂','Ca + 2H₂O → Ca(OH)₂ + H₂','Ba + 2H₂O → Ba(OH)₂ + H₂','Mg + 2H₂O → Mg(OH)₂ + H₂',
  '2H₂O₂ → 2H₂O + O₂','CaCO₃ → CaO + CO₂','2KClO₃ → 2KCl + 3O₂','2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O','CuCO₃ → CuO + CO₂','MgCO₃ → MgO + CO₂','2HgO → 2Hg + O₂','2Ag₂O → 4Ag + O₂','2NaN₃ → 2Na + 3N₂','NH₄NO₃ → N₂O + 2H₂O',
  'Fe + CuSO₄ → FeSO₄ + Cu','Zn + CuSO₄ → ZnSO₄ + Cu','Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag','Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag','Cl₂ + 2KBr → 2KCl + Br₂','Cl₂ + 2KI → 2KCl + I₂','Br₂ + 2KI → 2KBr + I₂','AgNO₃ + NaCl → AgCl + NaNO₃','BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl','Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃','CaCl₂ + Na₂CO₃ → CaCO₃ + 2NaCl','CuSO₄ + 2NaOH → Cu(OH)₂ + Na₂SO₄','FeCl₃ + 3NaOH → Fe(OH)₃ + 3NaCl','MgCl₂ + 2NaOH → Mg(OH)₂ + 2NaCl','AlCl₃ + 3NaOH → Al(OH)₃ + 3NaCl',
  'CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O','Na₂CO₃ + 2HCl → 2NaCl + CO₂ + H₂O','NaHCO₃ + HCl → NaCl + CO₂ + H₂O','MgCO₃ + 2HCl → MgCl₂ + CO₂ + H₂O','K₂CO₃ + 2HCl → 2KCl + CO₂ + H₂O',
  '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂','C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O','N₂ + 3H₂ ⇌ 2NH₃','2SO₂ + O₂ ⇌ 2SO₃','SO₃ + H₂O → H₂SO₄','CO₂ + H₂O ⇌ H₂CO₃','CaO + H₂O → Ca(OH)₂','NH₃ + HCl → NH₄Cl','2CO + O₂ → 2CO₂','Ca(OH)₂ + CO₂ → CaCO₃ + H₂O'
];
// Phase one deliberately focuses on short, standard laboratory equations.  The
// broader 1–1000 collection remains outside the visible library for now.
const laboratoryReactionReferences = [
  ['Elemental combination', 'Fe + S → FeS'], ['Elemental combination', '2Li + Cl₂ → 2LiCl'], ['Elemental combination', 'Mg + Cl₂ → MgCl₂'], ['Elemental combination', 'Ca + Cl₂ → CaCl₂'], ['Elemental combination', 'Cu + Cl₂ → CuCl₂'], ['Elemental combination', '2Na + Br₂ → 2NaBr'], ['Elemental combination', '2K + I₂ → 2KI'], ['Elemental combination', '2Zn + O₂ → 2ZnO'], ['Elemental combination', '2Cu + O₂ → 2CuO'], ['Elemental combination', 'Si + O₂ → SiO₂'],
  ['Acid-base', 'HCl + LiOH → LiCl + H₂O'], ['Acid-base', 'HCl + KOH → KCl + H₂O'], ['Acid-base', '2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O'], ['Acid-base', 'HBr + NaOH → NaBr + H₂O'], ['Acid-base', 'HI + KOH → KI + H₂O'], ['Acid-base', 'HNO₃ + NaOH → NaNO₃ + H₂O'], ['Acid-base', 'H₂SO₄ + 2LiOH → Li₂SO₄ + 2H₂O'], ['Acid-base', 'H₂SO₄ + Mg(OH)₂ → MgSO₄ + 2H₂O'], ['Acid-base', 'H₂SO₄ + Ba(OH)₂ → BaSO₄↓ + 2H₂O'], ['Acid-base', 'H₃PO₄ + NaOH → NaH₂PO₄ + H₂O'], ['Acid-base', 'H₃PO₄ + 2NaOH → Na₂HPO₄ + 2H₂O'],
  ['Precipitation', 'AgNO₃ + NaCl → AgCl↓ + NaNO₃'], ['Precipitation', 'AgNO₃ + KBr → AgBr↓ + KNO₃'], ['Precipitation', 'AgNO₃ + KI → AgI↓ + KNO₃'], ['Precipitation', 'BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl'], ['Precipitation', 'CaCl₂ + Na₂CO₃ → CaCO₃↓ + 2NaCl'], ['Precipitation', 'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄'], ['Precipitation', 'FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl'], ['Precipitation', 'MgCl₂ + 2NaOH → Mg(OH)₂↓ + 2NaCl'], ['Precipitation', 'AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl'], ['Precipitation', 'ZnCl₂ + 2NaOH → Zn(OH)₂↓ + 2NaCl'], ['Precipitation', 'CaCl₂ + Na₂C₂O₄ → CaC₂O₄↓ + 2NaCl'], ['Precipitation', 'CuSO₄ + Na₂CO₃ → CuCO₃↓ + Na₂SO₄'], ['Precipitation', 'ZnSO₄ + Na₂CO₃ → ZnCO₃↓ + Na₂SO₄'], ['Precipitation', 'NiSO₄ + 2NaOH → Ni(OH)₂↓ + Na₂SO₄'], ['Precipitation', 'CoCl₂ + 2NaOH → Co(OH)₂↓ + 2NaCl'], ['Precipitation', 'MnCl₂ + 2NaOH → Mn(OH)₂↓ + 2NaCl'],
  ['Metal reactions', 'Zn + 2HCl → ZnCl₂ + H₂↑'], ['Metal reactions', 'Mg + 2HCl → MgCl₂ + H₂↑'], ['Metal reactions', 'Fe + 2HCl → FeCl₂ + H₂↑'], ['Metal reactions', 'Ca + 2HCl → CaCl₂ + H₂↑'], ['Metal reactions', 'Mn + 2HCl → MnCl₂ + H₂↑'], ['Metal reactions', 'Co + 2HCl → CoCl₂ + H₂↑'], ['Metal reactions', 'Ni + 2HCl → NiCl₂ + H₂↑'], ['Metal reactions', 'Sn + 2HCl → SnCl₂ + H₂↑'], ['Metal reactions', 'Fe + CuSO₄ → FeSO₄ + Cu'], ['Metal reactions', 'Zn + CuSO₄ → ZnSO₄ + Cu'], ['Metal reactions', 'Mg + CuSO₄ → MgSO₄ + Cu'], ['Metal reactions', 'Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag'], ['Metal reactions', '2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu'], ['Metal reactions', 'Zn + Pb(NO₃)₂ → Zn(NO₃)₂ + Pb'], ['Metal reactions', 'Mg + 2H₂O → Mg(OH)₂ + H₂↑'], ['Metal reactions', '2Li + 2H₂O → 2LiOH + H₂↑'], ['Metal reactions', 'Sr + 2H₂O → Sr(OH)₂ + H₂↑'],
  ['Carbonates and gases', 'CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O'], ['Carbonates and gases', 'Na₂CO₃ + 2HCl → 2NaCl + CO₂↑ + H₂O'], ['Carbonates and gases', 'NaHCO₃ + HCl → NaCl + CO₂↑ + H₂O'], ['Carbonates and gases', 'MgCO₃ + 2HCl → MgCl₂ + CO₂↑ + H₂O'], ['Carbonates and gases', 'KHCO₃ + HCl → KCl + CO₂↑ + H₂O'], ['Carbonates and gases', 'Na₂SO₃ + 2HCl → 2NaCl + SO₂↑ + H₂O'], ['Carbonates and gases', 'FeS + 2HCl → FeCl₂ + H₂S↑'], ['Carbonates and gases', 'NH₄Cl + NaOH → NH₃↑ + NaCl + H₂O'], ['Carbonates and gases', 'Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O'], ['Carbonates and gases', 'CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂'],
  ['Thermal decomposition', 'CaCO₃ → CaO + CO₂↑'], ['Thermal decomposition', '2NaHCO₃ → Na₂CO₃ + CO₂↑ + H₂O'], ['Thermal decomposition', 'CuCO₃ → CuO + CO₂↑'], ['Thermal decomposition', 'MgCO₃ → MgO + CO₂↑'], ['Thermal decomposition', 'ZnCO₃ → ZnO + CO₂↑'], ['Thermal decomposition', 'Cu(OH)₂ → CuO + H₂O'], ['Thermal decomposition', 'Mg(OH)₂ → MgO + H₂O'], ['Thermal decomposition', 'Ca(OH)₂ → CaO + H₂O'], ['Thermal decomposition', '2Fe(OH)₃ → Fe₂O₃ + 3H₂O'], ['Thermal decomposition', 'CuSO₄·5H₂O → CuSO₄ + 5H₂O']
].map(([category, equation]) => ({ category, equation }));
// Phase two: additional short laboratory equations selected from the supplied
// collection.  Complex industrial, polymer, and biochemical equations stay out.
const phaseTwoLaboratoryReactionReferences = [
  ['Acid-base','2HCl + Sr(OH)₂ → SrCl₂ + 2H₂O'],['Acid-base','2HCl + Ba(OH)₂ → BaCl₂ + 2H₂O'],['Acid-base','HBr + KOH → KBr + H₂O'],['Acid-base','2HBr + Ca(OH)₂ → CaBr₂ + 2H₂O'],['Acid-base','2HBr + Ba(OH)₂ → BaBr₂ + 2H₂O'],['Acid-base','HI + NaOH → NaI + H₂O'],['Acid-base','2HI + Ca(OH)₂ → CaI₂ + 2H₂O'],['Acid-base','HNO₃ + LiOH → LiNO₃ + H₂O'],['Acid-base','2HNO₃ + Mg(OH)₂ → Mg(NO₃)₂ + 2H₂O'],['Acid-base','2HNO₃ + Ba(OH)₂ → Ba(NO₃)₂ + 2H₂O'],['Acid-base','3HNO₃ + Al(OH)₃ → Al(NO₃)₃ + 3H₂O'],['Acid-base','H₂SO₄ + 2LiOH → Li₂SO₄ + 2H₂O'],['Acid-base','3H₂SO₄ + 2Al(OH)₃ → Al₂(SO₄)₃ + 6H₂O'],['Acid-base','H₃PO₄ + Ca(OH)₂ → CaHPO₄ + 2H₂O'],['Acid-base','2H₃PO₄ + 3Ca(OH)₂ → Ca₃(PO₄)₂ + 6H₂O'],['Acid-base','H₃PO₄ + KOH → KH₂PO₄ + H₂O'],['Acid-base','H₃PO₄ + 2KOH → K₂HPO₄ + 2H₂O'],['Acid-base','H₂SO₃ + NaOH → NaHSO₃ + H₂O'],['Acid-base','Na₂O + H₂O → 2NaOH'],['Acid-base','K₂O + H₂O → 2KOH'],['Acid-base','Li₂O + H₂O → 2LiOH'],['Acid-base','BaO + H₂O → Ba(OH)₂'],['Acid-base','SO₂ + H₂O ⇌ H₂SO₃'],['Acid-base','N₂O₅ + H₂O → 2HNO₃'],['Acid-base','P₄O₁₀ + 6H₂O → 4H₃PO₄'],
  ['Precipitation','3AgNO₃ + Na₃PO₄ → Ag₃PO₄↓ + 3NaNO₃'],['Precipitation','3AgNO₃ + K₃PO₄ → Ag₃PO₄↓ + 3KNO₃'],['Precipitation','Ba(NO₃)₂ + K₂SO₄ → BaSO₄↓ + 2KNO₃'],['Precipitation','BaCl₂ + Na₂CO₃ → BaCO₃↓ + 2NaCl'],['Precipitation','Ba(NO₃)₂ + Na₂CO₃ → BaCO₃↓ + 2NaNO₃'],['Precipitation','SrCl₂ + Na₂SO₄ → SrSO₄↓ + 2NaCl'],['Precipitation','Sr(NO₃)₂ + Na₂SO₄ → SrSO₄↓ + 2NaNO₃'],['Precipitation','CaCl₂ + K₂CO₃ → CaCO₃↓ + 2KCl'],['Precipitation','Ca(NO₃)₂ + K₂CO₃ → CaCO₃↓ + 2KNO₃'],['Precipitation','CuCl₂ + 2KOH → Cu(OH)₂↓ + 2KCl'],['Precipitation','Cu(NO₃)₂ + 2NaOH → Cu(OH)₂↓ + 2NaNO₃'],['Precipitation','FeCl₂ + 2NaOH → Fe(OH)₂↓ + 2NaCl'],['Precipitation','FeCl₂ + 2KOH → Fe(OH)₂↓ + 2KCl'],['Precipitation','FeCl₃ + 3KOH → Fe(OH)₃↓ + 3KCl'],['Precipitation','Al(NO₃)₃ + 3NaOH → Al(OH)₃↓ + 3NaNO₃'],['Precipitation','Zn(NO₃)₂ + 2KOH → Zn(OH)₂↓ + 2KNO₃'],['Precipitation','BaCl₂ + Na₂C₂O₄ → BaC₂O₄↓ + 2NaCl'],['Precipitation','Pb(NO₃)₂ + Na₂CO₃ → PbCO₃↓ + 2NaNO₃'],['Precipitation','ZnSO₄ + Na₂CO₃ → ZnCO₃↓ + Na₂SO₄'],['Precipitation','FeSO₄ + Na₂CO₃ → FeCO₃↓ + Na₂SO₄'],['Precipitation','MnCl₂ + Na₂CO₃ → MnCO₃↓ + 2NaCl'],['Precipitation','CoCl₂ + Na₂CO₃ → CoCO₃↓ + 2NaCl'],['Precipitation','NiCl₂ + Na₂CO₃ → NiCO₃↓ + 2NaCl'],['Precipitation','3CaCl₂ + 2Na₃PO₄ → Ca₃(PO₄)₂↓ + 6NaCl'],['Precipitation','3MgCl₂ + 2Na₃PO₄ → Mg₃(PO₄)₂↓ + 6NaCl'],
  ['Metal reactions','Zn + 2HBr → ZnBr₂ + H₂↑'],['Metal reactions','Mg + 2HBr → MgBr₂ + H₂↑'],['Metal reactions','Fe + 2HBr → FeBr₂ + H₂↑'],['Metal reactions','Ca + 2HBr → CaBr₂ + H₂↑'],['Metal reactions','Zn + 2HI → ZnI₂ + H₂↑'],['Metal reactions','Mg + 2HI → MgI₂ + H₂↑'],['Metal reactions','Fe + 2HI → FeI₂ + H₂↑'],['Metal reactions','Ca + 2HI → CaI₂ + H₂↑'],['Metal reactions','Mn + CuSO₄ → MnSO₄ + Cu'],['Metal reactions','Mg + ZnSO₄ → MgSO₄ + Zn'],['Metal reactions','Zn + NiSO₄ → ZnSO₄ + Ni'],['Metal reactions','Zn + CoSO₄ → ZnSO₄ + Co'],['Metal reactions','Fe + 2FeCl₃ → 3FeCl₂'],['Metal reactions','Sn + 2CuCl₂ → SnCl₄ + 2Cu'],['Metal reactions','2Al + 3ZnSO₄ → Al₂(SO₄)₃ + 3Zn'],['Metal reactions','Zn + Pb(NO₃)₂ → Zn(NO₃)₂ + Pb'],['Metal reactions','Fe + Pb(NO₃)₂ → Fe(NO₃)₂ + Pb'],['Metal reactions','Mg + Pb(NO₃)₂ → Mg(NO₃)₂ + Pb'],['Metal reactions','Cu + 2FeCl₃ → CuCl₂ + 2FeCl₂'],['Metal reactions','Fe + CuCl₂ → FeCl₂ + Cu'],['Metal reactions','Zn + CuCl₂ → ZnCl₂ + Cu'],['Metal reactions','Mg + CuCl₂ → MgCl₂ + Cu'],['Metal reactions','2Al + 3CuCl₂ → 2AlCl₃ + 3Cu'],['Metal reactions','Cl₂ + 2KBr → 2KCl + Br₂'],['Metal reactions','Cl₂ + 2KI → 2KCl + I₂'],
  ['Carbonates and gases','Li₂CO₃ + 2HCl → 2LiCl + CO₂↑ + H₂O'],['Carbonates and gases','SrCO₃ + 2HCl → SrCl₂ + CO₂↑ + H₂O'],['Carbonates and gases','BaCO₃ + 2HCl → BaCl₂ + CO₂↑ + H₂O'],['Carbonates and gases','FeCO₃ + 2HCl → FeCl₂ + CO₂↑ + H₂O'],['Carbonates and gases','ZnCO₃ + 2HCl → ZnCl₂ + CO₂↑ + H₂O'],['Carbonates and gases','MnCO₃ + 2HCl → MnCl₂ + CO₂↑ + H₂O'],['Carbonates and gases','CuCO₃ + 2HCl → CuCl₂ + CO₂↑ + H₂O'],['Carbonates and gases','Li₂CO₃ + H₂SO₄ → Li₂SO₄ + CO₂↑ + H₂O'],['Carbonates and gases','ZnCO₃ + H₂SO₄ → ZnSO₄ + CO₂↑ + H₂O'],['Carbonates and gases','FeCO₃ + H₂SO₄ → FeSO₄ + CO₂↑ + H₂O'],['Carbonates and gases','NaHCO₃ + HNO₃ → NaNO₃ + CO₂↑ + H₂O'],['Carbonates and gases','KHCO₃ + HNO₃ → KNO₃ + CO₂↑ + H₂O'],['Carbonates and gases','2NaHCO₃ + 2CH₃COOH → 2CH₃COONa + 2CO₂↑ + 2H₂O'],['Carbonates and gases','CaCO₃ + 2CH₃COOH → Ca(CH₃COO)₂ + CO₂↑ + H₂O'],['Carbonates and gases','MgCO₃ + 2CH₃COOH → Mg(CH₃COO)₂ + CO₂↑ + H₂O'],['Carbonates and gases','NH₄Cl + KOH → NH₃↑ + KCl + H₂O'],['Carbonates and gases','NH₄Br + NaOH → NH₃↑ + NaBr + H₂O'],['Carbonates and gases','NH₄I + NaOH → NH₃↑ + NaI + H₂O'],['Carbonates and gases','SO₂ + Ca(OH)₂ → CaSO₃↓ + H₂O'],['Carbonates and gases','SO₂ + Ba(OH)₂ → BaSO₃↓ + H₂O'],['Carbonates and gases','SO₂ + 2KOH → K₂SO₃ + H₂O'],['Carbonates and gases','H₂S + CuSO₄ → CuS↓ + H₂SO₄'],['Carbonates and gases','H₂S + Pb(NO₃)₂ → PbS↓ + 2HNO₃'],['Carbonates and gases','H₂S + 2AgNO₃ → Ag₂S↓ + 2HNO₃'],['Carbonates and gases','NH₃ + HNO₃ → NH₄NO₃'],
  ['Thermal decomposition','ZnCO₃ → ZnO + CO₂↑'],['Thermal decomposition','FeCO₃ → FeO + CO₂↑'],['Thermal decomposition','MnCO₃ → MnO + CO₂↑'],['Thermal decomposition','SrCO₃ → SrO + CO₂↑'],['Thermal decomposition','BaCO₃ → BaO + CO₂↑'],['Thermal decomposition','2Ag₂CO₃ → 4Ag + 2CO₂↑ + O₂↑'],['Thermal decomposition','2CuCO₃ → 2CuO + 2CO₂↑'],['Thermal decomposition','2LiOH → Li₂O + H₂O'],['Thermal decomposition','Zn(OH)₂ → ZnO + H₂O'],['Thermal decomposition','Fe(OH)₂ → FeO + H₂O'],['Thermal decomposition','Ni(OH)₂ → NiO + H₂O'],['Thermal decomposition','Co(OH)₂ → CoO + H₂O'],['Thermal decomposition','Mn(OH)₂ → MnO + H₂O'],['Thermal decomposition','Pb(OH)₂ → PbO + H₂O'],['Thermal decomposition','2Cr(OH)₃ → Cr₂O₃ + 3H₂O'],['Thermal decomposition','2FeSO₄ → Fe₂O₃ + SO₂ + SO₃'],['Thermal decomposition','Na₂CO₃·10H₂O → Na₂CO₃ + 10H₂O'],['Thermal decomposition','CaSO₄·2H₂O → CaSO₄ + 2H₂O'],['Thermal decomposition','2NaClO → 2NaCl + O₂↑'],['Thermal decomposition','2KClO → 2KCl + O₂↑'],['Thermal decomposition','2AgCl → 2Ag + Cl₂'],['Thermal decomposition','2AgBr → 2Ag + Br₂'],['Thermal decomposition','2HNO₂ → NO + NO₂ + H₂O'],['Thermal decomposition','H₂C₂O₄ → CO₂ + CO + H₂O'],['Thermal decomposition','(NH₄)₂CO₃ → 2NH₃ + CO₂ + H₂O'],
  ['Redox reactions','Fe₂O₃ + 3CO → 2Fe + 3CO₂'],['Redox reactions','Fe₂O₃ + 3H₂ → 2Fe + 3H₂O'],['Redox reactions','CuO + H₂ → Cu + H₂O'],['Redox reactions','CuO + CO → Cu + CO₂'],['Redox reactions','ZnO + C → Zn + CO'],['Redox reactions','SnO₂ + 2C → Sn + 2CO'],['Redox reactions','PbO + C → Pb + CO'],['Redox reactions','3CuO + 2Al → Al₂O₃ + 3Cu'],['Redox reactions','Cr₂O₃ + 2Al → Al₂O₃ + 2Cr'],['Redox reactions','3MnO₂ + 4Al → 2Al₂O₃ + 3Mn'],['Redox reactions','CuO + H₂ → Cu + H₂O'],['Redox reactions','ZnO + H₂ → Zn + H₂O'],['Redox reactions','PbO + H₂ → Pb + H₂O'],['Redox reactions','SnO₂ + 2H₂ → Sn + 2H₂O'],['Redox reactions','2Cu₂O + O₂ → 4CuO'],['Redox reactions','4FeO + O₂ → 2Fe₂O₃'],['Redox reactions','2SO₂ + O₂ → 2SO₃'],['Redox reactions','2NO + O₂ → 2NO₂'],['Redox reactions','2H₂S + SO₂ → 3S + 2H₂O'],['Redox reactions','2CO + 2NO → 2CO₂ + N₂'],['Redox reactions','2NH₃ + 3CuO → N₂ + 3Cu + 3H₂O'],['Redox reactions','2Mg + CO₂ → 2MgO + C'],['Redox reactions','C + 2CuO → CO₂ + 2Cu'],['Redox reactions','FeO + CO → Fe + CO₂'],['Redox reactions','Fe₃O₄ + 4CO → 3Fe + 4CO₂']
].map(([category, equation]) => ({ category, equation }));
const coreReactionReferences = [
  ['Acid-base','HCl + KOH → KCl + H₂O'],['Acid-base','HNO₃ + NaOH → NaNO₃ + H₂O'],['Acid-base','HNO₃ + KOH → KNO₃ + H₂O'],['Acid-base','2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O'],['Acid-base','H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O'],['Acid-base','2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O'],['Acid-base','H₂SO₄ + Mg(OH)₂ → MgSO₄ + 2H₂O'],['Acid-base','CH₃COOH + NaOH → CH₃COONa + H₂O'],['Acid-base','H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O'],['Acid-base','NH₃ + HCl → NH₄Cl'],['Acid-base','MgO + 2HCl → MgCl₂ + H₂O'],['Acid-base','CuO + 2HCl → CuCl₂ + H₂O'],
  ['Metal reactions','Zn + 2HCl → ZnCl₂ + H₂↑'],['Metal reactions','Mg + 2HCl → MgCl₂ + H₂↑'],['Metal reactions','Fe + 2HCl → FeCl₂ + H₂↑'],['Metal reactions','Zn + H₂SO₄ → ZnSO₄ + H₂↑'],['Metal reactions','Mg + H₂SO₄ → MgSO₄ + H₂↑'],['Metal reactions','Fe + H₂SO₄ → FeSO₄ + H₂↑'],
  ['Carbonates and gases','CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O'],['Carbonates and gases','Na₂CO₃ + 2HCl → 2NaCl + CO₂↑ + H₂O'],['Carbonates and gases','NaHCO₃ + HCl → NaCl + CO₂↑ + H₂O'],['Carbonates and gases','MgCO₃ + 2HCl → MgCl₂ + CO₂↑ + H₂O'],['Carbonates and gases','CuCO₃ + 2HCl → CuCl₂ + CO₂↑ + H₂O']
].map(([category, equation]) => ({ category, equation, source:'AQA GCSE Chemistry 8462 §4.4.2; RSC Education' }));
const balancingPracticeReferences = [
  ['Redox reactions','4NH₃ + 5O₂ → 4HNO₃ + 2H₂O'],['Redox reactions','3O₂ → 2O₃'],['Thermal decomposition','2H₂O₂ → 2H₂O + O₂'],['Metal reactions','2Rb + 2H₂O → 2RbOH + H₂'],['Metal reactions','Cl₂ + 2KBr → 2KCl + Br₂'],['Elemental combination','N₂ + 3H₂ → 2NH₃'],['Metal reactions','2NdF₃ + 3Ca → 2Nd + 3CaF₂'],['Redox reactions','CH₄ + H₂O → CO + 3H₂'],['Redox reactions','C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O'],['Redox reactions','2Al + Fe₂O₃ → 2Fe + Al₂O₃'],
  ['Acid-base','2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O'],['Carbonates and gases','2HNO₃ + CaCO₃ → Ca(NO₃)₂ + CO₂ + H₂O'],['Elemental combination','4Al + 3O₂ → 2Al₂O₃'],['Elemental combination','2P + 3Cl₂ → 2PCl₃'],['Elemental combination','P₄ + 5O₂ → 2P₂O₅'],['Acid-base','POCl₃ + 3H₂O → H₃PO₄ + 3HCl'],['Redox reactions','3PCl₅ + P₂O₅ → 5POCl₃'],['Redox reactions','Fe₂O₃ + 3H₂ → 2Fe + 3H₂O'],['Acid-base','P₄O₆ + 6H₂O → 4H₃PO₃'],['Redox reactions','V₂O₅ + 6HCl → 2VOCl₃ + 3H₂O'],
  ['Metal reactions','3Fe + 4H₂O → Fe₃O₄ + 4H₂'],['Redox reactions','C₃H₆ + 3O₂ → 3CO + 3H₂O'],['Redox reactions','Ca₃(PO₄)₂ + 8C → Ca₃P₂ + 8CO'],['Elemental combination','S₈ + 12O₂ → 8SO₃'],['Redox reactions','C₃H₈ + 5O₂ → 3CO₂ + 4H₂O'],['Redox reactions','6CoO + O₂ → 2Co₃O₄'],['Redox reactions','2C₃H₆O₂ + 7O₂ → 6CO₂ + 6H₂O'],['Redox reactions','2C₃H₄ + 5O₂ → 6CO + 4H₂O'],['Metal reactions','4LiH + AlCl₃ → LiAlH₄ + 3LiCl'],['Thermal decomposition','2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂'],
  ['Thermal decomposition','2Cu(CN)₂ → 2CuCN + C₂N₂'],['Acid-base','PCl₃ + 3H₂O → P(OH)₃ + 3HCl'],['Metal reactions','3KBr + Al(ClO₄)₃ → AlBr₃ + 3KClO₄'],['Redox reactions','C₂H₅OH + 2O₂ → 2CO + 3H₂O'],['Redox reactions','4HCl + MnO₂ → MnCl₂ + 2H₂O + Cl₂'],['Redox reactions','2CrO₄²⁻ + 2H⁺ → Cr₂O₇²⁻ + H₂O'],['Redox reactions','4OH⁻ → 2H₂O + O₂ + 4e⁻'],['Redox reactions','Fe₂O₃ + 3CO → 2Fe + 3CO₂'],['Acid-base','2H₃PO₄ + 3BaO → Ba₃(PO₄)₂ + 3H₂O'],['Thermal decomposition','2MgNH₄PO₄ → Mg₂P₂O₇ + 2NH₃ + H₂O'],
  ['Metal reactions','2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂'],['Redox reactions','P₄O₁₀ + 3HCl → POCl₃ + 3HPO₃'],['Redox reactions','4NO + 2H₂O + 3O₂ → 4HNO₃'],['Acid-base','Br₂ + 2NaOH → NaBr + NaOBr + H₂O'],['Acid-base','Ca₃(PO₄)₂ + 4H₃PO₄ → 3Ca(H₂PO₄)₂'],['Redox reactions','3FeSO₄ + 2K₃[Fe(CN)₆] → Fe₃[Fe(CN)₆]₂ + 3K₂SO₄'],['Redox reactions','2CuSO₄ + 4KCN → 2CuCN + 2K₂SO₄ + C₂N₂'],['Acid-base','CaHPO₄·2H₂O + 2NaOH + 10H₂O → Na₂HPO₄·12H₂O + Ca(OH)₂'],['Thermal decomposition','2MgNH₄AsO₄·6H₂O → Mg₂As₂O₇ + 2NH₃ + 13H₂O'],['Carbonates and gases','Mg₃Si₂O₅(OH)₄ + 3CO₂ → 3MgCO₃ + 2SiO₂ + 2H₂O']
].map(([category, equation]) => ({ category, equation, source:'Chemistry Tutor: Balancing chemical equations (KS3/GCSE)' }));
const playableReactionCategories = new Map([
  ['H2|O2', 'Elemental combination'], ['Fe|O2', 'Elemental combination'], ['Cl2|Na', 'Elemental combination'], ['Mg|O2', 'Elemental combination'], ['C|O2', 'Elemental combination'], ['H2|N2', 'Elemental combination'], ['O2|S', 'Elemental combination'], ['Ca|O2', 'Elemental combination'], ['Cl2|H2', 'Elemental combination'], ['Al|O2', 'Elemental combination'], ['O2|Si', 'Elemental combination'], ['Cl2|K', 'Elemental combination'], ['Br2|K', 'Elemental combination'], ['F2|Li', 'Elemental combination'], ['Ca|Cl2', 'Elemental combination'], ['O2|P', 'Elemental combination'], ['Fe|S', 'Elemental combination'], ['Cl2|Mg', 'Elemental combination'], ['Br2|Na', 'Elemental combination'], ['I2|K', 'Elemental combination'], ['Cu|O2', 'Elemental combination'], ['O2|Zn', 'Elemental combination'],
  ['H2O|Mg', 'Metal reactions'], ['H2O|Na', 'Metal reactions'], ['H2O|Li', 'Metal reactions'], ['Ca|H2O', 'Metal reactions'], ['Fe|HCl', 'Metal reactions'], ['HCl|Mg', 'Metal reactions'], ['HCl|Zn', 'Metal reactions'], ['Ca|HCl', 'Metal reactions'], ['HCl|Sn', 'Metal reactions'],
  ['H2O|MgO', 'Acid-base'], ['CaO|H2O', 'Acid-base'], ['HCl|Mg(OH)2', 'Acid-base'], ['HCl|NaOH', 'Acid-base'],
  ['CO2|H2O', 'Carbonates and gases'], ['H2O|SO2', 'Carbonates and gases'], ['H2O|P2O5', 'Acid-base'], ['CO2|MgO', 'Carbonates and gases'], ['O2|SO2', 'Redox reactions'], ['H2O|SO3', 'Acid-base']
]);
function normalizeSpecies(value) {
  return value.replace(/[₀₁₂₃₄₅₆₇₈₉]/g, digit => '₀₁₂₃₄₅₆₇₈₉'.indexOf(digit)).replace(/^[0-9]+\s*/, '').replace(/[↑↓]/g, '').trim();
}
function materialSpecies(value) {
  return normalizeSpecies(value).replace(/^[0-9₀₁₂₃₄₅₆₇₈₉]+\s*/, '');
}
function parseReferenceEquation(equation) {
  const [left, right] = equation.split(/→|⇌/).map(side => side && side.trim());
  if (!left || !right) return null;
  const terms = side => side.split('+').map(materialSpecies).filter(Boolean);
  return { reactants:terms(left), products:terms(right) };
}
const allReferenceEquations = [...laboratoryReactionReferences, ...phaseTwoLaboratoryReactionReferences, ...coreReactionReferences, ...balancingPracticeReferences].map(reference => reference.equation);
const parsedReferenceEquations = allReferenceEquations.map(parseReferenceEquation).filter(Boolean);
const materialLibrary = [...new Set(parsedReferenceEquations.flatMap(reaction => reaction.reactants).map(materialSpecies))].sort();
const reactionGuides = {
  'H2|O2':'Guide: spark or flame', 'Fe|O2':'Guide: moisture and oxygen', 'Mg|O2':'Guide: heat or spark',
  'C|O2':'Guide: heat or flame', 'O2|S':'Guide: heat or spark', 'Ca|O2':'Guide: heat'
};
// One entry is generated for every element pair. Known products override the default no-direct-reaction entry.
const reactionLibrary = new Map();
symbols.forEach((first, index) => symbols.slice(index).forEach(second => {
  reactionLibrary.set([first, second].sort().join('|'), { status:'no-direct-reaction' });
}));
Object.entries(knownReactions).forEach(([pair, product]) => reactionLibrary.set(pair, { status:'reaction', product }));
Object.entries(secondaryReactions).forEach(([pair, reaction]) => reactionLibrary.set(pair, { status:'reaction', ...reaction }));
parsedReferenceEquations.filter(reaction => reaction.reactants.length === 2).forEach(reaction => {
  const pair = [...reaction.reactants].sort().join('|');
  if (reactionLibrary.get(pair)?.status === 'reaction') return;
  reactionLibrary.set(pair, { status:'reaction', products:reaction.products.map(species => ({ composition:{}, species, display:formatSpecies(species), name:compoundNames[species] })), equation:`${reaction.reactants.map(formatSpecies).join(' + ')} → ${reaction.products.map(formatSpecies).join(' + ')}` });
});
function formatSpecies(species) {
  return species.replace(/\d/g, digit => superscripts[digit]);
}
function formatChemicalTerm(term) {
  const match = term.trim().match(/^(\d+)(.*)$/);
  return match ? `${match[1]}${formatSpecies(match[2])}` : formatSpecies(term.trim());
}
function formatEquation(equation) {
  return equation.split(/(\+|→|⇌)/).map(part => /^(\+|→|⇌)$/.test(part.trim()) ? part : formatChemicalTerm(part)).join(' ');
}
function speciesHasElement(species, symbol) {
  return new RegExp(`${symbol}(?![a-z])`).test(species);
}
function renderReactionExplorer() {
  const substances = new Set([...canvas.querySelectorAll('.atom-ball')].map(ball => ball.dataset.species));
  const chosenCategory = reactionCategory.value;
  const entries = [...reactionLibrary.entries()].filter(([, reaction]) => reaction.status === 'reaction')
    .filter(([pair]) => chosenCategory === 'all' || playableReactionCategories.get(pair) === chosenCategory)
    .filter(([pair]) => selectedReactionSpecies ? pair.split('|').includes(selectedReactionSpecies) : !selectedReactionElement || pair.split('|').some(species => speciesHasElement(species, selectedReactionElement)))
    .sort(([firstPair, firstReaction], [secondPair, secondReaction]) => (firstReaction.equation || firstPair).localeCompare(secondReaction.equation || secondPair));
  const references = [...laboratoryReactionReferences, ...phaseTwoLaboratoryReactionReferences, ...coreReactionReferences, ...balancingPracticeReferences]
    .filter(reference => chosenCategory === 'all' || reference.category === chosenCategory)
    .filter(reference => selectedReactionSpecies ? reference.equation.includes(selectedReactionSpecies) : !selectedReactionElement || speciesHasElement(reference.equation, selectedReactionElement));
  const total = entries.length + references.length;
  reactionFilter.textContent = selectedReactionSpecies
    ? `${total} reactions with ${formatSpecies(selectedReactionSpecies)} — drag both reactants together`
    : selectedReactionElement
    ? `${total} reactions with ${elementName(selectedReactionElement)} — drag both reactants together`
    : `${total} listed reactions — drag both reactants together`;
  const playable = entries.map(([pair, reaction]) => {
    const sources = pair.split('|');
    const products = reaction.products || [{ composition:reaction.product, display:reaction.display }];
    const equation = formatEquation(reaction.equation || `${sources.map(formatSpecies).join(' + ')} → ${products.map(product => product.display || formula(product.composition)).join(' + ')}`);
    const ready = sources.every(source => substances.has(source));
    return `<div class="reaction-item${ready ? ' ready' : ''}">${equation}${ready ? '<span class="reaction-ready">Ready on workbench</span>' : ''}</div>`;
  }).join('');
  const referenceItems = Object.entries(references.reduce((groups, reference) => {
    (groups[reference.category] ||= []).push(reference.equation);
    return groups;
  }, {})).sort(([firstCategory], [secondCategory]) => firstCategory.localeCompare(secondCategory)).map(([category, equations]) => `<div class="reaction-section">${category}</div>${equations.sort((first, second) => first.localeCompare(second)).map(equation => `<div class="reaction-item reference-reaction">${formatEquation(equation)}<span class="reaction-reference">Laboratory reference</span></div>`).join('')}`).join('');
  reactionList.innerHTML = playable + referenceItems || '<div class="reaction-item">No reactions found.</div>';
}
function showReactionConditions(text = '') {
  const guide = text.toLowerCase();
  const active = { heat:/heat|flame/, spark:/spark|ignition|flame/, water:/water|moisture/, light:/light|uv/, electricity:/electric|electrolysis/, catalyst:/catalyst/, pressure:/pressure/ };
  conditionButtons.forEach(button => button.classList.toggle('active-condition', active[button.dataset.condition].test(guide)));
}
function selectReactionFilter(symbol = null) {
  selectedReactionElement = symbol;
  selectedReactionSpecies = null;
  renderReactionExplorer();
}
function selectReactionSpecies(species) {
  selectedReactionElement = null;
  selectedReactionSpecies = species;
  renderReactionExplorer();
}
const anionSuffixes = { F:'fluoride', Cl:'chloride', Br:'bromide', I:'iodide', O:'oxide', S:'sulfide', Se:'selenide', N:'nitride', P:'phosphide', H:'hydride' };
function binaryCompoundName(composition) {
  const parts = Object.keys(composition);
  if (parts.length !== 2) return undefined;
  const cation = parts.find(symbol => metalNumbers.has(symbols.indexOf(symbol) + 1)) || parts[0];
  const anion = parts.find(symbol => symbol !== cation);
  return anionSuffixes[anion] ? `${elementName(cation)} ${anionSuffixes[anion]}` : undefined;
}
function chemicalName(composition) {
  return compoundNames[plainFormula(composition)] || (Object.keys(composition).length === 1 ? elementName(Object.keys(composition)[0]) : binaryCompoundName(composition));
}
const elementGroups = {
  alkali:new Set(['Li','Na','K','Rb','Cs','Fr']), alkaline:new Set(['Be','Mg','Ca','Sr','Ba','Ra']), halogen:new Set(['F','Cl','Br','I','At','Ts']), noble:new Set(['He','Ne','Ar','Kr','Xe','Rn','Og']), metalloid:new Set(['B','Si','Ge','As','Sb','Te','Po']), nonmetal:new Set(['H','C','N','O','P','S','Se']), lanthanide:new Set(['La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu']), actinide:new Set(['Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No','Lr'])
};
function chemicalCategory(composition, species) {
  const parts = Object.keys(composition);
  if (parts.length === 1) { const symbol = parts[0]; for (const [group, items] of Object.entries(elementGroups)) if (items.has(symbol)) return group; return metalNumbers.has(symbols.indexOf(symbol)+1) ? 'metal' : 'other'; }
  if (/OH/.test(species)) return 'base';
  if (/^H(?!2O$)/.test(species)) return 'acid';
  if (/^(H2|O2|N2|F2|Cl2|Br2|I2|CO2|SO2|SO3|NO2|NH3|H2S)$/.test(species)) return 'gas';
  if (/O/.test(species) && !/OH|CO3|SO4|NO3/.test(species)) return 'oxide';
  return 'salt';
}
function setBallContent(ball, composition, metadata = {}) {
  ball.dataset.composition = JSON.stringify(composition);
  const displayedFormula = metadata.display || formula(composition);
  const compoundName = metadata.name || chemicalName(composition);
  ball.dataset.species = metadata.species || plainFormula(composition);
  ball.dataset.display = displayedFormula;
  ball.dataset.compoundName = compoundName || '';
  ball.innerHTML = `<span class="ball-formula">${displayedFormula}</span>${compoundName ? `<span class="ball-label">${compoundName}</span>` : ''}`;
  ball.setAttribute('aria-label', compoundName ? `${displayedFormula}, ${compoundName}` : displayedFormula);
  ball.classList.toggle('molecule', Object.values(composition).reduce((sum,count)=>sum+count,0) > 1 || Boolean(metadata.display));
  ball.className = `atom-ball molecule chemical-${chemicalCategory(composition, ball.dataset.species)}`;
}
function positionBall(ball, x, y) {
  const maxX = canvas.clientWidth - ball.offsetWidth, maxY = canvas.clientHeight - ball.offsetHeight;
  ball.style.left = `${Math.max(0,Math.min(x - ball.offsetWidth / 2,maxX))}px`;
  ball.style.top = `${Math.max(0,Math.min(y - ball.offsetHeight / 2,maxY))}px`;
}
function nextWorkbenchSpot() { const offsets=[[0,0],[88,0],[-88,0],[0,88],[0,-88],[88,88],[-88,88]]; const balls=[...canvas.querySelectorAll('.atom-ball')]; return offsets.map(([x,y])=>({x:canvas.clientWidth/2+x,y:canvas.clientHeight/2+y})).find(spot=>balls.every(ball=>Math.hypot((parseFloat(ball.style.left)||0)+ball.offsetWidth/2-spot.x,(parseFloat(ball.style.top)||0)+ball.offsetHeight/2-spot.y)>78)) || {x:canvas.clientWidth/2,y:canvas.clientHeight/2}; }
function mergeIfTouching(ball) {
  const own = ball.getBoundingClientRect();
  const target = [...canvas.querySelectorAll('.atom-ball')].find(other => {
    if (other === ball) return false;
    const box = other.getBoundingClientRect();
    const dx = own.left + own.width/2 - (box.left + box.width/2), dy = own.top + own.height/2 - (box.top + box.height/2);
    return Math.hypot(dx,dy) < (own.width + box.width) * .38;
  });
  if (!target) return;
  const first = JSON.parse(target.dataset.composition);
  const second = JSON.parse(ball.dataset.composition);
  const firstSpecies = target.dataset.species || plainFormula(first);
  const secondSpecies = ball.dataset.species || plainFormula(second);
  if (firstSpecies === secondSpecies) {
    detail.textContent = `Identical substances do not react in this workbench.`;
    return;
  }
  const reactionKey = [firstSpecies, secondSpecies].sort().join('|');
  const reaction = reactionLibrary.get(reactionKey);
  if (!reaction || reaction.status !== 'reaction') {
    detail.textContent = `${target.dataset.display || formula(first)} and ${ball.dataset.display || formula(second)} have no known reaction in this workbench.`;
    return;
  }
  const snapshot = item => ({ composition:JSON.parse(item.dataset.composition), previous:item.dataset.previous ? JSON.parse(item.dataset.previous) : null, metadata:{ species:item.dataset.species, display:item.dataset.display, name:item.dataset.compoundName } });
  const targetSnapshot = snapshot(target);
  const ballSnapshot = snapshot(ball);
  const products = reaction.products || [{ composition:reaction.product, species:reaction.species, display:reaction.display, name:reaction.name }];
  const productLabel = products.map(product => product.display || formula(product.composition)).join(' + ');
  const equation = reaction.equation || `${targetSnapshot.metadata.display || formula(targetSnapshot.composition)} + ${ballSnapshot.metadata.display || formula(ballSnapshot.composition)} → ${productLabel}`;
  const reactionGroup = `reaction-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const history = { reactants:[targetSnapshot, ballSnapshot], reactionGroup };
  if (products.length === 1) {
    setBallContent(target, products[0].composition, products[0]);
    target.dataset.previous = JSON.stringify(history);
    target.dataset.reactionGroup = reactionGroup;
    ball.remove();
  } else {
    const centerX = parseFloat(target.style.left) + target.offsetWidth / 2;
    const centerY = parseFloat(target.style.top) + target.offsetHeight / 2;
    target.remove(); ball.remove();
    products.forEach((product, index) => {
      const created = makeBall(product.composition, centerX + (index - (products.length - 1) / 2) * 92, centerY, history, product);
      created.dataset.reactionGroup = reactionGroup;
    });
  }
  products.forEach(product => producedMaterials.set(product.species || plainFormula(product.composition), { species:product.species || plainFormula(product.composition) }));
  renderShelf('produced', [...producedMaterials.keys()], 'Produce a material on the workbench to see it here.');
  reactionStack.push(history);
  detail.textContent = `Reaction: ${equation}${reaction.guide || reactionGuides[reactionKey] ? ` | ${reaction.guide || reactionGuides[reactionKey]}` : ''}`;
  showReactionConditions(`${equation} ${reaction.guide || reactionGuides[reactionKey] || ''}`);
  renderReactionExplorer();
}
function isOverTrash(ball) {
  const a = ball.getBoundingClientRect(), b = trash.getBoundingClientRect();
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}
function removeBall(ball) {
  ball.remove();
  if (!canvas.querySelector('.atom-ball')) canvas.classList.remove('has-items');
  detail.textContent = 'Item removed from the workbench.';
  renderReactionExplorer();
}
function makeBall(composition, x, y, previous = null, metadata = {}) {
  const ball = document.createElement('div');
  ball.className = 'atom-ball';
  ball.setAttribute('role','button');
  ball.setAttribute('aria-label', `Compound ${formula(composition)}`);
  canvas.append(ball); setBallContent(ball, composition, metadata); if (previous) ball.dataset.previous = JSON.stringify(previous); positionBall(ball,x,y); canvas.classList.add('has-items');
  enableMove(ball); return ball;
}
function addShelfMaterial(species) { const spot=nextWorkbenchSpot(); makeBall({}, spot.x, spot.y, null, { species, display:formatSpecies(species), name:compoundNames[species] }); detail.textContent=`Added ${formatSpecies(species)} to the workbench.`; renderReactionExplorer(); }
function renderShelf(id, speciesList, emptyText) { const panel=document.querySelector(`#shelf-${id}`); panel.innerHTML=speciesList.length ? `<div class="material-card-grid">${speciesList.map(species=>`<button class="material-card" data-shelf-material="${species}" type="button"><strong>${formatSpecies(species)}</strong><span>${compoundNames[species] || 'Laboratory material'}</span></button>`).join('')}</div>` : `<p class="empty-shelf">${emptyText}</p>`; }
function renderFormulaeReference(entries) {
  const panel=document.querySelector('#shelf-formulae');
  panel.innerHTML=`<div class="formulae-reference"><p class="formulae-note">${entries.length} reference formulae. These entries are alphabetical, read-only, and cannot be dragged or added to the workbench.</p><div class="formulae-list">${entries.map(entry=>`<div class="formulae-row"><strong>${formatSpecies(entry.formula)}</strong><span>${entry.name}</span>${entry.cas ? `<small>CAS ${entry.cas}</small>` : ''}</div>`).join('')}</div></div>`;
}
const commonReagents=['H2O','HCl','H2SO4','HNO3','NaOH','KOH','NH3','CuSO4','AgNO3'];
const shelfMaterials = [...new Set([...materialLibrary, ...commonReagents])].sort();
const gases = new Set(['H2','O2','N2','F2','Cl2','Br2','I2','CO2','CO','SO2','SO3','NO','NO2','NH3','H2S']);
const isAcid = species => /^(HCl|HBr|HI|HNO3|H2SO4|H2SO3|H2CO3|H3PO4|CH3COOH|HCOOH)$/.test(species);
const isBase = species => /OH|^NH3$/.test(species);
const isCarbonate = species => /CO3|HCO3/.test(species);
const isOxide = species => species === 'H2O' || (/O/.test(species) && !isBase(species) && !isCarbonate(species) && !/SO4|NO3|PO4/.test(species));
const isMetal = species => symbols.includes(species) && metalNumbers.has(symbols.indexOf(species)+1);
const isSalt = species => !symbols.includes(species) && !isAcid(species) && !isBase(species) && !isCarbonate(species) && !gases.has(species) && !isOxide(species) && /(Cl|Br|I|F|NO3|SO4|SO3|PO4|COO|S)(\d*)$/.test(species);
const inNamedCategory = species => commonReagents.includes(species) || isAcid(species) || isBase(species) || isCarbonate(species) || gases.has(species) || isMetal(species) || isOxide(species) || isSalt(species);
renderShelf('acids', shelfMaterials.filter(isAcid), 'No acids.'); renderShelf('bases', shelfMaterials.filter(isBase), 'No bases or alkalis.'); renderShelf('carbonates', shelfMaterials.filter(isCarbonate), 'No carbonates.'); renderShelf('common', commonReagents, 'No common reagents.'); renderShelf('gases', shelfMaterials.filter(species=>gases.has(species)), 'No gases.'); renderShelf('metals', shelfMaterials.filter(isMetal), 'No metals.'); renderShelf('other', shelfMaterials.filter(species=>!symbols.includes(species) && !inNamedCategory(species)), 'No other materials.'); renderShelf('oxides', shelfMaterials.filter(isOxide), 'No oxides.'); renderShelf('salts', shelfMaterials.filter(isSalt), 'No salts.'); renderShelf('produced', [], 'Produce a material on the workbench to see it here.');
fetch('./data/formulae.tsv')
  .then(response => response.ok ? response.text() : Promise.reject())
  .then(text => text.split(/\r?\n/).slice(1).reduce((formulae, line) => {
    const [formula, name = '', cas = ''] = line.split('\t').map(cell => cell.trim());
    if (formula && name) formulae.push({ formula, name, cas });
    return formulae;
  }, []))
  .then(renderFormulaeReference)
  .catch(() => renderFormulaeReference([]));
shelfButtons.forEach(button=>button.addEventListener('click',()=>{ shelfButtons.forEach(item=>item.classList.toggle('active',item===button)); document.querySelectorAll('.shelf-panel').forEach(panel=>panel.classList.toggle('active',panel.id===`shelf-${button.dataset.shelf}`)); }));
const periodicPanel = document.querySelector('.periodic-panel');
periodicPanel.addEventListener('click', event=>{ const card=event.target.closest('[data-shelf-material]'); if(!card) return; if(card.dataset.skipClick === 'true') { delete card.dataset.skipClick; return; } addShelfMaterial(card.dataset.shelfMaterial); });
periodicPanel.addEventListener('pointerdown', event => {
  const card = event.target.closest('[data-shelf-material]'); if (!card) return;
  event.preventDefault(); card.dataset.skipClick = 'true'; card.setPointerCapture(event.pointerId);
  const startX = event.clientX, startY = event.clientY, canvasRect = canvas.getBoundingClientRect();
  const species = card.dataset.shelfMaterial;
  const ball = makeBall({}, event.clientX-canvasRect.left, event.clientY-canvasRect.top, null, { species, display:formatSpecies(species), name:compoundNames[species] });
  const move = moveEvent => { const rect=canvas.getBoundingClientRect(); positionBall(ball,moveEvent.clientX-rect.left,moveEvent.clientY-rect.top); };
  const end = endEvent => { card.removeEventListener('pointermove',move); card.removeEventListener('pointerup',end); setTimeout(() => delete card.dataset.skipClick, 0); const rect=canvas.getBoundingClientRect(); if (Math.hypot(endEvent.clientX-startX,endEvent.clientY-startY)<8) { const spot=nextWorkbenchSpot(); positionBall(ball,spot.x,spot.y); } else if (endEvent.clientX<rect.left || endEvent.clientX>rect.right || endEvent.clientY<rect.top || endEvent.clientY>rect.bottom || isOverTrash(ball)) { removeBall(ball); return; } else mergeIfTouching(ball); detail.textContent=`Added ${formatSpecies(species)} to the workbench.`; renderReactionExplorer(); };
  card.addEventListener('pointermove',move); card.addEventListener('pointerup',end);
});
function renderMaterialResults(query = '') {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) { materialResults.innerHTML = ''; return; }
  const matches = materialLibrary.filter(species => species.toLowerCase().includes(normalizedQuery)).slice(0, 8);
  materialResults.innerHTML = matches.map(species => `<button type="button" data-material="${species}">${formatSpecies(species)}${compoundNames[species] ? ` — ${compoundNames[species]}` : ''}</button>`).join('');
}
materialSearch.addEventListener('input', () => renderMaterialResults(materialSearch.value));
materialResults.addEventListener('click', event => {
  const button = event.target.closest('[data-material]'); if (!button) return;
  const species = button.dataset.material;
  const spot=nextWorkbenchSpot(); makeBall({}, spot.x, spot.y, null, { species, display:formatSpecies(species), name:compoundNames[species] });
  detail.textContent = `Added ${formatSpecies(species)} to the workbench.`;
  materialSearch.value = '';
  materialResults.innerHTML = '';
  renderReactionExplorer();
});
function cloneBall(ball) {
  const composition = JSON.parse(ball.dataset.composition);
  const metadata = { species:ball.dataset.species, display:ball.dataset.display, name:ball.dataset.compoundName };
  const left = parseFloat(ball.style.left) + ball.offsetWidth / 2 + 88;
  const top = parseFloat(ball.style.top) + ball.offsetHeight / 2 + 18;
  makeBall(composition, left, top, null, metadata);
  detail.textContent = `Duplicated: ${ball.dataset.display || formula(composition)}`;
  renderReactionExplorer();
}
function undoLastReaction() {
  while (reactionStack.length) {
    const history = reactionStack.pop();
    const products = [...canvas.querySelectorAll(`[data-reaction-group="${history.reactionGroup}"]`)];
    if (!products.length) continue;
    const left = parseFloat(products[0].style.left) + products[0].offsetWidth / 2;
    const top = parseFloat(products[0].style.top) + products[0].offsetHeight / 2;
    products.forEach(product => product.remove());
    const [first, second] = history.reactants;
    makeBall(first.composition, left - 42, top, first.previous, first.metadata);
    makeBall(second.composition, left + 42, top, second.previous, second.metadata);
    detail.textContent = `Reaction reversed: ${first.metadata.display || formula(first.composition)} + ${second.metadata.display || formula(second.composition)}`;
    showReactionConditions();
    renderReactionExplorer();
    return;
  }
  detail.textContent = 'No reaction to undo.';
}
function naturalForm(symbol) {
  return { [symbol]: naturalForms[symbol] || 1 };
}
function enableMove(ball) {
  ball.addEventListener('pointerdown', event => {
    event.preventDefault(); ball.setPointerCapture(event.pointerId);
    const startX = event.clientX, startY = event.clientY;
    const move = moveEvent => { const rect=canvas.getBoundingClientRect(); positionBall(ball,moveEvent.clientX-rect.left,moveEvent.clientY-rect.top); };
    const end = endEvent => { ball.removeEventListener('pointermove',move); ball.removeEventListener('pointerup',end); if (Math.hypot(endEvent.clientX - startX, endEvent.clientY - startY) < 8) { selectReactionSpecies(ball.dataset.species); return; } if (isOverTrash(ball)) removeBall(ball); else mergeIfTouching(ball); };
    ball.addEventListener('pointermove',move); ball.addEventListener('pointerup',end);
  });
  ball.addEventListener('dblclick', () => cloneBall(ball));
}
undoButton.addEventListener('click', undoLastReaction);
clearWorkbenchButton.addEventListener('click', () => {
  canvas.querySelectorAll('.atom-ball').forEach(ball => ball.remove());
  reactionStack.length = 0;
  canvas.classList.remove('has-items');
  detail.textContent = 'Workbench cleared.';
  showReactionConditions();
  renderReactionExplorer();
});
reactionCategory.addEventListener('change', renderReactionExplorer);
canvas.addEventListener('click', event => { if (event.target === canvas) selectReactionFilter(); });
layout.forEach((row,rowIndex) => row.forEach((atomicNumber,columnIndex) => {
  if (!atomicNumber) return;
  const button = document.createElement('button'); const symbol = symbols[atomicNumber-1];
  button.className='element'; button.style.gridColumn=columnIndex+1; button.style.gridRow=rowIndex+1; button.draggable=false;
  button.innerHTML=`<span class="number">${atomicNumber}</span><span class="symbol">${symbol}</span><span class="name">${elementName(symbol)}</span>`;
  button.setAttribute('aria-label',`${elementName(symbol)}, ${symbol}`);
  button.addEventListener('pointerdown', event => {
    event.preventDefault(); selectReactionFilter(symbol); const startX=event.clientX, startY=event.clientY; const rect=canvas.getBoundingClientRect(); const ball=makeBall(naturalForm(symbol),event.clientX-rect.left,event.clientY-rect.top);
    ball.setPointerCapture(event.pointerId);
    const move = moveEvent => { const canvasRect=canvas.getBoundingClientRect(); positionBall(ball,moveEvent.clientX-canvasRect.left,moveEvent.clientY-canvasRect.top); };
    const end = endEvent => { ball.removeEventListener('pointermove',move); ball.removeEventListener('pointerup',end); const canvasRect=canvas.getBoundingClientRect(); if (Math.hypot(endEvent.clientX-startX,endEvent.clientY-startY) < 8) { const spot=nextWorkbenchSpot(); positionBall(ball,spot.x,spot.y); detail.textContent=`Added ${ball.dataset.display} to the workbench.`; renderReactionExplorer(); return; } if (endEvent.clientY < canvasRect.top || endEvent.clientY > canvasRect.bottom || endEvent.clientX < canvasRect.left || endEvent.clientX > canvasRect.right) removeBall(ball); else if (isOverTrash(ball)) removeBall(ball); else mergeIfTouching(ball); };
    ball.addEventListener('pointermove',move); ball.addEventListener('pointerup',end);
  });
  table.append(button);
}));
renderReactionExplorer();
