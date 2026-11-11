# เช็คพัสดุ - TrackThai

## วิธีใช้
1. Push โค้ดนี้ขึ้น GitHub (branch main)
2. GitHub Actions จะสร้าง APK ให้อัตโนมัติ ไปโหลดที่ Actions > Artifacts
3. ใส่ไฟล์ google-services.json จาก Firebase ใน android/app/ เพื่อให้ FCM ทำงานจริง

## ข้อมูลเก็บในเครื่อง (localStorage)
- trackthai_history
- trackthai_membership
- trackthai_notification_settings
- trackthai_tracking_list

## FCM
- ติดตั้ง @capacitor/push-notifications แล้วดูโค้ดใน www/index.html และในแอปหน้า Premium > ตั้งค่า FCM
- เซิร์ฟเวอร์ส่งผ่าน Firebase Admin SDK ไปยัง FCM Token เมื่อสถานะพัสดุเปลี่ยน

## ไอคอน
- assets/icon-512.png ใช้เป็นไอคอนหลัก Play Store 512x512
- assets/icon-*.png ขนาดอื่นๆ
