import { Header } from "./components/Header";
import { Timeline } from "./components/Timeline/Timeline";

function App() {
	return (
		<div>
			<Header />
			<div className="p-4">
				<Timeline />
			</div>
		</div>
	);
}

export default App;
