const sectionMap = {
  '/': 'home',
  '/about-us': 'about',
  '/services': 'services',
  '/contact-us': 'contact'
}

function scrollToSection(section) {
  const elem = document.getElementById(sectionMap[section])
  if (elem) {
    elem.scrollIntoView({
      behavior: 'smooth'
    })
  }
}

export default scrollToSection