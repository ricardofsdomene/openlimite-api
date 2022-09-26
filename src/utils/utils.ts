export type Auth = {
  username: string;
  password: string;
};

export type Keys = {
  headers: {
    customerId: string;
    organizationId: string;
  };
  metadata?: {
    accountId: string;
  };
};

// pass it to .env

export const auth: Auth = {
  username: "3kCeFA6udeoY7blYczKvKzBxeWJPOe2Iaut0u6ccG2c",
  password: "",
};

export const API_URL = "https://challenge.hackathonbtg.com";