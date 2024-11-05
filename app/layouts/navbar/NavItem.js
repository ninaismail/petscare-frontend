import Link from 'next/link'
function NavItem({ text, link, active }) {
  return (
    <Link id={`go-to-${link}`} href={link} prefetch={false} scroll={false} className={`text-secondary text-center font-[montserrat] lg:text-lg transition-colors duration-400 ${
          active ? "text-primary" : "hover:text-primary"}`}>
          { text }
    </Link>
  );
};

export default NavItem;