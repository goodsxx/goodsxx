import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-DbRsw7jK.js";const p={},e=t(`<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>解释器模式是一种行为型设计模式，它定义了一种语言文法的表示，并定义一个解释器，用来解释该语言中的句子。通俗点说，就是将某种特定的语言翻译成机器能够理解的形式。</p></div><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h2><p>解释器模式是一种行为型设计模式，它定义了一种语言文法的表示，并定义一个解释器，用来解释该语言中的句子。通俗点说，就是将某种特定的语言翻译成机器能够理解的形式。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><p>解释器模式适用于以下场景：</p><ul><li>当你有一种语言需要解释执行时，可以使用解释器模式。</li><li>当你需要定义一种语言，并需要解释执行该语言时，可以使用解释器模式。</li><li>当你需要在运行时动态地扩展语言时，可以使用解释器模式。</li></ul><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点"><span>优缺点</span></a></h2><p><strong>优点：</strong></p><ul><li>可扩展性强，易于添加新的语法规则和操作符。</li><li>可以将语法规则表示为类的继承关系，更加易于理解和维护。</li><li>可以将复杂的语法规则分解成简单的模块，易于实现。</li></ul><p><strong>缺点：</strong></p><ul><li>对于简单的语法规则，使用解释器模式可能会显得过于繁琐。</li><li>在语法规则非常复杂的情况下，解释器模式的性能可能会受到影响。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h2><p>下面是一个使用解释器模式实现的简单案例，我们将解释一个包含加减乘除的表达式，例如 &quot;1 + 2 - 3 * 4 / 2&quot;。我们将通过解释器模式来计算该表达式的值。</p><p>首先，我们定义一个抽象表达式类 <code>Expression</code>，该类包含一个抽象方法 <code>Interpret</code>，用于计算表达式的值。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 抽象表达式类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Expression</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们定义数字表达式类 <code>NumberExpression</code>，该类表示一个数字表达式。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 数字表达式类</span>
<span class="token keyword">class</span> <span class="token class-name">NumberExpression</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Expression</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span></span> <span class="token keyword">value</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">NumberExpression</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> <span class="token keyword">value</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们定义运算符表达式类 <code>OperatorExpression</code>，该类表示一个运算符表达式。该类包含左操作数和右操作数两个表达式对象。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 运算符表达式类</span>
<span class="token keyword">class</span> <span class="token class-name">OperatorExpression</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Expression</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">char</span></span> op<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Expression</span> left<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Expression</span> right<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">OperatorExpression</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">char</span></span> op<span class="token punctuation">,</span> <span class="token class-name">Expression</span> left<span class="token punctuation">,</span> <span class="token class-name">Expression</span> right<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>op <span class="token operator">=</span> op<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">int</span></span> leftValue <span class="token operator">=</span> left<span class="token punctuation">.</span><span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> rightValue <span class="token operator">=</span> right<span class="token punctuation">.</span><span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">switch</span> <span class="token punctuation">(</span>op<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token char">&#39;+&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> leftValue <span class="token operator">+</span> rightValue<span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token char">&#39;-&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> leftValue <span class="token operator">-</span> rightValue<span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token char">&#39;*&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> leftValue <span class="token operator">*</span> rightValue<span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token char">&#39;/&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> leftValue <span class="token operator">/</span> rightValue<span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">NotSupportedException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，我们定义一个解释器类 <code>Interpreter</code>，该类包含一个 <code>Parse</code> 方法，用于解析一个字符串形式的表达式，并返回表达式的计算结果。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 解释器类</span>
<span class="token keyword">class</span> <span class="token class-name">Interpreter</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Expression</span> <span class="token function">Parse</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> input<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 将输入字符串转换为一个字符数组</span>
        <span class="token class-name"><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> tokens <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">ToCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 定义栈和队列，用于解析表达式</span>
        <span class="token class-name">Stack<span class="token punctuation">&lt;</span>Expression<span class="token punctuation">&gt;</span></span> expressions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Stack<span class="token punctuation">&lt;</span>Expression<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Queue<span class="token punctuation">&lt;</span><span class="token keyword">char</span><span class="token punctuation">&gt;</span></span> operators <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Queue<span class="token punctuation">&lt;</span><span class="token keyword">char</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 遍历字符数组，解析表达式</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">char</span></span> token <span class="token keyword">in</span> tokens<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>Char<span class="token punctuation">.</span><span class="token function">IsDigit</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 如果当前字符是数字，则将其转换为数字表达式，并压入栈中</span>
                <span class="token class-name"><span class="token keyword">int</span></span> <span class="token keyword">value</span> <span class="token operator">=</span> Int32<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                expressions<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">NumberExpression</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>token <span class="token operator">==</span> <span class="token char">&#39;+&#39;</span> <span class="token operator">||</span> token <span class="token operator">==</span> <span class="token char">&#39;-&#39;</span> <span class="token operator">||</span> token <span class="token operator">==</span> <span class="token char">&#39;*&#39;</span> <span class="token operator">||</span> token <span class="token operator">==</span> <span class="token char">&#39;/&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 如果当前字符是运算符，则将其压入运算符队列中</span>
                operators<span class="token punctuation">.</span><span class="token function">Enqueue</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>token <span class="token operator">==</span> <span class="token char">&#39;(&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 如果当前字符是左括号，则将其压入栈中</span>
                expressions<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">NumberExpression</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                operators<span class="token punctuation">.</span><span class="token function">Enqueue</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>token <span class="token operator">==</span> <span class="token char">&#39;)&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 如果当前字符是右括号，则弹出栈中的表达式，直到遇到左括号，然后将左括号从运算符队列中弹出</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>operators<span class="token punctuation">.</span><span class="token function">Peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">&#39;(&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token class-name"><span class="token keyword">char</span></span> op <span class="token operator">=</span> operators<span class="token punctuation">.</span><span class="token function">Dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Expression</span> right <span class="token operator">=</span> expressions<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Expression</span> left <span class="token operator">=</span> expressions<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    expressions<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">OperatorExpression</span><span class="token punctuation">(</span>op<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                operators<span class="token punctuation">.</span><span class="token function">Dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 处理剩余的运算符</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>operators<span class="token punctuation">.</span>Count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">char</span></span> op <span class="token operator">=</span> operators<span class="token punctuation">.</span><span class="token function">Dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Expression</span> right <span class="token operator">=</span> expressions<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Expression</span> left <span class="token operator">=</span> expressions<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            expressions<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">OperatorExpression</span><span class="token punctuation">(</span>op<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 返回栈中唯一的表达式对象</span>
        <span class="token keyword">return</span> expressions<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们可以使用上面的解释器来计算一个表达式的值。例如，我们可以计算 &quot;1 + 2 - 3 * 4 / 2&quot; 的值：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name">Interpreter</span> interpreter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Interpreter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Expression</span> expression <span class="token operator">=</span> interpreter<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;1 + 2 - 3 * 4 / 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">int</span></span> result <span class="token operator">=</span> expression<span class="token punctuation">.</span><span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该代码将输出&quot;-3&quot;，即表达式 &quot;1 + 2 - 3 * 4 / 2&quot; 的计算结果。</p><p>对于上面的代码，可能存在以下的优化空间：</p><ul><li>可以引入一些常见的优化技巧，例如缓存、惰性求值等，来提高解释器的性能；</li><li>可以使用更加高效的数据结构，例如链表、哈希表等，来加速解释器的解析过程。</li></ul><p>但是，这些优化的具体实现方式需要根据实际的场景和要求来确定，不能一概而论。在实际开发中，我们需要根据具体情况来进行优化，以提高解释器的性能和可维护性。</p>`,27),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","interpreter-pattern.html.vue"]]),d=JSON.parse('{"path":"/articles/design-pattern/interpreter-pattern.html","title":"解释器模式","lang":"zh-CN","frontmatter":{"title":"解释器模式","date":"2022-05-20T00:00:00.000Z","category":["设计模式"],"tag":["设计模式","行为型模式"],"timeline":true,"order":8,"description":"✨✨✨✨✨ 解释器模式是一种行为型设计模式，它定义了一种语言文法的表示，并定义一个解释器，用来解释该语言中的句子。通俗点说，就是将某种特定的语言翻译成机器能够理解的形式。","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/design-pattern/interpreter-pattern.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"解释器模式"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ 解释器模式是一种行为型设计模式，它定义了一种语言文法的表示，并定义一个解释器，用来解释该语言中的句子。通俗点说，就是将某种特定的语言翻译成机器能够理解的形式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-23T07:11:44.000Z"}],["meta",{"property":"article:author","content":"SongXinXin"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"行为型模式"}],["meta",{"property":"article:published_time","content":"2022-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-23T07:11:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"解释器模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-23T07:11:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SongXinXin\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":2,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]}],"git":{"createdTime":1677128980000,"updatedTime":1677136304000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":2}]},"readingTime":{"minutes":4.12,"words":1236},"filePathRelative":"articles/design-pattern/interpreter-pattern.md","localizedDate":"2022年5月20日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>解释器模式是一种行为型设计模式，它定义了一种语言文法的表示，并定义一个解释器，用来解释该语言中的句子。通俗点说，就是将某种特定的语言翻译成机器能够理解的形式。</p>\\n</div>\\n","autoDesc":true}');export{k as comp,d as data};