"use client"

import "./Swiper.styles.css"

import "swiper/css"
import "swiper/css/pagination"; 
import "swiper/css/navigation";

import { useEffect } from "react"
import Swiper from "swiper"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import Image from "next/image";


export const SwiperCard = ({image}: {image: IImage}) => {
    return (
        <div className="swiper-slide h-full">
            <div className="overlay"></div> 
            <div className="h-full">
                <Image 
                    className="object-cover object-center h-full" 
                    src={image.name} 
                    alt="imagen" 
                    height={700} 
                    width={1365}
                />
            </div>
        </div>
    )
}

interface IImage { id: number, name: string}

export const images: IImage[] = [
    {id: 1, name: "https://http2.mlstatic.com/D_NQ_998128-MLA81581052107_122024-OO.webp"},
    {id: 2, name: "https://http2.mlstatic.com/D_NQ_654677-MLA81581630859_122024-OO.webp"},
    {id: 3, name: "https://http2.mlstatic.com/D_NQ_641725-MLA81582377215_122024-OO.webp"},
    {id: 4, name: "https://http2.mlstatic.com/D_NQ_654436-MLA81362111193_122024-OO.webp"},
    {id: 5, name: "https://http2.mlstatic.com/D_NQ_747324-MLA81312030704_122024-OO.webp"},
    {id: 6, name: "https://http2.mlstatic.com/D_NQ_698717-MLA81312613804_122024-OO.webp"},
    {id: 7, name: "https://http2.mlstatic.com/D_NQ_682023-MLA81581631861_122024-OO.webp"}
]

const SwiperComponent = () => {
    useEffect(() => {
        const swiper = new Swiper(".swiper-container", {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 1,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            modules: [Pagination, Navigation, Autoplay], 
        })
        return () => swiper.destroy();
    }, [])

    return (
        <div className="swiper-container overflow-hidden relative h-full">
            <div className="swiper-wrapper h-full">
                { images.map((imagen) => <SwiperCard key={imagen.id} image={imagen}/>) }
                 
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            
            <div className="swiper-pagination"></div>
        </div>
    )
}

export default SwiperComponent