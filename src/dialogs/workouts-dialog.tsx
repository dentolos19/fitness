"use client";

import { Info } from "@mui/icons-material";
import { Dialog, DialogTitle, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import WorkoutConfirmDialog from "./workout-confirm-dialog";

const workouts = [
  {
    name: "Leg Curls",
    category: "Legs",
    url: "https://youtu.be/ELOCsoDSmrg",
  },
  {
    name: "Leg Raises",
    category: "Legs",
    url: "https://youtu.be/JB2oyawG9KI"
  },
  {
    name: "Leg Press",
    category: "Legs",
    url: "https://youtu.be/IZxyjW7MPJQ"
  },
  {
    name: "Regular Squats",
    category: "Legs",
    url: "https://youtu.be/YaXPRqUwItQ"
  },
  {
    name: "Sumo Squats",
    category: "Legs",
    url: "https://youtu.be/2C-uNgKwPLE"
  }
];

export default function WorkoutsDialog({
  open,
  onClose,
}: {
  open?: boolean;
  onClose: (value: string | undefined) => void;
}) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const closeHandler = () => onClose(undefined);
  const clickHandler = (value: string) => onClose(value);

  return (
    <>
      <WorkoutConfirmDialog open={confirmOpen} onClose={() => setConfirmOpen(false)}/>
      <Dialog open={open === true} onClose={closeHandler} maxWidth={"sm"} fullWidth={true}>
        <DialogTitle>Select A Workout</DialogTitle>
        <List sx={{ pt: 0 }}>
          {workouts.map((workout) => (
            <ListItem key={workout.name} secondaryAction={
              <IconButton>
                <Info/>
              </IconButton>
            }>
              <ListItemButton onClick={() => setConfirmOpen(true)}>
                <ListItemText primary={workout.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
}