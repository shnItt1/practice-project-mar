import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className=" py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-full text-center mb-8">
            Prepared to turn your ideas into reality? I'm here to help
          </h2>
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
