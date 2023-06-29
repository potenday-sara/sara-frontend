import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import SaraMaraForm from "../components/SaraMaraForm";
import Spinner from "../components/Spinner";
import Answer from "../components/Answer";
import PropTypes from "prop-types";
import { postQuestion } from "../apis/postQuestion";
import TextLogo from "../../../components/Logo/TextLogo";
import Character from "../../../components/Logo/Character";
const StyledChatboxLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 180px auto;
  height: auto;
  gap: 40px;
  margin: auto;
  padding: 40px 20px;
  width: 100%;
  max-width: 540px;
  background-color: #fff;
  border-radius: 32px;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
`;

export default function ChatboxLayout({ $type }) {
  const [data, setData] = useState({});
  const [item, setItem] = useInput();
  const [explanation, setExplanation] = useInput();
  const Mutate = useMutation(() => postQuestion(item, explanation, $type));

  const navigate = useNavigate();

  const dataResetNaviget = (route) => {
    Mutate.reset();
    setItem();
    setExplanation();
    navigate(route);
  };
  useEffect(() => {
    setData({
      id: Mutate.data?.data.data.id,
      object: Mutate.data?.data.data.object,
      solution: Mutate.data?.data.data.solution,
    });
    console.log(Mutate);
  }, [Mutate.isSuccess]);

  return (
    <StyledChatboxLayout $type>
      <TextLogo $type={$type} />
      <Character $type={$type} />
      <Answer $type={$type} data={data} navigate={dataResetNaviget} />

      {/* {Mutate.isIdle === true ? (
        <SaraMaraForm
          $type={$type}
          item={item}
          explanation={explanation}
          mutate={Mutate.mutate}
          setItem={setItem}
          setExplanation={setExplanation}
        />
      ) : Mutate.isSuccess === true ? (
        <Answer $type={$type} data={data} navigate={dataResetNaviget} />
      ) : (
        <Spinner $type={$type} />
      )} */}
    </StyledChatboxLayout>
  );
}

ChatboxLayout.propTypes = {
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
};
