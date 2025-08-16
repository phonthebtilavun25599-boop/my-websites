document.getElementById('domainForm').addEventListener('submit', function(e){
  e.preventDefault();
  const d = document.getElementById('domain').value.trim();
  const out = document.getElementById('domainResult');
  if(!d) { out.textContent = 'กรุณากรอกโดเมน'; return; }
  out.textContent = `โดเมนที่ใส่: ${d}`;
});
