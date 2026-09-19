# EnderBridge S3

### ESP32-S3 Wi-Fi Bridge for Creality Ender 3 V3 SE

**EnderBridge S3** là dự án phát triển bộ kết nối Wi-Fi dành cho máy in 3D Creality Ender 3 V3 SE, sử dụng vi điều khiển ESP32-S3.

Mục tiêu của dự án là xây dựng một giải pháp kết nối máy in 3D với mạng Wi-Fi nội bộ, giúp người dùng có thể quản lý và tương tác với máy in thông qua giao diện web mà không cần phụ thuộc vào các dịch vụ đám mây.

Dự án hướng đến sự đơn giản, dễ sử dụng và khả năng tự lắp đặt, phù hợp với những người yêu thích công nghệ, điện tử và máy in 3D.

> **Thông tin phát triển:** Đây là dự án cá nhân do Minh Trí lên ý tưởng, định hướng chức năng và thực hiện với sự hỗ trợ viết mã từ trí tuệ nhân tạo (AI). AI được sử dụng để hỗ trợ xây dựng mã nguồn, phát triển giao diện, nghiên cứu giải pháp kỹ thuật và xử lý lỗi trong quá trình thực hiện dự án.

---

## 1. Mục tiêu dự án

EnderBridge S3 được xây dựng với các mục tiêu:

* Kết nối ESP32-S3 với máy in Creality Ender 3 V3 SE thông qua cổng USB.
* Xây dựng giao diện web để tương tác với thiết bị qua mạng Wi-Fi nội bộ.
* Hỗ trợ cài đặt firmware trực tiếp từ trình duyệt web.
* Giảm bớt các bước cài đặt phức tạp đối với người dùng phổ thông.
* Phát triển giải pháp có thể tùy chỉnh và mở rộng trong tương lai.

**Lưu ý:** Các chức năng đang trong quá trình phát triển và kiểm thử. Khả năng tương thích thực tế phụ thuộc vào phiên bản firmware, phần cứng và cấu hình kết nối.

---

## 2. Phần cứng sử dụng

| Thiết bị         | Mô tả                            |
| ---------------- | -------------------------------- |
| Vi điều khiển    | ESP32-S3 N16R8                   |
| Máy in 3D        | Creality Ender 3 V3 SE           |
| Kết nối máy in   | USB                              |
| Kết nối mạng     | Wi-Fi 2.4 GHz                    |
| Cáp nạp firmware | USB Type-C hỗ trợ truyền dữ liệu |

Đảm bảo bo mạch ESP32-S3 được cấp nguồn ổn định và sử dụng đúng cổng USB theo thiết kế phần cứng.

---

## 3. Cài đặt firmware

EnderBridge S3 cung cấp giao diện cài đặt firmware trực tiếp từ trình duyệt thông qua Web Serial.

Người dùng không cần cài đặt Arduino IDE để thực hiện quá trình nạp firmware qua website.

### Bước 1: Chuẩn bị

Trước khi cài đặt:

1. Chuẩn bị bo mạch ESP32-S3 tương thích.
2. Sử dụng cáp USB có khả năng truyền dữ liệu.
3. Ngắt kết nối USB Host giữa ESP32-S3 và máy in 3D.
4. Kết nối ESP32-S3 với máy tính bằng cáp USB.
5. Sử dụng trình duyệt Google Chrome hoặc Microsoft Edge phiên bản có hỗ trợ Web Serial.

### Bước 2: Truy cập website cài đặt

Mở website:

https://meantries.github.io/ender-3v3SE-VS-ESP-installer/

Trên giao diện EnderBridge S3, chọn:

**Kết nối và cài firmware**

Khi trình duyệt hiển thị danh sách cổng USB hoặc COM, hãy chọn đúng cổng kết nối với ESP32-S3.

Xác nhận để bắt đầu quá trình nạp firmware.

Không rút cáp USB hoặc ngắt nguồn khi thiết bị đang được nạp firmware.

### Bước 3: Hoàn tất

Chờ website thông báo quá trình cài đặt hoàn tất.

Sau đó:

1. Ngắt kết nối ESP32-S3 khỏi máy tính.
2. Cắm lại cáp USB để khởi động thiết bị.
3. Kiểm tra trạng thái hoạt động của ESP32-S3.
4. Tiếp tục thực hiện các bước cấu hình Wi-Fi nếu firmware đã khởi động thành công.

**Quan trọng:** Thông báo nạp thành công chỉ xác nhận quá trình ghi firmware đã hoàn tất. Thiết bị vẫn cần được kiểm tra để xác nhận chương trình khởi động và hoạt động đúng.

---

## 4. Kết nối Wi-Fi

Sau khi cài đặt firmware và khởi động ESP32-S3:

1. Mở phần cài đặt Wi-Fi trên điện thoại hoặc máy tính.
2. Tìm mạng Wi-Fi có tên `EnderBridge-S3`.
3. Kết nối với mạng Wi-Fi của ESP32-S3.
4. Mở trình duyệt và truy cập địa chỉ `http://192.168.4.1`.
5. Chọn mạng Wi-Fi nội bộ và nhập mật khẩu.
6. Lưu cấu hình và chờ ESP32-S3 kết nối với mạng.

Sau khi kết nối thành công, bạn có thể thử truy cập:

http://ender3v3.local

Nếu địa chỉ `.local` không hoạt động, hãy kiểm tra địa chỉ IP được cấp cho ESP32-S3 trong danh sách thiết bị của bộ định tuyến.

**Lưu ý:** Tên mạng Wi-Fi, địa chỉ cấu hình và địa chỉ `.local` nêu trên là các thông số dự kiến theo thiết kế giao diện. Cần xác nhận firmware thực tế hỗ trợ đầy đủ trước khi sử dụng.

---

## 5. Các phiên bản phát hành

Các phiên bản firmware và bộ cài đặt được cung cấp tại:

https://github.com/Meantries/ender-3v3SE-VS-ESP-installer/releases

Người dùng có thể tải các tệp firmware hoặc bộ cài đặt được đính kèm trong từng bản phát hành.

Hãy đọc thông tin phiên bản và kiểm tra khả năng tương thích trước khi cài đặt.

---

## 6. Lưu ý khi sử dụng

* Dự án đang trong quá trình phát triển và kiểm thử.
* Nên thử nghiệm trên bo mạch ESP32-S3 riêng trước khi kết nối với máy in.
* Không kết nối đồng thời nhiều nguồn điện USB khi chưa xác định rõ thiết kế cấp nguồn và khả năng chống cấp nguồn ngược.
* Không ngắt nguồn hoặc tháo cáp trong quá trình nạp firmware.
* Không sử dụng các chức năng điều khiển máy in chưa được kiểm thử khi máy đang thực hiện bản in quan trọng.
* Người sử dụng cần kiểm tra tính tương thích của phần cứng và firmware trước khi lắp đặt.

---

## 7. Về quá trình phát triển và sử dụng AI

EnderBridge S3 là dự án cá nhân được hình thành từ nhu cầu thực tế trong quá trình sử dụng và nghiên cứu máy in 3D Creality Ender 3 V3 SE.

Dự án được Minh Trí lên ý tưởng, đưa ra yêu cầu kỹ thuật và định hướng các chức năng mong muốn.

Trong quá trình phát triển, tôi sử dụng trí tuệ nhân tạo (AI) làm công cụ hỗ trợ:

* Nghiên cứu và đề xuất các giải pháp kỹ thuật.
* Viết và chỉnh sửa mã nguồn cho ESP32-S3.
* Xây dựng giao diện website cài đặt firmware.
* Phân tích lỗi và đề xuất phương án khắc phục.
* Hỗ trợ xây dựng tài liệu hướng dẫn sử dụng.

**Tôi không tự nhận mình đã viết toàn bộ mã nguồn của dự án.** Phần lớn công việc xây dựng mã được thực hiện với sự hỗ trợ của AI, dựa trên các yêu cầu, ý tưởng và định hướng do tôi cung cấp.

Dự án được chia sẻ với mục đích học hỏi, thử nghiệm và trao đổi kinh nghiệm trong cộng đồng yêu thích điện tử và máy in 3D.

Việc sử dụng AI để hỗ trợ phát triển không đồng nghĩa với việc toàn bộ mã nguồn đã được kiểm chứng hoặc không có lỗi. Các phiên bản firmware cần tiếp tục được thử nghiệm và hoàn thiện trước khi sử dụng rộng rãi.

---

## 8. Tác giả và liên hệ

**Dự án:** EnderBridge S3

**Phát triển:** Minh Trí

**GitHub:** [Meantries](https://github.com/Meantries)

**Repository:** [EnderBridge S3 Installer](https://github.com/Meantries/ender-3v3SE-VS-ESP-installer)

**Liên hệ:** 0342603075

---

*EnderBridge S3 – Một dự án cá nhân kết hợp ý tưởng thực tế, nghiên cứu phần cứng và sự hỗ trợ của trí tuệ nhân tạo trong phát triển phần mềm.*
