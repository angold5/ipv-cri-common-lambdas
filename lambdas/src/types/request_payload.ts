export interface RequestPayload {
    grant_type: string;
    code: string;
    redirectUri: string;
    client_assertion_type: string;
    client_assertion: string;
};
