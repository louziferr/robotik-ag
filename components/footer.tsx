import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-secondary">
      <div className="bg-black flex justify-between items-center px-5 py-2.5 max-h-[90px]">
        <div>
          <h2 className="text-white font-aldrich text-[10px]">Robotik AG</h2>
        </div>

        <nav className="flex items-center gap-1">
          <Link
            href={"/kontakt"}
            className="text-white no-underline text-base px-2.5 py-1.25 hover:cursor-pointer"
          >
            Kontakt
          </Link>

          <Link
            className="text-white no-underline text-base px-2.5 py-1.25 hover:cursor-pointer"
            href={`/impressum`}
          >
            Impressum
          </Link>
        </nav>
      </div>
    </footer>
  );
}
