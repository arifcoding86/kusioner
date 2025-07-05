
// SIMPAN DATA FORM
const form = document.getElementById('kuisionerForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const existing = JSON.parse(localStorage.getItem("kuisionerData") || "[]");
    existing.push(data);
    localStorage.setItem("kuisionerData", JSON.stringify(existing));
    alert("Terima kasih! Data berhasil dikirim.");
    form.reset();
  });
}

// LOGIN ADMIN & TAMPIL DATA
function loginAdmin() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  if (u === "admin" && p === "admin123") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dataBox").style.display = "block";
    const dataList = document.getElementById("dataList");
    const data = JSON.parse(localStorage.getItem("kuisionerData") || "[]");
    dataList.innerHTML = data.map((d, i) => `
      <div style="border-bottom:1px solid #ccc; padding:10px 0;">
        <strong>Responden ${i+1}</strong><br>
        Usia: ${d.usia} | Gender: ${d.gender} | Domisili: ${d.domisili}<br>
        Pernah ke Banda Neira: ${d.pernah} | Dengar Kutipan: ${d.dengar}<br>
        Menarik: ${d.menarik} | Penasaran: ${d.penasaran} | Motivasi: ${d.motivasi}<br>
        Makna: ${d.makna}<br>
        Niat: ${d.niat} | Faktor: ${d.faktor} | Efektif: ${d.efektif}<br>
        Saran: ${d.saran}
      </div>
    `).join("");
  } else {
    alert("Login gagal");
  }
}

function logoutAdmin() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("dataBox").style.display = "none";
}
