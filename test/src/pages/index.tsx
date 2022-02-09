import { useEffect, useState, useRef } from "react";
import Login from "../components/User";

export default function Home() {
  const { session, user, signOut, signInWithGithub, updateNickname } =
    Login();
  const [editingNickname, setEditingNickname] = useState(false);
  const newNickname = useRef();

  async function setNickname(evt) {
    evt.preventDefault();

    try {
      updateNickname(newNickname.current.value);
      setEditingNickname(false);
      newNickname.current.value = "";
    } catch (err) {
      console.log("エラーが発生しました");
    }
  }

  return (
    <>
      {session ? (
        <div>
          <p>Hello, {user?.nickname ? user.nickname : user?.fullname}</p>
          <div>
            {editingNickname ? (
              <form onSubmit={setNickname}>
                <input
                  type="text"
                  required
                  ref={newNickname}
                  placeholder="新しいニックネーム"
                />
                <button type="submit">設定</button>
              </form>
            ) : (
              <div>
                <button onClick={() => setEditingNickname(true)}>
                  ニックネームを更新
                </button>
              </div>
            )}
          </div>
          <button onClick={() => signOut()}>サインアウト</button>
        </div>
      ) : (
        <button onClick={() => signInWithGithub()}>GitHubでログイン</button>
      )}
    </>
  );
}