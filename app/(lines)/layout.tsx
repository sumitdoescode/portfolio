const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative">
            {/* CENTER CONSTRAINT (important) */}
            <div className="max-w-4xl mx-auto relative">
                {/* LEFT STRIP */}
                <div
                    className="pointer-events-none absolute top-0 bottom-0 -left-16 w-16 
          bg-linear-to-r from-background via-background/80 to-transparent 
          border-r border-white/5 hidden md:block"
                >
                    <div className="h-full w-full bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_8px)] opacity-100" />
                </div>

                {/* RIGHT STRIP */}
                <div
                    className="pointer-events-none absolute top-0 bottom-0 -right-16 w-16 
          bg-linear-to-l from-background via-background/80 to-transparent 
          border-l border-white/5 hidden md:block"
                >
                    <div className="h-full w-full bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_8px)] opacity-100" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10">{children}</div>
            </div>
        </div>
    );
};

export default LayoutWrapper;
