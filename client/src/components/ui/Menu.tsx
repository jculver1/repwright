import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

export interface MenuItem {
  label: string;
  to: string;
}

interface MenuProps {
  avatar: ReactNode;
  items: MenuItem[];
  className?: string;
}

export function Menu({ avatar, items, className = "" }: MenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div
      ref={menuRef}
      className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border border-[var(--color-accent)] bg-[var(--color-accent)] hover:border-[var(--color-hover)] focus:outline-none focus:border-[var(--color-accent)] transition-colors cursor-pointer"
      >
        {avatar}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 min-w-44 py-1.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl shadow-lg z-50"
        >
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-[var(--color-foreground)] hover:bg-[var(--color-background)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

Menu.displayName = "Menu";
