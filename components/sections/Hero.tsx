import Image from 'next/image';
export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="block sm:hidden">
        <Image
          src="/img/bannerjys.png"
          alt="Japan Youth Summit"
          width={1920}
          height={600}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
      <div
        className="relative hidden w-full bg-cover bg-no-repeat sm:block sm:min-h-[60vh] md:min-h-[70vh] sm:bg-center"
        style={{ backgroundImage: "url('/img/bannerjys.png')" }}
      >
        <div className="absolute inset-0 bg-black/0" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 py-24 lg:px-8"></div>
      </div>
    </section>
  );
}
