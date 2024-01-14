import Hero from "../compontents/Hero";
import Input from "../compontents/Input";
import Showcase from "../compontents/Showcase";
import Summary from "../compontents/Summary";
import MaxWidthContainer from "../compontents/UI/MaxWidthContainer";

const MainPage = () => {
  return (
    <main>
      <MaxWidthContainer>
        <Hero />
      </MaxWidthContainer>
      <Summary>
        <Input />
      </Summary>
      <Showcase />
    </main>
  );
};

export default MainPage;
