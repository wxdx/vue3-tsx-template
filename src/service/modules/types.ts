interface PairKey {
  privateKey: string
  publicKey: string
}

interface LicenseReq {
  authOrgId: string
  pk: string
  expireDate: string
}

export { PairKey, LicenseReq }
