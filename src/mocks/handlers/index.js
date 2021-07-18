import { rest } from "msw";
import { students } from "mocks/data/students";
import { groups } from "../data/grops";

export const handlers = [
  rest.get("/groups", (req, res, context) => {
    return res(context.status(200), context.json({ groups }));
  }),
  rest.get("/students/:group", (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = students.filter(
        (student) => student.group === req.params.group
      );
      return res(
        ctx.status(200),
        ctx.json({
          students: matchingStudents,
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        students,
      })
    );
  }),
];
