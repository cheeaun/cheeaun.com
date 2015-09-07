Nothing to write
===

One of these days, I feel like I have nothing to write on my blog. Every day, things just happen to be quite the same. The lecturers just keep on teaching new chapters day by day. I take the bus to my campus from 9AM and back home at around 5PM. Whenever there's no more class for the day, I'll be hanging out in the Internet room and surf some web sites. For the whole week, my classmates and I will be busy to finish up our experiment reports and assignments before dateline.

Hmm.. now I understand why some university students don't have blogs. Even if they have one, it wouldn't be updated much often, like mine for example. Even if they update it often, the blog entries wouldn't be lengthy, or contain at least 3 paragraphs. Even though *this* is my personal blog, I don't write much about that *small* things that happen in my life. I don't blog about the ridiculous canteen food, the weird air conditioning system in my campus or my course mates' funny jokes. Besides, I take quite some time to write an entry as I need to make sure that my grammar is okay and my language is easily understandable. Generally, my weblog serves as a web platform for me to publish my own articles, opinions and experiments. That's all.

Before this, I use to spend some time on stuff other than my school homework. This is how I manage to learn HTML and CSS when I was in Form 4. Now, the situation is a little different. For the past few weeks, my mind is fully focused on a computer programming language called 'C'. I realised that my programming skills aren't so *bad* after all, though C seems to be quite harder than PHP. I have converted myself from a PHP beginner to a C beginner. Cool.

And don't worry, I do have few code examples to share, so here's one I like:

<pre><code><em class="remark">/* Calculate pi value */</em>
#include &lt;stdio.h&gt;
#include &lt;math.h&gt;

int main(void)
{
    unsigned long limit, i;
    long double series = 0, pi;
    double percentage, prev_percentage = -1;

    printf(&quot;Enter the limit: &quot;);
    scanf(&quot;%d&quot;, &amp;limit);

    printf(&quot;Please wait... &quot;);

    for ( i=1 ; i&lt;=limit ; i++)
    {
        series += 1.0/(pow(i,2.0));
        <em class="remark">/* calculate percentage */</em>
        percentage = (double) i/limit*100;
        <em class="remark">/* only print percentage when needed */</em>
        if ( (int) percentage &gt; (int) prev_percentage )
            printf(&quot;%3.f%%\b\b\b\b&quot;, percentage);
        prev_percentage = percentage;
    }

    <em class="remark">/* calculate pi */</em>
    pi = sqrt(6*series);

    printf(&quot;Completed\npi = %lf\n&quot;, pi);

    return 0;
}</code></pre>

I've also coded a simple two-player number guessing game, for everyone's pleasure:

<pre><code><em class="remark">/* Two-player number guessing game */</em>
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;time.h&gt;

#define MIN_NUM 0
#define MAX_NUM 100

int main(void)
{
    int i, j, rand_num, guess_num, min_num, max_num;
    char play;

    do {
        <em class="remark">/* initialise min and max num */</em>
        min_num = MIN_NUM;
        max_num = MAX_NUM;

        <em class="remark">/* generate random number */</em>
        srand(time(NULL));
        rand_num = rand() % (max_num+1);

        <em class="remark">/* instructions */</em>
        printf(&quot;\\tThis game requires two players.\n&quot;);
        printf(&quot;\\tEach player have to guess a number between %d and %d.\n&quot;, min_num, max_num);
        printf(&quot;\\tThe player who got it wins the game.\n&quot;);

        i = 0;
        do {
            <em class="remark">/* switch both players */</em>
            if ( i % 2 == 1 )
                j = 2; <em class="remark">/* odd i */</em>
            else
                j = 1; <em class="remark">/* even i */</em>

            <em class="remark">/* display which player */</em>
            printf(&quot;\n&quot;);
            if ( j == 2 ) printf(&quot;\\t&quot;);
            printf(&quot;Player %d\n&quot;, j);

            <em class="remark">/* input guess number */</em>
            do {
                if ( j == 2 ) printf(&quot;\\t&quot;);
                printf(&quot;Enter your guess: &quot;);
                scanf(&quot;%d&quot;, &amp;guess_num);
                if ( guess_num &lt;= min_num || guess_num &gt;= max_num )
                {
                    if ( j == 2 ) printf(&quot;\\t&quot;);
                    printf(&quot;\\tYou should guess a number between %d and %d!\n&quot;, min_num, max_num);
                }
            }
            while( guess_num &lt;= min_num || guess_num &gt;= max_num );

            <em class="remark">/* re-assign min and max number */</em>
            if ( guess_num &gt; rand_num )
                max_num = guess_num;
            else if ( guess_num &lt; rand_num )
                min_num = guess_num;
            else
                break;

            <em class="remark">/* display range of numbers available */</em>
            if ( j == 2 ) printf(&quot;\\t&quot;);
            printf(&quot;Range: %d - %d\n&quot;, min_num, max_num);

            i++;
        }
        while( guess_num &gt; rand_num || guess_num &lt; rand_num );

        <em class="remark">/* determine the winner */</em>
        printf(&quot;\n&quot;);
        if ( j == 2 ) printf(&quot;\\t&quot;);
        printf(&quot;Player %d is the winner! Yeah!!!\n\n&quot;, j);

        <em class="remark">/* ask wanna play again? */</em>
        printf(&quot;Wanna play again (Y for yes) ? &quot;);
        fflush(stdin);
        scanf(&quot;%c&quot;, &amp;play);

        <em class="remark">/* clear the screen */</em>
        if ( play == &apos;Y&apos; || play == &apos;y&apos; )
            system(&quot;cls&quot;);
    }
    while( play == &apos;Y&apos; || play == &apos;y&apos; );

    return 0;
}</code></pre>

Please note that my codes are not perfect. Ignoring them is optional.

Due to this fact, it has been a long time I haven't focus on XHTML, CSS, PHP, icons design and theme design. I might not be able to participate in [CSS Reboot Fall 2005](http://cssreboot.com/) this time. As the release of Mozilla Firefox 1.5 is just around the corner, I really doubt if I could update my Phoenity theme in time. Sigh, so many work, yet so little time.