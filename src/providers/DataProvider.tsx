import { ReactNode } from 'react'

import Loader from '@pages/Loader'

import useUserData from '@hooks/useUserData'
import DataContext from '@context/DataContext'

const DataProvider = ({ children }: { children: ReactNode }) => {
	const { data, loading } = useUserData()

	return <DataContext.Provider value={data}>{loading ? <Loader /> : children}</DataContext.Provider>
}

export default DataProvider
