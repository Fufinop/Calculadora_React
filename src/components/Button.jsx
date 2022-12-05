export default function Boton({ clickHandle, name }) {
	const handleClick = () => clickHandle(name);

	return (
		<div>
			<button className="" onClick={handleClick}>
				{name}
			</button>
		</div>
	);
}

