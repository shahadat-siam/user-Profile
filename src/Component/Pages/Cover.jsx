const Cover = () => {
    return (
        <div  className="max-w-[1920px]  mx-auto w-full h-[80vh] overflow-hidden">
            <img src="/cover.jpg" className="w-full relative h-[50vh] object-cover" alt="Cover Image" />
            <div className="absolute  md:gap-6 gap-3 flex left-[10%] bottom-[19%] md:bottom-[18%]">
                <img src="/profile.jpg" className="md:w-48 md:h-40 w-32 h-28  rounded-[100%]" alt="" />
                <div className="md:mt-16 mt-8">
                    <h2 className="md:text-3xl text-2xl text-[#2F3645]  text-start font-bold pb-2">Shahadat  <span className="text-xl font-normal text-blue-400">@shahadat</span>  </h2>
                     <h3 className="flex text-xl  leading-none flex-col items-start">
                     <p>Astrophotographer 📸</p>
                     <p>Gamer 🎮</p>
                     </h3>
                </div>
            </div>
        </div>
    );
};

export default Cover;
