import axios from "axios";
import MyPage from "../section01";

export default function Test() {
  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickSync}>rest 동기</button>
      <MyPage />
    </div>
  );
}
