"use client";
import { 
  Container, 
  Space, 
  Text, 
  Title, 
  Rating, 
  Textarea,
  Button
} from "@mantine/core";
import { useState } from 'react';
export default function Home() {

  const [value, setValue] = useState(0);

  return (
    <>
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Space h="sm"/>
      <Title order={4}>Your rating</Title>
      <Rating 
        value={value} 
        onChange={setValue} 
        defaultValue={0} 
        size="28.5px"/>
      <Space h="md"/>
      <Textarea
      label="Your review"
      placeholder="Do you enjoy eating?"
      />
      <Button variant="filled" color="orange">
        Submit Review
      </Button>

      <Text ta="center" my="md">
        Copyright © 2024 Korn Sriwattana 660610738
      </Text>
    </Container>
    </>
  );
}
