import { Link } from '@inertiajs/react'

export default ({someProp}) => (
  <>
    <h2>From the demo page</h2>
    <p>someProp was {someProp}</p>
    <p>Go to <Link href="/other">other page</Link></p>
  </>
)
