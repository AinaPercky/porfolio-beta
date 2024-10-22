import Header from './component/Header';
import { Outlet } from 'react-router-dom';

function App() {
	console.log;
	return (
		<>
			<Header></Header>
			<section>
				<Outlet />
			</section>
		</>
	);
}

export default App;
