import ReactDom from 'react-dom';
// import Parent from './props/Parent';
// import { GuestList } from './state/GuestList';
import { UserSearch } from './state/UserSearch';

export default function App() {
	return (
		<>
			<UserSearch />
		</>
	);
}

ReactDom.render(<App />, document.getElementById('root'));
