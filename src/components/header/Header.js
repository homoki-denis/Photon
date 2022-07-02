function Header() {
  return (
    <div className="header h-60 min-h-full flex flex-col justify-center items-center">
      <h1 className="text-2xl pb-9">Photon</h1>
      <form>
        <input
          className="bg-transparent border outline-0 p-2 border-indigo-800 w-64"
          type="text"
        />
        <button className="bg-indigo-800 p-2.5 text-white">Search</button>
      </form>
    </div>
  );
}

export default Header;
