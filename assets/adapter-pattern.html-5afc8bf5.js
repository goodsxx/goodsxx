import{_ as s,X as a,Y as e,Z as t,$ as n,a3 as p}from"./framework-8e4c1295.js";const c={},l=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"✨✨✨✨✨"),n("p",null,"适配器模式（Adapter Pattern）将一个类的接口转换成客户端希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。")],-1),i=p(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>适配器模式（Adapter Pattern）将一个类的接口转换成客户端希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>将一个已经存在的类的接口转换成另外一个接口，以满足用户的需求。 在不修改原有代码的情况下，增加一些新功能。</li><li>当需要使用的类与客户端的接口不一致时，可以通过适配器模式进行转换，使得它们能够协同工作。</li></ul><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>适配器模式可以让两个没有任何关联的类一起运行，提高了类的复用性。</li><li>可以增加类的透明性和灵活性，让客户端代码更加简洁明了。</li><li>可以减少代码的耦合度，增加了程序的可扩展性。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><p>适配器模式增加了代码的复杂度，增加了代码阅读的难度。 在实现适配器模式时，可能需要引入一个新的类，从而增加系统的开销。</p><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><p>下面是一个将 220V 电压转换成 5V 电压的适配器模式示例代码，其中，Adaptee 是原有的类，需要进行适配的类；Target 是目标接口，即客户端需要的接口；Adapter 是适配器类，通过实现目标接口，将 Adaptee 的接口适配成 Target 需要的接口。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 原有的类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adaptee</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Get220V</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">220</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 目标接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ITarget</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Get5V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 适配器类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ITarget</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Adaptee</span> adaptee<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">Adapter</span><span class="token punctuation">(</span><span class="token class-name">Adaptee</span> adaptee<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>adaptee <span class="token operator">=</span> adaptee<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Get5V</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">int</span></span> src <span class="token operator">=</span> adaptee<span class="token punctuation">.</span><span class="token function">Get220V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> dst <span class="token operator">=</span> src <span class="token operator">/</span> <span class="token number">44</span><span class="token punctuation">;</span> <span class="token comment">// 将220V转换为5V</span>
        <span class="token keyword">return</span> dst<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Adaptee</span> adaptee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Adaptee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ITarget</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Adapter</span><span class="token punctuation">(</span>adaptee<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> result <span class="token operator">=</span> target<span class="token punctuation">.</span><span class="token function">Get5V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，Adaptee 是原有的类，它提供了 Get220V 方法，但是客户端需要的是 Get5V 方法。Adapter 是适配器类，它实现了 ITarget 接口，将 Adaptee 的 Get220V 方法适配成了 Get5V 方法，以满足客户端的需求。在客户端代码中，我们创建了一个 Adaptee 对象和一个 Adapter 对象，并通过 Adapter 对象调用 Get5V 方法来获取 5V 电压。</p><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><p>在这个示例中，适配器模式的实现比较简单，没有太多的优化空间。但是，在实际开发中，我们可以考虑使用对象适配器模式或类适配器模式来实现适配器模式，以满足不同的需求。</p><p>对象适配器模式将适配器类作为一个对象组合到客户端中，以实现适配器模式。在对象适配器模式中，适配器类可以实现多个目标接口，从而提高了适配器类的灵活性。</p><p>类适配器模式使用多重继承的方式来实现适配器模式，即适配器类继承了原有的类，并同时实现了目标接口。在类适配器模式中，适配器类可以重写原有类的方法，从而增加了适配器类的功能。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 目标接口</span>
<span class="token keyword">interface</span> <span class="token class-name">ITarget</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Get5V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 源接口</span>
<span class="token keyword">class</span> <span class="token class-name">Adaptee</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Get220V</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;获取220V电压&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 适配器类</span>
<span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ITarget</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Adaptee</span> adaptee<span class="token punctuation">;</span> <span class="token comment">// 组合一个Adaptee对象</span>

    <span class="token keyword">public</span> <span class="token function">Adapter</span><span class="token punctuation">(</span><span class="token class-name">Adaptee</span> adaptee<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>adaptee <span class="token operator">=</span> adaptee<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Get5V</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;适配器开始工作，将220V电压适配成5V电压&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        adaptee<span class="token punctuation">.</span><span class="token function">Get220V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用Adaptee对象的Get220V方法获取220V电压</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;适配完成，输出5V电压&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">class</span> <span class="token class-name">Client</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Adaptee</span> adaptee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Adaptee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ITarget</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Adapter</span><span class="token punctuation">(</span>adaptee<span class="token punctuation">)</span><span class="token punctuation">;</span>
        target<span class="token punctuation">.</span><span class="token function">Get5V</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们定义了一个 ITarget 接口，表示客户端所需要的目标接口。然后定义了一个 Adaptee 类，表示客户端需要适配的源接口。接着，定义了一个 Adapter 类，实现了 ITarget 接口，并通过组合一个 Adaptee 对象来实现适配器模式。最后，在客户端代码中，我们创建了一个 Adaptee 对象和一个 Adapter 对象，并通过 Adapter 对象调用 Get5V 方法来获取 5V 电压。</p><p>这种方式相比于原始的类适配器模式，更加灵活，因为一个 Adapter 对象可以实现多个目标接口，而且不需要继承原有的类。同时，也比较易于扩展，因为我们可以通过组合不同的对象来实现不同的适配器功能。</p>`,20);function o(u,d){return a(),e("div",null,[l,t(" more "),i])}const k=s(c,[["render",o],["__file","adapter-pattern.html.vue"]]);export{k as default};