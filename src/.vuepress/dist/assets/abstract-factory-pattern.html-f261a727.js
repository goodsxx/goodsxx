const t=JSON.parse('{"key":"v-214c5385","path":"/articles/design-pattern/abstract-factory-pattern.html","title":"抽象工厂模式","lang":"zh-CN","frontmatter":{"title":"抽象工厂模式","date":"2022-05-02T00:00:00.000Z","category":["设计模式","创建型模式"],"tag":["设计模式"],"timeline":true,"order":3,"description":"✨✨✨✨✨ 抽象工厂模式（Abstract Factory Pattern）是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。 在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。","head":[["meta",{"property":"og:url","content":"http://goodsxx.cn/articles/design-pattern/abstract-factory-pattern.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"抽象工厂模式"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 抽象工厂模式（Abstract Factory Pattern）是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。 在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://goodsxx.cn/"}],["meta",{"property":"og:updated_time","content":"2022-12-20T07:12:12.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"抽象工厂模式"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2022-05-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-20T07:12:12.000Z"}]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[{"level":3,"title":"为形状创建一个接口","slug":"为形状创建一个接口","link":"#为形状创建一个接口","children":[]},{"level":3,"title":"创建实现接口的实体类","slug":"创建实现接口的实体类","link":"#创建实现接口的实体类","children":[]},{"level":3,"title":"为颜色创建一个接口","slug":"为颜色创建一个接口","link":"#为颜色创建一个接口","children":[]},{"level":3,"title":"创建实现接口的实体类","slug":"创建实现接口的实体类-1","link":"#创建实现接口的实体类-1","children":[]},{"level":3,"title":"为 Color 和 Shape 对象创建抽象类来获取工厂。","slug":"为-color-和-shape-对象创建抽象类来获取工厂。","link":"#为-color-和-shape-对象创建抽象类来获取工厂。","children":[]},{"level":3,"title":"创建扩展了 AbstractFactory 的工厂类，基于给定的信息生成实体类的对象。","slug":"创建扩展了-abstractfactory-的工厂类-基于给定的信息生成实体类的对象。","link":"#创建扩展了-abstractfactory-的工厂类-基于给定的信息生成实体类的对象。","children":[]},{"level":3,"title":"创建一个工厂创造器/生成器类，通过传递形状或颜色信息来获取工厂。","slug":"创建一个工厂创造器-生成器类-通过传递形状或颜色信息来获取工厂。","link":"#创建一个工厂创造器-生成器类-通过传递形状或颜色信息来获取工厂。","children":[]},{"level":3,"title":"使用 FactoryProducer 来获取 AbstractFactory","slug":"使用-factoryproducer-来获取-abstractfactory","link":"#使用-factoryproducer-来获取-abstractfactory","children":[]},{"level":3,"title":"执行程序，输出结果：","slug":"执行程序-输出结果","link":"#执行程序-输出结果","children":[]}]}],"git":{"createdTime":1671520332000,"updatedTime":1671520332000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":1}]},"readingTime":{"minutes":4.87,"words":1460},"filePathRelative":"columns/blog-posts/series/design-pattern/abstract-factory-pattern.md","localizedDate":"2022年5月2日","excerpt":"<div class=\\"custom-container tip\\">\\n<p class=\\"custom-container-title\\">✨✨✨✨✨</p>\\n<p>抽象工厂模式（Abstract Factory Pattern）是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。\\n在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。</p>\\n</div>\\n","autoDesc":true}');export{t as data};
