import React, { useEffect } from 'react'

function App() {
	useEffect(() => {
		window.location.pathname.startsWith('/')
		console.log(window.location.pathname)
		for (let route of routes) {
			console.log(route)
		}
	}, [])

	return <div className="App"></div>
}

export default App
