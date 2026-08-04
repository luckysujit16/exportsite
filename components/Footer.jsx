import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <span className="bg-white rounded-md px-2.5 py-1.5 flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="SJFK FINTECH PRIVATE LIMITED"
              width={250}
              height={90}
              className="h-6 w-auto"
            />
          </span>
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
