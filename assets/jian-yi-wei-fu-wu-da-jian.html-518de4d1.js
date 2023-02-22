const e=JSON.parse('{"key":"v-3b65e17b","path":"/columns/blog-posts/series/micro-service/jian-yi-wei-fu-wu-da-jian.html","title":"基于Docker+Consul+Ocelot+Nginx搭建微服务架构","lang":"zh-CN","frontmatter":{"title":"基于Docker+Consul+Ocelot+Nginx搭建微服务架构","date":"2022-03-01T00:00:00.000Z","category":["微服务"],"tag":["Nginx","Consul","Ocelot"],"timeline":true,"order":1,"description":"✨✨✨✨✨ 基于Docker、Nginx、Consul、Ocelot等，从零开始搭建一套具有动态伸缩、限流、熔断功能的简易微服务架构。","head":[["meta",{"property":"og:url","content":"http://goodsxx.cn/columns/blog-posts/series/micro-service/jian-yi-wei-fu-wu-da-jian.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"基于Docker+Consul+Ocelot+Nginx搭建微服务架构"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 基于Docker、Nginx、Consul、Ocelot等，从零开始搭建一套具有动态伸缩、限流、熔断功能的简易微服务架构。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://goodsxx.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-21T02:16:47.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"基于Docker+Consul+Ocelot+Nginx搭建微服务架构"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:tag","content":"Consul"}],["meta",{"property":"article:tag","content":"Ocelot"}],["meta",{"property":"article:published_time","content":"2022-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-21T02:16:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基于Docker+Consul+Ocelot+Nginx搭建微服务架构\\",\\"image\\":[\\"http://goodsxx.cn/\\"],\\"datePublished\\":\\"2022-03-01T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-21T02:16:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":2,"title":"环境说明","slug":"环境说明","link":"#环境说明","children":[]},{"level":2,"title":"1 Consul注册中心集群搭建(Linux1)","slug":"_1-consul注册中心集群搭建-linux1","link":"#_1-consul注册中心集群搭建-linux1","children":[{"level":3,"title":"1.1 拉取Consul镜像","slug":"_1-1-拉取consul镜像","link":"#_1-1-拉取consul镜像","children":[]},{"level":3,"title":"1.2 配置第一个Consul","slug":"_1-2-配置第一个consul","link":"#_1-2-配置第一个consul","children":[]},{"level":3,"title":"1.3 启动第二个Consul服务","slug":"_1-3-启动第二个consul服务","link":"#_1-3-启动第二个consul服务","children":[]},{"level":3,"title":"1.4 启动其余4个Consul服务","slug":"_1-4-启动其余4个consul服务","link":"#_1-4-启动其余4个consul服务","children":[]}]},{"level":2,"title":"2 为Consul集群配置Nginx负载均衡(Linux2)","slug":"_2-为consul集群配置nginx负载均衡-linux2","link":"#_2-为consul集群配置nginx负载均衡-linux2","children":[{"level":3,"title":"2.1 拉取镜像","slug":"_2-1-拉取镜像","link":"#_2-1-拉取镜像","children":[]},{"level":3,"title":"2.2 启动Nginx服务","slug":"_2-2-启动nginx服务","link":"#_2-2-启动nginx服务","children":[]},{"level":3,"title":"2.3 修改配置文件","slug":"_2-3-修改配置文件","link":"#_2-3-修改配置文件","children":[]},{"level":3,"title":"2.4 重启Nginx服务","slug":"_2-4-重启nginx服务","link":"#_2-4-重启nginx服务","children":[]}]},{"level":2,"title":"3 API服务端搭建(Linux3)","slug":"_3-api服务端搭建-linux3","link":"#_3-api服务端搭建-linux3","children":[{"level":3,"title":"3.1准备.Net Core Web Api 作为测试服务端","slug":"_3-1准备-net-core-web-api-作为测试服务端","link":"#_3-1准备-net-core-web-api-作为测试服务端","children":[]},{"level":3,"title":"3.2 上传项目至Linux3","slug":"_3-2-上传项目至linux3","link":"#_3-2-上传项目至linux3","children":[]}]},{"level":2,"title":"4 Ocelot网关集群搭建(Linux4)","slug":"_4-ocelot网关集群搭建-linux4","link":"#_4-ocelot网关集群搭建-linux4","children":[{"level":3,"title":"4.1 准备 .Net Core Web Api 测试项目","slug":"_4-1-准备-net-core-web-api-测试项目","link":"#_4-1-准备-net-core-web-api-测试项目","children":[]},{"level":3,"title":"4.2 上传项目至Linux服务器","slug":"_4-2-上传项目至linux服务器","link":"#_4-2-上传项目至linux服务器","children":[]}]},{"level":2,"title":"5 为Ocelot集群配置Nginx负载均衡(Linux4)","slug":"_5-为ocelot集群配置nginx负载均衡-linux4","link":"#_5-为ocelot集群配置nginx负载均衡-linux4","children":[{"level":3,"title":"5.1 拉取镜像","slug":"_5-1-拉取镜像","link":"#_5-1-拉取镜像","children":[]},{"level":3,"title":"5.2 启动Nginx服务","slug":"_5-2-启动nginx服务","link":"#_5-2-启动nginx服务","children":[]},{"level":3,"title":"5.3 修改配置文件","slug":"_5-3-修改配置文件","link":"#_5-3-修改配置文件","children":[]},{"level":3,"title":"5.4 重启Nginx服务","slug":"_5-4-重启nginx服务","link":"#_5-4-重启nginx服务","children":[]}]},{"level":2,"title":"6 Web客户端搭建(Linux6)","slug":"_6-web客户端搭建-linux6","link":"#_6-web客户端搭建-linux6","children":[{"level":3,"title":"6.1 准备 .Net Core Web(MVC) 测试项目","slug":"_6-1-准备-net-core-web-mvc-测试项目","link":"#_6-1-准备-net-core-web-mvc-测试项目","children":[]},{"level":3,"title":"6.2 上传项目至Linux6","slug":"_6-2-上传项目至linux6","link":"#_6-2-上传项目至linux6","children":[]}]},{"level":2,"title":"大功告成","slug":"大功告成","link":"#大功告成","children":[]}],"git":{"createdTime":1671520332000,"updatedTime":1671589007000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":2}]},"readingTime":{"minutes":6.17,"words":1852},"filePathRelative":"columns/blog-posts/series/micro-service/jian-yi-wei-fu-wu-da-jian.md","localizedDate":"2022年3月1日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>基于Docker、Nginx、Consul、Ocelot等，从零开始搭建一套具有动态伸缩、限流、熔断功能的简易微服务架构。</p>\\n</div>\\n","autoDesc":true}');export{e as data};
