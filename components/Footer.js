import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  font-size: 16px;

  * > {
    margin: 0;
  }
`
export default () => (
  <Container>
    <Link href='https://www.byteconf.com/js-2019' target='_blank' alt="Byteconf JavaScript 2019."><p style={{ margin: '10px 0' }}>Byteconf JavaScript 2019</p></Link>
    <p style={{ margin: '0' }}>Friday, March 22nd, 2019</p>
  </Container>
)
