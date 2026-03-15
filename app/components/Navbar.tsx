import Link from "next/link"

export default function Navbar(){

return(

<div className="flex justify-between items-center p-6 border-b border-neutral-800">

<div className="font-semibold tracking-wide">
KYLE WHARTON LAB
</div>

<div className="flex gap-8 text-sm text-gray-400">

<Link href="/">Home</Link>

<Link href="/projects">Projects</Link>

<Link href="/research">Research</Link>

<a href="https://github.com/YOUR_GITHUB">
GitHub
</a>

</div>

</div>

)

}