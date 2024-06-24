export const Projects = () => {
    return(
        <>
            <h1>en projects page</h1>
            <div className="p-3">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-64" src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80" alt="Modern building architecture" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Proyecto Integral en local</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Increible reforma en techo, iluminación, pared y suelo</a>
                    <p className="mt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, obcaecati? Inventore quia voluptatum, quasi debitis reiciendis eius similique quas aut sunt explicabo. Iusto natus aperiam consequuntur quaerat unde, veniam nostrum.</p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}