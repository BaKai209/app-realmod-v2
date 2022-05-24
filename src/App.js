import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AgentsContainer from "./containers/AgentsContainer";
import CardContainer from "./containers/CardContainer";
import InfoContainer from "./containers/InfoContainer";

function App() {
  return (
    <>
    
    <NavBar />
    <Header />
    <div className="home__container">
    <InfoContainer />
    <CardContainer />
    <AgentsContainer />
    </div>


    </>
  )
}

export default App;
