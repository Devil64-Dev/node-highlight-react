import { NativeLanguages } from 'node-highlight';
import { createElement } from 'react';
import { highlightSync, highlight } from './core';

interface Props {
  language: NativeLanguages;
  className?: string;
  prefix?: string;
  code?: string;
  children?: string;
}

const CodeHighlight = ({
  language,
  code,
  children,
  className,
  prefix = 'nhgl-',
}: Props) => {
  const _code = code || children.toString();
  const _class = className || `${prefix}${language}`;

  return createElement(
    'pre',
    { className: _class, children: highlightSync(_code, language, prefix) },
  );
};

export { CodeHighlight, highlightSync, highlight };
