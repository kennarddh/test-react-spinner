import { FC } from 'react'

import Spinner from '@kennarddh/react-spinner'
import '@kennarddh/react-spinner/build/style.css'

const App: FC = () => {
	return (
		<div>
			<Spinner
				backgroundColor='blue'
				color='red'
				fullRotationTime={1}
				height={100}
				outlineWidth={10}
				width={100}
			/>
		</div>
	)
}

export default App
