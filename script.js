// app.js - Rate Calculator Matrix Engine Only (SFI June 2026)

// SFI June 2026 Grid Data Rules (IDR values)
const SFI_PRICELIST = {
  usa: {
    1: 828000, 2: 1060000, 3: 1335000, 4: 1585000, 5: 1973000, 6: 2225000, 7: 2484000, 
    8: 2776000, 9: 3067000, 10: 3318000, 11: 3570000, 12: 3853000, 13: 4137000, 14: 4428000, 
    15: 4712000, 16: 5028000, 17: 5311000, 18: 5595000, 19: 5878000, 20: 6194000, 21: 6469000, 
    22: 6753000, 23: 7004000, 24: 7263000, 25: 7515000, 26: 7798000, 27: 8090000, 28: 8365000, 
    29: 8616000, 30: 8876000,
    surchargeThreshold: 22, // Surcharge rule for >22kg
    surchargeFee: 400000
  },
  australia: {
    1: 371000, 2: 508000, 3: 645000, 4: 781000, 5: 926000, 6: 1111000, 7: 1297000, 
    8: 1482000, 9: 1667000, 10: 1852000, 11: 2037000, 12: 2222000, 13: 2407000, 14: 2593000, 
    15: 2778000, 16: 2963000, 17: 3148000, 18: 3333000, 19: 3518000, 20: 3704000, 21: 3889000, 
    22: 4074000, 23: 4259000, 24: 4444000, 25: 4629000, 26: 4814000, 27: 5000000, 28: 5185000, 
    29: 5370000, 30: 5555000,
    surchargeThreshold: 30,
    surchargeFee: 450000
  },
  uk: {
    1: 439000, 2: 725000, 3: 1002000, 4: 1296000, 5: 1573000, 6: 1851000, 7: 2128000, 
    8: 2398000, 9: 2676000, 10: 2953000, 11: 3247000, 12: 3516000, 13: 3794000, 14: 4071000, 
    15: 4349000, 16: 4618000, 17: 4896000, 18: 5173000, 19: 5451000, 20: 5721000, 21: 6054000, 
    22: 6332000, 23: 6601000, 24: 6879000, 25: 7157000, 26: 7426000, 27: 7704000, 28: 7981000, 
    29: 8259000, 30: 8528000,
    surchargeThreshold: 30,
    surchargeFee: 1150000
  },
  saudi_arabia: {
    1: 522000, 2: 664000, 3: 807000, 4: 966000, 5: 1125000, 6: 1276000, 7: 1435000, 
    8: 1594000, 9: 1745000, 10: 1903000, 11: 2062000, 12: 2212000, 13: 2372000, 14: 2531000, 
    15: 2682000, 16: 2841000, 17: 3000000, 18: 3150000, 19: 3309000, 20: 3468000, 21: 3619000, 
    22: 3778000, 23: 3937000, 24: 4088000, 25: 4247000,
    maxWeight: 25
  },
  egypt: {
    1: 245000, 2: 343000, 3: 483000, 4: 623000, 5: 763000, 6: 987000, 7: 1085000, 
    8: 1190000, 9: 1288000, 10: 1386000, 11: 1491000, 12: 1589000, 13: 1687000, 14: 1792000, 
    15: 1890000, 16: 1988000, 17: 2093000, 18: 2191000, 19: 2289000, 20: 2394000, 21: 2492000, 
    22: 2590000, 23: 2695000, 24: 2793000, 25: 2891000, 26: 2996000, 27: 3094000, 28: 3192000, 
    29: 3297000, 30: 3395000,
    maxWeight: 30
  },
  japan: { 1: 570000, 5: 1100000, 10: 1900000, 20: 3800000, 30: 5500000 },
  south_korea: { 1: 550000, 5: 930000, 10: 1700000, 20: 3400000, 30: 5100000 },
  hong_kong: { 1: 550000, 5: 900000, 10: 1600000, 20: 3100000, 30: 4800000 }
};

// DOM References
const extrasList = document.getElementById('extrasList');
const estimateBtn = document.getElementById('estimateBtn');
const resetBtn = document.getElementById('reset');
const routeChip = document.getElementById('routeChip');

let extras = [];

function formatIDR(amount) {
  return 'Rp ' + Math.round(amount).toLocaleString('id-ID');
}

function updateRouteChip() {
  const fromText = document.getElementById('from').selectedOptions[0].textContent.split(',')[0];
  const toText = document.getElementById('to').selectedOptions[0].textContent.split(' (')[0];
  routeChip.textContent = `${fromText} → ${toText}`;
}
document.getElementById('from').addEventListener('change', updateRouteChip);
document.getElementById('to').addEventListener('change', updateRouteChip);

// Add custom surcharges dynamically
document.getElementById('addBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const label = document.getElementById('addLabel').value.trim();
  const val = parseFloat(document.getElementById('addValue').value) || 0;
  if (label && val > 0) {
    extras.push({ label, value: val });
    renderExtras();
    document.getElementById('addLabel').value = '';
    document.getElementById('addValue').value = '';
  }
});

function renderExtras() {
  extrasList.innerHTML = '';
  extras.forEach((e, idx) => {
    const el = document.createElement('div');
    el.className = 'line';
    el.innerHTML = `<div>${e.label}</div><div>${formatIDR(e.value)} <button data-idx="${idx}" class="secondary" style="padding:2px 6px; font-size:10px;">x</button></div>`;
    extrasList.appendChild(el);
  });
  
  extrasList.querySelectorAll('button').forEach(b => b.addEventListener('click', ev => {
    extras.splice(+ev.target.dataset.idx, 1);
    renderExtras();
  }));
}

// Pricing Calculation Processor
function calculateEstimate() {
  const targetCountry = document.getElementById('to').value;
  const inputWeight = Math.ceil(parseFloat(document.getElementById('weight').value) || 1);

  let freight = 0;
  let sfiSurcharge = 0;
  let portCustoms = 150000; // Baseline administrative handling charge
  let insurance = 0;
  let totalExtras = extras.reduce((sum, item) => sum + item.value, 0);

  // Exact Matrix SFI Lookup
  if (SFI_PRICELIST[targetCountry]) {
    const table = SFI_PRICELIST[targetCountry];
    
    // Check maximum structural weight limitations
    if (table.maxWeight && inputWeight > table.maxWeight) {
      alert(`Warning: Maximum allowed packet weight for ${targetCountry.toUpperCase()} is ${table.maxWeight}kg.`);
    }

    // Direct match check
    if (table[inputWeight]) {
      freight = table[inputWeight];
    } else {
      // Scale out calculation linearly if input weight goes over defined steps
      const availableWeights = Object.keys(table).map(Number).filter(n => !isNaN(n));
      const maxWeightTier = Math.max(...availableWeights);
      const baselinePrice = table[maxWeightTier];
      const perKgFactor = baselinePrice / maxWeightTier;
      freight = inputWeight * perKgFactor;
    }

    // Process handling surcharges on matching weight rules
    if (table.surchargeThreshold && inputWeight > table.surchargeThreshold) {
      sfiSurcharge = table.surchargeFee;
    }
    
    insurance = freight * 0.005;
  }

  // Adjustments on Incoterms and Extra Service options
  const activeIncoterm = document.getElementById('incoterm').value;
  if (activeIncoterm === 'CIF') freight += (portCustoms * 0.2);
  
  if (document.getElementById('service').value === 'express') {
    freight *= 1.20; // +20% Express modifier
  }

  const grandTotal = freight + sfiSurcharge + portCustoms + insurance + totalExtras;

  // UI Breakdown Update
  document.getElementById('freightVal').textContent = formatIDR(freight);
  document.getElementById('truckVal').textContent = formatIDR(sfiSurcharge);
  document.getElementById('portVal').textContent = formatIDR(portCustoms);
  document.getElementById('insVal').textContent = formatIDR(insurance);
  document.getElementById('extrasVal').textContent = formatIDR(totalExtras);
  document.getElementById('totalVal').textContent = formatIDR(grandTotal);
}

estimateBtn.addEventListener('click', calculateEstimate);

resetBtn.addEventListener('click', () => {
  document.getElementById('weight').value = '5';
  extras = [];
  renderExtras();
  ['freightVal', 'truckVal', 'portVal', 'insVal', 'extrasVal', 'totalVal'].forEach(id => {
    document.getElementById(id).textContent = '-';
  });
  updateRouteChip();
});

// Initialize chip layout on reload
updateRouteChip();