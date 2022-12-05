import '../styles/Display.css';

export default function Display({ value }) {
	return (
		<div className="component-display">
			<div className="font-bold">{value}</div>
		</div>
	);
}

