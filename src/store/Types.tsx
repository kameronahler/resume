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
  listJSON?: { list: string[] }
  title?: string
}
export interface PropsEntry {
  dateEnd?: string
  dateStart?: string
  description?: string
  listJSON?: { list: string[] }
  title?: string
  titleDesktopHidden?: boolean
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
