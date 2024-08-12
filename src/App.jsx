import Info from "./Info";
import Education from "./Education";
import Skills from "./Skills";
import ContactForm from "./Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";
// import "./App.css";

function App() {
  return (
    <>
      <NavBar />

      <section id="home">
        <Info />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default App;
