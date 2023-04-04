/**
 * integrate - create a deeplink URL to the Notific Integrate page
 */
export type IntegratorConfig = {
    name: string;
    canister_id: string;
    allowed_callbacks?: string[] | undefined;
    notify_callback?: {
        principal: string;
        method: string;
    } | undefined;
    secret?: string[] | undefined;
};
declare function createUrl(config: IntegratorConfig): string;
export { createUrl };
