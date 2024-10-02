---
title: "Blockchain mail (b-mail)"
type: essays
slug: blockchain-mail-b-mail
date: 2021-03-29T17:57:58.996000

---



I keep coming back to this idea of an email-like system based on smart contracts.

The core proposal is that there should be economic incentive to only communicate valuable information. Sending an e-mail should cost "something".

Why doesn't this exist now? Possibly because the obvious way to do it involves a centralised authority which charges you (eg a post-office), and that isn't appealing for multiple reasons. But actually we could implement a system like this quite easily with blockchain (a mutually trusted mechanism of transferring wealth) and smart-contracts (a way to write decentralised software).

 As a convenient bonus, encryption is first class.

The core challenge is to determine the pricing mechanism, and, ideally, the network itself would determine the pricing mechanism (eg automatically penalising spammers). A secondary question is whether we need a way of establishing some kind of trust between parties.

## So how would this work?

The basic mechanism is straightforward:

* To send a message to someone, you use their public key to encrypt and wrap the message (headers+body) into a token and publish it on the blockchain.
* A smart contract takes up your message, determines a suitable messaging fee, and transfers the fee from your account to your recipient's account, pushing the message to the recipient at the same time.

    - There's some encryption magic to ensure the message is only readable once the smart contract has processed it.
* The recipient decrypts your message with their private key and reads it.
* After that, and depending on the messaging fee algorithm, or network rules, anything more complex could be done.

## Pricing structures

The cost to send a message could be fixed or determined dynamically. For example, it _could_ based on

* The size of the message.
* Some other property of the message content (eg "information density")
* The number of times you've messaged that person before
* The number of messages you send per T (rolling time window), which could discourage sending many messages
* The "correspondence factor" of the two participants (eg ratio of to/from each party, possibly with a time-factor). This could reduce the cost for friends who talk often.
* Could the contract involve a "contacts list"? ie the message is free if **both people** agree for it to be free.
* The number of people you're sending the message to

Between friends, you'd probably want the cost of messaging to be extremely low, and in a situation where the correspondence factor is high, the cost would be expected to average out. In this situation, it would be important to have extremely low transaction fees, or to have a way to batch transactions (ie level 2). For ETH, this would probably be a level 2 protocol, though if a fast and cheap network like Avalanche is used, it could be done on-chain.

Note that this would be **real wealth** being transferred between people, alongside information. You'd literally be paying people to read your messages. The pricing mechanism would have to be designed to make it totally cost-prohibitive to spam people.

It's like the traditional post system, except that we pay _each other_ instead of a centralised third party. We pay each other to contribute and act as valuable citizens.

Also, there could be many networks, and each network could have different rules. So, for example, you could have one b-mail for personal correspondence, and another for newsletter-style correspondence, and the pricing mechanisms could be quite different. Each network has a different set of smart contracts, built on the same fundamental mechanism.

## Reputation

Why is reputation needed? Why can't we just use money? Because most games humans play are about winning either wealth or status, and we tend to trade one for the other. Blockchain communities are necessarily collaborative, and reputation is extremely valuable in a collaborative society.

How does one earn reputation? By sending emails which are not marked as spam.

In a system where we want to incorporate some kind of reputation system, after reading the message, the recipient could publish an acknowledgement on the chain with an indication of how valuable the information was. This could be as simple as yes/no/abstain. There would probably need to be rules here to prevent gaming the system. For example, the weight of the acknlowedgement could decrease over time. The pricing mechanism could then be based on your reputation.

The reputation would be stored in a token, and a set of smart contracts would goven their behaviour.

Reputation could be fungible (ie if I have 10 reputation, I can "endorse" someone else up to 10-N reputation, N tbd, for example - there could be other endorsement rules). This could permit anyone to create multiple pseudonyms which, with some ZKP magic, all "share" their reputation, but cannot be linked. This could even work across networks.

### Issues/Questions

Reputation systems are hard, and this is vulnerable to the classic average rating problem, where one extremely negative review ("you killed my friend") is lost in a sea of mediocre reviews ("I use this sometimes, works ok")? ([XKCD ~ TornadoGuard](https://xkcd.com/937/))

What does having more reputation "buy" you? Other than cheaper messages? Maybe there could be rules that allow people to block messages from senders with reputation below a given value.

## Why does this work?

As a recipient, if you value the information, you're incentivised to not mark it as spam (because if you do, you're less likely to receive more of it).

As a sender, you're incentivised to think carefully about the information you send, because it costs you real money to send it. The meaning of "think carefully" would depend on the network rules as described above, and it could, for example, involve some kind of reputation consideration.

If (and only if) the rules are chosen carefully, and assuming there is an equilibrium condition (that is, the cost of messaging is stable in some sense), the net effect is that the information transferred is mutually valuable to both the sender and recipient, and everyone is happy. 

Of course, this system doesn't feel at all necessary for communicating between friends, and it seems likely that email could continue to be the protocol of choice there. However, as a mechanism of communication between organisations, or as a mechanism of news-distribution, this could be nice.

## Appendix

**A deep problem with blockchain:** how to change applications after they've been deployed.

* One general solution might be a kind of contract which automatically transfers wealth (eg COIN1 -> COIN2) when certain conditions are satisfied. But is there a [Gödel loophole](https://en.m.wikipedia.org/wiki/G%C3%B6del's_Loophole) here where the master contract itself can be changed (maliciously) to extract wealth?

**What does decentralised mean?** Ethereum is a platform for hosted protocols (smart contracts). The current internet is a home for applications. Protocols are valuable because anyone can participate without needing to obtain consent from a central party.



