import "./App.css";
import desktop from "./assets/images/bg-sidebar-desktop.svg";
import mobile from "./assets/images/bg-sidebar-mobile.svg";

function App() {
  return (
    <main className="bg-red-300">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <nav>
        <picture>
          <source media="(max-width: 839px)" srcSet={mobile} />
          <source media="(min-width: 840px)" srcSet={desktop} />
          <img src={desktop} alt={"banner with blobs"} />
        </picture>
      </nav>

      <article>test</article>
    </main>
  );
}

export default App;
