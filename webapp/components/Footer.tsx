import React from "react"
import { Box } from "@chakra-ui/react"
import styles from "../styles/Home.module.css";

export default function Footer(props: any) {
  return (
    <Box {...props}>
      <footer className={styles.footer}>
        Copyright &copy; 2022 - University of South Carolina
      </footer>
    </Box>
  )
}

