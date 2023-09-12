import { Pagination } from "antd";
import { PaginationContainer } from "./PaginationWrapper.styles";

const PaginationWrapper = ({ defaultCurrent, total, onChange }) => {
  return (
    <PaginationContainer>
      <Pagination
        defaultCurrent={defaultCurrent}
        total={total}
        onChange={onChange}
      />
    </PaginationContainer>
  );
};

export default PaginationWrapper;
