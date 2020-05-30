import React from 'react'
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'
import Feature from '../components/Feature'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

const menuLinks = ['Pricing', 'Product', 'About Us', 'Careers', 'Community']
const primaryLinks = ['Home', 'Pricing', 'Products', 'About Us']
const secondaryLinks = ['Careers', 'Community', 'Privacy Policy']
const features = [
  {
    index: '01',
    title: 'Track company-wide progress',
    description:
      'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
  },
  {
    index: '02',
    title: 'Advanced build-in reports',
    description:
      'Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.'
  },
  {
    index: '03',
    title: 'Everything you need in one place',
    description:
      'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
  }
]

const testimonials = [
  {
    name: 'Anisha Li',
    description:
      '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    image: 'avatar-anisha'
  },
  {
    name: 'Ali Bravo',
    description:
      '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    image: 'avatar-ali'
  },
  {
    name: 'Richard Watts',
    description:
      '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
    image: 'avatar-richard'
  },
  {
    name: 'Shanai Gough',
    description:
      '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
    image: 'avatar-shanai'
  }
]

const renderFeatures = () => {
  return features.map((feature) => (
    <Feature
      key={feature.index}
      index={feature.index}
      title={feature.title}
      description={feature.description}
    />
  ))
}

export default function Home () {
  return (
    <Layout links={menuLinks}>
      {renderFeatures()}
      <Testimonials testimonials={testimonials} />
      <GetStarted />
      <Footer primaryLinks={primaryLinks} secondaryLinks={secondaryLinks} />
    </Layout>
  )
}
