import { ResponseMessage } from "./response.message";

export interface DataResponse<T> {
  responseStatus:ResponseMessage,
  data: T
}
