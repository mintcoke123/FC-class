import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const MyGraphqlSetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [myFunction] = useMutation(MyGraphqlSetting);

  const onClickSubmit = async () => {
    try {
      //try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 모두 무시하고, catch에 있는 내용이 실행됨

      const result = await myFunction({
        variables: {
          // variables 가 $역할을 함
          writer: "me",
          title: "hello",
          contents: "nicetomeetyou",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };

  //한줄일땐 괄호() 필요없음
  return <button onClick={onClickSubmit}>Graphql-Api 요청하기</button>;
}
