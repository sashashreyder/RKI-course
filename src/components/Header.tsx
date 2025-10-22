import logo from "/logo.png";

export default function Header() {
  return (
    <header className="relative flex items-center justify-between p-10 shadow-md bg-white">

<h1 className="hidden md:block text-2xl font-bold text-gray-800 z-10">
        Flashcards App
      </h1> 

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img
          src={logo}
          alt="App Logo"
          className="h-45 w-45 object-contain"
        />
      </div>
    </header>
  );
}


