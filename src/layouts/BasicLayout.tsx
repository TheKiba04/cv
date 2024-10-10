import { ReactNode, useContext } from 'react'

import Footer from '@components/Footer'
import Header from '@components/Header'
import Container from '@elements/Container'

import DataContext from '@context/DataContext'

const BasicLayout = ({ children }: { children: ReactNode }) => {
	const userData = useContext(DataContext)

	if (!userData) return null

	const { name, surname, location } = userData

	return (
		<Container
			maxWidth='lg'
			sx={{
				backgroundImage: `url(${userData?.avatar})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'bottom',
			}}
		>
			<Header user={userData} />
			{children}
			<Footer name={name} surname={surname} location={location} />
		</Container>
	)
}

export default BasicLayout
