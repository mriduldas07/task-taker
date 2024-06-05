import Banner from "../components/Home/Banner";
import BussinessProcess from "../components/Home/BussinessProcess";
import OtherProjects from "../components/Home/OtherProjects";
import OurServices from "../components/Home/OurServices";
import Testimonial from "../components/Home/Testimonial";
import Tips from "../components/Home/Tips";

export default function Home() {
  return (
    <div>
      <Banner />
      <BussinessProcess />
      <Testimonial />
      <OurServices />
      <OtherProjects />
      <Tips />
    </div>
  );
}
