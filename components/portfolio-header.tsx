import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function PortfolioHeader() {
  return (
    <header className="flex items-center gap-8 p-8">
      {/* Rectangular Avatar - outside the name div */}
      <div className="w-36 h-44 rounded-lg overflow-hidden flex-shrink-0 border-2 border-gray-600 shadow-lg">
        <img
          src="/avatar.jpg"
          alt="Eduardo Rodríguez Sánchez"
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-3xl font-bold text-white">
          ER
        </div>
      </div>

      {/* Name + Info block */}
      <div className="flex flex-col gap-2">
        <pre className="ext-primary text-xs leading-tight hidden sm:block mb-4">
          {`
 ███████╗██████╗ ██╗   ██╗ █████╗ ██████╗ ██████╗  ██████╗ 
 ██╔════╝██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔══██╗██╔═══██╗
 █████╗  ██║  ██║██║   ██║███████║██████╔╝██║  ██║██║   ██║
 ██╔══╝  ██║  ██║██║   ██║██╔══██║██╔══██╗██║  ██║██║   ██║
 ███████╗██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝╚██████╔╝
 ╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝`}
        </pre>
        <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">Eduardo Rodríguez Sánchez</p>
        <p className="text-primary text-sm sm:text-base">{">"} Computer Engineer | HPC Researcher | Master Student</p>
      </div>
    </header>
  );
}

export function StickyNav() {
  return (
    <nav className="sticky top-0 z-50 bg-black text-green-400 font-mono text-sm py-2 px-4">
      [ <a href="#about">about</a> | <a href="#projects">projects</a> |{" "}
      <a href="#contact">contact</a> | <a href="#blogs">blogs</a> ]
    </nav>
  );
}
