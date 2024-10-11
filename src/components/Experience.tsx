import { SECTION_TITLES } from '@constants'
import type Work from '@type/Work'

import InfoSection from '@layouts/InfoSection'
import Avatar from '@elements/Avatar'
import List from '@elements/List'
import ListItem from '@elements/ListItem'
import ListItemAvatar from '@elements/ListItemAvatar'
import ListItemText from '@elements/ListItemText'
import Typography from '@elements/Typography'

interface ExperienceProps {
	experience: Work[]
}

const Experience = ({ experience }: ExperienceProps) => (
	<InfoSection title={SECTION_TITLES.EXPERIENCE}>
		<List>
			{experience.map(({ company, companyLogo, position, years }) => (
				<ListItem
					key={`${company}-${position}-${years}`}
					divider
					sx={{ display: 'flex', alignItems: 'flex-start' }}
				>
					<ListItemAvatar
						sx={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Avatar sx={{ width: 60, height: 60, bgcolor: 'black' }} src={companyLogo} />
					</ListItemAvatar>
					<ListItemText sx={{ margin: 0, padding: '0 16px' }}>
						<Typography variant='subtitle1' mb='6px' lineHeight={1}>
							{company}
						</Typography>
						<Typography variant='subtitle2'>{position}</Typography>
						<Typography variant='caption'>{years}</Typography>
					</ListItemText>
				</ListItem>
			))}
		</List>
	</InfoSection>
)

export default Experience
