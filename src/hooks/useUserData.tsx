import { useEffect, useState } from 'react'

import UserData from '@type/UserData'

import { getUserData } from '@helpers/firebase.helper'

export default function useUserData() {
	const [data, setData] = useState<UserData | undefined>(undefined)

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			const userData = await getUserData()

			setData(userData)
			setLoading(false)
		}

		fetchData()
	}, [])

	return { data, loading }
}
