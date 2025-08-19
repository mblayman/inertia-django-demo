import { Link } from '@inertiajs/react'

export default ({otherProp}) => (
  <>
    <h2>From the other page</h2>
    <p>otherProp was {otherProp}</p>
    <p>Go to <Link href="/demo">demo page</Link></p>
  </>
)
