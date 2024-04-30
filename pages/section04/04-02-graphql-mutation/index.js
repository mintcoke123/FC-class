import { gql, useMutation } from "@apollo/client";

const MyGraphqlSetting = gql`
  mutation {
    createBoard(writer: "123", title: "안녕", contents: "반가워") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myFunction] = useMutation(MyGraphqlSetting);

  const onClickSubmit = async () => {
    const result = await myFunction();
    console.log(result);
  };

  //한줄일땐 괄호() 필요없음
  return <button onClick={onClickSubmit}>Graphql-Api 요청하기</button>;
}
