import { gql, useMutation } from "@apollo/client";

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
  const [myFunction] = useMutation(MyGraphqlSetting);

  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {
        // variables 가 $역할을 함
        writer: "me",
        title: "hello",
        contents: "nicetomeetyou",
      },
    });
    console.log(result);
  };

  //한줄일땐 괄호() 필요없음
  return <button onClick={onClickSubmit}>Graphql-Api 요청하기</button>;
}
