---
title: Text Recognition
titleTemplate: Guides
description: Learn how to use the text recognition feature in Yomihon.
---

# Text Recognition

Yomihon comes with built-in text recognition capabilities, allowing you to extract text from manga pages and look up words using integrated dictionaries.

## How to use

<div class="grid-container">
<div class="card">
    <h3>Long Press (Quickest)</h3>
    <ol>
        <li>Long press on an open manga page.</li>
        <li>Select the region you would like to scan.</li>
        <li>A dictionary panel will display results.</li>
    </ol>
</div>

<div class="card">
    <h3>Toolbar</h3>
    <ol>
        <li>Tap the center of the manga page.</li>
        <li>Tap the <strong>OCR</strong> button in the bottom toolbar.</li>
        <li>Select the region you would like to scan.</li>
        <li>A dictionary panel will display results.</li>
    </ol>
</div>
</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.card {
  background: var(--vp-c-bg-soft);
  padding: 15px;
  border-radius: 8px;
}
/* Stack them on mobile */
@media (max-width: 640px) {
  .grid-container { grid-template-columns: 1fr; }
}
</style>

## Settings

You can customize the text recognition options in **Settings > Reader**.

* If the text recognition is slow, try switching to the "Fast" model **(Coming Soon)**.
* To return to the previous long press options, disable **"Recognize Text on Long Press."**
