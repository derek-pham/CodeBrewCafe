import './HomePage.css';
import { HomePageContextProvider } from './HomePageContext';
import SideBar from './components/SideBar/SideBar';
import MainMenu from './components/MainMenu/MainMenu';

function HomePage() {

  return (
    <HomePageContextProvider>
      <div className="homepage">
        <div className="content">
          <SideBar />
          <MainMenu />
        </div>
      </div>
    </HomePageContextProvider>
  );
}

export default HomePage;