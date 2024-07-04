import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,d as a}from"./app-DbRsw7jK.js";const s={},i=a(`<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>如何在Linux系统中安装.Net6 Sdk</p></div><ol><li><p>将 Microsoft 包签名密钥添加到受信任密钥列表，并添加 Microsoft 包存储库</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装运行时</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> dotnet-runtime-6.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装SDK</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> dotnet-sdk-6.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>检查安装结果</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dotnet <span class="token parameter variable">--info</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出示例：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Host <span class="token punctuation">(</span>useful <span class="token keyword">for</span> support<span class="token punctuation">)</span>:
  Version: <span class="token number">5.0</span>.12
  Commit:  7211aa01b3

.NET SDKs installed:
  No SDKs were found.

.NET runtimes installed:
  Microsoft.AspNetCore.App <span class="token number">5.0</span>.12 <span class="token punctuation">[</span>/usr/share/dotnet/shared/Microsoft.AspNetCore.App<span class="token punctuation">]</span>
  Microsoft.NETCore.App <span class="token number">5.0</span>.12 <span class="token punctuation">[</span>/usr/share/dotnet/shared/Microsoft.NETCore.App<span class="token punctuation">]</span>

To <span class="token function">install</span> additional .NET runtimes or SDKs:
  https://aka.ms/dotnet-download
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),o=[i];function l(r,d){return n(),t("div",null,o)}const u=e(s,[["render",l],["__file","installation-dotnet.html.vue"]]),m=JSON.parse('{"path":"/articles/linux/installation-dotnet.html","title":"在Linux上安装.Net6环境","lang":"zh-CN","frontmatter":{"title":"在Linux上安装.Net6环境","date":"2022-04-16T00:00:00.000Z","category":["Linux",".Net"],"tag":["Linux",".Net"],"timeline":true,"order":4,"description":"✨✨✨✨✨ 如何在Linux系统中安装.Net6 Sdk","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/linux/installation-dotnet.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"在Linux上安装.Net6环境"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 如何在Linux系统中安装.Net6 Sdk"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-23T05:09:40.000Z"}],["meta",{"property":"article:author","content":"SongXinXin"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":".Net"}],["meta",{"property":"article:published_time","content":"2022-04-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-23T05:09:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在Linux上安装.Net6环境\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-23T05:09:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SongXinXin\\"}]}"]]},"headers":[],"git":{"createdTime":1668444644000,"updatedTime":1677128980000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":1}]},"readingTime":{"minutes":0.48,"words":143},"filePathRelative":"articles/linux/installation-dotnet.md","localizedDate":"2022年4月16日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>如何在Linux系统中安装.Net6 Sdk</p>\\n</div>\\n","autoDesc":true}');export{u as comp,m as data};