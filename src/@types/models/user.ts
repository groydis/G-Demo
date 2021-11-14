export type friend = {
  id: number,
  name: string
}

export type user = {
  index: number,
  guid: string,
  isActive: boolean,
  picture: string,
  age: number,
  eyeColor: string,
  name: string,
  gender: string,
  company: string,
  email: string,
  phone: string,
  address: string,
  about: string,
  registered: string,
  latitude: number,
  longitude: number,
  tags: string[],
  friends: friend[],
  greeting: string,
  favoriteFruit: string,
}
