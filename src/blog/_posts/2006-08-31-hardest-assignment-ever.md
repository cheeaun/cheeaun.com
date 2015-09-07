Hardest Assignment Ever
===

The past few days have been like a nightmare to me. I've just finished my assignment two days ago, including the demonstration and report. Gosh, it's really the **hardest assignment I've ever done**.

The subject is Digital Systems Design. My assignment is to design a *simple* tablet counter system. My group consists of four persons, each will be doing their part. We are given four weeks to finish it up, demonstrate our system to the lecturer and pass up the report in time. Sounds simple, right?

**Wrong.**

Even though my group consists of four persons, as so do other groups, the problem is that I am the only one who is good in coding. All my other group members don't even know how to start writing [Verilog](http://en.wikipedia.org/wiki/Verilog) codes and couldn't understand the basics of parallel programming at all! Okay, I'm not alone. There are some of my friends in other groups facing this harsh situation as well. One person doing four persons work, especially in coding. That is very tiring, indeed.

![tablet counter system block diagram, showing the input and output ports, including the port names](/blog/images/figures/diagram/tablet-counter-system-block-diagram-input-output-ports.png)

So, what is this *tablet counting system* anyway? Well, it's a system to calculate the number of tablets that goes into every bottle, something like what you could see in factories. It can count up to 100 tablets and the user can set a custom maximum tablets count into the system too. As good as it gets, the system utilizes few *modules*, such as the synchronizer, hex keypad code generator, 2-digit BCD counter, programmable comparator and BCD-to-7-segment decoder. Cool.

To make the system as perfect as possible, I have to think of so many things, like for example the input and output ports required for each modules. What would happen if I use asynchronous reset on my system? Is the synchronizer used to prevent [metastability](http://en.wikipedia.org/wiki/Metastability) problems? How does the hex keypad code generator works since the input ports are the keypad row signals and the output ports are the keypad column signals? If I press the key for a long time, would it cause problems? Do I need to apply [finite state machine](http://en.wikipedia.org/wiki/Finite-state_machine) for the BCD counter? How do I apply finite state machine for the programmable comparator, using the Moore model? How do I make the system interacts with other systems? I have to remember, Verilog is not a *sequential* programming language, instead it's a hardware description language. Every line of the source codes runs parallel. It has to be [synthesizable](http://en.wikipedia.org/wiki/Logic_synthesis "Logic synthesis"), can be turned into hardware.

Yet, another hard part is to create test benches for every module and instantiate all of them together into one big RTL-level module. Then there's the high-level module which almost makes my mind crazy!

Fortunately, my group members helped me to wrap up the report and pass it up in time. Our group demonstration went on quite smoothly, with few tiny hiccups. The lecturer stayed with us till 11 in the campus. And at that time, **all of us** haven't had our dinner yet! Haha!

Now, I'm really glad that this assignment is over. I learn a lot. I think a lot. Thanks to my lecturer.

To all Malaysians, **Happy Merdeka Day**. To all Malaysian bloggers, behold the *revitalized* [Merdeka Blogger Project](http://merdekablogger.org/) web site!