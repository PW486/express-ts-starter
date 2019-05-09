interface Error {
  statusCode?: number;
  message: string;
  joi?: {
    message: string;
  };
}
