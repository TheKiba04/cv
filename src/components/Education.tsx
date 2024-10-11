import { SECTION_TITLES } from '@constants'
import type Institution from '@type/Institution'

import InfoSection from '@layouts/InfoSection'
import Avatar from '@elements/Avatar'
import List from '@elements/List'
import ListItem from '@elements/ListItem'
import ListItemAvatar from '@elements/ListItemAvatar'
import ListItemText from '@elements/ListItemText'
import Typography from '@elements/Typography'

interface EducationProps {
	education: Institution[]
}

const Education = ({ education }: EducationProps) => (
	<InfoSection title={SECTION_TITLES.EDUCATION}>
		<List>
			{education.map(({ universityLogo, university, faculty, degree, years }) => (
				<ListItem
					divider
					key={`${university}-${degree}-${years}`}
					sx={{ display: 'flex', alignItems: 'flex-start' }}
				>
					<ListItemAvatar sx={{ display: 'flex', justifyContent: 'center' }}>
						<Avatar src={universityLogo} sx={{ bgcolor: 'black', width: 60, height: 60 }} />
					</ListItemAvatar>
					<ListItemText sx={{ margin: 0, padding: '0 16px' }}>
						<Typography variant='subtitle1' marginBottom='6px' lineHeight={1}>
							{university}
						</Typography>
						<Typography variant='subtitle2'>{faculty}</Typography>
						<Typography variant='caption'>
							<Typography component='span' color='secondary.contrastText'>
								{degree}
							</Typography>
								&#8226;
							{years}
						</Typography>
					</ListItemText>
				</ListItem>
			))}
		</List>
	</InfoSection>
)

export default Education
