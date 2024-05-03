import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { MyGraphqlSetting, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [myFunction] = useMutation(MyGraphqlSetting);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {
        // variables 가 $역할을 함
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data?.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myvariables = { number: Number(router.query.number) };

    if (writer) {
      myvariables.writer = writer;
    }
    if (title) {
      myvariables.title = title;
    }
    if (contents) {
      myvariables.contents = contents;
    }

    const result = await updateBoard({
      variables: myvariables,
    });
    router.push(`/section09/09-04-boards/${result.data?.updateBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data} //undefined 이거나 data 이거나
    />
  );
}
