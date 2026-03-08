#!/usr/bin/env bun
/**
 * Create a new weekly digest post for Digital India Archiver
 */

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
}

function main() {
  const args = process.argv.slice(2);
  
  let title = '';
  let content = '';
  let excerpt = '';
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--title' && args[i + 1]) {
      title = args[i + 1];
      i++;
    } else if (args[i] === '--content' && args[i + 1]) {
      content = args[i + 1];
      i++;
    } else if (args[i] === '--excerpt' && args[i + 1]) {
      excerpt = args[i + 1];
      i++;
    }
  }
  
  if (!title) {
    console.error('Usage: bun run scripts/new-post.ts --title "Week of March 10-15, 2026" --content "..." --excerpt "..."');
    process.exit(1);
  }
  
  const date = new Date().toISOString().split('T')[0];
  const slug = slugify(title);
  const filename = `content/posts/${date}-${slug}.md`;
  
  // Auto-detect tags based on content
  const tags: string[] = ['Weekly Digest'];
  const c = content.toLowerCase();
  if (c.includes('aadhaar') || c.includes('uidai')) tags.push('Aadhaar');
  if (c.includes('digital identity') || c.includes('kyc')) tags.push('Digital Identity');
  if (c.includes('data protection') || c.includes('dpdp')) tags.push('Data Protection');
  if (c.includes('deepfake') || c.includes('ai regulation')) tags.push('AI Regulation');
  if (c.includes('dpi') || c.includes('upi')) tags.push('DPI');
  if (c.includes('budget') || c.includes('tax incentive')) tags.push('Budget');
  if (c.includes('government') || c.includes('e-governance')) tags.push('Government Tech');
  
  const frontmatter = `---
title: "${title}"
date: ${date}T09:00:00+05:30
draft: false
tags: [${tags.map(t => `"${t}"`).join(', ')}]
categories: ["Weekly Digest"]
description: "${excerpt || title}"
---

${content}
`;
  
  Bun.write(filename, frontmatter);
  console.log(`✅ Created: ${filename}`);
  console.log(`📁 Post will be live at: https://archiver.cashlessconsumer.in/posts/${date}-${slug}/`);
}

main();
