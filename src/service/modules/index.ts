import { axios } from '@/service/service'
import { LicenseReq } from './types'

export function generateKey(): any {
  return axios({
    url: '/generateKey',
    method: 'get'
  })
}

export function generateLicense(data: LicenseReq): any {
  return axios({
    url: '/generateLicense',
    method: 'post',
    data
  })
}