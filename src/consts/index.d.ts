declare const MAIN_TITLE = "Resultados";
declare const BASE_URL: string;
declare const CLIENT_ID: string;
declare const DEV: boolean;
declare const AUTH_PARAMS: {
    SCOPE: {
        KEY: string;
        VALUE: string[];
    };
};
declare const PATH_ROUTES: {
    readonly AUTHENTICATED: {
        readonly CONVERSION: "conversion";
        readonly CONSOLIDATED: "consolidated";
        readonly LEADS: "leads";
        readonly GROUPS: "group";
        readonly ACCOUNT: "account";
        readonly PAGE: "page";
        readonly ENGAGEMENT: "engagement";
        readonly VIDEO_VIEWS: "video-views";
        readonly AGE_GENDER: "age-and-gender";
        readonly DEVICE: "device";
        readonly CHANNEL: "channel";
        readonly CUSTOM: "custom";
        readonly SALES: "sales";
        readonly STATEMENT: "statement";
    };
};
export { AUTH_PARAMS, MAIN_TITLE, BASE_URL, CLIENT_ID, DEV, PATH_ROUTES };
