// Small interaction polish
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 12px 35px rgba(244,166,64,0.8)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "0 10px 30px rgba(244,166,64,0.6)";
  });
});
