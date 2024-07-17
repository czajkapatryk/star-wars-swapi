import { AxiosInstance } from 'axios'
declare module '*.vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance
  }
}
