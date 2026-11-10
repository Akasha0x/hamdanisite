const form = document.getElementById("calc");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const L = +len.value, W = +wid.value, H = +hei.value;
    const area = L * W, vol = area * H;
    const m = {
      cement: Math.ceil(vol * 0.2),
      sand: Math.ceil(vol * 1.5),
      agg: Math.ceil(vol * 2),
      bricks: Math.ceil(area * 50),
      tiles: Math.ceil(area * 10),
      roof: Math.ceil(area * 10.764),
      exc: Math.ceil(vol * 35.315),
      ply: Math.ceil(area / 4),
      steel: (vol * 0.1).toFixed(2)
    };
    const labour = Math.ceil(area * lab.value);
    const material = Math.ceil(area * mat.value);
    const f = n => Number(n).toLocaleString();
    out.innerHTML = `<table>
      <tr><th>Item</th><th>Quantity</th></tr>
      <tr><td>Area</td><td>${area.toFixed(2)} m²</td></tr>
      <tr><td>Volume</td><td>${vol.toFixed(2)} m³</td></tr>
      <tr><td>Cement</td><td>${m.cement} bags</td></tr>
      <tr><td>Sand</td><td>${m.sand} cft</td></tr>
      <tr><td>Aggregate</td><td>${m.agg} cft</td></tr>
      <tr><td>Bricks</td><td>${f(m.bricks)}</td></tr>
      <tr><td>Tiles</td><td>${f(m.tiles)}</td></tr>
      <tr><td>Roofing</td><td>${f(m.roof)} sq ft</td></tr>
      <tr><td>Excavation</td><td>${f(m.exc)} cft</td></tr>
      <tr><td>Plywood</td><td>${m.ply} sheets</td></tr>
      <tr><td>Steel</td><td>${m.steel} tons</td></tr>
      <tr><td>Labour cost</td><td>PKR ${f(labour)}</td></tr>
      <tr><td>Material cost</td><td>PKR ${f(material)}</td></tr>
      <tr class="total"><td>Total</td><td>PKR ${f(labour + material)}</td></tr></table>`;
  });
}
