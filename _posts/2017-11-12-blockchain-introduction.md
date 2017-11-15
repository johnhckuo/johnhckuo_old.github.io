---
title: Blockchain - Introduction
layout: page
category: Tech
tags:
- blockchain
- technology
---

<header class="blogFirstParagraph">
<span class="image left"><img src="/images/blog/blockchain.png" alt="" style="width:120px; height:120px;"/></span><p>Blockchain, knows as the distributed ledger, is a decentralized database that can store transactions records in each node participate in the network.
</p>
</header>

<p><h5>Why it is called 'blockchain' ?</h5>Because it is a chain of many blocks. Each block store some transaction records, and all the transaction records form blockchain. </p>
<p>
<p><h5>How does it works ?</h5>
Just imagine it is a ledger. If you want to join this network, you have to download and synchronize this ledger to your local computer. This results in everyone owns a ledger in their own node. <br />
If any new transaction record comes in, all the nodes will be notified. If all nodes accept this as an valid transaction, it means that all participants have reach consensus and agree upon the establishment of this transaction. Lastly, this new record will insert into all the ledger everyone holds. </p>
<hr />

<p><h5>The purpose of blockchain in the beginning </h5>

The concept of blockchain is proposed by Satoshi Nakamoto in 2009, and he introduced two concepts simultaneously in that year.<br />The first concept is the Bitcoin, a decentralized peer to peer online currency that maintains value without the existence of banking. However, there is another concept which is equally important as Bitcoin, and it is the concept of proof of work-based blockchain to allow for public agreements on the order of transactions (Buterin, 2004). <br />Blockchain is able to identify the sequence of each transaction and provide consensus mechanism, making the implementation of Bitcoin complete.
</p>

<hr />

<p><h5>What are the main characteristics of  blockchain ?</h5>
There are four main characteristics of blockchain proposed by Fecher (2016), and they are listed as follows:
<ol>
<li style="margin-top:1em;"><h5>Decentralized</h5>
Blockchain decentralizes the way we store data and manage information, potentially leading to a reduced role for one of the most important regulatory actors in our society: the middleman. </li>
<li style="margin-top:1em;"><h5>Distributed </h5>
The distributed characteristic means that there is no single hardware infrastructure storing and running the service. Often, this means that a copy of a database exists on several computers inside the network. In the scenario of blockchain, it means that a copy of the ledger exists on all full-nodes within the network.</li>
<li style="margin-top:1em;"><h5>Immutability </h5>
It means that strictly speaking data cannot be changed in blockchain. However, in practice, this means that data cannot be changed without leaving a trace, which indicates that each transaction is recorded. And this means that old versions can be recovered and that any changes will be protocolled in a system. It is like comparing an excel sheet in which values can be changed at will to a piece of paper. On paper a trace of every manipulation is left displayed.</li>
<li style="margin-top:1em;"><h5>Transparent </h5>
All nodes owns a copy of the whole ledger, so it means each node which get synchrnized with blockchain owns the access of all the info on this ledger. Moreover, we can use some third-party applications like  <a href="https://etherscan.io/">Etherscan</a> or <a href = "https://blockchain.info/">Bitcoin block explorer</a> to view all the information of ledger without getting connected to the chain.</li>
</ol>
</p>

<hr />
<p><h5>What does blockchain actually solves? ?</h5>

Technically, the blockchain solved the <a href = "https://en.wikipedia.org/wiki/Byzantine_fault_tolerance">Byzantine Generals’ Problem</a>, which means that it allows multiple parties to reach consensus without the need to trust each other.<br />
Blockchain has the ability to weaken and limit the controlling power of intermediaries. Since it is a P2P network, we don't need bank when transferring money to others. In our daily life, we may depend on some third-parties companies to record each transaction we made on their ledger. And we use thier service based on our trust toward them instead of other services; however, this trust comes at a cost as each of these intermediaries charge the buyer or seller a fee to maintain a ledger of who owns what. <br /><br />
As a result, blockchain brings both trust and lower cost to users. In addition to payment, the advantages of blockchain can bring benefits to many other industries, like proving users' ownership of smart properties and making public of government data to ensure transparency. Besides these benefits, I think there is one more advantage blockchain enables : universal communication.  <br /> 
If John is the user of bank A and he wants to transfer money to Bill from bank B, the transaction cost will be higher since they are the user of different bank. Different bank means different systems. And the communication cost bewteen two different system is surely higher than the one with the same communication interface. However, if all the banks use blockchain as the tool to synchronize the transction data of different users, then blockchain will becomes the bridge of different companies or even different industries, which enlarge the potential of blockchain. <br />IOT is another industry that can benifit from universal communication since the devices from different IOT companies have different interfaces, which is quite pitty because they cannot share valuable data with each other and enhance the quality of user experience. Obiously, different companies prone to not share their customer data with other competitors, and this phenomenon actually destroys so many chance of the evolution of human society. I believe blockchain will become next generation of Internet : web 4.0, the Internet of value. Why? I'll discuss about it in the following post. C:
</p>
<hr />

<p><h5>Does blockchain really eliminates the existence of intermediary parties ? </h5>
You might ask why is blockchain weakening the existence of intermediaries instead of just eliminating them. Every service needs a service provider, and service provider must interfere the service in certain situations to sustain their service. Let's just  take Ethereum, the DApp platform, for example. Ethereum is not a pure P2P network actually; the Ethereum foundation, which creates the Ethereum, has to break the rules that have been set in the beginning and restore some malicious transactions just to make sure that the network sustains. So we cannot say blockchain removes intermediaries entirely, but weakens the power of them. <br />So some might say that Bitcoin will replace the existence of banks. I don't really think so. Banks can utilize the advantages of blockchain and upgrade their service to the next level. Corda is the living example of the action banks made toward the appearance of blockchain. (Although they claim that Corda is inspires by blockchain, but it is not blockchain). 
</p>

<hr />
<p><h5>Which scenario does blockchain fit in the best ?</h5>
Nowadays, many organizations hold the ambition to provide an ecosystem that can be fully trusted by stakeholders, including customers, supplier, or other corporate partners. However, the issues of transparency, unavailability, and untraceable can be hard to deal with, and the blockchain technology can solve these problems once and for all. <br /><br />
But blockchain does not fit in every industry. Based on the issues blockchain able to solve mentioned above, we have to consider whether they can be applied in our own service or not. If 'Trust" is an important advantage to your service (e.g. third party payment), you can consider integrate your service with blockchain. Just don't follow the trend blindly without considering the applicability between blockchain and your service.
</p>