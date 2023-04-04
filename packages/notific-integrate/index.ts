/**
 * integrate - create a deeplink URL to the Notific Integrate page
 */

export type IntegratorConfig = {
  name: string
  canister_id: string
  allowed_callbacks?: string[] | undefined
  notify_callback?:
    | {
        principal: string
        method: string
      }
    | undefined
  secret?: string[] | undefined
}

function createUrl(config: IntegratorConfig): string {
  const integrator = window.btoa(JSON.stringify(config))
  const url = new URL(`https://notific.ooo/`)
  url.searchParams.set("integrator", integrator)
  return url.toString()
}

export { createUrl }
