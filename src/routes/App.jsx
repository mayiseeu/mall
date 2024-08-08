import "../App.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Outlet } from "react-router-dom";
import Fetchitems from "../Component/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Component/loadingSpinner";

function App() {
const fetchStatus=useSelector((store)=>store.fetchStatus)

  return (
    <>
      <Header></Header>
   <Fetchitems></Fetchitems>
      {fetchStatus.currentlyFetching?<LoadingSpinner/>:      <Outlet></Outlet>
      }
      <Footer></Footer>
    </>
  );
}

export default App;
