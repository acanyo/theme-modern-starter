export interface PostList {
  page: number;
  size: number;
  total: number;
  items: Item[];
  first: boolean;
  last: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
  totalPages: number;
}

export interface Item {
  metadata: Metadata;
  spec: Spec;
  status: Status;
  categories: Category[];
  tags: Tag[];
  contributors: Contributor[];
  owner: Owner;
  stats: Stats;
}

export interface Metadata {
  finalizers: string[];
  name: string;
  labels: Labels;
  annotations: Annotations;
  version: number;
  creationTimestamp: string;
}

export interface Labels {
  "content.halo.run/published": string;
  "content.halo.run/deleted": string;
  "content.halo.run/owner": string;
  "content.halo.run/visible": string;
  "content.halo.run/archive-year": string;
  "content.halo.run/archive-month": string;
  "content.halo.run/archive-day": string;
}

export interface Annotations {
  "content.halo.run/preferred-editor": string;
  "checksum/config": string;
  "content.halo.run/last-released-snapshot": string;
  "content.halo.run/permalink-pattern": string;
  "content.halo.run/last-associated-categories"?: string;
  "content.halo.run/last-associated-tags"?: string;
  "content.halo.run/stats"?: string;
  "checksum/content"?: string;
  fullTitle?: string;
  app_rating?: string;
  app_version?: string;
  app_os?: string;
  app_developer?: string;
  app_age?: string;
  app_download_url?: string;
  restrict_type?: string;
  answerLabel?: string;
  answerVal?: string;
  enable_aside?: string;
  enable_page_meta?: string;
  enable_passage_tips?: string;
  enable_collect_check?: string;
  enable_read_limit?: string;
  use_raw_content?: string;
  enable_comment?: string;
  enable_toc?: string;
  toc_depth?: string;
  img_max_width?: string;
  img_align?: string;
  enable_copy?: string;
  enable_donate?: string;
  enable_share?: string;
  enable_like?: string;
  enable_fold_long_code?: string;
}

export interface Spec {
  title: string;
  slug: string;
  releaseSnapshot: string;
  headSnapshot: string;
  baseSnapshot: string;
  owner: string;
  template: string;
  cover: string;
  deleted: boolean;
  publish: boolean;
  publishTime: string;
  pinned: boolean;
  allowComment: boolean;
  visible: string;
  priority: number;
  excerpt: Excerpt;
  categories: string[];
  tags: string[];
  htmlMetas: any[];
}

export interface Excerpt {
  autoGenerate: boolean;
  raw: string;
}

export interface Status {
  phase: string;
  conditions: Condition[];
  permalink: string;
  excerpt: string;
  inProgress: boolean;
  contributors: string[];
  hideFromList: boolean;
  lastModifyTime: string;
  observedVersion: number;
}

export interface Condition {
  type: string;
  status: string;
  lastTransitionTime: string;
  message: string;
  reason: string;
}

export interface Category {
  metadata: Metadata2;
  spec: Spec2;
  status: Status2;
  postCount: number;
}

export interface Metadata2 {
  finalizers: string[];
  name: string;
  annotations: Annotations2;
  version: number;
  creationTimestamp: string;
  generateName?: string;
}

export interface Annotations2 {
  "sy-color"?: string;
  "content.halo.run/permalink-pattern": string;
  "content.halo.run/last-hidden-state": string;
}

export interface Spec2 {
  displayName: string;
  slug: string;
  description: string;
  cover: string;
  template: string;
  postTemplate?: string;
  priority: number;
  children: string[];
  preventParentPostCascadeQuery: boolean;
  hideFromList: boolean;
}

export interface Status2 {
  permalink: string;
  postCount: number;
  visiblePostCount: number;
}

export interface Tag {
  metadata: Metadata3;
  spec: Spec3;
  status: Status3;
  postCount: number;
}

export interface Metadata3 {
  generateName?: string;
  finalizers: string[];
  name: string;
  annotations: Annotations3;
  version: number;
  creationTimestamp: string;
}

export interface Annotations3 {
  "content.halo.run/permalink-pattern": string;
}

export interface Spec3 {
  displayName: string;
  slug: string;
  color: string;
  cover: string;
}

export interface Status3 {
  permalink: string;
  visiblePostCount: number;
  postCount: number;
  observedVersion: number;
}

export interface Contributor {
  name: string;
  displayName: string;
  avatar?: string;
  permalink: string;
  metadata: Metadata4;
  bio?: string;
}

export interface Metadata4 {
  finalizers: string[];
  name: string;
  annotations: Annotations4;
  version: number;
  creationTimestamp: string;
}

export interface Annotations4 {
  "rbac.authorization.halo.run/role-names": string;
  "halo.run/avatar-attachment-name"?: string;
  "halo.run/last-avatar-attachment-name"?: string;
}

export interface Owner {
  name: string;
  displayName: string;
  avatar?: string;
  permalink: string;
  metadata: Metadata5;
  bio?: string;
}

export interface Metadata5 {
  finalizers: string[];
  name: string;
  annotations: Annotations5;
  version: number;
  creationTimestamp: string;
}

export interface Annotations5 {
  "rbac.authorization.halo.run/role-names": string;
  "halo.run/avatar-attachment-name"?: string;
  "halo.run/last-avatar-attachment-name"?: string;
}

export interface Stats {
  visit: number;
  upvote: number;
  comment: number;
}
