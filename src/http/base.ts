import { AxiosRequestConfig } from 'axios'

export const base_url = 'https://api.muxiaoguo.cn/'
export const time_out = 5000

export const config:AxiosRequestConfig = {
    baseURL: base_url,
    timeout: time_out
}