import MyRouter from "./Router";
import { useEffect, useState } from "react";
import { authService } from "../fBase";

function App() {
  // 파이어베이스가 실행되는 초기에 유저가 로그인 되어있는지 확인하는 로직은 비동기로 작동하기 때문에
  // 시간이 필요합니다.

  const [isLogin, setLogin] = useState(false);
  const [init, setInit] = useState(false);
  // useEffect : 특정 컴포넌트가 렌더링 이후에 어떤 일을 해야하는지 설정할 수 있습니다.
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
      setInit(true);
    });
  });

  return init ? <MyRouter isLogin={isLogin}></MyRouter> : "로딩중...";
}

export default App;
