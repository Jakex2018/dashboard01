import "./App.css";
import Footer from "./components/Footer";
import HeaderBody from "./components/header/HeaderBody";
import SidebarLeft from "./components/sidebarLeft/SidebarLeft";
import TableInfo from "./components/tableInfo/TableInfo";
import TableProject from "./components/tableProject/TableProject";
import TableViews from "./components/tableViews/TableViews";

function App() {
  return (
    <div className="min-h-[200vh] w-full bg-[#F0F2F5]">
      <div className="flex items-start justify-start">
        <div className="flex mt-5">
          <div className="fixed h-[96vh] w-[245px] rounded-lg bg-[#3F3F47] mx-5  ">
            <SidebarLeft />
          </div>
          <div className="h-[94vh] rounded-lg min-w-[1050px] ml-[27%] ">
            <HeaderBody />
            <div className="mt-[35px]">
              <TableInfo />
            </div>
            <div className="mt-[50px]">
              <TableViews />
            </div>
            <div className="mt-[20px]">
              <TableProject />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
