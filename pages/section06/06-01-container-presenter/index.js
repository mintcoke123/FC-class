import BoardWrite from "@/src/components/units/board/write/BoardWrite.container";

export default function GraphqlMutationPage() {
  //한줄일땐 괄호() 필요없음
  return (
    <div>
      <div>##########</div>
      <BoardWrite />
      <div>@@@@@@@@@@@@@</div>
    </div>
  );
}
