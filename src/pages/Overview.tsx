import { useContext } from 'react'

import BasicLayout from '@layouts/BasicLayout'
import About from '@components/About'
import Education from '@components/Education'
import Experience from '@components/Experience'
import Tools from '@components/Tools'
import Grid from '@elements/Grid'

import DataContext from '@context/DataContext'

export const Overview = () => {
	const userData = useContext(DataContext)

	if (!userData) return null

	const { about, experience, education, skills } = userData

	return (
		<BasicLayout>
			<Grid container gap={2} justifyContent={{ xs: 'center', sm: 'space-between' }}>
				<Grid item xs={12} sm={5}>
					<Education education={education} />
					<Experience experience={experience} />
				</Grid>
				<Grid item xs={12} sm={4.5}>
					<About about={about} />
					<Tools tools={skills} />
				</Grid>
			</Grid>
		</BasicLayout>
	)
}

export default Overview
