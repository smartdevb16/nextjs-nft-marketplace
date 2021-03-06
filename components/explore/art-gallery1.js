export default function ArtGallery1(props) {
    return (
        <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {props.galleries.map((item, index) => (
                <div key={item.artId} className="w-full h-auto bg-[#161A42] dark:bg-white grid grid-cols-1 justify-items-center gap-2 text-center p-4 text-white border-2 border-[#161A42] dark:text-gray-800 dark:border-2 dark:border-gray-200 bg-[url('/assets/svg/bg-top-newest-nft-art.svg')] bg-no-repeat bg-contain rounded-xl hover:cursor-pointer hover:border-2 hover:border-gray-200 dark:hover:border-[#325BC5]">
                    <h1 className="text-xl sm:text-2xl xl:text-4xl">{item.title}</h1>
                    <p className="text-base">{item.description}</p>
                    <div className="w-full h-full">
                        <img src={item.artUrl} alt={item.artId} className='w-[50vw] h-[50vw] sm:w-[20vw] sm:h-[20vw] lg:w-[15vw] lg:h-[15vw] object-cover rounded-full m-auto'></img>
                    </div>
                    
                    <button className='rounded-full bg-gradient-to-b from-[#3461FF] to-[#8454EB] text-white text-base uppercase w-3/4 py-2 shadow-md mx-auto my-2'>⚡ {item.buttonTitle}</button>
                </div>
            ))}
        </div>
    )
}