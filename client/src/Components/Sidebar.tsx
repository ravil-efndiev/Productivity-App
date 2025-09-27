import React, { useState, type PropsWithChildren } from "react";
import type { Group } from "../types";
import { Box, Paper } from "@mui/material";

export function Sidebar() {
  const [groups, setGroups] = useState<Group[]>([
    { name: "Group 1" },
    { name: "Group 2" },
    { name: "Group 3" },
  ]);

  return (
    <Paper
      elevation={6}
      sx={{
        height: "100vh",
        width: "20%",
      }}
    >
      {groups.map((group) => (
        <Box
          sx={{
            p: 2,
            m: 1,
            bgcolor: "#252525",
            cursor: "pointer",
            transition: "scale 100ms",
            ":hover": { scale: 1.01 },
          }}
        >
          {group.name}
        </Box>
      ))}
    </Paper>
  );
}
