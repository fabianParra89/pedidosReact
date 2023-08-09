import logo from './logo.svg';
import NavBar from "./components/nav-bar/nav-bar"
import ItemListContainer from './components/itemListContainer/itemListContainer';
import './App.css';

function appComponents() {
  return (
    <>
      <NavBar />
      <ItemListContainer title='GRAN INAUGURACIÓN' subTitle='Proximamente' greetings='Ven y acompañanos en nuestra gran inauguracion, disfruta de nuestras excelentes comidas y una muy buena atención !!!' />
    </>
  )


}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default appComponents;
