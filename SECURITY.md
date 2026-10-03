# Security Policy

This repository contains reusable frontend animation components and WordPress integration examples.

## Reporting a vulnerability

Please do not publish exploitable security issues in a public issue.

For a suspected vulnerability, contact the repository owner through the professional contact channels listed in the profile README and include:

- affected file/component
- reproduction steps
- expected vs actual behavior
- potential impact
- any suggested mitigation

## Scope

Security-sensitive contributions should avoid:

- injecting unsanitized user-controlled HTML
- exposing WordPress credentials, salts, tokens, or API keys
- committing private client data
- introducing unsafe inline script generation from untrusted input
- bypassing WordPress capability or nonce protections in PHP examples

The JavaScript components in this project are presentation-layer utilities. WordPress integrations should still follow normal server-side validation, sanitization, escaping, capability, and nonce requirements where applicable.
