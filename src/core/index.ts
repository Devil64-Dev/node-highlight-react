import { NativeLanguages, NodeHighlight } from 'node-highlight';
import { createElement } from 'react';
import buildElements from './builder';
import { CodeElement } from '../types';

const _highlight = (
  code: string,
  language: NativeLanguages,
  classPrefix = 'nhgl-',
): CodeElement[] => {
  const result = new NodeHighlight({ escapeHTML: false, classPrefix }).highlight(code, language);

  if (!result._status) {
    return [createElement(
      'span',
      { children: [result.value], key: '', className: `${classPrefix}$${language}` },
    )];
  }

  return buildElements(result._emitter.rootNode, classPrefix);
};

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
export const highlight = async (
  code: string,
  language: NativeLanguages,
  prefix?: string,
): Promise<CodeElement[]> => _highlight(code, language, prefix);

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
export const highlightSync = (
  code: string,
  language: NativeLanguages,
  prefix?: string,
): CodeElement[] => _highlight(code, language, prefix);
