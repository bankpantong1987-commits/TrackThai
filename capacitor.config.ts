import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = { appId: 'com.trackthai.checkparcel', appName: 'เช็คพัสดุ - TrackThai', webDir: 'www', backgroundColor: '#FFFFFF', plugins: { SplashScreen: { launchShowDuration: 2000, backgroundColor: '#FF6B00' }, PushNotifications: { presentationOptions: ['badge','sound','alert'] } } };
export default config;
