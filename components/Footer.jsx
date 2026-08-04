import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-white.png"
            alt="SJFK FINTECH PRIVATE LIMITED"
            width={250}
            height={90}
            className="h-8 w-auto shrink-0"
          />
          <div>
            <p className="text-white font-display font-semibold text-sm">
              SJFK FINTECH PRIVATE LIMITED
            </p>
            <p className="mt-1">CIN: U68100MH2024PTC433105</p>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} SJFK FINTECH PRIVATE LIMITED.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
