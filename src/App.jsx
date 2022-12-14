import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';
import app_bar from "../components/app_bar.js";


// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <div className="App">
//         <div>return (
//             <React.Fragment>
//                 <AppBar position="fixed">
//                     <Toolbar>{app_bar}</Toolbar>
//                 </AppBar>
//                 <Toolbar />
//             </React.Fragment>
//         </div>
//     </div>
//   )
// }
//
// export default App

function App() {
    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Toolbar>{/* content */}</Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    );
}
