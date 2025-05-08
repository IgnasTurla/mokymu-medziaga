import { useState, useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import JsonData from "./data/data.json";
import Navigation from "./components/navigation/Navigation";
import Header from "./pages/header/Header";
import Features from "./pages/features/Features";
import AboutUs from "./pages/aboutUs/AboutUs";
import Services from "./pages/services/Services";
import Gallery from "./pages/gallery/Gallery";
import Feedback from "./pages/customerFeedback/Feedback";
import Team from "./pages/team/Team";
import Contacts from "./pages/contacts/Contacts";

function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    console.log(JsonData);
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      {landingPageData && (
        <>
          <Navigation
            title={landingPageData.navigation.title}
            navItems={landingPageData.navigation.navigationItems}
          />
          <Header
            title={landingPageData.header.title}
            subtitle={landingPageData.header.subtitle}
            button={landingPageData.header.button}
          />
          <Features
            featuresTitle={landingPageData.features.title}
            featuresItems={landingPageData.features.featuresItems}
          />
          <AboutUs
            title={landingPageData.about.title}
            description={landingPageData.about.description}
            whyChooseUsTittle={landingPageData.about.whyChooseUsTittle}
            whyChooseUsItems={landingPageData.about.whyChooseUsItems}
          />
          <Services
            title={landingPageData.services.title}
            description={landingPageData.services.description}
            servicesItems={landingPageData.services.servicesItems}
          />
          <Gallery
            title={landingPageData.gallery.title}
            description={landingPageData.gallery.description}
            images={landingPageData.gallery.images}
          />
          <Feedback
            title={landingPageData.feedback.title}
            client={landingPageData.feedback.client}
          />
          <Team
            title={landingPageData.team.title}
            description={landingPageData.team.description}
            members={landingPageData.team.members}
          />
          <Contacts
            title={landingPageData.contacts.title}
            description={landingPageData.contacts.description}
            contactInfo={landingPageData.contacts.contactInfo}
            form={landingPageData.contacts.form}
            contactIcons={landingPageData.contacts.contactIcons}
          />
        </>
      )}
    </>
  );
}

export default App;
