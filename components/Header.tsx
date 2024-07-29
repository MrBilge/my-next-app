import Link from "next/link";
import Logo from "./Logo";
function Header() {
  const menu = [
    { title: "Home", href: "https://github.com/MrBilge" },

    { title: "Form", href: "./posts" },

    { title: "Posts", href: "./new-post" },
    { title: "Adress", href: "https://github.com/MrBilge" },
  
  ];

  return (
    <div className="flex  justify-evenly gap-12">
      <Logo />
      {menu.map((nav) => (
        <Link key={nav.title} href={nav.href}>
          {nav.title}
        </Link>
        
      ))}
    </div>
  );
}

export default Header;
