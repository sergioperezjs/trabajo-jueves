function PageContainer({ children }) {
  return (
    <div className="w3-container w3-content" style={{ maxWidth: 1400, marginTop: 80 }}>
      <div className="w3-row">{children}</div>
    </div>
  )
}

export default PageContainer