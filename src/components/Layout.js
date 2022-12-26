import NavbarComponent from "./NavBar";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <main className="flex flex-col h-screen bg-slate-200">
      <NavbarComponent />
      {children}
      <Footer />
    </main>
  );
};