import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function PortfolioHeader() {
	return (
		<header className="mb-8">
			<div className="hidden sm:flex items-center gap-6 mb-4">
				<pre
					className="text-primary text-xs leading-tight"
					style={{
						fontFamily:
							'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
					}}
					aria-hidden="true"
				>
					{`
 ███████╗██████╗ ██╗   ██╗ █████╗ ██████╗ ██████╗  ██████╗ 
 ██╔════╝██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔══██╗██╔═══██╗
 █████╗  ██║  ██║██║   ██║███████║██████╔╝██║  ██║██║   ██║
 ██╔══╝  ██║  ██║██║   ██║██╔══██║██╔══██╗██║  ██║██║   ██║
 ███████╗██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝╚██████╔╝
 ╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝`}
				</pre>
				<Avatar className="h-24 w-24 border-2 border-primary/20">
					<AvatarImage src="/profile.jpg" alt="Eduardo Rodríguez Sánchez" className="object-cover" />
					<AvatarFallback className="text-2xl">ER</AvatarFallback>
				</Avatar>
			</div>

			<h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
				Eduardo Rodríguez Sánchez
			</h1>
			<p className="text-primary text-sm sm:text-base">
				{">"} Computer Engineer | HPC Researcher | Master Student
			</p>
		</header>
	);
}

export function StickyNav() {
	return (
		<nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 flex flex-wrap gap-x-1 text-sm text-muted-foreground">
			<span className="text-border">[</span>
			<a href="#about" className="text-primary hover:underline">
				about
			</a>
			<span className="text-border">|</span>
			<a href="#projects" className="text-primary hover:underline">
				projects
			</a>
			<span className="text-border">|</span>
			<a href="#contact" className="text-primary hover:underline">
				contact
			</a>
			<span className="text-border">|</span>
			<a href="/blogs" className="text-primary hover:underline">
				blogs
			</a>
			<span className="text-border">]</span>
		</nav>
	);
}
