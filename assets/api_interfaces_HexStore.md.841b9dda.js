import{_ as e,c as t,o as a,a as r}from"./app.3f920d2d.js";const b=JSON.parse('{"title":"Interface: HexStore","description":"","frontmatter":{},"headers":[{"level":2,"title":"Type parameters","slug":"type-parameters"},{"level":2,"title":"Hierarchy","slug":"hierarchy"},{"level":2,"title":"Table of contents","slug":"table-of-contents"},{"level":3,"title":"Methods","slug":"methods"},{"level":3,"title":"Properties","slug":"properties"},{"level":2,"title":"Methods","slug":"methods-1"},{"level":3,"title":"getHex","slug":"gethex"},{"level":3,"title":"hasHex","slug":"hashex"},{"level":3,"title":"setHexes","slug":"sethexes"},{"level":2,"title":"Properties","slug":"properties-1"},{"level":3,"title":"size","slug":"size"}],"relativePath":"api/interfaces/HexStore.md","lastUpdated":1660746608000}'),d={name:"api/interfaces/HexStore.md"},h=r('<h1 id="interface-hexstore-t" tabindex="-1">Interface: HexStore&lt;T&gt; <a class="header-anchor" href="#interface-hexstore-t" aria-hidden="true">#</a></h1><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./../classes/Hex.html"><code>Hex</code></a></td></tr></tbody></table><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a></h2><ul><li><p><strong><code>HexStore</code></strong></p><p>\u21B3 <a href="./HexIterable.html"><code>HexIterable</code></a></p><p>\u21B3 <a href="./HexTraversable.html"><code>HexTraversable</code></a></p></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./HexStore.html#getHex">getHex</a></li><li><a href="./HexStore.html#hasHex">hasHex</a></li><li><a href="./HexStore.html#setHexes">setHexes</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><ul><li><a href="./HexStore.html#size">size</a></li></ul><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="gethex" tabindex="-1"><a id="getHex" name="getHex"></a> getHex <a class="header-anchor" href="#gethex" aria-hidden="true">#</a></h3><p><strong>getHex</strong>(<code>coordinates</code>): <code>undefined</code> | <code>T</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>coordinates</code></td><td style="text-align:left;"><a href="./../#HexCoordinates"><code>HexCoordinates</code></a></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>undefined</code> | <code>T</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/flauwekeul/honeycomb/blob/next/src/grid/types.ts#L46" target="_blank" rel="noopener noreferrer">grid/types.ts:46</a></p><hr><h3 id="hashex" tabindex="-1"><a id="hasHex" name="hasHex"></a> hasHex <a class="header-anchor" href="#hashex" aria-hidden="true">#</a></h3><p><strong>hasHex</strong>(<code>hex</code>): <code>boolean</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>hex</code></td><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>boolean</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/flauwekeul/honeycomb/blob/next/src/grid/types.ts#L47" target="_blank" rel="noopener noreferrer">grid/types.ts:47</a></p><hr><h3 id="sethexes" tabindex="-1"><a id="setHexes" name="setHexes"></a> setHexes <a class="header-anchor" href="#sethexes" aria-hidden="true">#</a></h3><p><strong>setHexes</strong>(<code>hexes</code>): <a href="./HexStore.html"><code>HexStore</code></a>&lt;<code>T</code>&gt;</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>hexes</code></td><td style="text-align:left;"><code>Iterable</code>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><a href="./HexStore.html"><code>HexStore</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/flauwekeul/honeycomb/blob/next/src/grid/types.ts#L48" target="_blank" rel="noopener noreferrer">grid/types.ts:48</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h2><h3 id="size" tabindex="-1"><a id="size" name="size"></a> size <a class="header-anchor" href="#size" aria-hidden="true">#</a></h3><p><code>Readonly</code> <strong>size</strong>: <code>number</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/flauwekeul/honeycomb/blob/next/src/grid/types.ts#L45" target="_blank" rel="noopener noreferrer">grid/types.ts:45</a></p>',42),s=[h];function i(o,n,l,c,x,p){return a(),t("div",null,s)}var g=e(d,[["render",i]]);export{b as __pageData,g as default};
