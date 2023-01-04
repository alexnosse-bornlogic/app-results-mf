const MAIN_TITLE = "Resultados";

const BASE_URL = process.env.BASE_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const DEV = process.env.CLIENT_ID === "true";

const AUTH_PARAMS = {
  SCOPE: {
    KEY: "scope",
    VALUE: ["email", "openid", "profile", "offline_access", "graph_api_access"],
  },
};
const PATH_ROUTES = {
  AUTHENTICATED: {
    CONVERSION: "conversion",
    CONSOLIDATED: "consolidated",
    LEADS: "leads",
    GROUPS: "group",
    ACCOUNT: "account",
    PAGE: "page",
    ENGAGEMENT: "engagement",
    VIDEO_VIEWS: "video-views",
    AGE_GENDER: "age-and-gender",
    DEVICE: "device",
    CHANNEL: "channel",
    CUSTOM: "custom",
    SALES: "sales",
    STATEMENT: "statement",
  },
} as const;

export { AUTH_PARAMS, MAIN_TITLE, BASE_URL, CLIENT_ID, DEV, PATH_ROUTES };
