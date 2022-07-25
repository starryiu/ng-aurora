import { SafeUrl } from '@angular/platform-browser';

export interface ArticleInfo {
  title: string;
  src: string;
  description: string;
}

export interface HomeArticle {
  id: number;
  number: number;
  created_at: string;
  title: string;
  milestone: any;
  labels: any;
  state: string;
  info: ArticleInfo;
}

export interface ArchiveArticle {
  id: number;
  number: number;
  created_at: string;
  title: string;
  milestone: any;
  labels: any;
  state: string;
}

export interface PageCategory {
  cover: SafeUrl;
  created_at: string;
  description: string;
  id: number;
  number: number;
  open_issues: number;
  state: string;
  summary: string;
  title: string;
}

export interface PageLabels {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

export interface Resource {
  cover: SafeUrl;
  description: string;
  link: string;
  name: string;
}

export interface Essay {
  created_at: string;
  body: string;
}

export interface Friend {
  avatar: string;
  cover: SafeUrl;
  link: string;
  name: string;
}

export interface About {
  title: string;
  content: string;
}

export interface Article {
  number: number;
  state: string;
  title: string;
  milestone: any;
  labels: any;
  id: number;
  created_at: string;
  body: string;
  info: ArticleInfo;
}

export enum Theme {
  touhou,
  school,
}
