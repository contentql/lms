import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { _mock, _socials, _courses } from "src/_mock";
import { paths } from 'src/routes/paths';
import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { ICourseProps } from 'src/types/course';
import { useBoolean } from 'src/hooks/use-boolean';
import { PlayerDialog } from 'src/components/player';
import { fShortenNumber } from 'src/utils/format-number';
import { useResponsive } from 'src/hooks/use-responsive';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import Advertisement from "../../advertisement";
import ElearningNewsletter from "../elearning-newsletter";
import ReviewElearning from "../../review/elearning/review-elearning";
import ElearningCourseListSimilar from "../list/elearning-course-list-similar";
import ElearningCourseDetailsInfo from "../details/elearning-course-details-info";
import ElearningCourseDetailsSummary from "../details/elearning-course-details-summary";
import ElearningCourseDetailsTeachersInfo from "../details/elearning-course-details-teachers-info";

// ----------------------------------------------------------------------

type Props = {
  course: ICourseProps;
};

export default function ElearningCourseDetailsHero({ course }: Props) {
  const {
    id,
    slug,
    level,
    lessons,
    category,
    coverUrl,
    languages,
    bestSeller,
    totalHours,
    description,
    ratingNumber,
    totalQuizzes,
    totalReviews,
    totalStudents,
    teachers = [],
  } = course;

  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const videoOpen = useBoolean();

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.neutral',
          pb: { xs: 5, md: 10 },
        }}
      >
        <Container sx={{ overflow: 'hidden' }}>
          <CustomBreadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Courses', href: paths.eLearning.courses },
              { name: course.slug || '' },
            ]}
            sx={{
              pt: 5,
              mb: { xs: 5, md: 10 },
            }}
          />

          <Container
            sx={{
              overflow: "hidden",
              pb: { xs: 15, md: 10 },
            }}
          >
            <Grid container spacing={{ xs: 5, md: 8 }}>
              {!mdUp && (
                <Grid xs={12}>
                  <ElearningCourseDetailsInfo course={course} />
                </Grid>
              )}

              <Grid xs={12} md={7} lg={8}>
                <ElearningCourseDetailsSummary course={course} />

                <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
                  <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
                    Share:
                  </Typography>

                  <Stack direction="row" alignItems="center" flexWrap="wrap">
                    {_socials.map((social) => (
                      <Button
                        key={social.value}
                        size="small"
                        variant="outlined"
                        startIcon={<Iconify icon={social.icon} />}
                        sx={{
                          m: 0.5,
                          flexShrink: 0,
                          color: social.color,
                          borderColor: social.color,
                          "&:hover": {
                            borderColor: social.color,
                            bgcolor: alpha(social.color, 0.08),
                          },
                        }}
                      >
                        {social.label}
                      </Button>
                    ))}
                  </Stack>
                </Stack>

                <Divider sx={{ my: 5 }} />

                <ElearningCourseDetailsTeachersInfo
                  teachers={course.teachers}
                />
              </Grid>

              <Grid xs={12} md={5} lg={4}>
                <Stack spacing={5}>
                  {mdUp && <ElearningCourseDetailsInfo course={course} />}

                  <Advertisement
                    advertisement={{
                      title: "Advertisement",
                      description:
                        "Duis leo. Donec orci lectus, aliquam ut, faucibus non",
                      imageUrl: _mock.image.course(7),
                      path: "",
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Container>

          {mdUp && <Divider />}

          <ReviewElearning />
        </Container>
      </Box>

      <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} />
    </>
  );
}
