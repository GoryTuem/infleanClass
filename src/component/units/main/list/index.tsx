import * as s from "./listStyle";

export default function MainList() {
  return (
    <s.Row>
      <s.Column>
        <s.MainImg src="/image/mainImage7.jpeg" alt="Image 1" />
      </s.Column>
      <s.Column>
        <s.MainImg src="/image/mainImage2.jpg" alt="Image 2" />
      </s.Column>
      <s.Column>
        <s.MainImg src="/image/mainImage3.jpg" alt="Image 3" />
      </s.Column>
      <s.Column>
        <s.MainImg src="/image/mainImage4.jpg" alt="Image 1" />
      </s.Column>
      <s.Column>
        <s.MainImg src="/image/mainImage5.jpg" alt="Image 2" />
      </s.Column>
      <s.Column>
        <s.MainImg src="/image/mainImage1.jpg" alt="Image 3" />
      </s.Column>
    </s.Row>
  );
}
