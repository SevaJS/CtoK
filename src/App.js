import Calulator from "./calulator"
import m from './App.module.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className={m.app}>
                    <Calulator/>
                </div>

            </header>
        </div>
    );
}

export default App;
