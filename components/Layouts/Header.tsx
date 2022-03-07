import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const menus = [
  { menuName: "About Us", link: "/" },
  { menuName: "Our Work", link: "/work" },
  { menuName: "Contact Us", link: "/contact" },
];

export default function Header() {
  const router = useRouter();
  const url = router.asPath;
  console.log(url);

  return (
    <>
      <div className="Header shadow-md z-30">
        <nav className="navbar px-5 py-4 lg:py-2 mx-auto min-h-10vh max-w-menu flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1">
            <Link href="/">
              <div className="flex items-center lg:justify-start gap-2">
                <img
                  src="./photo_logo.png"
                  alt="logo"
                  className="w-40 flex-shrink-0 cursor-pointer"
                />
                {/* <p className="font-Lobster text-2xl font-medium tracking-wider text-gray-100 cursor-pointer">
                  Candyfish Studios.
                </p> */}
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <ul className="links flex items-center text-center pt-8 pb-4 lg:pt-0 lg:pb-0 lg:justify-end gap-20 relative cursor-pointer">
              {menus.map((menu) => (
                <li
                  key={menu.link}
                  className="flex flex-col items-center gap-1"
                >
                  <Link href={menu.link}>
                    <p>{menu.menuName}</p>
                  </Link>
                  <motion.div
                    transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: url === menu.link ? "100%" : "0%" }}
                    className="underline-header"
                  ></motion.div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
