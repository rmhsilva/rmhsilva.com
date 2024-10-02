---
title: "2020: A Year Of Serverless"
type: essays
slug: 2020-a-year-of-serverless
date: 2021-02-16T18:02:08.636000
---



_I spent most of 2020 working with Serverless systems, and this is a summary of my thoughts and findings._



Here's a controversial statement: cloud engineers are not programmers. The industry (including me) is building cloud applications like hardware, not software. Most cloud teams have a heavily waterfall (!) style process, though they won't admit to it.

There's a requriements gathering phase, a design phase, an implementation phase, and a test phase (all of this usually spread over several weeks). Care is taken at every step to plan things because infrastructure, like hardware, is hard.

Shouldn't we aspire to treat cloud applications just like real software?

Serverless technology (cloud functions, not platforms) is moving us in the right direction, but isn't there yet.



## Microservices are an anti-pattern?

Why do we use microservices?

* Simple replacement of service components (deployment)
* Separation of concerns
* Multiple programming languages in one system
* Other reasons?

Problems they cause:

* Rigidity and brittleness, leading to up-front design work.
* Testing complexity
* Waterfall-style development (services, agree on apis, implement, integrate, test).

Microservices done badly are just [distributed monoliths](https://changelog.com/posts/monoliths-are-the-future), which are 10x worse than normal monoliths, because **network unreliability**.

Are they an anti-pattern which only exist because current deployment methods aren't good enough, and the application abstractions are leaky? Maybe we formally optimise structure because there isn't a compiler which can optimise it for us).

Could we apply traditional software engineering approaches to cloud systems?

For example, if we had a C/C++ program with multiple components, we would
compile each component individually, and then link them together to form the complete application. We could let multiple teams work on the complete application - each team builds libraries (microservices).

If our cloud deployment system was smart enough, it could iteratively deploy the application, so we eliminate all the reasons to use microservices (except the multiple languages reason).



## Serverless - Soft Infrastructure

There aren't that many ways to build serverless projects, [Serverless
Framework](https://serverless.com) is great for small projects, but if you're doing something bigger, you'll need to understand AWS.

Cloud functions are probably commodities -- most cloud providers have them and prices are being driven downwards and performance is shooting upwards. This is great for us, so I spent a big chunk of 2020 (during the Covid-19 lockdowns) working on a different approach to serverlesss computation.

The key goal was to take the orchestration logic out of the programmers hands, so that a "compiler" can determine the optimal infrastructure and glue logic. Just like a C/C++ compiler determines the optimal sequence of CPU instructions. The novel contribution was to allow the programmer to use cloud functions as threads in a concurrent programming language. This is then general and poweful enough to implement any kind of workflow.

The implementation is a runtime (virtual machine) and a compiler. The runtime defines semantics for concurrent computation distributed across multiple threads. The compiler maps programs into infrastructure for specific cloud providers.

Secondary goals:

* Development speed
* Portability - as the programmer does not directly specify the infrastructure, one could define compilers and runtime environments for any cloud.
* Zero infrastructure management - programmers shouldn't be doing infrastructure, because **infrastructure is hardware**.

Result: [Hark](https://condense9.com).



## Some questions

### Is it better to build a new language and VM, or implement a cloud-native runtime for an existing language/VM (eg Python or Go)

C is heavily designed for a specific CPU architecture, which is precisely what allows you to build performant programs in it. Why should cloud be different?

Go might be "trivially" portable.

### Is a turing complete language _really_ necessary to describe the kind of
systems we implement in the cloud? Or is a workflow language sufficient (ie, Airflow, Dagster et al)?

My gut is that programmers using workflow-style systems eventually try to write "proper" programs in the workflow style, because that's what programmers do.

### Could we build something like Hark on top of Firecracker to orchestrate functions?

This could reduce the startup overhead...

But it'd be a _new_ platform, and would compete with AWS Lambda. Probably not a great idea.

### How do we make data sharing performant?

Storage and sharing data across threads is slow, because there's network traffic and we can't control the placement of our containers in AWS's infrastructure. Are we just waiting for someone to build a better database? (distributed database optimised for specific workloads).



## Reading Material

Quite a few institutions and clever people are thinking about ways to formalise serverless computation. This is great!

> **Formal foundations of serverless computing**.  Jangda, A., Pinckney, D.,
Brun, Y., & Guha, A. (2019). Proceedings of the ACM on Programming Languages, 3(OOPSLA), 1–26. https://doi.org/10.1145/3360575

* Great academic paper which lays out a formal lamdba calculus for distributed computation across cloud functions, encapsulating the execution semantics (retries, etc).

> **Formalizing Event-Driven Behavior of Serverless Applications**.  Obetz, M., Patterson, S., & Milanova, A. (2019). http://arxiv.org/abs/1912.03584

* Another nice formal definition of operation semantics for serverless systems.

> **The Stanford Builder (GG)**.
https://www.usenix.org/system/files/atc19-fouladi.pdf

* Some great work at Stanford. The ffmpeg demo is incredible.

> **The Design of Stateful Serverless Infrastructure**.
https://www.vikrams.io/papers/thesis.pdf

* A completely new platform for stateful "serverless" computation. Very nice
work; bold move to entirely replace AWS Lambda / GCF.

> **Serverless: I’m a big kid now**.
https://www.simplethread.com/serverless-im-a-big-kid-now/

* A great summary article of serverlesss in 2020.
