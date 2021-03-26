// public
export interface PropsEntry {
  dateEnd?: string
  dateStart?: string
  description?: string
  listJSON?: { list: string[] }
  title?: string
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

export type TypeContentfulPosts = Object[] | unknown[] | null
