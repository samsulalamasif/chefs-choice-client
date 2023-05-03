import React from 'react';
import Marquee from 'react-fast-marquee';

const DishesItems = () => {

    return (
        <div>
            <h1 className='text-center font-serif font-semibold text-5xl '>Our Food Items</h1>
            <h1 className='text-center  text-gray-600 my-12 '>
                Italian food items ipsum dolor sit amet consectetur adipisicing elit. Sunt, cumque rerum, obcaecati itaque numquam impedit fuga <br />
                quaerat similique sed, eum placeat? Pariatur aut, perspiciatis  cumque rerum, obcaecati itaque numquam impedi fuga quaerat similique <br />
                sed, eum placeat? Pariatur aut, perspiciatis  cumque rerum, obcaecati itaque numquam impedit fuga quaerat similique sed, eum placeat? <br />
                Pariatur aut, perspiciatis expedita sit harum quia similique soluta.</h1>


            <Marquee speed={150} >
                <div className='flex'>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop& w=500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Spaghetti Carbonara</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Margherita</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Tiramisu</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://plus.unsplash.com/premium_photo-1670368204588-02b14cd2067f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Pesto Pasta</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w =500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Caprese Salad</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://plus.unsplash.com/premium_photo-1677686707340-c26ce8ae4381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit =crop&w=500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Osso Bucou</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1507638940746-7b17d6b55b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit= crop&w=500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Lasagna</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1627286400579-027de47e9e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop &w=500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Bruschetta</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1579349443343-73da56a71a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop &w=500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Risotto</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1610817153377-e54299ffdb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop& w=500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Cannoli</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1552056776-9b5657118ca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w= 500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Minestrone Soup</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1522666257812-173fdc2d11fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop& w=500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Chicken Parmesan</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://plus.unsplash.com/premium_photo-1677686707585-9a8b474eab74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxpdGFsaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w= 500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Gnocchi</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1616170687881-32188ae1b6d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHxpdGFsaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=50 0&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Fettuccine Alfredo</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1608032076946-23d89c6d6d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit= crop&w=500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Shrimp Scampi</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=6 0 " />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Braciole</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1609582848349-215e8bf397d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=6 0 " />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Cioppino</h2>
                    </div>
                    <div className='flex flex-col items-center p-8'>
                        <img className='w-44 h-44 rounded-full' src="https://images.unsplash.com/photo-1568600891621-50f697b9a1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit= crop&w=500&q=60" />
                        <h2 className="mt-6 font-bold text-cyan-900 text-2xl ">Arancini</h2>
                    </div>
                </div>

            </Marquee>
        </div>




    );
};

export default DishesItems;



{/* <div className='flex '>
    <div className='flex flex-col items-center p-8'>
        <img className='w-48 h-48 rounded-full' src={recipeOne?.recipeImg} />
        <h2 className="mt-6 font-bold text-cyan-900 text-4xl ">{recipeOne?.recipeName}</h2>
    </div>
    <div className='flex flex-col items-center p-8'>
        <img className='w-48 h-48 rounded-full' src={recipeTwo?.recipeImg} />
        <h2 className="mt-6 font-bold text-cyan-900 text-4xl ">{recipeTwo?.recipeName}</h2>
    </div>
    <div className='flex flex-col items-center p-8'>
        <img className='w-48 h-48 rounded-full' src={recipeThree?.recipeImg} />
        <h2 className="mt-6 font-bold text-cyan-900 text-4xl ">{recipeThree?.recipeName}</h2>
    </div>

</div> */}