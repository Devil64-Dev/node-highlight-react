import { DataNode, TreeNode } from 'node-highlight';
import { createElement } from 'react';
import { CodeElement } from '../types';

const processData = (data: DataNode, prefix: string): TreeNode[] => {
  /**
   * Transform kind property of each TreeNode element if exists.
   *
   * By default kind looks like `keyword.language`, it converts to `${prefix}keyword language`.
   *
   * If the current node is a sublanguage it converts `xml` to `language-xml`.
   *
   * @param {TreeNode} node
   * @returns {TreeNode}
   */
  const processChildren = (node: TreeNode): TreeNode => {
    if (typeof node === 'string') {
      return node;
    }

    // process scope
    const scope = node.kind.split('.').map((_scope, index) => {
      if (!node.subLanguage && index === 0) {
        return `${prefix}${_scope}`;
      }
      if (index === 0) {
        return `language-${_scope}`;
      }

      return _scope;
    }).join(' ');

    node.kind = scope;

    node.children = node.children.map(processChildren);

    return node;
  };
  const _data = data.children.map(processChildren);

  return _data;
};

/**
 * Return an array of both string or React elements. See `Element`.
 *
 * @param node
 * @param prefix `className` prefix.
 * @returns
 */
const buildElements = (node: DataNode, prefix = 'nhgl-') => {
  let _key = 1;
  const processChildren = (children: TreeNode): CodeElement => {
    const _root = children;

    if (typeof _root === 'string') {
      return _root;
    }
    const _childs: CodeElement[] = _root.children.map(processChildren);
    const element = createElement(
      'span',
      {
        key: `${_key}-${_root.kind}`,
        children: _childs,
        className: _root.kind,
      },
    );

    _key += 1;
    return element;
  };

  return processData(node, prefix).map(processChildren);
};

export default buildElements;
