import { createContext } from 'react'

import type UserData from '@type/UserData'

const DataContext = createContext<UserData | undefined>(undefined)

export default DataContext