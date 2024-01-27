import React from "react";
import {
  Html,
  Body,
  Text,
  Link,
  Preview,
  Container,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body>
        <Container>
          <Text>Hello world!</Text>
          <Link href="htttps://codewithmosh.com">www.codewithmosh.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
