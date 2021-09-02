import LeftBar from "../Components/LeftBar";
import CenterBar from "../Components/CenterBar";
import RightBar from "../Components/RightBar";
import Navbar from "../Components/Navbar";

// css
import './Home.css'

function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="home__container">
                <LeftBar />
                <CenterBar />
                <RightBar />
            </div>
        </div>
    )
}

export default Home
