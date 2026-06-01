import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

interface Token {
  content: string;
  type?: 'comment' | 'string' | 'keyword' | 'number' | 'punctuation' | 'heading' | 'plain';
}

const TOKEN_STYLES: Record<NonNullable<Token['type']>, string> = {
  comment: 'text-zinc-500',
  string: 'text-emerald-300',
  keyword: 'text-sky-300',
  number: 'text-amber-300',
  punctuation: 'text-zinc-400',
  heading: 'text-orange-300',
  plain: 'text-zinc-100',
};

const KEYWORD_PATTERN =
  /\b(true|false|null|undefined|const|let|var|function|return|export|default|import|from|async|await|interface|type)\b/;

function classifyToken(token: string, language: string): Token['type'] {
  if (!token) return 'plain';
  if (language === 'markdown' && /^(#{1,6}|\-|\*|\d+\.)/.test(token)) return 'heading';
  if (/^(\/\/|#|<!--)/.test(token)) return 'comment';
  if (/^["'`].*["'`]$/.test(token)) return 'string';
  if (/^[\[\]{}():.,=<>/-]+$/.test(token)) return 'punctuation';
  if (/^\d+$/.test(token)) return 'number';
  if (KEYWORD_PATTERN.test(token)) return 'keyword';
  return 'plain';
}

function tokenizeLine(line: string, language: string): Token[] {
  if (!line) return [{ content: ' ', type: 'plain' }];

  const parts =
    line.match(/"[^"]*"|'[^']*'|`[^`]*`|\/\/.*$|<!--.*?-->|[#*-]+|\d+|[A-Za-z_][A-Za-z0-9._-]*|[^\w\s]+|\s+/g) ??
    [line];

  return parts.map((content) => ({
    content,
    type: classifyToken(content, language),
  }));
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const normalizedLanguage = (language ?? 'text').toLowerCase();
  const lines = code.replace(/\n$/, '').split('\n');

  return (
    <div className="my-10 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-5 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white">
          {normalizedLanguage}
        </span>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-7">
        <code>
          {lines.map((line, lineIndex) => (
            <div key={`${line}-${lineIndex}`} className="table-row">
              <span className="table-cell select-none pr-6 text-right text-xs text-zinc-600">
                {lineIndex + 1}
              </span>
              <span className="table-cell whitespace-pre">
                {tokenizeLine(line, normalizedLanguage).map((token, tokenIndex) => (
                  <span
                    key={`${token.content}-${tokenIndex}`}
                    className={TOKEN_STYLES[token.type ?? 'plain']}
                  >
                    {token.content}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
