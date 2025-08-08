import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <Image
        src="/assets/icons/logo.svg"
        width={240}
        height={64}
        alt="FinTrack"
      />
      <p className="text-lg mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-6 text-light-green-300 underline">
        Go back home
      </Link>
    </div>
  );
}
