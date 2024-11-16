import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { LinkPreview } from "@/components/ui/link-preview";

export default function Home() {
 
  return (
    <main className="flex flex-col max-h-screen bg-black items-center"
    >
       <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="/about" isStatic={true} imageSrc="/anjali.jpg" className="font-bold">
        Anjali Bhutani        </LinkPreview>{" "}
        specializes in editorial, fashion, and bridal makeup, including airbrush techniques      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
      Discover Anjali's stunning makeup transformations on{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
Instagram        </LinkPreview>{" "}
and <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
LinkedIn        </LinkPreview>{" "}. Connect today!
      </p>
    </div>
     </main>
  );
}
