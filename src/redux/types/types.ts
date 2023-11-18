export type UserType = {
  address: {
    city: string,
    geo: {
      lat: string,
      lng: string
    }
    street: string,
    suite: string
    zipcode: string
  }
  company: {
    bs: string,
    catchPhrase: string,
    name: string,
  }
  email: string,
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string
}

export type SearchType = {
  search: string
}

export interface userSliceState {
  status: 'wait' | 'loading' | 'success' | 'error',
  users: UserType[]
}

//input

export interface InputSliceState {
  updateValue: string
}