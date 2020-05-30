import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import Feature from "../components/Feature";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

const menuLinks = ["Pricing", "Product", "About Us", "Careers", "Community"];
const primaryLinks = ["Home", "Pricing", "Products", "About Us"];
const secondaryLinks = ["Careers", "Community", "Privacy Policy"];
const features = [
  {
    number: "01",
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    number: "02",
    title: "Advanced build-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    number: "03",
    title: "Everything you need in one place",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
];

const renderFeatures = () => {
  return features.map((feature) => (
    <Feature
      key={feature.number}
      number={feature.number}
      title={feature.title}
      description={feature.description}
    />
  ));
};

export default function Home() {
  return (
    <Layout links={menuLinks}>
      {renderFeatures()}
      <Testimonials />
      <GetStarted />
      <Footer primary_links={primaryLinks} secondary_links={secondaryLinks} />
    </Layout>
  );
}
