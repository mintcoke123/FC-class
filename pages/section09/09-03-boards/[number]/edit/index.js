import BoardWrite from "../../../../../src/components/units/board/09-write/BoardWrite.container";

export default function GraphqlMutationPage() {
  //한줄일땐 괄호() 필요없음
  return (
    <div>
      <div>##########</div>
      <BoardWrite isEdit={true} />
      <div>@@@@@@@@@@@@@</div>
    </div>
  );
}
