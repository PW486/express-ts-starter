export default interface CommonRoute {
  path: string,
  method: string,
  auth?: boolean,
  permission?: any,
  upload?: any,
  validator?: any,
  action: any
}
