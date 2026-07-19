import { Link } from "react-router-dom"
import Logo from "../../assets/repwright-mark-dark-bg.svg"
import { Button } from "../ui/Button"

export default function Navbar() {
    const user = false;
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md" >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    to=""
                    className="flex items-center gap-2 text-[var(--color-foreground)"
                >
                    <span>GymPlanner</span>
                    <img src={Logo} alt="Repwright logo dark" />
                </Link>
                <nav>
                    {
                        user && (
                            <>
                                <Link to="/profile">
                                    <Button size="sm">
                                        Profile
                                    </Button>
                                </Link>
                            </>
                        )
                    }
                    <>
                        <Link to="/auth/sign-in">
                            <Button variant="ghost" size="sm">
                                Sign In
                            </Button>
                        </Link>
                        <Link to="/auth/sign-up">
                            <Button size="sm">
                                Sign Up
                            </Button>
                        </Link>
                    </>
                </nav>
            </div>
        </header >
    )
}