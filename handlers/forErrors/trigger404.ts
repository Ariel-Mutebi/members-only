import NotFoundError from "../../errors/NotFoundError.ts";

function trigger404() {
  throw new NotFoundError();
}

export default trigger404;