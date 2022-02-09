import { useEffect, useState } from "react";
import { client } from "../libs/supabase";

export default function Login() {
    const [session, setSession] = useState();

    useEffect(() => {
        const { data: authListener } = client.auth.onAuthStateChange(
            (event, session) => {
                setSession(session);
            }
        );

        return () => {
            authListener.unsubscribe();
        };
    }, []);

    function signInWithGithub() {
        client.auth.signIn({ provider: "github" });
    }

    function signOut() {
        client.auth.signOut();
    }

    return {
        session,
        signInWithGithub,
        signOut,
    };
}
