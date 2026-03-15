import Link from "next/link"

export default function Navbar(){

return(

<div className="border-b border-neutral-800 p-6 flex justify-between">

<Link href="/">
Home
</Link>

<div className="flex gap-6">

<Link href="/research">
Research
</Link>

<a href="https://github.com/YOUR_GITHUB">
GitHub
</a>

</div>

</div>

)

}