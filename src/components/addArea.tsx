import { useEffect, useState } from "react";
import { client } from "../libs/supabase";


export default function Login() {
    const [session, setSession] = useState();
    const [user, setUser] = useState(null);

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

    useEffect(() => {
        const setupUser = async () => {
            if (session?.user.id) {
                const { data: user } = await client
                    .from("users")
                    .select("*")
                    .eq("id", session.user.id)
                    .single();
                setUser(user);
            }
        };
        setupUser();
    }, [session]);

    function signInWithGithub() {
        client.auth.signIn({ provider: "github" });
    }

    function signOut() {
        client.auth.signOut();
    }

    async function updateNickname(nickname) {
        const { data: newUser } = await client
            .from("users")
            .update({ nickname })
            .match({ id: user.id })
            .single();
        setUser(newUser);
    }

    return {
        session,
        user,
        signInWithGithub,
        signOut,
        updateNickname,
    };
}