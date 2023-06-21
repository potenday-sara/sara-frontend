import React from "react";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { BasicButton } from "../../../components/Button/MainButton";
import { TextInput, TextareaInput } from "../../../components/Form/Form";

const StyledQuestion = styled.div`
  display: grid;
  grid-template-rows: auto auto 60px;
  gap: 40px;
`;

export default function SaraMaraForm({
  item,
  explanation,
  $type,
  setItem,
  setExplanation,
  mutate,
}) {
  const submit = () => {
    if (item && explanation) {
      mutate();
    } else {
      Swal.fire({
        icon: "error",
        text: "무엇을 고민하는지 적어주세요!",
      });
    }
  };
  return (
    <StyledQuestion $type={$type}>
      <TextInput
        label={"어떤 걸 사고싶어?"}
        placeholder={"에어팟프로"}
        id="제품"
        size={"small"}
        value={item}
        onChange={setItem}
      />
      <TextareaInput
        label={"왜 고민하고 있어?"}
        placeholder={
          "벌써 세 번 잃어버렸는데,이번에 사면 또 잃어버릴 것 같아서 못 사겠어..."
        }
        id="설명"
        size={"small"}
        value={explanation}
        onChange={setExplanation}
      />

      <BasicButton
        size={"small"}
        label={"사야할까?"}
        color={"white"}
        onClick={submit}
        $type={$type}
        $backgroundColor={$type === "sara" ? "blue" : "red"}
      />
    </StyledQuestion>
  );
}

SaraMaraForm.propTypes = {
  item: PropTypes.string,
  explanation: PropTypes.string,
  $type: PropTypes.oneOf(["sara", "mara"]).isRequired,
  setItem: PropTypes.func,
  setExplanation: PropTypes.func,
  mutate: PropTypes.func,
};

SaraMaraForm.defaultProps = {
  setItem: undefined,
  setExplanation: undefined,
  mutate: () => Swal.fire(),
};