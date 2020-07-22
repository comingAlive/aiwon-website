import React  from "react";
import { LoaderContainer, LoaderDiv, LoaderSpan } from "./loader.style";

const Loader = () => {
  return (
    <LoaderContainer   >
      <LoaderDiv >
        <LoaderSpan />
        <LoaderSpan />
      </LoaderDiv>
    </LoaderContainer>
  );
};

export default Loader;
