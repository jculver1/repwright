import { AuthView } from "@neondatabase/neon-js/auth/react"
import { useParams } from "react-router-dom"

export default function Auth() {
    const { pathname } = useParams();
    return (
        <div className="flex justify-center">
            <AuthView pathname={pathname} />
        </div>
    )
}