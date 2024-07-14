const Posts = () => {
    return (
        <div className="bg-gray-100 max-w-7xl mb-16 mx-auto px-5 md:px-10 pb-4 top-0 w-full">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="order-1 flex gap-4 md:flex-col md:order-2 mt-32 md:mt-4 md:ml-16 md:mr-12 rounded-lg">
                     <div>
                        <p className="text-2xl font-semibold text-start">Photo</p>
                        <div className="grid grid-cols-2 pt-4 gap-0">
                            <img className="w-60 md:h-56 h-20 rounded-tl-lg" src="/photo1.jpg" alt="Photo 1" />
                            <img className="w-60 md:h-56 h-20 rounded-tr-lg" src="/photo2.jpg" alt="Photo 2" />
                            <img className="w-60 md:h-56 h-20 rounded-bl-lg" src="/photo3.jpg" alt="Photo 3" />
                            <img className="w-60 md:h-56 h-20 rounded-br-lg" src="/photo4.jpg" alt="Photo 4" />
                        </div>
                        <p className="text-xl font-semibold text-blue-400 text-end pt-3">More+</p>
                     </div>
                    <div>
                        <p className="my-2 text-start font-semibold text-2xl">Videos</p>
                        <div>
                            <img className="md:w-full w-[420px] md:h-60 h-24 rounded-2xl" src="/video1.jpg" alt="Video 1" />
                            <div className="md:hidden gap-2 mt-2 flex">
                                <img className=" w-24 h-14 rounded-md" src="/photo2.jpg" alt="Photo 2" />
                                <img className=" w-24 h-14  rounded-md" src="/photo3.jpg" alt="Photo 3" />
                            </div>
                            <p className="text-xl font-semibold text-blue-400 text-end pt-3">More+</p>
                        </div>
                    </div>
                </div>
                <div className="order-2 md:order-1 pt-6 md:pt-36 flex flex-col gap-8">
                    <div className="bg-gray-200 bg-opacity-50 px-2 py-3 rounded-2xl">
                        <h1 className="text-2xl font-semibold text-start">How Astrophotography changed my life</h1>
                        <p className="text-start mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga aut corrupti fugit, eum est, ea minima enim, sint nam nesciunt dicta praesentium. Voluptates iure illum amet magni fugit nesciunt similique ex et laborum officiis sequi corrupti corporis, quae animi dolorum assumenda nulla autem sed, quam cum molestiae commodi dolor aut? Ducimus qui deserunt obcaecati commodi culpa! Amet blanditiis fugiat eius?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nesciunt commodi totam debitis atque illum necessitatibus natus nulla! Nostrum, maxime.</p>
                        <div className="flex mt-4 justify-between items-center">
                            <div className="flex gap-2">
                                <p className="bg-gray-50 text-sm text-blue-400 px-3 rounded-full">#photography</p>
                                <p className="bg-gray-50 text-sm px-3 text-blue-400 rounded-full">#astronomy</p>
                                <p className="bg-gray-50 px-3 text-sm text-blue-400 rounded-full">#photography</p>
                                <p className="bg-gray-50 px-3 text-sm text-blue-400 rounded-full">+</p>
                            </div>
                            <button className="text-md font-semibold text-blue-400">Read more</button>
                        </div>
                    </div>
                    <div className="bg-gray-200 bg-opacity-50 px-2 py-3 rounded-2xl">
                        <h1 className="text-2xl font-semibold text-start">Which Telescope and DSLR I use</h1>
                        <p className="text-start mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga aut corrupti fugit, eum est, ea minima enim, sint nam nesciunt dicta praesentium. Voluptates iure illum amet magni fugit nesciunt similique ex et laborum officiis sequi corrupti corporis, quae animi dolorum assumenda nulla autem sed, quam cum molestiae commodi dolor aut? Ducimus qui deserunt obcaecati commodi culpa! Amet blanditiis fugiat eius?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nesciunt commodi totam debitis atque illum necessitatibus natus nulla! Nostrum, maxime.</p>
                        <div className="flex mt-4 justify-between items-center">
                            <div className="flex gap-2">
                                <p className="bg-gray-50 px-3 text-sm text-blue-400 rounded-full">#photography</p>
                                <p className="bg-gray-50 px-3 text-sm text-blue-400 rounded-full">#astronomy</p>
                                <p className="bg-gray-50 px-3 text-sm text-blue-400 rounded-full">#photography</p>
                                <p className="bg-gray-50 px-3 text-sm text-blue-400 rounded-full">+</p>
                            </div>
                            <button className="text-md font-semibold text-blue-400">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
