/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: 'com.trackthai.checkparcel',
  appName: 'เช็คพัสดุ - TrackThai',
  webDir: 'www',
  backgroundColor: '#FFFFFF',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FF6B00'
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert']
    }
  }
};

module.exports = config;
