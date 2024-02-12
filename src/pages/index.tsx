import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Landing, Background, Projects, TopMenu, About, Contact } from "../components"
import { ThemeProvider, ContextProvider } from "../providers"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ContextProvider>
      <ThemeProvider>
        <TopMenu />
        <Background />
        <Landing />
        <About />
        <Projects />
        <Contact />
      </ThemeProvider>
    </ContextProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <>
  <html lang="pl" />
  <title>Paweł Musioł</title>
  <meta name="description" content="Cześć, jestem Paweł, fullstack developer ze Śląska. Tworzę projekty oparte o ReactJS i NodeJS."></meta>
  <link rel="canonical" href="pawel-musiol.pl/" />
</>
