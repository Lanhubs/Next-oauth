"use client";
import {
  Box,
  Button,
  Image,
  Center,
  Flex,
  Input,
  Stack,
  Text,
} from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";

import { IconBrandGoogle } from "@tabler/icons";

export default function Home({}) {
  const { data: session } = useSession();

  return (
    <Box
      w="100vw"
      h="100vh"
      style={{ algnitems: "center", justifyContent: "center" }}
      bg="dark"
    >
      {session ? (
        <>
          <Text>Sign in your email {session.user?.email}</Text>
          <Image width={70} height={30} src={session.user?.image} />
          <Text>{session.user?.name}</Text>
          <Text>{session?.expires}</Text>

          <Button onClick={() => signOut()}>
            <IconBrandGoogle /> Sign in
          </Button>
        </>
      ) : (
        <>
          <Text>You are not signed in</Text>
          <Button onClick={() => signIn()}>
            <IconBrandGoogle /> Sign in
          </Button>
        </>
      )}
    </Box>
  );
}

/* Home.getInitialProps = async () => {
  const { data } = useSession();
  const {session}= data;
  return { session  };
};
 */
