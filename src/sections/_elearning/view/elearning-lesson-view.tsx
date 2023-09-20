"use client";

import { useEffect } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { alpha } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import Iconify from "src/components/iconify";
import { useBoolean } from "src/hooks/use-boolean";
import { _mock, _socials, _courses } from "src/_mock";
import { useResponsive } from "src/hooks/use-responsive";
import { SplashScreen } from "src/components/loading-screen";

import { paths } from 'src/routes/paths';
import Advertisement from "../../advertisement";
import ElearningNewsletter from "../elearning-newsletter";
import ReviewElearning from "../../review/elearning/review-elearning";
import ElearningCourseListSimilar from "../list/elearning-course-list-similar";
import ElearningCourseLessonHero from "../details/elearning-course-lesson-hero";
import ElearningCourseDetailsInfo from "../details/elearning-course-details-info";
import ElearningCourseDetailsSummary from "../details/elearning-course-details-summary";
import ElearningCourseDetailsTeachersInfo from "../details/elearning-course-details-teachers-info";
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

const _mockCourse = _courses[0];

export default function ElearningLessonView() {
  const mdUp = useResponsive("up", "md");

  const loading = useBoolean(true);

  const courseSimilar = _courses.slice(-3);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (loading.value) {
    return <SplashScreen />;
  }

  return (
    <>
      <ElearningCourseLessonHero course={_mockCourse} />
    </>
  );
}
