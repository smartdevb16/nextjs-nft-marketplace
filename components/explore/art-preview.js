
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

export default function ArtPreview () {
    return (
        <div className='flex flex-col lg:flex-row items-center space-x-0 space-y-8 lg:space-x-8 lg:space-y-0 bg-[#161A42] border-2 border-[#161A42] dark:bg-white dark:border-2 dark:border-gray-200 rounded-md p-6'>
            <div className='flex-none'>
                <img src="/assets/img/art2.jpeg" className='w-[60vw] h-[60vw] lg:w-[30vw] lg:h-[30vw] object-cover rounded-xl'></img>
            </div>

            <div className='flex-1 w-full flex flex-col lg:flex-row space-x-0 space-y-8 lg:space-x-8 lg:space-y-0'>
                <div className='flex-grow text-white dark:text-gray-800'>
                    <h1 className='text-4xl font-bold leading-normal'>Beautiful Artwork</h1>

                    <h4 className='text-[#6C71AD] text-2xl'>Collectibles</h4>

                    <p className='text-[#B4BAEF] dark:text-gray-600 text-base my-6'>Sell your items with price and also have ability to cancel anytime from sale and edit price can work at etherum and bnb and polygon net, any network with solidity</p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                        <div className='flex-1 flex flex-col space-y-6'>
                            <div className='flex flex-row space-x-4'>
                                <div className='flex-none w-14 h-14 rounded-full bg-gradient-to-b from-[#FF2D92] to-[#FFA25F]'></div>
                                <div className='flex-1 flex flex-col text-ellipsis overflow-hidden'>
                                    <p className='text-[#7D82B2] dark:text-gray-800 text-base'>Onwerd By</p>
                                    <p className='text-white dark:text-gray-500 text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap'>0x72cca160035ac6F3A06d6cCB1fc31b251F550871</p>
                                </div>
                            </div>

                            <button className='w-48 rounded-full bg-gradient-to-b from-[#3461FF] to-[#8454EB] text-white text-base uppercase py-2 shadow-md m-auto ml-0 border-2 border-[#161A42] dark:border-white'>??? BUY NOW</button>
                        </div>
                        
                        <div className='flex-1 flex flex-col space-y-6'>
                            <div className='flex flex-row space-x-4'>
                                <div className='flex-none w-14 h-14 rounded-full bg-gradient-to-b from-[#FF2D92] to-[#FFA25F]'></div>
                                <div className='flex flex-col text-ellipsis overflow-hidden'>
                                    <p className='text-[#7D82B2] dark:text-gray-800 text-base'>Created By</p>
                                    <p className='text-white dark:text-gray-500 text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap'>0x72cca160035ac6F3A06d6cCB1fc31b251F550871</p>
                                </div>
                            </div>

                            <button className='w-48 rounded-full text-white dark:text-gray-800 border-2 dark:border-gray-200 text-base py-2 shadow-md m-auto ml-0'>Share</button>
                        </div>
                    </div>
                </div>

                <div className='flex-none items-start'>
                    <div className='flex flex-row'>
                        <div className="rounded-full w-[1.5rem] text-center bg-[#325BC5] text-white">
                            <FontAwesomeIcon icon={faEthereum} className="" />
                        </div>
                        <h1 className="flex-grow text-[#47DEF2] text-base ml-2">0.045ETH</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}