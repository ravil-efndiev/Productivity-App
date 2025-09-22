import { Container, Paper, Typography } from '@mui/material'
import React, { type PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
    title: string;
    onSubmit: (e: React.FormEvent) => void;
}

function Form({ title, onSubmit, children }: Props) {
  return (
    <Container sx={{
      display: "flex",
      mx: "auto",
      p: 5,
    }}>
      <Paper
        elevation={7}
        sx={{
          p: 5,
          width: "30%",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <form onSubmit={onSubmit}>
          <Typography variant="h1" sx={{ textAlign: "center", my: 2, color: "secondary.main" }}>{title}</Typography>
          {children}
        </form>
      </Paper>
    </Container>
  )
}

export default Form;
