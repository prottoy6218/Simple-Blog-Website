import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <label className='logo'><Link href='/'>BlogSite</Link></label>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
