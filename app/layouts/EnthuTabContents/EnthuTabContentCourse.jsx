import EnthuImage from "@/app/components/EnthuImage";
import { Box } from "@mui/material";
import IconRefresh from "../../../public/images/icons/icon-refresh.svg";
import IconEdit from "../../../public/images/icons/icon-edit.svg";
import { EnthuTabCourseData } from "../../data/EnthuTabCourseData";

const EnthuTabContentCourse = () => {
  return (
    <>
      <Box className="border-b border-solid border-gray-700 py-[10px] px-4 flex flex-wrap items-center justify-end gap-x-[60px]">
        <EnthuImage src={IconRefresh} alt="Icon refresh" />
        <EnthuImage src={IconEdit} alt="Icon edit" />
      </Box>
      <Box className="py-5 desktop-lg:py-7 px-4 text-sm font-medium text-black-100">
        <p>
          A comprehensive guitar course typically covers a range of topics to
          help students progress from absolute beginners to intermediate and
          even advanced levels. The content of a guitar course can vary
          depending on the level of expertise and the specific focus (e.g.,
          acoustic, electric, classical), but here is a general outline of what
          you might expect to find:
        </p>
        <ol className="mt-1 list-decimal list-inside pl-2">
          {EnthuTabCourseData?.map((curElem) => {
            const { id, title, content } = curElem;
            return (
              <li key={id}>
                {title}
                {content}
              </li>
            );
          })}
        </ol>
        <p>
          Throughout the course, there should be plenty of practical exercises,
          play-alongs, and opportunities for students to apply what they've
          learned in real musical contexts. Additionally, some courses may offer
          supplementary materials like video lessons, online forums for
          interaction, and personalized feedback from instructors to enhance the
          learning experience.
        </p>
      </Box>
    </>
  );
};

export default EnthuTabContentCourse;
