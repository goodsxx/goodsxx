const e=JSON.parse('{"key":"v-1fa51a1d","path":"/articles/distributed-middleware/rabbitmq/dead-letter-queue.html","title":"死信队列","lang":"zh-CN","frontmatter":{"title":"死信队列","date":"2023-03-04T00:00:00.000Z","category":["分布式中间件"],"tag":["RabbitMQ"],"timeline":true,"order":7,"description":"✨✨✨✨✨ 死信队列（Dead-Letter Queue，DLQ）是一个特殊的消息队列，用于存储无法被消费者正确处理的“死信”消息。当消息被发送到队列时，如果这条消息无法被消费者成功处理或超过了 TTL 时间限制，那么就会被发送到死信队列中。 使用死信队列的主要目的是防止消息丢失或者被忽略，同时也方便进行消息重试、错误分析和监控等操作。","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/distributed-middleware/rabbitmq/dead-letter-queue.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"死信队列"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 死信队列（Dead-Letter Queue，DLQ）是一个特殊的消息队列，用于存储无法被消费者正确处理的“死信”消息。当消息被发送到队列时，如果这条消息无法被消费者成功处理或超过了 TTL 时间限制，那么就会被发送到死信队列中。 使用死信队列的主要目的是防止消息丢失或者被忽略，同时也方便进行消息重试、错误分析和监控等操作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-13T18:24:18.000Z"}],["meta",{"property":"article:tag","content":"RabbitMQ"}],["meta",{"property":"article:published_time","content":"2023-03-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-13T18:24:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"死信队列\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-13T18:24:18.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1678731858000,"updatedTime":1678731858000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":1}]},"readingTime":{"minutes":2.54,"words":763},"filePathRelative":"articles/distributed-middleware/rabbitmq/dead-letter-queue.md","localizedDate":"2023年3月4日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>死信队列（Dead-Letter Queue，DLQ）是一个特殊的消息队列，用于存储无法被消费者正确处理的“死信”消息。当消息被发送到队列时，如果这条消息无法被消费者成功处理或超过了 TTL 时间限制，那么就会被发送到死信队列中。</p>\\n<p>使用死信队列的主要目的是防止消息丢失或者被忽略，同时也方便进行消息重试、错误分析和监控等操作。</p>\\n</div>\\n","autoDesc":true}');export{e as data};