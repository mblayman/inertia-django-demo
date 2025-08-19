const Layout = ({children}) => (
  <>
    <h1>From the layout</h1>
    <div>
      {children}
    </div>
  </>
)

export default page => <Layout>{page}</Layout>
