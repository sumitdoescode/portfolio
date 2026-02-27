import React from "react";
import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const projectImages = [
    {
        id: 1,
        imageSrc: "/true-feedback/1.png",
    },
    {
        id: 2,
        imageSrc: "/true-feedback/3.png",
    },
    {
        id: 3,
        imageSrc: "/true-feedback/3.png",
    },
    {
        id: 4,
        imageSrc: "/true-feedback/4.png",
    },
    {
        id: 5,
        imageSrc: "/true-feedback/5.png",
    },
];

const page = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;

    console.log(id);

    return (
        <section className="py-20">
            <Container>
                <Carousel className="w-full">
                    <CarouselContent>
                        {projectImages.map(({ id: imageId, imageSrc }) => (
                            <CarouselItem key={imageId}>
                                <Image src={imageSrc} alt={`True Feedback Screenshot ${imageId}`} width={1000} height={1000} className="rounded-lg object-cover w-full h-auto" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </Container>
        </section>
    );
};

export default page;
