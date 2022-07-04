/** @jsxImportSource @emotion/react */
import { Col, Page } from 'components/layout'
import { useEffect } from 'react'
import { Docs } from './Docs'
import { LiveExample } from './LiveExample'
import { TopBlurb } from './TopBlurb'

export default () => {
  useEffect(() => {
    loadTSGuardian()
  }, [])
  return (
    <Page>
      <TopBlurb />
      <Col gap="3rem">
        <LiveExample />
        <Docs />
      </Col>
    </Page>
  )
}

const loadTSGuardian = () => {
  const exportsScript = document.createElement('script')
  exportsScript.innerText = `var exports = {};`
  document.head.appendChild(exportsScript)
  const tsGuardianScript = document.createElement('script')
  tsGuardianScript.type = 'module'
  tsGuardianScript.innerText = `
  import * as TSG from 'https://unpkg.com/ts-guardian/lib/index.js';
  window.TSG = exports;
  `
  document.head.appendChild(tsGuardianScript)
}
