import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeAlt, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Breadcrumbs from '../../components/breadcrumbs'
import ArePreview from '../../components/explore/art-preview'
import ArtGallery2 from '../../components/explore/art-gallery2'

export default function NftResellPage() {
    const breadcrumbs = ["Explore", "Beautiful Artwork"]
    const galleries = [
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art3.gif",
            artId : "art1",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art1.png",
            artId : "art2",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art2.jpeg",
            artId : "art3",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art3.gif",
            artId : "art4",
            buttonTitle : "BUY NOW"
        },
        {
            title : "Beautiful Artwork",
            description : "Collectibles",
            artUrl : "/assets/img/art4.jpeg",
            artId : "art5",
            buttonTitle : "BUY NOW"
        },
    ]

    return (
        <>
            <Head>
                <title>Beautiful Artwork</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header current={-1}></Header>

            <div className='bg-[#0D0F23] dark:bg-white'>
                <div className='w-full 2xl:max-w-screen-2xl h-auto pt-[104px] m-auto'>
                    <div className='flex flex-col mx-8 sm:mx-16  space-y-6 py-12'>
                        {/* custom breadcrubs */}
                        <Breadcrumbs home="Home" breadcrumbs={breadcrumbs}></Breadcrumbs>

                        <div className='flex flex-col space-y-12'>
                            {/* art details */}
                            <ArePreview></ArePreview>
                            
                            <div className="flex flex-cols items-center">
                                <h1 className="flex-grow text-white text-2xl sm:text-4xl font-bold">Related Nfts Category</h1>
                                <Link href="#">
                                    <a className="flex-none text-right text-[#A2A6D0] hover:text-white">
                                        See All
                                        <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                                    </a>
                                </Link>
                            </div>

                            {/* galleries */}
                            <ArtGallery2 galleries={galleries}></ArtGallery2> 
                        </div>
                    </div> 
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
