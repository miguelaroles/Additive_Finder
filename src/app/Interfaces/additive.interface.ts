export interface Additive {
    id: string;
    name: string;
    level: string;
    type: string;
    info: string;
}

export interface wikipediaResponse {
  content_urls: any;
  description: string;
  description_source: string;
  dir: string;
  displaytitle: string;
  extract: string;
  extract_html: string;
  lang: string;
  namespace: any;
  originalimage: any;
  pageid: number;
  revision: string;
  thumbnail: any
  tid: string;
  timestamp: string;
  title: string;
  titles: any;
  type: string;
  wikibase_item: string;
}
