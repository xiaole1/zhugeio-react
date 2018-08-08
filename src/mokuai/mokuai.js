import React from 'react';
import Case_wanxue from  './img/case-wanxue.png';

export default class Jypx extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-12 case-education">
                            <h1 id="edu">教育培训</h1>
                            <p>万学教育集团专注为18岁以上人群提供学业与职业高端培训服务的中国龙头教育机构，万学成功开发高水准的深度学习技术，掌握革命性先进教育体系大幅提升了学习效率，在考研、职业、创业等复杂教育领域创造了行业卓越一流的教学成果，荣获了上百项大奖。诸葛io为公司旗下的超级学习系统，CVC双创APP及相关网站的产品优化上起到了重要作用。</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <p>诸葛io提供的用户行为数据分析，帮助我们在产品功能和运营策略的制定上提供了可靠的数据支持。而在产品改进与调整上，诸葛io提供了用户分组、漏斗分析等功能帮我们精准的定位问题，为学生提供了更好的产品体验和学习体验。希望诸葛io会越来越好。</p>
                            <div>-------张炜康/产品总监</div>
                        </div>
                        <div className="col-lg-6">
                            <img src={Case_wanxue} />
                        </div>
                    </div>
                </div>
            <div>
                <div className="col-lg-12 case-education">
                    <h1 id="retial">零售电商</h1>
                    <p>食行生鲜是一家专业的生鲜电子商务平台运营企业，首创生鲜C2B2F模式，通过用户到食行生鲜再到Farm/Factory， 走反向定制路线，通过订单式采购，降低损耗，守住成本优势。2016年下半年，食行生鲜与诸葛io合作， 建立“运营驾驶舱”机制。一个品类运营的专业公司（食行生鲜）与一个数据分析的 技能公司（诸葛io）结合，提供业务增长推动力。</p>
                </div>
                <div className="container">
                    <div className="row">
                            <div className="col-lg-6">
                                <p>基于行为数据的采集、分析到最终的数据应用，对业务增长有着巨大价值，特别是通过诸葛io的智能触达功能，我们在活动推广和转化促进上做了很多尝试，确实带来不小的增长，运营效率和用户体验都大幅提升了。</p>
                                <div>-------张洪良/食行生鲜CEO</div>
                            </div>
                            <div className="col-lg-6">
                                <img src={Case_wanxue} />
                            </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="col-lg-12 case-education">
                    <h1 id="financial">金融服务</h1>
                    <p>成立仅4年的向上金服，在经历了P2P行业的大洗牌后依然保持稳定增长，在近日上线平安银行存管后， 成为了行业中杀出的一匹黑马。向上金服是最早一批使用诸葛数据分析平台的金融客户， 见证了数据在业务效率提升以及与人工智能在产品创新方面的尝试。</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <p>诸葛io提供的事件数据采集、用户分组、各环节漏斗分析等功能简单易用，灵活交叉分析能力强，帮助我们一线业务人员便捷地分析用户行为，进而洞察用户，为制定运营增长策略提供了数据支撑</p>
                        <div>-------陈艳娇/向上金服产品总监</div>
                    </div>
                    <div className="col-lg-6">
                        <img src={Case_wanxue} />
                    </div>

                </div>
            </div>
            <div>
                <div className="col-lg-12 case-education">
                    <a id="jy"></a>
                    <h1 id="content">新媒体内容</h1>
                    <p>Flipboard以精致阅读体验闻名，本着品质阅读，让用户享受优质内容，Flipboard不断的聚焦阅读属性，回归 「让新闻好看」的核心使命，7月Flipboard面向中国市场上架中文版本，并有了中文名“红板报”。 诸葛io协助Flipboard团队尽快完成本地化后的数据平台构建和探索，获取高质量用户， 为后续用户的激活、转化等运营决策提供数据依据，通过数据 将企业每个人凝聚起来，Flipboard中国战车不断前行。</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <p>基于诸葛io的看板功能，红板报团队实现市场、运营、产品、设计、数据等部门的实时数据监控和深度下钻的分析需求，团队的每一个人轻松实现不仅关注个人指标，更关注多部门协作的复合指标，在提高了分析的效率的同时，降低了沟通的成本，也让各部门的衔接更流畅，团队正因数据而战斗力Max</p>
                        <div>-------刘舒/Flipboard产品总监</div>
                    </div>
                    <div className="col-lg-6">
                        <img src={Case_wanxue} />
                    </div>

                </div>
            </div>
        </div>
        )
    }
}
