import { gql, useMutation } from "@apollo/client";

const MyGraphqlSetting = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(MyGraphqlSetting);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "hi",
        createProductInput: {
          name: "m",
          detail: "skdfj",
          price: 3000,
        },
      },
    });
  };

  //한줄일땐 괄호() 필요없음
  return <button onClick={onClickSubmit}>Graphql-Api 요청하기</button>;
}
