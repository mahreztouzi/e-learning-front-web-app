import "../index.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar/sidebar";

import AllCoursComponent from "../components/AllCoursComponent";
import CoursDetailsComponent from "../components/CoursDetailsComponent";

const CoursDetails = () => {
  // const [search_product, setSearchProduct] = useState("");
  console.log("Product Reached");
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className="flex w-full overflow-x-hidden">
        <Sidebar place="3" />
        {/* main content container */}
        <CoursDetailsComponent />
      </div>
    </div>
  );
};

export default CoursDetails;
