"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const ProjectCarousel = ({ images }: { images: string[] }) => {
    return (
        <Carousel
            className="w-full mt-4"
            plugins={[
                Autoplay({
                    delay: 5000, // 5 sec
                    stopOnInteraction: true,
                }),
            ]}
        >
            <CarouselContent>
                {images.map((image, imageId) => (
                    <CarouselItem key={imageId}>
                        <div className="relative w-full aspect-video">
                            <Image src={image} alt={`Screenshot ${imageId}`} fill className="rounded-lg object-cover" sizes="(max-width: 768px) 100vw, 1000px" priority={imageId === 0} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default ProjectCarousel;
