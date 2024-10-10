import { SECTION_TITLES } from '@constants'

import InfoSection from '@layouts/InfoSection'
import Typography from '@elements/Typography'

interface AboutProps {
	about: string
}

const About = ({ about }: AboutProps) => {
	return (
		<InfoSection title={SECTION_TITLES.ABOUT} rightSide>
			<Typography variant='body1' whiteSpace='pre-line'>
				{about}
			</Typography>
		</InfoSection>
	)
}

export default About
