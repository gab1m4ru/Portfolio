import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { ArrowIcon, SnakeFoodIcon } from '../../components/icons'
// import Game from '../../components/SnakeGame/SnakeGame'

function HelloPage() {
  const arrowClass = "py-3 px-5 rounded-xl border border-stroke bg-black text-white";

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
      {/* Blured circles in bg */}
      <div className="absolute w-[300px] h-[300px] bg-teal-400 rounded-full blur-3xl opacity-50 top-25 left-[54%]" />
      <div className="absolute w-[300px] h-[300px] bg-indigo-500 rounded-full blur-3xl opacity-50 bottom-30 right-50" />

      {/* Content */}
      <Header/>

      <main className="flex items-center justify-center gap-36 h-10/12">
        <div>
          <div>
            <span className="text-lg">Hi all. I am</span>
            <h1 className="text-6xl text-slate-50">Rostik Viter</h1>
            <span className="text-3xl text-indigo-500">&gt; Front-end developer</span>
          </div>
          <div className="flex flex-col mt-8">
            <p className="">// complete the game to continue</p>
            <p className="">// find my profile on GitHub:</p>
            <a 
              href="https://github.com/link-to-profile" 
              target="_blank" 
              className="text-slate-50"
            >
              <span className="text-indigo-500">const</span>
              <span className="text-teal-400"> githubLink</span> = 
              <span className="text-link-foreground"> "https://github.com/link-to-profile"</span>
            </a>
          </div>
        </div>

        <section 
          className="flex gap-6 p-8 bg-linear-120 from-[#175553]/50 to-[#43D9AD]/13 rounded-lg 
                    backdrop-blur-3xl shadow-[0px_-2px_0px_0px_rgba(235,235,235,0.35)]"
        >
          <div className='w-60 h-[400px] bg-slate-800 rounded-lg'>

          </div>

          <div>
            <div className="relative p-2.5 bg-slate-800 rounded-lg">
              <p>// use keyboard</p>
              <p>// arrows to play</p>

              <div className="grid grid-cols-3 grid-rows-2 text-center gap-1 mt-3">
                <div className="col-span-3 flex justify-center">
                  <div className={arrowClass}><ArrowIcon/></div>
                </div>

                <div className="flex justify-center">
                  <div className={arrowClass}><ArrowIcon deg={-90}/></div>
                </div>

                <div className="flex justify-center">
                  <div className={arrowClass}><ArrowIcon deg={180}/></div>
                </div>

                <div className="flex justify-center">
                  <div className={arrowClass}><ArrowIcon deg={90}/></div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p>// food left</p>

              <div className="flex flex-wrap gap-2 w-36 mt-2 mx-auto">
                <SnakeFoodIcon/>
                <SnakeFoodIcon/>
                <SnakeFoodIcon/>
                <SnakeFoodIcon/>
                <SnakeFoodIcon/>
                <SnakeFoodIcon/>
                <SnakeFoodIcon/>
                <SnakeFoodIcon/>
                <SnakeFoodIcon/>
                <SnakeFoodIcon/>
              </div>
            </div>

            <button className="absolute top-10/12 left-10/12
                              py-2.5 px-3 border-1 border-teal-50 text-teal-50 rounded-lg
                              hover:opacity-80 transition-opacity duration-150 cursor-pointer"
            >
              Skip
            </button>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

export default HelloPage;