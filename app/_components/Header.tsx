import Logo from "./Logo";
import Navigation from "./Navigation";


const Header = () => {
  return (
    <section className="sticky top-0 z-50">
      <header className="py-3 px-6 md:px-9 lg:px-16 shadow-md bg-gradient-to-r from-indigo-200 to-green-200 opacity-[0.98]">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Logo />
          <div>
            <Navigation />
          </div>
          <button className="button-primary hidden xl:block">Free Consultation</button>
        </div>
      </header>
    </section>
  )
}

export default Header;