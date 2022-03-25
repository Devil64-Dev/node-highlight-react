/// <reference types='react' />
import { NativeLanguages } from 'node-highlight';
import { CodeElement } from './types';

interface Props {
    language: NativeLanguages;
    className?: string;
    prefix?: string;
    code?: string;
    children?: string;
}
declare const CodeHighlight: (props: Props) => import('react').DetailedReactHTMLElement<{
    className: string;
    children: import('./types').CodeElement[];
}, HTMLElement>;

/**
 * Highlight `code` using `node-highlight` and returns an array of React nodes.
 *
 * See `CodeElement` type.
 *
 * @param code code to highlight
 * @param language language name. Must be supported for 'node-highlight'.
 * @param prefix string to pass to `node-highlight`.
 *
 * @returns {Promise<CodeElement[]>} a list of both strings or React elements.
 */
declare const highlight: (
  code: string,
  language: NativeLanguages,
  prefix?: string) => Promise<CodeElement[]>;
/**
 * Highlight `code` using `node-highlight` and returns an array of React nodes.
 *
 * See `CodeElement` type.
 *
 * @param code code to highlight
 * @param language language name. Must be supported for 'node-highlight'.
 * @param prefix string to pass to `node-highlight`.
 *
 * @returns {CodeElement[]} a list of both strings or React elements.
 */
declare const highlightSync: (
  code: string,
  language: NativeLanguages,
  prefix?: string,
) => CodeElement[];

export { CodeHighlight, highlightSync, highlight };
