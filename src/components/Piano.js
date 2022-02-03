import { useRef, useEffect } from 'react';

export const Piano = () => {
	const pianoElem = useRef(null);

	useEffect(() => {
		pianoElem.current.innerHTML = 'Hallo2'
	})
	
	return(
		<div>
			<h1>Hallo</h1>
			<div ref={pianoElem}></div>
		</div>
	)
}