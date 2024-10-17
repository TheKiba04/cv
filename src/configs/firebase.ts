import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'

const env = import.meta.env

const firebaseConfig = {
	apiKey: env.VITE_API_KEY,
	authDomain: env.VITE_AUTH_DOMAIN,
	projectId: env.VITE_PROJECT_ID,
	storageBucket: env.VITE_STORAGE_BUCKET,
	messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
	appId: env.VITE_APP_ID,
	measurementId: env.VITE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)
const storage = getStorage(app)

logEvent(analytics, 'page_view', {
	page_path: window.location.pathname,
	page_title: document.title,
})

export { storage, analytics, logEvent }
