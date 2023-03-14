/*
  - npm install react-router-dom styled-components

  - create Container
    - create Menu (left side of Youtube, when in maximized mode)
    - create Main (right side)
      - create Wrapper (this one is the wrapper for all video cards)


*/

import styled from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

// (1)
const Container = styled.div``

// (3)
const Main = styled.div``

// (5)
const Wrapper = styled.div``

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>Video Cards</Wrapper>
      </Main>
    </Container>
  )
}

export default App
