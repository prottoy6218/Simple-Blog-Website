import Link from "next/link";


export default function Home() {
  return (
    <div className="center">
      <h1>Welcome to my Simple Blog page in Next JS</h1>
    
        <h2><Link href="/blog">Blog</Link></h2>
      
    </div>
  );
}
