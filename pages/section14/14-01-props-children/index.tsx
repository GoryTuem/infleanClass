import Example from "../../../src/component/units/14-props-children-example";
export default function PropsChildrenPage() {
  return (
    <div>
      <div>+++++++++++++빨간색 파란색 초록색++++++++++++</div>
      <Example school="신일 초등학교">
        <div>자식 요소 입니다 Children</div>
      </Example>
      <div>+++++++++++++빨간색 파란색 초록색++++++++++++</div>
    </div>
  );
}
