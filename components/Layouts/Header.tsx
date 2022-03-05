import Link from "next/link";

const menus = [
  { menuName: "About Us", link: "/" },
  { menuName: "Our Work", link: "/work" },
  { menuName: "Contact Us", link: "/contact" },
];

export default function Header() {
  return (
    <>
      <div className="Header min-w-xs mx-auto min-h-10vh shadow-md z-50">
        <nav className="navbar px-5 mx-auto min-h-10vh max-w-menu flex flex-row items-center justify-between">
          <div className="flex-1">
            <Link href="/">
              <div className="flex items-center justify-start gap-2">
                <img
                  src="https://github.com/mandyHellz/candyfish-studios-portfolio/blob/master/public/candyfish-logo.png?raw=true"
                  alt="logo"
                  className="w-20 flex-shrink-0 cursor-pointer"
                />
                <p className="font-Lobster text-2xl font-medium text-gray-100 cursor-pointer">
                  Candyfish Studios.
                </p>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <ul className="links flex items-center justify-end gap-20 relative cursor-pointer">
              {menus.map((menu) => (
                <li key={menu.link}>
                  <Link href={menu.link}>
                    <p>{menu.menuName}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
