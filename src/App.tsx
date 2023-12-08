import { FC, useState } from 'react'

import Spinner from '@kennarddh/react-spinner'
import '@kennarddh/react-spinner/build/style.css'

const GenerateRandomHexColor = () =>
	`#${Math.floor(Math.random() * 16777215).toString(16)}`

const App: FC = () => {
	const [Color, SetColor] = useState<string>(GenerateRandomHexColor)
	const [BackgroundColor, SetBackgroundColor] = useState<string>(
		GenerateRandomHexColor,
	)

	return (
		<div>
			<Spinner
				backgroundColor={BackgroundColor}
				color={Color}
				fullRotationTime={1}
				height={100}
				outlineWidth={10}
				width={100}
			/>
			<button onClick={() => SetColor(GenerateRandomHexColor())}>
				Change Color
			</button>
			<button
				onClick={() => SetBackgroundColor(GenerateRandomHexColor())}
			>
				Change Background Color
			</button>
		</div>
	)
}

export default App
