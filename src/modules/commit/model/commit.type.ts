export type CommitResponse = {
  id: string;
  message: string;
  author: { name: string; email: string };
  date: string;
};

export type Commit = {
  id: string;
  message: string;
  author: {
    name: string;
    email: string;
  };
  date: Date;
};
