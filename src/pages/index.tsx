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

export const Head: HeadFC = () => <title>Home Page</title>
