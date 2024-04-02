import{_ as l,Z as t,$ as o,a0 as d,a2 as e,a1 as i,a4 as a,a5 as c,H as r,a3 as n}from"./framework-e7ac220c.js";const u="/assets/1650813978558-33420cd6.png",p={},m=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"✨✨✨✨✨"),e("p",null,"在Linux上部署我们的VuePress个人博客网站")],-1),v=e("li",null,[e("p",null,"将VuePress项目上传至GitHub或Gitee仓库，不会的自行百度")],-1),g=c('<li><p>复制你的仓库地址(此处以gitee为例)</p><figure><img src="'+u+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li><li><p>在Linux上的home/my文件夹下拉取Git仓库中的VuePress项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://你的仓库地址/my-vuepress.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入刚下载的VuePress项目文件夹下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/my/my-vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>初始化项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>运行项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>此时用你的服务器IP+VuePress启动的端口号即可访问</p></li>`,6);function h(_,b){const s=r("RouterLink");return t(),o("div",null,[m,d(" more "),e("ol",null,[v,e("li",null,[e("p",null,[i(s,{to:"/articles/linux/installation-node.html"},{default:a(()=>[n("在Linux上安装Node/Npm")]),_:1})])]),e("li",null,[e("p",null,[i(s,{to:"/articles/linux/installation-git.html"},{default:a(()=>[n("在Linux上安装Git")]),_:1})])]),g])])}const f=l(p,[["render",h],["__file","vuepress-release.html.vue"]]);export{f as default};
