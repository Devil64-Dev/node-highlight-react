import { DetailedReactHTMLElement } from 'react';

export type CodeElement = DetailedReactHTMLElement<
{ children: CodeElement[], key: string, className: string },
HTMLElement
> | string;
