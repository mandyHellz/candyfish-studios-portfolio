import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-page flex items-center justify-center w-full h-24 border-t font-montserrat font-thin">
      <div className="max-w-menu px-5 mx-auto">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by React and
          <Image
            src="/lovelove.png"
            alt="love Logo"
            className="h-4 w-4 ml-2"
            width={36}
            height={36}
          />
        </a>
      </div>
    </footer>
  );
}
