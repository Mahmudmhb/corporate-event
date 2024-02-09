import Bannar from "../Components/Header/Bannar";
import Services from "../Components/Services/Services";
import Blogs from "./Blogs";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Services></Services>
      <Blogs></Blogs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
