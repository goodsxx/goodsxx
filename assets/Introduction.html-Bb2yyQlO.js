import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-CfsLqU1F.js";const e="/assets/1712568868597-CnEAm5UB.png",p={},o=t(`<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>在本章中，我们将学习如何安装部署 Elsa Server(Elsa 服务器) 及 Elsa Studio(Elsa 流程设计器)。</p></div><h2 id="elsa-server" tabindex="-1"><a class="header-anchor" href="#elsa-server"><span>Elsa Server</span></a></h2><p>Elsa Server 是一个 ASP.NET Core Web Api 应用程序，可让您使用 REST API 和执行工作流程来管理工作流程。 您可以将工作流存储在数据库、文件系统甚至云存储等不同位置。</p><p>本章我们将学习如何部署一个 Elsa 服务，并以 SqlServer 进行数据持久化。</p><h3 id="_1-创建-elsa-服务器项目" tabindex="-1"><a class="header-anchor" href="#_1-创建-elsa-服务器项目"><span>1. 创建 Elsa 服务器项目</span></a></h3><p>首先，我们需要创建一个新的 ASP.NET Core Web Api 项目并安装以下 Nuget 包：</p><ul><li><code>Elsa</code></li><li><code>Elsa.EntityFrameworkCore</code></li><li><code>Elsa.EntityFrameworkCore.SqlServer</code></li><li><code>Elsa.Identity</code> 添加认证授权模块</li><li><code>Elsa.Scheduling</code> 支持自动调度</li><li><code>Elsa.Workflows.Api</code> Elsa Api 端点</li><li><code>Elsa.CSharp</code> 提供 C# 脚本支持</li></ul><h3 id="_2-更新-program-cs" tabindex="-1"><a class="header-anchor" href="#_2-更新-program-cs"><span>2. 更新 Program.cs</span></a></h3><p>现在，我们需要添加一些代码来使我们的服务器正常工作。 在项目中打开 Program.cs 文件，并将其内容替换为下面提供的代码。 此代码执行许多操作，例如设置数据库连接、启用用户身份验证以及准备服务器以处理工作流。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Elsa<span class="token punctuation">.</span>EntityFrameworkCore<span class="token punctuation">.</span>Modules<span class="token punctuation">.</span>Management</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Elsa<span class="token punctuation">.</span>EntityFrameworkCore<span class="token punctuation">.</span>Modules<span class="token punctuation">.</span>Runtime</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Elsa<span class="token punctuation">.</span>Extensions</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> WebApplication<span class="token punctuation">.</span><span class="token function">CreateBuilder</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddElsa</span><span class="token punctuation">(</span>elsa <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 公开Elsa API终结点。</span>
    elsa<span class="token punctuation">.</span><span class="token function">UseWorkflowsApi</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
      <span class="token class-name"><span class="token keyword">var</span></span> module <span class="token operator">=</span> x<span class="token punctuation">.</span>Module<span class="token punctuation">;</span>
      module<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddFastEndpointsAssembly</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Program<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elsa<span class="token punctuation">.</span><span class="token function">AddSwagger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 将管理层配置为使用EF Core。</span>
    elsa<span class="token punctuation">.</span><span class="token function">UseWorkflowManagement</span><span class="token punctuation">(</span>management <span class="token operator">=&gt;</span> management<span class="token punctuation">.</span><span class="token function">UseEntityFrameworkCore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 将运行时层配置为使用EF Core。</span>
    elsa<span class="token punctuation">.</span><span class="token function">UseWorkflowRuntime</span><span class="token punctuation">(</span>runtime <span class="token operator">=&gt;</span> runtime<span class="token punctuation">.</span><span class="token function">UseEntityFrameworkCore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token comment">// 用于身份验证/授权的默认标识功能。</span>
    elsa<span class="token punctuation">.</span><span class="token function">UseIdentity</span><span class="token punctuation">(</span>identity <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        identity<span class="token punctuation">.</span>TokenOptions <span class="token operator">=</span> options <span class="token operator">=&gt;</span> options<span class="token punctuation">.</span>SigningKey <span class="token operator">=</span> <span class="token string">&quot;sufficiently-large-secret-signing-key&quot;</span><span class="token punctuation">;</span> <span class="token comment">// This key needs to be at least 256 bits long.</span>
        identity<span class="token punctuation">.</span><span class="token function">UseAdminUserProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token comment">// 配置ASP。NET身份验证/授权。</span>
    elsa<span class="token punctuation">.</span><span class="token function">UseDefaultAuthentication</span><span class="token punctuation">(</span>auth <span class="token operator">=&gt;</span> auth<span class="token punctuation">.</span><span class="token function">UseAdminApiKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token comment">// 启用C#工作流表达式</span>
    elsa<span class="token punctuation">.</span><span class="token function">UseCSharp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 启用JavaScript工作流表达式</span>
    elsa<span class="token punctuation">.</span><span class="token function">UseJavaScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 启用HTTP活动。</span>
    elsa<span class="token punctuation">.</span><span class="token function">UseHttp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用计时器活动。</span>
    elsa<span class="token punctuation">.</span><span class="token function">UseScheduling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  
    <span class="token comment">// 从应用程序注册自定义活动（如果有）。</span>
    elsa<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddActivitiesFrom</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Program<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token comment">// 从应用程序注册自定义工作流（如果有）。</span>
    elsa<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddWorkflowsFrom</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Program<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 配置CORS以允许托管在不同来源上的设计器应用程序调用API。</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddCors</span><span class="token punctuation">(</span>cors <span class="token operator">=&gt;</span> cors
    <span class="token punctuation">.</span><span class="token function">AddDefaultPolicy</span><span class="token punctuation">(</span>policy <span class="token operator">=&gt;</span> policy
        <span class="token punctuation">.</span><span class="token function">AllowAnyOrigin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// For demo purposes only. Use a specific origin instead.</span>
        <span class="token punctuation">.</span><span class="token function">AllowAnyHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">AllowAnyMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">WithExposedHeaders</span><span class="token punctuation">(</span><span class="token string">&quot;x-elsa-workflow-instance-id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 需要Elsa Studio，以便支持从设计器运行工作流。或者，您可以使用“*”通配符来公开所有标头。</span>

<span class="token comment">// 添加心跳检测</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddHealthChecks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Build the web application.</span>
<span class="token class-name"><span class="token keyword">var</span></span> app <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Configure web application&#39;s middleware pipeline.</span>
app<span class="token punctuation">.</span><span class="token function">UseCors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">UseRouting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Required for SignalR.</span>
app<span class="token punctuation">.</span><span class="token function">UseAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">UseAuthorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">UseWorkflowsApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Use Elsa API endpoints.</span>
app<span class="token punctuation">.</span><span class="token function">UseWorkflows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Use Elsa middleware to handle HTTP requests mapped to HTTP Endpoint activities.</span>
app<span class="token punctuation">.</span><span class="token function">UseSwaggerUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 注册Elsa Swagger中间件</span>
app<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-启动服务" tabindex="-1"><a class="header-anchor" href="#_3-启动服务"><span>3. 启动服务</span></a></h3><p>若要在端口 5001 上运行应用程序，请执行以下命令：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>dotnet run --urls &quot;https://localhost:5001&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问 https://localhost:5001/swagger/index.html 查看 Swagger 文档</p><figure><img src="`+e+'" alt="Swagger 文档" tabindex="0" loading="lazy"><figcaption>Swagger 文档</figcaption></figure>',15),c=[o];function i(l,u){return s(),a("div",null,c)}const k=n(p,[["render",i],["__file","Introduction.html.vue"]]),m=JSON.parse('{"path":"/articles/elsa-workflow/Introduction.html","title":"安装部署","lang":"zh-CN","frontmatter":{"title":"安装部署","date":"2024-04-06T00:00:00.000Z","category":["Elsa"],"tag":["Elsa","Workflow","工作流"],"timeline":true,"order":1,"description":"✨✨✨✨✨ 在本章中，我们将学习如何安装部署 Elsa Server(Elsa 服务器) 及 Elsa Studio(Elsa 流程设计器)。","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/elsa-workflow/Introduction.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"安装部署"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 在本章中，我们将学习如何安装部署 Elsa Server(Elsa 服务器) 及 Elsa Studio(Elsa 流程设计器)。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T09:37:39.000Z"}],["meta",{"property":"article:author","content":"SongXinXin"}],["meta",{"property":"article:tag","content":"Elsa"}],["meta",{"property":"article:tag","content":"Workflow"}],["meta",{"property":"article:tag","content":"工作流"}],["meta",{"property":"article:published_time","content":"2024-04-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-08T09:37:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-08T09:37:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SongXinXin\\"}]}"]]},"headers":[{"level":2,"title":"Elsa Server","slug":"elsa-server","link":"#elsa-server","children":[{"level":3,"title":"1. 创建 Elsa 服务器项目","slug":"_1-创建-elsa-服务器项目","link":"#_1-创建-elsa-服务器项目","children":[]},{"level":3,"title":"2. 更新 Program.cs","slug":"_2-更新-program-cs","link":"#_2-更新-program-cs","children":[]},{"level":3,"title":"3. 启动服务","slug":"_3-启动服务","link":"#_3-启动服务","children":[]}]}],"git":{"createdTime":1712569059000,"updatedTime":1712569059000,"contributors":[{"name":"宋鑫鑫","email":"1368084801@qq.com","commits":1}]},"readingTime":{"minutes":2.27,"words":681},"filePathRelative":"articles/elsa-workflow/Introduction.md","localizedDate":"2024年4月6日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>在本章中，我们将学习如何安装部署 Elsa Server(Elsa 服务器) 及 Elsa Studio(Elsa 流程设计器)。</p>\\n</div>\\n","autoDesc":true}');export{k as comp,m as data};
