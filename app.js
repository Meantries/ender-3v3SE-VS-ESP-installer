(function () {
  const status = document.getElementById("browserState");
  const secure = window.isSecureContext;
  const serial = "serial" in navigator;

  if (secure && serial) {
    status.textContent = "Sẵn sàng kết nối USB";
    status.className = "browser-state ready";
    return;
  }

  status.textContent = secure
    ? "Hãy dùng Chrome hoặc Edge"
    : "Website cần HTTPS";
  status.className = "browser-state blocked";
})();
