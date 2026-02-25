export function PortfolioFooter() {
	return (
		<footer id="contact" className="mt-8 scroll-m-16">
			<div className="border border-border rounded-sm overflow-hidden bg-card text-card-foreground">
				{/* ASCII table header */}
				<div
					className="flex w-full text-xs text-border select-none px-4 pt-3"
					aria-hidden="true"
				>
					<span>┌</span>
					<span className="flex-1 overflow-hidden whitespace-nowrap">
						{"─".repeat(200)}
					</span>
					<span>┐</span>
				</div>

				<div className="px-4 py-3">
					<div className="flex flex-wrap gap-x-1 text-xs justify-center">
						<a
							href="https://github.com/nekronos-gh"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							GitHub
						</a>
						<span className="text-border">|</span>
						<a
							href="https://www.linkedin.com/in/eduardo-rodriguez-sanchez/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							LinkedIn
						</a>
					</div>
				</div>

				{/* ASCII table footer */}
				<div
					className="flex w-full text-xs text-border select-none px-4 pb-3"
					aria-hidden="true"
				>
					<span>└</span>
					<span className="flex-1 overflow-hidden whitespace-nowrap">
						{"─".repeat(200)}
					</span>
					<span>┘</span>
				</div>
			</div>
		</footer>
	);
}
