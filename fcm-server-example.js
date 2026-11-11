// ตัวอย่างเซิร์ฟเวอร์ส่ง Push เมื่อสถานะพัสดุเปลี่ยน
// npm install firebase-admin
const admin = require('firebase-admin');
admin.initializeApp({ credential: admin.credential.cert(require('./serviceAccountKey.json')) });
async function sendParcelUpdate(fcmToken, trackingNo, carrier, status){
  await admin.messaging().send({ token: fcmToken, notification: { title: 'พัสดุของคุณ '+status, body: 'เลขพัสดุ '+trackingNo+' - '+carrier }, data: { trackingNo, status } });
}
module.exports = { sendParcelUpdate };
