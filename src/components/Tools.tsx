import { LOCAL_ICONS_PATH, SECTION_TITLES } from '@constants'

import InfoSection from '@layouts/InfoSection'
import Avatar from '@elements/Avatar'
import Grid from '@elements/Grid'

import getIconPath from '@helpers/getIconPath'

interface ToolsProps {
	tools: string[]
}

const Tools = ({ tools }: ToolsProps) => {
	const getToolIconPath = (tool: string) => getIconPath(LOCAL_ICONS_PATH.TOOLS, tool)

	return (
		<InfoSection title={SECTION_TITLES.TOOLS} rightSide>
			<Grid container rowSpacing={3} columnSpacing={1}>
				{tools.map((tool) => (
					<Grid key={tool} item xs={3} display='flex' justifyContent='center'>
						<Avatar sx={{ width: 50, height: 50 }} src={getToolIconPath(tool)} />
					</Grid>
				))}
			</Grid>
		</InfoSection>
	)
}

export default Tools
