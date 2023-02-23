import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Store from './components/Store';
import Nav from './components/Nav';

function App() {
	return (
		<>
			<Nav />
			<StyledMain>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/store' element={<Store />} />
				</Routes>
			</StyledMain>
			<HomeNav></HomeNav>
		</>
	);
}

export default App;

const StyledMain = styled.main`
	min-height: 100vh;
	width: 100vw;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HomeNav = styled.div``;
