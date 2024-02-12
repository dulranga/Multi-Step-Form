import "./App.css";
import GetInfo from "./pages/GetInfo";

function App() {
  return (
    <main className="min-h-screen bg-neutral-300 grid place-items-center p-5">
      <GetInfo />

      <div className="font-body">
        Challenge by&nbsp;
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor. &nbsp;
        </a>
        Coded by &nbsp;
        <a
          href="https://github.com/dulranga"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold"
        >
          Dulranga Dhawanitha
        </a>
      </div>
    </main>
  );
}

export default App;
