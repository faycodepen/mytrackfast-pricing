// Complete June 2026 Matrix Data & Precise Text Regulations matching the document context[cite: 5]
const SFI_PRICELIST = {
  usa: {
    1: 828000, 2: 1060000, 3: 1335000, 4: 1585000, 5: 1973000, 6: 2225000, 7: 2484000, 
    8: 2776000, 9: 3067000, 10: 3318000, 11: 3570000, 12: 3853000, 13: 4137000, 14: 4428000, 
    15: 4712000, 16: 5028000, 17: 5311000, 18: 5595000, 19: 5878000, 20: 6194000, 21: 6469000, 
    22: 6753000, 23: 7004000, 24: 7263000, 25: 7515000, 26: 7798000, 27: 8090000, 28: 8365000, 
    29: 8616000, 30: 8876000,
    surchargeThreshold: 22, surchargeFee: 400000,
    notes: [
      "Harga sudah termasuk DDP Charge yang harus dibayar di muka[cite: 5].",
      "Berat barang di atas 22kg atau Panjang lebih dari 121cm atau ukuran Girth (2x Panjang + 2x Lebar) melebihi 266cm, dikenakan Handling Surcharge Rp 400.000 per pengiriman[cite: 5].",
      "Commodity: General cargo, non frozen food (yang tidak ada larangan di negara penerima)[cite: 5].",
      "Berat yang dibebankan didasarkan pada Berat Aktual saat timbang atau Berat Volume (Rumus: PxLxT/5.000) mana yang lebih tinggi[cite: 5].",
      "Wajib menyertakan Packing List[cite: 5].",
      "Duty tax dibayar oleh pengirim/penerima sesuai regulasi yang berlaku di negara tersebut (jika ada)[cite: 5]."
    ]
  },
  australia: {
    1: 371000, 2: 508000, 3: 645000, 4: 781000, 5: 926000, 6: 1111000, 7: 1297000, 
    8: 1482000, 9: 1667000, 10: 1852000, 11: 2037000, 12: 2222000, 13: 2407000, 14: 2593000, 
    15: 2778000, 16: 2963000, 17: 3148000, 18: 3333000, 19: 3518000, 20: 3704000, 21: 3889000, 
    22: 4074000, 23: 4259000, 24: 4444000, 25: 4629000, 26: 4814000, 27: 5000000, 28: 5185000, 
    29: 5370000, 30: 5555000,
    surchargeThreshold: 30, surchargeFee: 450000,
    notes: [
      "Harga sudah termasuk DDP Charge yang harus dibayar di muka[cite: 5].",
      "Nilai barang maksimal yang dapat dikirim adalah AUD 1000 (di atas nilai tersebut dikenakan Pajak dan Bea Masuk sesuai aturan yang berlaku)[cite: 5].",
      "Berat barang di atas 30kg atau Panjang lebih dari 100cm, dikenakan Handling Surcharge Rp 450.000 per pengiriman[cite: 5].",
      "Commodity: General cargo, non frozen food (yang tidak ada larangan di negara penerima)[cite: 5].",
      "Wajib menyertakan Packing List[cite: 5].",
      "Duty tax dibayar oleh pengirim/penerima sesuai regulasi yang berlaku di negara tersebut (jika ada)[cite: 5]."
    ]
  },
  uk: {
    1: 439000, 2: 725000, 3: 1002000, 4: 1296000, 5: 1573000, 6: 1851000, 7: 2128000, 
    8: 2398000, 9: 2676000, 10: 2953000, 11: 3247000, 12: 3516000, 13: 3794000, 14: 4071000, 
    15: 4349000, 16: 4618000, 17: 4896000, 18: 5173000, 19: 5451000, 20: 5721000, 21: 6054000, 
    22: 6332000, 23: 6601000, 24: 6879000, 25: 7157000, 26: 7426000, 27: 7704000, 28: 7981000, 
    29: 8259000, 30: 8528000,
    surchargeThreshold: 30, surchargeFee: 1150000,
    notes: [
      "Harga sudah termasuk DDP Charge yang harus dibayar di muka[cite: 5].",
      "Nilai barang maksimal yang dapat dikirim adalah GBP 135 (di atas nilai tersebut dikenakan Pajak dan Bea Masuk sesuai aturan yang berlaku)[cite: 5].",
      "Berat barang di atas 30kg atau Panjang lebih dari 175cm atau ukuran Girth (2x Panjang + 2x Lebar) melebihi 300cm, dikenakan Handling Surcharge Rp 1.150.000 per pengiriman[cite: 5].",
      "Commodity: General cargo, non frozen food (yang tidak ada larangan di negara penerima)[cite: 5].",
      "Wajib menyertakan Packing List[cite: 5]."
    ]
  },
  saudi_arabia: {
    1: 522000, 2: 664000, 3: 807000, 4: 966000, 5: 1125000, 6: 1276000, 7: 1435000, 
    8: 1594000, 9: 1745000, 10: 1903000, 11: 2062000, 12: 2212000, 13: 2372000, 14: 2531000, 
    15: 2682000, 16: 2841000, 17: 3000000, 18: 3150000, 19: 3309000, 20: 3468000, 21: 3619000, 
    22: 3778000, 23: 3937000, 24: 4088000, 25: 4247000,
    maxWeight: 25,
    notes: [
      "Harga sudah termasuk DDP Charge yang harus dibayar di muka[cite: 5].",
      "Nilai barang maksimal yang dapat dikirim adalah SAR 1000 (di atas nilai tersebut dikenakan Pajak dan Bea Masuk sesuai aturan yang berlaku)[cite: 5].",
      "Berat barang maksimal yang dapat dikirim adalah 25kg[cite: 5].",
      "Commodity: General cargo, non frozen food (yang tidak ada larangan di negara penerima)[cite: 5].",
      "Wajib menyertakan Packing List[cite: 5]."
    ]
  },
  egypt: {
    1: 245000, 2: 343000, 3: 483000, 4: 623000, 5: 763000, 6: 987000, 7: 1085000, 
    8: 1190000, 9: 1288000, 10: 1386000, 11: 1491000, 12: 1589000, 13: 1687000, 14: 1792000, 
    15: 1890000, 16: 1988000, 17: 2093000, 18: 2191000, 19: 2289000, 20: 2394000, 21: 2492000, 
    22: 2590000, 23: 2695000, 24: 2793000, 25: 2891000, 26: 2996000, 27: 3094000, 28: 3192000, 
    29: 3297000, 30: 3395000,
    maxWeight: 30,
    notes: [
      "Harga sudah termasuk DDP Charge yang harus dibayar di muka[cite: 5].",
      "Berat barang maksimal yang dapat dikirim adalah 30kg[cite: 5].",
      "Commodity: General cargo, non frozen food (yang tidak ada larangan di negara penerima)[cite: 5].",
      "Wajib menyertakan Packing List & Bukti Pembayaran Duty Tax jika diminta[cite: 5]."
    ]
  },
  japan: { 
    1: 570000, 5: 1100000, 10: 1900000, 20: 3800000, 30: 5500000,
    surchargeThreshold: 20, surchargeFee: 550000, isAsia: true, type: 'other_asia'
  },
  south_korea: { 
    1: 550000, 5: 930000, 10: 1700000, 20: 3400000, 30: 5100000,
    surchargeThreshold: 20, surchargeFee: 550000, isAsia: true, type: 'other_asia'
  },
  hong_kong: { 
    1: 550000, 5: 900000, 10: 1600000, 20: 3100000, 30: 4800000,
    surchargeThreshold: 20, surchargeFee: 550000, isAsia: true, type: 'other_asia'
  },
  singapore: {
    1: 138001, 2: 214001, 3: 308001, 4: 400001, 5: 492001, 6: 586001, 7: 678001, 8: 770001, 9: 864001, 10: 956001,
    11: 1048001, 12: 1142001, 13: 1234001, 14: 1328001, 15: 1420011, 16: 1512001, 17: 1606001, 18: 1698001, 19: 1790001, 20: 1884001,
    21: 1976001, 22: 2068001, 23: 2162001, 24: 2254001, 25: 2346001, 26: 2440011, 27: 2532001, 28: 2624001, 29: 2718001, 30: 2810001,
    isAsia: true, type: 'sea'
  },
  malaysia_west: {
    1: 150001, 2: 218001, 3: 310001, 4: 402001, 5: 494001, 6: 592001, 7: 688001, 8: 786001, 9: 884001, 10: 980001,
    11: 1078001, 12: 1174001, 13: 1272001, 14: 1370011, 15: 1466001, 16: 1564001, 17: 1662001, 18: 1758001, 19: 1856001, 20: 1954001,
    21: 2050011, 22: 2148001, 23: 2244001, 24: 2342001, 25: 2440011, 26: 2536001, 27: 2634001, 28: 2730011, 29: 2828001, 30: 2926001,
    isAsia: true, type: 'sea'
  },
  malaysia_east: {
    1: 262001, 2: 508001, 3: 716001, 4: 926001, 5: 1134001, 6: 1344001, 7: 1552001, 8: 1762001, 9: 1970001, 10: 2180001,
    11: 2388001, 12: 2598001, 13: 2806001, 14: 3016001, 15: 3224001, 16: 3434001, 17: 3642001, 18: 3852001, 19: 4060001, 20: 4270001,
    21: 4478001, 22: 4688001, 23: 4896001, 24: 5106001, 25: 5314001, 26: 5524001, 27: 5732001, 28: 5942001, 29: 6150001, 30: 6360001,
    isAsia: true, type: 'sea'
  },
  thailand: {
    surchargeThreshold: 20, surchargeFee: 550000, isAsia: true, type: 'sea',
    1: 550001, 2: 630001, 3: 700001, 4: 900001, 5: 1100001, 6: 1320001, 7: 1540001, 8: 1760001, 9: 1980001, 10: 2200001,
    11: 2420011, 12: 2640011, 13: 2860011, 14: 3080011, 15: 3300011, 16: 3520011, 17: 3740011, 18: 3960011, 19: 4180011, 20: 4400011,
    21: 4620011, 22: 4840011, 23: 5060011, 24: 5280011, 25: 5500011, 26: 5720011, 27: 5940011, 28: 6160011, 29: 6380011, 30: 6600011
  },
  philippines: {
    surchargeThreshold: 20, surchargeFee: 550000, isAsia: true, type: 'sea',
    1: 550001, 2: 630001, 3: 700001, 4: 830001, 5: 1000001, 6: 1200001, 7: 1400001, 8: 1600001, 9: 1800001, 10: 2000001,
    11: 2200011, 12: 2400011, 13: 2600011, 14: 2800011, 15: 3000011, 16: 3200011, 17: 3400011, 18: 3600011, 19: 3800011, 20: 4000011,
    21: 4200011, 22: 4400011, 23: 4600011, 24: 4800011, 25: 5000011, 26: 5200011, 27: 5400011, 28: 5600011, 29: 5800011, 30: 6000011
  },
  vietnam: {
    surchargeThreshold: 20, surchargeFee: 550000, isAsia: true, type: 'sea',
    1: 550001, 2: 630001, 3: 700001, 4: 850001, 5: 1050001, 6: 1260001, 7: 1470001, 8: 1680001, 9: 1890001, 10: 2100001,
    11: 2310011, 12: 2520011, 13: 2730011, 14: 2940011, 15: 3150011, 16: 3360011, 17: 3570011, 18: 3780011, 19: 3990011, 20: 4200011,
    21: 4410011, 22: 4620011, 23: 4830011, 24: 5040011, 25: 5250011, 26: 5460011, 27: 5670011, 28: 5880011, 29: 6090011, 30: 6300011
  },
  europe: {
    surchargeThreshold: 40, surchargeFee: 500000,
    notes: [
      "Mekanisme: Harga sudah termasuk DDP Charge yang harus dibayar di muka[cite: 5].",
      "Nilai barang maksimal yang dapat dikirim adalah EUR 150 (Nilai barang melebihi EUR 150 dikenakan Pajak dan Bea Masuk di negara tujuan serta dokumen pendukung lainnya bila dibutuhkan)[cite: 5].",
      "Berat barang di atas 40kg atau ukuran Girth (2x Panjang + 2x Lebar) melebihi 300cm, dikenakan Handling Surcharge Rp 500.000 per pengiriman[cite: 5].",
      "Commodity: General cargo, non frozen food (yang tidak ada larangan di negara penerima)[cite: 5].",
      "Berat yang dibebankan didasarkan pada Berat Aktual saat timbang atau Berat Volume (Rumus: PxLxT/5.000)[cite: 5].",
      "Wajib menyertakan Packing List[cite: 5].",
      "Duty tax dibayar oleh pengirim/penerima sesuai regulasi yang berlaku di negara tersebut (jika ada)[cite: 5]."
    ],
    zone1: {
      1: 791000, 2: 1044000, 3: 1341000, 4: 1629000, 5: 1917000, 6: 2230000, 7: 2526000, 8: 2815000, 9: 3103000, 10: 3392000,
      11: 3688000, 12: 3976000, 13: 4265000, 14: 4561000, 15: 4866000, 16: 5154000, 17: 5443000, 18: 5731000, 19: 6027000, 20: 6251000,
      21: 6564000, 22: 6877000, 23: 7188650, 24: 7502000, 25: 7814000, 26: 8127000, 27: 8439000, 28: 8752000, 29: 9064000, 30: 9377000
    },
    zone2: {
      1: 1105000, 2: 1358000, 3: 1655000, 4: 1943000, 5: 2231000, 6: 2544000, 7: 2840000, 8: 3129000, 9: 3417000, 10: 3706000,
      11: 4002000, 12: 4290000, 13: 4579000, 14: 4875000, 15: 5188000, 16: 5476000, 17: 5765000, 18: 6061000, 19: 6350000, 20: 6573000,
      21: 6902000, 22: 7231000, 23: 7559000, 24: 7888000, 25: 8217000, 26: 8545000, 27: 7938000, 28: 9203000, 29: 9531000, 30: 9860000
    },
    zone3: {
      1: 1250000, 2: 1503000, 3: 1791000, 4: 2088000, 5: 2376000, 6: 2689000, 7: 2977000, 8: 3266000, 9: 3562000, 10: 3850000,
      11: 4279000, 12: 4435000, 13: 4724000, 14: 5012000, 15: 5325000, 16: 5621000, 17: 5910000, 18: 6226000, 19: 6486000, 20: 6735000,
      21: 7071000, 22: 7408000, 23: 7745000, 24: 8081000, 25: 8418000, 26: 8755000, 27: 9091000, 28: 9428000, 29: 9765000, 30: 10101000
    },
    zone4: {
      1: 1467000, 2: 1745000, 3: 2057000, 4: 2362000, 5: 2674000, 6: 3003000, 7: 3315000, 8: 3628000, 9: 3932000, 10: 4245000,
      11: 4557000, 12: 4862000, 13: 5175000, 14: 5487000, 15: 5816000, 16: 6128000, 17: 6433000, 18: 6745000, 19: 7058000, 20: 7361000,
      21: 7689000, 22: 7999000, 23: 8362000, 24: 8637000, 25: 9038000, 26: 9348000, 27: 9750000, 28: 10059000, 29: 10462000, 30: 10771000
    }
  }
};

const OTHER_ASIA_REGULATIONS = [
  "Mekanisme: DDU[cite: 5].",
  "Berat barang di atas 20kg atau Panjang lebih dari 120cm, dikenakan Handling Surcharge Rp 550.000 per pengiriman[cite: 5].",
  "Remote Area Surcharge Rp 450.000 per pengiriman jika ada (mengikuti ketentuan kurir last mile tiap negara)[cite: 5].",
  "Commodity: General cargo, non frozen food (yang tidak ada larangan di negara penerima)[cite: 5].",
  "Berat yang dibebankan didasarkan pada Berat Aktual saat timbang atau Berat Volume (Rumus: PxLxT/5.000)[cite: 5].",
  "Wajib menyertakan Packing List[cite: 5].",
  "Duty tax dibayar oleh penerima sesuai regulasi yang berlaku di negara tersebut (jika ada)[cite: 5]."
];

const SOUTHEAST_ASIA_REGULATIONS = [
  "Mekanisme: DDU[cite: 5].",
  "Berat barang di atas 20kg atau Panjang lebih dari 120cm, dikenakan Handling Surcharge Rp 550.000 per pengiriman (Kecuali Singapore & Malaysia)[cite: 5].",
  "Remote Area Surcharge Rp 450.000 per pengiriman jika ada (mengikuti ketentuan kurir last mile tiap negara)[cite: 5].",
  "Commodity: General cargo, non frozen food (yang tidak ada larangan di negara penerima)[cite: 5].",
  "Berat yang dibebankan didasarkan pada Berat Aktual saat timbang atau Berat Volume (Rumus: PxLxT/5.000)[cite: 5].",
  "Wajib menyertakan Packing List[cite: 5].",
  "Duty tax dibayar oleh penerima sesuai regulasi yang berlaku di negara tersebut (jika ada)[cite: 5]."
];

const estimateBtn = document.getElementById('estimateBtn');
const resetBtn = document.getElementById('reset');
const routeChip = document.getElementById('routeChip');
const toDestination = document.getElementById('to');
const europeZoneWrap = document.getElementById('europeZoneWrap');
const europeZoneSelect = document.getElementById('europeZone');
const remoteAreaWrap = document.getElementById('remoteAreaWrap');
const remoteAreaCheck = document.getElementById('remoteAreaCheck');

const notesTitle = document.getElementById('notesTitle');
const notesList = document.getElementById('notesList');

function formatIDR(amount) {
  return 'Rp ' + Math.round(amount).toLocaleString('id-ID');
}

toDestination.addEventListener('change', () => {
  const target = toDestination.value;
  europeZoneWrap.style.display = (target === 'europe') ? 'block' : 'none';
  
  const config = SFI_PRICELIST[target] || (target === 'europe' ? SFI_PRICELIST.europe : {});
  remoteAreaWrap.style.display = (config.isAsia) ? 'block' : 'none';
  if (!config.isAsia) remoteAreaCheck.checked = false;

  renderCountryNotes(target);
  updateRouteChip();
});

europeZoneSelect.addEventListener('change', updateRouteChip);
document.getElementById('from').addEventListener('change', updateRouteChip);

function renderCountryNotes(target) {
  notesTitle.textContent = `${toDestination.selectedOptions[0].textContent.split(' (')[0]} Custom Regulations & Guidelines:`;
  notesList.innerHTML = '';
  
  let activeNotes = [];
  
  if (target === 'europe') {
    activeNotes = SFI_PRICELIST.europe.notes;
  } else if (SFI_PRICELIST[target]) {
    const config = SFI_PRICELIST[target];
    if (config.notes) {
      activeNotes = config.notes;
    } else if (config.type === 'other_asia') {
      activeNotes = OTHER_ASIA_REGULATIONS;
    } else if (config.type === 'sea') {
      activeNotes = SOUTHEAST_ASIA_REGULATIONS;
    }
  }

  activeNotes.forEach(note => {
    const li = document.createElement('li');
    li.textContent = note;
    notesList.appendChild(li);
  });
}

function updateRouteChip() {
  const fromText = document.getElementById('from').selectedOptions[0].textContent.split(',')[0];
  let toText = toDestination.selectedOptions[0].textContent.split(' (')[0];
  
  if (toDestination.value === 'europe') {
    const zoneLabel = europeZoneSelect.value.replace('zone', 'Zona ');
    toText = `Europe (${zoneLabel})`;
  }
  routeChip.textContent = `${fromText} → ${toText}`;
}

function calculateEstimate() {
  const targetCountry = toDestination.value;
  const inputWeight = parseFloat(document.getElementById('weight').value) || 1;
  
  const lengthCm = parseFloat(document.getElementById('length').value) || 0;
  const widthCm = parseFloat(document.getElementById('width').value) || 0;
  const heightCm = parseFloat(document.getElementById('height').value) || 0;

  // Evaluate Volumetric Weight: (P x L x T) / 5000[cite: 5]
  let volumetricWeight = 0;
  if (lengthCm > 0 && widthCm > 0 && heightCm > 0) {
    volumetricWeight = (lengthCm * widthCm * heightCm) / 5000;[cite: 5]
  }

  const finalWeight = Math.ceil(Math.max(inputWeight, volumetricWeight));
  document.getElementById('chargeableWeightVal').textContent = `${finalWeight} kg ${volumetricWeight > inputWeight ? '(Volumetric Weight Applied)' : ''}`;

  let freight = 0;
  let sfiSurcharge = 0;

  if (SFI_PRICELIST[targetCountry]) {
    let table = SFI_PRICELIST[targetCountry];
    let activeSurchargeConfig = table;

    if (targetCountry === 'europe') {
      const activeZone = europeZoneSelect.value;
      table = SFI_PRICELIST.europe[activeZone];
      activeSurchargeConfig = SFI_PRICELIST.europe;
    }
    
    if (activeSurchargeConfig.maxWeight && finalWeight > activeSurchargeConfig.maxWeight) {
      alert(`Warning: Maximum allowed packet weight for this route is ${activeSurchargeConfig.maxWeight}kg[cite: 5].`);
    }

    if (table[finalWeight]) {
      freight = table[finalWeight];
    } else {
      const availableWeights = Object.keys(table).map(Number).filter(n => !isNaN(n));
      const maxWeightTier = Math.max(...availableWeights);
      const baselinePrice = table[maxWeightTier];
      const perKgFactor = baselinePrice / maxWeightTier;
      freight = finalWeight * perKgFactor;
    }

    if (activeSurchargeConfig.surchargeThreshold && finalWeight > activeSurchargeConfig.surchargeThreshold) {
      sfiSurcharge = activeSurchargeConfig.surchargeFee;
    }

    // Extra dimensional limits matching SFI text rules[cite: 5]
    if (targetCountry === 'usa') {
      const girth = lengthCm + (2 * widthCm) + (2 * heightCm);
      if (lengthCm > 121 || girth > 266) {
        sfiSurcharge = 400000;[cite: 5]
      }
    }

    if (targetCountry === 'uk' && lengthCm > 175) {
      sfiSurcharge = 1150000;[cite: 5]
    }
    if (targetCountry === 'europe') {
      const girth = lengthCm + (2 * widthCm) + (2 * heightCm);
      if (girth > 300) {
        sfiSurcharge = 500000;[cite: 5]
      }
    }

    if (activeSurchargeConfig.isAsia && targetCountry !== 'singapore' && !targetCountry.startsWith('malaysia')) {
      if (lengthCm > 120 || finalWeight > 20) {
        sfiSurcharge = 550000;[cite: 5]
      }
    }

    if (remoteAreaCheck.checked) {
      sfiSurcharge += 450000;[cite: 5]
    }
  }

  if (document.getElementById('service').value === 'express') {
    freight *= 1.20; 
  }

  const grandTotal = freight + sfiSurcharge;

  document.getElementById('freightVal').textContent = formatIDR(freight);
  document.getElementById('truckVal').textContent = formatIDR(sfiSurcharge);
  document.getElementById('totalVal').textContent = formatIDR(grandTotal);
}

estimateBtn.addEventListener('click', calculateEstimate);

resetBtn.addEventListener('click', () => {
  document.getElementById('weight').value = '5';
  document.getElementById('length').value = '';
  document.getElementById('width').value = '';
  document.getElementById('height').value = '';
  toDestination.value = 'usa';
  document.getElementById('service').value = 'standard';
  europeZoneWrap.style.display = 'none';
  remoteAreaWrap.style.display = 'none';
  remoteAreaCheck.checked = false;
  document.getElementById('chargeableWeightVal').textContent = '5 kg';
  
  ['freightVal', 'truckVal', 'totalVal'].forEach(id => {
    document.getElementById(id).textContent = '-';
  });
  
  renderCountryNotes('usa');
  updateRouteChip();
});

// Run on init
renderCountryNotes('usa');
updateRouteChip();
