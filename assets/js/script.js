// ===== Mouse Glow ON Left Panel =====
(function () {
  const panel = document.getElementById("formPanel");
  const glow = document.getElementById("mouseGlow");

  panel.addEventListener("mousemove", function (e) {
    const rect = panel.getBoundingClientRect();
    glow.style.left = e.clientX - rect.left + "px";
    glow.style.top = e.clientY - rect.top + "px";
    glow.style.opacity = "1";
  });

  panel.addEventListener("mouseleave", function () {
    glow.style.opacity = "0";
  });
})();
