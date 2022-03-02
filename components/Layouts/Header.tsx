import Link from "next/link";

const menus = [
  { menuName: "About Us", link: "/" },
  { menuName: "Our Work", link: "/our-work" },
  { menuName: "Contact Us", link: "/contact-us" },
];

export default function Header() {
  return (
    <>
      <div className="max-w-page min-w-xs mx-auto min-h-10vh shadow-md z-50">
        <nav className="navbar px-5 mx-auto min-h-10vh max-w-menu flex flex-row items-center justify-between">
          <div className="flex-1">
            <div className="logo flex items-center justify-start gap-2">
              <img
                src="./candyfish-logo.png"
                alt="logo"
                className="w-20 flex-shrink-0"
              />
              <Link href="/">
                <p className="font-Lobster text-2xl font-medium text-gray-100">
                  Candyfish Studios.
                </p>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <ul className="links flex items-center justify-end gap-20 relative">
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
