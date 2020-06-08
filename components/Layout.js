import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function Layout ({ children, links }) {
  return (
    <>
      <Head>
        <title>Manage</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header>
        <Navigation links={links} />
      </Header>

      <main className='main-content'>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  links: PropTypes.arrayOf(PropTypes.string)
}
