import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

export default function ArtGallery2(props) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {props.galleries.map((item, index) => (
                <div key={item.artId} className='w-full h-auto grid grid-cols-1 bg-[#161A42] border-2 border-[#161A42] dark:bg-white rounded-2xl text-white dark:text-gray-800 dark:border-2 dark:border-gray-200 hover:cursor-pointer hover:border-2 hover:border-gray-200 dark:hover:border-[#325BC5]'>
                    <div className='grid grid-cols-1 gap-2 p-4'>
                        <div className='m-auto'>
                            <img src={item.artUrl} alt={item.artId} className='w-[80vw] h-[80vw] sm:w-[40vw] sm:h-[40vw] md:w-[20vw] md:h-[20vw] lg:w-[15vw] lg:h-[15vw] xl:w-[13vw] xl:h-[13vw] object-cover rounded-xl'></img>
                        </div>
                        <div className='flex flex-row'>
                            <h1 className="flex-grow text-base text-ellipsis overflow-hidden whitespace-nowrap">{item.title}</h1>
                            <button className="rounded-full border-2 border-[#2E357B] dark:border-0 dark:bg-[#325BC5] text-white">
                                <FontAwesomeIcon icon={faAngleRight} className="w-[1.5rem] h-[1.5rem]" />
                            </button>
                        </div>
                        <p className="text-[#A2A6D0] text-sm text-ellipsis overflow-hidden whitespace-nowrap">{item.description}</p>
                        <div className='flex flex-row py-4'>
                            <div className="rounded-full w-[1.5rem] text-center bg-[#325BC5] text-white">
                                <FontAwesomeIcon icon={faEthereum} className="" />
                            </div>
                            <h1 className="flex-grow text-[#47DEF2] text-base ml-2">0.045ETH</h1>
                        </div>
                        <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">0x72cca160035ac6F3A06d6cCB1fc31b251F550871</p>
                        <p className="text-[#A2A6D0] text-xs">Onwer</p>
                    </div>                            
                    
                    <div className="border-t-2 border-[#2E357B] dark:border-gray-200 p-4">
                        <button className='rounded-full bg-gradient-to-b from-[#3461FF] to-[#8454EB] text-white text-base w-full px-4 py-2 shadow-md'>??? {item.buttonTitle}</button>
                    </div>
                </div>
            ))}
        </div>
    )
}