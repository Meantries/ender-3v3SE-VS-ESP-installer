# EnderBridge S3 Web Installer

Website tĩnh dùng ESP Web Tools để nạp firmware nhị phân cho ESP32-S3.

## Nội dung được phép đưa lên hosting

- `index.html`
- `styles.css`
- `app.js`
- `manifest.json`
- `.nojekyll`
- thư mục `firmware/`

Không đưa thư mục `D:\Ender\endertest` hoặc file `.ino` lên hosting.

## Chạy thử trên máy

Web Serial chỉ hoạt động trong secure context. `localhost` được trình duyệt coi là secure context:

```powershell
cd D:\Ender\firmware-installer
python -m http.server 8080
```

Mở `http://localhost:8080` bằng Chrome hoặc Microsoft Edge.

## Đưa lên Internet

Đăng toàn bộ nội dung thư mục này lên một dịch vụ static hosting có HTTPS, ví dụ GitHub Pages, Cloudflare Pages hoặc Netlify. ESP Web Tools yêu cầu HTTPS khi không chạy trên localhost.

## Phát hành phiên bản mới

1. Build firmware bằng đúng ESP32 Arduino Core đã kiểm thử.
2. Thay file trong `firmware/`.
3. Đổi tên file và cập nhật `version`, `path` trong `manifest.json`.
4. Cập nhật phiên bản hiển thị trong `index.html`.
5. Tạo SHA-256 mới và kiểm tra trang trên một bo mạch thử nghiệm trước khi phát hành.

## Lưu ý bảo vệ firmware

Website không phân phối mã nguồn, nhưng file nhị phân vẫn có thể được tải xuống và phân tích ngược. Muốn chống sao chép ở mức sản phẩm cần thiết kế Secure Boot và Flash Encryption riêng; không được bật eFuse thử nghiệm trên thiết bị khách hàng khi chưa có quy trình khóa, ký và khôi phục firmware hoàn chỉnh.
