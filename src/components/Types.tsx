// public
export type TypeContentfulPosts = InterfaceContentfulPost[] | unknown[] | null

export interface InterfaceContentfulPost {
  fields: any
  metadata: {
    tags: { sys: { id: string } }[]
  }
  sys: { id: string }
}
export interface PropsExperienceEntries {
  dateEnd?: string
  dateStart?: string
  description?: string
  listJSON?: { list: string[] }
  title?: string
}
export interface PropsEntry {
  dateEnd?: string
  dateStart?: string
  description?: string
  listJSON?: { list: string[] }
  title?: string
  metadata?: {}
}
export interface PropsEntryYear {
  dateEnd: string
  dateStart: string
}

export interface PropsEntryList {
  listJSON: {
    list: string[]
  }
}
