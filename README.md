# kickstarter-solidity

Kickstarter-like application made with Soldity, Node, ReactJS and NextJS where someone can create a Campaign and people can donate to that campaign. Then, the manager of the campaign can make different requests to buy services or stuff for the campaign and the donators can approve that request. 

The manager can only finalize the request and send that money to the recipient of that request when more than half of the donators have approved it. 

The smart contract gets the contributed amount and it is directly withdrawn from it to the recipient when finalizing a request that has more than half approvals.