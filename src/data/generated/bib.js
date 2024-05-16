﻿define({ entries : {
    "Chen2023": {
        "abstract": "Deep reinforcement learning has made significant progress in games with imperfect information, but its performance in the card game Doudizhu (Chinese Poker/Fight the Landlord) remains unsatisfactory. Doudizhu is different from conventional games as it involves three players and combines elements of cooperation and confrontation, resulting in a large state and action space. In 2021, a Doudizhu program called DouZero [8] surpassed previous models without prior knowledge by utilizing traditional Monte Carlo methods and multilayer perceptrons. Building on this work, our study incorporates residual networks into the model, explores different architectural designs, and conducts multi-role testing. Our findings demonstrate that this model significantly improves the winning rate within the same training time. Additionally, we introduce a call scoring system to assist the agent in deciding whether to become a landlord. With these enhancements, our model consistently outperforms the existing version of DouZero and even experienced human players.11The source code is available at https://github.com/Yingchaol/Douzero_Resnet.git.",
        "author": "Chen, Yiquan and Lyu, Yingchao and Zhang, Di",
        "booktitle": "2023 International Conference on Cyber-Enabled Distributed Computing and Knowledge Discovery (CyberC)",
        "doi": "10.1109/CyberC58899.2023.00026",
        "issn": "2833-8898",
        "keywords": "Training,Source coding,Neural networks,Games,Multilayer perceptrons,Residual neural networks,Testing,DouDizhu,Reinforcement Learning,Monte Carlo Methods,Residual Neural Networks",
        "month": "Nov",
        "pages": "96-99",
        "title": "DouRN: Improving DouZero by Residual Neural Networks",
        "type": "INPROCEEDINGS",
        "year": "2023"
    },
    "Gao2020": {
        "abstract": "DouDiZhu, a multiplayer game with incomplete information, is the most popular card game in China. Although there are many DouDiZhu card games in the world, the specific characteristics of classical DouDiZhu card games are a harmonious combination of player numbers, player characters (landlords and peasants), deck numbers, and scoring systems. However, research on the complexity and attractiveness of DouDiZhu has not established. Therefore, in this paper, artificial intelligence (AI) players of different levels of DouDiZhu game were constructed for research, self-game simulation was conducted for DouDiZhu AI players, and game refinement measures were used to evaluate and identify the best Settings of the game. The results show that classical DouDiZhu provides the most complex game setup for all types of DouDiZhu AI players, while also clarifying its popularity.",
        "article-num": "141",
        "author": "Gao, Yuexian and Li, Wanxiang and Xiao, Yuhao and Khalid, Mohd Nor Akmal and Iida, Hiroyuki",
        "doi": "10.3390/info11030141",
        "issn": "2078-2489",
        "journal": "Information",
        "number": "3",
        "title": "Nature of Attractive Multiplayer Games: Case Study on China\u2019s Most Popular Card Game\u2014DouDiZhu",
        "type": "Article",
        "url": "https://www.mdpi.com/2078-2489/11/3/141",
        "volume": "11",
        "year": "2020"
    },
    "Kong2023": {
        "abstract": "When applying Artificial Intelligence into the traditional Chinese poker game Doudizhu, it is faced with many challenging issues resulted from the characteristics of Doudizhu. One of these challenging issues is the sparse reward, due to the truth that a valid feedback could be obtained only at the end of a round of the game. Against this, in this paper, a deep neural framework, DQN-IRL, is proposed to address the challenging issue of sparse reward in Doudizhu. The experimental results proves the efficiency of DQN-IRL (Inverse Reinforcement Learning) in terms of winning rate.",
        "author": "Kong, Yan and Shi, Hongyuan and Wu, Xiaocong and Rui, Yefeng",
        "day": "01",
        "doi": "10.1007/s11063-023-11209-0",
        "issn": "1573-773X",
        "journal": "Neural Processing Letters",
        "month": "Dec",
        "number": "7",
        "pages": "9467-9482",
        "title": "Application of DQN-IRL Framework in Doudizhu's Sparse Reward",
        "type": "Article",
        "url": "https://doi.org/10.1007/s11063-023-11209-0",
        "volume": "55",
        "year": "2023"
    },
    "Li2020": {
        "abstract": "Doudizhu poker is a very popular and interesting national poker game in China, and now it has become a national competition in China. As this game is a typical example of incomplete information game problem, it has received more and more attention from artificial intelligence experts. This paper proposes a multirole modeling-based card-playing framework. This framework includes three parts: role modeling, cards carrying, and decision-making strategies. Role modeling learns different roles and behaviors by using a convolutional neural network. Cards carrying can calculate reasonable rules especially for {\\&}{\\#}x201c;triplet{\\&}{\\#}x201d; by using an evaluation algorithm. Decision making is for implementing different card strategies for different player roles. Experimental results showed that this card-playing framework makes playing decisions like human beings, and it can to some extent learn, collaborate, and reason when facing an incomplete information game problem. This framework won the runner-up in the 2018 China Computer Game Competition.",
        "author": "Li, Shuqin and Li, Saisai and Cao, Hengyang and Meng, Kun and Ding, Meng",
        "day": "20",
        "doi": "10.1155/2020/1764594",
        "issn": "1076-2787",
        "journal": "Complexity",
        "month": "Oct",
        "pages": "1764594",
        "publisher": "Hindawi",
        "title": "Study on the Strategy of Playing Doudizhu Game Based on Multirole Modeling",
        "type": "Article",
        "url": "https://doi.org/10.1155/2020/1764594",
        "volume": "2020",
        "year": "2020"
    },
    "Luo2023": {
        "abstract": "Artificial Intelligence (AI) has seen several breakthroughs in some perfect- and imperfect-information games, such as Go, Texas Hold'em, and StarCraft II. However, the Chinese poker game, DouDiZhu presents new challenges for AI systems to overcome, including infering imperfect information, training with sparse rewards, and handling a large state-action space. This article describes our proposed DouDiZhu AI system, RARSMSDou, based on Deep Reinforcement Learning (DRL) algorithms that combines Proximal Policy Optimization (PPO), Relative Advantage Reward Shaping with Minimum Splits (RARSMS), and Deep Monte-Carlo (DMC) into a self-play framework. In RARSMSDou, we propose RARSMS as a novel intrinsic reward to guide the training for PPO in a sparse reward environment. We treat the imperfect information as observable information and feed it into the critic-network of PPO, and we propose abstract actions to simplify the large-action space (27,472 actions) to a low-dimensional action space (309 actions contain 189 specific actions and 120 abstract actions) which is output by the policy network of PPO. When the policy is an abstract action, DMC (DouZeroX) maps this abstract action to its specific action as a policy for training or execution. We compare the performance of RARSMSDou with its four variants (PPO, PPO+RARSMS, PPO+DMC, DMC (DouZeroX)) and five state-of-the-art DouDiZhu AI programs. The experiment results show that after 30 days of self-play and training, RARSMSDou outperforms its variants and DouZero (with a WP of 0.582 and an ADP of 0.414), which is the best DouDiZhu baseline.",
        "author": "Luo, Qian and Tan, Tien-Ping",
        "doi": "10.1109/TETCI.2023.3303251",
        "issn": "2471-285X",
        "journal": "IEEE Transactions on Emerging Topics in Computational Intelligence",
        "keywords": "Games,Monte Carlo methods,Weapons,Training,Artificial intelligence,Q-learning,Rockets,Deep reinforcement learning,DouDiZhu,minimum splits,RARSMSDou,reward shaping",
        "month": "Feb",
        "number": "1",
        "pages": "427-439",
        "title": "RARSMSDou: Master the Game of DouDiZhu With Deep Reinforcement Learning Algorithms",
        "type": "ARTICLE",
        "volume": "8",
        "year": "2024"
    },
    "Luo2024": {
        "abstract": "Deep Reinforcement Learning (DRL) has achieved considerable success in games involving perfect and imperfect information, such as Go, Texas Hold\u2019em, Stratego, and DouDiZhu. Nevertheless, training a state-of-the-art model for complex imperfect-information card games like DouDiZhu and Big2 remains resource and time-intensive. To address this challenge, this paper introduces two innovative methods: the Opponent Model and Optimized Deep Monte-Carlo (ODMC). These methods are designed to improve the training efficiency of Deep Monte-Carlo (DMC) for imperfect-information card games. The Opponent Model predicts hidden information, enhancing the agent\u2019s learning speed in DMC compared to the original training that only utilizes observed information as input features. In ODMC, the Minimum Combination Search (MCS) is a heuristic search algorithm based on dynamic programming. It calculates the minimum combination of actions in the current state, and ODMC uses MCS to filter suboptimal actions in each state. This reduces the action space considered by DMC, resulting in faster training that focuses on evaluating the most promising actions. The effectiveness of the proposed approach is evaluated by examining two complex card games with imperfect information: DouDiZhu and Big2. Ablation experiments are conducted to evaluate both the Opponent Model (D+OM and B+OM) and ODMC (D+ODMC and B+ODMC), along with their combined variants (D+OMODMC and B+OMODMC). Furthermore, D+OMODMC and B+OMODMC are compared with state-of-the-art DouDiZhu and Big2 artificial intelligence (AI) programs, respectively. The experimental results demonstrate that the proposed methods achieve comparable performance to the original DMC, but with only 25.5% of the training time on the same device. These findings are valuable for mitigating both the equipment requirements and training time in complex imperfect-information card games.",
        "author": "Luo, Qian and Tan, Tien-Ping",
        "doi": "https://doi.org/10.1016/j.asoc.2024.111545",
        "issn": "1568-4946",
        "journal": "Applied Soft Computing",
        "keywords": "Optimized deep Monte-Carlo, Minimum combination search, Opponent model, DouDiZhu, Big2",
        "pages": "111545",
        "title": "Improved learning efficiency of deep Monte-Carlo for complex imperfect-information card games",
        "type": "article",
        "url": "https://www.sciencedirect.com/science/article/pii/S1568494624003193",
        "volume": "158",
        "year": "2024"
    },
    "Yang2022": {
        "author": "Yang, Guan and Liu, Minghuan and Hong, Weijun and Zhang, Weinan and Fang, Fei and Zeng, Guangjun and Lin, Yue",
        "doi": "10.48550/arXiv.2203.16406",
        "journal": "Advances in Neural Information Processing Systems",
        "pages": "34954--34965",
        "title": "Perfectdou: Dominating doudizhu with perfect information distillation",
        "type": "article",
        "volume": "35",
        "year": "2022"
    },
    "Yu2023": {
        "abstract": "Deep reinforcement learning (DRL) has recently been employed in various games, with which superhuman intelligence has been achieved, including Atari, Go, no-limit, and Texas hold'em. However, this technique has not been fully considered for Doudizhu which is a popular poker game in Asia and involves confrontation and cooperation among multiple players with imperfect information. In this paper we present a new deep reinforcement learning approach NV-Dou for the game Doudizhu. It adopts a variant of neural fictitious self-play to approximate the Nash equilibria of the game. The loss functions of the neural network integrate Q-Based policy gradient (mean actor critic) with advantage learning and proximal policy optimization. In addition, parametric noises are adopted for the fully connected layers in the neural network. The experimental results show that it needs only a few hours of training and achieves almost state-of-the-art performance comparing with the well-known open implementations RHCP, CQL, MCTS and others for Doudizhu.",
        "author": "Yu, Xiaomin and Wang, Yisong and Qin, Jin and Chen, Panfeng",
        "day": "01",
        "doi": "10.1007/s10489-022-04281-x",
        "issn": "1573-7497",
        "journal": "Applied Intelligence",
        "month": "Jun",
        "number": "12",
        "pages": "15372-15389",
        "title": "A Q-based policy gradient optimization approach for Doudizhu",
        "type": "Article",
        "url": "https://doi.org/10.1007/s10489-022-04281-x",
        "volume": "53",
        "year": "2023"
    },
    "Zha2021": {
        "abstract": "Games are abstractions of the real world, where artificial agents learn to compete and cooperate with other agents. While significant achievements have been made in various perfect- and imperfect-information games, DouDizhu (a.k.a. Fighting the Landlord), a three-player card game, is still unsolved. DouDizhu is a very challenging domain with competition, collaboration, imperfect information, large state space, and particularly a massive set of possible actions where the legal actions vary significantly from turn to turn. Unfortunately, modern reinforcement learning algorithms mainly focus on simple and small action spaces, and not surprisingly, are shown not to make satisfactory progress in DouDizhu. In this work, we propose a conceptually simple yet effective DouDizhu AI system, namely DouZero, which enhances traditional Monte-Carlo methods with deep neural networks, action encoding, and parallel actors. Starting from scratch in a single server with four GPUs, DouZero outperformed all the existing DouDizhu AI programs in days of training and was ranked the first in the Botzone leaderboard among 344 AI agents. Through building DouZero, we show that classic Monte-Carlo methods can be made to deliver strong results in a hard domain with a complex action space. The code and an online demo are released at https://github.com/kwai/DouZero with the hope that this insight could motivate future work.",
        "archiveprefix": "arXiv",
        "author": "Zha, Daochen and Xie, Jingru and Ma, Wenye and Zhang, Sheng and Lian, Xiangru and Hu, Xia and Liu, Ji",
        "doi": "10.48550/arXiv.2106.06135",
        "eprint": "2106.06135",
        "primaryclass": "cs.AI",
        "title": "DouZero: Mastering DouDizhu with Self-Play Deep Reinforcement Learning",
        "type": "misc",
        "year": "2021"
    },
    "Zhang2023": {
        "author": "Zhang, Xiaochuan and Wang, Xin and Yang, Xiaoman and Yan, Mingzhu and He, Piao",
        "booktitle": "2023 35th Chinese Control and Decision Conference (CCDC)",
        "doi": "10.1109/CCDC58219.2023.10327476",
        "keywords": "Video games,Supervised learning,Games,Reinforcement learning,Convolutional neural networks,Artificial intelligence,Bidding in DouDizhu,Convolutional Neural Network,Perfect Information Distillation,Winning Distance",
        "pages": "2287-2292",
        "title": "Mastering Bidding in Fight the Landlord with Perfect Information Distillation",
        "type": "INPROCEEDINGS",
        "year": "2023"
    }
}});