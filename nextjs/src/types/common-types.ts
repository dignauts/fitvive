import { ReactNode } from 'react';

export type CatchAllPagesType = {
  pages: string[] | undefined;
}

export type ChildrenType = ReactNode | ReactNode[];

export type IdentifierType = {
  id?: null | string;
}

export type LinkType = {
  href: string;
  isExternal?: boolean;
  name: string;
}
