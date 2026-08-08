import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <BrowserRouter>
    <>
      <div className = 'globalBackground'>
        
        <div className = 'topRow'>

          <div className = 'topOne'>

            <div className = 'topOneOneContainer'>
              <p className = 'nameText'><b>Korey.</b></p>
            </div>
            <div className = 'topOneTwoContainer'>
             
            </div>
            <div className = 'topOneThreeContainer'>
              
            </div>
           
          </div>

          <div className = 'topTwo'>

          </div>

          <div className = 'topThree'>
            <div className = 'topThreeOneContainer'>
              <p className = 'homeText'>
                <b><nav>
                  <Link to="/">Home</Link>{" "}
                  </nav></b>
              </p>
            </div>

            <div className = 'topThreeTwoContainer'>
              <p className = 'aboutText'>
                <b><nav>
                  <Link to="/about">About</Link>{" "}
                </nav></b>
              </p>
            </div>

            <div className= 'topThreeThreeContainer'>
              <p className = 'portfolioText'><b>Portfolio</b></p>
            </div>
          </div>
        </div>


        <div className = 'bodyRow'>

          <div className = 'bodyColumnOne'>

            <div className = 'bodyTitleContainer'>

              <div className = 'bufferContainer'>

              </div>

              <div className = 'titleNameTextContainer'>
                <b>Hi, I'm Korey Miller-Boyle</b>
              </div>

              <div className = 'subtitleNameTextContainer'>
                <b><i>Computational Linguist</i></b>
              </div>

            </div>

            <div className = 'bodyTextContainer'>

              <div className = 'bodyTextBarrier'>

              </div>

              <div className = 'bodyTextActual'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>

              <div className = 'bodyTextButtonRibbon'>

              </div>

              <div className = 'bodyTextBottomBuffer'>

              </div>


            </div>

          </div>


          <div className = 'bodyColumnTwo'>

          </div>

        </div>


      </div>
    </>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
