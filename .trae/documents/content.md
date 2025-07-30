# 复旦大学大数据与数据科学方向招收2025级硕博生

复旦大学大数据与数据科学领域主要从事“**大规模数据管理与分析**”的前沿研究，主要包含**大数据管理和查询处理**、**工业大数据分析**、**智能运维大模型**等三大方向。实验室依托上海市数据科学重点实验室，主持和参与数十项科技部重点研发计划项目、国家自然科学基金联合基金项目、国家973课题等项目，在SIGMOD、VLDB、ICDE、SIGKDD、AAAI、ICSE等国际顶级学术会议和期刊上发表100多篇学术论文。

实验室现有教授两名，分别是汪卫教授、王鹏教授，博士后1名（陈佳），博士/硕士研究生六十余名，形成了具有较强的科研实力、结构合理的科研梯队。

实验室和工业界保持密切的合作关系，包括和中国移动共同成立的**智维大模型联合实验室**，和华为、阿里/蚂蚁金服、字节、新浪等公司的合作，以及和铁科院、航天八院、上汽、沪东中华的合作。成果在智能运维、智能制造等领域有多个落地场景。

---
**研究方向**：

- **智能运维**
    - **大规模日志处理**：日志数据是智能运维中的核心数据类型，具有量大、格式复杂多样、吞吐量大等特点。在日志解析方面，提出了基于树的日志模板表示和解析算法，准确性超越同类算法，成果发表在SIGMOD'2024。提出了基于大模型的日志解析算法，成果发表在ICSE'2024。在日志数据管理方面，提出了基于模板的日志压缩算法，达到超过95%的日志压缩率。成果在银联、交通银行等多家企业应用落地。
    - **告警收敛和根因定位**：IT系统发生故障时，会在短时间内产生上千甚至上万条告警，形成告警风暴，如果对关联告警进行识别和收敛，并从中识别根因相关告警，是智能运维中的核心问题。团队提出了多项创新成果，包括基于告警内容和时序关系的告警收敛算法、基于拓扑的告警收敛算法以及基于大模型的告警收敛算法。成果发表在ICSE'2022、COMPLEXITY‘2022等会议和期刊。成果在华为无线网络、华为公有云等场景落地。
    - **异构运维大数据管理和查询**：针对运维中普遍存在的指标数据、日志数据、调用链数据和CMDB数据，团队研发了高效的管理平台。并且，为了融合这些异构数据，团队提出了面向运维的统一数据表示模型和统一查询系统。
- **大模型通用技术及其在运维领域的应用**
    - **RAG检索增强**：RAG检索增强是大模型落地最重要的场景，可以有效的将大模型和企业私域积累的海量知识进行有效结合。团队研究内容主要包括：复杂文档结构理解、表格内容理解、大规模运维知识库构建、幻觉消除等。团队研发了告警理解系统和面向告警的处置方法推荐系统，在多家银行、券商等企业落地。实验室有充足的算力，对GLM、Qwen、LLaMA有丰富的训练和微调经验。
    - **大模型Agent**：依托和中国移动共同成立的**智维大模型联合实验室**，团队致力于构建各个领域的运维智能体，以支持自动故障定位和排障。通过大规模的排障指令数据，全参数微调大模型，增强大模型面向运维的规划能力和运维工具的调用准确性。
    - **基于大模型的自然语言转查询**：针对大规模数据库上的Text2SQL问题，团队提出了基于大模型的解决框架。研究内容还包括：融合RAG技术的Text2SQL方法、数据库字段注释自动生成算法等。同时，团队希望能够提出一套可复制的方法，解决面向NoSQL数据库的Text2QL通用问题。研究方向还包括针对异构运维数据的Text2QL。
- **大数据管理和查询处理**
    - **向量数据库**：随着深度学习和大模型技术的快速发展，向量数据库的重要性日益明显。在向量数据库方面，团队的研究内容主要包括：向量数据集和查询的困难度（hardness）衡量方法、向量相似性查询的高可靠性索引结构、索引结构和参数智能推荐方法、稀疏向量和稠密向量混合查询算法等，成果发表在国际会议VLDB。团队在该领域的的综述论文发表在IEEE Data Engineering Bulletin。
    - **时间序列管理**：随着传感器数据的普及，各个领域产生海量的时间序列数据，近年来也诞生了多个时间序列数据库。团队在时间序列相似性查询、时间序列数据库方面提出了多项成果。在完整时间序列相似性查询方面，团队的DSTree索引结构发表在VLDB，被VLDB'2018和VLDB'2019的综述论文评为最推荐算法。团队提出的Dumpy索引结构发表在SIGMOD’2024，有效提升了索引构建效率和查询处理效率。在子序列相似性查询方面，团队提出的KV-match发表在ICDE国际会议，并实现到Apache顶级项目IoTDB中。团队的王鹏教授作为唯一国内学者，受邀参加了2019年在德国举办的题为”Data Series Management“的达堡论坛（Dagstuhl Seminar）。
    
- **工业大数据分析**
    - **时序数据挖掘**：团队在时间序列分类、时间序列聚类、时间序列关联分析、时间序列工况切分、时间序列预测和异常检测等方面具有丰富的经验。主持了科技部重点研发计划“制造大数据分析关键技术与算法“，自然科学联合基金”面向工业应用的大数据分析理论与关键技术“等项目，成果发表在SIGKDD、SIGMOD、VLDB、ICDE、TKDE等国际会议和期刊。成果应用在高铁、船舶、卫星、汽车等领域，在沪东中华、铁科院、上汽等落地。   

------

**招生导师**：
地址:   复旦大学江湾校区交叉二号楼D3013

- **王鹏教授**：复旦大学计算机科学技术学院教授、博导，上海市数据科学重点实验室副主任，上海市计算机学会数据库专委会副主任。研究兴趣包括工业大数据管理和分析、智能运维、向量数据库、大模型等。教育部自然科学二等奖（第三完成人）。主持多项国家自然科学基金项目、科技部重点研发计划课题和上海市项目。成果发表在SIGMOD、VLDB、ICDE、SIGKDD、ICSE、TKDE等权威会议和期刊上。国际知名学术期刊VLDB Journal、TKDE、KIS等的审稿人。邮箱：[pengwang5@fudan.edu.cn](mailto:pengwang5@fudan.edu.cn)，个人主页：[https://pengwang511.github.io/](https://pengwang511.github.io/)。







- **汪卫教授**：复旦大学计算机科学技术学院教授，博士生导师，上海市计算机学会数据库专委会主任，教育部新世纪优秀人才。研究方向是大数据管理与分析技术，在工业大数据管理和语义分析方面展开了系统的研究和开发。在 SIGKDD、SIGMOD、VLDB、IEEE TKDE 等国际顶级会议和期刊上发表论文100多篇,论文引用3000多次，单篇最高引用748次。主持了国家自然科学基金项目重点项目“面向工业应用的大数据分析理论与关键技术”等国家和省部级项目10多项。开发了包含包括故障根因分析、事件预测、工况切分、基于知识图谱的设备故障定位等70多个制造数据分析算法的工业大数据分析云计算平台，相关技术在上汽、中船、铁科院、华为等多个工业场景得到应用。作为负责人获得教育部自然科学二等奖，作为参与人获得上海市科技进步一等奖 1 项、二等奖 2 项和国家级教学成果二等奖一项。邮箱：[weiwang1@fudan.edu.cn](mailto:weiwang1@fudan.edu.cn)。
---
**联系方式**：
欢迎报名体验实验室的研究氛围并与未来的导师和师兄师姐进行面对面的交流。直接发送信息至[pengwang5@fudan.edu.cn](mailto:pengwang5@fudan.edu.cn)，或直接联系招生导师。


主要项目

制造大数据分析关键技术与算法，科技部重点研发计划，课题负责人，2020.11-2023.10.

大规模时间序列分析平台搭建及其在智能车等时序数据分析场景中的应用研究，赛可智能科技（上海）有限公司，2022.8-2024.4.

告警因果关系挖掘和根因定位技术合作项目，华为，2019.10-2020.10.

智能运维算法研究，上海擎创信息技术有限公司，2020.4-2021.3.

面向高端制造的大数据管理系统,科技部重点研发计划,子课题负责人，2016.7-2019.6.

大规模监测型时间序列历史数据的查询和分析关键技术研究，自然科学基金面上项目，项目负责人，2017.1-2020.12.

面向工业应用的大数据分析理论与关键技术，自然科学-浙江两化融合联合基金，主要参与人，2016.1-2019.12.

基于MapReduce的快速查询和分析关键技术的研究，国家青年自然科学基金，项目负责人，时间：2012.1-2014.12.

基于数据挖掘的桥梁隧道安全预警平台关键技术研究和示范应用。上海市2013年度“科技创新行动计划”信息技术领域项目，主要参与人.

主要论文

Zeyu Wang, Qitong Wang, Xiaoxing Cheng, Peng Wang, Themis Palpanas, Wei Wang, Steiner-Hardness: A Query Hardness Measure for Graph-Based ANN Indexes, VLDB 2025, London, UK. (Accepted)

Xiaolei Chen, Jie Shi, Jia Chen, Peng Wang, Wei Wang; High-precision Online Log Parsing with Large Language Models, ICSE-Companion 2024.

Xu Zhang, Zhipeng Xie, Haiyang Yu, Qitong Wang, Peng Wang, Wei Wang; Enhancing Adaptive Deep Networks for Image Classification via Uncertainty-aware Decision Fusion, ACM Multimedia 2024.

Zeyu Wang, Qitong Wang, Peng Wang, Themis Palpanas, Wei Wang; DumpyOS: A Data-Adaptive Multi-ary Index for Scalable Data Series Similarity Search, VLDB Journal, 2024.

H Xiong, H Zhang, Z Wang, Z He, P Wang, XS Wang; DCIVET: Exploring Compact Index for Variable-Length Subsequence Matching on Time Series, VLDB, 2024.

X Han, H Xiong, Z He, P Wang, C Wang, XS Wang; Akane: Perplexity-Guided Time Series Data Cleaning, Proceedings of the ACM on Management of Data 2 (3), 1-26, 2024.

Xiaolei Chen, Jia Chen, Peng Wang, Wei Wang, AS-Parser: Log Parsing Based on Adaptive Segmentation. SIGMOD 2024.

Xu Zhang; Zhengang Huang; Yunzhi Wu; Xun Lu; Erpeng Qi; Yunkai Chen; Zhongya Xue; Peng Wang; Wei Wang, Self-Adaptive Scale Handling for Forecasting Time Series with Scale Heterogeneity. ICASSP 2024.

Zeyu Wang, Zhenying He, Peng Wang, Yang Wang, Wei Wang, Static and Streaming Discovery of Maximal Linear Representation Between Time Series. TKDE 2023.

Hanbo Zhang, Jiangxin Li, Shen Liang, Peng Wang, Themis Palpanas, Chen Wang, Wei Wang, Haoxuan Zhou, Jianwei Song, Wen Lu. Towards a Generic Framework for Mechanism-guided Deep Learning for Manufacturing Applications. SIGKDD 2023.

Z Gong, Q Liu, J Ding, X Wang, P Wang. A Novel Multi-dimensional Time-series Data Anomaly Detection Model Based on Generative Adversarial Network Aided Autoencoder. IFAC-PapersOnLine 56 (2), 8085-8090, 2023.

Z Wang, P Wang, T Palpanas, W Wang. Graph-and Tree-based Indexes for High-dimensional Vector Similarity Search: Analyses, Comparisons, and Future Directions. IEEE Data Eng. Bull. 46 (3), 3-21, 2023.

Zeyu Wang, Qitong Wang, Peng Wang, Themis Palpanas, Wei Wang, Dumpy: A Compact and Adaptive Index for Large Data Series Collections, SIGMOD 2023.

Jing Zhao, Peng Wang, Bo Tang, Lu Liu, Chen Wang, Wei Wang, Jianmin Wang, Constructing Compact Time Series Index for Efficient Window Query Processing, ICDE 2022.

Shuye Pan, Peng Wang, Chen Wang, Wei Wang, Jianmin Wang, NLC: Search Correlated Window Pairs on Long Time Series, VLDB 2022 .

Mingming Zhang, Peng Wang, Wei Wang, Efficient Consensus Motif Discovery of All Lengths in Multiple Time Series, DASFAA 2022.

Fan Qiao, Peng Wang, Wei Wang, An Interpretable Time Series Classification Approach Based on Feature Clustering., DASFAA 2022.

Jia Chen, Peng Wang, Wei Wang, Online Summarizing Alerts through Semantic and Behavior Information, ICSE 2022.

Yuqian Zhu, Jiaying Deng, Peng Wang, Wei Wang, ML-Parser: An Efficient and Accurate Online Log Parser, Journal of Computer Science and Technology, JCST 2021.

Yi Lu, Peng Wang, Bo Tang, Shen Liang, Wei Wang, GRAB: Finding Time Series Natural Structures via A Novel Graph-Based Scheme, ICDE 2021.

Chen Wang, Xiangdong Huang, Jialin Qiao, Tian Jiang, Lei Rui, Jinrui Zhang, Rong Kang, Julian Feinauer, Kevin A McGrail, Peng Wang, Diaohan Luo, Jun Yuan, Jianmin Wang, Jiaguang Sun, Apache IoTDB: time-series database for internet of things VLDB 2020.

Hanbo Zhang, Peng Wang, Zicheng Fang, Zeyu Wang, Wei Wang, ELIS++: A Shapelet Learning Approach for Accurate and Efficient Time Series Classification, WWW Journal 2020.

Jia Chen, Peng Wang, Fan Qiao, Shiqing Du, Wei Wang, PLQ: An Efficient Approach to Process Pattern based Log Query. Journal of Computer Science and Technology, JCST 2020.

Jia Chen, Peng Wang, Shiqing Du, Wei Wang, Log Pattern Mining for Distributed System Maintenance, COMPLEXITY 2020.

Jiaye Wu, Peng Wang, Ningting Pan, Chen Wang, Wei Wang, Jianmin Wang, KV-match: A Subsequence Matching Approach Supporting Normalization and Time Warping, ICDE 2019.

Kefeng Feng, Jiaye Wu, Peng Wang, Wei Wang, MVS-match: An Efficient Subsequence Matching Approach Based on the Series Synopsis, DASFAA 2019.

Zicheng Fang，Peng Wang，Wei Wang，Efficient Learning Interpretable Shapelets for Accurate Time Series Classification, ICDE 2018.

Jiaye Wu, Yang Wang, Peng Wang, Jian Pei, Wei Wang, Finding Maximal Significant Linear Representation between Long Time Series, ICDM 2018.

Jinghua Wang, Qiuhong Li, Zhongsheng Li, Peng Wang, Yang Wang, Wei Wang, Ningting Pan, Mingmin Chi, Similarity Join on Time Series by Utilizing a Dynamic Segmentation Index, Knowledge and Information Systems, KAIS 2018.

Xiaqing Wang, Zicheng Fang, Peng Wang, Ruiyuan Zhu, and Wei Wang， A Distributed Multi-level Composite Index for KNN Processing on Long Time Series, DASFAA 2017.

Qiuhong Li, Peng Wang, Yang Wang, Wei Wang, Yimin Liu, Jiaye Wu, Danyang Dou, Clustering Time Series Utilizing a Dimension Hierarchical Decomposition Approach, DASFAA 2017.

Qiuhong Li, Peng Wang, Wei Wang, Hao Hu, Zhongsheng Li, Junxian Li, An Efficient K-means Clustering Algorithm On MapReduce, DASFAA 2014.

Hao Hu, Mingxi Zhang, Zhenying He, Peng Wang, Wei Wang, Chengfei Liu, Topical Presentation of Search Results on Database, DASFAA 2014.

Yang Wang, Peng Wang, Jian Pei, Wei Wang, Sheng Huang: A Data-adaptive and Dynamic Segmentation Index for Whole Matching on Time Series, PVLDB 2013.

Peng Wang, Haixun Wang, Wei Wang: Finding semantics in time series, SIGMOD 2011.

Peng Wang, Haixun Wang, Majin Liu, Wei Wang: An algorithmic approach to event summarization, SIGMOD 2010.

Huisheng Zhu, Peng Wang, Xianmang He, Yujia Li, Wei Wang, Baile Shi. Efficient Episode Mining with Minimal and Non-overlapping Occurrences, ICDM 2010.

Peng Wang, Haixun Wang, Xiaochen Wu, Wei Wang, Baile Shi，A Low Granularity Classifier for Data Streams with Concept Drifts and Biased Class Distribution，IEEE Transactions on Knowledge and Data Engineering, Volume 19, Issue 9. 2007 Page(s):1202-1213.

Peng Wang, Haixun Wang, Wei Wang, Baile Shi, Philip S. Yu, LOCI: Load Shedding through Class-Preserving Data Acquisition, ICDM 2006.

Peng Wang, Haixun Wang, Xiaochen Wu, Wei Wang, Baile Shi: On Reducing Classifier Granularity in Mining Concept-Drifting Data Streams, ICDM 2005.




报告讲座

《关于智能运维中算法落地的一些思考》，华为云联创营云上综合治理班，2022/09/04.

《算法落地探究：如何让智能运维更智能》，Gdevops全球敏捷运维峰会，广州，2022/6/17.

《智能运维的实用性和易用性探索》，GOPS全球运维大会，2021/05/21.