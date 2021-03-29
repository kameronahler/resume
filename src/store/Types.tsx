// public
export interface PropsAppSection {
  heading: string
}

export type TypeContentfulPosts = InterfaceContentfulPost[] | unknown[] | null

export interface InterfaceContentfulPost {
  fields: any
  metadata: {
    tags: { sys: { id: string } }[]
  }
  sys: { id: string }
}
export interface PropsEntriesExperience {
  dateEnd?: string
  dateStart?: string
  description?: string
  order?: number
  popoverText?: string
  listJSON?: { list: string[] }
  title?: string
}
export interface PropsEntry {
  dateEnd?: string
  dateStart?: string
  description?: string
  listJSON?: { list: string[] }
  metadata?: object
  order?: number
  popoverText?: string
  title?: string
  titleDesktopHidden?: boolean
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
