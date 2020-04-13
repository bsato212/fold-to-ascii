/* eslint-disable @typescript-eslint/camelcase */

declare namespace fold_to_ascii {
  const mapping: Map<string, string>;

  function foldMaintaining(str: string, replacement?: string): string;

  function foldReplacing(str: string): string;
}

export = fold_to_ascii;
