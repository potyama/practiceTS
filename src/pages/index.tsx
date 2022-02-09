import Login from "../components/addArea";

export default function Home() {
  const { session, signOut, signInWithGithub } = Login();

  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>サインアウト</button>
      ) : (
        <button onClick={() => signInWithGithub()}>GitHubでログイン</button>
      )}
    </>
  );
}