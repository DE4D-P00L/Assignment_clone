import Gallery from "./components/Gallery";
import About from "./components/About";

function App() {
  return (
    <main className="text-white bg-gradient-to-b from-[#373E44] to-[#191B1F] to-[hsla(0, 0%, 38%, 0.82)] min-h-screen grid grid-cols-1 lg:grid-cols-2 place-content-center p-10 gap-10">
      <div className="bg-[#616161]/[0.82] border-[1px] border-[#96BEE7] rounded-[27px] hidden lg:block"></div>
      <div className="">
        <div className="flex flex-col gap-5">
          <About />
          <div className="w-[80%] h-[5px] shadow-[2px_2px_4px_1px_rgba(0,0,0,0.43)] rounded-full bg-[#33393d] mx-auto"></div>
          <Gallery />
        </div>
        <div className="w-[80%] h-[5px] shadow-[2px_2px_4px_1px_rgba(0,0,0,0.43)] rounded-full bg-[#33393d] mx-auto mt-5 -mb-5"></div>
      </div>
    </main>
  );
}

export default App;
