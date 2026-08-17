#!/usr/bin/env bash
# Scans every file using next/font/google and reports whether each
# declared font variable's .className is actually referenced anywhere
# in that file. If not, it's dead code that can trigger build-time
# font-fetch failures for zero benefit.

set -euo pipefail

FILES=$(grep -rl "next/font/google" --include="*.tsx" . 2>/dev/null || true)

if [ -z "$FILES" ]; then
  echo "No files found using next/font/google."
  exit 0
fi

for f in $FILES; do
  echo "── $f ──"

  # Find variable names assigned from a next/font/google call, e.g.
  #   const syne = Syne({ ... })
  #   const manrope = Manrope({ ... });
  vars=$(grep -oE '^\s*const\s+[A-Za-z_][A-Za-z0-9_]*\s*=\s*[A-Za-z_]+\(' "$f" \
    | grep -oE '[A-Za-z_][A-Za-z0-9_]*\s*=' \
    | sed 's/[[:space:]]*=$//' \
    | sort -u)

  if [ -z "$vars" ]; then
    echo "  (no font variable declarations found — check manually)"
    echo
    continue
  fi

  for v in $vars; do
    # Count usages of var.className, excluding the declaration line itself
    uses=$(grep -c "${v}\.className" "$f" || true)
    if [ "$uses" -eq 0 ]; then
      echo "  ⚠️  '$v' is declared but '${v}.className' is never used — DEAD, safe to remove"
    else
      echo "  ✅ '$v' is used via .className ($uses reference(s)) — keep"
    fi
  done
  echo
done