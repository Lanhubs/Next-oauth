import { Box, Button, Center, Flex, Input, Stack, Text } from "@mantine/core";
import {
  IconAd,
  IconPlus,
  IconServicemark,
  IconTallymark1,
  IconTallymark3,
  IconTrash,
} from "@tabler/icons";
import { useEffect, useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    /* fetch("/api/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        // setTodos(data.todos);
      })
      .catch((e) => console.log(e)); */
  }, [todo, todos]);
  const addTodo = () => {
    fetch("/api/addtodo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setTodos(data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      style={{ algnitems: "center", justifyContent: "center" }}
      bg="dark"
    >
      <Box bg="orange" w="60%" h="60%" m="auto">
        <Flex
          spacing="sm"
          dir="horizontal"
          mx="auto"
          my="1rem"
          w="90%"
          bg="grape"
          style={{ overflow: "hidden" }}
        >
          <Input
            placeholder="todo"
            style={{ flex: 1 }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button onClick={addTodo}>
            {" "}
            Add todo <IconPlus />
          </Button>
        </Flex>
        <Stack w="90%" mx="auto">
          {todos.length === 0 ? (
            <EmptyTodo />
          ) : (
            todos?.map((item) => {
              return (
                <Box
                  display="flex"
                  alignItem="center"
                  style={{ overflow: "hidden" }}
                  bg="#fff"
                  key={item._id}
                >
                  <Text pl="10px" style={{ flex: 1 }}>
                    {item.todo}
                  </Text>

                  <Button>
                    <IconTrash />
                  </Button>
                </Box>
              );
            })
          )}
        </Stack>
      </Box>
    </Box>
  );
}

const EmptyTodo = () => (
  <Box bg="none" w="90%" h="full" style={{ flex: 1 }}>
    <Text m="auto" fs={20} tt="capitalize">
      you have not set any todo
    </Text>
  </Box>
);
