import { Link } from "react-router-dom";
import Logo from "../../assets/repwright-mark-dark-bg.svg";
import { Button } from "../ui/Button";
import { Menu } from "../ui/Menu";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md" >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to=""
          className="flex items-center gap-2 text-[var(--color-foreground) --font-serif"
        >
          <img
            src={Logo}
            alt="Repwright logo dark" />
          <span>repwright</span>
        </Link>

        <nav>
          {
            user ? (
              <Menu
                avatar={
                  user.image
                    ? <img
                      src={user.image}
                      alt={user.name ?? "User avatar"}
                      className="w-full h-full object-cover" />
                    : <span className="text-sm font-medium text-[var(--color-foreground)]">{(user.name ?? "?").charAt(0).toUpperCase()}</span>
                }
                items={[
                  { label: "Profile", to: "/profile" },
                  { label: "Account", to: "/account/settings" },
                ]}
              />
            )
              :
              (
                <>
                  <Link to="/auth/sign-in">
                    <Button
                      variant="ghost"
                      size="sm">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth/sign-up">
                    <Button size="sm">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )

          }

        </nav>
      </div>
    </header >
  );
}