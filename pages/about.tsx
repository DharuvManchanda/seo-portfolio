import { LinkPreview } from "@/components/ui/link-preview";

export default function Home() {
  return (
    <main className="flex flex-col max-h-screen bg-black items-center">
      <div className="flex justify-center items-center h-[40rem] flex-col px-4">
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          <LinkPreview
            url="/projects"
            isStatic={true}
            imageSrc="/anjali.jpg"
            className="font-bold"
          >
            Anjali Bhutani{" "}
          </LinkPreview>{" "}
          specializes in editorial, fashion, and bridal makeup, including
          airbrush techniques.{" "}
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
          Discover Anjali's stunning makeup transformations on{" "}
          <LinkPreview
            url="https://www.instagram.com/hairandmakeupbyanjali/"
            isStatic={true}
            imageSrc="/images/Hero/Hero1.jpg"
            className="font-bold"
          >
            Instagram{" "}
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview
            url="https://www.linkedin.com/in/anjali-bhutani-902049350/"
            isStatic={true}
            imageSrc="/images/Hero/Hero6.jpg"
            className="font-bold"
          >
            LinkedIn.{" "}
          </LinkPreview>{" "}
           Connect today!
        </p>
      </div>
    </main>
  );
}
