function HomeHero() {
    return (
        <header className="mb-16">
        <div className="w-full bg-center bg-cover h-[32rem]" style={{backgroundImage: "url('https://i.imgur.com/WbsNcqD.png')"}}>
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Restaurant Recommendations</h1>
                    <p className="mt-3 text-gray-100 m-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus id interdum. Velit dignissim sodales ut eu sem. Amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    {/* SEARCH BAR START */}
                    <div className="pt-2 relative mx-auto text-gray-600">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-4 rounded-lg text-sm focus:outline-none inline" type="search" name="search" placeholder="Search" />
                        <button className="w-auto px-4 py-2 mt-4 text-sm ml-4 font-medium text-white uppercase transition-colors duration-200 transform bg-rose-600 rounded-full lg:w-auto hover:bg-rose-500 focus:outline-none focus:bg-rose-500 inline">+</button>
                    </div>
                    {/* SEARCH BAR END */}
                    {/* ADD REC BUTTON START */}
                    
                    {/* ADD REC BUTTON END */}
                </div>
            </div>
        </div>
    </header>
    );
}

export default HomeHero;