import {useState} from 'react';
import './App.css';
import {Upload} from './components/Upload';
import {Images} from './components/Images';

function App() {
    const [currentFile, setCurrentFile] = useState('')
    return (
        <div className="App">
            <header className="App-header">
                <Upload onSetUploadImages={setCurrentFile}/>
                <Images file={currentFile}/>
            </header>
        </div>
    );
}

export default App;
