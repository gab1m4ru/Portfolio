const Footer = () => {
  return (
    <footer className="flex justify-between place-items-end border-t-1 border-stroke">
      <nav className="flex">
        <h3 className="text-md text-md py-4 px-6">find me in:</h3>

        <ul className="flex">
          <li className="border-1 border-stroke p-4">**</li>
          <li className="border-1 border-stroke p-4">**</li>
        </ul>
      </nav>

      <button className="border-l-1 border-b-1 border-stroke py-4 px-6">
        @username
      </button>
    </footer>
  );
};

export default Footer;
