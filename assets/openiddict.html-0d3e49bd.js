const e=JSON.parse('{"key":"v-0a8a8967","path":"/articles/distributed-middleware/authorization_authentication/openiddict.html","title":"OpenIddict 中文文档","lang":"zh-CN","frontmatter":{"title":"OpenIddict 中文文档","date":"2023-04-23T00:00:00.000Z","category":["分布式中间件"],"tag":["认证和授权"],"timeline":true,"order":2,"description":"✨✨✨✨✨ OpenIddict 是一个开源且通用的框架，用于在任何 ASP.NET Core 2.1（及更高版本）和传统的 ASP.NET 4.6.1（及更高版本）应用程序中构建符合标准的 OAuth 2.0 / OpenID Connect 服务器。","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/distributed-middleware/authorization_authentication/openiddict.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"OpenIddict 中文文档"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ OpenIddict 是一个开源且通用的框架，用于在任何 ASP.NET Core 2.1（及更高版本）和传统的 ASP.NET 4.6.1（及更高版本）应用程序中构建符合标准的 OAuth 2.0 / OpenID Connect 服务器。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://blog.goodsxx.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-23T14:46:07.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"OpenIddict 中文文档"}],["meta",{"property":"article:tag","content":"认证和授权"}],["meta",{"property":"article:published_time","content":"2023-04-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-23T14:46:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OpenIddict 中文文档\\",\\"image\\":[\\"http://blog.goodsxx.cn/\\"],\\"datePublished\\":\\"2023-04-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-23T14:46:07.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[{"level":3,"title":"什么是 OpenIddict？","slug":"什么是-openiddict","link":"#什么是-openiddict","children":[]},{"level":3,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[{"level":4,"title":"用户身份验证","slug":"用户身份验证","link":"#用户身份验证","children":[]},{"level":4,"title":"通行模式","slug":"通行模式","link":"#通行模式","children":[]},{"level":4,"title":"事件模式","slug":"事件模式","link":"#事件模式","children":[]}]}]},{"level":2,"title":"入门指南","slug":"入门指南","link":"#入门指南","children":[]},{"level":2,"title":"选择正确的流程","slug":"选择正确的流程","link":"#选择正确的流程","children":[{"level":3,"title":"非交互式流程","slug":"非交互式流程","link":"#非交互式流程","children":[{"level":4,"title":"资源拥有者密码凭据授权（不建议用于新的应用程序）","slug":"资源拥有者密码凭据授权-不建议用于新的应用程序","link":"#资源拥有者密码凭据授权-不建议用于新的应用程序","children":[]},{"level":4,"title":"客户端凭证授权（建议用于机器对机器通信）","slug":"客户端凭证授权-建议用于机器对机器通信","link":"#客户端凭证授权-建议用于机器对机器通信","children":[]}]},{"level":3,"title":"交互式流程","slug":"交互式流程","link":"#交互式流程","children":[{"level":4,"title":"授权码流程（建议用于新应用程序）","slug":"授权码流程-建议用于新应用程序","link":"#授权码流程-建议用于新应用程序","children":[]},{"level":4,"title":"隐式流程（不建议用于新应用程序）","slug":"隐式流程-不建议用于新应用程序","link":"#隐式流程-不建议用于新应用程序","children":[]}]}]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"介绍","slug":"介绍-1","link":"#介绍-1","children":[]},{"level":3,"title":"应用程序权限","slug":"应用程序权限","link":"#应用程序权限","children":[{"level":4,"title":"端点权限","slug":"端点权限","link":"#端点权限","children":[{"level":5,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":5,"title":"支持的权限","slug":"支持的权限","link":"#支持的权限","children":[]},{"level":5,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":5,"title":"禁用端点权限","slug":"禁用端点权限","link":"#禁用端点权限","children":[]}]},{"level":4,"title":"授权类型权限","slug":"授权类型权限","link":"#授权类型权限","children":[{"level":5,"title":"定义","slug":"定义-1","link":"#定义-1","children":[]},{"level":5,"title":"支持的权限","slug":"支持的权限-1","link":"#支持的权限-1","children":[]},{"level":5,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]},{"level":5,"title":"禁用授权类型权限","slug":"禁用授权类型权限","link":"#禁用授权类型权限","children":[]}]},{"level":4,"title":"范围权限","slug":"范围权限","link":"#范围权限","children":[{"level":5,"title":"定义","slug":"定义-2","link":"#定义-2","children":[]},{"level":5,"title":"支持的权限","slug":"支持的权限-2","link":"#支持的权限-2","children":[]},{"level":5,"title":"示例","slug":"示例-2","link":"#示例-2","children":[]},{"level":5,"title":"禁用范围权限","slug":"禁用范围权限","link":"#禁用范围权限","children":[]}]},{"level":4,"title":"响应类型权限","slug":"响应类型权限","link":"#响应类型权限","children":[{"level":5,"title":"定义","slug":"定义-3","link":"#定义-3","children":[]},{"level":5,"title":"支持的权限","slug":"支持的权限-3","link":"#支持的权限-3","children":[]},{"level":5,"title":"示例","slug":"示例-3","link":"#示例-3","children":[]},{"level":5,"title":"禁用响应类型权限","slug":"禁用响应类型权限","link":"#禁用响应类型权限","children":[]}]}]},{"level":3,"title":"授权存储","slug":"授权存储","link":"#授权存储","children":[{"level":4,"title":"授权类型","slug":"授权类型","link":"#授权类型","children":[{"level":5,"title":"永久性授权","slug":"永久性授权","link":"#永久性授权","children":[]},{"level":5,"title":"临时授权","slug":"临时授权","link":"#临时授权","children":[]}]},{"level":4,"title":"在 API 级别启用授权条目验证","slug":"在-api-级别启用授权条目验证","link":"#在-api-级别启用授权条目验证","children":[]},{"level":4,"title":"禁用授权存储","slug":"禁用授权存储","link":"#禁用授权存储","children":[]}]},{"level":3,"title":"声明目标","slug":"声明目标","link":"#声明目标","children":[]},{"level":3,"title":"加密和签名凭据","slug":"加密和签名凭据","link":"#加密和签名凭据","children":[{"level":4,"title":"在授权服务器选项中注册凭据","slug":"在授权服务器选项中注册凭据","link":"#在授权服务器选项中注册凭据","children":[{"level":5,"title":"注册临时密钥","slug":"注册临时密钥","link":"#注册临时密钥","children":[]},{"level":5,"title":"注册开发证书","slug":"注册开发证书","link":"#注册开发证书","children":[]},{"level":5,"title":"注册密钥","slug":"注册密钥","link":"#注册密钥","children":[]},{"level":5,"title":"注册证书（建议用于生产准备环境）","slug":"注册证书-建议用于生产准备环境","link":"#注册证书-建议用于生产准备环境","children":[]}]},{"level":4,"title":"在API/资源验证选项中导入凭据。","slug":"在api-资源验证选项中导入凭据。","link":"#在api-资源验证选项中导入凭据。","children":[{"level":5,"title":"使用集成选项 options.UseLocalServer()","slug":"使用集成选项-options-uselocalserver","link":"#使用集成选项-options-uselocalserver","children":[]},{"level":5,"title":"使用 OpenID Connect 常规发现（仅限非对称签名密钥）","slug":"使用-openid-connect-常规发现-仅限非对称签名密钥","link":"#使用-openid-connect-常规发现-仅限非对称签名密钥","children":[]},{"level":5,"title":"在令牌验证参数中注册对称签名密钥","slug":"在令牌验证参数中注册对称签名密钥","link":"#在令牌验证参数中注册对称签名密钥","children":[]},{"level":5,"title":"注册加密密钥或证书","slug":"注册加密密钥或证书","link":"#注册加密密钥或证书","children":[]}]}]},{"level":3,"title":"用于代码交换的验证密钥(Proof Key for Code Exchange)","slug":"用于代码交换的验证密钥-proof-key-for-code-exchange","link":"#用于代码交换的验证密钥-proof-key-for-code-exchange","children":[{"level":4,"title":"在全局级别启用 PKCE 执行","slug":"在全局级别启用-pkce-执行","link":"#在全局级别启用-pkce-执行","children":[]},{"level":4,"title":"按客户端启用 PKCE 强制执行","slug":"按客户端启用-pkce-强制执行","link":"#按客户端启用-pkce-强制执行","children":[]},{"level":4,"title":"启用支持 code_challenge_method=plain","slug":"启用支持-code-challenge-method-plain","link":"#启用支持-code-challenge-method-plain","children":[]}]},{"level":3,"title":"令牌格式","slug":"令牌格式","link":"#令牌格式","children":[{"level":4,"title":"JSON Web Token","slug":"json-web-token","link":"#json-web-token","children":[{"level":5,"title":"JWT 令牌类型","slug":"jwt-令牌类型","link":"#jwt-令牌类型","children":[]},{"level":5,"title":"禁用 JWT 访问令牌加密","slug":"禁用-jwt-访问令牌加密","link":"#禁用-jwt-访问令牌加密","children":[]}]},{"level":4,"title":"ASP.NET Core 数据保护","slug":"asp-net-core-数据保护","link":"#asp-net-core-数据保护","children":[{"level":5,"title":"切换到 Data Protection 令牌","slug":"切换到-data-protection-令牌","link":"#切换到-data-protection-令牌","children":[]}]}]},{"level":3,"title":"令牌存储","slug":"令牌存储","link":"#令牌存储","children":[{"level":4,"title":"启用引用访问和/或刷新令牌","slug":"启用引用访问和-或刷新令牌","link":"#启用引用访问和-或刷新令牌","children":[]},{"level":4,"title":"启用 API 级别的令牌条目验证","slug":"启用-api-级别的令牌条目验证","link":"#启用-api-级别的令牌条目验证","children":[]},{"level":4,"title":"禁用令牌存储","slug":"禁用令牌存储","link":"#禁用令牌存储","children":[]}]}]},{"level":2,"title":"集成","slug":"集成","link":"#集成","children":[{"level":3,"title":"Entity Framework Core 集成","slug":"entity-framework-core-集成","link":"#entity-framework-core-集成","children":[{"level":4,"title":"基本配置","slug":"基本配置","link":"#基本配置","children":[]},{"level":4,"title":"高级配置","slug":"高级配置","link":"#高级配置","children":[{"level":5,"title":"使用自定义主键类型","slug":"使用自定义主键类型","link":"#使用自定义主键类型","children":[]},{"level":5,"title":"使用自定义实体","slug":"使用自定义实体","link":"#使用自定义实体","children":[]}]}]}]}],"git":{"createdTime":1682175200000,"updatedTime":1682261167000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":3}]},"readingTime":{"minutes":40.21,"words":12063},"filePathRelative":"articles/distributed-middleware/authorization_authentication/openiddict.md","localizedDate":"2023年4月23日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>OpenIddict 是一个开源且通用的框架，用于在任何 <a href=\\"http://ASP.NET\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ASP.NET</a> Core 2.1（及更高版本）和传统的 <a href=\\"http://ASP.NET\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ASP.NET</a> 4.6.1（及更高版本）应用程序中构建符合标准的 OAuth 2.0 / OpenID Connect 服务器。</p>\\n</div>\\n","autoDesc":true}');export{e as data};
