/** @jsxImportSource @emotion/react */
import { log } from 'logger/logger'
import { Component } from 'react'
import { Navigate } from 'react-router-dom'

export class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError = () => ({ hasError: true })

  componentDidCatch = (error: unknown) => {
    log.error('error boundary caught error', { error })
    // Reset error state to false as we will redirect to something went wrong page
    this.setState({ hasError: false })
  }

  render = () => {
    const { hasError } = this.state
    const { children } = this.props
    return hasError ? <Navigate to="/something-went-wrong" /> : children
  }
}
