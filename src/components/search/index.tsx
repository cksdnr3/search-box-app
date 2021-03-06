import React, { useCallback, useState } from "react";
import styled from "styled-components";
import InformationBox from "../information-box";
import SearchBox from "../search-box";

// type Props = ReturnType<typeof useSearch>;

function Search() {
  const [selectedPostId, setSelectedPostId] = useState<string>("");

  const selectPost = useCallback((id: string) => {
    setSelectedPostId(id);
  }, []);

  return (
    <Wrapper>
      <SearchBox selectPost={selectPost} selectedPostId={selectedPostId} />
      <InformationBox selectedPostId={selectedPostId} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 0.5rem;
  border-radius: 8px;
  width: 777px;
  height: 570px;
  background-color: #fff;
  z-index: 0;
`;

export default Search;
