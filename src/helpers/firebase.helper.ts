import { getDownloadURL, ref } from 'firebase/storage'

import UserData from '@type/UserData'

import { analytics, logEvent,storage } from '@configs/firebase'

const env = import.meta.env

export const getUserData = async (): Promise<UserData | undefined> => {
	const dataRef = ref(storage, env.VITE_USER_DATA_FILE_NAME)

	const imageRef = ref(storage, env.VITE_USER_AVATAR_FILE_NAME)

	const cvRef = ref(storage, env.VITE_CV_FILE_NAME)

	try {
		const userData = await getDownloadURL(dataRef)
			.then((url) => fetch(url))
			.then((response) => response.json())

		const avatar = await getDownloadURL(imageRef)

		const cv = await getDownloadURL(cvRef)

		return { ...userData, avatar, downloadCVLink: cv }
	} catch (error) {
		return undefined
	}
}

export const logButtonClick = (buttonText: string) => {
	logEvent(analytics, 'button_click', {
		'button_text': buttonText,
	})
}