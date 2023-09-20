"use client";
import React, { useState } from "react";
import { _courses, _mock, _socials } from "src/_mock";
import { Stack, Grid } from "@mui/material";
import Iconify from "src/components/iconify/iconify";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ICourseLessonProp } from "src/types/course";

const LESSONS = [...Array(9)].map((_, index) => ({
  id: _mock.id(index),
  duration: 60 - index,
  title: `Lesson ${index + 1}`,
  videoPath: _mock.video(index),
  description: _mock.sentence(index),
  unLocked: [0, 1, 2].includes(index),
}));

const page = () => {
  const [selectedLesson, setSelectedLesson] =
    useState<ICourseLessonProp | null>(LESSONS[0]);

  const onSelectedLesson = (lesson: ICourseLessonProp) =>
    setSelectedLesson(lesson);

  const renderList = (
    <Stack
      spacing={0.5}
      sx={{
        p: 1,
        overflowY: "scroll",
        width: { xs: 1, md: 0.5 },
        height: { xs: 320, md: 640 },
      }}
    >
      {LESSONS?.map((lesson) => {
        const selected = selectedLesson?.id === lesson.id;

        const playIcon = selected ? "carbon:pause-outline" : "carbon:play";

        return (
          <ListItemButton
            key={lesson.id}
            selected={selected}
            disabled={!lesson.unLocked}
            onClick={() => onSelectedLesson(lesson)}
            sx={{ borderRadius: 1 }}
          >
            <Iconify
              width={24}
              icon={!lesson.unLocked ? "carbon:locked" : playIcon}
              sx={{
                mr: 2,
                ...(selected && {
                  color: "primary.main",
                }),
                ...(!lesson.unLocked && {
                  color: "text.disabled",
                }),
              }}
            />

            <ListItemText
              primary={lesson.title}
              secondary={lesson.description}
              primaryTypographyProps={{
                typography: "subtitle1",
                sx: {
                  ...(selected && {
                    color: "primary.main",
                  }),
                },
              }}
              secondaryTypographyProps={{
                noWrap: true,
                component: "span",
              }}
            />
          </ListItemButton>
        );
      })}
    </Stack>
  );
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div>our Text component</div>
        </Grid>
        <Grid item xs={4}>
          {renderList}
        </Grid>
      </Grid>
    </>
  );
};

export default page;
