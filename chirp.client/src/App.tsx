import LoginLogoutButton from "./authentication/LoginLogout";

function App() {
  return (
    <div className="App dark:bg-neutral-950 bg-neutral-100">
      <header className="App-header">
        <p className="text-green_accent-500">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <li className="block py-2 px-3 text-white rounded bg-transparent ">
        <LoginLogoutButton />
      </li>
    </div>
  );
}

export default App;
