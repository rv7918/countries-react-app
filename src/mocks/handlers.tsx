import { rest } from "msw";
import { mainData } from "../shared/SharedData";

const mainQueryResponse = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mainData));
};

export const handlers = [
  rest.get(`https://restcountries.com/v3.1/all`, mainQueryResponse),
];
