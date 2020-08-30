import React, { Component } from 'react'
import axios from 'axios'
import smoothscroll from 'smoothscroll-polyfill'
import { ThemeProvider } from "styled-components"
import { NextSeo } from 'next-seo';

import Head from '../components/head'

import Home from '../sections/home'
import About from '../sections/about'
import Services from '../sections/services'
import Contact from '../sections/contact'

import Flex from '../components/flex'
import Header from '../components/header'
import Footer from '../components/footer'

import theme from '../config/theme'

import scrollToSection from '../utils/scroll-to-section'
import Router from 'next/router'

const sections = ['home', 'about', 'services', 'contact']

const locationMap = {
  home: '/',
  about: '/about-us',
  services: '/services',
  contact: '/contact-us'
}

class Index extends Component {

  scrollTimer = null

  componentDidMount() {
    smoothscroll.polyfill()
    this.setScrollListener()

    const { section = '/' } = this.props
    this.scrollTimer = setTimeout(() => {
      scrollToSection(section)
    }, 500)

    this.awakenServer()
  }

  componentWillUnmount() {
    clearTimeout(this.scrollTimer)
  }

  setScrollListener = () => {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          const nextRoute = locationMap[entry.target.id]
          Router.replace(nextRoute)
        }
      })
    }, { threshold: .35 })

    sections.forEach(section => {
      const elem = document.getElementById(section)
      if (elem) observer.observe(elem)
    })
  }

  awakenServer = async () => {
    try {
      axios.get('https://virtue-mailer.herokuapp.com/')
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { section = '' } = this.props

    return (
      <div>
        <Head />
        <main>
          <NextSeo
            title="Bell Partners Pty Ltd | Harrismith, Free State, South Africa."
            description="Bell Partners Registered Accountants and Reviewers (SAIPA). Services includes maintaining Accounting Records, Financial Statements & Reporting, Business Planning, Auditing (Outsourced), VAT, PAYE, Tax Returns, Payroll Services, CIPC services, Commissioner of Oaths & more. Located at 33 Murray Street, Harrismith, 9880."
            canonical="https://bellpartners.co.za"
            openGraph={{
              url: 'https://bellpartners.co.za',
              title: 'Bell Partners Registered Accountants and Reviewers (SAIPA)',
              description: 'Services includes maintaining Accounting Records, Financial Statements & Reporting, Business Planning, Auditing (Outsourced), VAT, PAYE, Tax Returns, Payroll Services, CIPC services, Commissioner of Oaths & more. Located at 33 Murray Street, Harrismith, 9880.',
              site_name: 'Bell Partners Pty Ltd | Harrismith',
            }}
          />
          
          <ThemeProvider theme={theme}>
            <Flex flexDirection="column" width="100vw">
              <Header visibleSection={section}/>
              <Home />
              <About />
              <Services />
              <Contact />
              <Footer />
            </Flex>
          </ThemeProvider>
        </main>
      </div>
    )
  }
}

export default Index
