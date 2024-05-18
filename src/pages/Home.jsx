import BlogOverView from "../ui/BlogOverView";
import BlogSummery from "../ui/BlogSummery";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import HeroSection from "../ui/HeroSection";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BlogOverView />
      <img
        src="https://images.unsplash.com/photo-1501901609772-df0848060b33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
        className="w-full h-screen object-cover"
        alt=""
      />
      <div className="max-w-xl mx-auto text-center py-24 md:py-32">
        <div className="w-24 h-2 bg-purple-800 mb-4 mx-auto"></div>
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
          We love to travel
        </h2>
        <p className="font-light text-gray-600 mb-6 leading-relaxed">
          Iterative approaches to corporate strategy foster collaborative
          thinking to further the overall value proposition.
        </p>
      </div>
      <BlogSummery />
      <BlogOverView />
      <Footer />
    </>
  );
}

export default Home;
