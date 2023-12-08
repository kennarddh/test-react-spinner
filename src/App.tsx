import { FC, useState } from 'react'

import {
	Spinner,
	Spinner2Layers,
	Spinner2LayersFull,
	Spinner2LayersHalfInner,
	Spinner2LayersSameDirection,
	SpinnerChase,
	SpinnerChase2Colors,
} from '@kennarddh/react-spinner'
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
			<Spinner2Layers
				backgroundColor={BackgroundColor}
				color={Color}
				fullRotationTime={1}
				height={100}
				outlineWidth={10}
				width={100}
				fullRotationTimeChase={1.5}
				fullRotationTime2={2}
				backgroundColorChase='#fff000'
			/>
			<Spinner2LayersFull
				backgroundColor={BackgroundColor}
				color={Color}
				fullRotationTime={1}
				height={100}
				outlineWidth={10}
				width={100}
				innerWidth={80}
				innerHeight={80}
				innerOutlineWidth={5}
				innerBackgroundColor='#fff000'
			/>
			<Spinner2LayersHalfInner
				backgroundColor={BackgroundColor}
				color={Color}
				fullRotationTime={1}
				height={100}
				outlineWidth={10}
				width={100}
				innerWidth={80}
				innerHeight={80}
				innerOutlineWidth={5}
				innerBackgroundColor='#fff000'
			/>
			<Spinner2LayersSameDirection
				backgroundColor={BackgroundColor}
				color={Color}
				fullRotationTime={1}
				height={100}
				outlineWidth={10}
				width={100}
				fullRotationTimeChase={0.8}
				backgroundColorChase='#fff000'
			/>
			<SpinnerChase
				backgroundColor={BackgroundColor}
				color={Color}
				fullRotationTime={1}
				height={100}
				outlineWidth={10}
				width={100}
				fullRotationTimeChase={0.8}
			/>
			<SpinnerChase2Colors
				backgroundColor={BackgroundColor}
				color={Color}
				fullRotationTime={1}
				height={100}
				outlineWidth={10}
				width={100}
				fullRotationTimeChase={0.8}
				backgroundColorChase='#fff000'
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
