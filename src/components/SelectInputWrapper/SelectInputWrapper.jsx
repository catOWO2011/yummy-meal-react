import { Select, Tag } from "antd";

export default function SelectInputWrapper({ options, onChange }) {
  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        // color={"gold"}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <Select
      mode="multiple"
      tagRender={tagRender}
      style={{ width: "100%" }}
      options={options}
      onChange={onChange}
    />
  );
}
